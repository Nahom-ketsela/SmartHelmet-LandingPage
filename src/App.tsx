import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Features from './components/sections/Features';
import Dashboard from './components/sections/Dashboard';
import Impact from './components/sections/Impact';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Dashboard />
        <Impact />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;