
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-zinc-900 bg-black py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-6">
        <div className="flex items-center gap-2 opacity-50 grayscale">
          <span className="font-bold text-lg tracking-tighter">ESBOÇOS<span className="text-amber-500">ATOS</span></span>
        </div>
        
        <div className="text-zinc-500 text-sm text-center space-y-2">
          <p>© 2026 – 40 Esboços de Sermões – Atos dos Apóstolos. Todos os direitos reservados.</p>
          <p className="text-[10px] max-w-md opacity-50 uppercase tracking-widest leading-loose mx-auto">
            ESTE PRODUTO NÃO GARANTE RESULTADOS ESPECÍFICOS SEM O DEVIDO ESTUDO E DEDICAÇÃO DO USUÁRIO À PREGAÇÃO DA PALAVRA.
          </p>
        </div>

        <div className="flex gap-6 text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-zinc-400 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Privacidade</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
