import { Converter } from '../components/Converter';
import { FontCategory } from '../types';

export default function Home() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Conversor de Letras Bonitas
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Transforma tu texto normal en estilos de letra únicos y llamativos. Escribe, copia y pega en tus redes sociales favoritas.
        </p>
      </div>

      <Converter category={FontCategory.ALL} />
      
      <div className="max-w-4xl mx-auto mt-16 prose prose-indigo prose-lg text-slate-600">
        <h2 className="text-2xl font-bold text-slate-800">¿Cómo funciona este conversor?</h2>
        <p>
          Esta herramienta no cambia realmente la "fuente" (como Arial o Times New Roman), sino que utiliza 
          caracteres del estándar <strong>Unicode</strong> que se parecen a nuestro alfabeto normal. 
          Es por eso que puedes copiarlos y pegarlos en Instagram, Facebook, Twitter (X), TikTok, Amino 
          y Nicknames para juegos como Free Fire.
        </p>
      </div>
    </div>
  );
}