import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ExperienceEducation } from './components/ExperienceEducation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';
import { projectsData } from './data/projectsData';

const PortfolioAppContent: React.FC = () => {
  const { styles } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
  };

  const handleOpenProjectBySlug = (slug: string) => {
    const found = projectsData.find((p) => p.slug === slug || p.id === slug);
    if (found) {
      setSelectedProject(found);
    }
  };

  const handleDiscussProject = (projectTitle: string) => {
    setPreselectedService(`Inquiry regarding: ${projectTitle}`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${styles.pageBg} text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white transition-colors duration-500`}>
      {/* Navigation Bar */}
      <Navbar onSelectService={handleSelectService} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services onSelectService={handleSelectService} />
        <Projects 
          onOpenProject={handleOpenProject} 
          onDiscussProject={handleDiscussProject}
        />
        <Skills onOpenProjectBySlug={handleOpenProjectBySlug} />
        <ExperienceEducation />
        <Contact preselectedService={preselectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
        onDiscussProject={handleDiscussProject}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <PortfolioAppContent />
    </ThemeProvider>
  );
};

export default App;
