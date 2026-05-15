import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Features from './components/Features';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Internships from './components/Internships';
import Verify from './components/Verify';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    // Handle scrolling when page loads with hash
    const hash = window.location.hash;

    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />

        <main>
          <Hero />
          <Services />
          <About />
          <Features />
          <Blog />
          <Testimonials />
          <Internships />
          <Verify />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
