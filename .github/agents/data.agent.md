# Data Agent

You own the structured content living under `data/`, with `data/data.ts` as the primary content module.
All content must conform to the `RenderCvData` contract defined in `data/rendercv.ts`.

## Directory Rules

- Location: `data/` (TypeScript modules only).
- Use exported interfaces from `data/rendercv.ts` as the source of truth for shape and field names.
- No React imports, JSX, side effects, async calls, or computed runtime values.
- Content must remain serializable (no functions, no runtime-only values).
- Keep strings in English and concise enough for responsive rendering.

## Required Root Shape (`data/data.ts`)

```ts
export const data: RenderCvData = {
  cv: {
    name: string,
    headline: string,
    location: string,
    email: string,
    photo: null,
    phone: string,
    website: null,
    social_networks: Socialnetwork[],
    custom_connections: null,
    sections: Sections,
  },
  locale: {
    language: string,
  },
  design: {
    theme: string,
  },
  settings?: Settings,
};
```

- `cv`, `locale`, and `design` are required.
- `settings` is optional and must follow the `Settings` interface when present.
- Preserve field names exactly as defined in `rendercv.ts`.

## CV Object Contract

```ts
export interface Cv {
  name: string;
  headline: string;
  location: string;
  email: string;
  photo: null;
  phone: string;
  website: null;
  social_networks: Socialnetwork[];
  custom_connections: null;
  sections: Sections;
}
```

- Keep currently-null fields (`photo`, `website`, `custom_connections`) as `null` unless interfaces are updated.

## Sections Contract (Exact Keys)

`cv.sections` must include these keys exactly:

- `"About Me"`: `AboutMe[]`
- `"Primary Skills"`: `AboutMe[]`
- `"Secondary Skills"`: `AboutMe[]`
- `"Education and Certifications"`: `EducationAndCertification[]`
- `"Experience"`: `Experience[]`
- `"30+ projects across diverse business domains"`: `_30ProjectsAcrossDiverseBusinessDomain[]`
- `"Other Projects"`: `AboutMe[]`
- `"Awards"`: `string[]`

Do not rename section keys without updating both `rendercv.ts` and consumers.

## Section Item Types

```ts
export interface AboutMe {
  label: string;
  details: string;
}

export interface EducationAndCertification {
  institution: string;
  area: string;
  degree: null;
  date: null;
  start_date: string;
  end_date: null | string;
  location: null;
  summary: null;
  highlights: null;
}

export interface Experience {
  company: string;
  position: string;
  date: null;
  start_date: string;
  end_date: string;
  location: null;
  summary: null;
  highlights: string[];
}

export interface _30ProjectsAcrossDiverseBusinessDomain {
  name: string;
  start_date: string;
  end_date: null | string;
  location: null;
  summary: string;
  highlights: string[];
}

export interface Socialnetwork {
  network: string;
  username: string;
}
```

- Keep `highlights` and `details` concise for responsive layouts.
- Use ISO-like `YYYY-MM` strings for `start_date`/`end_date` where possible; use `"present"` only where expected by current UI.

## Content Contract

- All consumer components must read content through `RenderCvData`-compatible structures.
- No hardcoded copy in UI/headless components when the content belongs in `data/data.ts`.
- Any schema change must be made in `data/rendercv.ts` first, then propagated to `data/data.ts` and consuming components.
