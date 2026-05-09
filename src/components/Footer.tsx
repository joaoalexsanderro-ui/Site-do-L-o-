import React from 'react';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 pt-16 border-t border-white/[0.05] pb-12 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-start mb-12">
          {/* About & Social */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-white/40 text-xs font-light leading-relaxed max-w-xs text-center md:text-left mb-8 uppercase tracking-widest">
              Estratégia de imagem e posicionamento para líderes e profissionais de excelência.
            </p>
            <div className="flex gap-5">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gold/10 border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all duration-500 scale-110 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
              >
                <Instagram size={22} />
              </a>
              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gold/10 border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all duration-500 scale-110 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
              >
                <MessageCircle size={22} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center">
            <nav className="flex flex-wrap justify-center gap-x-10 gap-y-5 mt-4">
              {[
                { name: 'Início', href: '#home' },
                { name: 'Sobre', href: '#about' },
                { name: 'Casos', href: '#transformations' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Contato', href: '#contact' },
              ].map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-white/50 hover:text-gold transition-all hover:scale-110 active:scale-95"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-8 opacity-80">Atendimento</h4>
            <div className="flex items-start gap-4 text-white/40 group">
              <MapPin size={18} className="text-gold/60 mt-0.5 shrink-0" />
              <p className="text-sm font-light leading-relaxed tracking-wide">
                Av. Brigadeiro Faria Lima, 1485<br />
                Pinheiros — São Paulo, SP
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.02] text-center">
          <p className="text-[8px] uppercase tracking-[0.6em] text-white/10 font-bold">
            © 2024 Leonardo Negri. Estratégia de Imagem.
          </p>
        </div>
      </div>
    </footer>
  );
}
