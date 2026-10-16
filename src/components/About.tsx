import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { GraduationCap, Award, Cpu, ShieldCheck, Wrench, GitBranch, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const { styles } = useTheme();

  return (
    <section id="about" className={`py-20 relative ${styles.sectionDivider}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 font-mono text-xs uppercase tracking-wider mb-3 ${styles.badgePrimary}`}>
            <Cpu className="w-3.5 h-3.5" />
            About Me &amp; Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Engineering Software That Solves Real Business Problems.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            I am a full-stack software developer who bridges frontend user experience, backend logic, relational databases, enterprise systems, and practical AI applications.
          </p>
        </div>

        {/* Main Content Grid: Narrative & Key Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: First-Person Professional Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
            
            <p>
              I graduated with a <strong className="text-white font-semibold">Bachelor of Engineering in Computer Science and Engineering in 2024</strong>. Prior to my degree, I completed a <strong className="text-white font-semibold">Polytechnic Diploma in Information Technology Engineering</strong>, giving me both foundational systems training and applied software development skills.
            </p>

            <p>
              My professional interests center on building web applications, intelligent AI-enabled workflows, database-driven enterprise tools, and emerging Generative Engine Optimization (GEO) solutions. Whether designing clean responsive interfaces in <span className="text-blue-300 font-mono text-sm">React</span>, architecting RESTful services in <span className="text-blue-300 font-mono text-sm">Node.js/Express</span> or <span className="text-blue-300 font-mono text-sm">ASP.NET Core</span>, building relational schemas in <span className="text-blue-300 font-mono text-sm">PostgreSQL</span> and <span className="text-blue-300 font-mono text-sm">SQL Server</span>, or automating industrial SAP Business One add-ons in <span className="text-blue-300 font-mono text-sm">VB.NET</span>, my goal is always the same: <span className="text-white font-medium">delivering dependable software that businesses can run with confidence</span>.
            </p>

            <p>
              I take a structured, pragmatic approach to engineering. Rather than chasing superficial trends or generating unmaintainable code, I prioritize clear domain separation, reliable database transactions, strict validation rules, and intuitive workflows that nontechnical users can navigate effortlessly.
            </p>

            <p>
              Today, I work with startups, growing businesses, and engineering teams as an independent developer for custom web application development, ERP enhancements, and AI integration projects.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Discuss a software project or collaboration</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Key Principles & Educational Milestones */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Principle 1 */}
            <div className={`p-5 ${styles.cardInteractive}`}>
              <div className="flex items-start gap-3.5">
                <div className={`p-2.5 shrink-0 ${styles.badgePrimary}`}>
                  <Wrench className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Practical Problem-Solving</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Prioritizing real business requirements, usability for operators and managers, and maintainable code over unnecessary complexity.
                  </p>
                </div>
              </div>
            </div>

            {/* Principle 2 */}
            <div className={`p-5 ${styles.cardInteractive}`}>
              <div className="flex items-start gap-3.5">
                <div className={`p-2.5 shrink-0 ${styles.badgePrimary}`}>
                  <GitBranch className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Maintainable Architecture</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Clean component design, typed interfaces, structured REST endpoints, and containerized Docker environments for reproducible deployments.
                  </p>
                </div>
              </div>
            </div>

            {/* Principle 3 */}
            <div className={`p-5 ${styles.cardInteractive}`}>
              <div className="flex items-start gap-3.5">
                <div className={`p-2.5 shrink-0 ${styles.badgeStatus}`}>
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Enterprise Workflows &amp; Usability</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Experience in shop-floor defect logging, ISO compliance, and ERP add-on customization where data precision is mission-critical.
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Credentials Box */}
            <div className={`p-5 ${styles.cardSpotlight}`}>
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <h3 className="text-sm font-bold text-white">Verified Academic Foundation</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span><strong>B.E. Computer Science &amp; Engineering (2024)</strong> — Sant Gadge Baba Amravati University</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span><strong>Polytechnic Diploma in IT Engineering</strong> — Govt. Polytechnic, Murtizapur</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
