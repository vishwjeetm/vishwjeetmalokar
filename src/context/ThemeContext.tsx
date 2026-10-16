import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'glassmorphism' | 'claymorphism' | 'skeuomorphism' | 'neumorphism';
export type ColorMode = 'dark' | 'light';

export interface ThemeConfig {
  id: ThemeMode;
  name: string;
  shortDesc: string;
  badge: string;
  icon: string;
}

export const THEMES: ThemeConfig[] = [
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    shortDesc: 'Frosted Glass, Luminous Highlights & Blur',
    badge: 'Translucent Glass',
    icon: '✨'
  },
  {
    id: 'claymorphism',
    name: 'Claymorphism',
    shortDesc: 'Puffy 3D Clay, Dual Soft Shadows & Matte Tactile',
    badge: '3D Inflatable Clay',
    icon: '🫧'
  },
  {
    id: 'skeuomorphism',
    name: 'Skeuomorphism',
    shortDesc: 'Realistic Hardware, Bevels & Tactile Depth',
    badge: 'Realistic Hardware',
    icon: '🎛️'
  },
  {
    id: 'neumorphism',
    name: 'Neumorphism',
    shortDesc: 'Extruded Soft Surfaces & Recessed Wells',
    badge: 'Extruded Soft 3D',
    icon: '🔘'
  }
];

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  colorMode: ColorMode;
  setColorMode: (mode: ColorMode) => void;
  toggleColorMode: () => void;
  // Dynamic UI Style Classes for each component
  styles: {
    pageBg: string;
    card: string;
    cardInteractive: string;
    cardSpotlight: string;
    btnPrimary: string;
    btnSecondary: string;
    btnNav: string;
    input: string;
    badgePrimary: string;
    badgeStatus: string;
    techPill: string;
    navContainer: string;
    navDropdown: string;
    modalContainer: string;
    heroConsole: string;
    sectionDivider: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('vishwjeet_theme');
    if (saved && ['glassmorphism', 'claymorphism', 'skeuomorphism', 'neumorphism'].includes(saved)) {
      return saved as ThemeMode;
    }
    return 'glassmorphism';
  });

  const [colorMode, setColorModeState] = useState<ColorMode>(() => {
    const saved = localStorage.getItem('vishwjeet_color_mode');
    if (saved && (saved === 'dark' || saved === 'light')) {
      return saved as ColorMode;
    }
    return 'dark';
  });

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('vishwjeet_theme', newTheme);
  };

  const setColorMode = (mode: ColorMode) => {
    setColorModeState(mode);
    localStorage.setItem('vishwjeet_color_mode', mode);
  };

  const toggleColorMode = () => {
    const nextMode = colorMode === 'dark' ? 'light' : 'dark';
    setColorMode(nextMode);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-mode', colorMode);
    document.documentElement.classList.toggle('dark', colorMode === 'dark');
    document.body.className = `theme-${theme} mode-${colorMode} selection:bg-blue-600 selection:text-white min-h-screen`;
  }, [theme, colorMode]);

  // Compute theme-specific classes taking colorMode into account
  const getStyles = (currentTheme: ThemeMode, mode: ColorMode) => {
    if (mode === 'light') {
      switch (currentTheme) {
        case 'claymorphism':
          return {
            pageBg: 'bg-[#f0f4f9]',
            card: 'bg-white rounded-3xl border-2 border-slate-200/90 shadow-[8px_8px_20px_rgba(180,195,215,0.45),inset_2px_2px_4px_rgba(255,255,255,1),inset_-4px_-4px_8px_rgba(210,220,235,0.45)]',
            cardInteractive: 'bg-white rounded-3xl border-2 border-slate-200/90 shadow-[8px_8px_20px_rgba(180,195,215,0.45),inset_2px_2px_4px_rgba(255,255,255,1),inset_-4px_-4px_8px_rgba(210,220,235,0.45)] hover:shadow-[12px_12px_28px_rgba(170,185,210,0.55),inset_3px_3px_5px_rgba(255,255,255,1),inset_-5px_-5px_10px_rgba(200,215,230,0.5)] hover:-translate-y-1 transition-all duration-300',
            cardSpotlight: 'bg-gradient-to-br from-white to-blue-50/70 rounded-3xl border-2 border-blue-300 shadow-[12px_12px_26px_rgba(180,195,215,0.5),inset_3px_3px_6px_rgba(255,255,255,1),inset_-5px_-5px_10px_rgba(190,210,235,0.4)]',
            btnPrimary: 'rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold shadow-[5px_5px_14px_rgba(160,180,210,0.5),inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-3px_-3px_6px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:scale-95 transition-all',
            btnSecondary: 'rounded-2xl bg-white text-slate-700 border border-slate-200 font-semibold shadow-[4px_4px_10px_rgba(180,195,215,0.4),inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(210,220,235,0.3)] hover:-translate-y-0.5 active:scale-95 transition-all',
            btnNav: 'rounded-xl bg-white text-slate-700 font-medium shadow-[3px_3px_8px_rgba(180,195,215,0.35),inset_1px_1px_2px_rgba(255,255,255,0.9)] hover:text-slate-900 active:scale-95 transition-all',
            input: 'rounded-2xl bg-[#f5f8fc] text-slate-900 border-2 border-slate-200 shadow-[inset_4px_4px_8px_rgba(180,195,215,0.45),inset_-2px_-2px_6px_rgba(255,255,255,0.8)] focus:border-blue-500 transition-all',
            badgePrimary: 'rounded-xl bg-blue-50 text-blue-700 font-bold border border-blue-200 shadow-[2px_2px_5px_rgba(180,195,215,0.35)]',
            badgeStatus: 'rounded-xl bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 shadow-[2px_2px_5px_rgba(180,195,215,0.35)]',
            techPill: 'rounded-xl bg-white text-slate-700 border border-slate-200 shadow-[2px_2px_5px_rgba(180,195,215,0.3)]',
            navContainer: 'bg-[#f0f4f9]/90 backdrop-blur-md border-b-2 border-slate-200 shadow-[0_4px_16px_rgba(180,195,215,0.35)]',
            navDropdown: 'bg-white border-2 border-slate-200 rounded-2xl shadow-[10px_10px_25px_rgba(170,185,210,0.5)]',
            modalContainer: 'bg-white border-2 border-slate-200 rounded-3xl shadow-[16px_16px_36px_rgba(160,180,210,0.55)]',
            heroConsole: 'bg-white rounded-3xl border-2 border-slate-200 shadow-[10px_10px_26px_rgba(170,185,210,0.45)]',
            sectionDivider: 'border-t-2 border-slate-200 shadow-[0_-2px_6px_rgba(180,195,215,0.2)]'
          };

        case 'skeuomorphism':
          return {
            pageBg: 'bg-[#eef2f6]',
            card: 'bg-gradient-to-b from-white via-[#f8fafc] to-[#edf2f7] rounded-xl border-t border-t-white border-x border-slate-300 border-b-2 border-b-slate-400 shadow-[0_6px_16px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.05)]',
            cardInteractive: 'bg-gradient-to-b from-white via-[#f8fafc] to-[#edf2f7] rounded-xl border-t border-t-white border-x border-slate-300 border-b-2 border-b-slate-400 shadow-[0_6px_16px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] hover:border-t-blue-500 hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-all duration-200',
            cardSpotlight: 'bg-gradient-to-b from-white via-blue-50/50 to-[#edf2f7] rounded-xl border-t-2 border-t-blue-500 border-x border-blue-200 border-b-2 border-b-slate-400 shadow-[0_8px_20px_rgba(0,0,0,0.1)]',
            btnPrimary: 'rounded-lg bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 text-white font-bold border-t border-t-blue-300 border-b-2 border-b-blue-900 shadow-[0_3px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.4)] active:translate-y-0.5 transition-all',
            btnSecondary: 'rounded-lg bg-gradient-to-b from-white to-slate-100 text-slate-800 font-semibold border-t border-t-white border-x border-slate-300 border-b-2 border-b-slate-400 shadow-[0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-0.5 transition-all',
            btnNav: 'rounded-md bg-gradient-to-b from-white to-slate-100 text-slate-700 border-t border-t-white border-b border-b-slate-300 shadow-[0_1px_3px_rgba(0,0,0,0.1)] active:translate-y-0.5 transition-all',
            input: 'rounded-lg bg-white text-slate-900 font-mono border-t-2 border-t-slate-400 border-b border-b-white border-x border-slate-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] focus:border-blue-500 transition-all',
            badgePrimary: 'rounded-md bg-gradient-to-b from-blue-100 to-blue-200 text-blue-800 font-mono border-t border-t-white border-b border-b-blue-300 shadow-[0_1px_2px_rgba(0,0,0,0.1)]',
            badgeStatus: 'rounded-md bg-gradient-to-b from-emerald-100 to-emerald-200 text-emerald-800 font-mono border-t border-t-white border-b border-b-emerald-300 shadow-[0_1px_2px_rgba(0,0,0,0.1)]',
            techPill: 'rounded-md bg-gradient-to-b from-white to-slate-100 text-slate-700 font-mono border border-slate-300 shadow-sm',
            navContainer: 'bg-[#eef2f6]/95 backdrop-blur-md border-b-2 border-b-slate-300 border-t border-t-white shadow-[0_4px_12px_rgba(0,0,0,0.06)]',
            navDropdown: 'bg-gradient-to-b from-white to-[#edf2f7] border border-slate-300 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.15)]',
            modalContainer: 'bg-gradient-to-b from-white via-[#f8fafc] to-[#edf2f7] border-2 border-slate-300 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.2)]',
            heroConsole: 'bg-gradient-to-b from-white to-[#edf2f7] rounded-xl border border-slate-300 shadow-[0_10px_25px_rgba(0,0,0,0.12)]',
            sectionDivider: 'border-t border-t-slate-300 border-b border-b-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]'
          };

        case 'neumorphism':
          return {
            pageBg: 'bg-[#e6ecf5]',
            card: 'bg-[#e6ecf5] rounded-2xl border-0 shadow-[8px_8px_16px_#c5cbd4,-8px_-8px_16px_#ffffff]',
            cardInteractive: 'bg-[#e6ecf5] rounded-2xl border-0 shadow-[8px_8px_16px_#c5cbd4,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_22px_#bcc2cb,-12px_-12px_22px_#ffffff] hover:-translate-y-0.5 transition-all duration-300',
            cardSpotlight: 'bg-[#e6ecf5] rounded-2xl border-0 shadow-[10px_10px_20px_#bfc5ce,-10px_-10px_20px_#ffffff]',
            btnPrimary: 'rounded-xl bg-[#e6ecf5] text-blue-600 font-bold border-0 shadow-[5px_5px_12px_#c5cbd4,-5px_-5px_12px_#ffffff] hover:text-blue-500 hover:shadow-[7px_7px_15px_#bcc2cb,-7px_-7px_15px_#ffffff] active:shadow-[inset_4px_4px_8px_#c5cbd4,inset_-4px_-4px_8px_#ffffff] transition-all',
            btnSecondary: 'rounded-xl bg-[#e6ecf5] text-slate-700 font-semibold border-0 shadow-[5px_5px_10px_#c5cbd4,-5px_-5px_10px_#ffffff] hover:text-slate-900 active:shadow-[inset_3px_3px_6px_#c5cbd4,inset_-3px_-3px_6px_#ffffff] transition-all',
            btnNav: 'rounded-lg bg-[#e6ecf5] text-slate-700 border-0 shadow-[3px_3px_6px_#c5cbd4,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#c5cbd4,inset_-2px_-2px_4px_#ffffff] transition-all',
            input: 'rounded-xl bg-[#e1e7f0] text-slate-900 border-0 shadow-[inset_4px_4px_8px_#c2c8d2,inset_-4px_-4px_8px_#ffffff] focus:shadow-[inset_4px_4px_8px_#b8bec8,inset_-4px_-4px_8px_#ffffff,0_0_8px_rgba(59,130,246,0.3)] transition-all',
            badgePrimary: 'rounded-lg bg-[#e6ecf5] text-blue-600 font-mono border-0 shadow-[inset_2px_2px_4px_#c5cbd4,inset_-2px_-2px_4px_#ffffff]',
            badgeStatus: 'rounded-lg bg-[#e6ecf5] text-emerald-600 font-mono border-0 shadow-[inset_2px_2px_4px_#c5cbd4,inset_-2px_-2px_4px_#ffffff]',
            techPill: 'rounded-lg bg-[#e6ecf5] text-slate-700 font-mono border-0 shadow-[3px_3px_6px_#c5cbd4,-3px_-3px_6px_#ffffff]',
            navContainer: 'bg-[#e6ecf5]/90 backdrop-blur-md border-b border-slate-300 shadow-[0_4px_12px_#c5cbd4]',
            navDropdown: 'bg-[#e6ecf5] border-0 rounded-2xl shadow-[10px_10px_20px_#bcc2cb,-10px_-10px_20px_#ffffff]',
            modalContainer: 'bg-[#e6ecf5] border-0 rounded-2xl shadow-[16px_16px_32px_#bcc2cb,-16px_-16px_32px_#ffffff]',
            heroConsole: 'bg-[#e6ecf5] rounded-2xl border-0 shadow-[10px_10px_22px_#bcc2cb,-10px_-10px_22px_#ffffff]',
            sectionDivider: 'border-t border-[#d1d7e2] shadow-[0_-2px_6px_#bcc2cb]'
          };

        case 'glassmorphism':
        default:
          return {
            pageBg: 'bg-[#f8fafc]',
            card: 'backdrop-blur-xl bg-white/80 rounded-2xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)]',
            cardInteractive: 'backdrop-blur-xl bg-white/80 rounded-2xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-blue-500/50 hover:bg-white hover:shadow-[0_12px_36px_rgba(59,130,246,0.12)] hover:-translate-y-1 transition-all duration-300',
            cardSpotlight: 'backdrop-blur-2xl bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/40 rounded-2xl border border-blue-400/40 shadow-[0_12px_36px_rgba(59,130,246,0.1)]',
            btnPrimary: 'rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-md shadow-blue-500/25 border border-blue-400/30 hover:-translate-y-0.5 active:scale-95 transition-all',
            btnSecondary: 'rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-semibold shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all',
            btnNav: 'rounded-lg bg-slate-100 text-slate-700 border border-slate-200 hover:text-slate-900 hover:bg-slate-200 transition-all',
            input: 'rounded-xl bg-white text-slate-900 border border-slate-300 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all',
            badgePrimary: 'rounded-full bg-blue-50 text-blue-700 border border-blue-200 shadow-sm',
            badgeStatus: 'rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm',
            techPill: 'rounded-md bg-slate-100 text-slate-700 border border-slate-200',
            navContainer: 'bg-white/85 backdrop-blur-xl border-b border-slate-200 shadow-sm',
            navDropdown: 'bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-2xl shadow-xl',
            modalContainer: 'bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-2xl shadow-2xl',
            heroConsole: 'bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-xl',
            sectionDivider: 'border-t border-slate-200'
          };
      }
    }

    // Default: DARK MODE
    switch (currentTheme) {
      case 'claymorphism':
        return {
          pageBg: 'bg-[#0f1420]',
          card: 'bg-[#151d2d] rounded-3xl border-2 border-slate-700/50 shadow-[10px_10px_22px_rgba(0,0,0,0.5),inset_2px_2px_4px_rgba(255,255,255,0.12),inset_-4px_-4px_8px_rgba(0,0,0,0.4)]',
          cardInteractive: 'bg-[#151d2d] rounded-3xl border-2 border-slate-700/50 shadow-[10px_10px_22px_rgba(0,0,0,0.5),inset_2px_2px_4px_rgba(255,255,255,0.12),inset_-4px_-4px_8px_rgba(0,0,0,0.4)] hover:shadow-[14px_14px_28px_rgba(0,0,0,0.6),inset_3px_3px_5px_rgba(255,255,255,0.18),inset_-5px_-5px_10px_rgba(0,0,0,0.45)] hover:-translate-y-1 transition-all duration-300',
          cardSpotlight: 'bg-gradient-to-br from-[#182236] to-[#121926] rounded-3xl border-2 border-blue-500/40 shadow-[14px_14px_30px_rgba(0,0,0,0.6),inset_3px_3px_6px_rgba(255,255,255,0.15),inset_-5px_-5px_10px_rgba(0,0,0,0.5)]',
          btnPrimary: 'rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold shadow-[6px_6px_14px_rgba(0,0,0,0.45),inset_2px_2px_4px_rgba(255,255,255,0.35),inset_-3px_-3px_6px_rgba(0,0,0,0.35)] hover:shadow-[8px_8px_18px_rgba(0,0,0,0.55),inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-3px_-3px_6px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 active:scale-95 active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.6)] transition-all',
          btnSecondary: 'rounded-2xl bg-[#182030] text-slate-200 border border-slate-700/70 font-semibold shadow-[5px_5px_12px_rgba(0,0,0,0.4),inset_2px_2px_4px_rgba(255,255,255,0.1),inset_-2px_-2px_4px_rgba(0,0,0,0.3)] hover:text-white hover:-translate-y-0.5 active:scale-95 transition-all',
          btnNav: 'rounded-xl bg-[#141b29] text-slate-300 font-medium shadow-[4px_4px_8px_rgba(0,0,0,0.35),inset_1px_1px_2px_rgba(255,255,255,0.1),inset_-2px_-2px_4px_rgba(0,0,0,0.3)] hover:text-white active:scale-95 transition-all',
          input: 'rounded-2xl bg-[#0d121c] text-white border-2 border-slate-800 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.65),inset_-2px_-2px_6px_rgba(255,255,255,0.05)] focus:border-blue-500 focus:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.7),0_0_12px_rgba(59,130,246,0.3)] transition-all',
          badgePrimary: 'rounded-xl bg-[#182236] text-blue-400 font-bold border border-blue-500/40 shadow-[4px_4px_8px_rgba(0,0,0,0.3),inset_1px_1px_2px_rgba(255,255,255,0.15)]',
          badgeStatus: 'rounded-xl bg-[#14231b] text-emerald-400 font-bold border border-emerald-500/40 shadow-[4px_4px_8px_rgba(0,0,0,0.3),inset_1px_1px_2px_rgba(255,255,255,0.15)]',
          techPill: 'rounded-xl bg-[#161d2a] text-slate-300 border border-slate-700/60 shadow-[3px_3px_6px_rgba(0,0,0,0.3),inset_1px_1px_2px_rgba(255,255,255,0.08),inset_-1px_-1px_2px_rgba(0,0,0,0.3)]',
          navContainer: 'bg-[#121824]/90 backdrop-blur-md border-b-2 border-slate-800/80 shadow-[0_8px_20px_rgba(0,0,0,0.45)]',
          navDropdown: 'bg-[#151d2d] border-2 border-slate-700 rounded-2xl shadow-[10px_10px_25px_rgba(0,0,0,0.6),inset_2px_2px_4px_rgba(255,255,255,0.1)]',
          modalContainer: 'bg-[#151d2d] border-2 border-slate-700 rounded-3xl shadow-[16px_16px_36px_rgba(0,0,0,0.7),inset_3px_3px_6px_rgba(255,255,255,0.12)]',
          heroConsole: 'bg-[#131926] rounded-3xl border-2 border-slate-700/60 shadow-[12px_12px_28px_rgba(0,0,0,0.55),inset_2px_2px_5px_rgba(255,255,255,0.12),inset_-4px_-4px_8px_rgba(0,0,0,0.4)]',
          sectionDivider: 'border-t-2 border-slate-800/80 shadow-[0_-4px_10px_rgba(0,0,0,0.3)]'
        };

      case 'skeuomorphism':
        return {
          pageBg: 'bg-[#0a0d14]',
          card: 'bg-gradient-to-b from-[#1c2434] via-[#141b27] to-[#0e131d] rounded-xl border-t border-t-slate-500/50 border-x border-slate-800 border-b-2 border-b-black shadow-[0_10px_25px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(0,0,0,0.7)]',
          cardInteractive: 'bg-gradient-to-b from-[#1c2434] via-[#141b27] to-[#0e131d] rounded-xl border-t border-t-slate-500/50 border-x border-slate-800 border-b-2 border-b-black shadow-[0_10px_25px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(0,0,0,0.7)] hover:border-t-blue-400/80 hover:shadow-[0_14px_30px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.25)] hover:-translate-y-0.5 transition-all duration-200',
          cardSpotlight: 'bg-gradient-to-b from-[#1e2a42] via-[#141d2e] to-[#0b101b] rounded-xl border-t-2 border-t-blue-400/70 border-x border-blue-900/50 border-b-2 border-b-black shadow-[0_12px_32px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.25)]',
          btnPrimary: 'rounded-lg bg-gradient-to-b from-blue-500 via-blue-600 to-blue-800 text-white font-bold border-t border-t-blue-300/70 border-x border-blue-700 border-b-2 border-b-blue-950 shadow-[0_4px_10px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(0,0,0,0.4)] active:translate-y-0.5 active:shadow-[0_1px_2px_rgba(0,0,0,0.9)] transition-all',
          btnSecondary: 'rounded-lg bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 text-slate-200 font-semibold border-t border-t-slate-500/60 border-x border-slate-700 border-b-2 border-b-black shadow-[0_4px_8px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] active:translate-y-0.5 transition-all',
          btnNav: 'rounded-md bg-gradient-to-b from-slate-750 to-slate-850 text-slate-300 border-t border-t-slate-600/50 border-b border-b-black shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] active:translate-y-0.5 transition-all',
          input: 'rounded-lg bg-[#080b11] text-emerald-400 font-mono border-t-2 border-t-black border-b border-b-slate-700/40 border-x border-slate-900 shadow-[inset_0_3px_6px_rgba(0,0,0,0.95)] focus:border-blue-500 focus:shadow-[inset_0_3px_6px_rgba(0,0,0,0.95),0_0_8px_rgba(59,130,246,0.4)] transition-all',
          badgePrimary: 'rounded-md bg-gradient-to-b from-blue-900 to-blue-950 text-blue-300 font-mono border-t border-t-blue-400/50 border-b border-b-black shadow-[0_2px_4px_rgba(0,0,0,0.5)]',
          badgeStatus: 'rounded-md bg-gradient-to-b from-emerald-900 to-emerald-950 text-emerald-300 font-mono border-t border-t-emerald-400/50 border-b border-b-black shadow-[0_2px_4px_rgba(0,0,0,0.5)]',
          techPill: 'rounded-md bg-gradient-to-b from-[#1b2230] to-[#121722] text-slate-300 font-mono border-t border-t-slate-600/40 border-b border-b-black shadow-[0_1px_3px_rgba(0,0,0,0.6)]',
          navContainer: 'bg-gradient-to-b from-[#18202f]/95 to-[#0e131d]/95 backdrop-blur-md border-b-2 border-b-black border-t border-t-slate-600/40 shadow-[0_6px_16px_rgba(0,0,0,0.8)]',
          navDropdown: 'bg-gradient-to-b from-[#1a2232] to-[#0e131d] border-t border-t-slate-500/50 border-x border-slate-800 border-b-2 border-b-black rounded-xl shadow-[0_12px_28px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.15)]',
          modalContainer: 'bg-gradient-to-b from-[#1b2333] via-[#131926] to-[#0d121c] border-t-2 border-t-slate-500/60 border-x border-slate-800 border-b-4 border-b-black rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.2)]',
          heroConsole: 'bg-gradient-to-b from-[#192130] to-[#0d121b] rounded-xl border-t-2 border-t-slate-500/50 border-x border-slate-800 border-b-2 border-b-black shadow-[0_12px_28px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.18)]',
          sectionDivider: 'border-t border-t-slate-600/40 border-b-2 border-b-black shadow-[0_2px_6px_rgba(0,0,0,0.6)]'
        };

      case 'neumorphism':
        return {
          pageBg: 'bg-[#121620]',
          card: 'bg-[#151a26] rounded-2xl border-0 shadow-[8px_8px_16px_#0b0e14,-8px_-8px_16px_#1f2638]',
          cardInteractive: 'bg-[#151a26] rounded-2xl border-0 shadow-[8px_8px_16px_#0b0e14,-8px_-8px_16px_#1f2638] hover:shadow-[12px_12px_22px_#090c12,-12px_-12px_22px_#21283a] hover:-translate-y-0.5 transition-all duration-300',
          cardSpotlight: 'bg-[#161c29] rounded-2xl border-0 shadow-[10px_10px_20px_#0a0d14,-10px_-10px_20px_#222b3e]',
          btnPrimary: 'rounded-xl bg-[#182131] text-blue-400 font-bold border-0 shadow-[5px_5px_12px_#0a0e14,-5px_-5px_12px_#26344e] hover:text-blue-300 hover:shadow-[7px_7px_15px_#090c12,-7px_-7px_15px_#273650] active:shadow-[inset_4px_4px_8px_#0a0e14,inset_-4px_-4px_8px_#26344e] transition-all',
          btnSecondary: 'rounded-xl bg-[#151a26] text-slate-300 font-semibold border-0 shadow-[5px_5px_10px_#0b0e14,-5px_-5px_10px_#1f2638] hover:text-white active:shadow-[inset_3px_3px_6px_#0b0e14,inset_-3px_-3px_6px_#1f2638] transition-all',
          btnNav: 'rounded-lg bg-[#141924] text-slate-300 border-0 shadow-[3px_3px_6px_#0b0e14,-3px_-3px_6px_#1d2434] active:shadow-[inset_2px_2px_4px_#0b0e14,inset_-2px_-2px_4px_#1d2434] transition-all',
          input: 'rounded-xl bg-[#0f131c] text-white border-0 shadow-[inset_4px_4px_8px_#090c12,inset_-4px_-4px_8px_#171d2a] focus:shadow-[inset_4px_4px_8px_#07090e,inset_-4px_-4px_8px_#192130,0_0_8px_rgba(59,130,246,0.4)] transition-all',
          badgePrimary: 'rounded-lg bg-[#141924] text-blue-400 font-mono border-0 shadow-[inset_2px_2px_4px_#0a0e14,inset_-2px_-2px_4px_#1e2434]',
          badgeStatus: 'rounded-lg bg-[#141924] text-emerald-400 font-mono border-0 shadow-[inset_2px_2px_4px_#0a0e14,inset_-2px_-2px_4px_#1e2434]',
          techPill: 'rounded-lg bg-[#141924] text-slate-300 font-mono border-0 shadow-[3px_3px_6px_#0a0e14,-3px_-3px_6px_#1e2434]',
          navContainer: 'bg-[#131722]/90 backdrop-blur-md border-b border-slate-800/40 shadow-[0_6px_14px_#090c12]',
          navDropdown: 'bg-[#151a26] border-0 rounded-2xl shadow-[10px_10px_20px_#090c12,-10px_-10px_20px_#21283a]',
          modalContainer: 'bg-[#151a26] border-0 rounded-2xl shadow-[16px_16px_32px_#080b10,-16px_-16px_32px_#22293c]',
          heroConsole: 'bg-[#151a26] rounded-2xl border-0 shadow-[10px_10px_22px_#090c12,-10px_-10px_22px_#21283a]',
          sectionDivider: 'border-t border-[#1e2638] shadow-[0_-4px_8px_#090c12]'
        };

      case 'glassmorphism':
      default:
        return {
          pageBg: 'bg-[#0b0f19]',
          card: 'backdrop-blur-xl bg-slate-900/60 rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]',
          cardInteractive: 'backdrop-blur-xl bg-slate-900/60 rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-blue-400/40 hover:bg-slate-900/80 hover:shadow-[0_12px_40px_0_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-300',
          cardSpotlight: 'backdrop-blur-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-blue-950/40 rounded-2xl border border-blue-500/30 shadow-[0_12px_40px_0_rgba(0,0,0,0.45)]',
          btnPrimary: 'rounded-xl bg-blue-600/90 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 border border-blue-400/30 hover:border-blue-300/60 hover:-translate-y-0.5 active:scale-95 transition-all',
          btnSecondary: 'rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-white/10 font-semibold shadow-md backdrop-blur-md hover:text-white hover:-translate-y-0.5 active:scale-95 transition-all',
          btnNav: 'rounded-lg bg-slate-800/60 text-slate-300 border border-white/10 hover:text-white hover:bg-slate-800/90 transition-all',
          input: 'rounded-xl bg-slate-950/60 text-white border border-white/15 backdrop-blur-md shadow-inner focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all',
          badgePrimary: 'rounded-full bg-blue-950/60 text-blue-400 border border-blue-500/30 backdrop-blur-md shadow-sm',
          badgeStatus: 'rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 backdrop-blur-md shadow-sm',
          techPill: 'rounded-md bg-slate-900/70 text-slate-300 border border-white/10 backdrop-blur-sm',
          navContainer: 'bg-[#0b0f19]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30',
          navDropdown: 'bg-[#0f172a]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl',
          modalContainer: 'bg-[#0f172a]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl',
          heroConsole: 'bg-[#0f172a]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl',
          sectionDivider: 'border-t border-slate-800/80'
        };
    }
  };

  const styles = getStyles(theme, colorMode);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colorMode, setColorMode, toggleColorMode, styles }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
