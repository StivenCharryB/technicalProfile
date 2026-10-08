import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { LEADERSHIP_RESPONSIBILITIES, IMPACT_DOMAINS } from '@/infrastructure/data/leadership.data';
import { ShieldCheck, Compass } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-24 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Dirección Técnica & Gestión de Ingeniería"
          title="Liderazgo Técnico"
          description="Liderazgo técnico pragmático enfocado en criterio, calidad de entrega, estabilidad en producción y articulación fluida entre negocio e ingeniería."
        />

        {/* Responsabilidades de Liderazgo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {LEADERSHIP_RESPONSIBILITIES.map((item, idx) => (
            <div
              key={idx}
              className="enterprise-card p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-sky-400 bg-sky-950/40 border border-sky-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.focus}
                  </span>
                  <Compass className="w-4 h-4 text-slate-500" />
                </div>

                <h3 className="text-lg font-bold text-slate-100 mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center gap-2 text-[11px] font-mono text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Responsabilidad Activa</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Experiencia / Impacto (Sin métricas inventadas, foco en complejidad técnica) */}
        <div className="pt-12 border-t border-slate-800/80">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-slate-800 bg-slate-900/60 text-xs font-mono tracking-wider text-emerald-400 uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Áreas de Dominio e Impacto Técnico</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Complejidad Técnica y Entornos Operativos
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Trayectoria centrada en sistemas de alto impacto y disponibilidad continua, donde la precisión técnica es innegociable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {IMPACT_DOMAINS.map((domain, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-slate-200">
                    {domain.title}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-slate-700 bg-slate-950 text-emerald-400">
                    {domain.criticality}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {domain.focusDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
