import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight, Code2, Database, Sparkles, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  const { styles, theme } = useTheme();

  const techPills = [
    'React', 'Node.js', 'Express', 'PostgreSQL', 'Python',
    '.NET 8', 'VB.NET', 'SQL Server', 'Docker', 'MinIO', 'Generative Engine Optimization (GEO)'
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-40">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand, Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Pill */}
            {siteConfig.isAvailableForFreelance && (
              <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 text-xs font-medium text-emerald-400 ${styles.badgeStatus}`}>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>
                  {siteConfig.freelanceStatusText}
                </span>
              </div>
            )}

            {/* Display Name & Primary Professional Headline */}
            <div className="mb-4">
              <span className="text-blue-400 font-mono text-sm tracking-widest uppercase font-semibold block mb-1">
                {siteConfig.displayName}
              </span>
              <p className="text-sm sm:text-base font-semibold text-slate-400 tracking-wide">
                {siteConfig.primaryHeadline}
              </p>
            </div>

            {/* Hero Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Web Applications</span>, Business Software &amp; AI-Powered Digital Solutions.
            </h1>

            {/* Hero Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4 font-normal">
              {siteConfig.heroDescription}
            </p>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
              {siteConfig.supportingDescription}
            </p>

            {/* CTAs: Primary, Secondary, Additional */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <a
                href="#contact"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold ${styles.btnPrimary}`}
              >
                <span>{siteConfig.ctaTextPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold ${styles.btnSecondary}`}
              >
                <span>{siteConfig.ctaTextSecondary}</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors"
              >
                <span>{siteConfig.ctaTextServices}</span>
              </a>
            </div>

            {/* Technology Stack Row */}
            <div className={`w-full pt-6 ${styles.sectionDivider}`}>
              <p className="text-xs uppercase tracking-wider font-mono text-slate-500 mb-3 font-semibold">
                Core Technologies &amp; Architecture Focus:
              </p>
              <div className="flex flex-wrap gap-2">
                {techPills.map((tech) => (
                  <span
                    key={tech}
                    className={`inline-flex items-center px-2.5 py-1 text-xs font-mono ${styles.techPill}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Premium Interactive Developer Architecture Console */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Decorative Glow (especially in glassmorphism) */}
              {theme === 'glassmorphism' && (
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-purple-600/30 rounded-2xl blur-xl opacity-70" />
              )}

              {/* Developer Terminal / System Panel */}
              <div className={`relative overflow-hidden ${styles.heroConsole}`}>
                
                {/* Console Window Topbar */}
                <div className="px-4 py-3 bg-black/40 border-b border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-blue-400" />
                    vishwjeet.tech/runtime
                  </div>
                  <div className={`flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 ${styles.badgeStatus}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Ready
                  </div>
                </div>

                {/* Console Body: Engineering Highlights */}
                <div className="p-5 space-y-4 font-mono text-xs text-slate-300">
                  
                  {/* System Block 1: GEO & AI Engine */}
                  <div className={`p-3.5 ${styles.card} hover:border-blue-500/60 transition-all`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 font-semibold text-blue-300">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        AI &amp; GEO Visibility Intelligence
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 ${styles.badgePrimary}`}>Active SaaS Dev</span>
                    </div>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed">
                      Multi-LLM auditing across ChatGPT, Claude, Perplexity &amp; Gemini. Response persistence, citation extraction &amp; competitive intelligence.
                    </p>
                  </div>

                  {/* System Block 2: Enterprise ERP & .NET Architecture */}
                  <div className={`p-3.5 ${styles.card} hover:border-indigo-500/60 transition-all`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 font-semibold text-indigo-300">
                        <Layers className="w-4 h-4 text-indigo-400" />
                        Enterprise ERP &amp; Add-on Engineering
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 ${styles.badgePrimary}`}>ISO 9001 / SAP B1</span>
                    </div>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed">
                      Quality Defect Management (.NET 8 MVC), Pareto analytics, and SAP B1 SDK Add-ons (VB.NET, UDT/UDF/UDO, Quality Test Requests).
                    </p>
                  </div>

                  {/* System Block 3: Full-Stack & Database Pipeline */}
                  <div className={`p-3.5 ${styles.card} hover:border-emerald-500/60 transition-all`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 font-semibold text-emerald-300">
                        <Database className="w-4 h-4 text-emerald-400" />
                        Data Modeling &amp; Web Platforms
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 ${styles.badgeStatus}`}>PostgreSQL / SQL Server</span>
                    </div>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed">
                      React &amp; TypeScript frontends with Node/Express and C# Web APIs, normalized schema design, and Docker containerized deployment.
                    </p>
                  </div>

                  {/* Developer Code Snippet Terminal preview */}
                  <div className={`pt-2 ${styles.sectionDivider}`}>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1.5">
                      <span>verification_status:</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        B.E. Computer Science 2024
                      </span>
                    </div>
                    <div className={`p-2.5 text-[11px] leading-relaxed ${styles.input}`}>
                      <span className="text-purple-400">const</span> <span className="text-blue-300">engineer</span> = &#123; name: <span className="text-amber-300">'Vishwjeet'</span>, email: <span className="text-amber-300">'vmgvyt@gmail.com'</span>, github: <span className="text-amber-300">'10xVishwjeetM'</span>, instagram: <span className="text-amber-300">'@VMGV1K'</span> &#125;;
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
