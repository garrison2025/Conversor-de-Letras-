import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">LetrasBonitasPRO</h3>
          <p className="text-sm leading-relaxed">
            Tu herramienta gratuita favorita para convertir texto normal en símbolos Unicode. 
            Perfecto para biografías de Instagram, estados de WhatsApp, nombres de Free Fire y Amino.
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/letras-cursivas" className="hover:text-indigo-400">Conversor de letras cursivas</Link></li>
            <li><Link to="/letras-goticas" className="hover:text-indigo-400">Conversor de letras góticas</Link></li>
            <li><Link to="/letras-tatuajes" className="hover:text-indigo-400">Letras para tatuajes</Link></li>
            <li><Link to="/letras-redes-sociales" className="hover:text-indigo-400">Letras para Facebook</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Información</h3>
          <p className="text-sm mb-2">
            Este sitio utiliza el estándar Unicode para "transformar" fuentes. 
            Compatible con iOS, Android, Windows y macOS.
          </p>
          <p className="text-xs text-slate-500 mt-4">
            © {new Date().getFullYear()} LetrasBonitasPRO. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};