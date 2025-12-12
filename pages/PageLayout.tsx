import React, { useEffect } from 'react';
import { Converter } from '../components/Converter';
import { FontCategory } from '../types';

interface PageLayoutProps {
  title: string;
  description: string;
  h1: string;
  content: string;
  category: FontCategory;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, description, h1, content, category }) => {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          {h1}
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {content}
        </p>
      </div>

      <Converter category={category} />
      
      {/* SEO Text Content at bottom */}
      <div className="max-w-4xl mx-auto mt-16 prose prose-indigo prose-lg text-slate-600">
        <h2 className="text-2xl font-bold text-slate-800">¿Cómo funciona este conversor?</h2>
        <p>
          Esta herramienta no cambia realmente la "fuente" (como Arial o Times New Roman), sino que utiliza 
          caracteres del estándar <strong>Unicode</strong> que se parecen a nuestro alfabeto normal. 
          Es por eso que puedes copiarlos y pegarlos en Instagram, Facebook, Twitter (X), TikTok, Amino 
          y Nicknames para juegos como Free Fire.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6">Compatibilidad</h3>
        <p>
          La mayoría de estos estilos son visibles en dispositivos modernos (iOS y Android). Sin embargo, 
          algunos símbolos muy antiguos o específicos pueden aparecer como "cajas" en teléfonos viejos. 
          Las opciones de nuestra categoría "Redes Sociales" son las más seguras.
        </p>
      </div>
    </div>
  );
};