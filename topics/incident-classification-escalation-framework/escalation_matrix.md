# Escalation Matrix

This document defines the escalation paths, communication requirements, and response team composition for each incident severity tier.

---

## Escalation by Tier

### P1 — Critical

| Attribute | Requirement |
|---|---|
| **Incident Manager** | Named senior incident manager; on-call escalation if outside business hours |
| **Response Team** | SOC, relevant application/infrastructure owner, BISO, CISO (or delegate), Legal, Communications |
| **Initial Notification** | Within 1 hour of classification to: CISO, BISO for affected business unit, Head of Technology for affected platform |
| **Bridge/War Room** | Dedicated incident bridge opened immediately; participants joined within 30 minutes |
| **Update Cadence** | Hourly status updates to stakeholders until containment confirmed; then every 4 hours until resolution |
| **Regulatory Check** | Immediate assessment against `regulatory_notification.md` triggers; regulatory affairs engaged within 2 hours |
| **Executive Notification** | CRO and relevant ExCo member notified within 4 hours if customer data or service impact confirmed |
| **Post-Incident Review** | Formal PIR within 5 business days of closure; lessons learned documented and tracked to completion |

### P2 — High

| Attribute | Requirement |
|---|---|
| **Incident Manager** | Named incident manager from on-call rotation |
| **Response Team** | SOC, relevant application/infrastructure owner, BISO |
| **Initial Notification** | Within 4 hours of classification to: BISO for affected business unit, Head of Information Security |
| **Bridge/War Room** | Opened if required by incident manager; not mandatory |
| **Update Cadence** | Every 4 hours until containment; daily until resolution |
| **Regulatory Check** | Assessment against `regulatory_notification.md` within 8 hours of classification |
| **Post-Incident Review** | PIR within 10 business days of closure |

### P3 — Moderate

| Attribute | Requirement |
|---|---|
| **Incident Manager** | Assigned from on-call rotation |
| **Response Team** | SOC, relevant system owner |
| **Initial Notification** | Within 24 hours to BISO if relevant to their business unit |
| **Update Cadence** | Daily until resolution |
| **Regulatory Check** | Not typically required; escalate to P2 if investigation reveals higher impact |
| **Post-Incident Review** | Lessons captured in incident register; formal PIR at incident manager discretion |

### P4 — Low

| Attribute | Requirement |
|---|---|
| **Incident Manager** | No dedicated assignment |
| **Response Team** | SOC handles within normal workflow |
| **Notification** | Logged in incident register; no active notification unless escalated |
| **Post-Incident Review** | Trends reviewed in monthly operational reporting |

---

## Escalation Triggers (Tier Upgrade)

An incident must be reclassified upward if any of the following occur during investigation:

- Evidence of data exfiltration is identified (upgrade to at least P2; P1 if regulated data).
- Customer-facing service impact is confirmed (upgrade to at least P2; P1 if core service).
- Attacker persistence is confirmed (backdoor, implant, credential harvesting) — upgrade to P1.
- A regulatory notification threshold is met per `regulatory_notification.md` — upgrade to P1.
- Media inquiry or social media attention related to the incident — upgrade to at least P2.

All upgrades are documented in the incident register with timestamp and rationale.

---

## Communication Channels

| Channel | Use |
|---|---|
| Incident bridge (voice) | Real-time coordination during P1/P2 active response |
| Secure messaging channel | Asynchronous updates and evidence sharing (not email for sensitive details) |
| Incident register | Formal record of classification, actions, decisions, and timeline |
| Stakeholder email update | Structured status updates at the cadence defined per tier |
