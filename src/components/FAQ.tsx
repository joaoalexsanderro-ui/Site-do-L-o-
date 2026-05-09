import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'O que é exatamente o visagismo masculino?',
    answer: 'O visagismo é a arte de criar uma imagem personalizada que revela a identidade e intenção de cada homem. Não é apenas um corte de cabelo, mas uma análise técnica de proporções faciais, temperamento e objetivos profissionais para construir uma estética que comunica autoridade e confiança.'
  },
  {
    question: 'Como funciona a consultoria de imagem online?',
    answer: 'A consultoria online é realizada via videochamada e análise de fotos em alta resolução. Eu guio você por todo o processo de diagnóstico, análise facial e recomendações de estilo, entregando um dossiê completo para que você possa aplicar as mudanças onde quer que esteja no mundo.'
  },
  {
    question: 'Quanto tempo dura o processo de transformação?',
    answer: 'Depende do serviço escolhido. Uma análise de visagismo pontual pode ser feita em uma única sessão, enquanto uma consultoria de imagem completa pode levar de 2 a 4 semanas, envolvendo etapas de diagnóstico, closet clearing e personal shopping.'
  },
  {
    question: 'Preciso investir muito em roupas novas?',
    answer: 'Não necessariamente. O foco inicial é o "Closet Clearing", onde otimizamos o que você já possui. O objetivo é comprar menos e melhor, focando em peças estratégicas que realmente valorizam sua imagem e facilitam seu dia a dia.'
  },
  {
    question: 'O visagismo serve para qualquer tipo de rosto ou estilo?',
    answer: 'Sim. O visagismo não impõe um padrão de beleza, ele trabalha com as suas características naturais. Seja você um executivo, um artista ou um empreendedor, o objetivo é encontrar a melhor versão de você mesmo dentro do seu contexto.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
              Dúvidas Frequentes
            </span>
            <h2 className="text-5xl md:text-6xl font-serif mb-6 text-white">Perguntas Comuns</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-sm"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-8 flex items-center justify-between text-left transition-colors hover:bg-white/5"
              >
                <span className="text-lg md:text-xl font-serif text-white pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-8 text-white/60 leading-relaxed font-light">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
