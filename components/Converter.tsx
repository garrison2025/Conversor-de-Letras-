'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { FontCategory, FontStyle } from '../types';
import { getFontsByCategory, convertText } from '../services/fontService';

interface ConverterProps {
  category: FontCategory;
}

export const Converter: React.FC<ConverterProps> = ({ category }) => {
  const [inputText, setInputText] = useState('');
  const [fonts, setFonts] = useState<FontStyle[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    setFonts(getFontsByCategory(category));
  }, [category]);

  const handleCopy = useCallback((text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  }, []);

  const placeholder = "Escribe tu texto aquí...";
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Sticky Input Area */}
      <div className="sticky top-16 z-40 bg-slate-50 pt-4 pb-6 px-1">
        <div className="relative shadow-lg rounded-2xl">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={placeholder}
            className="w-full h-32 p-4 text-xl border-2 border-indigo-200 rounded-2xl focus:border-indigo-500 focus:ring-0 resize-none transition-colors bg-white text-slate-800 placeholder-slate-400"
          />
          <div className="absolute bottom-4 right-4 text-xs text-slate-400 font-medium">
            {inputText.length} caracteres
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 gap-4 mt-2 mb-12">
        {fonts.map((font) => {
          const resultText = convertText(inputText || "Vista Previa", font.id);
          const isCopied = copiedId === font.id;

          return (
            <div 
              key={font.id} 
              className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center justify-between gap-4 group"
            >
              <div className="flex-1 w-full overflow-hidden">
                <div className="text-xs font-semibold text-indigo-500 uppercase tracking-wide mb-1 opacity-70">
                  {font.name}
                </div>
                <div className="text-xl sm:text-2xl text-slate-800 break-words font-medium select-all py-1">
                  {resultText}
                </div>
              </div>
              
              <button
                onClick={() => handleCopy(resultText, font.id)}
                className={`
                  flex-shrink-0 w-full sm:w-auto px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2
                  ${isCopied 
                    ? 'bg-green-500 text-white shadow-green-200' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200 hover:scale-105'}
                  shadow-md
                `}
              >
                {isCopied ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    ¡Copiado!
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                    Copiar
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};