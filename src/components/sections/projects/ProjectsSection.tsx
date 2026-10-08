import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SELECTED_PROJECTS } from '@/infrastructure/data/projects.data';
import { AlertCircle, CheckCircle } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-t border-slate-800/80 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Casos Técnicos Destacados"
          title="Selected Engineering Work"
          description="Casos de estudio arquitectónicos reales: resolución de desafíos críticos de integración, sincronización en tiempo real y modernización de sistemas."
        />

        <div className="space-y-10">
          {SELECTED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="enterprise-card p-6 sm:p-10 rounded-3xl border border-slate-800/90 shadow-2xl relative overflow-hidden"
            >
              {/* Badge superior y Categoría */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80">
                <div>
                  <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {project.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/40 border border-emerald-500/30 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Grid Técnico: Problema & Solución */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Problema */}
                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold mb-2 uppercase">
                    <AlertCircle className="w-4 h-4" />
                    <span>Desafío de Ingeniería / Problema</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solución */}
                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-sky-400 text-xs font-mono font-bold mb-2 uppercase">
                    <CheckCircle className="w-4 h-4" />
                    <span>Solución de Ingeniería</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Arquitectura y Resultado */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
                <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-950/50 border border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 block mb-2 uppercase tracking-wider">
                    Decisión & Patrón de Arquitectura
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                    {project.architecture}
                  </p>
                </div>

                <div className="lg:col-span-5 p-5 rounded-2xl bg-sky-950/20 border border-sky-500/20 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-sky-400 block mb-2 uppercase tracking-wider">
                      Impacto & Resultado Operativo
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                  {project.metricsOrHighlight && (
                    <div className="mt-4 pt-3 border-t border-sky-500/20 text-xs font-mono text-sky-300 font-bold">
                      ✓ {project.metricsOrHighlight}
                    </div>
                  )}
                </div>
              </div>

              {/* Tecnologías involucradas */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/60">
                <span className="text-xs font-mono text-slate-500 mr-2">
                  STACK DEL PROYECTO:
                </span>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
