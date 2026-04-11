# Pillar 3 — Digital Operational Resilience Testing: DORA Articles 24–27

## Scope

This file maps DORA Pillar 3 (Articles 24–27) to ISO/IEC 27001:2022 Annex A controls and identifies UK Operational Resilience Framework (UK ORF) and CBEST equivalents. Pillar 3 is the most significant departure from ISO 27001 in terms of prescriptiveness: ISO 27001 does not mandate testing programmes, specific testing methodologies, fixed testing cadence, or regulatory disclosure of test results. DORA does.

---

## Control Mapping

| DORA Requirement | Article | ISO 27001:2022 Control(s) | UK ORF / CBEST Equivalent | Gap / Additional Obligation |
|---|---|---|---|---|
| Digital operational resilience testing programme — risk-based, covering critical or important functions, reviewed annually | Art. 24(1)–(2) | A.5.35 (Independent review of information security), A.5.36 (Compliance with policies, rules and standards) | PRA SS1/21 — scenario testing of important business services; FCA PS21/3 — testing expectations | ISO 27001 A.5.35 requires independent review of information security. UK ORF requires scenario testing. Both provide partial coverage. Gap: DORA requires a formally documented testing programme (not ad hoc reviews) with a defined scope tied to critical functions, annual review, and board-level endorsement. Firms must create a standalone Digital Operational Resilience Testing Programme document. |
| Vulnerability assessments and scans | Art. 25(1)(a) | A.8.8 (Management of technical vulnerabilities) | No direct UK ORF equivalent | ISO 27001 A.8.8 covers vulnerability management including scanning. Good coverage for this component. Residual gap: DORA requires vulnerability assessments to be in-scope for the testing programme for critical functions specifically. Firms should ensure scanning scope covers all systems supporting critical or important functions. |
| Network security assessments | Art. 25(1)(b) | A.8.20 (Networks security), A.8.8 (Management of technical vulnerabilities) | No direct UK ORF equivalent | ISO 27001 A.8.20 covers network security policy. Technical network security assessments are covered under vulnerability management (A.8.8). Coverage is reasonable for firms with established vulnerability management and network review processes. |
| Gap analyses against ICT security standards | Art. 25(1)(c) | A.5.36 (Compliance with policies, rules and standards) | No direct UK ORF equivalent | ISO 27001 A.5.36 requires compliance checking. Gap analyses against standards are a common ISO 27001 activity. No material additional gap for firms with mature compliance monitoring. |
| Open source analyses | Art. 25(1)(d) | A.8.8 (Management of technical vulnerabilities) | No direct UK ORF equivalent | Open source and software composition analysis is within the broad scope of A.8.8 (technical vulnerability management). However, ISO 27001 does not specifically require software composition analysis. Gap: firms using open source components in systems supporting critical functions should formally include software composition analysis (SCA) in their testing programme. |
| Source code reviews (where feasible) | Art. 25(1)(e) | A.8.28 (Secure coding), A.8.29 (Security testing in development and acceptance) | No direct UK ORF equivalent | ISO 27001 A.8.28 and A.8.29 cover secure coding and security testing in development. These provide reasonable coverage. DORA qualifies source code review with "where feasible," acknowledging proportionality. For firms developing ICT systems internally, code review processes should be documented as part of the testing programme. |
| Scenario-based tests | Art. 25(1)(f) | A.5.29 (Information security during disruption) | PRA SS1/21 — scenario testing of important business services at least annually | UK ORF provides direct coverage here. ISO 27001 A.5.29 covers disruption scenarios. Combined, these satisfy the scenario-based testing element. Gap is limited to ensuring scenario testing covers the ICT layer (not only the business service layer). |
| Compatibility testing | Art. 25(1)(g) | A.8.29 (Security testing in development and acceptance) | No direct UK ORF equivalent | ISO 27001 A.8.29 covers acceptance testing. For firms with structured release and change management processes, compatibility testing is typically included. No material additional gap for firms with mature A.8.29 implementations. |
| Performance testing | Art. 25(1)(h) | A.8.6 (Capacity management) | No direct UK ORF equivalent | ISO 27001 A.8.6 covers capacity planning. Performance testing under load is typically a component of capacity management. Firms should confirm load and stress testing is explicitly included in testing schedules for critical function systems. |
| End-to-end testing | Art. 25(1)(i) | A.5.30 (ICT readiness for business continuity) | PRA SS1/21 scenario testing | End-to-end testing of critical functions under disruption scenarios is covered by UK ORF scenario testing and ISO 27001 A.5.30. No material additional gap for firms conducting scenario-based exercises that include technology recovery. |
| Penetration testing | Art. 25(1)(j) | A.8.8 (Management of technical vulnerabilities), A.5.35 (Independent review of information security) | CBEST (Bank of England/FCA intelligence-led testing framework) | ISO 27001 does not mandate penetration testing specifically. However, penetration testing is a standard component of technical vulnerability management (A.8.8) and independent review (A.5.35) for mature firms. UK firms subject to CBEST assessments have established penetration testing as a regulated activity. Gap for non-CBEST firms: DORA Art. 25 creates an expectation (though not a hard mandate for basic testing) that penetration testing is performed for systems supporting critical functions. Firms should document frequency and scope. |
| Advanced testing — Threat-Led Penetration Testing (TLPT) | Art. 26(1)–(7) | A.5.35 (Independent review of information security) | CBEST (intelligence-led penetration testing framework; Bank of England published framework aligned to TIBER-EU) | This is the largest gap in Pillar 3 for qualifying firms. ISO 27001 contains no equivalent to TLPT. TIBER-EU/CBEST-style testing requires: threat intelligence gathering about the specific firm, a targeted attack scenario using current threat actor TTPs, conducted by approved testers against production systems, with results shared with the competent authority. For firms qualifying under Art. 26(8) criteria, this requires establishing or commissioning a TLPT programme from scratch unless CBEST assessments are recognised as equivalent. |
| TLPT frequency — at least every 3 years | Art. 26(1) | No direct ISO 27001 equivalent | CBEST — frequency varies; systemically important firms typically assessed every 2-3 years | ISO 27001 does not mandate test frequency. DORA's 3-year TLPT cycle is a hard requirement for qualifying entities. Firms must schedule TLPT in their testing calendar and budget for it. |
| TLPT scope — critical or important functions and supporting ICT systems, including third-party providers | Art. 26(2)–(3) | No direct ISO 27001 equivalent | CBEST — scope includes systems supporting core business activities | Gap: DORA requires TLPT to extend to ICT third-party service providers supporting critical functions (with provider cooperation). This requires contractual provisions (Art. 30) enabling TLPT scope extension. Firms must ensure ICT provider contracts include TLPT participation obligations. |
| TLPT results and remediation plans shared with competent authority | Art. 26(5) | No direct ISO 27001 equivalent | CBEST — results shared with Bank of England / FCA | ISO 27001 does not require test results to be disclosed to regulators. DORA Art. 26 mandates disclosure. Firms must include regulatory disclosure in TLPT governance procedures and ensure remediation plans are documented before results are submitted. |
| Requirements for TLPT testers — independence, competency, professional indemnity | Art. 27 | A.5.35 (Independent review of information security) | CBEST — defined tester accreditation requirements (CREST or equivalent) | ISO 27001 A.5.35 requires independence but does not specify tester qualifications. DORA Art. 27 sets out specific requirements for external TLPT testers. Firms commissioning TLPT must verify tester compliance with Art. 27 (or recognised equivalent standards). |
| Physical security review as part of testing programme | Art. 25(1) | A.7.1 (Physical security perimeters), A.7.2 (Physical entry) | No direct UK ORF equivalent | ISO 27001 Annex A.7 physical controls cover physical security. Physical security review as part of the testing programme is within scope of A.7 but not explicitly tied to a testing cycle. Firms should ensure physical security of facilities supporting critical functions is formally assessed within the testing programme. |

---

## Analysis

### Where ISO 27001 Provides Coverage

The basic testing components of DORA Art. 25 — vulnerability assessments, network security assessments, compliance gap analyses, penetration testing — are within the operational scope of mature ISO 27001 implementations through A.8.8 (vulnerability management), A.5.35 (independent review), and A.8.29 (security testing in development). Firms with documented, risk-based vulnerability management programmes and regular penetration testing will have strong coverage of the Art. 25 basic testing requirement.

Scenario-based testing and end-to-end testing are covered by the combination of ISO 27001 A.5.29/A.5.30 and UK ORF scenario testing requirements.

### Where DORA Is More Prescriptive Than ISO 27001

**1. Formal testing programme document.** ISO 27001 does not require a separately documented "digital operational resilience testing programme." DORA Art. 24 requires this as a named, board-endorsed document with a defined scope, risk-based methodology, and annual review.

**2. TLPT (Art. 26).** This is the most material gap. No ISO 27001 control requires threat intelligence-led penetration testing using current threat actor TTPs against production systems with results disclosed to regulators. For qualifying firms, TLPT is a materially new capability requirement.

**3. Software composition analysis.** DORA Art. 25(1)(d) references open source analysis (effectively SCA). ISO 27001 does not specifically require this. For firms with significant open source component usage in critical systems, this may require establishing a new tooling and process capability.

**4. Third-party inclusion in TLPT scope.** Art. 26(2)–(3) requires TLPT scope to extend to ICT providers supporting critical functions. This has contractual implications (Art. 30 must include TLPT participation clauses) and logistical implications (third-party coordination for testing execution).

### Where UK ORF Provides Coverage

PRA SS1/21 requires scenario testing of important business services, which substantially covers the scenario-based and end-to-end testing elements of Art. 25. UK firms with CBEST assessments have the most relevant TLPT equivalent — CBEST uses threat intelligence to design tailored attack scenarios against production systems and has formal tester accreditation requirements through CREST.

The FCA has indicated that CBEST may be recognised as equivalent to TIBER-EU for DORA Art. 26 purposes, but formal equivalence confirmation is pending. Firms should monitor regulatory guidance on this point.

### Cross-Reference

The Vulnerability Triage Framework (`../vulnerability-triage-framework/`) provides the post-testing prioritisation workflow for addressing findings from Art. 25 assessments — risk-scoring vulnerabilities by exploitability, asset criticality, and environmental context to produce defensible remediation priority decisions.

### Net Gap for an ISO 27001-Certified, UK ORF-Compliant Firm

1. Create a formally documented Digital Operational Resilience Testing Programme covering all Art. 25 testing components, scoped to critical and important functions, with annual review (Art. 24).
2. Include software composition analysis (SCA) in the testing programme for systems with open source components supporting critical functions (Art. 25(1)(d)).
3. Determine whether the firm qualifies for TLPT under Art. 26(8) criteria. If yes: establish a TLPT programme aligned to TIBER-EU or confirm CBEST equivalence with the competent authority.
4. Ensure ICT provider contracts include provisions enabling TLPT scope extension to cover third-party ICT systems supporting critical functions (Art. 26(2)–(3) — requires Art. 30 contract clauses).
5. Establish a regulatory disclosure procedure for TLPT results and remediation plans (Art. 26(5)).
6. Confirm TLPT tester compliance with Art. 27 requirements when commissioning external testers.
