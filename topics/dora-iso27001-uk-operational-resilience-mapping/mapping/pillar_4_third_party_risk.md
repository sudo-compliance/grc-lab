# Pillar 4 — ICT Third-Party Risk Management: DORA Articles 28–44

## Scope

This file maps DORA Pillar 4 (Articles 28–44) to ISO/IEC 27001:2022 Annex A controls and identifies UK ORF and FCA/PRA Critical Third Party equivalents. Pillar 4 covers two distinct layers:

- **Articles 28–30**: Obligations on financial entities for managing their ICT third-party service provider relationships. These apply directly to any in-scope financial entity.
- **Articles 31–44**: The Union-wide oversight framework for designated critical ICT third-party service providers (CTPPs). These obligations apply primarily to the CTPPs themselves, not to financial entities. Financial entities are affected indirectly through their relationships with designated CTPPs.

This mapping focuses primarily on Arts. 28–30 as the directly actionable obligations for financial entities.

---

## Control Mapping — Financial Entity Obligations (Arts. 28–30)

| DORA Requirement | Article | ISO 27001:2022 Control(s) | UK ORF / FCA Equivalent | Gap / Additional Obligation |
|---|---|---|---|---|
| ICT third-party risk management strategy — documented, integrated into ICT risk management framework | Art. 28(1)–(2) | A.5.19 (Information security in supplier relationships) | No direct UK ORF equivalent; FCA SYSC 8 (outsourcing arrangements) and SYSC 13 (operational risk) provide partial coverage | ISO 27001 A.5.19 requires a documented policy for information security in supplier relationships. DORA Art. 28 requires a specific ICT third-party risk management strategy as a component of the Pillar 1 ICT risk management framework. Gap: the strategy must address ICT concentration risk, exit strategy planning, and critical vs. non-critical function classification for third-party arrangements — beyond the scope of a standard supplier security policy. |
| Register of Information — maintained for all ICT third-party service provider arrangements, submitted to competent authority on request | Art. 28(3) | A.5.9 (Inventory of information and other associated assets) | No direct UK ORF equivalent | This is one of the most significant operational gaps in Pillar 4. ISO 27001 A.5.9 requires an asset inventory. However, DORA's Register of Information is a structured record of every contractual ICT arrangement — not just an asset list — covering: provider identity, services provided, classification of supporting function (critical or important vs. other), data location, contractual start/end dates, and sub-processor details. The ESAs have specified the register format in regulatory technical standards. Firms must build a compliant register in this defined format. |
| Preliminary due diligence before entering new ICT arrangements | Art. 28(4) | A.5.19 (Information security in supplier relationships), A.5.21 (Managing information security in the ICT supply chain) | FCA SYSC 8.1.7R (pre-outsourcing due diligence obligations for regulated activities) | ISO 27001 A.5.19 and A.5.21 require assessment of supplier security. FCA SYSC 8 requires pre-outsourcing due diligence. Combined, these provide reasonable coverage. Gap: DORA requires due diligence to assess ICT concentration risk at entity level (Art. 29) — the risk that a critical function depends on a single provider or a small number of providers. This concentration risk assessment must be documented and form part of the pre-contract review. |
| Assessment of ICT concentration risk at entity level | Art. 29 | A.5.21 (Managing information security in the ICT supply chain) | No direct UK ORF equivalent | ISO 27001 A.5.21 covers ICT supply chain security. DORA Art. 29 requires an explicit concentration risk assessment: before entering an arrangement with a critical function provider, the firm must assess whether the arrangement would create excessive dependency on a single provider. Ongoing concentration risk monitoring is also required. This is not explicitly required by ISO 27001. |
| Contractual provisions — service level descriptions and performance targets | Art. 30(2)(a) | A.5.20 (Addressing information security within supplier agreements) | FCA SYSC 8.1.8R (requirement for written outsourcing agreements) | ISO 27001 A.5.20 requires information security requirements to be addressed in supplier agreements. FCA SYSC 8 requires service level agreements for regulated activity outsourcing. Good coverage for service level provisions. |
| Contractual provisions — data location and processing jurisdiction | Art. 30(2)(b) | A.5.20 (Addressing information security within supplier agreements) | No direct UK ORF equivalent (UK GDPR Art. 28 — data processor agreement requirements cover some of this) | DORA requires ICT contracts to specify data location and whether data can be processed outside the EEA. ISO 27001 A.5.20 covers this as part of security requirements in agreements. For firms that also comply with UK GDPR, data location clauses will already be standard. No material additional gap for firms with mature data governance practices. |
| Contractual provisions — availability, authenticity, integrity, and confidentiality of data | Art. 30(2)(c) | A.5.20 (Addressing information security within supplier agreements) | No direct UK ORF equivalent | ISO 27001 A.5.20 requires information security requirements (including CIA triad) to be addressed in supplier agreements. Good coverage. |
| Contractual provisions — full access, inspection, and audit rights (including by competent authorities) | Art. 30(2)(d) | A.5.20 (Addressing information security within supplier agreements) | FCA SYSC 8.1.8R (right to inspect outsource providers) | ISO 27001 A.5.20 covers audit rights. FCA SYSC 8 requires audit rights for regulated activity outsourcing. Good coverage in principle. Gap: DORA requires audit rights to extend to competent authorities (not just the firm itself), and this must be explicitly stated in the contract. Many existing contracts may not include competent authority access provisions. Firms should review existing critical contracts for this gap. |
| Contractual provisions — cooperation with competent authorities | Art. 30(2)(e) | A.5.20 (Addressing information security within supplier agreements) | FCA SYSC 8.1.8R | ISO 27001 does not specifically require supplier cooperation with regulatory authorities to be contractually mandated. This is a genuine gap. Existing contracts should be reviewed and updated to include explicit competent authority cooperation obligations on the provider. |
| Contractual provisions — termination rights and exit strategies (including transition assistance) | Art. 30(2)(f)–(g) | A.5.20 (Addressing information security within supplier agreements) | FCA SYSC 8.1.8R (exit strategy requirements for material outsourcing) | FCA SYSC 8 requires exit strategies for material outsourcing. ISO 27001 A.5.20 covers contract provisions generally. DORA Art. 30 requires termination rights and exit provisions in all ICT arrangements supporting critical or important functions, including: documented transition plans, access to data on exit, and minimum transition assistance periods. Firms using large cloud or technology providers with non-negotiable standard terms should assess whether those terms include adequate exit provisions and, if not, negotiate supplementary data portability agreements. |
| Contractual provisions — subcontracting conditions and restrictions | Art. 30(2)(h) | A.5.20 (Addressing information security within supplier agreements), A.5.21 (Managing information security in the ICT supply chain) | No direct UK ORF equivalent | ISO 27001 A.5.21 covers ICT supply chain security including sub-processors. DORA requires sub-contracting conditions — particularly for sub-contracting of critical or important functions — to be explicitly addressed in the contract, including notification obligations when sub-contractors change. |
| Contractual provisions — incident notification obligations on the ICT provider | Art. 30(2)(i) | A.5.20 (Addressing information security within supplier agreements) | No direct UK ORF equivalent | ISO 27001 A.5.20 covers notification obligations. DORA requires the contract to include specific incident notification obligations enabling the financial entity to meet its own DORA Art. 19 notification timelines. Firms must confirm that provider incident notification SLAs are compatible with the 4-hour initial notification window. |
| Mandatory contract provisions cannot be waived — applies even to large/hyperscale providers | Art. 30(3) | No direct ISO 27001 equivalent | No direct UK ORF equivalent | This is an important implementation note. DORA makes clear that the Art. 30 mandatory provisions cannot be contractually waived. Firms using hyperscale cloud providers (AWS, Azure, GCP, etc.) with standard terms must assess compliance and, where necessary, negotiate amendments or supplementary agreements. Regulators have indicated that "unable to negotiate" is not a defensible position for critical function arrangements. |
| Annual review of ICT third-party arrangements | Art. 28(5) | A.5.22 (Monitoring, review and change management of supplier services) | FCA SYSC 8.3R (ongoing monitoring of material outsourcing) | ISO 27001 A.5.22 requires ongoing monitoring and review of supplier services. FCA SYSC 8 requires ongoing oversight of material outsourcing. Good coverage. DORA adds a requirement to review classification of arrangements (critical vs. non-critical) as part of annual review. |
| Cloud services — specific considerations | Art. 30 (read with Art. 28) | A.5.23 (Information security for use of cloud services) | No direct UK ORF equivalent | ISO 27001 A.5.23 covers cloud service security. DORA's third-party obligations apply equally to cloud service providers with additional prescriptiveness around data location, exit, and audit rights. Firms should ensure A.5.23 implementations are aligned to the Art. 30 mandatory clause requirements. |

---

## Control Mapping — CTPP Oversight Framework (Arts. 31–44)

The following is a summary of how the CTPP oversight framework affects financial entities. These obligations apply to designated CTPPs, not directly to financial entities.

| Aspect | Article Range | Implication for Financial Entities |
|---|---|---|
| CTPP designation by ESAs | Art. 31 | If a firm's critical ICT provider is designated as a CTPP, the firm must be prepared to support Lead Overseer information requests. |
| Lead Overseer powers — information requests | Art. 36 | Financial entities may be required to provide information about their CTPP relationships to the Lead Overseer. |
| Lead Overseer recommendations | Art. 35(1)(d) | If the Lead Overseer issues recommendations to a CTPP and the CTPP fails to comply, the financial entity may need to reassess the relationship — including whether to continue using a non-compliant CTPP for critical functions. |
| Financial entity right to exit CTPP relationship | Art. 28(1) | Financial entities should include CTPP regulatory non-compliance as a trigger for contract termination in their exit strategy provisions. |

---

## Analysis

### Where ISO 27001 Provides Full or Near-Full Coverage

ISO 27001's supplier management controls (A.5.19–A.5.23) provide strong coverage of the process architecture for DORA Pillar 4. Specifically:
- Due diligence (A.5.19, A.5.21) covers the pre-contract assessment requirement of Art. 28(4).
- Supplier agreement provisions (A.5.20) cover the majority of Art. 30 mandatory clauses where firms have comprehensive security schedule templates.
- Ongoing monitoring (A.5.22) covers Art. 28(5) annual review.
- Cloud services (A.5.23) maps to Art. 30 cloud-specific requirements.

For firms with mature supplier security programmes using comprehensive security schedules, the ISO 27001 framework provides a strong baseline.

### Where DORA Is More Prescriptive Than ISO 27001

**1. Register of Information (Art. 28(3)).** This is the most operationally significant gap. ISO 27001's asset inventory (A.5.9) is not a substitute for the DORA Register of Information, which has a prescribed format defined by ESA RTS. Firms must build a structured, regulatory-grade register in the specified format.

**2. ICT concentration risk assessment (Art. 29).** This is not explicitly required by ISO 27001. Firms must establish a concentration risk assessment methodology and document the results for critical function dependencies.

**3. Competent authority access provisions (Art. 30(2)(d)–(e)).** Existing contracts may not include explicit rights for competent authorities to access, inspect, or investigate ICT providers. Firms should conduct a contract review specifically for this clause.

**4. Incident notification SLA alignment (Art. 30(2)(i)).** Provider incident notification obligations must be timed to enable the firm to meet DORA Art. 19's 4-hour initial notification window. Firms must verify that provider contracts require notification within a window that enables this — in practice, provider notification within 1–2 hours of the provider's incident classification.

**5. Non-negotiable mandatory clauses (Art. 30(3)).** The explicit DORA statement that mandatory clauses cannot be waived creates compliance risk for firms with hyperscale cloud arrangements. Contract review programmes must specifically assess this.

### Where UK ORF Provides Coverage

FCA SYSC 8 (outsourcing) and SYSC 13 (operational risk management) requirements for material outsourcing provide meaningful coverage of Arts. 28–30 for regulated activity outsourcing. Exit strategies (SYSC 8.1.8R) and audit rights are already standard in FCA-compliant outsourcing arrangements.

FCA PS24/16 and PRA PS16/24 (Critical Third Parties) create a parallel UK regime for designating critical third-party service providers. The designation criteria and oversight framework are conceptually aligned to DORA Arts. 31–44 but are legally distinct. UK-designated CTPs face operational resilience requirements from the FCA/PRA. Firms with designated CTP providers must manage both frameworks simultaneously.

### Cross-Reference

The TPRM Framework (`../third-party-risk-management-iso-iec-27001-2022-itilv4/`) in this repository provides: a vendor security questionnaire aligned to ISO 27001 A.5.19–A.5.22, a risk scoring matrix for vendor assessment, and a due diligence report template. These artefacts can be extended with DORA-specific assessment criteria (concentration risk, Art. 30 clause verification, Register of Information fields) to create a DORA-aligned TPRM process.

### Net Gap for an ISO 27001-Certified, UK ORF-Compliant Firm

1. Build a Register of Information in the ESA-prescribed format covering all ICT third-party service provider arrangements (Art. 28(3)).
2. Implement an ICT concentration risk assessment methodology and document concentration risk for critical function dependencies (Art. 29).
3. Conduct a contract review of all arrangements supporting critical or important functions, specifically checking for: competent authority access rights (Art. 30(2)(d)–(e)), CTPP regulatory non-compliance termination trigger, and incident notification SLAs compatible with the 4-hour window (Art. 30(2)(i)).
4. For hyperscale cloud arrangements: assess Art. 30 mandatory clause compliance and negotiate supplementary agreements where standard terms do not satisfy mandatory provisions (Art. 30(3)).
5. Ensure ICT provider contracts include provisions enabling TLPT scope extension where the provider supports critical functions (Pillar 3, Art. 26(2)–(3)).
6. Include sub-contractor change notification obligations in provider contracts (Art. 30(2)(h)).
