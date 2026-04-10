import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import LanguagesAndInterests from './components/LanguagesAndInterests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import './index.css';

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        {/* Navigation */}
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <LanguagesAndInterests />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        {isScrolled && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all z-40 flex items-center justify-center hover:scale-110 active:scale-95"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
