import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const transformations = [
  {
    id: 1,
    image: "https://lh3.googleusercontent.com/d/1kozVYcd3Aa2dylvsYJBm4LY395ssQ1jt",
    title: "Transformação Executiva",
    label: "Case 01"
  },
  {
    id: 2,
    image: "https://lh3.googleusercontent.com/d/1yxEAf7TDifoCbfVpiDZwdB0sr4koMLF1",
    title: "Presença e Autoridade",
    label: "Case 02"
  },
  {
    id: 3,
    image: "https://lh3.googleusercontent.com/d/15jiN7wgULd4eCKLWwKc2Kn-ecaI5Vl-9",
    title: "Refinamento de Estilo",
    label: "Case 03"
  }
];

export default function BeforeAfter() {
  return (
    <section id="transformations" className="py-24 bg-deep-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold tracking-[0.4em] text-[10px] uppercase font-bold mb-4 block"
          >
            Resultados Tangíveis
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif mb-6"
          >
            Antes e <span className="italic text-gold-metallic drop-shadow-gold">Depois</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto font-light tracking-wide"
          >
            Acompanhe a evolução de nossos clientes através de uma consultoria estratégica que alinha essência, comportamento e estética.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-20 max-w-4xl mx-auto">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="relative rounded-[3rem] overflow-hidden mb-8 border border-white/10 bg-white/5 shadow-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
