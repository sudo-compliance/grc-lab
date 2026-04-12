# GRC Maturity Assessment Tool

A browser-based, self-contained maturity assessment tool for information security programmes aligned to ISO/IEC 27001:2022, with touchpoints to DORA and UK FCA/PRA Operational Resilience requirements.

---

## Overview

Maturity assessments are a practical way to baseline an organisation's security programme, identify where effort should be focused, and track improvement over time. This tool provides a structured, question-driven assessment across ten GRC domains. It produces a scored output, radar chart visualisation, and prioritised improvement recommendations — all without any server, account, or data transmission.

The assessment takes under 15 minutes to complete. Output is exportable as plain text or structured JSON for use in audit evidence, board reporting, or programme planning.

---

## Tool

| File | Purpose |
|---|---|
| `app.jsx` | React component — self-contained assessment application |

The component uses React hooks, Recharts for visualisation, Lucide React for icons, and Tailwind CSS for styling. No external dependencies beyond these. No storage or network calls.

---

## Assessment Domains

| # | Domain | ISO/IEC 27001:2022 Reference |
|---|---|---|
| 1 | Governance and Leadership | Clause 5, A.5.1–A.5.4 |
| 2 | Risk Management | Clause 6.1, A.5.7–A.5.8 |
| 3 | Asset Management | A.5.9–A.5.14 |
| 4 | Access Control and Identity | A.5.15–A.5.18, A.8.2–A.8.5 |
| 5 | Cryptography and Data Protection | A.8.24–A.8.25, A.5.33–A.5.34 |
| 6 | Operations Security | A.8.6–A.8.16 |
| 7 | Incident Management | A.5.24–A.5.28, A.6.8 |
| 8 | Business Continuity and Resilience | A.5.29–A.5.30, DORA Art. 11–12 |
| 9 | Third-Party and Supply Chain Risk | A.5.19–A.5.23, DORA Art. 28–30 |
| 10 | Compliance and Assurance | A.5.31–A.5.36 |

---

## Maturity Scale

| Level | Name | Definition |
|---|---|---|
| 1 | Initial | Ad hoc and reactive. No formalised processes. |
| 2 | Developing | Some documentation but inconsistent application. |
| 3 | Defined | Documented, approved, and consistently applied. |
| 4 | Managed | Measured, monitored, and reviewed with metrics. |
| 5 | Optimising | Continuous improvement driven by intelligence. |

---

## Output

- **Overall maturity score** (1.0–5.0) with band label
- **Domain-level scores** ranked lowest to highest with progress bars
- **Radar chart** showing the maturity profile across all ten domains
- **Priority improvement areas** — the three lowest-scoring domains with specific recommended actions for questions scoring below Level 3
- **Score distribution** chart by maturity band
- **Export options** — copy plain-text summary to clipboard, or download full JSON including all questions, answers, scores, and recommended actions with a timestamp

---

## Regulatory Alignment

| Requirement Area | Coverage |
|---|---|
| ISO/IEC 27001:2022 Annex A | All 10 domains map to specific Annex A controls |
| DORA Art. 5–30 | Business Continuity (Art. 11–12) and Third-Party Risk (Art. 28–30) domains include DORA-specific questions |
| UK FCA/PRA Operational Resilience | Business Continuity domain includes important business services and impact tolerance questions aligned to PS21/3 and SS1/21 |
