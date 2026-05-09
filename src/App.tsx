/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="relative min-h-screen bg-deep-black bg-grain overflow-x-hidden">
      {/* Atmospheric Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-gold/3 blur-[140px] rounded-full opacity-60" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-gold/3 blur-[140px] rounded-full opacity-60" />
        <div className="absolute top-[30%] right-[5%] w-[40%] h-[40%] bg-white/[0.02] blur-[120px] rounded-full" />
        <div className="absolute top-[60%] left-[5%] w-[30%] h-[30%] bg-gold/[0.02] blur-[100px] rounded-full" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <BeforeAfter />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
