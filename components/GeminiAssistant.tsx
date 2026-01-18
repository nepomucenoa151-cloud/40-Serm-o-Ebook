
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2, Play } from 'lucide-react';

const GeminiAssistant: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [outline, setOutline] = useState<string | null>(null);
  const [chapter, setChapter] = useState('2');

  const generatePreview = async () => {
    setLoading(true);
    setOutline(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Gere um pequeno esboço de sermão rápido e impactante baseado no capítulo ${chapter} do livro de Atos. 
        Estrutura desejada: 
        1. Título do Tema
        2. Texto Base
        3. 3 pontos rápidos (frases curtas)
        4. Uma aplicação prática de 1 frase.
        Mantenha o tom inspirador para pastores. Máximo de 150 palavras.`,
        config: {
          temperature: 0.7,
        }
      });
      setOutline(response.text || "Não foi possível gerar no momento.");
    } catch (error) {
      setOutline("Ocorreu um erro ao gerar a prévia. Mas no material oficial, todos os 40 esboços estão prontos para você!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 space-y-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-amber-500/20 p-2 rounded-xl">
            <Sparkles className="text-amber-500 w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Prévia Inteligente</h3>
            <p className="text-xs text-zinc-500">Escolha um capítulo e veja um exemplo</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <select 
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
            className="bg-zinc-800 border border-zinc-700 text-zinc-200 px-4 py-3 rounded-xl outline-none focus:border-amber-500 transition-colors grow md:grow-0"
          >
            {[...Array(28)].map((_, i) => (
              <option key={i+1} value={i+1}>Capítulo {i+1}</option>
            ))}
          </select>
          <button 
            onClick={generatePreview}
            disabled={loading}
            className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shrink-0"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5 fill-black" />}
            GERAR
          </button>
        </div>
      </div>

      {outline && (
        <div className="bg-black/40 border border-zinc-800 p-6 rounded-2xl animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="prose prose-invert max-w-none text-zinc-300 whitespace-pre-wrap text-sm md:text-base leading-relaxed">
            {outline}
          </div>
          <div className="mt-4 pt-4 border-t border-zinc-800 text-[10px] text-zinc-500 flex justify-between">
            <span>IA Preview</span>
            <span>Exemplo meramente ilustrativo</span>
          </div>
        </div>
      )}

      {!outline && !loading && (
        <div className="border-2 border-dashed border-zinc-800 rounded-2xl h-32 flex items-center justify-center text-zinc-600 text-sm italic">
          Clique em GERAR para ver um exemplo de esboço...
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;
