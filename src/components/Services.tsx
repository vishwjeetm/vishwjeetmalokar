import React from 'react';
import { servicesData } from '../data/servicesData';
import { useTheme } from '../context/ThemeContext';
import { Layout, Bot, Radar, Building2, Database, Server, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { styles, theme } = useTheme();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-blue-400" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-purple-400" />;
      case 'Radar':
        return <Radar className="w-6 h-6 text-sky-400" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-indigo-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-emerald-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-amber-400" />;
      default:
        return <Layout className="w-6 h-6 text-blue-400" />;
    }
  };

  const handleDiscussService = (title: string) => {
    onSelectService(title);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className={`py-24 relative ${styles.sectionDivider}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 font-mono text-xs uppercase tracking-wider mb-3 ${styles.badgePrimary}`}>
              Services &amp; Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Custom Development for Real Business Needs.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Transparent, deliverable-driven software development across modern web platforms, generative engine intelligence, and enterprise business systems.
            </p>
          </div>

          <div className={`flex items-center gap-2 text-xs text-slate-400 px-4 py-2 shrink-0 ${styles.badgeStatus}`}>
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>Scope-based contracts &amp; dedicated freelance support</span>
          </div>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`p-7 flex flex-col justify-between group ${styles.cardInteractive}`}
            >
              <div>
                {/* Card Top: Code & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 shrink-0 ${styles.badgePrimary}`}>
                    {getIcon(service.iconName)}
                  </div>
                  <span className={`font-mono text-xs font-semibold px-2.5 py-1 ${styles.techPill}`}>
                    {service.code}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs uppercase font-mono tracking-wider text-blue-400/90 mb-3 font-semibold">
                  {service.category}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Problems Solved Section */}
                <div className={`mb-6 pt-4 ${styles.sectionDivider}`}>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5 font-semibold">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                    Problems This Solves:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-400">
                    {service.problemsSolved.slice(0, 3).map((problem, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold shrink-0">•</span>
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Example Deliverables Section */}
                <div className={`mb-6 pt-4 ${styles.sectionDivider}`}>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Example Deliverables:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 text-[11px] font-mono ${styles.techPill}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Action CTA */}
              <div className={`pt-4 ${styles.sectionDivider}`}>
                <button
                  type="button"
                  onClick={() => handleDiscussService(service.title)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold ${styles.btnSecondary}`}
                >
                  <span>Discuss a {service.title} Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Engineering Disclosure */}
        <div className={`mt-12 p-5 text-center max-w-3xl mx-auto ${styles.card}`}>
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-300 font-semibold">Engineering Integrity Note:</strong> I do not promise artificial "guaranteed #1 AI citations" or speculative SEO hacks. All service engagements are structured around verifiable deliverables, clean source code, maintainable architecture, and empirical prompt testing.
          </p>
        </div>

      </div>
    </section>
  );
};
