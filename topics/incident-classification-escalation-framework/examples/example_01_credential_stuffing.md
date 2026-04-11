# Example 1: Credential Stuffing Attack on Savings Login Portal

## Scenario

The SOC detects a sustained spike in failed authentication attempts against the customer-facing savings account login portal. The attack originates from a distributed set of IP addresses using credential pairs that do not match any known internal breach.

---

## Initial Indicators

- Monitoring alert: Authentication failure rate exceeds 500% of baseline over a 2-hour window.
- Source IPs: 2,000+ unique addresses across multiple geographies, consistent with botnet or proxy rotation.
- Credential pattern: Unique username/password pairs per attempt (not brute force against a single account), consistent with credential stuffing using a third-party breach list.
- No evidence of successful authentication at the time of initial triage.

---

## Classification

### Impact Assessment

| Dimension | Rating | Rationale |
|---|---|---|
| Data Impact | P3 (Moderate) | No confirmed unauthorised access; credential pairs appear sourced from external breach, not internal data |
| Service Impact | P2 (High) | Login portal performance degraded; legitimate customer authentication latency increased |
| Financial Impact | P4 (Low) | No fraudulent transactions detected |
| Regulatory Impact | P3 (Moderate) | No confirmed data compromise; no notification obligation triggered at this stage |
| Reputational Impact | P3 (Moderate) | Customer complaints about login delays possible; no media exposure |

### Overall Classification: P2 (High)

Service impact dimension drives the classification. The login portal is a core customer-facing service and performance degradation is customer-visible.

---

## Escalation Actions

Per the P2 escalation path:

1. **Incident manager assigned** from on-call rotation within 4 hours.
2. **BISO for MLS notified** — the savings portal falls within MLS scope.
3. **Immediate containment**: Rate limiting applied to authentication endpoint; CAPTCHA challenge activated for flagged IP ranges; WAF rules updated to block known malicious user-agent strings.
4. **Investigation**: Cross-reference successful authentications during the attack window against baseline behavioural profiles to identify any account takeover.
5. **Regulatory check**: No notification required at this stage — no confirmed data compromise or account takeover. Decision documented.

---

## Escalation Trigger Watch

This incident would be reclassified to P1 if:

- Any successful account takeover is confirmed during the attack window.
- Customer funds are accessed or transferred from a compromised account.
- The credential list is found to contain data sourced from an internal breach rather than an external one.

---

## Resolution

- Rate limiting and CAPTCHA measures reduced attack success rate to near zero within 3 hours.
- Forensic review of successful authentications during the window confirmed no account takeover.
- 14 accounts with weak passwords that matched the stuffing list were identified and forced to reset.
- Incident closed at P2. PIR completed within 10 business days.

### Lessons Learned

- Mandatory MFA rollout for savings portal accelerated based on this incident (previously scheduled for Q3).
- Authentication monitoring threshold adjusted to trigger earlier for distributed low-rate patterns.
