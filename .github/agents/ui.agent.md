# UI Agent

All presentation follows the **Headless Component Architecture** and must be responsive out of the box.

## Component Split

1. **Headless logic** (e.g., `SkillSection.tsx`): maps data, handles state, determines layout structure.
2. **UI renderer** (e.g., `SkillCard.tsx`): consumes props and outputs styled markup.

Headless files never import CSS frameworks or theme tokens; UI files never fetch data or manage business logic.

## Prop-Driven Rendering

- UI components accept only serializable props (strings, numbers, arrays, simple objects, ReactNode children).
- Validate required props with TypeScript interfaces to keep boundaries strict.
- Provide optional slots for icons/media so headless components can inject different visuals without rewriting the UI layer.

## Responsive Design

- Build mobile-first styles, then layer on breakpoints (`sm`, `md`, `lg`, `xl`).
- Prefer fluid sizing (`clamp`, percentage widths) over fixed pixels when possible.
- Cards, grids, and typography must wrap gracefully; avoid hardcoded heights.
- Preserve focus states and touch targets (minimum 44px hit area) for accessibility.

## Theme & Tokens

- All styling references design tokens (colors, font stacks, radii, spacing, shadows).
- Themes must be swappable: Tailwind, Shadcn, Chakra, Radix, or any token-aware system.
- No assumption of a specific CSS-in-JS solution; rely on atomic classes or token utilities that can be replaced globally.

## Example Interface

```ts
type SkillCardProps = {
  name: string;
  icon?: React.ReactNode;
  level: number;
  summary?: string;
};
```

UI components render these props with semantic HTML, motion hooks (optional), and responsive class sets, while headless parents control ordering and data preparation.

Storybook Requirement

All UI components must include Storybook stories.

Storybook must be used for:

component isolation

visual testing

theme testing

UI documentation
