import React, { useState } from 'react';
import { projectsData, personalVentures } from '../data/projectsData';
import { Project, ProjectCategory } from '../types';
import { useTheme } from '../context/ThemeContext';
import { Layers, ArrowRight, ShieldCheck, AlertCircle, Eye } from 'lucide-react';

interface ProjectsProps {
  onOpenProject: (project: Project) => void;
  onDiscussProject?: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenProject }) => {
  const { styles } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<'software' | 'ventures'>('software');

  const categories: (string | ProjectCategory)[] = [
    'All',
    'AI SaaS / GEO',
    'Enterprise / ERP',
    'Full-Stack & Web',
    'Computer Vision & AI',
    'Accessibility & Utilities'
  ];

  const filteredProjects = projectsData
    .filter((p) => p.visible)
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .filter((p) => {
      if (selectedCategory === 'All') return true;
      return p.category === selectedCategory;
    });

  return (
    <section id="projects" className={`py-24 relative ${styles.sectionDivider}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 font-mono text-xs uppercase tracking-wider mb-3 ${styles.badgePrimary}`}>
              <Layers className="w-3.5 h-3.5" />
              Verified Portfolio &amp; Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Featured Software Projects &amp; Implementations.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Explore concrete software applications, enterprise add-ons, AI SaaS systems, and database workflows. Each case study documents the business problem, architectural design, and implemented capabilities.
            </p>
          </div>

          {/* Tab Selector: Core Software Projects vs Personal Ventures */}
          <div className="flex p-1 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('software')}
              className={`px-4 py-2 text-xs font-semibold transition-all ${
                activeTab === 'software' ? styles.btnPrimary : 'text-slate-400 hover:text-white'
              }`}
            >
              Software Projects ({projectsData.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ventures')}
              className={`px-4 py-2 text-xs font-semibold transition-all ${
                activeTab === 'ventures' ? styles.btnSecondary : 'text-slate-400 hover:text-white'
              }`}
            >
              Secondary Ventures ({personalVentures.length})
            </button>
          </div>
        </div>

        {activeTab === 'software' ? (
          <>
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? styles.btnPrimary
                      : styles.btnNav
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Top Spotlight: GEO Auditor (Strongest Visual Treatment) */}
            {selectedCategory === 'All' && (
              <div className={`mb-14 p-6 sm:p-8 lg:p-10 relative overflow-hidden group ${styles.cardSpotlight}`}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className={`px-3 py-1 text-xs font-mono font-semibold ${styles.badgePrimary}`}>
                        Spotlight Architecture
                      </span>
                      <span className={`px-3 py-1 text-xs font-mono font-semibold ${styles.badgeStatus}`}>
                        Active Development Project
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      GEO Auditor — Generative Search Visibility Intelligence
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      Auditing how brands and competitors appear in generative AI responses across ChatGPT, Claude, Perplexity, and Google Gemini. Features multi-model prompt scheduling, response persistence, citation domain tracking, and competitive share-of-voice analytics.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'MinIO', 'Generative AI APIs'].map((tech) => (
                        <span key={tech} className={`px-2.5 py-1 text-xs font-mono ${styles.techPill}`}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() => onOpenProject(projectsData[0])}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold ${styles.btnPrimary}`}
                      >
                        <Eye className="w-4 h-4" />
                        <span>Explore Full Case Study &amp; Architecture</span>
                      </button>

                      <span className="text-xs text-slate-400 font-mono">
                        Multi-Model Prompt Pipeline
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div 
                      onClick={() => onOpenProject(projectsData[0])}
                      className="cursor-pointer relative rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-xl group-hover:border-blue-500/60 transition-all hover:scale-[1.01]"
                    >
                      <img
                        src="/images/mockups/geo-auditor-dashboard.svg"
                        alt="GEO Auditor Multi-Model Visibility Dashboard"
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                      <div className="p-3 bg-black/60 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-amber-300 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          Illustrative Architectural Mockup
                        </span>
                        <span className="text-blue-400 font-semibold hover:underline flex items-center gap-1">
                          Click to Enlarge <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Spotlight 2: Manufacturing QDMS with REAL SCREENSHOTS */}
            {selectedCategory === 'All' && (
              <div className={`mb-14 p-6 sm:p-8 lg:p-10 relative overflow-hidden group ${styles.cardSpotlight}`}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  
                  <div className="lg:col-span-6 order-2 lg:order-1">
                    <div 
                      onClick={() => onOpenProject(projectsData[1])}
                      className="cursor-pointer relative rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-xl group-hover:border-indigo-500/60 transition-all hover:scale-[1.01]"
                    >
                      <img
                        src="/images/projects/qdms/executive-dashboard.png"
                        alt="Manufacturing Quality Defect Management System Executive Dashboard"
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                      <div className="p-3 bg-black/60 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                          <ShieldCheck className="w-4 h-4" />
                          Verified Production Screenshots (11 Views Available)
                        </span>
                        <span className="text-indigo-400 font-semibold hover:underline flex items-center gap-1">
                          View All Screens <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className={`px-3 py-1 text-xs font-mono font-semibold ${styles.badgePrimary}`}>
                        Enterprise ERP &amp; Manufacturing QA
                      </span>
                      <span className={`px-3 py-1 text-xs font-mono font-semibold ${styles.badgeStatus}`}>
                        Completed Application
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Manufacturing Quality Defect Management System (QDMS)
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      A complete ISO 9001:2015-aligned plant inspection and defect tracking system built with .NET 8 MVC and SQL Server. Features daily inspection logs, multi-line defect codes, Pareto analysis, machine-wise yield rates, and exportable audit reports.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {['.NET 8', 'ASP.NET Core MVC', 'C#', 'SQL Server', 'Entity Framework', 'Role-Based Auth', 'Chart.js', 'Excel/PDF Export'].map((tech) => (
                        <span key={tech} className={`px-2.5 py-1 text-xs font-mono ${styles.techPill}`}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() => onOpenProject(projectsData[1])}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold ${styles.btnPrimary}`}
                      >
                        <Eye className="w-4 h-4" />
                        <span>Inspect Full QDMS Architecture &amp; Screens</span>
                      </button>

                      <span className="text-xs text-slate-400 font-mono">
                        ISO 9001 / Pareto Quality Rates
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* Grid of All Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`p-6 flex flex-col justify-between group ${styles.cardInteractive}`}
                >
                  <div>
                    {/* Top tags */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-medium text-blue-400">
                        {project.category}
                      </span>
                      <span className={`px-2 py-0.5 text-[11px] font-mono ${
                        project.status === 'Completed Application'
                          ? styles.badgeStatus
                          : styles.techPill
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h4 className="text-lg font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-0.5 text-[10px] font-mono ${styles.techPill}`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className={`px-2 py-0.5 text-[10px] font-mono opacity-60 ${styles.techPill}`}>
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className={`pt-3 ${styles.sectionDivider} flex items-center justify-between`}>
                    <button
                      type="button"
                      onClick={() => onOpenProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.screenshots && project.screenshots.length > 0 && (
                      <span className="text-[11px] font-mono text-slate-500">
                        {project.screenshots.length} visual{project.screenshots.length > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Secondary Personal Ventures Tab (ShetiUpdates) */
          <div className={`p-8 max-w-4xl mx-auto space-y-6 ${styles.card}`}>
            <div className={`flex items-center justify-between pb-4 ${styles.sectionDivider}`}>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                  Optional Personal Venture
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {personalVentures[0].title}
                </h3>
              </div>
              <span className={`px-3 py-1 text-xs font-mono ${styles.badgePrimary}`}>
                {personalVentures[0].status}
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {personalVentures[0].description}
            </p>

            <div className={`p-4 space-y-3 ${styles.heroConsole}`}>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Ventures &amp; Content Focus Areas:
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {personalVentures[0].focusAreas.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`p-4 text-xs text-slate-400 ${styles.techPill}`}>
              <strong className="text-slate-300 font-semibold">Brand Separation Note:</strong> ShetiUpdates is maintained as an independent regional digital media initiative. It is kept purposefully segregated from my primary software engineering and technical consulting offerings.
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
