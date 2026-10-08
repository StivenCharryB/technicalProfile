'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { LIFECYCLE_FLOW_STEPS } from '@/infrastructure/data/flow.data';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const ArchitectureFlowSection: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const activeStep = LIFECYCLE_FLOW_STEPS[selectedStepIndex];

  return (
    <section id="architecture" className="py-24 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Ciclo de Vida de Ingeniería de Software"
          title="Del Requerimiento a Producción"
          description="No solo escribo código: participo activamente, diseño y lidero cada etapa del ciclo de vida de una solución tecnológica empresarial."
        />

        {/* Stepper / Timeline horizontal en desktop, scrollable en mobile */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center min-w-[760px] lg:min-w-full justify-between gap-2 border-b border-slate-800/80 pb-6">
            {LIFECYCLE_FLOW_STEPS.map((step, idx) => {
              const isSelected = idx === selectedStepIndex;
              const isPast = idx < selectedStepIndex;

              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setSelectedStepIndex(idx)}
                  className="flex flex-col items-center text-center group cursor-pointer focus:outline-none flex-1"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-sky-400 text-slate-950 ring-4 ring-sky-500/20 scale-110 shadow-lg shadow-sky-500/20'
                        : isPast
                        ? 'bg-slate-800 text-sky-400 border border-sky-500/40'
                        : 'bg-slate-900 text-slate-500 border border-slate-800 group-hover:border-slate-700 group-hover:text-slate-300'
                    }`}
                  >
                    {step.stepNumber}
                  </div>

                  <span
                    className={`mt-2 text-[11px] font-semibold max-w-[90px] leading-tight transition-colors ${
                      isSelected ? 'text-sky-400' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detalle de la Fase Seleccionada */}
        <div className="enterprise-card p-6 sm:p-10 rounded-3xl max-w-4xl mx-auto border border-slate-800/90 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-xl bg-sky-400/10 border border-sky-500/30 font-mono text-lg font-bold text-sky-400 flex items-center justify-center">
                {activeStep.stepNumber}
              </span>
              <div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  {activeStep.title}
                </h3>
                <p className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                  {activeStep.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={selectedStepIndex === 0}
                onClick={() => setSelectedStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-3 py-1.5 rounded-lg text-xs font-mono border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                Anterior
              </button>
              <button
                disabled={selectedStepIndex === LIFECYCLE_FLOW_STEPS.length - 1}
                onClick={() =>
                  setSelectedStepIndex((prev) =>
                    Math.min(LIFECYCLE_FLOW_STEPS.length - 1, prev + 1)
                  )
                }
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-sky-400 text-slate-950 font-bold hover:bg-sky-300 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                Siguiente
              </button>
            </div>
          </div>

          <p className="text-base text-slate-300 leading-relaxed mb-8">
            {activeStep.description}
          </p>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
              <span>Actividades & Entregables de Ingeniería Clave</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {activeStep.keyActivities.map((act, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 leading-snug">{act}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
