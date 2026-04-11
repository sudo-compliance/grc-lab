# DORA-to-ISO 27001 Compliance Mapping with UK Operational Resilience Overlay

## Overview

This project maps the five pillars of the Digital Operational Resilience Act (DORA — Regulation (EU) 2022/2554) to ISO/IEC 27001:2022 Annex A controls and overlays the UK FCA/PRA Operational Resilience Framework (PS21/3, SS1/21, PS24/16) to identify alignment, overlap, and residual gaps. It is a practitioner reference for BISOs, GRC analysts, and compliance officers in UK financial services firms asking: "I already have ISO 27001. What additional work does DORA require? Where does UK ORF already cover me? Where are the genuine gaps?"

The project does not summarise DORA or explain what ISO 27001 is. It connects regulatory obligations to operational controls at the level of granularity required to make implementation decisions.

---

## Regulatory Scoping

DORA is an EU regulation. It does not directly apply to UK-authorised firms following the UK's withdrawal from the EU. However, UK financial institutions with material EU operations or exposure should treat DORA as operationally relevant on the following bases:

- **Direct applicability**: UK firms authorised in EU member states, or operating through EU-regulated subsidiaries or branches, are in scope of DORA for those regulated entities.
- **Contractual flow-down**: EU-regulated financial entities that contract with UK-based ICT service providers may pass DORA contractual obligations (Art. 30) downstream. A UK firm acting as an ICT provider to an EU bank must comply with those contractual terms.
- **Critical Third-Party designation**: An ICT provider operating from the UK can be designated as a critical ICT third-party service provider (CTPP) under DORA Art. 31 if it provides services to EU financial entities. Designated CTPPs become subject to the EU oversight framework regardless of their legal domicile.
- **Regulatory equivalence expectations**: The FCA and PRA have signalled an expectation of operational alignment with DORA for UK firms with EU exposure, though formal equivalence has not been established.

UK-only firms with no EU regulated entities, no ICT services to EU financial entities, and no CTPP designation are outside DORA's direct scope. The UK ORF (PS21/3, SS1/21) remains the primary operational resilience obligation for those firms.

---

## DORA Pillar Summary

| Pillar | Name | Articles |
|---|---|---|
| 1 | ICT Risk Management | Articles 5–16 |
| 2 | ICT-Related Incident Management, Classification and Reporting | Articles 17–23 |
| 3 | Digital Operational Resilience Testing | Articles 24–27 |
| 4 | ICT Third-Party Risk Management | Articles 28–44 |
| 5 | Information Sharing Arrangements | Article 45 |

---

## Table of Contents

| Document | Purpose |
|---|---|
| [dora_pillar_overview.md](./dora_pillar_overview.md) | Reference summary of DORA's five pillars — obligations, governance, reporting |
| [mapping/pillar_1_ict_risk_management.md](./mapping/pillar_1_ict_risk_management.md) | Articles 5–16 mapped to ISO 27001:2022 Annex A with UK ORF overlay |
| [mapping/pillar_2_incident_management.md](./mapping/pillar_2_incident_management.md) | Articles 17–23 mapped to ISO 27001:2022 Annex A with UK ORF overlay |
| [mapping/pillar_3_resilience_testing.md](./mapping/pillar_3_resilience_testing.md) | Articles 24–27 mapped to ISO 27001:2022 Annex A with UK ORF overlay |
| [mapping/pillar_4_third_party_risk.md](./mapping/pillar_4_third_party_risk.md) | Articles 28–44 mapped to ISO 27001:2022 Annex A with UK ORF overlay |
| [mapping/pillar_5_information_sharing.md](./mapping/pillar_5_information_sharing.md) | Article 45 mapped to ISO 27001:2022 Annex A with UK ORF overlay |
| [uk_orf_overlay.md](./uk_orf_overlay.md) | Standalone DORA vs. UK ORF comparison — alignment, gaps, dual-regime implications |
| [gap_analysis.md](./gap_analysis.md) | Actionable gap analysis for ISO 27001-certified, UK ORF-compliant firms |
| [data/dora_iso27001_mapping.csv](./data/dora_iso27001_mapping.csv) | Machine-readable mapping for filtering and analysis |

---

## How to Use

1. **Start with `gap_analysis.md`** if you need an immediate answer to "what do we still need to do for DORA." It identifies the residual obligations not already covered by ISO 27001 and UK ORF.

2. **Use `uk_orf_overlay.md`** if your primary question is how DORA and the UK ORF relate — which requirements overlap, which diverge, and where running both regimes simultaneously creates additional complexity.

3. **Use the pillar mapping files** when you need control-level detail for a specific DORA obligation — for example, when scoping an ICT risk management framework review (Pillar 1) or assessing whether your existing TPRM controls satisfy DORA's contractual requirements (Pillar 4).

4. **Use `dora_pillar_overview.md`** as a reference for the regulatory text — what each article requires, who is responsible, and how pillars interact.

5. **Use `data/dora_iso27001_mapping.csv`** for filtering, reporting, or loading the mapping into a GRC tool or compliance tracker.

---

## Alignment

This project is structured around the following regulatory instruments:

- **Regulation (EU) 2022/2554 (DORA)** — applies from 17 January 2025
- **ISO/IEC 27001:2022** — the 2022 revision with 93 Annex A controls (A.5–A.8)
- **FCA PS21/3 / PRA SS1/21 / Bank of England PS21/3** — UK Operational Resilience (published March 2021; compliance deadline 31 March 2025)
- **FCA PS24/16 / PRA PS16/24** — Critical Third Parties to the UK Financial Sector (effective 1 January 2025)

---

## Related Projects in This Repository

- **[Incident Classification & Escalation Framework](../incident-classification-escalation-framework/)** — operationalises the DORA incident classification and reporting requirements (Pillar 2) into a working P1–P4 framework with regulatory notification timelines.
- **[Vulnerability Triage Framework](../vulnerability-triage-framework/)** — provides the post-testing prioritisation workflow relevant to Pillar 3 resilience testing outputs.
- **[TPRM Framework](../third-party-risk-management-iso-iec-27001-2022-itilv4/)** — provides operational TPRM artefacts (vendor security questionnaire, risk scoring matrix, due diligence report) aligned to ISO 27001 A.5.19–A.5.22 and relevant to Pillar 4.

---

## License

Content: CC BY 4.0 | Templates: MIT
