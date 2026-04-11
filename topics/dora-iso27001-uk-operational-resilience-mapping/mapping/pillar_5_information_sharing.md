# Pillar 5 — Information Sharing Arrangements: DORA Article 45

## Scope

This file maps DORA Pillar 5 (Article 45) to ISO/IEC 27001:2022 Annex A controls and identifies UK equivalents. Pillar 5 is the narrowest in scope — a single article creating a permissive framework for voluntary cyber threat intelligence sharing among financial entities. It creates no mandatory obligation.

---

## Control Mapping

| DORA Requirement | Article | ISO 27001:2022 Control(s) | UK Equivalent | Gap / Additional Obligation |
|---|---|---|---|---|
| Voluntary cyber threat intelligence sharing among financial entities — indicators of compromise, TTPs, alerts, configuration tools | Art. 45(1) | A.5.7 (Threat intelligence), A.5.6 (Contact with special interest groups) | Cyber Defence Alliance (CDA); NCSC CiSP (Cyber Security Information Sharing Partnership); FS-ISAC | ISO 27001 A.5.7 (threat intelligence) and A.5.6 (contact with special interest groups) directly cover this. UK financial services already has mature threat intelligence sharing through CDA, CiSP, and FS-ISAC. DORA Art. 45 formalises what is already practised. No material gap for firms participating in existing information sharing arrangements. |
| Safeguards for protection of personal data within shared intelligence | Art. 45(2)(a) | A.5.34 (Privacy and protection of personal data) | UK GDPR Art. 6 (lawful basis for processing); ICO guidance on law enforcement and fraud prevention processing | ISO 27001 A.5.34 covers privacy and data protection. Firms sharing threat intelligence that may contain personal data (email addresses, IP addresses attributable to individuals) must ensure a lawful basis exists. No material gap for firms with established data governance but sharing policies should explicitly address this. |
| Safeguards for protection of business confidentiality and sensitive commercial information | Art. 45(2)(b) | A.5.14 (Information transfer), A.6.6 (Confidentiality or non-disclosure agreements) | Standard NDA / information sharing agreement requirements | ISO 27001 A.5.14 covers information transfer controls. A.6.6 covers NDAs. Information sharing agreements in established UK forums (CDA, CiSP) already include confidentiality provisions. No material gap for firms participating in established arrangements with governance frameworks. |
| Safeguards to avoid competition law risks | Art. 45(2)(c) | No direct ISO 27001 equivalent | Competition and Markets Authority (CMA) guidance; standard legal review requirements | ISO 27001 does not address competition law. DORA's inclusion of this provision reflects the risk that collective action among competitors on shared systems or procurement could raise competition concerns. Firms participating in or establishing new sharing arrangements should seek legal review to confirm competition law compliance. This is a process governance requirement rather than an information security control. |
| Notification of competent authorities and ENISA of information sharing arrangements | Art. 45(3) | A.5.5 (Contact with authorities) | FCA/PRA notification of significant arrangements | ISO 27001 A.5.5 covers contact with authorities. DORA requires notification of relevant competent authorities and ENISA when information sharing arrangements are established. For UK firms with EU entities, this requires notification of the relevant EU competent authority and ENISA. UK-only firms are not subject to this notification requirement. |
| Trusted community requirements — sharing must occur within trusted community frameworks | Art. 45(1) | A.5.6 (Contact with special interest groups) | CDA, CiSP, FS-ISAC membership and governance requirements | ISO 27001 A.5.6 covers engagement with special interest groups. Existing UK/EU information sharing forums already operate with trust frameworks, vetting requirements, and terms of participation. No material gap for firms participating through established channels. |

---

## Analysis

### Where ISO 27001 Provides Full Coverage

For firms already engaged in threat intelligence sharing through established forums, ISO 27001 A.5.7 (threat intelligence) and A.5.6 (special interest groups) provide substantive coverage of DORA Art. 45's intent. The permissive nature of Art. 45 means that firms not currently sharing intelligence face no mandatory obligation — it simply creates a clear legal basis for doing so.

### Where DORA Creates Considerations Beyond ISO 27001

**Competition law compliance.** The explicit requirement to avoid competition law risks is not an information security control and sits outside ISO 27001's scope. Firms establishing or joining new sharing arrangements should obtain legal sign-off. This is a standard legal governance step rather than a material gap.

**EU competent authority notification (for firms with EU entities).** Art. 45(3) requires notification to EU competent authorities. UK-only firms are not affected. Firms with EU entities should include this notification in their arrangements governance.

### UK Equivalents

The UK financial services sector already has well-established threat intelligence sharing mechanisms that substantially satisfy the intent of Art. 45:

| Forum | Description |
|---|---|
| Cyber Defence Alliance (CDA) | Closed consortium of major UK and European banks sharing cyber threat intelligence under formal governance |
| NCSC CiSP | NCSC-operated Cyber Security Information Sharing Partnership — open to regulated financial services firms; government-backed |
| FS-ISAC | Global Financial Services Information Sharing and Analysis Center — US-origin but with significant UK/EU membership |
| FCA Market Oversight | FCA intelligence sharing on cyber threats affecting market integrity |

Firms participating in any of the above already meet the spirit of DORA Art. 45. DORA adds an EU regulatory framework endorsement without materially changing UK practice.

### Net Gap for an ISO 27001-Certified, UK ORF-Compliant Firm

For most UK financial services firms:

1. No mandatory action is required under Art. 45 — participation is voluntary.
2. Firms participating in EU-scope sharing arrangements should notify the relevant EU competent authority and ENISA (Art. 45(3)) if they have EU regulatory exposure.
3. Firms establishing new information sharing arrangements (rather than joining established forums) should: document the arrangement's governance, confirm competition law compliance through legal review, and address personal data handling within shared intelligence content.
4. Firms not currently participating in any threat intelligence sharing forum should consider joining CiSP or FS-ISAC to align with the broader intent of Art. 45 and FCA/PRA expectations for proactive threat awareness.
