# Pillar 2 — ICT-Related Incident Management, Classification and Reporting: DORA Articles 17–23

## Scope

This file maps DORA Pillar 2 (Articles 17–23) to ISO/IEC 27001:2022 Annex A controls and identifies the UK Operational Resilience Framework (UK ORF) equivalent. Pillar 2 creates the most operationally immediate DORA obligations — specifically the mandatory regulatory notification timelines in Art. 19, which are materially more prescriptive than both ISO 27001 and the FCA's principles-based approach under SUP 15.3.

---

## Control Mapping

| DORA Requirement | Article | ISO 27001:2022 Control(s) | UK ORF / FCA Equivalent | Gap / Additional Obligation |
|---|---|---|---|---|
| ICT-related incident management process — detection, classification, management, notification | Art. 17(1) | A.5.24 (Information security incident management planning and preparation) | FCA SUP 15.3 (material incident notification); PRA operational disruption notification expectations | ISO 27001 A.5.24 requires an incident management process to be planned and prepared. Good baseline coverage. DORA Art. 17 requires the process to explicitly cover ICT-related incidents as a defined category, with documented detection triggers, escalation paths, and regulatory notification workflow. |
| Incident management roles, escalation paths, and integration with ICT risk management framework | Art. 17(3) | A.5.2 (Information security roles and responsibilities), A.5.24 (Information security incident management planning and preparation) | FCA operational resilience expectations | ISO 27001 A.5.2 and A.5.24 provide coverage for role definition. DORA requires named roles and the process to be integrated with the overall ICT risk management framework (Pillar 1). For firms with mature ISO 27001 implementations, this gap is limited to confirming DORA-specific role nomenclature and integration documentation. |
| Classification of incidents as "major" based on defined criteria: clients affected, duration, data losses, service criticality, economic impact, geographical spread | Art. 18(1)–(3) | A.5.25 (Assessment and decision on information security events) | No direct FCA/PRA equivalent — FCA uses "material" threshold under SUP 15.3 without prescriptive criteria | ISO 27001 A.5.25 requires assessment and classification of security events but does not prescribe classification criteria. DORA is highly prescriptive: the six classification criteria in Art. 18 must be formally assessed for each incident. Gap: firms must build a documented classification framework using Art. 18 criteria, not just a severity tier aligned to business impact. |
| Documentation of incident classification decisions and rationale | Art. 18 | A.5.25 (Assessment and decision on information security events), A.5.28 (Collection of evidence) | No direct equivalent | ISO 27001 A.5.25 and A.5.28 provide coverage. No material additional gap for firms with documented classification procedures. |
| Initial notification to competent authority — within 4 hours of classifying as major (and no later than 24 hours from detection) | Art. 19(1)(a) | A.5.24 (Information security incident management planning and preparation) | FCA SUP 15.3 — notification "immediately" upon awareness of material incident; no fixed-hour deadline | This is the most significant gap. ISO 27001 does not address regulatory notification timelines. FCA SUP 15.3 expects "immediate" notification without a defined clock. DORA Art. 19(1)(a) creates a hard 4-hour deadline from classification and a 24-hour deadline from detection. Firms must have a regulatory notification workflow that can execute within these windows, including out-of-hours escalation. |
| Intermediate report to competent authority — within 72 hours of initial notification (or on material change) | Art. 19(1)(b) | A.5.24 (Information security incident management planning and preparation) | FCA SUP 15.3 — ongoing updates expected but no prescribed timeline | ISO 27001 does not address intermediate reporting timelines. FCA practice is flexible. Gap: firms must create an intermediate report template and a 72-hour notification workflow. |
| Final report to competent authority — within 1 month of incident resolution | Art. 19(1)(c) | A.5.27 (Learning from information security incidents) | No direct equivalent | ISO 27001 A.5.27 covers post-incident learning. DORA's final report to the regulator is distinct — it must include confirmed root cause, total impact, remediation actions, and lessons learned in a prescribed format. Firms must create a regulatory-grade final report template. |
| Use of harmonised reporting templates (once ESA RTS available) | Art. 20 | A.5.24 (Information security incident management planning and preparation) | No direct equivalent — FCA Connect for material incident notifications | Gap: once ESA harmonised templates are published under Art. 20, firms must adopt them. In the interim, incident notification procedures should be designed to accommodate template adoption. |
| Single-entry-point reporting where firm supervised by multiple authorities | Art. 21 | No direct ISO 27001 equivalent | No direct UK ORF equivalent | Coordination gap for firms supervised by multiple EU competent authorities. UK-only firms are not affected. For UK firms with EU entities: a process for coordinating regulatory notifications across jurisdictions must be defined. |
| Root cause analysis and integration of lessons learned | Art. 19(1)(c), Art. 13 | A.5.27 (Learning from information security incidents) | PRA SS1/21 — lessons learned from scenario testing must feed back into self-assessment | ISO 27001 A.5.27 covers this. UK ORF adds an expectation that lessons from disruptions improve resilience. Good combined coverage. Residual gap is the regulatory-grade documentation standard for the DORA final report. |
| Evidence collection and preservation | Art. 17(4) | A.5.28 (Collection of evidence) | No direct UK ORF equivalent | ISO 27001 A.5.28 covers evidence collection. DORA adds an expectation that evidence is preserved to support regulatory investigation. For firms with mature A.5.28 implementations, no material additional gap. |
| Voluntary notification of significant cyber threats | Art. 23 | A.5.7 (Threat intelligence) | FCA proactive engagement expectations | This is a voluntary obligation. ISO 27001 A.5.7 covers threat intelligence. No mandatory gap. Firms should document their policy for determining when voluntary notification is appropriate. |
| Information security event reporting mechanism (internal) | Art. 17(2) | A.6.8 (Information security event reporting) | No direct UK ORF equivalent | ISO 27001 A.6.8 provides strong coverage for internal event reporting. No material gap for firms with mature A.6.8 implementations. |

---

## Analysis

### Where ISO 27001 Provides Full or Near-Full Coverage

ISO 27001's incident management controls (A.5.24–A.5.28, A.6.8) provide good coverage of the process architecture required by DORA Art. 17. Firms with mature incident management processes built on ISO 27001 will already have: detection triggers, event assessment procedures, response plans, evidence collection, and post-incident reviews. These satisfy the procedural requirements of DORA Art. 17.

Evidence collection (A.5.28) and learning from incidents (A.5.27) are well-covered, satisfying Art. 17(4) and the learning component of Art. 19(1)(c).

### Where DORA Is More Prescriptive Than ISO 27001

**1. Prescriptive classification criteria (Art. 18).** ISO 27001 A.5.25 requires assessment but does not prescribe criteria. DORA's six-criteria classification framework (clients affected, duration, geographical spread, data losses, service criticality, economic impact) must be formally built into the classification procedure. This is a meaningful process gap even for firms with mature incident management.

**2. Hard regulatory notification timelines (Art. 19).** This is the single largest gap in Pillar 2. ISO 27001 contains no regulatory notification obligations. FCA SUP 15.3's "immediately" standard has no defined clock. DORA's 4-hour / 72-hour / 1-month tiered notification framework requires:
- A workflow that can identify a major incident and submit an initial notification within 4 hours of classification
- Out-of-hours escalation paths (incidents do not only occur during business hours)
- Pre-drafted notification templates with variable fields
- Named regulatory notification accountability
- A tracking log for notification submissions and acknowledgements

**3. Structured regulatory reporting format (Art. 20).** Notifications are not just internal documents — they are regulatory submissions with defined content requirements. ISO 27001 provides no guidance on this.

### Where UK ORF Provides Coverage

FCA SUP 15.3 requires material incident notification and expects ongoing engagement. For UK firms already running SUP 15.3 notifications, the process infrastructure (contact with supervisors, notification tooling) is in place. The gap is the clock precision — DORA's 4-hour initial notification is significantly more demanding than the FCA's "immediately" standard.

PRA expectations for operational disruption notification under SS1/21 partially satisfy the intent of Art. 19. However, the PRA's expectations are principles-based and do not create a fixed-hour window.

Combined, FCA SUP 15.3 + ISO 27001 incident management provides perhaps 60% of the DORA Art. 19 requirement. The outstanding 40% is the fixed-clock notification workflow and the structured intermediate/final report.

### Cross-Reference

The Incident Classification & Escalation Framework (`../incident-classification-escalation-framework/`) in this repository implements the DORA-aligned classification model (P1–P4 mapped to severity criteria), escalation matrix, and regulatory notification timelines for DORA Art. 19, FCA SUP 15.3, and PRA requirements in an operationalised format.

### Net Gap for an ISO 27001-Certified, UK ORF-Compliant Firm

1. Build a formal incident classification procedure using the six Art. 18 criteria (not just severity tiers).
2. Create a regulatory notification workflow capable of executing within the 4-hour initial notification window, including out-of-hours escalation paths.
3. Develop and maintain: an initial notification template, an intermediate report template, and a final report template in DORA-prescribed format.
4. Appoint a named regulatory notification accountable owner.
5. Create a notification tracking log to evidence compliance with Art. 19 timelines.
6. For firms with EU entities: establish a multi-jurisdiction notification coordination procedure (Art. 21).
