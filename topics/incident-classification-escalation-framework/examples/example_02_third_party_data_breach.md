# Example 2: Third-Party Payment Processor Data Breach Notification

## Scenario

A third-party payment processor that handles direct debit collections for the mortgage servicing platform notifies the organisation that it has experienced a data breach. The notification states that an unauthorised party accessed a database containing customer payment records, including names, sort codes, and account numbers. The processor confirms the breach window spans 6 weeks.

---

## Initial Indicators

- Formal breach notification received from third-party vendor via the contractual notification channel.
- Vendor confirms: names, sort codes, account numbers exposed. No card data. No login credentials.
- Affected population: vendor cannot confirm exact scope but estimates "a subset" of all clients. Specific records pertaining to this organisation are not yet isolated.
- Vendor states the vulnerability has been remediated and forensic investigation is underway.

---

## Classification

### Impact Assessment

| Dimension | Rating | Rationale |
|---|---|---|
| Data Impact | P1 (Critical) | Regulated customer financial data (sort codes, account numbers) confirmed exposed by third party. Scope not yet bounded. |
| Service Impact | P3 (Moderate) | Payment processing continues; no service outage. However, decision required on whether to suspend direct debit processing pending scope confirmation. |
| Financial Impact | P2 (High) | Potential for fraudulent direct debits using exposed sort code/account number combinations. Financial exposure not yet quantified. |
| Regulatory Impact | P1 (Critical) | Customer financial data exposed; DORA and FCA notification obligations likely triggered. GDPR notification to ICO may also apply (72-hour window). |
| Reputational Impact | P2 (High) | If breach becomes public, customers will associate the data exposure with this organisation regardless of third-party origin. |

### Overall Classification: P1 (Critical)

Data impact and regulatory impact both independently score P1. This is a major ICT-related incident under DORA Article 18.

---

## Escalation Actions

Per the P1 escalation path:

1. **Senior incident manager assigned immediately.** CISO and BISO for MLS notified within 1 hour.
2. **Incident bridge opened.** Participants: SOC, BISO, CISO (delegate), Legal, Regulatory Affairs, Vendor Management, Communications.
3. **Regulatory assessment**: Regulatory affairs confirms DORA Article 19 reporting obligation is triggered. Initial notification to competent authority within 4 hours of classification. FCA notified via supervisory contact. GDPR Article 33 assessment initiated (72-hour window from awareness of personal data breach).
4. **Vendor management**: Formal request issued to processor for full forensic report, exact record count for this organisation, timeline of unauthorised access, and evidence of remediation.
5. **Customer impact scoping**: Internal data team cross-references the processor's customer base against mortgage servicing records to bound the affected population.
6. **Risk mitigation**: Fraud monitoring team alerted to increase scrutiny on direct debit originations matching affected sort codes. Decision on whether to suspend direct debit processing escalated to business owner and CRO.
7. **Communications**: Holding statement prepared. Customer notification plan drafted pending scope confirmation.

---

## Regulatory Timeline

| Action | Deadline | Status |
|---|---|---|
| DORA initial notification | 4 hours from classification | Submitted |
| FCA material incident notification | Immediately upon awareness | Submitted concurrently with DORA |
| GDPR Article 33 notification to ICO | Within 72 hours of awareness | Assessment in progress; submitted within window |
| DORA intermediate report | Within 72 hours of initial notification | Submitted with updated scope |
| Customer notification (GDPR Art. 34) | Without undue delay if high risk to individuals confirmed | Issued once affected population confirmed |
| DORA final report | Within 1 month of resolution | Pending vendor forensic completion |

---

## Resolution

- Vendor forensic report confirmed 12,400 mortgage customer records affected.
- No evidence of misuse of exposed data identified during monitoring period.
- Direct debit processing continued with enhanced fraud monitoring; no suspension required.
- Customer notification issued to all 12,400 affected individuals with guidance on account monitoring.
- Vendor placed on enhanced oversight with 90-day remediation plan and independent assurance requirement.
- TPRM framework updated to require evidence of encryption at rest for all vendors handling payment data (gap identified in due diligence).

### Lessons Learned

- Vendor's breach notification was received within contractual SLA (72 hours) but lacked sufficient detail to immediately scope the impact. Future contracts will require initial notification to include record-level scope for each client.
- DORA and FCA notification processes were executed in parallel without conflict, but the internal playbook did not clearly document the parallel workflow. Updated in this framework.
- Fourth-party risk assessment was not previously performed for this vendor's infrastructure provider. Added to TPRM review scope.
