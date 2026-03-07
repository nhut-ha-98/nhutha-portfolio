export interface RenderCvData {
  cv: Cv;
  locale: Locale;
  settings?: Settings;
  design: Design;
}

export interface Design {
  theme: string;
}

export interface Settings {
  current_date: string;
  render_command: Rendercommand;
  bold_keywords: string[];
  pdf_title: string;
}

export interface Rendercommand {
  output_folder: string;
  design: null;
  locale: null;
  typst_path: string;
  pdf_path: string;
  markdown_path: string;
  html_path: string;
  png_path: string;
  dont_generate_markdown: boolean;
  dont_generate_html: boolean;
  dont_generate_typst: boolean;
  dont_generate_pdf: boolean;
  dont_generate_png: boolean;
}

export interface Locale {
  language: string;
}

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

export interface Sections {
  "About Me": AboutMe[];
  "Primary Skills": AboutMe[];
  "Secondary Skills": AboutMe[];
  "Education and Certifications": EducationAndCertification[];
  Experience: Experience[];
  "30+ projects across diverse business domains": _30ProjectsAcrossDiverseBusinessDomain[];
  "Other Projects": AboutMe[];
  Awards: string[];
}

export interface _30ProjectsAcrossDiverseBusinessDomain {
  name: string;
  start_date: string;
  end_date: null | string;
  location: null;
  summary: string;
  highlights: string[];
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

export interface AboutMe {
  label: string;
  details: string;
}

export interface Socialnetwork {
  network: string;
  username: string;
}
