---
title: Requirements
description: Defining conditions for User Services
tableOfContents: false
---

<p class="page-eyebrow"> User Services</p>
<div class="requirements-intro">
    <p> This page defines the conditions and requirements for User Services. Choose either Compute or Storage Use Cases and
    follow its instructions to identify the resources needed. </p>
</div>

<section class="use-case-grid" aria-label="Choose a use case">
    <a class="use-case-card" href="#Compute-Requirements">
        <span class="use-case-card-icon" aria-hidden="true">1.</span>
        <h2>Compute</h2>
        <p> Determine access, environment, and software needed for Compute work.</p>
        <span class="use-case-card-link">View Compute Requirements →</span>
    </a>
    <a class="use-case-card" href="#Storage-Requirements">
    <span class="use-case-card-icon" aria-hidden="true">2.</span>
    <h2>Storage</h2>
    <p>Identify the access and tools needed to use research data.</p>
    <span class="use-case-card-link">View storage requirements →</span>
  </a>
</section>


<!-- Compute Requirements Section -->
<section class="requirements-section" id="Compute-Requirements">
<p class="requirements-section-eyebrow">1 · Compute Use-Case path</p>
  <h2>Compute requirements</h2>
  <p class="requirements-section-lead">
    Determine access, environment, and software needed for Compute work.
  </p>

  <div class="decision-guide">
    <div class="decision-guide-header">
      <h3>Compute eligibility guide</h3>
      <p>Answer each question to find the appropriate next step.</p>
    </div>
  </div>
</section>

```mermaid
---
config:
fontFamily: 'Inter'
themeVariables:
 fontFamily: 'Inter'
 fontSize: '14px'
look: neo
---
flowchart TD
 A[Need to compute? Follow <br/> the flowchart below]
 A -->|No| Z[Review Data Transfer requirements]
    A -->|Yes| B[Compute access available?]

    B -->|No| C[Request compute access]
    B -->|Yes| D[Choose an environment]

    C --> D
    D -->|Hardware| E[Request hardware allocation]
    D -->|Virtual machine| F[Request a VM]

    E --> G[Additional software needed?]
    F --> G
    G -->|Yes| H[Select software:<br/>Linux, OSDF, containers, etc.]
    G -->|No| I[Ready to use Compute]
    H --> I

    classDef decision fill:#f0f6ff,stroke:#2563eb,stroke-width:2px,color:#172033
    classDef action fill:#ffffff,stroke:#cbdcf5,stroke-width:1.5px,color:#172033
    classDef ready fill:#e8f4ff,stroke:#2563eb,stroke-width:2px,color:#062b5c

    class A,B,D,G decision
    class C,E,F,H,Z action
    class I ready
```
<aside class="requirements-help">
    <p>
      Any Additional Questions about Requirements? <a href="https://nationalsciencedatafabric.org/contact/" target="_blank" rel="noreferrer">Contact NSDF support</a>.
    </p>
</aside>

<!-- Storage Requirements Section -->
<section class="requirements-section" id="Storage-Requirements">
  <p class="requirements-section-eyebrow">2 · Storage Use-Case path</p>
  <h2>Storage requirements</h2>
  <p class="requirements-section-lead">
    Use this guide to determine the access and transfer method needed for your data.
  </p>

  <div class="decision-guide">
    <div class="decision-guide-header">
      <h3>Storage eligibility guide</h3>
      <p>Answer each question to identify your recommended next step.</p>
    </div>
  </div>
</section>

```mermaid
---
config:
fontFamily: 'Inter'
themeVariables:
 fontFamily: 'Inter'
 fontSize: '14px'
look: neo
---
flowchart TD
 A[Need to compute? Follow <br/> the flowchart below]
 A -->|No| Z[Review Data Transfer requirements]
    A -->|Yes| B[Compute access available?]

    B -->|No| C[Request compute access]
    B -->|Yes| D[Choose an environment]

    C --> D
    D -->|Hardware| E[Request hardware allocation]
    D -->|Virtual machine| F[Request a VM]

    E --> G[Additional software needed?]
    F --> G
    G -->|Yes| H[Select software:<br/>Linux, OSDF, containers, etc.]
    G -->|No| I[Ready to use Compute]
    H --> I

    classDef decision fill:#f0f6ff,stroke:#2563eb,stroke-width:2px,color:#172033
    classDef action fill:#ffffff,stroke:#cbdcf5,stroke-width:1.5px,color:#172033
    classDef ready fill:#e8f4ff,stroke:#2563eb,stroke-width:2px,color:#062b5c

    class A,B,D,G decision
    class C,E,F,H,Z action
    class I ready
```
<aside class="requirements-help">
    <p>
      Any Additional Questions about Requirements? <a href="https://nationalsciencedatafabric.org/contact/" target="_blank" rel="noreferrer">Contact NSDF support</a>.
    </p>
</aside>