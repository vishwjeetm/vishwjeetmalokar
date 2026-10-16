import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { useTheme } from '../context/ThemeContext';
import { X, ExternalLink, CheckCircle2, AlertCircle, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onDiscussProject?: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onDiscussProject }) => {
  const { styles } = useTheme();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const currentScreenshot = project.screenshots && project.screenshots.length > 0 
    ? project.screenshots[activeImageIndex] 
    : null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Dialog Container */}
      <div 
        className={`relative w-full max-w-5xl overflow-hidden my-8 max-h-[90vh] flex flex-col ${styles.modalContainer}`}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-black/40 border-b border-slate-700/60 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className={`px-2.5 py-1 text-xs font-mono font-semibold ${styles.badgePrimary}`}>
              {project.category}
            </span>
            <span className={`px-2.5 py-1 text-xs font-mono font-medium ${
              project.status === 'Completed Application'
                ? styles.badgeStatus
                : styles.techPill
            }`}>
              {project.status}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`p-2 text-slate-400 hover:text-white ${styles.btnNav}`}
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-8 text-slate-300 text-sm leading-relaxed">
          
          {/* Project Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-base text-slate-300 font-medium">
              {project.tagline}
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-blue-400 font-semibold">Engineering Role:</span>
              <span>{project.role}</span>
            </div>
          </div>

          {/* Screenshot Lightbox / Gallery (if screenshots exist) */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="space-y-3">
              <div className="relative rounded-xl overflow-hidden border border-slate-700/80 bg-black/60 shadow-lg">
                <img
                  src={currentScreenshot?.url}
                  alt={currentScreenshot?.caption || project.title}
                  className="w-full max-h-[460px] object-contain mx-auto"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                
                {/* Authenticity Badge */}
                <div className="absolute top-3 right-3">
                  {currentScreenshot?.isReal ? (
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold backdrop-blur-sm shadow-md ${styles.badgeStatus}`}>
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Authentic Production Screenshot
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 text-amber-300 border border-amber-700/80 text-xs font-semibold backdrop-blur-sm shadow-md">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Illustrative Architectural Mockup
                    </span>
                  )}
                </div>

                {/* Caption Banner */}
                <div className="p-3 bg-black/60 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <span>{currentScreenshot?.caption}</span>
                  <span className="text-slate-500 font-mono text-[11px]">
                    {activeImageIndex + 1} of {project.screenshots.length}
                  </span>
                </div>
              </div>

              {/* Thumbnails Row */}
              {project.screenshots.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-2">
                  {project.screenshots.map((s, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                        activeImageIndex === idx 
                          ? 'border-blue-500 scale-95' 
                          : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={s.url} 
                        alt={s.caption} 
                        className="w-20 h-14 object-cover" 
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-5 ${styles.card}`}>
              <h3 className="text-sm font-bold text-rose-400 mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                The Business Problem
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className={`p-5 ${styles.card}`}>
              <h3 className="text-sm font-bold text-emerald-400 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                The Engineering Solution
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Implemented Features */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              Key Implemented Capabilities &amp; Workflows
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-300">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className={`p-3 flex items-start gap-2 ${styles.techPill}`}>
                  <span className="text-blue-400 font-bold shrink-0">▸</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Highlights */}
          {project.architectureHighlights && project.architectureHighlights.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-400" />
                Technical Architecture Highlights
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.architectureHighlights.map((arch, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold shrink-0">•</span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Stack Tags */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
              Verified Technology Stack:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-1 text-xs font-mono ${styles.techPill}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Client Takeaway Banner */}
          <div className={`p-4 ${styles.cardSpotlight}`}>
            <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-1">
              Client &amp; Engineering Takeaway
            </h4>
            <p className="text-xs text-slate-300">
              {project.clientTakeaway}
            </p>
          </div>

          {/* Links & Disclosure */}
          <div className={`pt-4 flex flex-wrap items-center justify-between gap-4 ${styles.sectionDivider}`}>
            <div className="flex items-center gap-3">
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold ${styles.btnPrimary}`}
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs text-slate-500 font-mono italic">
                  Demo available upon verified inquiry
                </span>
              )}

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold ${styles.btnSecondary}`}
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                if (onDiscussProject) {
                  onDiscussProject(project.title);
                }
              }}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold ${styles.btnSecondary}`}
            >
              <span>Discuss a Similar Solution</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
