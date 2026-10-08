'use client';

import React from 'react';
import { Terminal, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-800/80 bg-slate-950 text-slate-500 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-400">
            <Terminal className="w-4 h-4 text-sky-400" />
            <span className="font-bold text-slate-200">STIVEN CHARRY</span>
            <span>—</span>
            <span>Technical Lead & Backend Engineer</span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              Sistemas de Misión Crítica & Producción
            </span>
            <span>Next.js · TypeScript · Tailwind</span>
          </div>

          <div>
            <span>© 2026 Stiven Alberto Charry Bonilla. Todos los derechos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
