
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  Star,
  MessageSquareQuote,
  Clock,
  Layout,
  ArrowRight
} from 'lucide-react';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import PricingSection from './components/PricingSection';
import GeminiAssistant from './components/GeminiAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center overflow-x-hidden">
      {/* Header / Nav (Simplified) */}
      <nav className="w-full max-w-6xl flex justify-between items-center p-6 absolute top-0 z-50">
        <div className="flex items-center gap-2">
          <BookOpen className="text-amber-500 w-8 h-8" />
          <span className="font-bold text-xl tracking-tighter">ESBOÇOS<span className="text-amber-500">ATOS</span></span>
        </div>
        <a 
          href="https://pay.cakto.com.br/34ksa7v" 
          className="bg-emerald-500 hover:bg-emerald-400 text-black px-4 py-2 rounded-full font-bold text-sm transition-all hidden md:block"
        >
          ACESSAR AGORA
        </a>
      </nav>

      <Hero />

      <main className="w-full max-w-5xl px-4 md:px-8 space-y-24 py-20">
        
        {/* Statistics / Trust Bar */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
          <div>
            <div className="text-3xl font-bold text-amber-500">40</div>
            <div className="text-xs text-zinc-400 uppercase tracking-widest mt-1 font-semibold">Esboços</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-500">100%</div>
            <div className="text-xs text-zinc-400 uppercase tracking-widest mt-1 font-semibold">Digital</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-500">28</div>
            <div className="text-xs text-zinc-400 uppercase tracking-widest mt-1 font-semibold">Capítulos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-500">24/7</div>
            <div className="text-xs text-zinc-400 uppercase tracking-widest mt-1 font-semibold">Acesso</div>
          </div>
        </section>

        <FeatureSection />

        {/* AI Preview Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Dê uma espiada no <span className="text-amber-500">conteúdo</span></h2>
            <p className="text-zinc-400">Use nossa IA para ver como um esboço profissional pode ser estruturado. Imagine ter 40 destes prontos para pregar.</p>
          </div>
          <GeminiAssistant />
        </section>

        {/* Target Audience / Warnings */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Zap className="text-emerald-400" /> Para quem é?
            </h2>
            <ul className="space-y-4">
              {[
                "Pastores e líderes de ministério",
                "Pregadores iniciantes buscando segurança",
                "Pregadores experientes querendo novos insights",
                "Estudantes da Bíblia",
                "Quem quer economizar horas de estudo"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl space-y-6 opacity-80">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <XCircle className="text-red-400" /> O que NÃO é?
            </h2>
            <ul className="space-y-4">
              {[
                "Teologia acadêmica complexa",
                "Discussão doutrinária exaustiva",
                "Material genérico sem aplicação",
                "Apenas versículos soltos"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="text-red-500/50 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-zinc-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Guarantee */}
        <section className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-10 rounded-3xl text-center space-y-4 shadow-2xl">
          <div className="bg-amber-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/20">
            <ShieldCheck className="text-amber-500 w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-amber-500">Garantia Incondicional</h2>
          <p className="text-zinc-300 max-w-xl mx-auto">
            Experimente por <strong>7 dias</strong>. Se você não sentir que os esboços vão elevar a qualidade da sua pregação, nós devolvemos 100% do seu investimento. Sem perguntas.
          </p>
        </section>

        <PricingSection />

      </main>

      <Footer />
    </div>
  );
};

export default App;
