export interface FullProject {
  id: string;
  name: string;
  monthStart: string;
  monthEnd: string | null;
  description: string[];
  techStack: Record<string, string[]>;
  products: string[];
  keyFeatures?: string[];
  tags?: string[];
}

interface FirestoreDocLike {
  id?: unknown;
  name?: unknown;
  monthStart?: unknown;
  monthEnd?: unknown;
  description?: unknown;
  techStack?: unknown;
  products?: unknown;
  keyFeatures?: unknown;
  tags?: unknown;
}

function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === "string")
  );
}

function toTechStack(value: unknown): Record<string, string[]> {
  if (typeof value !== "object" || value === null) {
    return {};
  }

  const entries = Object.entries(value).filter(
    (entry): entry is [string, string[]] => isStringArray(entry[1]),
  );

  return Object.fromEntries(entries);
}

export function toFullProject(value: unknown): FullProject | null {
  if (typeof value !== "object" || value === null) {
    return null;
  }

  const raw = value as FirestoreDocLike;

  if (
    typeof raw.id !== "string" ||
    typeof raw.name !== "string" ||
    typeof raw.monthStart !== "string"
  ) {
    return null;
  }

  return {
    id: raw.id,
    name: raw.name,
    monthStart: raw.monthStart,
    monthEnd: typeof raw.monthEnd === "string" ? raw.monthEnd : null,
    description: isStringArray(raw.description) ? raw.description : [],
    techStack: toTechStack(raw.techStack),
    products: isStringArray(raw.products) ? raw.products : [],
    keyFeatures: isStringArray(raw.keyFeatures) ? raw.keyFeatures : undefined,
    tags: isStringArray(raw.tags) ? raw.tags : undefined,
  };
}
