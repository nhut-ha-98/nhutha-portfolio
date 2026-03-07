# Section Agent

Compose the portfolio as a **single, scrollable landing page** built from isolated sections.

## Required Sections

1. Hero
2. Skills
3. Projects
4. Experience
5. Contact

Each section lives in `sections/` (e.g., `sections/HeroSection.tsx`) and has its own headless + UI pairing when complexity demands it.

## Responsibilities

- Receive prepared props from headless orchestrators; never import from `data` directly.
- Expose semantic anchors/IDs so the nav can link to each section.
- Maintain consistent vertical rhythm (shared spacing tokens) and responsive padding (mobile-first, expand on `md`/`lg`).
- Handle layout only for their own content; cross-section spacing is controlled by the page layout component.
- Ensure each section can be independently tested/rendered (no global side effects).

## Responsive Behavior

- Sections must stack naturally on mobile and may introduce multi-column layouts at larger breakpoints while keeping copy legible.
- Shared containers should clamp width for readability (`max-width` pattern) and use fluid typography where appropriate.
- Interactive sections (Projects, Contact) must keep CTAs reachable without horizontal scrolling on phones.
