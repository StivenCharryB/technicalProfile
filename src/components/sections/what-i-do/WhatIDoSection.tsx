import React from 'react';
import { Server, Network, Users, Activity, Database, Cpu, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { WHAT_I_DO_CAPABILITIES } from '@/infrastructure/data/what-i-do.data';

export const WhatIDoSection: React.FC = () => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'server':
        return <Server className="w-5 h-5 text-sky-400" />;
      case 'network':
        return <Network className="w-5 h-5 text-cyan-400" />;
      case 'users':
        return <Users className="w-5 h-5 text-indigo-400" />;
      case 'activity':
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-rose-400" />;
      default:
        return <Server className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="what-i-do" className="py-24 border-t border-slate-800/80 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Propuesta de Valor de Ingeniería"
          title="Lo Que Aporto Como Ingeniero & Líder Técnico"
          description="Enfoque integral que combina ingeniería de software profunda, integración de sistemas de misión crítica, infraestructura confiable y dirección técnica."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_I_DO_CAPABILITIES.map((capability) => (
            <div
              key={capability.id}
              className="enterprise-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5">
                  {getIcon(capability.iconType)}
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-3 tracking-tight">
                  {capability.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {capability.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60">
                <ul className="space-y-2">
                  {capability.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
