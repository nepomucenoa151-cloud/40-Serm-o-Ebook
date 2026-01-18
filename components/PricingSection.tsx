
import React from 'react';
import { CheckCircle2, ArrowRight, Zap, Award } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="checkout" className="py-12 w-full max-w-6xl mx-auto scroll-mt-28">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Escolha seu <span className="text-amber-500">Plano</span>
        </h2>
        <p className="text-zinc-400">Invista no seu chamado com o material que cabe no seu bolso.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start px-4">
        
        {/* Basic Plan */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden flex flex-col transition-all hover:border-zinc-700">
          <div className="mb-8">
            <div className="bg-zinc-800 w-fit px-3 py-1 rounded-full text-[10px] font-bold text-zinc-400 tracking-widest uppercase mb-4">
              PLANO BÁSICO
            </div>
            <h3 className="text-2xl font-bold mb-2">PLANO BÁSICO</h3>
            <p className="text-zinc-500 text-sm">Ideal para quem quer começar agora.</p>
          </div>

          <div className="space-y-4 mb-10 flex-grow">
            {[
              "40 Esboços Detalhados de Atos",
              "Formato PDF Digital",
              "Garantia de 7 dias"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
                <span className="text-zinc-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 mb-8 border-t border-zinc-800 pt-8">
            <div className="text-4xl font-black text-white">R$ 9,90</div>
            <p className="text-xs text-zinc-500">Pagamento único.</p>
          </div>

          <a 
            href="https://pay.cakto.com.br/ztb7z93_448280"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-emerald-900/20 no-underline"
          >
            ADQUIRIR BÁSICO
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Premium Plan */}
        <div className="bg-zinc-900 border-2 border-amber-500/50 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden flex flex-col shadow-[0_0_40px_rgba(245,196,0,0.1)] transition-all hover:shadow-[0_0_60px_rgba(245,196,0,0.15)]">
          <div className="absolute top-0 right-0 bg-amber-500 text-black px-6 py-2 rounded-bl-3xl font-bold text-[10px] tracking-widest uppercase flex items-center gap-2">
            <Zap className="w-3 h-3 fill-black" /> MAIS VENDIDO
          </div>
          
          <div className="mb-8">
            <div className="bg-amber-500/20 w-fit px-3 py-1 rounded-full text-[10px] font-bold text-amber-500 tracking-widest uppercase mb-4 border border-amber-500/30">
              COMBO PREMIUM
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">PLANO COMPLETO</h3>
            <p className="text-amber-500/80 text-sm">O kit completo para o seu ministério.</p>
          </div>

          <div className="space-y-4 mb-10 flex-grow">
            {[
              "40 Esboços Detalhados de Atos",
              "BÔNUS: + 141 Esboços Variados",
              "BÔNUS: Como Memorizar a Biblia",
              "BÔNUS: eBook 'Púlpito com Autoridade'",
              "BÔNUS: eBook 'Jejuando de forma correta'",
              "BÔNUS: Homilética Básica",
              "Suporte Prioritário + Atualizações",
              "Garantia de 7 dias"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-500 w-5 h-5 shrink-0" />
                <span className="text-zinc-200 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 mb-8 border-t border-zinc-800 pt-8">
            <span className="text-zinc-500 line-through text-sm">De R$ 127,00</span>
            <div className="text-5xl font-black text-white">R$ 37,00</div>
            <p className="text-xs text-amber-500 font-semibold uppercase tracking-wider">Economia de 70% hoje</p>
          </div>

          <a 
            href="https://pay.cakto.com.br/34ksa7v"
            className="w-full bg-amber-500 hover:bg-amber-400 text-black py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all btn-shadow active:scale-95 shadow-[0_10px_30px_rgba(245,196,0,0.3)] no-underline"
          >
            QUERO O PLANO COMPLETO
            <Award className="w-6 h-6" />
          </a>
        </div>

      </div>
      
      <p className="text-center mt-12 text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
        Pagamento 100% Seguro & Acesso Instantâneo
        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
      </p>
    </section>
  );
};

export default PricingSection;
