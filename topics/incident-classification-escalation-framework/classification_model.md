# Incident Classification Model

This document defines the four-tier severity model used to classify information security incidents. Classification drives escalation paths, response timelines, and regulatory notification decisions.

---

## Principles

1. **Classify on worst-case plausible impact, not confirmed impact.** At the point of initial classification, the full scope is rarely known. The classification should reflect what could reasonably be true based on available evidence, not what has been confirmed. Downgrading is always possible once scope is established.

2. **Classification is a living decision.** Severity can be upgraded or downgraded as investigation reveals new information. All reclassifications must be documented with rationale and timestamp.

3. **When in doubt, classify one tier higher.** The cost of under-classification (delayed containment, missed regulatory notification) consistently exceeds the cost of over-classification (additional stakeholder communication).

---

## Impact Dimensions

Each incident is assessed across five dimensions. The highest-scoring dimension determines the overall tier.

### 1. Data Impact

| Rating | Criteria |
|---|---|
| Critical (P1) | Confirmed or probable exposure of regulated data (PII, PCI, credentials) affecting customers; data exfiltration evidence |
| High (P2) | Unauthorised access to regulated data without confirmed exfiltration; exposure of internal sensitive data |
| Moderate (P3) | Unauthorised access to non-sensitive internal data; potential data exposure under investigation |
| Low (P4) | No data exposure; event involves non-sensitive information only |

### 2. Service Impact

| Rating | Criteria |
|---|---|
| Critical (P1) | Core customer-facing service unavailable or materially degraded (e.g., online banking, mortgage application portal, savings platform) |
| High (P2) | Customer-facing service degraded but functional; internal critical service unavailable |
| Moderate (P3) | Non-critical service degraded; workaround available; no customer-visible impact |
| Low (P4) | No service impact or impact limited to non-production environments |

### 3. Financial Impact

| Rating | Criteria |
|---|---|
| Critical (P1) | Direct financial loss exceeding defined materiality threshold; fraudulent transactions confirmed |
| High (P2) | Potential financial exposure identified but not yet realised; fraud indicators under investigation |
| Moderate (P3) | Minor financial impact below materiality threshold; operational cost from response effort |
| Low (P4) | No financial impact |

### 4. Regulatory and Legal Impact

| Rating | Criteria |
|---|---|
| Critical (P1) | Incident triggers mandatory regulatory notification under DORA, FCA, or PRA rules; potential enforcement action |
| High (P2) | Incident may trigger regulatory notification pending scope confirmation; contractual breach notification obligations activated |
| Moderate (P3) | Incident does not trigger regulatory notification but requires internal compliance review |
| Low (P4) | No regulatory or legal implications |

### 5. Reputational Impact

| Rating | Criteria |
|---|---|
| Critical (P1) | High likelihood of media coverage or customer-visible impact; social media amplification probable |
| High (P2) | Potential for media interest if incident details become public; customer complaints likely |
| Moderate (P3) | Limited reputational risk; impact contained to internal stakeholders |
| Low (P4) | No reputational risk |

---

## Classification Procedure

1. The incident responder or SOC analyst performs initial triage and assigns a preliminary tier based on available indicators.
2. The incident manager reviews the classification within the initial response window for the assigned tier.
3. If any single impact dimension scores at a higher tier than the preliminary classification, the overall classification is upgraded to match.
4. The classification, supporting rationale, and timestamp are recorded in the incident register.
5. Reclassification occurs whenever new evidence materially changes the impact assessment. Each reclassification is documented.

---

## Classification-to-Action Mapping

| Tier | Initial Response Window | Incident Manager Assignment | Stakeholder Notification |
|---|---|---|---|
| P1 | Within 1 hour | Named senior incident manager | See `escalation_matrix.md` |
| P2 | Within 4 hours | Named incident manager | See `escalation_matrix.md` |
| P3 | Within 24 hours | Assigned from on-call rotation | See `escalation_matrix.md` |
| P4 | Next business day | Logged; no dedicated assignment unless escalated | Logged only |
