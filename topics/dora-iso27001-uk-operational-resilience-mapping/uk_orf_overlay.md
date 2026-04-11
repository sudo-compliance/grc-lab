# UK Operational Resilience Framework Overlay

## Overview

This document compares DORA (Regulation (EU) 2022/2554) and the UK Operational Resilience Framework (UK ORF) directly, independent of ISO 27001. Its purpose is to identify where a firm that is fully compliant with UK ORF already satisfies DORA requirements, where DORA creates additional obligations, and where the two regimes pull in different directions.

The UK ORF comprises:
- **FCA PS21/3** (Building Operational Resilience, March 2021) — applies to FCA-regulated firms
- **PRA SS1/21** (Operational Resilience, March 2021) — applies to PRA-regulated firms (banks, insurers, large investment firms)
- **Bank of England PS21/3** (Operational Resilience, March 2021) — applies to Bank of England-regulated firms (including FMIs)
- **FCA PS24/16 / PRA PS16/24** (Critical Third Parties, November 2024) — effective 1 January 2025

The compliance deadline for the initial UK ORF requirements (important business services, impact tolerances, scenario testing, self-assessment) was **31 March 2025**.

---

## Key Concepts Comparison

| Concept | DORA | UK ORF |
|---|---|---|
| Unit of resilience | Critical or important functions (ICT-layer concept) | Important business services (business-layer concept) |
| Tolerance threshold | No direct equivalent — DORA addresses recovery through RTO/RPO requirements | Impact tolerances — maximum tolerable disruption for each important business service |
| Board accountability | Management body explicitly responsible for ICT risk management (Art. 5) | Management body responsible for identifying important business services and setting impact tolerances |
| Scenario testing | Proportionate programme (Art. 24–25); TLPT for qualifying firms (Art. 26) | Scenario testing of severe but plausible disruptions at least annually |
| Third-party risk | Pillar 4 — detailed contractual and oversight requirements (Arts. 28–44) | Operational resilience obligations extend to third-party dependencies; FCA PS24/16/PRA PS16/24 for CTPs |
| Incident reporting | Mandatory, prescriptive timelines (4h/72h/1 month) to competent authority | Principles-based — "immediately" to FCA/PRA for material incidents; no fixed-hour deadline |
| Self-assessment | No formal self-assessment requirement | Annual self-assessment required; submitted to FCA/PRA on request |
| Information sharing | Voluntary (Art. 45) | No direct equivalent obligation |

---

## Comparison by Requirement Area

| Requirement Area | DORA | UK ORF | Alignment | Key Difference |
|---|---|---|---|---|
| Board-level governance of resilience | Management body approval of ICT risk framework, digital operational resilience strategy, ICT budget (Art. 5) | Management body approval of important business services, impact tolerances (PS21/3, SS1/21) | Strong alignment on board ownership principle | DORA is more specific about the ICT risk dimension of governance and requires named board responsibility for the ICT budget and ICT risk reporting. UK ORF focuses on the board's role in setting resilience parameters for business services. |
| Identification of critical functions | ICT systems and processes supporting critical or important functions must be identified and classified (Art. 8) | Important business services must be identified, with mapping to supporting resources | Partial alignment | DORA operates at the ICT/technology layer; UK ORF operates at the business service layer. Both require mapping, but the granularity and layer of analysis differ. UK ORF firms already doing IBS mapping have a strong starting point for DORA Art. 8 but must extend the mapping to the ICT system and data flow level. |
| Impact tolerances and RTO/RPO | RTOs and RPOs must be defined for each critical function (Art. 12) | Impact tolerances set maximum acceptable disruption for each important business service (PS21/3, SS1/21) | Strong conceptual alignment; methodological difference | UK ORF's impact tolerances are effective RTOs for the business service layer. DORA requires RTO/RPO at the ICT function/system level. A firm with UK ORF impact tolerances must cascade these down to ICT-layer RTOs to satisfy DORA Art. 12. |
| Scenario testing | Proportionate testing programme (Art. 24–25); TLPT for qualifying firms (Art. 26) | Severe but plausible scenario testing annually; no TLPT equivalent in UK ORF | Partial alignment — UK ORF scenario testing covers business service level; DORA testing covers ICT layer | UK ORF scenario testing is technology-inclusive but business-service-oriented. DORA testing must cover the ICT systems themselves (vulnerability assessments, penetration testing, TLPT). CBEST is the closest UK equivalent to DORA TLPT for systemically important firms. |
| Incident reporting — regulator notification | Major incident: 4-hour initial notification from classification, 24-hour maximum from detection; 72-hour intermediate; 1-month final (Art. 19) | Material incidents: notify FCA/PRA "immediately" upon awareness; no fixed-hour deadline (FCA SUP 15.3, PRA expectations) | Partial alignment — both require prompt regulatory notification | This is the most significant operational difference. UK ORF's "immediately" standard is principles-based with no fixed clock. DORA's Art. 19 timelines are hard deadlines. UK firms with EU regulatory exposure must run both sets of timelines simultaneously. The more demanding DORA timeline should drive the firm's notification process design. |
| Third-party risk management | Detailed obligations: Register of Information, due diligence, mandatory contractual clauses, concentration risk assessment (Arts. 28–30) | Operational resilience must extend to third-party dependencies; exit strategies required for material outsourcing; FCA SYSC 8 | Partial alignment | UK ORF and FCA SYSC 8 provide a strong process foundation. DORA is more prescriptive: the Register of Information has a defined format, Art. 30 mandatory clauses are non-negotiable, and concentration risk assessment is explicit. |
| Critical third-party oversight | CTPP designation and oversight by ESA Lead Overseer (Arts. 31–44) | Critical Third Party designation by HM Treasury; FCA/PRA operational resilience requirements for designated CTPs (PS24/16, PS16/24, effective 1 January 2025) | Strong conceptual alignment; separate legal regimes | Both regimes create a category of systemically important ICT providers subject to enhanced oversight. DORA CTPPs are designated EU-wide by ESAs; UK CTPs are designated by HM Treasury. A UK-based provider could be designated under both regimes simultaneously, creating dual compliance obligations. |
| Information sharing | Voluntary (Art. 45) | No direct UK ORF equivalent; CiSP and CDA are industry-led | Partial alignment (practice level) | UK financial services already uses established information sharing forums (CDA, CiSP). DORA Art. 45 formalises this practice at EU level. No material operational difference for UK firms with existing forum participation. |
| Self-assessment | No formal DORA self-assessment requirement analogous to UK ORF | Annual self-assessment of compliance with impact tolerances; submitted to FCA/PRA on request | UK ORF is more demanding in this specific area | DORA does not require a formal annual self-assessment in the same structured way as UK ORF. UK ORF's self-assessment requirement is an additional UK-specific obligation without a direct DORA counterpart. |

---

## Areas Where UK ORF Already Provides Equivalent or Strong Coverage

The following DORA requirements are substantially satisfied by a firm that has fully complied with UK ORF as of 31 March 2025:

1. **Board-level resilience governance.** UK ORF's management body ownership of important business services and impact tolerances directly satisfies the governance intent of DORA Art. 5. Supplementary work is limited to formalising ICT-specific board responsibility.

2. **Scenario testing of important functions.** UK ORF's annual scenario testing requirement, requiring severe but plausible disruption scenarios, covers the scenario-based and end-to-end testing components of DORA Art. 25. Technology scenarios are typically in scope for UK ORF exercises.

3. **Business continuity and recovery planning.** UK ORF's operational resilience mapping (important business services → supporting resources → impact tolerances) provides a strong foundation for DORA Art. 11 (response and recovery) and Art. 12 (RTO/RPO), though the latter requires extension to ICT-layer granularity.

4. **Third-party dependency management.** UK ORF's requirement to map third-party dependencies for important business services, combined with FCA SYSC 8 outsourcing requirements, satisfies the process foundation of DORA Arts. 28–30 for regulated activity outsourcing.

5. **Critical third-party oversight readiness.** UK firms subject to FCA PS24/16 / PRA PS16/24 (CTPs) already have a framework for managing designated critical providers, which aligns with the intent of DORA Arts. 31–44 for managing CTPPs.

---

## Areas Where DORA Creates Obligations Beyond UK ORF

1. **Prescriptive incident notification timelines (Art. 19).** DORA's 4-hour / 72-hour / 1-month structured notification framework exceeds UK ORF's principles-based approach. This requires specific process and tooling investment.

2. **Register of Information (Art. 28(3)).** UK ORF does not require a register of ICT third-party arrangements in the DORA-prescribed format. Building and maintaining this register is a new operational obligation.

3. **Mandatory ICT contractual clauses (Art. 30).** UK ORF does not specify the mandatory content of ICT provider contracts with the granularity of Art. 30. A contract review programme targeting Art. 30 compliance is required.

4. **ICT concentration risk assessment (Art. 29).** Not a formal UK ORF requirement. Firms must establish a methodology and document findings.

5. **TLPT programme for qualifying firms (Art. 26).** UK ORF does not mandate TLPT. CBEST is the functional UK equivalent but applies only to systemically important firms. Firms qualifying under DORA Art. 26(8) who do not already conduct CBEST assessments face a new capability requirement.

6. **Digital operational resilience strategy as a named document (Art. 6(8)).** UK ORF does not require a separately named "digital operational resilience strategy" endorsed by the management body.

7. **Board ICT competency (Art. 5(4)).** UK ORF requires board capability to discharge operational resilience responsibilities but does not specifically require ICT training documentation for the management body.

---

## Practical Implications for Dual-Regime Firms

Firms running both DORA and UK ORF simultaneously should note:

- **Terminology alignment is imperfect.** "Critical or important functions" (DORA) and "important business services" (UK ORF) are not synonymous. Both require their own identification exercise, though there will be substantial overlap. A firm should maintain one master mapping document that cross-references both.

- **The DORA incident reporting timeline sets the operational standard.** Where a firm must comply with both DORA Art. 19 and FCA SUP 15.3, the more demanding DORA timeline (4 hours from classification) should drive notification process design. Meeting DORA will automatically satisfy the less prescriptive FCA "immediately" standard.

- **UK ORF self-assessment is an additional obligation.** DORA does not replicate UK ORF's annual self-assessment requirement. Firms must maintain the UK ORF self-assessment process alongside DORA compliance activities.

- **Two critical third-party regimes may apply simultaneously.** A UK-domiciled ICT provider serving both UK and EU financial entities may be designated as a CTPP (DORA) and a CTP (UK ORF) simultaneously, with dual regulatory obligations. Financial entities using such providers should ensure their contracts and oversight processes address both designations.

- **Leverage, do not duplicate.** Where UK ORF processes (scenario testing, business service mapping, third-party dependency mapping) satisfy DORA requirements, firms should document that alignment explicitly rather than creating parallel processes. The output of UK ORF compliance exercises should be reused as DORA evidence where appropriate.
