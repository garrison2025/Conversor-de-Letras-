import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { PageLayout } from './pages/PageLayout';
import { FontCategory } from './types';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <HashRouter>
        <NavBar />
        <main className="flex-grow">
          <Routes>
            {/* Home - Conversor de letras bonitas */}
            <Route 
              path="/" 
              element={
                <PageLayout 
                  category={FontCategory.ALL}
                  title="Conversor de Letras Bonitas (Copiar y Pegar) - 2024"
                  description="El mejor conversor de letras bonitas para Instagram y Facebook. Crea textos cursivos, góticos y para tatuajes fácil y gratis."
                  h1="Conversor de Letras Bonitas"
                  content="Transforma tu texto normal en estilos de letra únicos y llamativos. Escribe, copia y pega en tus redes sociales favoritas."
                />
              } 
            />

            {/* Cursivas */}
            <Route 
              path="/letras-cursivas" 
              element={
                <PageLayout 
                  category={FontCategory.CURSIVE}
                  title="Conversor de Letras Cursivas - Fuentes Elegantes"
                  description="Generador de letras cursivas y manuscritas para copiar. Ideal para nombres elegantes y frases emotivas."
                  h1="Conversor de Letras Cursivas"
                  content="Encuentra los mejores estilos de escritura a mano, script y cursiva elegante. Perfecto para destacar con sofisticación."
                />
              } 
            />

            {/* Tatuajes */}
            <Route 
              path="/letras-tatuajes" 
              element={
                <PageLayout 
                  category={FontCategory.TATTOO}
                  title="Conversor de Letras para Tatuajes y Tattoo"
                  description="Fuentes para tatuajes: góticas, chicanas y cursivas. Prueba tu texto antes de tatuarte."
                  h1="Conversor de Letras para Tatuajes"
                  content="Diseña tu próximo tattoo. Visualiza frases y nombres en estilos caligráficos, góticos y old school."
                />
              } 
            />

            {/* Góticas */}
            <Route 
              path="/letras-goticas" 
              element={
                <PageLayout 
                  category={FontCategory.GOTHIC}
                  title="Conversor de Letras Góticas - Estilo Dark"
                  description="Letras góticas y blackletter para copiar y pegar. Estilo antiguo, medieval y oscuro."
                  h1="Conversor de Letras Góticas"
                  content="Desde el estilo medieval clásico hasta el gótico moderno. Dale un toque oscuro y misterioso a tus textos."
                />
              } 
            />

            {/* Graffiti */}
            <Route 
              path="/letras-graffiti" 
              element={
                <PageLayout 
                  category={FontCategory.GRAFFITI}
                  title="Conversor de Letras Graffiti y Urbanas"
                  description="Generador de letras tipo graffiti, burbujas y callejeras. Estilo urbano para tus nicks."
                  h1="Conversor de Letras Graffiti"
                  content="Letras en burbujas, cuadrados y estilos urbanos. Destaca con un look callejero y moderno."
                />
              } 
            />

            {/* Redes Sociales */}
            <Route 
              path="/letras-redes-sociales" 
              element={
                <PageLayout 
                  category={FontCategory.SOCIAL}
                  title="Letras para Facebook, Amino y TikTok"
                  description="Fuentes compatibles para Facebook y Amino. Asegura que todos puedan leer tu nombre."
                  h1="Conversor para Facebook y Amino"
                  content="Fuentes seleccionadas por su alta compatibilidad. Ideales para muros de Facebook, blogs de Amino y comentarios de TikTok."
                />
              } 
            />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;