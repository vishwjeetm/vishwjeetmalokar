import React, { useState } from 'react';
import { experienceData, educationData, certificationsData, learningGoals } from '../data/experienceEducationData';
import { useTheme } from '../context/ThemeContext';
import { Briefcase, GraduationCap, Award, ShieldAlert, ShieldCheck, ExternalLink, Calendar, MapPin, CheckCircle2, BookOpen } from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  const { styles } = useTheme();
  // Configurable toggle for certifications: unverified hidden by default as instructed
  const [showUnverifiedCerts, setShowUnverifiedCerts] = useState<boolean>(false);

  const displayedCertifications = certificationsData.filter((c) => {
    if (showUnverifiedCerts) return true;
    return c.isVerified;
  });

  return (
    <section className={`py-24 relative ${styles.sectionDivider}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            SECTION 1: PROFESSIONAL EXPERIENCE
           ========================================================================= */}
        <div id="experience" className="mb-24">
          <div className="max-w-3xl mb-12">
            <div className={`inline-flex items-center gap-2 px-3 py-1 font-mono text-xs uppercase tracking-wider mb-3 ${styles.badgePrimary}`}>
              <Briefcase className="w-3.5 h-3.5" />
              Professional Experience
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Verified Engineering Experience.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Focused on delivering enterprise ERP add-ons, database-backed web architectures, and full-stack software solutions.
            </p>
          </div>

          <div className="space-y-8">
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className={`p-7 sm:p-8 ${styles.card}`}
              >
                <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 ${styles.sectionDivider}`}>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider">
                        {exp.company}
                      </span>
                      <span className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 ${styles.badgeStatus}`}>
                        <CheckCircle2 className="w-3 h-3" />
                        Verified Project Scope
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 space-y-1">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {exp.summary}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    Demonstrated Responsibilities &amp; Deliverables:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-blue-400 font-bold shrink-0">▸</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`flex flex-wrap gap-2 pt-4 ${styles.sectionDivider}`}>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 text-xs font-mono ${styles.techPill}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-4 p-4 text-xs text-slate-400 ${styles.card}`}>
            <span className="text-slate-300 font-semibold">Integrity Notice:</span> Employment dates, role titles, and organizational details reflect verified engagements only. No unverified seniority titles or fabricated client logos have been introduced.
          </div>
        </div>

        {/* =========================================================================
            SECTION 2: EDUCATION
           ========================================================================= */}
        <div id="education" className={`mb-24 pt-12 ${styles.sectionDivider}`}>
          <div className="max-w-3xl mb-12">
            <div className={`inline-flex items-center gap-2 px-3 py-1 font-mono text-xs uppercase tracking-wider mb-3 ${styles.badgePrimary}`}>
              <GraduationCap className="w-3.5 h-3.5" />
              Academic Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Formal Engineering Education.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Foundational degree and diploma qualifications in Computer Science and Information Technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className={`p-7 flex flex-col justify-between ${styles.card}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 text-xs font-mono font-semibold ${styles.badgePrimary}`}>
                      {edu.year}
                    </span>
                    <span className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 ${styles.badgeStatus}`}>
                      <CheckCircle2 className="w-3 h-3" />
                      Verified Degree Record
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-blue-400 mb-2">
                    {edu.field}
                  </p>

                  <p className="text-xs text-slate-300 font-medium mb-1">
                    {edu.institution}
                  </p>
                  {edu.affiliation && (
                    <p className="text-xs text-slate-400 mb-4">
                      Affiliation: {edu.affiliation}
                    </p>
                  )}

                  {edu.notes && (
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {edu.notes}
                    </p>
                  )}
                </div>

                {/* CGPA display rule: do not display until applicable qualification details are confirmed */}
                <div className={`pt-4 ${styles.sectionDivider} text-xs text-slate-500 font-mono flex items-center justify-between`}>
                  {edu.showCgpa && edu.cgpa ? (
                    <span className="text-slate-300">CGPA: {edu.cgpa}</span>
                  ) : (
                    <span className="italic text-slate-500">Grading details withheld pending document confirmation</span>
                  )}
                  <span className="text-[11px] text-slate-500">Full-Time Academic Program</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SECTION 3: CERTIFICATIONS & LEARNING GOALS
           ========================================================================= */}
        <div id="certifications" className={`pt-12 ${styles.sectionDivider}`}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className={`inline-flex items-center gap-2 px-3 py-1 font-mono text-xs uppercase tracking-wider mb-3 ${styles.badgePrimary}`}>
                <Award className="w-3.5 h-3.5" />
                Certifications &amp; Continuous Learning
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Credentials &amp; Active Technical Goals.
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                As per strict verification protocols, unverified training badges are concealed by default until authenticated verification links or credential IDs are supplied.
              </p>
            </div>

            {/* Toggle Button for Unverified Credentials */}
            <div className={`shrink-0 flex items-center gap-3 p-2.5 ${styles.techPill}`}>
              <span className="text-xs font-mono text-slate-400">
                Show pending credentials:
              </span>
              <button
                type="button"
                onClick={() => setShowUnverifiedCerts(!showUnverifiedCerts)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  showUnverifiedCerts ? 'bg-blue-600' : 'bg-slate-700'
                }`}
                aria-pressed={showUnverifiedCerts}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    showUnverifiedCerts ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Certifications Card Display */}
          {displayedCertifications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {displayedCertifications.map((cert) => (
                <div
                  key={cert.id}
                  className={`p-6 flex flex-col justify-between ${styles.card}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-slate-400">
                        {cert.issuer}
                      </span>
                      {cert.isVerified ? (
                        <span className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 ${styles.badgeStatus}`}>
                          <ShieldCheck className="w-3 h-3" />
                          Verified
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/60">
                          <ShieldAlert className="w-3 h-3" />
                          Pending ID
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-white mb-2">
                      {cert.name}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {cert.statusNote}
                    </p>
                  </div>

                  <div className={`pt-3 ${styles.sectionDivider} flex items-center justify-between text-xs`}>
                    <span className="font-mono text-slate-500">
                      {cert.date}
                    </span>
                    {cert.verificationUrl ? (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline flex items-center gap-1"
                      >
                        Verify <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-slate-500 font-mono text-[11px]">
                        URL to be added
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`mb-16 p-8 text-center max-w-2xl mx-auto space-y-3 ${styles.card}`}>
              <ShieldAlert className="w-8 h-8 text-amber-400 mx-auto" />
              <h4 className="text-base font-bold text-white">
                Credentials Currently Hidden by Default
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                In strict accordance with the portfolio verification guidelines, 5 previously discussed certifications (AWS Cloud Practitioner, AWS Cloud Architecting, CODSOFT Java, Python for Data Analytics, GenAI Foundations) are held in pending verification state until live verification URLs or credential IDs are confirmed.
              </p>
              <button
                type="button"
                onClick={() => setShowUnverifiedCerts(true)}
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 underline font-mono"
              >
                Click here to toggle review view
              </button>
            </div>
          )}

          {/* Active Learning Goals Section */}
          <div className={`p-8 ${styles.card}`}>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <div>
                <h3 className="text-lg font-bold text-white">
                  Current Technical Research &amp; Learning Goals
                </h3>
                <p className="text-xs text-slate-400">
                  Areas of ongoing active engineering experimentation and skill expansion.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {learningGoals.map((goal) => (
                <div
                  key={goal.id}
                  className={`p-5 flex flex-col justify-between ${styles.cardInteractive}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono text-purple-400 font-semibold">
                        {goal.category}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/50">
                        {goal.status}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-2">
                      {goal.topic}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {goal.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
