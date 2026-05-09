import React from 'react';
import { motion } from 'motion/react';
import { Scissors, UserCheck, Award } from 'lucide-react';

const services = [
  {
    title: 'Consultoria de Imagem',
    description: 'Análise completa de visagismo, estilo e posicionamento para líderes e profissionais.',
    icon: UserCheck,
    price: 'A partir de R$ 350,00',
    tag: 'Mais Procurado'
  },
  {
    title: 'Visagismo Masculino',
    description: 'Corte de cabelo e barba projetados para transmitir a mensagem correta de autoridade.',
    icon: Scissors,
    price: 'Personalizado',
    tag: 'Exclusivo'
  },
  {
    title: 'Mentoria Executiva',
    description: 'Acompanhamento contínuo para manutenção de uma imagem de alto impacto.',
    icon: Award,
    price: 'Sob consulta',
    tag: 'Premium'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
              Estratégia & Estética
            </span>
            <h2 className="text-5xl md:text-6xl font-serif mb-6">Serviços Exclusivos</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/[0.02] backdrop-blur-3xl p-12 rounded-[2.5rem] border border-white/[0.05] hover:border-gold/30 transition-all duration-700 group relative overflow-hidden shadow-2xl hover:shadow-gold/5"
            >
              <div className="absolute top-6 right-8">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gold/40 bg-gold/5 px-3 py-1 rounded-full border border-gold/10">
                  {service.tag}
                </span>
              </div>
              
              <div className="w-16 h-16 bg-white/[0.03] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-gold transition-all duration-500 group-hover:rotate-6 border border-white/[0.05]">
                <service.icon className="text-gold group-hover:text-deep-black transition-colors duration-500" size={32} />
              </div>
              
              <h3 className="text-2xl font-serif mb-6 group-hover:text-gold transition-colors text-white/90">{service.title}</h3>
              <p className="text-white/40 mb-10 leading-relaxed text-sm font-light">
                {service.description}
              </p>
              
              <div className="pt-8 border-t border-white/[0.05]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-2">Investimento</p>
                <p className="text-sm font-bold tracking-widest text-gold/80">
                  {service.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-white/[0.02] backdrop-blur-3xl border border-white/[0.05] rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-3xl font-serif mb-4">Pronto para elevar seu nível?</h3>
              <p className="text-white/40 font-light">
                Agende uma conversa inicial e descubra como o visagismo pode transformar sua carreira e vida pessoal.
              </p>
            </div>
            <a
              href="#contact"
              className="bg-gold text-deep-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-all whitespace-nowrap shadow-xl shadow-gold/10"
            >
              Começar Agora
            </a>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] -mr-32 -mt-32" />
        </div>
      </div>
    </section>
  );
}
