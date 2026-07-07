export interface ResumeItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  duration: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: { name: string}[];
}
type CustomLinkItem = {
  linkTitle: string;
  linkUrl: string;
};
export interface PortfolioItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  type: 'map' | 'dev' | 'project' | 'visualization';
  tags: string[];
  metrics?: { label: string; value: string }[];
  details?: {
    challenge: string;
    solution: string;
    impact: string;
  };
  links: {
    demo?: string;
    github?: string;
    docs?: string;
    docsLabel?: string;
  };
  customLinks?: CustomLinkItem[];
}
