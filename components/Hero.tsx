
import React from 'react';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full pt-40 pb-20 overflow-hidden flex flex-col items-center">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-amber-500/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container max-w-4xl px-4 text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-1 rounded-full text-xs font-bold text-amber-500 tracking-wider animate-bounce">
          <Star className="w-3 h-3 fill-amber-500" /> ACESSO IMEDIATO
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          40 Esboços de Sermões <br />
          <span className="text-gradient">Atos dos Apóstolos</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Prepare-se para pregar com autoridade, profundidade e clareza. Conteúdo organizado e pronto para impactar sua igreja através do livro de Atos.
        </p>

        <div className="flex flex-col items-center gap-6 pt-4">
          <div className="flex flex-col items-center">
            <span className="text-zinc-500 line-through text-lg">De R$ 120,00</span>
            <div className="flex items-baseline gap-2">
              <span className="text-zinc-300 text-sm">planos a partir de</span>
              <span className="text-5xl md:text-6xl font-black text-emerald-400">R$ 9,90</span>
            </div>
          </div>

          <a 
            href="#checkout" 
            className="transition-all hover:scale-105 active:scale-95 duration-300 inline-block"
          >
            <img 
              src="https://i.ibb.co/GQsCZK8X/2-2-1.png" 
              alt="Ver Opções de Acesso" 
              className="max-w-[300px] md:max-w-[420px] h-auto drop-shadow-[0_10px_30px_rgba(0,255,136,0.15)]"
            />
          </a>
          
          <p className="text-zinc-500 text-xs flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Escolha o plano ideal para o seu ministério.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
