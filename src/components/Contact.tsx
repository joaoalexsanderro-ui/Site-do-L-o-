import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Instagram } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    instagram: '',
    subject: 'Consultoria de Imagem',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `*Nova Solicitação de Contato - Leonardo Negri*

👤 *Nome:* ${formData.name}
📸 *Instagram:* ${formData.instagram}
💼 *Assunto:* ${formData.subject}
💬 *Mensagem:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5554996241299?text=${encodedText}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
              Contato
            </span>
            <h2 className="text-5xl md:text-6xl font-serif mb-10 leading-tight">
              Vamos construir sua <br />
              <span className="italic text-gold">nova imagem.</span>
            </h2>
            
            <p className="text-xl text-white/40 mb-16 leading-relaxed font-light">
              Preencha o formulário ou entre em contato diretamente para iniciarmos seu projeto de transformação.
            </p>

            <div className="space-y-10">
              <a href="https://wa.me/5554996241299" className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-gold transition-all duration-500 group-hover:rotate-6">
                  <svg 
                    viewBox="0 0 24 24" 
                    width="24" 
                    height="24" 
                    fill="currentColor"
                    className="text-gold group-hover:text-white transition-colors"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-1">WhatsApp</p>
                  <p className="text-xl font-poppins font-light group-hover:text-gold transition-colors text-white">54 99624-1299</p>
                </div>
              </a>
              
              <a href="https://www.instagram.com/leonardoneprivisagista" className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-gold transition-all duration-500 group-hover:rotate-6">
                  <Instagram className="text-gold group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-1">Instagram</p>
                  <p className="text-xl font-poppins font-light group-hover:text-gold transition-colors text-white">@leonardoneprivisagista</p>
                </div>
              </a>

              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-gold transition-all duration-500 group-hover:rotate-6">
                  <MapPin className="text-gold group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-1">Endereço</p>
                  <p className="text-xl font-poppins font-light text-white leading-relaxed">Rua Coronel Amâncio Cardoso 942, Tapejara - RS</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] backdrop-blur-3xl p-12 lg:p-16 rounded-[3rem] shadow-2xl border border-white/[0.05]"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 ml-1">Nome Completo</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-8 py-5 focus:ring-2 focus:ring-gold/50 transition-all font-light text-white outline-none"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 ml-1">Instagram (@)</label>
                  <input
                    type="text"
                    name="instagram"
                    required
                    value={formData.instagram}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-8 py-5 focus:ring-2 focus:ring-gold/50 transition-all font-light text-white outline-none"
                    placeholder="@seuusuario"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 ml-1">Assunto</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-8 py-5 focus:ring-2 focus:ring-gold/50 transition-all appearance-none font-light text-white outline-none"
                >
                  <option className="bg-[#0a0a0a]">Consultoria de Imagem</option>
                  <option className="bg-[#0a0a0a]">Visagismo Masculino</option>
                  <option className="bg-[#0a0a0a]">Mentoria Executiva</option>
                  <option className="bg-[#0a0a0a]">Outros</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 ml-1">Mensagem</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-8 py-5 focus:ring-2 focus:ring-gold/50 transition-all font-light text-white outline-none"
                  placeholder="Como posso te ajudar?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-deep-black py-6 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-gold-light transition-all duration-500 shadow-2xl shadow-gold/10"
              >
                Enviar Solicitação
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
