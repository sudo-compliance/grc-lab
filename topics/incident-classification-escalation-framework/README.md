# Incident Classification and Escalation Framework for Financial Services

A structured incident classification, escalation, and regulatory notification framework designed for financial services environments operating under DORA, FCA, and PRA requirements.

---

## Overview

When a security incident occurs in a financial services organisation, the first question is never "what happened" — it is "how bad is this, who needs to know, and how fast." Getting the classification wrong in either direction has consequences: over-escalation wastes senior leadership attention and triggers unnecessary regulatory engagement; under-escalation delays containment and breaches notification obligations.

This framework provides a repeatable, defensible model for classifying incidents by severity, routing them through appropriate escalation paths, and determining whether regulatory notification thresholds are met under DORA, FCA SUP 15.3, and PRA requirements.

---

## Framework Components

| Document | Purpose |
|---|---|
| `classification_model.md` | Four-tier severity model (P1–P4) with classification criteria across impact dimensions |
| `escalation_matrix.md` | Escalation paths, communication requirements, and response timelines per severity tier |
| `regulatory_notification.md` | Regulatory notification triggers and timelines under DORA Art. 17–19 and FCA SUP 15.3 |
| `examples/` | Worked scenarios demonstrating classification and escalation decisions |
| `data/incident_register.csv` | Template register for recording incidents, classifications, and response actions |

---

## Classification Summary

| Tier | Name | Definition | Initial Response |
|---|---|---|---|
| P1 | Critical | Confirmed compromise of production systems, regulated data exposure, or material service disruption to customers | Immediate (within 1 hour) |
| P2 | High | Contained compromise, near-miss with exploitation evidence, or degraded service affecting business operations | Within 4 hours |
| P3 | Moderate | Suspicious activity under investigation, policy violation with no confirmed compromise, or minor service impact | Within 24 hours |
| P4 | Low | Informational events, false positives confirmed after initial triage, or minor policy deviations | Next business day |

---

## Regulatory Context

This framework aligns with the following regulatory obligations for UK financial services:

- **DORA (Regulation (EU) 2022/2554)**: Article 17 (ICT-related incident management), Article 18 (classification of incidents), Article 19 (reporting of major incidents)
- **FCA SUP 15.3**: Material incident notification to the FCA
- **PRA SS1/21**: Operational resilience requirements for UK-authorised firms
- **Bank of England PS21/3**: Building operational resilience, compliance deadline 31 March 2025

---

## How to Use

1. Review `classification_model.md` to understand the severity tiers and classification criteria.
2. When an incident occurs, assess it against the impact dimensions to assign a tier.
3. Follow `escalation_matrix.md` for the corresponding communication and response requirements.
4. Check `regulatory_notification.md` to determine whether regulatory notification thresholds are triggered.
5. Record the incident and all decisions in `data/incident_register.csv`.
6. Review the worked examples in `examples/` for practical application guidance.

---

## Alignment

- **ISO/IEC 27001:2022**: A.5.24 (Information security incident management planning and preparation), A.5.25 (Assessment and decision on information security events), A.5.26 (Response to information security incidents), A.5.27 (Learning from information security incidents), A.6.8 (Information security event reporting)
- **NIST CSF 2.0**: DE.AE (Adverse Event Analysis), RS.AN (Incident Analysis), RS.CO (Incident Response Reporting and Communication), RS.MI (Incident Mitigation)
- **ITIL 4**: Incident Management, Problem Management, Information Security Management

---

## License

Content: CC BY 4.0 | Templates: MIT
