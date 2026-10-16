import { EducationItem, ExperienceItem, CertificationItem, LearningGoal } from '../types';

export const educationData: EducationItem[] = [
  {
    id: 'be-cse',
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Computer Science and Engineering',
    institution: "Mauli Group of Institute's College of Engineering, Shegaon",
    affiliation: 'Sant Gadge Baba Amravati University',
    year: 'Graduated 2024',
    cgpa: '8.4',
    showCgpa: false, // Per prompt: do not display until applicable qualification and grading details are confirmed
    notes: 'Comprehensive curriculum focused on Data Structures, Algorithms, Database Management Systems, Software Engineering, Object-Oriented Design, and Web Technologies.'
  },
  {
    id: 'polytechnic-it',
    degree: 'Polytechnic Diploma',
    field: 'Information Technology Engineering',
    institution: 'Government Polytechnic, Murtizapur',
    year: 'Completed Prior to Degree',
    showCgpa: false,
    notes: 'Intensive foundation in programming fundamentals, computer hardware & networking, operating systems, and client-server application development.'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'hatchfast-dev',
    company: 'HatchFast Software Labs / Hatchfast Solution Lab',
    role: 'Software Developer (Full-Stack & SAP Business One Add-ons)',
    period: 'Professional Engagement (Verified Project Scope)',
    location: 'India',
    isVerified: true,
    summary: 'Focused on developing SAP Business One custom add-ons, enterprise web applications, and database-driven business workflows.',
    responsibilities: [
      'Engineered custom SAP Business One add-ons utilizing VB.NET, SAP B1 Studio, UI API, and DI API.',
      'Constructed User-Defined Tables (UDT), User-Defined Fields (UDF), and User-Defined Objects (UDO) for manufacturing compliance workflows.',
      'Automated industrial Quality Test Requests (QTR), Certificates of Analysis (COA), and Batch Release Request systems.',
      'Built and maintained database-driven web application modules with structured MVC patterns and secure SQL operations.',
      'Collaborated on database architecture, query optimization, and integration of internal operational dashboards.'
    ],
    technologies: ['VB.NET', 'SAP Business One SDK', 'SAP B1 Studio', 'C#', '.NET MVC', 'SQL Server', 'REST APIs'],
    projectsLinked: ['sap-b1-addon', 'qdms-enterprise']
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Pending Verification',
    verificationUrl: '',
    certificateImage: '',
    isVerified: false, // Per prompt: Treat as unverified records until Vishwjeet provides confirmation; hide by default
    statusNote: 'Unverified credential record — awaiting verification confirmation link or ID.'
  },
  {
    id: 'aws-cloud-architecting',
    name: 'AWS Cloud Architecting',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Pending Verification',
    verificationUrl: '',
    certificateImage: '',
    isVerified: false,
    statusNote: 'Unverified credential record — awaiting verification confirmation link or ID.'
  },
  {
    id: 'java-codsoft',
    name: 'Java Programming',
    issuer: 'CODSOFT',
    date: 'Pending Verification',
    verificationUrl: '',
    certificateImage: '',
    isVerified: false,
    statusNote: 'Unverified credential record — awaiting certificate credential ID.'
  },
  {
    id: 'python-data-analytics',
    name: 'Python for Data Analytics',
    issuer: 'Professional Training Track',
    date: 'Pending Verification',
    verificationUrl: '',
    certificateImage: '',
    isVerified: false,
    statusNote: 'Unverified credential record — awaiting verification ID.'
  },
  {
    id: 'genai-foundations',
    name: 'GenAI Foundations',
    issuer: 'AI Foundations Program',
    date: 'Pending Verification',
    verificationUrl: '',
    certificateImage: '',
    isVerified: false,
    statusNote: 'Unverified credential record — awaiting verification ID.'
  }
];

export const learningGoals: LearningGoal[] = [
  {
    id: 'nextjs-15',
    topic: 'Next.js 15 & Server Components',
    category: 'Modern Web Engineering',
    focus: 'Server Actions, streaming SSR, partial prerendering (PPR), and high-scale edge delivery.',
    status: 'In Progress'
  },
  {
    id: 'ai-agents',
    topic: 'Multi-Agent AI & Vector Embeddings',
    category: 'Applied Intelligence',
    focus: 'Designing autonomous multi-agent tool loops, vector indexing with pgvector, and deterministic AI pipelines.',
    status: 'In Progress'
  },
  {
    id: 'k8s-cloud',
    topic: 'Cloud-Native Container Orchestration',
    category: 'DevOps & Reliability',
    focus: 'Kubernetes ingress management, Helm charts, and continuous deployment pipelines.',
    status: 'Planned'
  }
];
