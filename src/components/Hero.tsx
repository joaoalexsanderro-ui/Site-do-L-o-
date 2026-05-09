import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/d/1bosIvlIPnoJPsjAFyAvo6-VHtdaea-B0"
          alt="Leonardo Negri - Banner"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-deep-black/30 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-deep-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block drop-shadow-md">
            Visagismo & Imagem Masculina
          </span>
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8 text-balance drop-shadow-2xl">
            Sua imagem é sua <br />
            <span className="italic text-gold-metallic drop-shadow-gold">maior autoridade.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light tracking-wide drop-shadow-md">
            Consultoria personalizada para líderes e profissionais que desejam alinhar sua estética à sua essência e objetivos de vida.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="group bg-gold text-deep-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:bg-gold-light transition-all duration-300 shadow-2xl shadow-gold/20"
            >
              Agendar Consultoria
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="text-white/60 hover:text-white border-b border-white/10 pb-1 uppercase tracking-widest text-[10px] font-bold transition-all"
            >
              Ver Serviços
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
