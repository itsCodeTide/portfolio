import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ScrollingLogos from './components/ScrollingLogos';
import Skills from './components/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Activity from './pages/Activity';
import Contact from './pages/Contact';
import { EngineeringPrinciples, ArchitectureSnippet } from './components/SectionBreaks';

function App() {
  return (
    <Layout>
      <div className="flex flex-col">
        <Home />
        <About />
        
        {/* Gap 1: Showcases core engineering values to impress recruiters */}
        <EngineeringPrinciples />
        
        <Skills />
        <Projects />
        
        {/* Gap 2: Showcases actual code/architecture competence creatively */}
        <ArchitectureSnippet />
        
        <Experience />
        <Activity />
        
        {/* Gap 3: Full screen scrolling logos */}
        <ScrollingLogos />
        
        <Contact />
      </div>
    </Layout>
  );
}

export default App;
