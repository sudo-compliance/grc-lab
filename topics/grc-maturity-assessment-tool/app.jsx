import React, { useState, useEffect, useCallback } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { Moon, Sun, ChevronRight, ChevronLeft, Download, Copy, Check, RotateCcw, Shield, TrendingUp, AlertTriangle } from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const MATURITY_LEVELS = [
  { level: 1, name: 'Initial',     description: 'Ad hoc and reactive. No formalised processes.' },
  { level: 2, name: 'Developing',  description: 'Some documentation but inconsistent application.' },
  { level: 3, name: 'Defined',     description: 'Documented, approved, and consistently applied.' },
  { level: 4, name: 'Managed',     description: 'Measured, monitored, and reviewed with metrics.' },
  { level: 5, name: 'Optimising',  description: 'Continuous improvement driven by intelligence.' },
];

const DOMAINS = [
  {
    id: 'governance', name: 'Governance and Leadership',
    shortName: 'Governance',
    isoRef: 'Clause 5, A.5.1–A.5.4',
    description: 'Board oversight, policy framework, roles, and security resourcing.',
    questions: [
      { id: 'gov_q1', text: 'Is there a board-approved information security policy that is reviewed at least annually and communicated to all relevant parties?', action: 'Draft and obtain board approval for an information security policy, establishing an annual review cycle with documented distribution evidence.' },
      { id: 'gov_q2', text: 'Are information security roles and responsibilities formally defined, assigned to named individuals, and reviewed when organisational changes occur?', action: 'Create a RACI matrix for information security responsibilities and embed a review trigger into the HR change management process.' },
      { id: 'gov_q3', text: 'Does senior leadership receive regular (at least quarterly) reporting on security risk posture, incidents, and programme performance?', action: 'Establish a quarterly security dashboard report for senior leadership covering risk posture, incident trends, and programme KPIs.' },
      { id: 'gov_q4', text: 'Is the information security programme resourced with dedicated budget that is reviewed annually against the risk profile?', action: 'Initiate a formal annual security budget review process tied to the risk register, with a board-level line item for information security.' },
    ]
  },
  {
    id: 'risk', name: 'Risk Management',
    shortName: 'Risk Mgmt',
    isoRef: 'Clause 6.1, A.5.7–A.5.8',
    description: 'Risk assessment methodology, register maintenance, and formal risk acceptance.',
    questions: [
      { id: 'risk_q1', text: 'Is there a documented risk assessment methodology that is applied consistently across the organisation, with defined criteria for likelihood, impact, and risk appetite?', action: "Document a risk assessment methodology with explicit scoring criteria for likelihood and impact, and obtain leadership sign-off on the organisation's risk appetite statement." },
      { id: 'risk_q2', text: 'Is the risk register actively maintained, with risks reviewed at least quarterly and linked to specific controls and treatment plans?', action: 'Assign a risk register owner, establish a quarterly review cadence, and ensure each risk entry includes a linked control reference and treatment plan with target dates.' },
      { id: 'risk_q3', text: 'Are risk assessments performed for all significant changes (new systems, suppliers, business processes) before they go live?', action: 'Integrate a mandatory risk assessment gate into the change management and supplier onboarding processes, with a documented approval record.' },
      { id: 'risk_q4', text: 'Is residual risk formally accepted by named risk owners with documented rationale and review dates?', action: 'Implement a formal risk acceptance process requiring named ownership, documented rationale, and a maximum 12-month review date for all accepted residual risks.' },
    ]
  },
  {
    id: 'assets', name: 'Asset Management',
    shortName: 'Assets',
    isoRef: 'A.5.9–A.5.14',
    description: 'Asset inventory, data classification, handling procedures, and reconciliation.',
    questions: [
      { id: 'asset_q1', text: 'Is there a complete and current inventory of information assets (data, systems, applications, infrastructure) with assigned owners?', action: 'Build an asset inventory using automated discovery tooling, assign owners to each asset, and establish a process to update the register when assets are provisioned or decommissioned.' },
      { id: 'asset_q2', text: 'Is a data classification scheme defined, communicated, and applied consistently to determine handling requirements?', action: 'Publish a data classification scheme with clear labels (e.g., Public, Internal, Confidential, Restricted), train all staff, and apply labels to existing data repositories.' },
      { id: 'asset_q3', text: 'Are asset handling procedures (labelling, storage, transfer, disposal) documented and enforced based on classification?', action: 'Document handling procedures for each classification tier and validate enforcement through spot checks of storage locations, transfer methods, and disposal records.' },
      { id: 'asset_q4', text: 'Are asset inventories reconciled at least annually against actual infrastructure, with discrepancies investigated and resolved?', action: 'Schedule an annual asset inventory reconciliation exercise using network scanning and configuration management tooling, with a formal remediation process for discrepancies.' },
    ]
  },
  {
    id: 'access', name: 'Access Control and Identity',
    shortName: 'Access',
    isoRef: 'A.5.15–A.5.18, A.8.2–A.8.5',
    description: 'MFA, access reviews, joiner/mover/leaver process, and privileged access management.',
    questions: [
      { id: 'access_q1', text: 'Is MFA enforced for all privileged access, remote access, and access to systems processing sensitive data, with exceptions documented and reviewed quarterly?', action: 'Enforce MFA on all privileged, remote, and sensitive-data access paths immediately, logging any exceptions with compensating controls and a quarterly review date.' },
      { id: 'access_q2', text: 'Are user access rights reviewed at least every 6 months (or on role change) with evidence of revocations where access is no longer required?', action: 'Implement a semi-annual access review process with line manager sign-off and documented evidence of revocations, tracked in a centralised access governance log.' },
      { id: 'access_q3', text: 'Is there a documented joiner/mover/leaver process that ensures access is provisioned, modified, and revoked within defined SLAs?', action: 'Document and enforce a JML process with defined SLAs (e.g., leaver access revoked within 24 hours), integrated with HR system triggers and evidenced through audit logs.' },
      { id: 'access_q4', text: 'Are privileged accounts managed separately from standard accounts, with privileged sessions logged and monitored?', action: 'Separate privileged accounts from standard user accounts, deploy a Privileged Access Management (PAM) solution or equivalent logging, and review privileged session logs monthly.' },
    ]
  },
  {
    id: 'crypto', name: 'Cryptography and Data Protection',
    shortName: 'Crypto',
    isoRef: 'A.8.24–A.8.25, A.5.33–A.5.34',
    description: 'Encryption standards, key management, control validation, and regulated data protection.',
    questions: [
      { id: 'crypto_q1', text: 'Is data encrypted at rest and in transit using current standards (AES-256, TLS 1.2+) with documented key management procedures?', action: 'Audit all data stores and transmission channels for encryption compliance, remediate gaps, and document key management procedures including generation, rotation, and destruction.' },
      { id: 'crypto_q2', text: 'Is there a cryptographic policy that specifies approved algorithms, key lengths, and key lifecycle management (generation, distribution, storage, rotation, destruction)?', action: 'Publish a cryptographic policy specifying approved algorithms (e.g., AES-256, RSA-2048+, SHA-256+), prohibited algorithms, and key lifecycle requirements with ownership assigned.' },
      { id: 'crypto_q3', text: 'Are encryption controls validated through periodic testing (e.g., TLS configuration scanning, certificate lifecycle monitoring)?', action: 'Implement automated TLS scanning (e.g., SSL Labs or equivalent) on a quarterly basis and deploy certificate expiry monitoring with alerting at 60 and 30 days.' },
      { id: 'crypto_q4', text: 'Is personal and regulated data subject to specific protection controls (pseudonymisation, tokenisation, or field-level encryption) beyond transport/storage encryption?', action: 'Identify all regulated data fields (PII, PCI, health data) and implement tokenisation or pseudonymisation at the application layer, with controls validated through a data protection impact assessment.' },
    ]
  },
  {
    id: 'operations', name: 'Operations Security',
    shortName: 'Operations',
    isoRef: 'A.8.6–A.8.16',
    description: 'Change management, vulnerability management, logging and monitoring, and environment separation.',
    questions: [
      { id: 'ops_q1', text: 'Are change management procedures documented and enforced, with security impact assessed for all changes to production systems?', action: 'Enforce a mandatory security impact assessment as a gate in the change approval process, with documented approvals retained for all production changes.' },
      { id: 'ops_q2', text: 'Is vulnerability management performed against a defined scan schedule, with findings triaged by risk and remediated within SLA?', action: 'Establish a vulnerability scan schedule covering all production systems, implement a risk-based triage model, and track remediation against defined SLAs (e.g., Critical: 24h, High: 14 days).' },
      { id: 'ops_q3', text: 'Are security events centrally logged, retained per policy, and monitored (automated alerting or SOC review) with defined response procedures?', action: 'Deploy centralised log management with defined retention periods, configure automated alerting for critical security events, and document response procedures for each alert type.' },
      { id: 'ops_q4', text: 'Are production, development, and testing environments separated, with controls preventing unauthorised data flow between them?', action: 'Enforce technical separation between production, development, and test environments via network segmentation, and prohibit the use of real production data in non-production environments.' },
    ]
  },
  {
    id: 'incident', name: 'Incident Management',
    shortName: 'Incidents',
    isoRef: 'A.5.24–A.5.28, A.6.8',
    description: 'Incident response planning, testing, classification, and post-incident review.',
    questions: [
      { id: 'inc_q1', text: 'Is there a documented incident response plan that defines classification tiers, escalation paths, roles, and communication procedures?', action: 'Develop and publish an incident response plan covering severity classification (P1–P4), named roles, escalation contacts, and communication templates for internal and external stakeholders.' },
      { id: 'inc_q2', text: 'Has the incident response plan been tested (tabletop or simulation) within the past 12 months, with lessons learned documented and tracked?', action: 'Schedule a tabletop exercise within the next quarter involving IT, legal, communications, and senior leadership, and track all identified improvements to completion.' },
      { id: 'inc_q3', text: 'Are incidents classified using a repeatable severity model, with regulatory notification triggers defined and rehearsed?', action: 'Implement a severity classification model with explicit criteria for each tier and document the regulatory notification thresholds (e.g., DORA Art. 19, FCA SUP 15.3) with named owners and rehearsed workflows.' },
      { id: 'inc_q4', text: 'Are post-incident reviews conducted for all P1/P2 incidents, with root cause analysis and remediation actions tracked to completion?', action: 'Mandate post-incident reviews for all P1 and P2 incidents within 5 business days of closure, with root cause analysis and tracked remediation actions reported to senior leadership.' },
    ]
  },
  {
    id: 'continuity', name: 'Business Continuity and Resilience',
    shortName: 'Continuity',
    isoRef: 'A.5.29–A.5.30, DORA Art. 11–12',
    description: 'BCP coverage, backup testing, IBS mapping, and impact tolerance validation.',
    questions: [
      { id: 'bc_q1', text: "Is there a business continuity plan that covers the organisation's critical services, with defined RTO and RPO targets?", action: 'Document a business continuity plan for all critical services, define RTO and RPO targets for each, and obtain executive sign-off.' },
      { id: 'bc_q2', text: 'Are backup and recovery procedures tested at least annually, with test results documented and gaps remediated?', action: 'Schedule annual backup restoration tests for all critical systems, document the results including any failures, and track remediation of identified gaps to completion.' },
      { id: 'bc_q3', text: 'Are important business services mapped to their supporting technology, people, and third-party dependencies?', action: 'Conduct a service dependency mapping exercise for each important business service, documenting supporting technology, people, and third-party dependencies with single points of failure identified.' },
      { id: 'bc_q4', text: "Has the organisation defined impact tolerances for its important business services and tested its ability to remain within them during severe but plausible scenarios?", action: 'Define maximum tolerable disruption thresholds for each important business service and conduct at least one scenario test annually to validate the organisation can remain within those tolerances.' },
    ]
  },
  {
    id: 'tprm', name: 'Third-Party and Supply Chain Risk',
    shortName: 'Third Party',
    isoRef: 'A.5.19–A.5.23, DORA Art. 28–30',
    description: 'TPRM process, contractual requirements, supplier register, and ongoing assurance.',
    questions: [
      { id: 'tprm_q1', text: 'Is there a documented third-party risk management process that includes pre-contract due diligence, risk-tiered assessment, and ongoing monitoring?', action: 'Implement a TPRM process with pre-contract security questionnaires, a risk scoring model that tiers suppliers by criticality, and a defined schedule for ongoing monitoring.' },
      { id: 'tprm_q2', text: 'Do contracts with ICT and data-processing suppliers include security requirements, audit rights, incident notification obligations, and exit provisions?', action: 'Review all critical supplier contracts against a mandatory clause checklist (security requirements, audit rights, incident notification SLAs, exit and data return provisions) and remediate gaps.' },
      { id: 'tprm_q3', text: 'Is there a register of all third-party relationships that includes the services provided, data shared, and assessed risk tier?', action: 'Build a centralised third-party register covering all suppliers, capturing services provided, data shared, contract renewal dates, and assessed risk tier — start with critical and high-risk suppliers.' },
      { id: 'tprm_q4', text: 'Are critical suppliers subject to periodic reassessment (at least annually) with evidence of control validation beyond self-attestation?', action: 'Establish an annual reassessment programme for critical suppliers requiring independent assurance evidence (e.g., ISO 27001 certificate, SOC 2 report, or right-to-audit exercise) rather than self-attestation alone.' },
    ]
  },
  {
    id: 'compliance', name: 'Compliance and Assurance',
    shortName: 'Compliance',
    isoRef: 'A.5.31–A.5.36',
    description: 'Regulatory obligations inventory, independent audit, remediation tracking, and policy review.',
    questions: [
      { id: 'comp_q1', text: 'Is there an inventory of applicable legal, regulatory, and contractual obligations, with mapped controls and assigned owners?', action: 'Create a compliance obligations register covering all applicable regulations (e.g., UK GDPR, PCI DSS, FCA rules), map each obligation to a control, and assign a named owner.' },
      { id: 'comp_q2', text: 'Is the security programme independently audited or reviewed (internal audit, external certification, or third-party assessment) at least annually?', action: 'Commission an independent security review or certification assessment annually (ISO 27001 audit, penetration test, or internal audit programme) and publish findings to senior leadership.' },
      { id: 'comp_q3', text: 'Are compliance gaps tracked in a remediation register with defined owners, target dates, and escalation procedures for overdue items?', action: 'Implement a compliance remediation register with mandatory fields for owner, target date, and current status, and establish an escalation procedure that triggers at 30 days overdue.' },
      { id: 'comp_q4', text: 'Are policies and standards reviewed at least annually against changes in regulation, threat landscape, and business context?', action: 'Establish an annual policy review calendar, assign policy owners, and require each review to explicitly assess changes in regulation and threat landscape since the previous review.' },
    ]
  },
];

const MATURITY_BAND_LABELS = ['Initial', 'Developing', 'Defined', 'Managed', 'Optimising'];
const MATURITY_COLORS = {
  Initial:    '#e63946',
  Developing: '#f4845f',
  Defined:    '#e9c46a',
  Managed:    '#2a9d8f',
  Optimising: '#52b788',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getMaturityInfo(score) {
  if (score >= 4.5) return { label: 'Optimising', color: '#52b788', bg: 'rgba(82,183,136,0.08)', textColor: '#52b788' };
  if (score >= 3.5) return { label: 'Managed',    color: '#2a9d8f', bg: 'rgba(42,157,143,0.08)', textColor: '#2a9d8f' };
  if (score >= 2.5) return { label: 'Defined',    color: '#e9c46a', bg: 'rgba(233,196,106,0.08)', textColor: '#e9c46a' };
  if (score >= 1.5) return { label: 'Developing', color: '#f4845f', bg: 'rgba(244,132,95,0.08)',  textColor: '#f4845f' };
  return                     { label: 'Initial',    color: '#e63946', bg: 'rgba(230,57,70,0.08)',   textColor: '#e63946' };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function GRCMaturityAssessment() {
  const [currentView,        setCurrentView]        = useState('welcome');
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);
  const [currentQIndex,      setCurrentQIndex]      = useState(0);
  const [answers,            setAnswers]             = useState({});
  const [showDomainIntro,    setShowDomainIntro]    = useState(true);
  const [darkMode,           setDarkMode]            = useState(true);
  const [copyConfirmed,      setCopyConfirmed]       = useState(false);
  const [animKey,            setAnimKey]             = useState(0);

  // ── Fonts ──
  useEffect(() => {
    const id = 'grc-fonts';
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id  = id;
    link.rel = 'stylesheet';
    // Manrope across all weights — 200 for body, 800 for display
    link.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;700;800&display=swap';
    document.head.appendChild(link);
  }, []);

  // ── Design tokens ──
  const T = darkMode ? {
    bg:         '#0c0c0c',
    bgS:        '#141414',
    bgCard:     '#111111',
    text:       '#f0ebe0',
    textS:      '#6b6560',
    textMid:    '#9e9890',
    accent:     '#e63946',
    accentDim:  '#b02d38',
    border:     '#1e1e1e',
    borderMid:  '#2a2a2a',
    rule:       '#1e1e1e',
  } : {
    bg:         '#f5f0e8',
    bgS:        '#ece7de',
    bgCard:     '#ffffff',
    text:       '#0c0c0c',
    textS:      '#9e9080',
    textMid:    '#5a5550',
    accent:     '#e63946',
    accentDim:  '#b02d38',
    border:     '#ddd8ce',
    borderMid:  '#c8c3b8',
    rule:       '#ddd8ce',
  };

  // ── Font families ──
  const F = {
    display: "'Manrope', sans-serif",
    body:    "'Manrope', sans-serif",
  };

  // ── Scoring ──
  const getDomainScore = useCallback((di) => {
    const scores = DOMAINS[di].questions.map((_, qi) => answers[`d${di}_q${qi}`] || 0);
    const answered = scores.filter(s => s > 0);
    return answered.length ? answered.reduce((a, b) => a + b, 0) / answered.length : 0;
  }, [answers]);

  const getOverallScore = useCallback(() => {
    const ds = DOMAINS.map((_, i) => getDomainScore(i)).filter(s => s > 0);
    return ds.length ? ds.reduce((a, b) => a + b, 0) / ds.length : 0;
  }, [getDomainScore]);

  const totalAnswered  = Object.keys(answers).length;
  const answerKey      = (di, qi) => `d${di}_q${qi}`;
  const currentAnswer  = answers[answerKey(currentDomainIndex, currentQIndex)];

  // ── Navigation ──
  function handleSelectLevel(level) {
    setAnswers(prev => ({ ...prev, [answerKey(currentDomainIndex, currentQIndex)]: level }));
  }

  function handleNext() {
    const domain = DOMAINS[currentDomainIndex];
    if (currentQIndex < domain.questions.length - 1) {
      setCurrentQIndex(q => q + 1);
      setAnimKey(k => k + 1);
    } else if (currentDomainIndex < DOMAINS.length - 1) {
      setCurrentDomainIndex(d => d + 1);
      setCurrentQIndex(0);
      setShowDomainIntro(true);
      setAnimKey(k => k + 1);
    } else {
      setCurrentView('results');
    }
  }

  function handleBack() {
    if (showDomainIntro && currentDomainIndex > 0) {
      const prevDi = currentDomainIndex - 1;
      setCurrentDomainIndex(prevDi);
      setCurrentQIndex(DOMAINS[prevDi].questions.length - 1);
      setShowDomainIntro(false);
      setAnimKey(k => k + 1);
      return;
    }
    if (!showDomainIntro && currentQIndex === 0 && currentDomainIndex > 0) {
      setShowDomainIntro(true);
      setAnimKey(k => k + 1);
      return;
    }
    if (!showDomainIntro && currentQIndex > 0) {
      setCurrentQIndex(q => q - 1);
      setAnimKey(k => k + 1);
    }
  }

  function handleRestart() {
    setCurrentView('welcome');
    setCurrentDomainIndex(0);
    setCurrentQIndex(0);
    setAnswers({});
    setShowDomainIntro(true);
  }

  // ── Export ──
  const copySummary = useCallback(() => {
    const overall = getOverallScore();
    const domainLines = DOMAINS.map((d, i) => {
      const s = getDomainScore(i);
      return `  ${d.name}: ${s.toFixed(1)} (${getMaturityInfo(s).label})`;
    }).join('\n');
    const priorities = [...DOMAINS.map((d, i) => ({ name: d.name, score: getDomainScore(i) }))]
      .sort((a, b) => a.score - b.score).slice(0, 3)
      .map(d => `  - ${d.name}: ${d.score.toFixed(1)}`).join('\n');
    const text = [
      'GRC Maturity Assessment Results',
      `Date: ${new Date().toISOString().split('T')[0]}`,
      `Overall Score: ${overall.toFixed(1)} (${getMaturityInfo(overall).label})`,
      '',
      'Domain Scores:',
      domainLines,
      '',
      'Priority Improvement Areas:',
      priorities,
    ].join('\n');
    navigator.clipboard.writeText(text).then(() => {
      setCopyConfirmed(true);
      setTimeout(() => setCopyConfirmed(false), 2000);
    });
  }, [getOverallScore, getDomainScore]);

  const downloadJSON = useCallback(() => {
    const overall = getOverallScore();
    const data = {
      timestamp: new Date().toISOString(),
      model: 'GRC Maturity Assessment v1.0',
      overallScore: parseFloat(overall.toFixed(2)),
      overallLabel: getMaturityInfo(overall).label,
      domains: DOMAINS.map((d, i) => {
        const s = getDomainScore(i);
        return {
          id: d.id, name: d.name, isoRef: d.isoRef,
          score: parseFloat(s.toFixed(2)),
          label: getMaturityInfo(s).label,
          questions: d.questions.map((q, qi) => ({
            id: q.id, question: q.text,
            answer: answers[answerKey(i, qi)] || null,
            recommendedAction: q.action,
          })),
        };
      }),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `grc-maturity-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [getOverallScore, getDomainScore, answers]);

  // ── Shared micro-components ──
  const canGoBack = currentDomainIndex > 0 ||
    (!showDomainIntro && currentQIndex > 0) ||
    (!showDomainIntro && currentQIndex === 0 && currentDomainIndex > 0);

  // ═══════════════════════════════════════════════════════════════════════════
  // GLOBAL STYLES (injected once)
  // ═══════════════════════════════════════════════════════════════════════════
  const globalCSS = `
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes barGrow {
      from { width: 0; }
    }
    .grc-level-btn:hover {
      border-color: ${T.accent} !important;
    }
    .grc-primary-btn:hover {
      opacity: 0.85 !important;
    }
    .grc-ghost-btn:hover {
      border-color: ${T.textMid} !important;
      color: ${T.text} !important;
    }
    .grc-domain-item:hover {
      border-color: ${T.borderMid} !important;
      background: ${T.bgS} !important;
    }
    * { box-sizing: border-box; }
    ::selection { background: ${T.accent}; color: #fff; }
  `;

  // ── Button styles ──
  const btnPrimary = {
    fontFamily: F.display,
    fontWeight: 900,
    fontSize: 15,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    background: T.accent,
    color: '#fff',
    border: 'none',
    padding: '12px 28px',
    cursor: 'pointer',
    transition: 'opacity 0.15s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
  };

  const btnGhost = {
    fontFamily: F.body,
    fontWeight: 300,
    fontSize: 13,
    letterSpacing: '0.04em',
    background: 'transparent',
    color: T.textMid,
    border: `1px solid ${T.border}`,
    padding: '11px 20px',
    cursor: 'pointer',
    transition: 'border-color 0.15s, color 0.15s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
  };

  // ── Section label ──
  const sectionLabel = {
    fontFamily: F.display,
    fontWeight: 700,
    fontSize: 10,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: T.textS,
    marginBottom: 20,
  };

  // ── Horizontal rule ──
  const HR = () => (
    <div style={{ height: 1, background: T.rule, margin: '0' }} />
  );

  // ══════════════════════════════════════════════════════════════════════════
  // VIEW: WELCOME
  // ══════════════════════════════════════════════════════════════════════════

  if (currentView === 'welcome') {
    return (
      <div style={{ background: T.bg, minHeight: '100vh', fontFamily: F.body, color: T.text }}>
        <style>{globalCSS}</style>

        {/* ── Top strip ── */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '18px 32px', borderBottom: `1px solid ${T.rule}`,
        }}>
          <span style={{
            fontFamily: F.display, fontWeight: 700, fontSize: 11,
            letterSpacing: '0.22em', textTransform: 'uppercase', color: T.textS,
          }}>
            GRC Lab · Maturity Assessment
          </span>
          <button className="grc-ghost-btn" onClick={() => setDarkMode(!darkMode)} style={{ ...btnGhost, padding: '7px 14px' }}>
            {darkMode ? <Sun size={13} /> : <Moon size={13} />}
            <span style={{ fontSize: 11, letterSpacing: '0.06em' }}>{darkMode ? 'Light' : 'Dark'}</span>
          </button>
        </div>

        {/* ── Hero ── */}
        <div style={{ padding: '0 32px', maxWidth: 960, margin: '0 auto' }}>

          {/* Big editorial title block */}
          <div style={{
            padding: '64px 0 0',
            borderBottom: `1px solid ${T.rule}`,
            marginBottom: 48,
            animation: 'slideUp 0.5s ease both',
          }}>
            {/* Eyebrow */}
            <div style={{
              fontFamily: F.body, fontWeight: 300, fontSize: 13,
              letterSpacing: '0.06em', color: T.textS,
              marginBottom: 24,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <Shield size={12} color={T.accent} />
              <span>ISO/IEC 27001:2022 · DORA · UK FCA/PRA</span>
            </div>

            {/* Main headline — massive Barlow Condensed Black */}
            <div style={{
              fontFamily: F.display, fontWeight: 900,
              fontSize: 'clamp(64px, 12vw, 120px)',
              lineHeight: 0.9, letterSpacing: '-0.01em',
              color: T.text, textTransform: 'uppercase',
              marginBottom: 0,
            }}>
              GRC<br />
              <span style={{ color: T.accent }}>Maturity</span><br />
              Assessment
            </div>

            {/* Subhead — Barlow Light */}
            <p style={{
              fontFamily: F.body, fontWeight: 300, fontSize: 16,
              lineHeight: 1.7, color: T.textMid,
              maxWidth: 520, margin: '32px 0 48px',
            }}>
              Assess your organisation's security programme maturity across ten domains
              in under fifteen minutes. Produces scored output, gap identification,
              and exportable results.
            </p>
          </div>

          {/* ── Stats row — giant numerals ── */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            borderBottom: `1px solid ${T.rule}`,
            marginBottom: 48,
            animation: 'slideUp 0.5s 0.1s ease both', opacity: 0, animationFillMode: 'forwards',
          }}>
            {[
              { value: '10', label: 'Assessment domains' },
              { value: '40', label: 'Questions total' },
              { value: '5',  label: 'Maturity levels' },
            ].map((s, i) => (
              <div key={s.label} style={{
                padding: '32px 0 28px',
                borderRight: i < 2 ? `1px solid ${T.rule}` : 'none',
                paddingLeft: i > 0 ? 32 : 0,
              }}>
                <div style={{
                  fontFamily: F.display, fontWeight: 900,
                  fontSize: 'clamp(56px, 8vw, 88px)',
                  lineHeight: 1, color: T.text,
                  letterSpacing: '-0.02em',
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily: F.body, fontWeight: 300, fontSize: 13,
                  color: T.textS, marginTop: 6, letterSpacing: '0.04em',
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* ── Domain list ── */}
          <div style={{
            marginBottom: 48,
            animation: 'slideUp 0.5s 0.2s ease both', opacity: 0, animationFillMode: 'forwards',
          }}>
            <div style={{ ...sectionLabel, marginBottom: 16 }}>Assessment Domains</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 0 }}>
              {DOMAINS.map((d, i) => (
                <div
                  key={d.id}
                  className="grc-domain-item"
                  style={{
                    display: 'flex', alignItems: 'baseline', gap: 16,
                    padding: '14px 0',
                    borderBottom: `1px solid ${T.rule}`,
                    borderRight: (i % 2 === 0 && i < DOMAINS.length - 1) ? `1px solid ${T.rule}` : 'none',
                    paddingRight: i % 2 === 0 ? 24 : 0,
                    paddingLeft: i % 2 === 1 ? 24 : 0,
                    transition: 'background 0.1s',
                    cursor: 'default',
                  }}
                >
                  <span style={{
                    fontFamily: F.display, fontWeight: 900, fontSize: 13,
                    color: T.accent, minWidth: 24, letterSpacing: '0.04em',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div style={{ fontFamily: F.body, fontWeight: 400, fontSize: 14, color: T.text }}>
                      {d.name}
                    </div>
                    <div style={{
                      fontFamily: F.body, fontWeight: 300, fontSize: 11,
                      color: T.textS, letterSpacing: '0.03em', marginTop: 2,
                    }}>
                      {d.isoRef}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div style={{
            paddingBottom: 80,
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16,
            animation: 'slideUp 0.5s 0.3s ease both', opacity: 0, animationFillMode: 'forwards',
          }}>
            <button
              className="grc-primary-btn"
              onClick={() => setCurrentView('assessment')}
              style={{ ...btnPrimary, fontSize: 16, padding: '16px 36px' }}
            >
              Begin Assessment <ChevronRight size={16} />
            </button>
            <span style={{ fontFamily: F.body, fontWeight: 300, fontSize: 12, color: T.textS, letterSpacing: '0.04em' }}>
              All data stays in your browser. Nothing is stored or transmitted.
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // VIEW: ASSESSMENT
  // ══════════════════════════════════════════════════════════════════════════

  if (currentView === 'assessment') {
    const domain   = DOMAINS[currentDomainIndex];
    const question = domain.questions[currentQIndex];
    const progressPct = totalAnswered / 40;

    return (
      <div style={{ background: T.bg, minHeight: '100vh', fontFamily: F.body, color: T.text }}>
        <style>{globalCSS}</style>

        {/* ── Top navigation bar ── */}
        <div style={{ borderBottom: `1px solid ${T.rule}` }}>
          {/* Progress bar */}
          <div style={{ height: 2, background: T.bgS }}>
            <div style={{
              height: '100%', width: `${progressPct * 100}%`,
              background: T.accent, transition: 'width 0.5s ease',
            }} />
          </div>

          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '14px 32px',
          }}>
            {/* Domain counter */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span style={{
                fontFamily: F.display, fontWeight: 900, fontSize: 22,
                color: T.text, letterSpacing: '-0.01em',
              }}>
                {String(currentDomainIndex + 1).padStart(2, '0')}
              </span>
              <span style={{
                fontFamily: F.body, fontWeight: 300, fontSize: 11,
                color: T.textS, letterSpacing: '0.06em',
              }}>
                / 10 DOMAINS
              </span>
            </div>

            {/* Answered */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
              <span style={{
                fontFamily: F.display, fontWeight: 900, fontSize: 22, color: T.text,
              }}>
                {totalAnswered}
              </span>
              <span style={{ fontFamily: F.body, fontWeight: 300, fontSize: 11, color: T.textS, letterSpacing: '0.06em' }}>
                / 40 ANSWERED
              </span>
            </div>

            <button className="grc-ghost-btn" onClick={() => setDarkMode(!darkMode)} style={{ ...btnGhost, padding: '7px 14px' }}>
              {darkMode ? <Sun size={13} /> : <Moon size={13} />}
            </button>
          </div>
        </div>

        <div style={{ maxWidth: 700, margin: '0 auto', padding: '56px 32px 80px' }}>

          {/* ── Domain intro screen ── */}
          {showDomainIntro ? (
            <div key={`intro-${currentDomainIndex}`} style={{ animation: 'slideUp 0.3s ease both' }}>

              {/* Big domain number */}
              <div style={{
                fontFamily: F.display, fontWeight: 900,
                fontSize: 'clamp(80px, 14vw, 128px)',
                lineHeight: 1, letterSpacing: '-0.02em',
                color: T.bgS, marginBottom: -16,
                userSelect: 'none',
              }}>
                {String(currentDomainIndex + 1).padStart(2, '0')}
              </div>

              <HR />

              <div style={{ marginTop: 24, marginBottom: 8 }}>
                <div style={{
                  fontFamily: F.display, fontWeight: 900,
                  fontSize: 'clamp(28px, 5vw, 44px)',
                  lineHeight: 1.05, textTransform: 'uppercase',
                  letterSpacing: '0.01em', color: T.text,
                }}>
                  {domain.name}
                </div>
              </div>

              <div style={{
                display: 'inline-block',
                fontFamily: F.body, fontWeight: 300, fontSize: 11,
                letterSpacing: '0.08em', color: T.accent,
                borderBottom: `1px solid ${T.accent}`,
                paddingBottom: 2, marginBottom: 20,
              }}>
                {domain.isoRef}
              </div>

              <p style={{
                fontFamily: F.body, fontWeight: 300, fontSize: 15,
                lineHeight: 1.75, color: T.textMid,
                margin: '0 0 40px',
              }}>
                {domain.description}
              </p>

              {/* Question list preview */}
              <div style={{ marginBottom: 40 }}>
                <div style={{ ...sectionLabel }}>Questions in this domain</div>
                {domain.questions.map((q, qi) => {
                  const answered = !!answers[answerKey(currentDomainIndex, qi)];
                  return (
                    <div key={qi} style={{
                      display: 'flex', gap: 16, alignItems: 'flex-start',
                      padding: '14px 0',
                      borderBottom: qi < domain.questions.length - 1 ? `1px solid ${T.rule}` : 'none',
                    }}>
                      <span style={{
                        fontFamily: F.display, fontWeight: 900, fontSize: 13,
                        color: answered ? T.accent : T.textS,
                        minWidth: 22, paddingTop: 2,
                        letterSpacing: '0.04em',
                      }}>
                        {answered ? '✓' : `Q${qi + 1}`}
                      </span>
                      <span style={{
                        fontFamily: F.body, fontWeight: 300, fontSize: 13,
                        color: answered ? T.text : T.textMid,
                        lineHeight: 1.6,
                      }}>
                        {q.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                {canGoBack && (
                  <button className="grc-ghost-btn" onClick={handleBack} style={btnGhost}>
                    <ChevronLeft size={14} /> Back
                  </button>
                )}
                <button
                  className="grc-primary-btn"
                  onClick={() => { setShowDomainIntro(false); setAnimKey(k => k + 1); }}
                  style={btnPrimary}
                >
                  Begin Domain <ChevronRight size={14} />
                </button>
              </div>
            </div>

          ) : (
            /* ── Question screen ── */
            <div key={`q-${animKey}`} style={{ animation: 'slideUp 0.25s ease both' }}>

              {/* Domain name + question position */}
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'baseline', marginBottom: 32,
              }}>
                <span style={{
                  fontFamily: F.display, fontWeight: 700, fontSize: 11,
                  letterSpacing: '0.18em', textTransform: 'uppercase', color: T.textS,
                }}>
                  {domain.name}
                </span>
                <span style={{
                  fontFamily: F.display, fontWeight: 900, fontSize: 18,
                  color: T.textS, letterSpacing: '-0.01em',
                }}>
                  {currentQIndex + 1}
                  <span style={{ fontWeight: 300, fontSize: 14, color: T.textS }}>
                    &thinsp;/&thinsp;{domain.questions.length}
                  </span>
                </span>
              </div>

              {/* Question text — Barlow Light, generous size */}
              <p style={{
                fontFamily: F.body, fontWeight: 300,
                fontSize: 'clamp(16px, 2.6vw, 21px)',
                lineHeight: 1.7, margin: '0 0 40px',
                color: T.text,
              }}>
                {question.text}
              </p>

              <HR />

              {/* Maturity level options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 40 }}>
                {MATURITY_LEVELS.map((ml, idx) => {
                  const selected = currentAnswer === ml.level;
                  return (
                    <button
                      key={ml.level}
                      className="grc-level-btn"
                      onClick={() => handleSelectLevel(ml.level)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 0,
                        textAlign: 'left', cursor: 'pointer',
                        background: selected ? (darkMode ? 'rgba(230,57,70,0.06)' : 'rgba(230,57,70,0.04)') : 'transparent',
                        border: 'none',
                        borderBottom: `1px solid ${selected ? T.accent : T.rule}`,
                        borderLeft: `3px solid ${selected ? T.accent : 'transparent'}`,
                        padding: '20px 20px 20px 20px',
                        transition: 'all 0.15s',
                        width: '100%',
                      }}
                    >
                      {/* Level number — massive bold */}
                      <div style={{
                        fontFamily: F.display, fontWeight: 900,
                        fontSize: 40, lineHeight: 1,
                        color: selected ? T.accent : T.textS,
                        minWidth: 52, letterSpacing: '-0.02em',
                        transition: 'color 0.15s',
                      }}>
                        {ml.level}
                      </div>

                      {/* Name + description */}
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontFamily: F.display, fontWeight: 900,
                          fontSize: 16, textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: selected ? T.accent : T.text,
                          marginBottom: 3,
                          transition: 'color 0.15s',
                        }}>
                          {ml.name}
                        </div>
                        <div style={{
                          fontFamily: F.body, fontWeight: 300, fontSize: 13,
                          color: T.textS, lineHeight: 1.5,
                        }}>
                          {ml.description}
                        </div>
                      </div>

                      {selected && (
                        <Check size={14} color={T.accent} style={{ flexShrink: 0, marginLeft: 12 }} />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="grc-ghost-btn" onClick={handleBack} style={btnGhost}>
                  <ChevronLeft size={14} /> Back
                </button>
                <button
                  className="grc-primary-btn"
                  onClick={handleNext}
                  disabled={!currentAnswer}
                  style={{
                    ...btnPrimary,
                    opacity: currentAnswer ? 1 : 0.3,
                    cursor: currentAnswer ? 'pointer' : 'not-allowed',
                  }}
                >
                  {currentDomainIndex === DOMAINS.length - 1 && currentQIndex === DOMAINS[DOMAINS.length - 1].questions.length - 1
                    ? 'View Results' : 'Next'}
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // VIEW: RESULTS
  // ══════════════════════════════════════════════════════════════════════════

  const overall       = getOverallScore();
  const overallInfo   = getMaturityInfo(overall);
  const domainScores  = DOMAINS.map((d, i) => ({ ...d, index: i, score: getDomainScore(i) }));
  const sortedDomains = [...domainScores].sort((a, b) => a.score - b.score);
  const priorityDomains = sortedDomains.slice(0, 3);

  const radarData = DOMAINS.map((d, i) => ({
    domain: d.shortName,
    score:  parseFloat(getDomainScore(i).toFixed(2)),
    fullMark: 5,
  }));

  const distData = MATURITY_BAND_LABELS.map(label => ({
    label,
    count: domainScores.filter(d => getMaturityInfo(d.score).label === label).length,
    color: MATURITY_COLORS[label],
  }));

  return (
    <div style={{ background: T.bg, minHeight: '100vh', fontFamily: F.body, color: T.text }}>
      <style>{globalCSS}</style>

      {/* ── Top bar ── */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '14px 32px', borderBottom: `1px solid ${T.rule}`,
      }}>
        <span style={{
          fontFamily: F.display, fontWeight: 700, fontSize: 11,
          letterSpacing: '0.22em', textTransform: 'uppercase', color: T.textS,
        }}>
          GRC Lab · Maturity Assessment · Results
        </span>
        <button className="grc-ghost-btn" onClick={() => setDarkMode(!darkMode)} style={{ ...btnGhost, padding: '7px 14px' }}>
          {darkMode ? <Sun size={13} /> : <Moon size={13} />}
        </button>
      </div>

      <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 32px 80px' }}>

        {/* ── Hero score block ── */}
        <div style={{
          borderBottom: `1px solid ${T.rule}`,
          paddingBottom: 0,
          marginBottom: 56,
          animation: 'slideUp 0.4s ease both',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* Ghost watermark numeral */}
          <div style={{
            position: 'absolute', right: -20, top: -10,
            fontFamily: F.display, fontWeight: 900,
            fontSize: 'clamp(180px, 28vw, 280px)',
            lineHeight: 1, letterSpacing: '-0.04em',
            color: darkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.04)',
            userSelect: 'none', pointerEvents: 'none',
          }}>
            {overall.toFixed(1)}
          </div>

          <div style={{ padding: '48px 0 40px', position: 'relative' }}>
            <div style={{
              fontFamily: F.display, fontWeight: 700, fontSize: 10,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: T.textS, marginBottom: 12,
            }}>
              Overall Maturity Score
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
              {/* The giant score */}
              <div style={{
                fontFamily: F.display, fontWeight: 900,
                fontSize: 'clamp(80px, 16vw, 140px)',
                lineHeight: 1, letterSpacing: '-0.03em',
                color: overallInfo.color,
              }}>
                {overall.toFixed(1)}
              </div>

              <div style={{ paddingBottom: 12 }}>
                {/* Label badge */}
                <div style={{
                  fontFamily: F.display, fontWeight: 900,
                  fontSize: 28, textTransform: 'uppercase',
                  letterSpacing: '0.06em', color: overallInfo.color,
                  marginBottom: 6,
                }}>
                  {overallInfo.label}
                </div>
                <div style={{
                  fontFamily: F.body, fontWeight: 300, fontSize: 13,
                  color: T.textS, letterSpacing: '0.04em',
                }}>
                  out of 5.0 &nbsp;·&nbsp; {DOMAINS.length} domains assessed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Two-column: Radar + Domain table ── */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48,
          marginBottom: 56, alignItems: 'start',
          animation: 'slideUp 0.4s 0.1s ease both', opacity: 0, animationFillMode: 'forwards',
        }}>
          {/* Radar */}
          <div>
            <div style={{ ...sectionLabel }}>Maturity Profile</div>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
                <PolarGrid stroke={T.borderMid} strokeDasharray="2 4" />
                <PolarAngleAxis
                  dataKey="domain"
                  tick={{ fill: T.textS, fontSize: 10, fontFamily: F.display, fontWeight: 700, letterSpacing: 1 }}
                  tickLine={false}
                />
                <Radar
                  name="Score" dataKey="score"
                  stroke={T.accent} strokeWidth={2}
                  fill={T.accent} fillOpacity={0.12}
                  dot={{ r: 3, fill: T.accent, strokeWidth: 0 }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Domain scores — compact list */}
          <div>
            <div style={{ ...sectionLabel }}>Domain Scores</div>
            {sortedDomains.map((d, idx) => {
              const info = getMaturityInfo(d.score);
              const pct  = (d.score / 5) * 100;
              return (
                <div key={d.id} style={{
                  display: 'grid', gridTemplateColumns: '1fr auto',
                  gap: 12, alignItems: 'center',
                  padding: '11px 0',
                  borderBottom: `1px solid ${T.rule}`,
                }}>
                  <div>
                    <div style={{
                      fontFamily: F.body, fontWeight: 300, fontSize: 13,
                      color: T.text, marginBottom: 6,
                    }}>
                      {d.name}
                    </div>
                    <div style={{ height: 2, background: T.bgS, borderRadius: 1, overflow: 'hidden' }}>
                      <div style={{
                        height: '100%', width: `${pct}%`,
                        background: info.color, borderRadius: 1,
                        transition: 'width 1s ease',
                      }} />
                    </div>
                  </div>
                  <div style={{
                    fontFamily: F.display, fontWeight: 900,
                    fontSize: 22, letterSpacing: '-0.01em',
                    color: info.color, minWidth: 40, textAlign: 'right',
                  }}>
                    {d.score.toFixed(1)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Priority improvement areas ── */}
        <div style={{
          marginBottom: 56,
          animation: 'slideUp 0.4s 0.2s ease both', opacity: 0, animationFillMode: 'forwards',
        }}>
          <div style={{ ...sectionLabel }}>Priority Improvement Areas</div>

          {priorityDomains.map((d, idx) => {
            const info  = getMaturityInfo(d.score);
            const lowQs = d.questions.filter((q, qi) => (answers[answerKey(d.index, qi)] || 0) < 3);

            return (
              <div key={d.id} style={{
                marginBottom: 24,
                borderLeft: `3px solid ${info.color}`,
                paddingLeft: 24,
                animation: `slideUp 0.35s ${0.05 * idx}s ease both`,
                opacity: 0, animationFillMode: 'forwards',
              }}>
                {/* Domain header */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'baseline', marginBottom: 8, flexWrap: 'wrap', gap: 8,
                }}>
                  <div>
                    <div style={{
                      fontFamily: F.display, fontWeight: 900, fontSize: 20,
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                      color: T.text,
                    }}>
                      {d.name}
                    </div>
                    <div style={{
                      fontFamily: F.body, fontWeight: 300, fontSize: 11,
                      color: T.textS, letterSpacing: '0.04em', marginTop: 2,
                    }}>
                      {d.isoRef}
                    </div>
                  </div>
                  <div style={{
                    fontFamily: F.display, fontWeight: 900, fontSize: 36,
                    color: info.color, letterSpacing: '-0.02em',
                  }}>
                    {d.score.toFixed(1)}
                  </div>
                </div>

                {lowQs.length === 0 ? (
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    fontFamily: F.body, fontWeight: 300, fontSize: 13,
                    color: '#52b788',
                  }}>
                    <Check size={13} /> No critical gaps identified.
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
                    {lowQs.map((q, qi) => {
                      const qIdx      = d.questions.indexOf(q);
                      const score     = answers[answerKey(d.index, qIdx)] || 0;
                      const scoreInfo = getMaturityInfo(score);
                      return (
                        <div key={q.id}>
                          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 8 }}>
                            <span style={{
                              fontFamily: F.display, fontWeight: 900, fontSize: 16,
                              color: scoreInfo.color, minWidth: 20,
                              letterSpacing: '-0.01em',
                            }}>
                              {score}
                            </span>
                            <p style={{
                              margin: 0, fontFamily: F.body, fontWeight: 300, fontSize: 13,
                              color: T.textMid, lineHeight: 1.6,
                            }}>
                              {q.text}
                            </p>
                          </div>
                          <div style={{
                            marginLeft: 32,
                            background: T.bgS, padding: '10px 14px',
                            borderLeft: `2px solid ${T.accent}`,
                            display: 'flex', gap: 10, alignItems: 'flex-start',
                          }}>
                            <TrendingUp size={12} color={T.accent} style={{ marginTop: 2, flexShrink: 0 }} />
                            <p style={{
                              margin: 0, fontFamily: F.body, fontWeight: 300, fontSize: 12,
                              color: T.text, lineHeight: 1.65,
                            }}>
                              {q.action}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Score distribution ── */}
        <div style={{
          marginBottom: 56,
          animation: 'slideUp 0.4s 0.25s ease both', opacity: 0, animationFillMode: 'forwards',
        }}>
          <div style={{ ...sectionLabel }}>Score Distribution by Maturity Band</div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={distData} layout="vertical" margin={{ top: 0, right: 48, left: 88, bottom: 0 }}>
              <XAxis
                type="number" domain={[0, 10]}
                tick={{ fill: T.textS, fontSize: 10, fontFamily: F.body, fontWeight: 300 }}
                tickLine={false} axisLine={false}
              />
              <YAxis
                type="category" dataKey="label"
                tick={{ fill: T.textS, fontSize: 11, fontFamily: F.display, fontWeight: 700, letterSpacing: 1 }}
                tickLine={false} axisLine={false} width={84}
              />
              <Tooltip
                cursor={{ fill: darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)' }}
                contentStyle={{
                  background: T.bgCard, border: `1px solid ${T.border}`,
                  fontFamily: F.body, fontWeight: 300, fontSize: 12,
                  color: T.text,
                }}
                formatter={(v) => [`${v} domain${v !== 1 ? 's' : ''}`, 'Count']}
              />
              <Bar dataKey="count" radius={[0, 2, 2, 0]} maxBarSize={18}>
                {distData.map((entry) => (
                  <Cell key={entry.label} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* ── Export ── */}
        <div style={{
          borderTop: `1px solid ${T.rule}`, paddingTop: 40,
          animation: 'slideUp 0.4s 0.3s ease both', opacity: 0, animationFillMode: 'forwards',
        }}>
          <div style={{ ...sectionLabel }}>Export Results</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
            <button
              className="grc-primary-btn"
              onClick={copySummary}
              style={{ ...btnPrimary, minWidth: 160 }}
            >
              {copyConfirmed ? <Check size={14} /> : <Copy size={14} />}
              {copyConfirmed ? 'Copied!' : 'Copy Summary'}
            </button>
            <button className="grc-ghost-btn" onClick={downloadJSON} style={btnGhost}>
              <Download size={14} /> Download JSON
            </button>
            <button className="grc-ghost-btn" onClick={handleRestart} style={btnGhost}>
              <RotateCcw size={14} /> Restart
            </button>
          </div>
          <p style={{
            fontFamily: F.body, fontWeight: 300, fontSize: 11,
            color: T.textS, margin: 0, letterSpacing: '0.03em',
          }}>
            JSON export includes all questions, answers, scores, and recommended actions with a timestamp.
          </p>
        </div>
      </div>
    </div>
  );
}
