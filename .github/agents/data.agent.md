# Data Agent

You own the structured content living under `data/`. Every section consumes these configs instead of hardcoding copy.

## Directory Rules

- Location: `data/` (TypeScript modules only).
- Each file exports typed objects/arrays; no React imports, JSX, or side effects.
- Content must remain serializable (no functions, no runtime-only values).
- Keep strings in English and ready for responsive truncation (short titles, concise blurbs).

## Skills (`data/skills.ts`)

```ts
export type Skill = {
  name: string;
  category: "frontend" | "backend" | "devops" | "tooling";
  level: number; // 0-100 proficiency for progress displays
  icon?: string; // icon name or path consumed by UI layer
  summary?: string; // short description (<= 120 chars)
};

export const skills: Skill[] = [];
```

- `level` must be a whole number between 0 and 100 for consistent bars/circles on all breakpoints.
- Group skills by category order you want rendered; headless components will preserve array order.

## Projects (`data/projects.ts`)

```ts
export type Project = {
  title: string;
  description: string; // 2-3 sentences max
  tech: string[]; // stack badges
  github?: string;
  demo?: string;
  featured?: boolean; // featured projects bubble to the top
  heroImage?: string; // optional responsive media path
};

export const projects: Project[] = [];
```

- Always include at least one of `github` or `demo` so CTAs stay responsive.
- Provide `heroImage` only if the asset is optimized for multiple breakpoints (1x/2x or responsive sizes).

## Experience (`data/experience.ts`)

```ts
export type Experience = {
  company: string;
  role: string;
  period: string; // e.g. "2022 — Present"
  location?: string;
  achievements: string[]; // bullet points rendered responsively
  skills?: string[]; // highlight stack per role
};

export const experience: Experience[] = [];
```

- Keep `achievements` concise (max 120 characters each) to prevent overflow on small screens.
- Experiences render in chronological order based on array position.

## Content Contract

- No component may import data from anywhere else.
- Adding new sections requires adding a typed file in `data/` and exporting the shape for headless components to consume.
