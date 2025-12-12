import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Conversor de Letras Bonitas - Fuentes para Instagram y Facebook",
  description: "Generador de letras bonitas, cursivas, góticas y graffiti para copiar y pegar en redes sociales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}