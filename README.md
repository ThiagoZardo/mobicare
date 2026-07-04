# Mobicare

Mobicare is an early-stage application project. This repository is being structured with Codex-friendly context, architecture notes, and reusable workflows before the implementation begins.

## Current Stage

- Product discovery
- Architecture definition
- Context engineering setup
- Initial implementation planning

## Repository Map

```txt
.
├── AGENTS.md
├── README.md
├── docs/
│   ├── product/
│   │   ├── vision.md
│   │   ├── requirements.md
│   │   └── roadmap.md
│   ├── architecture/
│   │   ├── system-overview.md
│   │   ├── ai-architecture.md
│   │   └── data-and-compliance.md
│   └── decisions/
│       ├── ADR-0001-initial-project-structure.md
│       └── ADR-0002-initial-product-direction.md
└── .agents/
    └── skills/
        └── feature-planning/
            └── SKILL.md
```

## Working With Codex

Start each new feature by asking Codex to read:

- `AGENTS.md`
- `docs/product/vision.md`
- `docs/product/requirements.md`
- `docs/product/roadmap.md`
- the relevant architecture file under `docs/architecture/`

For feature planning, invoke:

```txt
$feature-planning
```
