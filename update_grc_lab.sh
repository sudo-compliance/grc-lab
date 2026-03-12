#!/bin/bash
# ===========================================================================
# GRC Lab — Repo Update Script
# Run from the root of your local grc-lab repo clone.
# This script creates all outstanding files and updates existing ones,
# then stages everything for a single commit.
# ===========================================================================

set -e

echo "=== 1/7  Removing tracked .DS_Store ==="
git rm --cached .DS_Store 2>/dev/null || echo ".DS_Store not tracked — skipping"

echo "=== 2/7  Creating Vulnerability Triage Framework folder structure ==="
mkdir -p topics/vulnerability-triage-framework/examples
mkdir -p topics/vulnerability-triage-framework/data

echo "=== 3/7  Writing Vulnerability Triage Framework files ==="

# --- README.md ---
cat > topics/vulnerability-triage-framework/README.md << 'READMEEOF'
# Vulnerability Triage Framework

A risk-based vulnerability prioritisation framework that moves beyond raw CVSS scores to produce defensible, context-aware remediation decisions for SaaS web application environments.

---

## Overview

Most vulnerability management programmes generate more findings than any team can remediate simultaneously. The default response is to sort by CVSS and work downward, but this approach routinely misallocates effort: critical-scored findings on isolated internal hosts consume cycles while moderate-scored findings on internet-facing authentication boundaries go unaddressed.

This framework introduces a composite scoring model that combines four dimensions — asset exposure, exploitability, business impact, and compensating control coverage — to produce a triage outcome that reflects actual risk rather than theoretical severity.

---

## Framework Components

| Document | Purpose |
|---|---|
| `triage_model.md` | Composite scoring formula, decision thresholds, and critical trigger rules |
| `exploitability_factors.md` | Exploit availability, environmental attack complexity, and threat intelligence signal definitions |
| `asset_context.md` | Exposure, impact, and control gap rating schemes tied to asset classification |
| `sla_policy.md` | Time-bound remediation expectations, escalation triggers, and exception handling |
| `examples/` | Worked triage scenarios demonstrating the model against Nessus-style findings |
| `data/triage_register.csv` | Template register for recording triage decisions and remediation evidence |

---

## Triage Model Summary

**Composite Score = Exposure + Exploitability + Impact + ControlGap**

| Total | Outcome | Remediation Target |
|---|---|---|
| 9–12 | Fix Now | Within 24 hours |
| 5–8 | Fix Next | Within 14 calendar days |
| 0–4 | Accept (with conditions) | Document compensating controls; reassess within 90 days |

Critical triggers (CISA KEV listing, authentication infrastructure affected, regulated data at direct risk) override the numeric score and escalate to Fix Now regardless of total.

---

## Scanner Context

Worked examples use Nessus-style output against a SaaS web application environment. The scoring model is scanner-agnostic and can be adapted to Qualys, Microsoft Defender Vulnerability Management, or OpenVAS findings by mapping equivalent fields.

---

## How to Use

1. Review `triage_model.md` to understand the composite scoring formula and thresholds.
2. Use `exploitability_factors.md` and `asset_context.md` as reference when scoring individual findings.
3. Apply `sla_policy.md` to assign remediation timelines based on triage outcomes.
4. Record decisions in `data/triage_register.csv` for audit trail and metrics tracking.
5. Study the worked examples in `examples/` to see how the model handles common prioritisation challenges.

---

## Alignment

This framework supports the following control and practice areas:

- **ISO/IEC 27001:2022**: A.8.8 (Management of technical vulnerabilities), A.8.32 (Change management)
- **NIST CSF 2.0**: ID.RA (Risk Assessment), RS.MI (Mitigation)
- **ITIL 4**: Problem Management, Information Security Management

---

## License

Content: CC BY 4.0 | Code/templates: MIT
READMEEOF

# --- triage_model.md ---
cat > topics/vulnerability-triage-framework/triage_model.md << 'TRIAGEEOF'
# Triage Model

This document defines the composite scoring formula, decision thresholds, and critical trigger rules used to prioritise vulnerability remediation.

---

## Composite Scoring Formula

**Total = Exposure + Exploitability + Impact + ControlGap**

Each component is scored using the definitions in the referenced documents:

| Component | Source Document | Score Range |
|---|---|---|
| Exposure | `asset_context.md` | 0–3 |
| Exploitability | `exploitability_factors.md` | 0–7 |
| Impact | `asset_context.md` | 0–3 |
| Control Gap | `asset_context.md` | 0–2 |

**Composite range: 0–15** (theoretical maximum; scores above 12 are rare in practice).

---

## Decision Thresholds

| Total | Outcome | Definition |
|---|---|---|
| 9–12 | **Fix Now** | Immediate remediation required. Escalate to asset owner within 24 hours. Apply patch, mitigate, or isolate. |
| 5–8 | **Fix Next** | Remediate within the current cycle. Confirm remediation plan within 7 days; complete within 14 calendar days. |
| 0–4 | **Accept (with conditions)** | Risk is within tolerance given current controls. Document compensating controls, obtain risk owner approval, and schedule reassessment within 90 days. |

Scores above 12 are treated as Fix Now. The 9–12 band is the primary escalation zone.

---

## Critical Triggers

The following conditions override the numeric score and escalate directly to **Fix Now**, regardless of the composite total:

1. **CISA KEV listing**: The CVE appears in the CISA Known Exploited Vulnerabilities catalogue.
2. **Authentication or authorisation infrastructure affected**: The vulnerability is on a component that controls authentication, session management, or access control decisions.
3. **Regulated data at direct risk**: Successful exploitation would provide direct access to PII, PCI, health data, or credentials without requiring lateral movement.
4. **Active exploitation confirmed against the organisation**: Threat intelligence or SOC observations confirm targeting of the specific vulnerability in the organisation's environment.

If any trigger is active, the finding is classified Fix Now and the trigger is recorded in the triage register alongside the numeric score for audit purposes.

---

## Scoring Guidance

### When scores conflict with intuition

The model is a decision support tool, not a replacement for judgement. If a finding scores in the Accept range but the analyst believes it warrants higher priority, the analyst should:

1. Document the reasoning.
2. Escalate to the risk owner with a recommendation to override.
3. Record the override and rationale in the triage register.

Conversely, if a finding scores Fix Now but compensating controls fully neutralise the risk, the same override process applies in reverse. The key requirement is that deviations from the model are documented and approved.

### CVSS as an input, not the output

The CVSS base score informs the exploitability assessment (particularly attack vector and complexity) but is never used as the sole determinant. The composite model exists because CVSS does not account for asset context, compensating controls, or real-world exploit availability.

---

## Register

All triage decisions are recorded in `data/triage_register.csv` with the component scores, composite total, outcome, any active triggers, and the assigned remediation timeline.
TRIAGEEOF

# --- exploitability_factors.md ---
cat > topics/vulnerability-triage-framework/exploitability_factors.md << 'EXPLOITEOF'
# Exploitability Factors

This document defines the exploitability inputs used alongside CVSS base scores to contextualise real-world exploitation likelihood within the triage model.

---

## Purpose

CVSS base scores reflect theoretical severity but do not account for whether an exploit is actively used, publicly available, or practically achievable against the target environment. The factors below provide the additional context required to move from a vendor severity rating to a defensible prioritisation decision.

---

## Factor Definitions

### 1. Exploit Availability

| Rating | Definition | Score |
|---|---|---|
| None known | No public exploit code or proof-of-concept identified | 0 |
| PoC available | Proof-of-concept exists in public repositories (e.g., GitHub, Exploit-DB) but no confirmed weaponisation | 1 |
| Weaponised | Functional exploit integrated into frameworks (e.g., Metasploit) or observed in commodity toolkits | 2 |
| Active exploitation | Confirmed in-the-wild exploitation per CISA KEV, vendor advisory, or credible threat intelligence | 3 |

### 2. Attack Complexity (Environmental)

This adjusts the CVSS attack complexity value based on the actual configuration of the target asset.

| Rating | Definition | Score |
|---|---|---|
| High complexity | Exploitation requires chained conditions, specific configurations, or authenticated access not commonly available | 0 |
| Moderate complexity | Exploitation requires some prerequisites (e.g., authenticated low-privilege session) that are plausible but not trivial | 1 |
| Low complexity | Exploitation is straightforward with no meaningful prerequisites beyond network access | 2 |

### 3. Threat Intelligence Signal

| Rating | Definition | Score |
|---|---|---|
| No signal | No mention in threat feeds, vendor advisories, or sector-specific alerts | 0 |
| Sector-adjacent | Exploitation reported in related sectors or geographies but not directly targeting the organisation's vertical | 1 |
| Direct relevance | Exploitation reported targeting the organisation's sector, technology stack, or region | 2 |

---

## Scoring Integration

The exploitability score is the sum of the three factors above (range: 0–7). This feeds into the composite triage score as the **Exploitability** component defined in `triage_model.md`.

For triage purposes:
- **0–2**: Low exploitability — standard remediation timelines apply.
- **3–4**: Moderate exploitability — prioritise within the current cycle.
- **5–7**: High exploitability — treat as accelerated remediation; review for critical trigger activation.

---

## Sources

Exploitability assessments should reference:
- CISA Known Exploited Vulnerabilities (KEV) catalogue
- Vendor security advisories (e.g., Tenable plugin notes, NVD references)
- EPSS (Exploit Prediction Scoring System) percentile as a supplementary signal
- Sector-specific threat intelligence feeds where available
EXPLOITEOF

# --- asset_context.md ---
cat > topics/vulnerability-triage-framework/asset_context.md << 'ASSETEOF'
# Asset Context

This document defines how asset characteristics influence vulnerability triage decisions. Asset context determines the **Exposure** and **Impact** components of the composite triage score defined in `triage_model.md`.

---

## Purpose

Two vulnerabilities with identical CVSS scores and exploitability profiles can carry fundamentally different risk depending on the asset they affect. A critical SQL injection in an internet-facing authentication service is a different problem from the same finding on an isolated internal development instance. This document provides the classification scheme that makes those distinctions explicit and auditable.

---

## Asset Classification

### Exposure Rating

Exposure reflects the reachability of the affected asset from an attacker's perspective.

| Rating | Definition | Score |
|---|---|---|
| Internal only | Asset is accessible only from internal networks with no inbound internet path | 0 |
| Authenticated external | Asset is internet-facing but requires authentication before reaching the vulnerable component | 1 |
| Public-facing | Asset is directly reachable from the internet without authentication (e.g., public API endpoint, login page, marketing site) | 2 |
| Public-facing with sensitive data | Asset is internet-facing, unauthenticated, and processes or stores sensitive data (PII, PCI, credentials) | 3 |

### Impact Rating

Impact reflects the business consequence of successful exploitation, based on the data and function the asset supports.

| Rating | Definition | Score |
|---|---|---|
| Low | Asset supports non-critical internal functions; no sensitive data; limited blast radius | 0 |
| Moderate | Asset supports business operations or contains internal data; compromise causes operational disruption but limited data exposure | 1 |
| High | Asset processes regulated or sensitive data (PII, financial, health); compromise triggers notification obligations or significant operational impact | 2 |
| Critical | Asset is a core revenue-generating service, authentication/authorisation gateway, or stores high-volume regulated data; compromise has organisation-wide impact | 3 |

---

## Control Gap Rating

The control gap reflects whether compensating controls reduce the practical risk of exploitation, independent of patching.

| Rating | Definition | Score |
|---|---|---|
| Strong compensating controls | WAF, network segmentation, runtime protection, or equivalent controls are in place and validated | 0 |
| Partial controls | Some compensating controls exist but do not fully address the attack vector (e.g., WAF present but rule coverage uncertain) | 1 |
| No compensating controls | No relevant controls mitigate the vulnerability beyond the patch itself | 2 |

---

## Application to Triage

The composite triage score from `triage_model.md` is:

**Total = Exposure + Exploitability + Impact + ControlGap**

Asset context provides the Exposure, Impact, and ControlGap values. Combined with the Exploitability score from `exploitability_factors.md`, this produces a total that maps to a triage outcome:

| Total | Outcome | Action |
|---|---|---|
| 9–12 | Fix Now | Immediate remediation; escalate to asset owner within 24 hours |
| 5–8 | Fix Next | Remediate within current cycle per SLA in `sla_policy.md` |
| 0–4 | Accept (with conditions) | Document compensating controls, risk owner approval, and scheduled review date |

Critical triggers defined in `triage_model.md` override the numeric score and escalate directly to Fix Now regardless of total.

---

## Asset Register Integration

In a production implementation, these ratings should be sourced from or reconciled with the organisation's asset register or CMDB. For this framework, asset context is assigned per finding during triage and recorded in the `data/triage_register.csv`.
ASSETEOF

# --- sla_policy.md ---
cat > topics/vulnerability-triage-framework/sla_policy.md << 'SLAEOF'
# SLA Policy: Vulnerability Remediation Timelines

This document defines the remediation timelines tied to triage outcomes produced by the scoring model in `triage_model.md`. Timelines are measured from the point of triage decision, not from initial scanner detection.

---

## Purpose

A triage framework without enforceable timelines is an opinion, not a control. This policy converts triage outcomes into time-bound remediation expectations that can be tracked, reported against, and escalated when breached.

---

## Remediation SLAs

| Triage Outcome | Remediation Target | Escalation Trigger | Escalation Path |
|---|---|---|---|
| **Fix Now** | Patch, mitigate, or isolate within **24 hours** of triage decision | No confirmed remediation or compensating control within 24 hours | Escalate to asset owner and information security lead; document exception if timeline cannot be met |
| **Fix Next** | Remediate within **14 calendar days** of triage decision | No remediation plan confirmed within 7 days | Escalate to asset owner; require documented remediation plan with target date |
| **Accept (with conditions)** | Risk acceptance documented within **7 calendar days** of triage decision; reassessment at next scheduled review or within **90 calendar days**, whichever is sooner | No documented acceptance or compensating control evidence within 7 days | Escalate to risk owner; acceptance without documentation is not valid |

---

## Measurement and Tracking

### Metrics

The following metrics should be tracked per reporting period (recommended: monthly):

- **Mean time to remediate (MTTR)** by triage outcome category.
- **SLA compliance rate**: percentage of findings remediated within the applicable SLA window.
- **Overdue count**: number of findings past SLA with no documented exception or escalation.
- **Risk acceptance volume**: number of findings in Accept status; trend over time to detect accumulation.

### Evidence

Remediation evidence should be recorded in the triage register (`data/triage_register.csv`) with:
- Remediation action taken (patch version, configuration change, compensating control applied).
- Date remediation was confirmed.
- Confirmation method (re-scan, manual validation, vendor confirmation).

---

## Exceptions

Where a Fix Now or Fix Next finding cannot be remediated within the SLA due to operational constraints (e.g., change freeze, vendor dependency), the following must be documented:

1. **Reason** the SLA cannot be met.
2. **Compensating controls** applied in the interim.
3. **Revised target date** for remediation.
4. **Risk owner approval** (named individual, date).

Exceptions without all four elements are treated as SLA breaches for reporting purposes.

---

## Review

This policy should be reviewed at least annually or following any significant change to the organisation's risk appetite, threat landscape, or operational environment.
SLAEOF

# --- Example 1 ---
cat > topics/vulnerability-triage-framework/examples/example_01_high_cvss_low_risk.md << 'EX1EOF'
# Example 1: High CVSS, Low Contextual Risk

## Scenario

A Nessus authenticated scan of the SaaS platform's internal application tier returns the following finding.

---

## Scanner Output (Nessus-style)

| Field | Value |
|---|---|
| Plugin ID | 160432 (synthetic) |
| Plugin Name | Apache Struts Remote Code Execution (CVE-2024-XXXXX) |
| Severity | Critical |
| CVSS v3.1 Base Score | 9.8 |
| CVSS Vector | AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H |
| Affected Host | 10.40.12.8 (app-worker-03.internal) |
| Port/Service | 8443/HTTPS |
| Synopsis | The remote host is running an Apache Struts version affected by a remote code execution vulnerability. |

---

## Triage Assessment

### Exposure: 0 (Internal only)

The affected host sits in a private subnet with no inbound internet path. Access requires VPN authentication and is restricted to the engineering team via network ACLs. The vulnerable service is not reachable from any public-facing component.

### Exploitability: 4 (Moderate-High)

- **Exploit availability:** Weaponised — a Metasploit module exists. (Score: 2)
- **Attack complexity (environmental):** Low complexity — no authentication required to reach the Struts endpoint once on the internal network. (Score: 2)
- **Threat intelligence signal:** No signal specific to this CVE targeting the organisation's sector. (Score: 0)

### Impact: 1 (Moderate)

The host is a background worker processing queued tasks. It does not handle authentication, store credentials, or process regulated data directly. Compromise would cause operational disruption to asynchronous processing but would not expose sensitive data without lateral movement.

### Control Gap: 0 (Strong compensating controls)

Network segmentation isolates this host from the data tier. Outbound traffic is restricted to allow-listed destinations. Host-based EDR is active with behavioural detection enabled.

---

## Composite Score

| Component | Score |
|---|---|
| Exposure | 0 |
| Exploitability | 4 |
| Impact | 1 |
| Control Gap | 0 |
| **Total** | **5** |

### Critical Triggers

None activated. The finding is not in CISA KEV, the asset is not authentication infrastructure, and no regulated data is directly at risk.

---

## Triage Outcome: Fix Next

Despite a CVSS base score of 9.8, the contextual risk is moderate. The host is not internet-facing, does not process sensitive data, and is protected by validated compensating controls. Standard remediation within the 14-day SLA is appropriate.

### Recommended Action

- Schedule patching of Apache Struts to the fixed version within the next maintenance window.
- Confirm compensating controls remain in place until patch is applied.
- Record remediation in the triage register with re-scan confirmation.

---

## Key Takeaway

This example demonstrates why CVSS alone is insufficient for prioritisation. A 9.8 base score without environmental context would place this finding at the top of the remediation queue, displacing potentially higher-risk items. Contextual triage ensures remediation effort is directed where actual risk is greatest.
EX1EOF

# --- Example 2 ---
cat > topics/vulnerability-triage-framework/examples/example_02_medium_cvss_high_risk.md << 'EX2EOF'
# Example 2: Medium CVSS, High Contextual Risk

## Scenario

A Nessus scan of the SaaS platform's public-facing components returns the following finding against the customer login portal.

---

## Scanner Output (Nessus-style)

| Field | Value |
|---|---|
| Plugin ID | 174891 (synthetic) |
| Plugin Name | Server-Side Request Forgery via User-Supplied URL Parameter (CVE-2025-YYYYY) |
| Severity | Medium |
| CVSS v3.1 Base Score | 6.5 |
| CVSS Vector | AV:N/AC:L/PR:N/UI:N/S:C/C:L/I:L/A:N |
| Affected Host | login.example-saas.com (203.0.113.50) |
| Port/Service | 443/HTTPS |
| Synopsis | The remote web application accepts user-supplied URLs in a request parameter and performs server-side requests without adequate validation, allowing server-side request forgery (SSRF). |

---

## Triage Assessment

### Exposure: 3 (Public-facing with sensitive data)

The affected host is the customer-facing authentication portal. It is directly reachable from the internet without prior authentication. The login flow processes user credentials and session tokens. Successful SSRF from this position could allow an attacker to reach internal metadata endpoints or backend services that are not intended to be externally accessible.

### Exploitability: 5 (High)

- **Exploit availability:** Active exploitation — SSRF variants targeting cloud metadata services are well-documented and actively exploited in SaaS environments. (Score: 3)
- **Attack complexity (environmental):** Low complexity — the vulnerable parameter accepts arbitrary URLs with no authentication prerequisite. (Score: 2)
- **Threat intelligence signal:** No sector-specific signal beyond general SaaS/cloud targeting. (Score: 0)

### Impact: 2 (High)

Successful exploitation could allow access to cloud provider metadata endpoints (e.g., instance credentials on AWS/Azure), enabling lateral movement to internal services or data stores. The authentication portal is a trust boundary; compromise here has a disproportionate blast radius relative to the CVSS base score.

### Control Gap: 2 (No compensating controls)

No WAF rule currently filters or validates the vulnerable parameter. No egress filtering restricts the application server from reaching internal metadata endpoints. The application does not implement an allow-list for outbound requests.

---

## Composite Score

| Component | Score |
|---|---|
| Exposure | 3 |
| Exploitability | 5 |
| Impact | 2 |
| Control Gap | 2 |
| **Total** | **12** |

### Critical Triggers

- **Authentication/authorisation infrastructure affected:** Yes — the finding is on the customer login portal.
- **Active exploitation of the vulnerability class:** Yes — SSRF against cloud metadata is a well-established attack pattern with confirmed in-the-wild use.

Either trigger alone would escalate this to Fix Now regardless of the numeric score.

---

## Triage Outcome: Fix Now

Despite a CVSS base score of only 6.5, the contextual risk is critical. The vulnerability sits on an internet-facing authentication boundary, is trivially exploitable, has no compensating controls, and the attack class is actively exploited in production cloud environments.

### Recommended Action

- **Immediate (within 24 hours):**
  - Apply input validation to restrict the vulnerable parameter to an allow-list of permitted URL schemes and destinations.
  - Block application server access to cloud metadata endpoints (e.g., 169.254.169.254) via network policy or host firewall.
- **Short-term (within 7 days):**
  - Deploy WAF rules to detect and block SSRF patterns on the login endpoint.
  - Review application code for similar user-supplied URL handling elsewhere.
- **Confirmation:**
  - Re-scan with Nessus to confirm the finding is resolved.
  - Record remediation in the triage register with evidence of validation.

---

## Key Takeaway

This example demonstrates the inverse of Example 1. A medium-severity CVSS score masks critical contextual risk when the vulnerable asset is internet-facing, processes sensitive data, sits on a trust boundary, and lacks compensating controls. Relying on CVSS alone would place this finding behind hundreds of higher-scored but lower-risk items. Contextual triage surfaces it as the genuine priority.
EX2EOF

# --- Triage register CSV header ---
cat > topics/vulnerability-triage-framework/data/triage_register.csv << 'REGEOF'
finding_id,cve_id,plugin_id,affected_host,cvss_base,exposure,exploitability,impact,control_gap,composite_total,critical_trigger,triage_outcome,sla_deadline,remediation_action,remediation_date,confirmation_method,risk_owner,notes,timestamp
REGEOF

echo "=== 4/7  Creating PCI lab metrics.csv ==="
mkdir -p topics/pci-dss-azure/data

cat > topics/pci-dss-azure/data/metrics.csv << 'METEOF'
step,items_tested,manually_labeled,auto_labeled,false_positives,notes,timestamp
1-baseline,2,2,0,0,"Manual label applied successfully; auto not enabled yet","YYYY-MM-DD"
2-auto,4,0,4,0,"Auto-labeling applied correctly with PAN + context","YYYY-MM-DD"
3-dlp,6,0,6,1,"DLP enforced: 2 blocked, 1 override, 1 false positive","YYYY-MM-DD"
METEOF

echo "=== 5/7  Replacing TPRM risk_scoring_matrix.csv with aligned version ==="

cat > topics/third-party-risk-management-iso-iec-27001-2022-itilv4/risk_scoring_matrix.csv << 'RSMEOF'
control_area,vsq_section,weight,score_0_not_met,score_1_partial,score_2_met,notes
Governance and Assurance,1 – Governance,High,No documented ISMS or security policy,Policy exists but no independent certification or audit,Current ISO 27001 or SOC 2 Type II certification with evidence,
Data Encryption (Transit),2 – Data Protection,High,No TLS or outdated protocol (< TLS 1.2),TLS 1.2 in place but certificate management undocumented,TLS 1.2+ enforced with documented certificate lifecycle,
Data Encryption (Rest),2 – Data Protection,High,No encryption at rest,Encryption at rest enabled but key management not documented,AES-256 or equivalent with documented key management,
Data Residency and Transfers,2 – Data Protection,Medium,No clarity on data location or cross-border transfers,Data location known but no transfer safeguards documented,Data residency confirmed; cross-border transfers covered by SCCs or adequacy decision,
Identity and Access Control,3 – Identity and Access,High,No centralised access control or MFA,MFA available but not enforced for all privileged access,MFA enforced for all privileged and remote access; RBAC documented and reviewed,
Incident Detection and Response,4 – Incident Response and Resilience,High,No documented incident response plan,IR plan exists but untested or not exercised in past 12 months,Documented IR plan exercised within past 12 months with evidence of lessons learned,
Incident and Breach Notification,4 – Incident Response and Resilience,Critical,No contractual notification commitment,Notification commitment exists but exceeds 72 hours or lacks defined channel,Contractual commitment to notify within 72 hours via defined channel with root cause follow-up,Non-negotiable: failure to meet score 2 requires escalation to risk owner
Business Continuity and Recovery,4 – Incident Response and Resilience,High,No BC/DR plan or tested backups,BC/DR plan exists but RTO/RPO undefined or untested,Documented BC/DR with defined RTO/RPO tested within past 12 months,
Software and Platform Security,5 – Platform Security,High,No evidence of vulnerability management or secure SDLC,Vulnerability scanning in place but no penetration testing within 12 months,Annual penetration test with evidence of remediation; secure SDLC documented,
Monitoring and Ongoing Assurance,6 – Monitoring and Assurance,Medium,No logging or review mechanism,Logging enabled but no regular review or right-to-audit clause,Centralised logging with regular review; contractual right-to-audit clause in place,
RSMEOF

echo "=== 6/7  Updating top-level README to add Vulnerability Triage Framework ==="

# Check if already added (idempotent)
if grep -q "vulnerability-triage-framework" README.md; then
  echo "  Vulnerability Triage Framework entry already present in README — skipping."
else
  python3 << 'PYEOF'
import re

with open("README.md", "r") as f:
    content = f.read()

# Find the PCI DSS topic entry line and insert the new entry before it
new_entry = """- **[Vulnerability Triage Framework](./topics/vulnerability-triage-framework/)**  
  A risk-based vulnerability prioritisation framework that moves beyond raw CVSS scores to produce defensible, context-aware remediation decisions for SaaS web application environments.

"""

# Insert before the PCI DSS entry (maintains logical grouping: GRC projects then technical projects)
marker = "- **[PCI DSS 4.0 in Microsoft 365/Azure]"
if marker in content:
    content = content.replace(marker, new_entry + marker)
else:
    # Fallback: insert before Wazuh entry
    marker2 = "- **[Wazuh vs Microsoft Sentinel]"
    if marker2 in content:
        content = content.replace(marker2, new_entry + marker2)
    else:
        print("WARNING: Could not find insertion point. Add manually.")

with open("README.md", "w") as f:
    f.write(content)

print("  Inserted Vulnerability Triage Framework entry into README.md")
PYEOF
fi

echo "=== 7/7  Staging and committing ==="

git add -A
git status

echo ""
echo "Review the staged changes above. If everything looks correct, run:"
echo ""
echo '  git commit -m "Add vulnerability triage framework, update TPRM scoring matrix, add PCI metrics template"'
echo '  git push origin main'
echo ""
echo "Done."
