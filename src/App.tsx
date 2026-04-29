import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
          <About />
        </section>
        
        <section id="menu" className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6">
            <Menu />
          </div>
        </section>
        
        <section id="gallery" className="py-20">
          <Gallery />
        </section>
        
        <section id="reviews" className="py-20 bg-primary/5">
          <Reviews />
        </section>
        
        <section id="reservation" className="py-20 px-6 max-w-7xl mx-auto">
          <Reservation />
        </section>
        
        <section id="contact" className="py-20 bg-ink text-secondary px-6">
          <div className="max-w-7xl mx-auto">
            <Contact />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
