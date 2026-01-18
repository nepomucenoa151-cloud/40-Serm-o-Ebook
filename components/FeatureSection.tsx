
import React from 'react';
import { Layout, Clock, BookOpen, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "40 Esboços Completos",
    desc: "Cobrindo os principais marcos e capítulos do livro de Atos dos Apóstolos."
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Estrutura Homilética",
    desc: "Cada sermão inclui Introdução, Pontos Centrais, Aplicação Prática e Conclusão."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Economize Horas",
    desc: "Vá direto ao ponto. Use como base sólida para suas próprias mensagens sem perder tempo."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Pronto para Uso",
    desc: "Conteúdo digital que você pode abrir no celular, tablet ou imprimir para o púlpito."
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">O que você vai <span className="text-amber-500">receber</span></h2>
        <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-amber-500/50 transition-colors group">
            <div className="bg-amber-500/10 w-12 h-12 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
