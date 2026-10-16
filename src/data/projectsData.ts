import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'geo-auditor',
    title: 'GEO Auditor — AI Visibility & Citation Intelligence',
    slug: 'geo-auditor',
    category: 'AI SaaS / GEO',
    status: 'Active Development',
    isFeatured: true,
    displayOrder: 1,
    visible: true,
    isStrongestVisual: true,
    tagline: 'Audit brand presence, citation frequency, and competitor share across generative AI models.',
    summary: 'A specialized AI SaaS platform concept designed to monitor, audit, and analyze how brands and competitors appear in generative AI responses across ChatGPT, Claude, Perplexity, and Google Gemini.',
    problem: 'Generative search engines are rapidly becoming the primary discovery channel for consumers and B2B buyers. However, businesses currently lack automated observability into how LLMs cite their products, which competitors are prioritized in answers, and what sentiment AI responses carry.',
    solution: 'Engineered an end-to-end GEO auditing platform concept featuring configurable brand profiles, prompt collection management, automated multi-provider LLM querying, response storage, citation extraction, sentiment classification, and competitive benchmarking reports.',
    role: 'Full-Stack Architecture & System Design (React, Node.js, Express, PostgreSQL, Docker, MinIO)',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'MinIO', 'Generative AI APIs', 'Tailwind CSS'],
    keyFeatures: [
      'Multi-Model LLM Query Runner: Execute audit prompts across OpenAI, Anthropic Claude, and Gemini APIs.',
      'Prompt Collections Management: Organize prompt groups by buyer intent, product category, and brand name variations.',
      'Citation & Source Analytics: Parse and index web references, domain authorities, and cited URLs from AI answers.',
      'Competitor Share-of-Voice: Quantify how frequently rival brands are recommended versus your own brand.',
      'Sentiment & Brand Perception Scoring: Categorize answer tone as favorable, neutral, or critical.',
      'Recurring Audit Engine: Schedule automated weekly or monthly audits to monitor visibility changes over time.',
      'Object Storage with MinIO: Store full raw AI responses, JSON dumps, and snapshot artifacts securely.'
    ],
    architectureHighlights: [
      'React frontend with interactive prompt workspace and comparative radar analytics.',
      'Node.js & Express API orchestrator handling concurrent AI model dispatch with rate-limit buffers.',
      'Relational PostgreSQL schema storing audit runs, prompts, citations, brands, and sentiment metrics.',
      'Docker Compose infrastructure hosting MinIO object storage alongside Postgres.'
    ],
    businessImpact: 'Enables digital marketing teams, brand managers, and SEO strategists to transition from traditional Google SERP tracking to generative search optimization.',
    screenshots: [
      {
        url: '/images/mockups/geo-auditor-dashboard.svg',
        caption: 'Architectural Mockup — Multi-Model AI Search Visibility & Brand Share-of-Voice Console',
        isReal: false
      },
      {
        url: '/images/mockups/geo-auditor-prompts.svg',
        caption: 'Architectural Mockup — Prompt Category Matrix & Real-Time Provider Citation Extraction',
        isReal: false
      }
    ],
    demoUrl: null, // Set when live demo deployed
    repoUrl: null, // Set when repository public
    clientTakeaway: 'Exemplifies full-stack SaaS engineering, multi-AI API orchestration, data modeling for unstructured text, and cutting-edge Generative Engine Optimization principles.'
  },
  {
    id: 'qdms-enterprise',
    title: 'Manufacturing Quality Defect Management System (QDMS)',
    slug: 'qdms-enterprise',
    category: 'Enterprise / ERP',
    status: 'Completed Application',
    isFeatured: true,
    displayOrder: 2,
    visible: true,
    tagline: 'High-precision manufacturing defect cataloging, batch quality inspections, and real-time plant analytics.',
    summary: 'A robust enterprise web application built on .NET 8 MVC and SQL Server for industrial plants to catalog defects, record daily production inspections, enforce shift-level QA compliance, and track Pareto quality metrics in real time.',
    problem: 'Industrial shop floors frequently track quality defects on handwritten paper logs or disconnected spreadsheets. This creates delayed defect awareness, unverified lot releases, inaccurate PPM (parts-per-million) defect rates, and high friction during ISO audit reviews.',
    solution: 'Designed and built a complete ISO 9001:2015-aligned Quality Defect Management System featuring role-based portals (Admin, Supervisor, Inspector), daily inspection logging with multi-line defect cataloging, real-time Pareto charts, and exportable compliance reports.',
    role: 'Full-Stack .NET Developer (Architecture, MVC Controllers, Services, SQL Server Schema, ViewModels, UI)',
    technologies: ['.NET 8', 'ASP.NET Core MVC', 'C#', 'SQL Server', 'Entity Framework / ADO.NET', 'Bootstrap / Modern UI', 'Chart.js', 'Export Tools'],
    keyFeatures: [
      'Standardized Daily Inspection Log: Record production lots, CNC machines, shifts, inspected count, accepted count, and rejection rates.',
      'Multi-Line Defect Itemization: Tag defects with standard master codes (DEF-001 to DEF-005), severity (Critical, Major, Minor), and category (Structural, Chemical, Surface).',
      'Executive Quality Dashboard: Real-time KPIs for Active Products (4), CNC Workstations (4), QA Personnel (3), Defect Codes (5), Defect Rate (10%), and Overall Yield (90%).',
      'Pareto Analysis & Trend Graphs: Monthly defect volume curves, category rankings, and cross-comparison by machine and shift.',
      'Master Data Management: Dedicated CRUD consoles for Product Master, Machine Master, Employee Master, Defect Master, Department Master, and Shift Master.',
      'Role-Based Access Control: Granular permissions for System Administrator, Production Supervisor, and QA Floor Inspector.',
      'Audit & Compliance Export: One-click export of inspection records and analytical summaries to Excel, CSV, PDF, and print layouts.'
    ],
    architectureHighlights: [
      '.NET 8 MVC layered architecture separating generic repositories, custom domain services, and strongly typed viewmodels.',
      'Relational SQL Server database design enforcing referential integrity across inspection headers, defect line items, and master catalog tables.',
      'Client-side instant quality yield calculations (% yield = accepted / inspected * 100) with dynamic badge coloring.',
      'Responsive dark-mode industrial UI designed for readability on plant control monitors and tablets.'
    ],
    businessImpact: 'Eliminates paper-based defect logs, provides instantaneous defect PPM visibility to plant managers, and ensures audit-ready traceability for manufacturing compliance.',
    screenshots: [
      {
        url: '/images/projects/qdms/executive-dashboard.png',
        caption: 'Verified Production Screen — Executive Quality Dashboard with live defect metrics and Pareto graphs',
        isReal: true
      },
      {
        url: '/images/projects/qdms/daily-inspection-records.png',
        caption: 'Verified Production Screen — Daily Inspection Records with multi-criteria filtering and export actions',
        isReal: true
      },
      {
        url: '/images/projects/qdms/inspection-modal-details.png',
        caption: 'Verified Production Screen — Inspection Report Details showing line items, defect severity, and yield rate',
        isReal: true
      },
      {
        url: '/images/projects/qdms/quality-reports-analytics.png',
        caption: 'Verified Production Screen — Multi-dimensional Quality Reports & Analytics (Product, Machine, Shift, Defect)',
        isReal: true
      },
      {
        url: '/images/projects/qdms/product-master.png',
        caption: 'Verified Production Screen — Product Master Data catalog with part numbers and customer specifications',
        isReal: true
      },
      {
        url: '/images/projects/qdms/machine-master.png',
        caption: 'Verified Production Screen — Machine Master Data managing CNC centers, presses, and workstations',
        isReal: true
      },
      {
        url: '/images/projects/qdms/login-portal.png',
        caption: 'Verified Production Screen — Enterprise Portal authentication with role-based quick demo credentials',
        isReal: true
      }
    ],
    demoUrl: null,
    repoUrl: null,
    clientTakeaway: 'Demonstrates verified ability to engineer mission-critical enterprise ERP systems with complex database relations, industrial QA compliance rules, and responsive business UI.'
  },
  {
    id: 'sap-b1-addon',
    title: 'SAP Business One Add-on Development',
    slug: 'sap-b1-addon',
    category: 'Enterprise / ERP',
    status: 'Enterprise Module',
    isFeatured: true,
    displayOrder: 3,
    visible: true,
    tagline: 'Custom ERP business logic, user-defined objects (UDO), and validation add-ons in VB.NET.',
    summary: 'Engineered custom ERP add-on modules for SAP Business One using VB.NET and SAP B1 Studio to streamline quality inspection workflows, batch releases, and certificate generation directly within SAP forms.',
    problem: 'Standard SAP Business One forms often lack out-of-the-box fields and step-by-step validation required for specialized manufacturing quality testing, sample registration, and batch certification workflows.',
    solution: 'Developed compliant SAP B1 Add-ons using SAP B1 Studio and VB.NET, creating User-Defined Tables (UDT), User-Defined Fields (UDF), and User-Defined Objects (UDO) with custom menus, dynamic form loading, matrix line item management, and stringent business validations.',
    role: 'SAP B1 Add-on Developer (VB.NET, SAP B1 Studio, UI API, DI API)',
    technologies: ['VB.NET', 'SAP Business One SDK', 'SAP B1 Studio', 'UI API / DI API', 'SQL Server', 'UDT / UDF / UDO'],
    keyFeatures: [
      'Quality Test Request (QTR) Workflow: Custom form integration linking directly to production orders and incoming goods.',
      'Certificate of Analysis (COA) Automation: Generation of formal analysis certificates based on verified inspection parameters.',
      'Batch Release Request: Enforces mandatory sign-off before manufacturing batches can be moved to finished inventory.',
      'Sample Registration & Tracking: Structured logging of laboratory samples and chemical/physical test values.',
      'Formula-Related Requests: Custom validations ensuring bill-of-materials and formula proportions match specifications.',
      'Menu & Form Orchestration: Seamless native SAP B1 menu integration and custom XML form loading.',
      'Matrix Line Management: Real-time row addition, line validation, and totals calculation inside SAP grid controls.'
    ],
    architectureHighlights: [
      'Strict adherence to nonconfidential architectural patterns without exposing proprietary customer data.',
      'Event-driven SAP UI API listener handling form load, menu item clicks, and matrix cell validation events.',
      'Transaction-safe DI API data access ensuring data integrity when persisting custom UDO documents.',
      'Built and packaged using SAP Business One Add-on installation packaging standards.'
    ],
    businessImpact: 'Automated labor-intensive compliance workflows inside SAP B1, preventing unauthorized lot releases and reducing manual data re-entry errors.',
    screenshots: [
      {
        url: '/images/mockups/sap-b1-workflow.svg',
        caption: 'Conceptual Architecture Diagram — SAP Business One SDK Add-on Event Pipeline & UDO Data Flow',
        isReal: false
      }
    ],
    demoUrl: null,
    repoUrl: null,
    clientTakeaway: 'Proves specialized capabilities in enterprise ERP ecosystem customization, desktop/native business tooling, and industrial process automation.'
  },
  {
    id: 'driving-license-auth',
    title: 'Driving License Authentication & Detection System',
    slug: 'driving-license-auth',
    category: 'Computer Vision & AI',
    status: 'Functional Prototype',
    isFeatured: true,
    displayOrder: 4,
    visible: true,
    tagline: 'Computer vision and web pipeline for automated ID card boundary detection and text validation.',
    summary: 'A computer vision-assisted web application prototype designed to detect driving license boundaries, extract document regions, and authenticate credential details using Python, Flask, and relational storage.',
    problem: 'Manual verification of identification cards during onboarding is slow, prone to human error, and vulnerable to fraudulent uploads.',
    solution: 'Created an intelligent verification web workflow using Python, Flask, and SQLAlchemy to process submitted license images, detect key document markers, and store verification records in MySQL.',
    role: 'Python & Web Developer (Backend, API, Computer Vision Pipeline, Database)',
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'MySQL', 'Computer Vision (OpenCV)', 'HTML5/CSS3'],
    keyFeatures: [
      'Image Preprocessing: Normalization, grayscale conversion, and thresholding for variable lighting.',
      'Document Boundary Detection: Locates card edges and applies perspective transformation.',
      'Verification Record Management: Stores applicant metadata, verification logs, and status in MySQL.',
      'Flask REST Endpoints: Exposes clean upload, processing, and verification result endpoints.'
    ],
    architectureHighlights: [
      'Flask microservice handling file upload validation and image processing pipeline.',
      'SQLAlchemy ORM models linking user submissions to verification audit trails.'
    ],
    businessImpact: 'Demonstrates automated document processing capabilities that reduce manual verification time in onboarding pipelines.',
    screenshots: [
      {
        url: '/images/mockups/license-auth-pipeline.svg',
        caption: 'Illustrative Architecture Flow — Computer Vision Preprocessing & Card Authentication Pipeline',
        isReal: false
      }
    ],
    demoUrl: null,
    repoUrl: null,
    clientTakeaway: 'Bridges computer vision algorithms with web APIs and database persistence for automated document processing.'
  },
  {
    id: 'customer-support-chatbot',
    title: 'Intelligent Customer Support Chatbot',
    slug: 'customer-support-chatbot',
    category: 'AI SaaS / GEO',
    status: 'Functional Prototype',
    isFeatured: false,
    displayOrder: 5,
    visible: true,
    tagline: 'Conversational assistant interface integrated with LLM APIs for automated tier-1 inquiry triage.',
    summary: 'A customer-facing conversational interface built to handle common client questions, triage incoming support requests, and generate structured summaries for support agents.',
    problem: 'Small businesses struggle to provide 24/7 customer guidance, leading to frustrated inquiries and overwhelmed human support staff.',
    solution: 'Constructed a clean conversational web widget backed by an LLM integration layer that answers domain-specific inquiries within strict guardrails and escalates complex requests.',
    role: 'Full-Stack Developer (Chat Interface, Backend Integration, Prompt Architecture)',
    technologies: ['React', 'Node.js', 'Express', 'LLM API Integration', 'Prompt Engineering', 'CSS3'],
    keyFeatures: [
      'Responsive Chat UI: Lightweight floating chat bubble with instant typing indicators.',
      'Context Preservation: Maintains multi-turn conversation history within session bounds.',
      'Structured Guardrails: Prompt templates that prevent hallucinations and keep responses on-topic.',
      'Escalation Logging: Automatically formats customer inquiries into clear support tickets.'
    ],
    architectureHighlights: [
      'Backend middleware managing API rate limits and token optimization.',
      'Secure credential handling ensuring API secrets remain server-side.'
    ],
    businessImpact: 'Enables instant first-response times for user inquiries without requiring round-the-clock live staff.',
    screenshots: [],
    demoUrl: null,
    repoUrl: null,
    clientTakeaway: 'Highlights clean integration of AI APIs into real-world business interaction points with strict prompt guardrails.'
  },
  {
    id: 'hotel-management-system',
    title: 'Database-Driven Hotel Management System',
    slug: 'hotel-management-system',
    category: 'Full-Stack & Web',
    status: 'Completed Application',
    isFeatured: false,
    displayOrder: 6,
    visible: true,
    tagline: 'Reservation management, room inventory, billing calculations, and guest records on ASP.NET.',
    summary: 'A structured database-driven web application developed with ASP.NET Web Forms, ADO.NET, and SQL Server to handle guest bookings, room availability, and check-out billing.',
    problem: 'Boutique hotels relying on manual registers encounter double bookings, inaccurate invoice calculations, and lost guest histories.',
    solution: 'Built an end-to-end management portal supporting full CRUD operations for room inventory, reservation date range validation, guest check-in/out workflows, and automated bill generation.',
    role: 'ASP.NET Developer (Web Forms, ADO.NET SQL Queries, Authentication, UI)',
    technologies: ['ASP.NET Web Forms', 'C#', 'SQL Server', 'ADO.NET', 'HTML/CSS', 'JavaScript'],
    keyFeatures: [
      'Room Inventory Tracking: Real-time room status (Available, Occupied, Maintenance).',
      'Guest Check-In / Check-Out: Automated duration calculation and stay ledger.',
      'Billing & Invoice Generator: Itemized billing including room rates, taxes, and incidental charges.',
      'Role Authentication: Protected administrative actions for room pricing and staff credentials.'
    ],
    architectureHighlights: [
      'Direct ADO.NET parameterized queries preventing SQL injection vulnerabilities.',
      'Server-side validation controls ensuring reservation date consistency.'
    ],
    businessImpact: 'Streamlined daily hotel front-desk operations and eliminated manual calculation discrepancies.',
    screenshots: [],
    demoUrl: null,
    repoUrl: null,
    clientTakeaway: 'Proves foundational expertise in relational database architecture, transactional operations, and business rule enforcement.'
  },
  {
    id: 'online-job-portal',
    title: 'Online Recruitment & Job Search Portal',
    slug: 'online-job-portal',
    category: 'Full-Stack & Web',
    status: 'Functional Prototype',
    isFeatured: false,
    displayOrder: 7,
    visible: true,
    tagline: 'Multi-role career board with job postings, resume uploads, and candidate tracking.',
    summary: 'A web application connecting job seekers with recruiters, featuring searchable job postings, resume submission pipelines, and an administrative control panel for posting approvals.',
    problem: 'Fragmented job listings and disorganized resume inboxes make hiring tedious for small staffing agencies.',
    solution: 'Developed a dual-role job portal with candidate applicant profiles, recruiter posting tools, resume document uploads, and categorized job filtering.',
    role: 'Full-Stack Web Developer',
    technologies: ['Web Application Framework', 'Relational Database', 'Authentication', 'File Upload Pipeline', 'CSS3'],
    keyFeatures: [
      'Job Search & Categorization: Filter by role title, location, and industry domain.',
      'Candidate Portal: Profile management and digital resume file upload.',
      'Recruiter Dashboard: Post new openings and review received candidate submissions.',
      'Admin Moderation: Content management for verified employer listings.'
    ],
    architectureHighlights: [
      'Secure multipart file upload storage with MIME-type validation.',
      'Role-based permission separation between applicants and hiring managers.'
    ],
    businessImpact: 'Organizes the applicant pipeline for hiring teams with structured tracking.',
    screenshots: [],
    demoUrl: null,
    repoUrl: null,
    clientTakeaway: 'Demonstrates end-to-end multi-role web platform architecture and document upload handling.'
  },
  {
    id: 'camera-studio-management',
    title: 'Photography Studio & Equipment Management',
    slug: 'camera-studio-management',
    category: 'Full-Stack & Web',
    status: 'Completed Application',
    isFeatured: false,
    displayOrder: 8,
    visible: true,
    tagline: 'Booking scheduling, client session tracking, and studio gear inventory management.',
    summary: 'A tailored business management application designed for photography studios to manage client shoot bookings, schedule equipment allocation, and maintain invoice records.',
    problem: 'Photography studios frequently face double-booked shoot slots and untracked high-value camera gear rentals across different teams.',
    solution: 'Implemented a central studio management portal tracking shoot calendars, customer deliverables, deposit payments, and equipment availability.',
    role: 'Software Developer (Full-Stack Implementation & Database)',
    technologies: ['Relational Database', 'Backend API', 'Frontend UI', 'Authentication', 'Reporting'],
    keyFeatures: [
      'Session Calendar: Booking slots by date, shoot type (wedding, portrait, commercial), and duration.',
      'Gear Allocation: Track cameras, lenses, and lighting units checked out per shoot.',
      'Client Invoicing: Advance deposit recording, final billing, and payment status.',
      'Delivery Milestones: Status tracking from raw capture to final edited album delivery.'
    ],
    architectureHighlights: [
      'Relational scheduling schema preventing overlapping equipment assignments.',
      'Client history lookup for recurring bookings and package discounts.'
    ],
    businessImpact: 'Organized studio operations, eliminated gear loss, and reduced booking coordination overhead.',
    screenshots: [],
    demoUrl: null,
    repoUrl: null,
    clientTakeaway: 'Demonstrates tailored software development solving operational pain points for service-based businesses.'
  },
  {
    id: 'wedding-invitation-app',
    title: 'Interactive Digital Wedding Experience',
    slug: 'wedding-invitation-app',
    category: 'Digital Experience',
    status: 'Completed Application',
    isFeatured: false,
    displayOrder: 9,
    visible: true,
    tagline: 'Modern, responsive invitation experience with interactive itinerary and location guidance.',
    summary: 'A beautifully styled, high-performance responsive digital invitation website featuring interactive event timelines, photo highlights, digital RSVP submission, and venue mapping.',
    problem: 'Traditional paper cards cannot provide live itinerary updates, GPS navigation, or instantaneous RSVP headcounts.',
    solution: 'Designed and deployed a mobile-first digital experience with elegant typography, smooth transitions, ceremony schedule details, Google Maps integration, and RSVP collection.',
    role: 'Frontend UI/UX Designer & Developer',
    technologies: ['HTML5', 'CSS3 / Modern Styling', 'JavaScript', 'Responsive Design', 'Interactive Maps'],
    keyFeatures: [
      'Mobile-First Design: Tailored typography and smooth animations on all smartphones.',
      'Interactive Event Itinerary: Timeline for Haldi, Sangeet, Wedding Ceremony, and Reception.',
      'Venue Direction Assist: One-tap navigation opening user destination in Google Maps.',
      'Digital RSVP Collection: Interactive guest attendance confirmation.'
    ],
    architectureHighlights: [
      'Zero-dependency lightweight assets ensuring sub-second load times on mobile 4G.',
      'Accessible contrast and semantic layout for guests of all ages.'
    ],
    businessImpact: 'Delivered an interactive, memorable digital experience that eliminated printing waste and simplified guest coordination.',
    screenshots: [],
    demoUrl: null,
    repoUrl: null,
    clientTakeaway: 'Highlights creative UI/UX craftsmanship, fluid responsive styling, and fast frontend delivery.'
  },
  {
    id: 'object-detection-cv',
    title: 'Computer Vision Object Detection Pipeline',
    slug: 'object-detection-cv',
    category: 'Computer Vision & AI',
    status: 'Functional Prototype',
    isFeatured: false,
    displayOrder: 10,
    visible: true,
    tagline: 'Real-time multi-class object detection and bounding box inference using Python.',
    summary: 'An experimental computer vision pipeline utilizing deep learning models and OpenCV to identify, localize, and classify visual objects in static image feeds and camera streams.',
    problem: 'Automating inspection and visual surveillance requires robust localized detection beyond simple whole-image classification.',
    solution: 'Configured and evaluated an object detection pipeline with bounding box rendering, confidence score filtering, and multi-class recognition.',
    role: 'Computer Vision Developer (Model Setup, Pipeline, Testing)',
    technologies: ['Python', 'OpenCV', 'Deep Learning Libraries', 'NumPy'],
    keyFeatures: [
      'Bounding Box Generation: Calculates spatial coordinates and labels detected items.',
      'Confidence Thresholding: Filters low-probability false positives dynamically.',
      'Frame-by-Frame Processing: Optimized pipeline for continuous visual evaluation.'
    ],
    architectureHighlights: [
      'Modular image ingestion pipeline decoupled from the underlying detection model.',
      'Clean evaluation logs reporting confidence distributions and detection latency.'
    ],
    businessImpact: 'Demonstrates practical familiarity with visual perception models and edge-case filtering.',
    screenshots: [],
    demoUrl: null,
    repoUrl: null,
    clientTakeaway: 'Validates applied computer vision skills and Python-based machine learning workflow execution.'
  },
  {
    id: 'tts-pdf-reader',
    title: 'Text-to-Speech Accessible PDF Reader',
    slug: 'tts-pdf-reader',
    category: 'Accessibility & Utilities',
    status: 'Functional Prototype',
    isFeatured: false,
    displayOrder: 11,
    visible: true,
    tagline: 'Accessibility web utility extracting PDF text and synthesizing speech playback.',
    summary: 'An accessible document-processing web utility built with ASP.NET to parse uploaded PDF documents, extract textual content, and synthesize speech audio for auditory document consumption.',
    problem: 'Reading long technical PDFs or contracts on small screens causes eye fatigue and poses accessibility barriers for visually impaired users.',
    solution: 'Developed an ASP.NET application that parses structured PDF pages, cleans extracted string tokens, and streams synthesized speech playback to the browser.',
    role: 'ASP.NET Developer (Document Parsing, Audio Pipeline, UI)',
    technologies: ['ASP.NET Web Forms', 'C#', 'PDF Text Parsing', 'Speech Synthesis API', 'HTML5 Audio'],
    keyFeatures: [
      'Document Ingestion: Upload and server-side parsing of multipage PDF files.',
      'Speech Synthesis: Converts text chunks into natural audio playback.',
      'Interactive Player: Play, pause, rate control, and section skipping controls.'
    ],
    architectureHighlights: [
      'Stream-based PDF parsing preventing memory exhaustion on large documents.',
      'Chunked text buffering for continuous audio streaming.'
    ],
    businessImpact: 'Improves accessibility and enables hands-free auditory review of long-form documents.',
    screenshots: [],
    demoUrl: null,
    repoUrl: null,
    clientTakeaway: 'Demonstrates document parsing, audio streaming, and accessibility-first utility engineering.'
  },
  {
    id: 'java-erp-system',
    title: 'Institutional ERP & Administration System',
    slug: 'java-erp-system',
    category: 'Enterprise / ERP',
    status: 'Functional Prototype',
    isFeatured: false,
    displayOrder: 12,
    visible: true,
    tagline: 'Comprehensive administration tool for student records, staff allocations, and fee accounting.',
    summary: 'A structured institutional administration system built in Java and MySQL managing student enrollment records, faculty department assignments, and installment fee accounting.',
    problem: 'Educational institutions face reconciliation headaches when student enrollment, department assignments, and fee receipts are tracked in disparate records.',
    solution: 'Designed a unified relational ERP schema and Java desktop application enforcing fee ledger calculations, admission record management, and receipt reporting.',
    role: 'Java & Database Developer (System Design, JDBC, MySQL Schema)',
    technologies: ['Java', 'MySQL', 'JDBC', 'Relational Database Design', 'Swing / UI'],
    keyFeatures: [
      'Student Information Records: Enrollment details, academic history, and contact directories.',
      'Faculty & Staff Allocation: Department mapping, designation, and subject assignments.',
      'Fee Accounting & Ledgers: Tracks payment installments, balances, and receipt numbers.',
      'Relational Consistency: Foreign keys ensuring students cannot be deleted while active balances exist.'
    ],
    architectureHighlights: [
      'Normalized 3NF relational schema in MySQL.',
      'Parameterized JDBC database operations with explicit commit and rollback transactions.'
    ],
    businessImpact: 'Centralized institutional operations and eliminated fee payment discrepancies.',
    screenshots: [],
    demoUrl: null,
    repoUrl: null,
    clientTakeaway: 'Validates foundational computer science principles: ACID transactions, relational normalization, and object-oriented design.'
  }
];

// Separate personal venture / secondary project as requested in prompt item #17
export const personalVentures = [
  {
    id: 'shetiupdates',
    title: 'ShetiUpdates — Agricultural Market Intelligence & Media',
    tagline: 'Digital media platform delivering Marathi agricultural market-price analysis and updates.',
    description: 'A dedicated personal digital media initiative focusing on agricultural market commodity prices (bhav) for farmers across Maharashtra. Features structured commodity price tables (soybean, tur, harbhara), localized market insights, social templates, and short-form video explainers.',
    technologies: ['Data Compilation', 'Social Content Architecture', 'Visual Design Templates', 'Agricultural Market Analysis'],
    focusAreas: [
      'Daily APMC market rate aggregation for Soybean, Tur (Pigeon Pea), and Harbhara (Chickpea).',
      'Clean visual graphic templates for rapid social distribution in regional Marathi language.',
      'Short-form educational video concepts explaining price trend dynamics and market arrivals.',
      'Kept intentionally segregated from core software engineering client services.'
    ],
    status: 'Personal Digital Venture'
  }
];
