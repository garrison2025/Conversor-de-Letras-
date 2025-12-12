import { Converter } from '../../components/Converter';
import { ROUTES } from '../../lib/routes';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return ROUTES.map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const route = ROUTES.find((r) => r.slug === params.slug);
  if (!route) return {};
  
  return {
    title: route.title,
    description: route.description,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const route = ROUTES.find((r) => r.slug === params.slug);

  if (!route) {
    notFound();
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          {route.h1}
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {route.content}
        </p>
      </div>

      <Converter category={route.category} />
      
      <div className="max-w-4xl mx-auto mt-16 prose prose-indigo prose-lg text-slate-600">
        <h2 className="text-2xl font-bold text-slate-800">Sobre estas letras {route.category}</h2>
        <p>
          Estos estilos son ideales para destacar en biografías y posts. 
          Genera texto {route.category} compatible con la mayoría de redes sociales y apps de mensajería.
        </p>
      </div>
    </div>
  );
}