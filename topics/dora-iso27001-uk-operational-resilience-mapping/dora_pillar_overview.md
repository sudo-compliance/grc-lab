# DORA Pillar Overview

This document summarises the obligations, governance requirements, and reporting expectations under each of DORA's five pillars. It is a reference for the detailed mapping files, not a substitute for reading the regulation.

References are to Regulation (EU) 2022/2554 as published in the Official Journal of the European Union (OJ L 333, 27.12.2022).

---

## Pillar 1 — ICT Risk Management (Articles 5–16)

### Article Range and Scope

Articles 5–16 establish the foundational ICT risk management framework obligation. This pillar is the broadest in scope and underpins all other pillars.

### Key Obligations

- **Art. 5** — The management body bears ultimate responsibility for ICT risk management. It must approve and review the ICT risk management framework, allocate adequate budget and resources for ICT security, approve the digital operational resilience strategy, and ensure adequate ICT security training for staff. Board-level personal accountability is explicit.
- **Art. 6** — Financial entities must maintain a sound and documented ICT risk management framework reviewed at least annually (or after major ICT-related incidents). The framework must cover ICT systems, data flows, key dependencies, and known ICT risks.
- **Art. 7** — ICT systems, protocols, and tools must be kept up to date, reliable, and have sufficient capacity and resilience. Legacy system management is explicitly addressed.
- **Art. 8** — Financial entities must identify and classify all ICT-supported business functions, roles, assets, and information assets. Business impact analysis must inform the classification.
- **Art. 9** — ICT security policies must address protection, prevention, and physical environment controls. Access management, patch management, encryption, and supply chain security are referenced.
- **Art. 10** — Mechanisms must be in place to detect anomalous activities, identify potential ICT-related incidents, and generate alerts. Monitoring coverage must extend to network infrastructure and ICT system activity.
- **Art. 11** — Response and recovery plans must be documented, tested, and aligned to the ICT business continuity policy. Communication procedures during incidents must be defined.
- **Art. 12** — Backup and restoration policies must be in place. Backups must be isolated from the production environment and tested regularly. Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs) must be defined and documented.
- **Art. 13** — After ICT-related incidents, financial entities must collect information from incidents and near-misses, conduct root cause analysis, and incorporate lessons into the ICT risk management framework. Third-party threat intelligence must also feed the learning process.
- **Art. 14** — Crisis communication plans must be in place for staff, clients, and counterparts. Designated ICT crisis communications roles must be identified.
- **Art. 15** — EBA, EIOPA, and ESMA (ESAs) will develop regulatory technical standards (RTS) further harmonising ICT risk management tools and methodologies. Financial entities must comply with applicable RTS.
- **Art. 16** — A simplified ICT risk management framework applies to smaller and non-complex institutions. The simplified framework has fewer prescriptive requirements.

### Governance Requirements

The management body (typically the board) must:
- Approve the ICT risk management framework and its annual review
- Approve the ICT strategy and the digital operational resilience strategy
- Allocate adequate ICT security budget
- Receive and act on ICT risk reports
- Bear personal liability for compliance failures in certain member state transpositions

### Interaction with Other Pillars

Pillar 1 is the governance foundation. The ICT risk management framework required by Art. 6 must encompass and integrate the obligations from all other pillars — incident management (Pillar 2), resilience testing (Pillar 3), and third-party risk (Pillar 4) must be components of the overall framework.

---

## Pillar 2 — ICT-Related Incident Management, Classification and Reporting (Articles 17–23)

### Article Range and Scope

Articles 17–23 govern how financial entities detect, classify, manage, and report ICT-related incidents. This pillar creates the most operationally immediate obligations, particularly the mandatory regulatory notification timelines in Art. 19.

### Key Obligations

- **Art. 17** — Financial entities must establish and implement an ICT-related incident management process to detect, manage, and notify ICT-related incidents. The process must assign roles, define escalation paths, and integrate with the overall ICT risk management framework.
- **Art. 18** — Classification of ICT-related incidents as "major" must be based on defined criteria: number of clients or financial counterparts affected; duration and service downtime; geographical spread; data losses (affecting availability, authenticity, integrity, or confidentiality); criticality of services affected; economic impact. ESAs will issue RTS on classification criteria.
- **Art. 19** — Major ICT-related incidents must be reported to competent authorities in three stages: (1) initial notification within 4 hours of classifying the incident as major, and no later than 24 hours from first detection; (2) intermediate report within 72 hours of the initial notification or upon material change in status; (3) final report within 1 month of incident resolution. The notification must go to the relevant competent authority (e.g., national supervisor for banking, FCA/PRA for UK entities in scope). Voluntary notification of significant cyber threats (not rising to the level of a major incident) is permitted under Art. 23.
- **Art. 20** — The ESAs will harmonise reporting templates and content requirements. Financial entities must use prescribed templates once available.
- **Art. 21** — A single-entry-point reporting mechanism is being established to avoid duplication where financial entities are supervised by multiple competent authorities.
- **Art. 22** — Competent authorities must provide supervisory feedback after incident notifications, including information on threat landscape and remediation expectations.
- **Art. 23** — Voluntary notification of significant cyber threats is encouraged. This does not create a mandatory obligation but signals an expectation of proactive engagement with supervisors.

### Governance Requirements

- Defined incident management process with named roles and escalation paths
- Criteria-based classification process for "major" incidents
- Regulatory notification procedure with documented timelines and accountable owner
- Documentation of all incident decisions, classifications, and notifications

### Reporting and Documentation Requirements

- Notification log recording date/time of classification, notification submission, and subsequent reports
- Root cause analysis documentation for major incidents
- Evidence that lessons learned have been incorporated into the ICT risk management framework

### Cross-Reference

The Incident Classification & Escalation Framework (`../incident-classification-escalation-framework/`) in this repository operationalises Arts. 17–19 through a P1–P4 severity model with DORA-aligned notification timelines.

### Interaction with Other Pillars

Post-incident root cause analysis feeds back into the ICT risk management framework (Pillar 1, Art. 13). Evidence of incidents and lessons learned may also inform the resilience testing programme (Pillar 3).

---

## Pillar 3 — Digital Operational Resilience Testing (Articles 24–27)

### Article Range and Scope

Articles 24–27 require financial entities to maintain a programme of digital operational resilience testing. The pillar has two tiers: basic testing for all in-scope entities, and advanced threat-led penetration testing (TLPT) for qualifying entities.

### Key Obligations

- **Art. 24** — All financial entities must maintain a digital operational resilience testing programme covering ICT tools, systems, and processes supporting critical or important functions. Testing must be risk-based and commensurate with the firm's size, risk profile, and operational complexity. The programme must be reviewed at least annually.
- **Art. 25** — The basic testing programme must include vulnerability assessments and scans, open source analyses, network security assessments, gap analyses, physical security reviews, scenario-based tests, source code reviews where feasible, compatibility testing, performance testing, end-to-end testing, and penetration testing. Not all components are mandatory for all entities — the programme should be proportionate.
- **Art. 26** — Advanced testing through threat-led penetration testing (TLPT) is mandatory for qualifying financial entities. Criteria triggering TLPT requirements are defined in Art. 26(8) and will be specified in RTS: they relate to the firm's systemic importance, ICT risk profile, and scale. TLPT must be performed at least every 3 years, cover critical or important functions and supporting ICT systems, and use the TIBER-EU framework or a competent authority-recognised equivalent. Results must be shared with the competent authority. TLPT requires involvement of internal staff and, where applicable, external testers under Art. 27.
- **Art. 27** — External testers performing TLPT must meet specific requirements including: independence, appropriate professional indemnity insurance, technical competency, and in certain cases, prior certification. Internal testers conducting TLPT must be functionally independent and subject to oversight.

### Governance Requirements

- Board-approved digital operational resilience testing programme
- Risk-based methodology for scoping and prioritising tests
- Annual review of the testing programme
- For TLPT: competent authority notification before and after each test

### Reporting and Documentation Requirements

- Testing reports for each test cycle
- Remediation plans addressing findings
- TLPT results and remediation plans shared with competent authority
- Documentation of the testing programme rationale and scope

### Key Gap

ISO 27001 requires independent review (A.5.35) and technical vulnerability management (A.8.8) but does not mandate TLPT, specific testing frequency, threat intelligence-led testing frameworks, or regulatory disclosure of test results. DORA Pillar 3 is materially more prescriptive in this area.

### UK ORF Overlay

The CBEST framework (Bank of England intelligence-led vulnerability testing framework) is broadly equivalent to TIBER-EU. UK firms already subject to CBEST — primarily systemically important banks and infrastructure firms — have a strong foundation for DORA Art. 26 compliance. Competent authorities may recognise CBEST assessments as equivalent TLPT for DORA purposes, though formal recognition has not been confirmed at time of writing.

### Cross-Reference

The Vulnerability Triage Framework (`../vulnerability-triage-framework/`) provides the post-testing prioritisation workflow for addressing findings from Art. 25 assessments.

### Interaction with Other Pillars

Testing findings feed back into the ICT risk management framework (Pillar 1). Third-party ICT service providers supporting critical functions may need to participate in or facilitate TLPT (Pillar 4).

---

## Pillar 4 — ICT Third-Party Risk Management (Articles 28–44)

### Article Range and Scope

Articles 28–44 cover ICT third-party risk management at two levels: obligations on financial entities (Arts. 28–30) and the Union-wide oversight framework for designated critical ICT third-party service providers (Arts. 31–44). These are distinct obligations. Arts. 31–44 apply to CTPPs themselves, not to financial entities, though financial entities must understand how their critical providers are overseen.

### Key Obligations — Financial Entities (Arts. 28–30)

- **Art. 28** — Financial entities must manage ICT third-party risk as an integral component of the ICT risk management framework (Pillar 1). An ICT third-party risk management strategy must be documented. Financial entities must maintain and regularly update a **Register of Information** listing all contractual arrangements with ICT third-party service providers (Art. 28(3)). This register must be reported to competent authorities on request and in certain cases proactively.
- **Art. 29** — Before entering a new ICT third-party arrangement, financial entities must conduct due diligence proportionate to the criticality of the function. Concentration risk at entity level (where a critical function depends on a single provider or a small number of providers) must be assessed and managed.
- **Art. 30** — Contractual arrangements for ICT services must include mandatory provisions covering: service level descriptions and performance targets; data location and processing jurisdiction; availability, authenticity, integrity, and confidentiality of data; full access, inspection, and audit rights (including by competent authorities); cooperation with competent authorities; termination rights and exit strategies (including transition assistance); subcontracting conditions and restrictions; and incident notification obligations. Non-negotiable contractual clauses cannot be waived even if the ICT provider is a large technology company.

### Key Obligations — CTPP Oversight (Arts. 31–44)

- **Art. 31** — ESAs can designate ICT providers as critical if they serve a significant number of financial entities and provide services supporting critical functions. Designation is Union-wide.
- **Arts. 32–35** — A Lead Overseer is assigned to each CTPP (one of EBA, EIOPA, or ESMA depending on the sector most represented among the CTPP's clients). The Lead Overseer has powers to request information, conduct investigations and inspections, issue recommendations, and require remediation.
- **Arts. 36–44** — Oversight powers, cooperation between overseers, professional secrecy, and penalties for CTPPs.

### Governance Requirements

- Documented ICT third-party risk management strategy
- Due diligence process for new and existing critical ICT arrangements
- Register of Information maintained and current
- Contractual review programme to ensure Art. 30 clauses are in place
- Concentration risk assessment for critical functions

### Reporting and Documentation Requirements

- Register of Information (Art. 28(3)) — must include all contractual arrangements; must be submitted to competent authority on request
- Due diligence records for critical ICT providers
- Contractual documentation evidencing Art. 30 mandatory clauses

### Cross-Reference

The TPRM Framework (`../third-party-risk-management-iso-iec-27001-2022-itilv4/`) in this repository provides the operational TPRM artefacts (vendor security questionnaire, risk scoring matrix, due diligence report template) aligned to ISO 27001 A.5.19–A.5.22 and relevant to meeting Art. 28–30 obligations.

### Interaction with Other Pillars

ICT third-party risks must be integrated into the ICT risk management framework (Pillar 1). Third-party incidents may trigger the incident management and reporting obligations of Pillar 2. Third-party ICT providers supporting critical functions may be in scope for resilience testing (Pillar 3).

---

## Pillar 5 — Information Sharing Arrangements (Article 45)

### Article Range and Scope

Article 45 is a single article creating a permissive (not mandatory) framework for information sharing on cyber threats among financial entities.

### Key Obligations

- **Art. 45** — Financial entities may, on a voluntary basis, exchange cyber threat intelligence and information — including indicators of compromise, tactics, techniques and procedures, cyber security alerts, and configuration tools — among themselves through information sharing arrangements. Participation is voluntary. Sharing must be conducted within trusted communities. Arrangements must include safeguards for the protection of personal data, for compliance with competition law, and for appropriate treatment of sensitive business information. Competent authorities and ENISA are to be informed of the existence of sharing arrangements.

### Governance Requirements

- Where participating: a documented information sharing policy addressing what is shared, under what governance, with what safeguards
- Legal review to confirm competition law compliance
- Data protection assessment for any personal data within shared threat intelligence

### Key Point

Pillar 5 creates no mandatory obligation. It formalises and encourages what responsible financial institutions should already be doing. UK financial services already has established information sharing mechanisms (Cyber Defence Alliance, NCSC CiSP) that substantially satisfy the intent of Art. 45.

### Interaction with Other Pillars

Threat intelligence obtained through information sharing feeds the detection capability (Pillar 1, Art. 10) and the learning and evolving requirements (Pillar 1, Art. 13). It may also inform the threat scenarios used in resilience testing (Pillar 3).
