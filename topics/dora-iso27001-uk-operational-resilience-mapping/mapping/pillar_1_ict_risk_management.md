# Pillar 1 — ICT Risk Management: DORA Articles 5–16

## Scope

This file maps DORA Pillar 1 (Articles 5–16) to ISO/IEC 27001:2022 Annex A controls and identifies the UK Operational Resilience Framework (UK ORF) equivalent where applicable. The analysis identifies where ISO 27001 certification provides coverage, where UK ORF compliance provides additional coverage, and where residual gaps remain for a firm seeking DORA alignment.

---

## Control Mapping

| DORA Requirement | Article | ISO 27001:2022 Control(s) | UK ORF Equivalent | Gap / Additional Obligation |
|---|---|---|---|---|
| Management body responsibility for ICT risk — approval of ICT risk management framework, digital operational resilience strategy, ICT budget | Art. 5 | A.5.1 (Policies for information security), A.5.2 (Information security roles and responsibilities) | PRA SS1/21 §3.4 — management body responsible for operational resilience; impact tolerance approval required | ISO 27001 requires top management commitment (Clause 5.1) but does not specify board-level ownership of ICT risk or personal accountability. DORA Art. 5 is explicit that the management body (board) bears direct responsibility. Firms must formalise ICT risk as a named board agenda item with documented decisions. |
| Management body ICT training and competency requirements | Art. 5(4) | A.6.3 (Information security awareness, education and training) | No direct UK ORF equivalent | ISO 27001 A.6.3 covers awareness training for staff but does not require board-level ICT competency. DORA requires the management body to maintain sufficient knowledge to understand and challenge ICT risk reporting. Firms must evidence board ICT training or competency assessment. |
| ICT risk management framework — documented, reviewed at least annually or after major incident | Art. 6(1)–(5) | A.5.1 (Policies for information security), A.5.29 (Information security during disruption), A.5.30 (ICT readiness for business continuity) | PRA SS1/21 — self-assessment against impact tolerances; FCA PS21/3 §4 — framework for operational resilience | Partial coverage. ISO 27001 requires an ISMS framework and policies but does not specify annual review triggered by major incidents, nor does it require the framework to be explicitly board-approved as an ICT risk document. Annual mandatory review is a specific gap. |
| Digital operational resilience strategy | Art. 6(8) | A.5.1 (Policies for information security) | No direct equivalent — UK ORF addresses operational resilience strategy but not as a specifically labelled ICT document | ISO 27001 does not require a separately documented "digital operational resilience strategy." Firms must create this as a named document endorsed by the management body, distinct from the ISMS policy. |
| Identification of ICT systems, assets, and business functions | Art. 8(1)–(2) | A.5.9 (Inventory of information and other associated assets) | FCA PS21/3 / PRA SS1/21 — mapping of important business services to supporting resources | Good coverage. ISO 27001 A.5.9 requires an asset inventory. UK ORF requires mapping of important business services (IBSs) to the people, processes, technology, and third parties that support them. Combined, these provide strong coverage of Art. 8. Residual gap: DORA requires the mapping to explicitly document data flows, dependencies, and known single points of failure. |
| Business impact analysis and criticality classification of ICT functions | Art. 8(4) | A.5.12 (Classification of information), A.5.29 (Information security during disruption) | FCA PS21/3 / PRA SS1/21 — identification of important business services; impact tolerances | Partial coverage. ISO 27001 information classification (A.5.12) does not directly address ICT function criticality. UK ORF's IBS identification partially covers this. Gap: DORA requires classification to inform RTO/RPO definitions and resilience testing scope. |
| ICT security policies — protection, prevention, data integrity and availability | Art. 9(2)–(4) | A.5.1 (Policies for information security), A.8.7 (Protection against malware), A.8.8 (Management of technical vulnerabilities), A.8.9 (Configuration management), A.8.20 (Networks security), A.8.24 (Use of cryptography) | No direct UK ORF equivalent at this level of granularity | ISO 27001 Annex A provides broad coverage of the technical protection controls referenced in Art. 9. The ISO 27001 ISMS framework requires documented policies for most areas. However, DORA Art. 9 is prescriptive about the content of ICT security policies in a way that exceeds ISO 27001's flexibility. Firms should map their existing policy suite to Art. 9 requirements and identify any missing policy areas. |
| Access management controls | Art. 9(4)(b) | A.5.15 (Access control), A.5.16 (Identity management), A.5.17 (Authentication information), A.5.18 (Access rights), A.8.2 (Privileged access rights), A.8.5 (Secure authentication) | No direct UK ORF equivalent | Strong ISO 27001 coverage across multiple controls. No material gap for firms with a mature ISO 27001 ISMS. |
| ICT patch and vulnerability management | Art. 9(4)(e) | A.8.8 (Management of technical vulnerabilities) | No direct UK ORF equivalent | ISO 27001 A.8.8 provides coverage. DORA is more prescriptive about timeliness — RTS will specify patching timelines. Firms should ensure their vulnerability management process documents maximum acceptable patching windows for critical systems. |
| Detection of anomalous activities — network and ICT monitoring | Art. 10(1)–(2) | A.8.15 (Logging), A.8.16 (Monitoring activities) | No direct UK ORF equivalent at this granularity | ISO 27001 A.8.15 and A.8.16 cover logging and monitoring. DORA Art. 10 requires detection mechanisms covering the entire ICT infrastructure including network perimeter. The gap is in scope and coverage: ISO 27001 is silent on the comprehensiveness of monitoring. Firms must evidence that monitoring covers all ICT layers supporting critical functions. |
| Response and recovery — documented response plan, RTO/RPO | Art. 11(1)–(4) | A.5.26 (Response to information security incidents), A.5.29 (Information security during disruption), A.5.30 (ICT readiness for business continuity) | PRA SS1/21 — scenario testing; impact tolerances define maximum acceptable downtime | Good coverage. ISO 27001 A.5.29 and A.5.30 cover disruption response and ICT readiness for business continuity. UK ORF's impact tolerances are effectively RTOs for important business services. Gap: DORA requires RTOs and RPOs to be explicitly documented for each critical function, and Art. 11 is more prescriptive about recovery testing than ISO 27001. |
| Post-incident recovery procedures and return-to-normal operations | Art. 11(5)–(7) | A.5.26 (Response to information security incidents), A.5.30 (ICT readiness for business continuity) | PRA SS1/21 scenario testing expectations | Partial coverage. ISO 27001 addresses response but does not specifically require documented return-to-normal procedures. Gap: DORA Art. 11 requires a documented procedure for returning to BAU operations post-incident, distinct from the incident response plan itself. |
| Backup policies and procedures | Art. 12(1)–(3) | A.8.13 (Information backup) | No direct UK ORF equivalent | ISO 27001 A.8.13 provides reasonable coverage. DORA Art. 12 is more prescriptive: backups must be isolated from the primary ICT environment (air-gapped or equivalent), tested at least annually, and recovery procedures must be exercised. Firms must document backup isolation architecture and evidence annual restoration testing. |
| Recovery Time and Recovery Point Objectives | Art. 12(4)–(5) | A.5.30 (ICT readiness for business continuity) | FCA PS21/3 / PRA SS1/21 — impact tolerances (time-based) | UK ORF's impact tolerances serve a similar function to RTOs. Gap: DORA requires RTO and RPO to be set for each critical function, not only for the overall business service. Granularity requirement is higher than UK ORF. |
| Redundancy and high availability | Art. 12(6) | A.8.14 (Redundancy of information processing facilities) | No direct UK ORF equivalent | ISO 27001 A.8.14 covers redundancy. DORA is more specific about the requirement for ICT infrastructure redundancy supporting critical functions. Firms must document redundancy architecture per critical function. |
| Learning and evolving — post-incident lessons, threat intelligence integration | Art. 13(1)–(2) | A.5.27 (Learning from information security incidents), A.5.7 (Threat intelligence) | PRA SS1/21 — lessons learned from scenario testing | ISO 27001 covers both learning from incidents (A.5.27) and threat intelligence (A.5.7). DORA Art. 13 also requires integration of third-party threat intelligence into the ICT risk management framework. No material gap for firms with mature ISO 27001 implementations in these areas. |
| Crisis communication plan | Art. 14(1)–(2) | A.5.26 (Response to information security incidents) | No direct UK ORF equivalent | ISO 27001 A.5.26 requires a response plan but does not mandate separate crisis communication procedures for clients, counterparts, and the public. Gap: DORA requires a named communications function and documented communication plans for ICT-related incidents. |
| Capacity management | Art. 7(2) | A.8.6 (Capacity management) | No direct UK ORF equivalent | ISO 27001 A.8.6 provides coverage. No material gap. |
| Legacy system management | Art. 7(4) | A.8.8 (Management of technical vulnerabilities), A.8.9 (Configuration management) | No direct UK ORF equivalent | ISO 27001 covers vulnerability and configuration management but does not specifically address the lifecycle risk of legacy systems. DORA Art. 7(4) requires financial entities to identify, document, and manage the risks arising from reliance on end-of-life systems. Firms should ensure their asset inventory flags systems beyond vendor support. |

---

## Analysis

### Where ISO 27001 Provides Full or Near-Full Coverage

The technical controls referenced in DORA Pillar 1 — access management (Art. 9(4)(b)), malware protection, logging and monitoring (Art. 10), backup (Art. 12), capacity management (Art. 7(2)) — map closely to ISO 27001:2022 Annex A. A firm with a mature, certified ISMS implementing A.5.15, A.5.16, A.8.2, A.8.7, A.8.8, A.8.13, A.8.15, A.8.16 will have technical controls that satisfy most Art. 9 and Art. 10 requirements.

Threat intelligence (A.5.7) and learning from incidents (A.5.27) also provide coverage for Art. 13.

### Where DORA Is More Prescriptive Than ISO 27001

**1. Board governance.** DORA Art. 5 creates explicit personal accountability for the management body that has no equivalent in ISO 27001. ISO 27001 Clause 5.1 requires top management commitment but is silent on board-level ownership of ICT risk as a specific governance obligation. This is the single most significant structural gap.

**2. Documented digital operational resilience strategy.** Art. 6(8) requires a separately named strategy document. ISO 27001's ISMS policy is not a direct substitute.

**3. Annual mandatory review.** Art. 6 requires review at least annually or after a major ICT-related incident. ISO 27001 requires periodic reviews but the frequency is not mandated.

**4. RTO/RPO per critical function.** Art. 12 requires RTO and RPO to be set for each critical function individually. ISO 27001 does not require this granularity.

**5. Backup isolation.** Art. 12 explicitly requires backups to be isolated from the primary ICT environment. ISO 27001 A.8.13 does not specify isolation architecture.

**6. Crisis communications.** Art. 14 requires a named crisis communications function and documented plans covering external stakeholders. ISO 27001 does not mandate this as a separate control.

### Where UK ORF Adds Coverage

UK ORF's important business service mapping (FCA PS21/3 / PRA SS1/21) partially satisfies DORA Art. 8 (identification and classification of ICT functions). Impact tolerances partially satisfy Art. 12 RTO requirements. Scenario testing expectations under UK ORF partially satisfy Art. 11 recovery testing.

The combination of ISO 27001 + UK ORF compliance reduces the Pillar 1 gap but does not eliminate it. The primary residual obligations requiring specific DORA-oriented work are board governance formalisation, the digital operational resilience strategy document, and function-level RTO/RPO documentation.

### Net Gap for an ISO 27001-Certified, UK ORF-Compliant Firm

1. Formalise board governance of ICT risk with documented decisions and personal accountability (Art. 5).
2. Create a separately named digital operational resilience strategy endorsed by the management body (Art. 6(8)).
3. Establish annual mandatory review of the ICT risk management framework triggered by the DORA calendar, not only by internal audit cycles (Art. 6).
4. Document RTO and RPO for each critical or important function (Art. 12).
5. Confirm backup isolation architecture is documented and annual restoration testing is evidenced (Art. 12).
6. Create a crisis communication plan covering external stakeholders (Art. 14).
7. Flag legacy/end-of-life systems in the asset inventory with documented risk treatment (Art. 7(4)).
