import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'full-stack-web',
    code: 'FS-DEV',
    title: 'Full-Stack Web Development',
    category: 'Application Engineering',
    iconName: 'Layout',
    description: 'Engineering responsive, high-performance web applications, administrative dashboards, and full-cycle digital platforms with modern architecture.',
    targetAudience: 'Startups, SMBs, and Agencies requiring responsive web apps, MVP development, or modern dashboard solutions.',
    problemsSolved: [
      'Clunky legacy user interfaces that fail on mobile devices and modern viewports.',
      'Disjointed frontends and backends causing slow response times and difficult maintenance.',
      'Unsecured user access, lack of role-based access control, and chaotic state management.',
      'Absence of custom business admin panels for team operations.'
    ],
    deliverables: [
      'Responsive React / Next.js / TypeScript frontends with clean component architecture.',
      'Robust backend services in Node.js / Express or ASP.NET Core.',
      'Interactive analytical dashboards, data tables, and reporting views.',
      'Role-based authentication (RBAC), session management, and secure route protection.',
      'Clean RESTful API interfaces with thorough parameter validation.'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL', 'ASP.NET Core']
  },
  {
    id: 'ai-applications',
    code: 'AI-ENG',
    title: 'AI-Powered Applications & Integrations',
    category: 'Applied Intelligence',
    iconName: 'Bot',
    description: 'Integrating Generative AI and LLM APIs into business workflows to automate text processing, enhance customer interactions, and build intelligent features.',
    targetAudience: 'Businesses and digital teams aiming to introduce pragmatic AI features without brittle experimental hype.',
    problemsSolved: [
      'Manual, repetitive customer query handling that drains human support time.',
      'Unstructured document content and text requiring manual summarization or categorization.',
      'Disorganized prompt pipelines with no fallback handling or token budgeting.',
      'Lack of clear boundary checks and rate limiting in third-party AI integrations.'
    ],
    deliverables: [
      'Custom chatbot interfaces with conversational memory and context bounds.',
      'Provider integration (OpenAI, Anthropic, Gemini, or local models) with fallback handling.',
      'Structured prompt orchestration and automated output JSON parsing.',
      'Text extraction, categorization, and AI-assisted data reporting pipelines.',
      'Safe, cost-monitored API integration middleware.'
    ],
    techStack: ['Python', 'Generative AI APIs', 'FastAPI/Flask', 'Node.js', 'Prompt Engineering', 'Structured JSON']
  },
  {
    id: 'geo-search-visibility',
    code: 'GEO-AUDIT',
    title: 'GEO & AI Search Visibility Auditing',
    category: 'AI Brand Intelligence',
    iconName: 'Radar',
    description: 'Auditing, tracking, and diagnosing brand visibility inside AI engines like ChatGPT, Claude, Perplexity, and Google Gemini with data-driven prompt benchmarking.',
    targetAudience: 'Marketing agencies, direct-to-consumer brands, and B2B SaaS companies seeking visibility in generative search.',
    problemsSolved: [
      'Zero visibility into how generative AI engines cite, represent, or ignore your brand.',
      'Competitors dominating AI recommendations while your brand is missing from responses.',
      'Inability to audit prompt query responses systematically across different model providers.',
      'Lack of sentiment, mention, and source citation analytics for generative engine outputs.'
    ],
    deliverables: [
      'Custom prompt collection design tailored to your market niche and buyer intent.',
      'Multi-engine audit execution across OpenAI, Claude, Perplexity, and Gemini.',
      'Source citation analysis, brand mention frequency, and sentiment classification.',
      'Competitor presence comparison and visibility share gap analysis.',
      'Actionable GEO strategy roadmap with content optimization recommendations.'
    ],
    techStack: ['GEO Auditing Architecture', 'Citation Analytics', 'Multi-LLM Benchmarking', 'Data Analysis', 'Reporting']
  },
  {
    id: 'business-erp-workflows',
    code: 'ERP-BIZ',
    title: 'Business Applications & ERP Workflows',
    category: 'Enterprise Engineering',
    iconName: 'Building2',
    description: 'Developing database-backed enterprise solutions, internal tools, and SAP Business One add-on modules to digitize and enforce mission-critical business rules.',
    targetAudience: 'Manufacturing plants, distribution firms, and mid-sized enterprises needing tailored workflow automation.',
    problemsSolved: [
      'Manual paper forms or error-prone spreadsheets for shop floor quality inspections and batch releases.',
      'Missing validation logic in standard ERP workflows leading to compliance breaches.',
      'Inability to track quality defects, machine downtime, and operator metrics in real time.',
      'High friction in SAP Business One data entry without customized form add-ons.'
    ],
    deliverables: [
      'SAP Business One Add-on development using VB.NET & SAP B1 Studio.',
      'User-Defined Tables (UDT), User-Defined Fields (UDF), and User-Defined Objects (UDO).',
      'Manufacturing quality workflows: Quality Test Requests, Certificates of Analysis (COA), and Batch Releases.',
      'Manufacturing Quality Defect Management Systems (QDMS) with Pareto analytics.',
      'Shift logging, machine tracking, and audit-ready PDF/Excel reporting.'
    ],
    techStack: ['VB.NET', 'SAP Business One SDK', '.NET 8', 'SQL Server', 'SAP B1 Studio', 'Enterprise Architecture']
  },
  {
    id: 'api-database-dev',
    code: 'API-DATA',
    title: 'API & Database Development',
    category: 'Backend & Data',
    iconName: 'Database',
    description: 'Architecting secure RESTful endpoints, relational data schemas, optimized SQL queries, and transactional integrity for high-reliability data services.',
    targetAudience: 'Companies requiring dependable backend infrastructure, database migrations, or third-party service integrations.',
    problemsSolved: [
      'Unoptimized SQL queries and slow database indexes choking response times under load.',
      'Poorly structured entity relationships leading to data duplication and update anomalies.',
      'Inconsistent API response schemas making frontend consumption fragile.',
      'Lack of automated database migrations and proper transaction rollbacks.'
    ],
    deliverables: [
      'Clean REST API architecture with comprehensive error handling and logging.',
      'Normalized relational schemas (PostgreSQL, SQL Server, MySQL) with indexes and foreign keys.',
      'ORM configuration (Entity Framework Core, SQLAlchemy, Prisma) and raw SQL query tuning.',
      'Data import/export pipelines with CSV, Excel, and JSON formatting.',
      'Postman collection documentation for rapid client verification.'
    ],
    techStack: ['PostgreSQL', 'SQL Server', 'MySQL', 'Node.js', 'Express', 'C# / ASP.NET', 'Python', 'SQLAlchemy']
  },
  {
    id: 'deployment-dev-workflow',
    code: 'OPS-FLOW',
    title: 'Deployment & Development Workflow Support',
    category: 'DevOps & Tooling',
    iconName: 'Server',
    description: 'Setting up reproducible container environments, structured Git branches, object storage configurations, and maintainable deployment pipelines.',
    targetAudience: 'Teams seeking clean local-to-production reproducibility and well-structured source control conventions.',
    problemsSolved: [
      '“Works on my machine” discrepancies between local development and staging environments.',
      'Tangled Git history with conflicting branches and accidental credential commits.',
      'Unreliable file storage setups for user-uploaded documents and media assets.',
      'Difficulty onboarding new engineers due to undocumented environment setups.'
    ],
    deliverables: [
      'Multi-container Docker Compose files for local development and staging.',
      'MinIO or S3-compatible object storage configuration for file and asset handling.',
      'Structured Git workflow guidance (feature branching, pull requests, semantic commits).',
      'Environment variable separation (.env templates, secrets isolation).',
      'Clear, reproducible project READMEs and deployment runbooks.'
    ],
    techStack: ['Docker', 'Docker Compose', 'MinIO', 'Git', 'GitHub', 'Linux Basics', 'Nginx Configs']
  }
];
