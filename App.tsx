import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './components/Skills';
import Projects from './pages/Projects';
import Journey from './pages/Blog'; // Imported as Journey (timeline)
import Contact from './pages/Contact';

function App() {
  return (
    <Layout>
      <div className="space-y-12 sm:space-y-24">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </div>
    </Layout>
  );
}

export default App;