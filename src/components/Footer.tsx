import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Terminal, ArrowUp, Mail, ExternalLink } from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon, FiverrIcon, FreelancerIcon } from './Icons';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { styles } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t text-slate-400 text-xs py-14 ${styles.sectionDivider}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {siteConfig.displayName}
              </span>
            </div>

            <p className="text-xs text-slate-300 max-w-sm leading-relaxed font-normal">
              {siteConfig.primaryHeadline}
            </p>

            <p className="text-[11px] text-slate-500 max-w-sm leading-relaxed">
              Building dependable web platforms, business ERP workflows, and applied AI systems for clients worldwide.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block mb-3">
              Site Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Featured Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Technical Skills</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
              <a href="#certifications" className="hover:text-blue-400 transition-colors">Certifications</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors font-medium text-blue-400">Contact &amp; Hire</a>
            </div>
          </div>

          {/* Direct Profiles & Back to Top */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block mb-3">
              Developer Presence
            </span>

            <div className="space-y-2">
              <a 
                href={`mailto:${siteConfig.contact.actualEmail}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span className="truncate">{siteConfig.contact.actualEmail}</span>
              </a>

              <a 
                href={siteConfig.contact.actualInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-pink-400 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram ({siteConfig.contact.instagramPlaceholder})</span>
              </a>

              <a 
                href={siteConfig.contact.actualGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                <span>GitHub ({siteConfig.contact.githubPlaceholder})</span>
              </a>

              <a 
                href={siteConfig.contact.actualLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a 
                href={siteConfig.contact.actualFiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-green-400 transition-colors"
              >
                <FiverrIcon className="w-3.5 h-3.5 text-green-400" />
                <span>Fiverr Services</span>
              </a>

              <a 
                href={siteConfig.contact.actualFreelancer}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <FreelancerIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>Freelancer.in Profile</span>
              </a>

              <a 
                href={siteConfig.contact.actualTruelancer}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                <span>Truelancer Services</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium ${styles.btnSecondary}`}
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {siteConfig.displayName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Production Build</span>
            <span>•</span>
            <span>TypeScript &amp; React</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span className="text-emerald-500">Accessible &amp; Multi-Theme</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
