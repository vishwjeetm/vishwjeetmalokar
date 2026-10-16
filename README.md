# Vishwjeet — Premium Developer Portfolio & Digital Solutions Website

A high-performance, conversion-focused personal portfolio website for **Vishwjeet**, software developer specializing in full-stack web applications, enterprise business systems, AI-powered applications, and Generative Engine Optimization (GEO).

---

## 🚀 Quick Start

Run from the `portfolio/` directory:

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (Vite)
npm run dev

# 3. Compile TypeScript & build production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

> **Note for Windows PowerShell:** If running scripts is restricted by ExecutionPolicy on your machine, run `npm.cmd run dev` and `npm.cmd run build`.

---

## 📁 Project Architecture & Maintainability

All website content is organized into modular, strictly typed TypeScript data files so you never have to touch complex UI code to update projects, services, or credentials:

```
portfolio/
├── public/
│   ├── favicon.svg               # Branded developer favicon
│   ├── robots.txt                # Search engine crawler permissions
│   ├── sitemap.xml               # Complete XML sitemap
│   └── images/
│       ├── og-card.svg           # Social Open Graph & Twitter card preview
│       ├── mockups/              # High-fidelity SVG architectural diagrams
│       │   ├── geo-auditor-dashboard.svg
│       │   ├── geo-auditor-prompts.svg
│       │   ├── sap-b1-workflow.svg
│       │   └── license-auth-pipeline.svg
│       └── projects/qdms/        # 11 AUTHENTIC verified production screenshots
│           ├── executive-dashboard.png
│           ├── daily-inspection-records.png
│           ├── inspection-modal-details.png
│           ├── quality-reports-analytics.png
│           ├── product-master.png
│           ├── machine-master.png
│           ├── employee-master.png
│           ├── defect-master.png
│           ├── department-master.png
│           ├── shift-master.png
│           └── login-portal.png
│
├── src/
│   ├── types/                    # Core TypeScript interfaces
│   │   └── index.ts
│   ├── data/
│   │   ├── siteConfig.ts         # Name, headlines, freelance status, social handles
│   │   ├── servicesData.ts       # 6 client service cards, problems solved, deliverables
│   │   ├── projectsData.ts       # All 12 projects + ShetiUpdates personal venture
│   │   ├── skillsData.ts         # Calibrated skills with proficiency tiers
│   │   └── experienceEducationData.ts # Verified education, experience, and certification toggle
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky blurred header, active scroll-spy, mobile drawer
│   │   ├── Hero.tsx              # First-screen brand value, CTAs, interactive console
│   │   ├── About.tsx             # Confident first-person background (B.E. CSE 2024)
│   │   ├── Services.tsx          # 6 service offerings with problem/deliverable focus
│   │   ├── Projects.tsx          # Featured spotlight (GEO Auditor, QDMS), filter tabs
│   │   ├── ProjectModal.tsx      # Deep-dive case study modal with screenshot lightbox
│   │   ├── Skills.tsx            # Categorized skills, proficiency tiers, project links
│   │   ├── ExperienceEducation.tsx # Verified experience timeline, education, cert toggle
│   │   ├── Contact.tsx           # Validated inquiry form, mailto trigger, copy proposal
│   │   ├── Footer.tsx            # Navigation, presence, back-to-top
│   │   └── Icons.tsx             # Clean SVG brand icons
│   ├── App.tsx                   # Main layout container
│   ├── main.tsx                  # Vite DOM entry
│   └── index.css                 # Dark tech palette, scrollbars, and styling
├── vite.config.ts                # Vite 8 + Tailwind CSS v4 + React plugin
├── tsconfig.json                 # TypeScript project configuration
└── package.json                  # Dependencies & build scripts
```

---

## ⚙️ Configuration Guide

### 1. Updating Contact Details & Social Links
Open `src/data/siteConfig.ts` to configure your actual email and profile URLs:
```ts
contact: {
  actualEmail: 'your-verified-email@domain.com',
  actualLinkedin: 'https://linkedin.com/in/your-profile',
  actualGithub: 'https://github.com/your-username',
  actualTruelancer: 'https://www.truelancer.com/freelancer/your-handle',
  location: 'Maharashtra, India (Open to Remote / Worldwide)',
}
```

### 2. Toggling Freelance Availability
In `src/data/siteConfig.ts`:
```ts
isAvailableForFreelance: true, // Controls the green pulsating status pill in the navbar & hero
freelanceStatusText: 'Available for freelance opportunities & custom software development',
```

### 3. Displaying Certifications Once Verified
In `src/data/experienceEducationData.ts`, when you receive or confirm your credential IDs or URLs:
```ts
{
  id: 'aws-cloud-practitioner',
  name: 'AWS Cloud Practitioner',
  issuer: 'Amazon Web Services (AWS)',
  date: '2024',
  verificationUrl: 'https://aws.amazon.com/verification/...',
  isVerified: true, // Set to true to show automatically
  statusNote: 'Verified credential'
}
```

### 4. Displaying CGPA
In `src/data/experienceEducationData.ts`, once you confirm qualification details:
```ts
showCgpa: true, // Flips display of 8.4 CGPA
```

---

## 🌐 Production Deployment Steps

### Deploy to Vercel
1. Push your repository to GitHub.
2. Import the `portfolio` project into [Vercel](https://vercel.com).
3. Framework preset: **Vite**. Root directory: `portfolio` (or repository root if deployed as dedicated repository).
4. Build command: `npm run build`. Output directory: `dist`.

### Deploy to Netlify
1. Connect repository in [Netlify](https://netlify.com).
2. Base directory: `portfolio`. Build command: `npm run build`. Publish directory: `portfolio/dist`.

### Deploy to GitHub Pages / Static Server
The generated `dist/` directory is 100% self-contained static HTML, CSS, JavaScript, SVGs, and WebP/PNG images. It can be served from any static host or Nginx/Apache container without backend dependencies.
