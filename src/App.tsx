import { useEffect, useState } from 'react';

//import FireCursor from './components/FireCursor';  // Cursor

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import ReviewProcess from './components/ReviewProcess';
// Sponsors temporarily hidden per request (To be announced)
// import Sponsors from './components/Sponsors';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'tracks', 'timeline', 'review', 'sponsors', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Toggle slight brightness when user scrolls down
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative" style={{ filter: scrolled ? 'brightness(1.06)' : 'none', transition: 'filter 200ms ease' }}>
      
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      <ReviewProcess />
      {/* Sponsors temporarily commented out. Showing a placeholder 'To be announced' section. */}
      <section id="sponsors" className="relative py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Sponsors</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-grey-300">To be announced</p>
        </div>
      </section>
      <Contact />
    </div>
  );
}

export default App;
