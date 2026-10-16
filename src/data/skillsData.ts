import { SkillGroup } from '../types';

export const skillsData: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description: 'Component architecture, responsive state management, and modern UI design systems.',
    skills: [
      { name: 'React', level: 'Primary', category: 'Frontend', relatedProjects: ['geo-auditor', 'customer-support-chatbot'] },
      { name: 'JavaScript (ES6+)', level: 'Primary', category: 'Frontend', relatedProjects: ['geo-auditor', 'wedding-invitation-app'] },
      { name: 'TypeScript', level: 'Primary', category: 'Frontend', relatedProjects: ['geo-auditor'] },
      { name: 'HTML5 & CSS3', level: 'Primary', category: 'Frontend', relatedProjects: ['wedding-invitation-app', 'hotel-management-system'] },
      { name: 'Next.js', level: 'Used in projects', category: 'Frontend' },
      { name: 'Tailwind CSS', level: 'Primary', category: 'Frontend', relatedProjects: ['geo-auditor'] },
      { name: 'Bootstrap', level: 'Used in projects', category: 'Frontend', relatedProjects: ['qdms-enterprise'] },
      { name: 'Shadcn UI', level: 'Used in projects', category: 'Frontend' },
      { name: 'Mantine', level: 'Familiar', category: 'Frontend' },
      { name: 'React Flow', level: 'Familiar', category: 'Frontend' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Server-Side',
    description: 'RESTful endpoints, enterprise business logic, and high-performance server runtimes.',
    skills: [
      { name: 'Node.js', level: 'Primary', category: 'Backend', relatedProjects: ['geo-auditor', 'customer-support-chatbot'] },
      { name: 'Express.js', level: 'Primary', category: 'Backend', relatedProjects: ['geo-auditor', 'customer-support-chatbot'] },
      { name: 'C#', level: 'Primary', category: 'Backend', relatedProjects: ['qdms-enterprise', 'hotel-management-system', 'tts-pdf-reader'] },
      { name: 'ASP.NET Core', level: 'Primary', category: 'Backend', relatedProjects: ['qdms-enterprise'] },
      { name: 'ASP.NET MVC', level: 'Primary', category: 'Backend', relatedProjects: ['qdms-enterprise'] },
      { name: 'Web API', level: 'Primary', category: 'Backend', relatedProjects: ['qdms-enterprise'] },
      { name: 'VB.NET', level: 'Primary', category: 'Backend', relatedProjects: ['sap-b1-addon'] },
      { name: 'Python', level: 'Used in projects', category: 'Backend', relatedProjects: ['driving-license-auth', 'object-detection-cv'] },
      { name: 'Flask', level: 'Used in projects', category: 'Backend', relatedProjects: ['driving-license-auth'] },
      { name: 'Java', level: 'Used in projects', category: 'Backend', relatedProjects: ['java-erp-system'] },
    ]
  },
  {
    id: 'databases',
    title: 'Databases & ORM',
    description: 'Relational data modeling, ACID transactions, and query optimization.',
    skills: [
      { name: 'PostgreSQL', level: 'Primary', category: 'Databases', relatedProjects: ['geo-auditor'] },
      { name: 'SQL Server', level: 'Primary', category: 'Databases', relatedProjects: ['qdms-enterprise', 'sap-b1-addon', 'hotel-management-system'] },
      { name: 'MySQL', level: 'Primary', category: 'Databases', relatedProjects: ['driving-license-auth', 'java-erp-system'] },
      { name: 'SQL (DDL/DML/Indexes)', level: 'Primary', category: 'Databases', relatedProjects: ['qdms-enterprise', 'geo-auditor'] },
      { name: 'Entity Framework Core', level: 'Used in projects', category: 'Databases', relatedProjects: ['qdms-enterprise'] },
      { name: 'ADO.NET', level: 'Used in projects', category: 'Databases', relatedProjects: ['hotel-management-system'] },
      { name: 'SQLAlchemy', level: 'Used in projects', category: 'Databases', relatedProjects: ['driving-license-auth'] },
      { name: 'MongoDB', level: 'Familiar', category: 'Databases' },
    ]
  },
  {
    id: 'ai-geo',
    title: 'AI, GEO & Computer Vision',
    description: 'Generative AI integration, search visibility intelligence, and computer vision pipelines.',
    skills: [
      { name: 'Generative AI Integration', level: 'Primary', category: 'AI & GEO', relatedProjects: ['geo-auditor', 'customer-support-chatbot'] },
      { name: 'LLM API Integration', level: 'Primary', category: 'AI & GEO', relatedProjects: ['geo-auditor', 'customer-support-chatbot'] },
      { name: 'Prompt Engineering', level: 'Primary', category: 'AI & GEO', relatedProjects: ['geo-auditor', 'customer-support-chatbot'] },
      { name: 'AI Search Visibility Analysis', level: 'Primary', category: 'AI & GEO', relatedProjects: ['geo-auditor'] },
      { name: 'Citation & Sentiment Analysis', level: 'Primary', category: 'AI & GEO', relatedProjects: ['geo-auditor'] },
      { name: 'Chatbot Development', level: 'Used in projects', category: 'AI & GEO', relatedProjects: ['customer-support-chatbot'] },
      { name: 'Computer Vision (OpenCV)', level: 'Used in projects', category: 'AI & GEO', relatedProjects: ['driving-license-auth', 'object-detection-cv'] },
      { name: 'Object Detection', level: 'Used in projects', category: 'AI & GEO', relatedProjects: ['object-detection-cv'] },
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud, DevOps & Tooling',
    description: 'Container environments, version control pipelines, and cloud services.',
    skills: [
      { name: 'Docker', level: 'Used in projects', category: 'Cloud & DevOps', relatedProjects: ['geo-auditor'] },
      { name: 'Git & GitHub', level: 'Primary', category: 'Cloud & DevOps' },
      { name: 'GitLab', level: 'Used in projects', category: 'Cloud & DevOps' },
      { name: 'MinIO Object Storage', level: 'Used in projects', category: 'Cloud & DevOps', relatedProjects: ['geo-auditor'] },
      { name: 'AWS (Core Cloud Services)', level: 'Familiar', category: 'Cloud & DevOps' },
      { name: 'Azure', level: 'Familiar', category: 'Cloud & DevOps' },
      { name: 'Kubernetes', level: 'Currently learning', category: 'Cloud & DevOps' },
    ]
  },
  {
    id: 'enterprise-additional',
    title: 'Enterprise Concepts & Methodologies',
    description: 'ERP workflows, industrial protocols, data analysis, and security standards.',
    skills: [
      { name: 'SAP Business One SDK', level: 'Primary', category: 'Enterprise', relatedProjects: ['sap-b1-addon'] },
      { name: 'ERP Workflows (QA/Batch)', level: 'Primary', category: 'Enterprise', relatedProjects: ['qdms-enterprise', 'sap-b1-addon'] },
      { name: 'Role-Based Access Control (RBAC)', level: 'Primary', category: 'Enterprise', relatedProjects: ['qdms-enterprise'] },
      { name: 'API Testing (Postman)', level: 'Primary', category: 'Enterprise' },
      { name: 'Authentication & Session Mgmt', level: 'Primary', category: 'Enterprise', relatedProjects: ['qdms-enterprise', 'hotel-management-system'] },
      { name: 'Python Data Analysis (Pandas, NumPy)', level: 'Used in projects', category: 'Enterprise' },
      { name: 'Generative Engine Optimization (GEO)', level: 'Primary', category: 'Enterprise', relatedProjects: ['geo-auditor'] },
      { name: 'SEO Best Practices', level: 'Used in projects', category: 'Enterprise' },
      { name: 'OIDC / Single Sign-On', level: 'Familiar', category: 'Enterprise' },
    ]
  }
];
