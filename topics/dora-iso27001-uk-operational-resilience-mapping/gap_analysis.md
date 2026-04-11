# Gap Analysis — DORA Residual Obligations for ISO 27001-Certified, UK ORF-Compliant Firms

## Executive Summary

A UK financial services firm holding ISO/IEC 27001:2022 certification and meeting the UK ORF compliance deadline (31 March 2025) has a substantial foundation for DORA. The majority of DORA's technical security controls — access management, malware protection, vulnerability management, logging and monitoring, backup, and incident response process architecture — are addressed by a mature ISO 27001 ISMS. UK ORF's scenario testing, business service mapping, and board governance requirements reduce the Pillar 1 and Pillar 3 gaps further.

The primary residual gaps requiring dedicated DORA compliance work fall into five areas: board ICT governance formalisation, prescriptive incident notification timelines, the Register of Information for ICT third-party arrangements, mandatory ICT contractual clauses, and the TLPT programme for qualifying firms. These gaps are process and documentation obligations rather than technical control deficiencies — they require governance decisions, template development, and contract review programmes.

This document identifies those gaps, assesses the effort required to close them, and provides the recommended actions.

---

## What You Likely Already Have

The following DORA requirements are substantially covered by ISO 27001 certification and UK ORF compliance. No additional action is required in these areas beyond confirming your existing controls satisfy the relevant DORA articles.

| DORA Requirement | Article | Existing Coverage | Confidence |
|---|---|---|---|
| ICT security policies covering protection, prevention, access management | Art. 9 | ISO 27001 A.5.1, A.5.15, A.5.16, A.8.7, A.8.8, A.8.9, A.8.20, A.8.24 | High |
| Access management and privileged access controls | Art. 9(4)(b) | ISO 27001 A.5.15–A.5.18, A.8.2, A.8.5 | High |
| Malware protection | Art. 9(4)(c) | ISO 27001 A.8.7 | High |
| Vulnerability management and patch management | Art. 9(4)(e) | ISO 27001 A.8.8 | High — verify timeliness documentation |
| Logging and monitoring of ICT activities | Art. 10 | ISO 27001 A.8.15, A.8.16 | High — verify coverage extends to all critical function systems |
| Incident response process — detection, assessment, response | Art. 17 | ISO 27001 A.5.24, A.5.25, A.5.26 | High |
| Evidence collection | Art. 17(4) | ISO 27001 A.5.28 | High |
| Post-incident learning and root cause analysis | Art. 13, Art. 19(1)(c) | ISO 27001 A.5.27 | High |
| Threat intelligence | Art. 13(2) | ISO 27001 A.5.7 | High |
| Business continuity and ICT recovery planning | Art. 11 | ISO 27001 A.5.29, A.5.30; UK ORF SS1/21 scenario testing | High — verify ICT-layer recovery plan exists alongside BC plan |
| Scenario testing of critical functions | Art. 24–25 (scenario component) | ISO 27001 A.5.35; UK ORF SS1/21 scenario testing | High for scenario component; gap remains for TLPT |
| Capacity management | Art. 7(2) | ISO 27001 A.8.6 | High |
| Supplier security policy and due diligence process | Art. 28(1)–(4) | ISO 27001 A.5.19, A.5.21; FCA SYSC 8 | High — gaps in concentration risk and contractual clause detail |
| Supplier agreement security provisions | Art. 30 (partially) | ISO 27001 A.5.20; FCA SYSC 8.1.8R | Partial — see gap items 4 and 5 below |
| Information sharing | Art. 45 | ISO 27001 A.5.7, A.5.6 | High — voluntary only |
| Encryption and cryptography | Art. 9(4) | ISO 27001 A.8.24 | High |
| Configuration management | Art. 9(4) | ISO 27001 A.8.9 | High |
| Network security | Art. 9(4) | ISO 27001 A.8.20, A.8.21, A.8.22 | High |

---

## Residual Gap Table

| Gap | DORA Requirement | ISO 27001 Coverage | UK ORF Coverage | Residual Gap | Recommended Action |
|---|---|---|---|---|---|
| **1. Board ICT governance** | Management body approval and personal accountability for ICT risk framework, digital operational resilience strategy, and ICT budget (Art. 5) | ISO 27001 Clause 5.1 requires top management commitment — not board-level personal accountability | UK ORF requires board ownership of important business services and impact tolerances — provides partial coverage | ISO 27001 and UK ORF do not require the specific personal accountability for ICT risk that DORA Art. 5 creates, nor do they require a named "digital operational resilience strategy" | Formalise ICT risk as a standing board agenda item. Assign named board member accountability for ICT risk oversight. Create a "Digital Operational Resilience Strategy" document endorsed by the board. Document board ICT competency or training. |
| **2. Annual mandatory review of ICT risk management framework** | ICT risk management framework reviewed at least annually or after a major ICT-related incident (Art. 6(1)) | ISO 27001 requires periodic management review but does not mandate annual frequency | No direct UK ORF equivalent | ISO 27001's review frequency is determined by the organisation. DORA creates a hard minimum annual cycle and an event-triggered review obligation | Establish an annual DORA-specific review cycle for the ICT risk management framework, independent of the ISO 27001 management review schedule. Document the trigger for event-driven reviews. |
| **3. ICT function-level RTO and RPO** | RTO and RPO defined for each critical or important function and supporting ICT system (Art. 12) | ISO 27001 A.5.30 covers ICT readiness for business continuity but does not require function-level RTO/RPO | UK ORF impact tolerances are set at the business service level — not the ICT function/system level | UK ORF impact tolerances are RTOs at the service layer. DORA requires RTOs to be cascaded to the ICT layer. Gap is in granularity, not concept. | Extend the UK ORF important business service mapping downward to the ICT system and process layer. Define RTO and RPO for each ICT system supporting a critical or important function. Document these in the ICT risk management framework. |
| **4. Backup isolation and documented restoration testing** | Backups must be isolated from the primary ICT environment and restoration tested regularly (Art. 12(3)–(5)) | ISO 27001 A.8.13 covers backup policy | No direct UK ORF equivalent | ISO 27001 does not specify backup isolation architecture or require documented restoration testing with evidence | Document backup isolation architecture (physical or logical separation from production). Establish an annual restoration test schedule for critical function backups. Retain test evidence. |
| **5. Incident classification using DORA Art. 18 criteria** | Classification of incidents as "major" using six defined criteria: clients affected, duration, geographical spread, data losses, service criticality, economic impact (Art. 18) | ISO 27001 A.5.25 covers event assessment but does not prescribe criteria | No direct UK ORF equivalent — FCA uses "material" threshold without prescriptive criteria | The six-criteria classification matrix is not present in ISO 27001 or UK ORF frameworks | Build an Art. 18 classification procedure (or integrate into existing incident management process). Map the six DORA criteria to specific thresholds relevant to the firm's services and client base. |
| **6. Regulatory incident notification — hard timelines** | Initial notification within 4 hours of classification as major (and no later than 24 hours from detection); intermediate at 72 hours; final at 1 month (Art. 19) | ISO 27001 A.5.24 covers incident management process — no regulatory notification timelines | FCA SUP 15.3 "immediately" — principles-based; no fixed clock | The 4-hour / 72-hour / 1-month structure requires a specific notification workflow with named accountable owner, pre-drafted templates, and out-of-hours escalation capability | Develop an Art. 19 notification workflow. Create pre-populated initial, intermediate, and final notification templates. Appoint a named regulatory notification accountable owner. Establish out-of-hours escalation path for major incidents. Maintain a notification tracking log. |
| **7. Crisis communications plan** | Named ICT crisis communications function and documented plans for clients, counterparts, and public (Art. 14) | ISO 27001 A.5.26 covers incident response but does not mandate separate external crisis communication procedures | No direct UK ORF equivalent | Crisis communication plan covering external stakeholders is not required by ISO 27001 or UK ORF in the DORA-specific form | Create a crisis communication plan as a standalone or appended document to the incident response plan. Name the ICT crisis communications role. Define communication procedures for clients, counterparties, media, and regulators. |
| **8. Register of Information** | Register of all ICT third-party service provider arrangements in ESA-prescribed format, submitted to competent authority on request (Art. 28(3)) | ISO 27001 A.5.9 requires an asset inventory — not equivalent to the DORA register format | No direct UK ORF equivalent | The Register of Information is a new, regulatory-grade artefact in a specific format. No existing control satisfies this | Build the Register of Information using the ESA-prescribed format and fields. Establish a maintenance process to keep it current. Integrate with supplier onboarding and offboarding workflows. |
| **9. ICT concentration risk assessment** | Assessment of concentration risk at entity level before entering critical ICT arrangements; ongoing monitoring (Art. 29) | ISO 27001 A.5.21 covers ICT supply chain security — not concentration risk specifically | No direct UK ORF equivalent | Concentration risk assessment methodology and documentation is not present in ISO 27001 or UK ORF | Define ICT concentration risk assessment criteria and methodology. Conduct an initial assessment across critical function ICT providers. Document findings and risk treatment. Integrate into annual supplier review cycle. |
| **10. Mandatory ICT contractual clauses — competent authority access and incident SLAs** | Art. 30 mandatory clauses including competent authority access rights (Art. 30(2)(d)–(e)) and incident notification SLAs compatible with the Art. 19 4-hour window (Art. 30(2)(i)) | ISO 27001 A.5.20 covers supplier agreement security provisions — generally, but not these specific clauses | FCA SYSC 8.1.8R covers audit rights for material outsourcing but not competent authority access | Competent authority access rights and incident notification SLAs aligned to DORA Art. 19 are not standard in existing contracts | Conduct a contract review of all ICT arrangements supporting critical or important functions. Create a DORA contract addendum or updated security schedule including: competent authority access rights, provider incident notification SLA (≤2 hours to enable firm's 4-hour submission), sub-contracting notification obligations, and TLPT participation rights. |
| **11. Digital operational resilience testing programme** | Formally documented testing programme scoped to critical functions, risk-based, annually reviewed (Art. 24) | ISO 27001 A.5.35 covers independent review; vulnerability testing is in scope of A.8.8 — not a documented programme | UK ORF scenario testing is closest equivalent but business-service-scoped | A standalone, board-endorsed Digital Operational Resilience Testing Programme document does not exist in ISO 27001 or UK ORF | Create a Digital Operational Resilience Testing Programme document. Define scope (critical functions), testing components (Art. 25 types), risk-based methodology, frequency, and governance. Get board endorsement. Include annual review. |
| **12. TLPT programme (qualifying firms only)** | Threat-led penetration testing at least every 3 years for qualifying firms; conducted using TIBER-EU or equivalent; results shared with competent authority (Art. 26) | No ISO 27001 equivalent | CBEST is the functional UK equivalent for systemically important firms | For firms qualifying under Art. 26(8) criteria that do not already conduct CBEST: establishing a TLPT programme is a new, material capability requirement | Determine whether the firm qualifies under Art. 26(8) criteria (in consultation with competent authority). If yes: establish TLPT programme, appoint qualified testers (Art. 27), conduct tri-annual TLPT, share results with competent authority. If CBEST-assessed: confirm competent authority recognition of CBEST as DORA-equivalent TLPT. |
| **13. Legacy system risk documentation** | Identification and documented risk management for end-of-life and legacy ICT systems (Art. 7(4)) | ISO 27001 A.8.8 covers vulnerability management but not specifically legacy system lifecycle risk | No direct UK ORF equivalent | Legacy system risks are not explicitly documented or risk-treated under ISO 27001 or UK ORF as a named category | Flag end-of-life and beyond-vendor-support systems in the ICT asset inventory. For each, document: the risk, the compensating controls in place, and the remediation plan (upgrade, replacement, or acceptance with enhanced monitoring). Include in the ICT risk management framework. |

---

## Priority Assessment

The following gaps are highest priority based on regulatory risk (deadline sensitivity, enforcement focus) and implementation effort:

| Priority | Gap | Regulatory Risk | Effort |
|---|---|---|---|
| 1 | Regulatory incident notification workflow (Gap 6) | High — Art. 19 non-compliance is directly observable; fixed timelines | Medium — template and workflow development |
| 2 | Register of Information (Gap 8) | High — likely to be an early supervisory information request | High — new artefact in prescribed format |
| 3 | Board ICT governance and digital operational resilience strategy (Gap 1) | High — Art. 5 sets the governance foundation; all other gaps depend on this | Medium — governance formalisation and document creation |
| 4 | Incident classification using Art. 18 criteria (Gap 5) | High — classification drives notification; incorrect classification = missed notification | Low-Medium — procedure update |
| 5 | DORA mandatory contractual clauses (Gap 10) | High — applies to all critical function contracts; non-negotiability requirement creates risk with hyperscale providers | High — contract review programme across critical function providers |
| 6 | ICT function-level RTO/RPO (Gap 3) | Medium — auditable in inspection; foundational for recovery planning | Medium — extension of existing UK ORF mapping exercise |
| 7 | Digital operational resilience testing programme (Gap 11) | Medium — testable in supervisory review | Medium — programme document creation |
| 8 | TLPT programme (Gap 12) — qualifying firms only | High (if qualifying) / Not applicable (if not qualifying) | High — new capability requirement for firms without CBEST |
| 9 | ICT concentration risk assessment (Gap 9) | Medium | Low-Medium — methodology development and one-time assessment |
| 10 | Backup isolation and restoration testing (Gap 4) | Medium | Low-Medium — architecture documentation and test scheduling |
| 11 | Crisis communications plan (Gap 7) | Medium | Low — addendum to existing incident response plan |
| 12 | Annual framework review cycle (Gap 2) | Low-Medium — governance process | Low — calendar and trigger documentation |
| 13 | Legacy system risk documentation (Gap 13) | Low-Medium | Low — asset inventory tagging and risk documentation |

---

## Approach to Closing Gaps

Work through the gaps in priority order. The following sequencing is recommended:

1. **Immediate (pre-supervisory inspection readiness):** Gaps 1, 5, 6 — governance, classification, and notification. These are the areas supervisors are most likely to examine early and where non-compliance is most visible.

2. **Short-term (within 90 days):** Gaps 3, 8, 11 — ICT function-level RTO/RPO, Register of Information, and testing programme. These require structured work but are achievable within a focused programme.

3. **Medium-term (within 180 days):** Gaps 4, 9, 10 — backup documentation, concentration risk, and contract review. Contract review is the most complex due to third-party dependency and negotiation timelines.

4. **Ongoing or condition-dependent:** Gap 12 (TLPT — only if qualifying, then treat as top priority). Gaps 2, 7, 13 — procedural additions to existing processes with lower complexity.
