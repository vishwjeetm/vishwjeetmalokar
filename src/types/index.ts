export type ProjectCategory = 
  | 'AI SaaS / GEO' 
  | 'Enterprise / ERP' 
  | 'Computer Vision & AI' 
  | 'Full-Stack & Web' 
  | 'Accessibility & Utilities'
  | 'Digital Experience';

export type ProjectStatus = 
  | 'Active Development' 
  | 'Completed Application' 
  | 'Enterprise Module' 
  | 'Functional Prototype';

export interface ProjectScreenshot {
  url: string;
  caption: string;
  isReal: boolean; // true = authentic actual screenshot; false = illustrative mockup
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  status: ProjectStatus;
  isFeatured: boolean;
  displayOrder: number;
  visible: boolean;
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  keyFeatures: string[];
  architectureHighlights?: string[];
  businessImpact?: string;
  screenshots: ProjectScreenshot[];
  demoUrl?: string | null;
  repoUrl?: string | null;
  clientTakeaway: string;
  isStrongestVisual?: boolean;
}

export interface Service {
  id: string;
  code: string;
  title: string;
  category: string;
  iconName: string;
  description: string;
  targetAudience: string;
  problemsSolved: string[];
  deliverables: string[];
  techStack: string[];
}

export type SkillProficiency = 'Primary' | 'Used in projects' | 'Familiar' | 'Currently learning';

export interface SkillItem {
  name: string;
  level: SkillProficiency;
  category: string;
  relatedProjects?: string[];
  iconKey?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isVerified: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  projectsLinked?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  affiliation?: string;
  year: string;
  cgpa?: string;
  showCgpa: boolean;
  notes?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  verificationUrl?: string;
  certificateImage?: string;
  isVerified: boolean;
  statusNote: string;
}

export interface LearningGoal {
  id: string;
  topic: string;
  category: string;
  focus: string;
  status: 'In Progress' | 'Planned';
}

export interface SiteConfig {
  displayName: string;
  primaryHeadline: string;
  heroHeadline: string;
  heroDescription: string;
  supportingDescription: string;
  isAvailableForFreelance: boolean;
  freelanceStatusText: string;
  ctaTextPrimary: string;
  ctaTextSecondary: string;
  ctaTextServices: string;
  contact: {
    emailPlaceholder: string;
    actualEmail?: string;
    linkedinPlaceholder: string;
    actualLinkedin?: string;
    githubPlaceholder: string;
    actualGithub?: string;
    truelancerPlaceholder: string;
    actualTruelancer?: string;
    fiverrPlaceholder?: string;
    actualFiverr?: string;
    freelancerPlaceholder?: string;
    actualFreelancer?: string;
    instagramPlaceholder: string;
    actualInstagram?: string;
    location: string;
  };
  seo: {
    domain: string;
    title: string;
    description: string;
  };
}
