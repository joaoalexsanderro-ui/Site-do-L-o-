import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img
                src="https://lh3.googleusercontent.com/d/1qpjwR1yMpNGgJJUEmd1OiIbhapQIdU3p"
                alt="Leonardo Negri"
                className="w-full h-full object-cover object-top transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-12 -right-12 bg-deep-black p-10 rounded-[2.5rem] text-white shadow-2xl border border-gold/20"
            >
              <p className="font-serif text-5xl font-bold italic text-gold-metallic drop-shadow-gold mb-2">10+ Anos</p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">Experiência no Mercado</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
              A Essência do Trabalho
            </span>
            <h2 className="text-5xl md:text-6xl font-serif mb-10 leading-tight">
              Sua imagem comunica antes <br />
              <span className="italic text-gold-metallic drop-shadow-gold">de você falar.</span>
            </h2>
            
            <div className="space-y-8 text-white/60 leading-relaxed text-lg font-light">
              <p>
                Sou <strong className="text-white font-semibold">Leonardo Negri</strong>, barbeiro visagista e consultor de imagem masculina. Minha missão é ajudar homens a desenvolverem uma imagem autêntica, estratégica e alinhada com sua personalidade e objetivos de vida.
              </p>
              <p>
                Ao longo da minha trajetória, percebi que a maioria dos homens cuida da aparência apenas de forma superficial, sem entender que a imagem é uma poderosa ferramenta de comunicação e posicionamento.
              </p>
              <p className="border-l-2 border-gold pl-8 italic text-xl text-white/80 font-serif">
                "Através do visagismo masculino, realizo uma análise completa que envolve proporções faciais, características naturais e estilo de vida."
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
              <div className="group">
                <p className="font-serif text-4xl mb-2 group-hover:text-gold transition-colors text-white">Visagismo</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Análise Facial Avançada</p>
              </div>
              <div className="group">
                <p className="font-serif text-4xl mb-2 group-hover:text-gold transition-colors text-white">Estratégia</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Posicionamento de Marca Pessoal</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
