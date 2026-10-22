---
title: Requirements
description: Defining conditions for User Services
tableOfContents: false
---

This page defines conditions for User Services, both for **Compute** and **Storage** use cases.

## Find your use case

```mermaid
---
config:
  fontFamily: '''Inter Variable'', sans-serif'
  themeVariables:
    fontFamily: '''Inter Variable'', sans-serif'
  look: neo
---
graph TD
    A[Does user have an<br/>active account?] -->|No| B[Not eligible]
    A -->|Yes| C[Has user completed<br/>onboarding?]
    C -->|No| D[Complete onboarding first]
    C -->|Yes| E[Does user meet<br/>minimum usage tier?]
    E -->|No| F[Upgrade to minimum tier]
    E -->|Yes| G[Has user accepted<br/>terms of service?]
    G -->|No| H[Accept terms to proceed]
    G -->|Yes| I[✓ Eligible for entry point<br/>compute usage]
    
    B --> J[Review requirements]
    D --> J
    F --> J
    H --> J
    
    classDef eligible fill:#eef2ff,stroke:#818cf8,stroke-width:2px
    classDef ineligible fill:#fef2f2,stroke:#f87171,stroke-width:2px
    classDef decision fill:#f0f9ff,stroke:#38bdf8,stroke-width:2px
    classDef action fill:#f7fee7,stroke:#a3e635,stroke-width:2px
    
    class I eligible
    class B,D,F,H ineligible
    class A,C,E,G decision
    class J action
```




# Compute Use Case #
Insert tree or link here....



# Storage Use Case #
Insert tree or link here...