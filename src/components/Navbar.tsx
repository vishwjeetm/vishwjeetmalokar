import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../data/siteConfig';
import { useTheme, THEMES, ThemeMode } from '../context/ThemeContext';
import { Menu, X, ArrowUpRight, Terminal, Palette, Check, Sparkles, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onSelectService?: (serviceName: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { theme, setTheme, colorMode, toggleColorMode, styles } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'projects', 'skills', 'experience', 'education', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setThemeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const currentThemeConfig = THEMES.find((t) => t.id === theme) || THEMES[0];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? `${styles.navContainer} py-3` : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            aria-label="Vishwjeet Portfolio Home"
          >
            <div className={`w-9 h-9 flex items-center justify-center text-white transition-transform group-hover:scale-105 ${
              theme === 'claymorphism'
                ? 'rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 shadow-[4px_4px_8px_rgba(0,0,0,0.4),inset_1px_1px_2px_rgba(255,255,255,0.3)]'
                : theme === 'skeuomorphism'
                ? 'rounded-lg bg-gradient-to-b from-blue-500 to-blue-800 border-t border-t-blue-300/60 border-b-2 border-b-black shadow-md'
                : theme === 'neumorphism'
                ? 'rounded-xl bg-[#182131] text-blue-400 shadow-[3px_3px_6px_#090c12,-3px_-3px_6px_#212b3d]'
                : 'rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-md shadow-blue-500/20'
            }`}>
              <Terminal className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                {siteConfig.displayName}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                Full-Stack &amp; AI Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium transition-all ${
                    isActive 
                      ? 'text-white font-bold ' + (
                          theme === 'claymorphism' ? 'bg-[#182236] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5)] text-blue-400' :
                          theme === 'skeuomorphism' ? 'bg-slate-800 rounded-md border-t border-t-slate-600 border-b border-b-black shadow-inner text-blue-300' :
                          theme === 'neumorphism' ? 'bg-[#141924] rounded-lg shadow-[inset_2px_2px_4px_#090c12,inset_-2px_-2px_4px_#1c2333] text-blue-400' :
                          'bg-slate-800/80 rounded-md text-white'
                        )
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/30 rounded-md'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Header Actions: Theme Dropdown + Dark/Light Toggle + Freelance Status + CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* DEDICATED DARK / LIGHT MODE TOGGLE BUTTON */}
            <button
              type="button"
              onClick={toggleColorMode}
              className={`flex items-center justify-center p-2.5 text-xs font-medium cursor-pointer transition-all ${
                theme === 'claymorphism'
                  ? 'rounded-2xl bg-[#161d2d] text-amber-400 border border-slate-700/60 shadow-[4px_4px_8px_rgba(0,0,0,0.35),inset_1px_1px_2px_rgba(255,255,255,0.1)] active:scale-95'
                  : theme === 'skeuomorphism'
                  ? 'rounded-lg bg-gradient-to-b from-slate-750 to-slate-850 text-amber-300 border-t border-t-slate-500/50 border-b-2 border-b-black shadow-sm active:translate-y-0.5'
                  : theme === 'neumorphism'
                  ? 'rounded-xl bg-[#151a26] text-amber-400 shadow-[4px_4px_8px_#0a0e14,-4px_-4px_8px_#202838] active:shadow-[inset_2px_2px_4px_#0a0e14]'
                  : 'rounded-xl bg-slate-900/80 text-amber-300 border border-white/10 hover:border-amber-400/40 backdrop-blur-md shadow-sm'
              }`}
              aria-label={`Switch to ${colorMode === 'dark' ? 'Light' : 'Dark'} mode`}
              title={`Switch to ${colorMode === 'dark' ? 'Light' : 'Dark'} mode`}
            >
              {colorMode === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* THEME SELECTOR DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium cursor-pointer transition-all ${
                  theme === 'claymorphism'
                    ? 'rounded-2xl bg-[#161d2d] text-blue-300 border border-slate-700/60 shadow-[4px_4px_8px_rgba(0,0,0,0.35),inset_1px_1px_2px_rgba(255,255,255,0.1)] active:scale-95'
                    : theme === 'skeuomorphism'
                    ? 'rounded-lg bg-gradient-to-b from-slate-750 to-slate-850 text-slate-200 border-t border-t-slate-500/50 border-b-2 border-b-black shadow-sm active:translate-y-0.5'
                    : theme === 'neumorphism'
                    ? 'rounded-xl bg-[#151a26] text-blue-400 shadow-[4px_4px_8px_#0a0e14,-4px_-4px_8px_#202838] active:shadow-[inset_2px_2px_4px_#0a0e14]'
                    : 'rounded-xl bg-slate-900/80 text-blue-300 border border-white/10 hover:border-blue-400/40 backdrop-blur-md shadow-sm'
                }`}
                aria-expanded={themeDropdownOpen}
                aria-haspopup="true"
                title="Change Website UI Design Style"
              >
                <span className="text-sm">{currentThemeConfig.icon}</span>
                <span className="hidden sm:inline font-semibold">{currentThemeConfig.name}</span>
                <Palette className="w-3.5 h-3.5 text-blue-400 opacity-80" />
              </button>

              {/* Theme Dropdown Menu */}
              {themeDropdownOpen && (
                <div 
                  className={`absolute right-0 mt-2 w-72 p-2 z-50 animate-in fade-in zoom-in-95 duration-150 ${styles.navDropdown}`}
                  role="menu"
                >
                  <div className="px-3 py-2 border-b border-slate-700/50 mb-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-white uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                      Select UI Design Style
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Dynamically updates every card, button, and visual element.
                    </p>
                  </div>

                  <div className="space-y-1">
                    {THEMES.map((t) => {
                      const isSelected = theme === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => {
                            setTheme(t.id);
                            setThemeDropdownOpen(false);
                          }}
                          className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start justify-between gap-3 ${
                            isSelected
                              ? 'bg-blue-600/20 border border-blue-500/50 text-white'
                              : 'hover:bg-slate-800/60 text-slate-300 hover:text-white border border-transparent'
                          }`}
                          role="menuitem"
                        >
                          <div className="flex items-start gap-2.5">
                            <span className="text-xl shrink-0 mt-0.5">{t.icon}</span>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-bold text-white">{t.name}</span>
                                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700">
                                  {t.badge}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                                {t.shortDesc}
                              </p>
                            </div>
                          </div>

                          {isSelected && (
                            <Check className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Availability Status Badge */}
            {siteConfig.isAvailableForFreelance && (
              <div 
                className={`hidden md:flex items-center gap-2 px-3 py-1 text-[11px] font-medium text-emerald-400 ${styles.badgeStatus}`}
                title={siteConfig.freelanceStatusText}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available</span>
              </div>
            )}
            
            {/* Primary Action Button */}
            <a
              href="#contact"
              className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold ${styles.btnPrimary}`}
            >
              <span>{siteConfig.ctaTextPrimary}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 xl:hidden text-slate-300 hover:text-white ${styles.btnNav}`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`xl:hidden mt-3 px-4 pt-4 pb-6 border-b border-slate-800 ${styles.navDropdown} animate-in slide-in-from-top-2 duration-200`}>
          
          {/* Mobile Theme & Mode Controls */}
          <div className="mb-4 pb-4 border-b border-slate-700/60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                Appearance Mode
              </span>
              <button
                type="button"
                onClick={toggleColorMode}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-xl ${
                  colorMode === 'dark' 
                    ? 'bg-slate-800 text-amber-300 border border-slate-700' 
                    : 'bg-white text-indigo-600 border border-slate-300 shadow-sm'
                }`}
              >
                {colorMode === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Light Mode</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-white uppercase tracking-wider">
              <Palette className="w-4 h-4 text-blue-400" />
              Theme Design Style
            </div>
            <div className="grid grid-cols-2 gap-2">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTheme(t.id)}
                  className={`p-2 rounded-xl text-left text-xs font-medium flex items-center gap-2 transition-all ${
                    theme === t.id
                      ? 'bg-blue-600 text-white font-bold shadow-md'
                      : 'bg-slate-800/70 text-slate-300 hover:text-white'
                  }`}
                >
                  <span>{t.icon}</span>
                  <span className="truncate">{t.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-white bg-slate-800 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-850'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 mt-3 border-t border-slate-800/80 space-y-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-center py-2.5 text-sm ${styles.btnPrimary}`}
            >
              {siteConfig.ctaTextPrimary}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
