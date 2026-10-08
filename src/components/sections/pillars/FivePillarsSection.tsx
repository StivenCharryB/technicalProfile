import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PROFILE_DATA } from '@/infrastructure/data/profile.data';
import { Code2, Layers, Network, Terminal, Users } from 'lucide-react';

export const FivePillarsSection: React.FC = () => {
  const getPillarIcon = (number: string) => {
    switch (number) {
      case '01':
        return <Code2 className="w-5 h-5 text-sky-400" />;
      case '02':
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case '03':
        return <Network className="w-5 h-5 text-cyan-400" />;
      case '04':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case '05':
        return <Users className="w-5 h-5 text-amber-400" />;
      default:
        return <Code2 className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section className="py-24 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pilares Fundamentales"
          title="Engineer → Architect → Technical Leader"
          description="Una evolución técnica sólida: dominio profundo de código, capacidad de diseño estructural y liderazgo directivo."
        />

        {/* Resumen Profesional */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed border-l-2 border-sky-400 pl-4 py-1 text-left sm:text-center sm:border-l-0 sm:pl-0">
            &ldquo;{PROFILE_DATA.valueProposition.description}&rdquo;
          </p>
        </div>

        {/* Grid de los 5 Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROFILE_DATA.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="enterprise-card p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-slate-600">
                    {pillar.number}
                  </span>
                  {getPillarIcon(pillar.number)}
                </div>

                <h3 className="text-base font-extrabold text-white tracking-wider uppercase mb-1">
                  {pillar.title}
                </h3>

                <p className="text-xs font-mono text-sky-400 mb-3">
                  {pillar.subtitle}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-end text-[10px] font-mono text-slate-500">
                <span>ESTÁNDAR SR</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
