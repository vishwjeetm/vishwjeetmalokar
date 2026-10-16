import React, { useState } from 'react';
import { skillsData } from '../data/skillsData';
import { SkillProficiency } from '../types';
import { useTheme } from '../context/ThemeContext';
import { Cpu } from 'lucide-react';

interface SkillsProps {
  onOpenProjectBySlug?: (slug: string) => void;
}

export const Skills: React.FC<SkillsProps> = ({ onOpenProjectBySlug }) => {
  const { styles } = useTheme();
  const [selectedProficiency, setSelectedProficiency] = useState<string>('All');

  const proficiencyFilters = [
    { label: 'All Skills', value: 'All' },
    { label: 'Primary Expertise', value: 'Primary' },
    { label: 'Used in Projects', value: 'Used in projects' },
    { label: 'Familiar', value: 'Familiar' },
    { label: 'Currently Learning', value: 'Currently learning' },
  ];

  const getBadgeStyle = (level: SkillProficiency) => {
    switch (level) {
      case 'Primary':
        return styles.badgePrimary;
      case 'Used in projects':
        return styles.badgeStatus;
      case 'Currently learning':
        return 'bg-purple-950/80 text-purple-300 border border-purple-800/80';
      case 'Familiar':
      default:
        return styles.techPill;
    }
  };

  return (
    <section id="skills" className={`py-24 relative ${styles.sectionDivider}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 font-mono text-xs uppercase tracking-wider mb-3 ${styles.badgePrimary}`}>
              <Cpu className="w-3.5 h-3.5" />
              Technical Competencies &amp; Tooling
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Calibrated Skills &amp; Applied Technologies.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Every tool and framework is honestly categorized by demonstrated project application. Skills are linked directly to corresponding portfolio case studies.
            </p>
          </div>

          {/* Proficiency Filter */}
          <div className="flex flex-wrap items-center gap-2">
            {proficiencyFilters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setSelectedProficiency(filter.value)}
                className={`px-3 py-1.5 text-xs font-mono transition-all ${
                  selectedProficiency === filter.value
                    ? styles.btnPrimary
                    : styles.btnNav
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className={`mb-10 p-4 flex flex-wrap items-center justify-between gap-4 text-xs ${styles.card}`}>
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-slate-400 font-semibold">Proficiency Tiers:</span>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs ${styles.badgePrimary}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Primary: Core stack
            </span>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs ${styles.badgeStatus}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Used in Projects: Actively applied
            </span>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs ${styles.techPill}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              Familiar: Functional knowledge
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border bg-purple-950/80 text-purple-300 border-purple-800/80">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              Currently Learning: Active study
            </span>
          </div>

          <span className="text-slate-500 font-mono text-[11px]">
            No fabricated "100% mastery" bars
          </span>
        </div>

        {/* Skills Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group) => {
            const visibleSkills = group.skills.filter((s) => {
              if (selectedProficiency === 'All') return true;
              return s.level === selectedProficiency;
            });

            if (visibleSkills.length === 0) return null;

            return (
              <div
                key={group.id}
                className={`p-6 flex flex-col justify-between ${styles.card}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">
                      {group.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-500">
                      {visibleSkills.length} tools
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  <div className="space-y-2.5">
                    {visibleSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`p-2.5 flex items-center justify-between gap-2 ${styles.techPill}`}
                      >
                        <span className="text-xs font-medium text-slate-200">
                          {skill.name}
                        </span>

                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 text-[10px] font-mono ${getBadgeStyle(skill.level)}`}>
                            {skill.level}
                          </span>

                          {skill.relatedProjects && skill.relatedProjects.length > 0 && (
                            <span 
                              className={`text-[10px] font-mono px-1.5 py-0.5 ${styles.badgePrimary}`}
                              title={`Implemented in: ${skill.relatedProjects.join(', ')}`}
                            >
                              Linked
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
