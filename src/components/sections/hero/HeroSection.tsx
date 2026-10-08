import React from 'react';
import { ArrowDown, Layers, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';
import { PROFILE_DATA } from '@/infrastructure/data/profile.data';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-tech-grid">
      {/* Luz ambiental sutil detrás del hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge de Disponibilidad */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-8 rounded-full border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono font-medium tracking-wide text-emerald-400">
              {PROFILE_DATA.availability.badgeText}
            </span>
          </div>

          {/* Nombre y Título Principal */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase">
            {PROFILE_DATA.name}
          </h1>

          <div className="inline-block mb-6 px-4 py-1.5 rounded-lg border border-slate-800 bg-slate-900/80">
            <p className="text-sm sm:text-base md:text-lg font-mono font-semibold text-sky-400">
              {PROFILE_DATA.title}
            </p>
          </div>

          {/* Subtítulo y Posicionamiento */}
          <p className="text-xl sm:text-2xl font-medium text-slate-200 mb-5 leading-snug tracking-tight">
            &ldquo;{PROFILE_DATA.subtitle}&rdquo;
          </p>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {PROFILE_DATA.description}
          </p>

          {/* CTAs de Alto Impacto */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-all shadow-lg shadow-sky-500/20 active:scale-95"
            >
              <span>Ver experiencia</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#stack"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700/80 hover:bg-slate-800 hover:border-slate-600 transition-all active:scale-95"
            >
              <Cpu className="w-4 h-4 text-sky-400" />
              <span>Explorar stack</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/40 border border-transparent hover:border-slate-800 transition-all"
            >
              <span>Contactarme</span>
            </a>
          </div>

          {/* Barra de Indicadores Técnicos de Seniority */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 text-left">
            <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/40">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-mono font-medium mb-1">
                <Layers className="w-4 h-4" />
                <span>ARQUITECTURA & INTEGRACIÓN</span>
              </div>
              <p className="text-xs text-slate-400">
                Sistemas distribuidos, sincronización en tiempo real y conexión con sistemas legados.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/40">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-medium mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>PRODUCCIÓN & MISIÓN CRÍTICA</span>
              </div>
              <p className="text-xs text-slate-400">
                Operación continua en entornos hospitalarios y transaccionales de alta disponibilidad.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/40">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-medium mb-1">
                <Cpu className="w-4 h-4" />
                <span>LIDERAZGO & DECISIÓN TÉCNICA</span>
              </div>
              <p className="text-xs text-slate-400">
                Definición técnica, estimación analítica, code reviews y mentoría de equipos.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator discreto */}
        <div className="flex justify-center mt-12">
          <a
            href="#what-i-do"
            className="p-2 text-slate-500 hover:text-slate-300 transition-colors"
            aria-label="Ir a la siguiente sección"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
