# Landing Architecture

## Purpose

This repository contains an academic portfolio landing page about architecture. Its current deliverable is a polished, responsive static website built with HTML, CSS, and vanilla JavaScript.

The desired experience is editorial, spatial, and visually distinctive: it should evoke architectural materials, scale, rhythm, and composition without becoming a generic template.

## Scope

### In scope

- Information architecture, UX/UI direction, interaction design, and copy for the landing page.
- Semantic HTML, responsive CSS, and minimal progressive JavaScript.
- Purposeful visual motion, accessibility, and cross-device quality checks.
- Local assets and project documentation that are explicitly approved for this repository.

### Out of scope unless explicitly authorized

- Framework migrations, backend services, databases, authentication, CMS integrations, or package additions.
- Deployment, publishing, connecting external accounts, or changing repository settings.
- Reusing or moving assets from other personal, university, ITC, Trezia, or Obsidian folders.
- Inventing a client, architect, project facts, awards, testimonials, imagery licenses, or academic evidence.

## Source of truth

Follow this order:

1. Current user request and explicit approvals.
2. This file, the repository README, approved local content, assets, and design references.
3. Parent instructions in `../../AGENTS.md`, then `../../../AGENTS.md`.
4. Shared standards in `../../../../ai-workspace-standards/AGENTS.md` when a shared skill or integration applies.

If the architectural subject, audience, content, visual references, or intended call to action is not documented, treat it as unresolved. Ask one concise question before inventing it.

## Roles

### UX/UI and product designer

Owns the content hierarchy, user flow, layout system, responsive behavior, typography, color, and accessible interaction decisions. Start with an intentional visual direction tied to architecture rather than a default landing-page pattern.

### Web developer

Owns the semantic HTML structure, CSS architecture, vanilla JavaScript behavior, performance, accessibility, and browser compatibility. Prefer native web capabilities and avoid dependencies unless authorized.

### Frontend developer

Use only when the task needs implementation refinement beyond the web-developer scope: responsive debugging, component-like organization, progressive enhancement, interaction state handling, or testing. This is a static, small-scope project; do not introduce a framework merely for convenience.

## Skills

Load only the skills relevant to the requested task, and read their `SKILL.md` before using them.

| Skill | Use it for | Status |
|---|---|---|
| `impeccable` | New-surface direction, visual refinement, UX, responsive and accessibility reviews. | Available |
| `high-end-visual-design` | A high-craft visual system, spatial rhythm, typography, and deliberate premium details. | Available |
| `frontend-design` | A distinctive, subject-specific design direction that avoids generic AI landing-page patterns. | Available |
| `animate` | Purposeful interaction or narrative motion, including reduced-motion behavior. | Available |
| `css-animations` | CSS-specific animation workflow, if it is later installed and verified. | Pending installation; do not claim it is available or invoke it until its source and installation are verified. |

## Design and implementation standards

- Choose one coherent architecture-inspired visual concept before implementing: material, grid, contrast, type, image treatment, and motion should reinforce the same direction.
- Prefer a calm, editorial composition with strong hierarchy and generous whitespace over decorative effects.
- Make the first viewport communicate the subject clearly; do not use placeholder claims as final copy.
- Use semantic landmarks, logical heading order, visible keyboard focus, sufficient contrast, and touch-friendly controls.
- Build mobile-first and verify narrow, medium, and wide layouts.
- Keep JavaScript minimal and progressively enhanced. The page must remain understandable and navigable without JavaScript.
- Animate only when it clarifies feedback, spatial continuity, state, explanation, or rare delight. Animate `transform` and `opacity` where possible, gate hover behavior to capable pointers, and provide a reduced-motion alternative.
- Optimize local media. Do not add remote fonts, images, scripts, trackers, or third-party embeds without explicit authorization and license review.

## Git workflow

This folder is a Git repository. At the beginning of a work session, remind the user to review repository status and pull the current branch before editing. Before ending work, review the diff and run applicable local checks. Commit, push, create branches, open pull requests, or change remote settings only with explicit authorization.

## Academic integrity and boundaries

- This is university portfolio work; preserve authorship, citations, and evidence requirements.
- Do not fabricate architectural research, case-study facts, credits, sources, or approvals.
- Keep all changes inside this repository unless the user expressly authorizes another location.
- Do not delete, rename, move, overwrite unrelated files, bulk-format the repository, or install packages without explicit authorization.
- Do not expose private URLs, source media, credentials, personal data, or unpublished academic work.

## Completion criteria

Before reporting work as complete, confirm that:

1. Changes are limited to the authorized scope and files.
2. The page is semantic, responsive, keyboard-usable, and respects reduced-motion preferences.
3. Any claims, imagery, fonts, and assets have a documented or user-approved source.
4. The repository changes have been reviewed and no publish, deployment, or Git delivery action was taken without approval.
