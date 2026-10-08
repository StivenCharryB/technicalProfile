'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ENTERPRISE_INTEGRATION_NODES } from '@/infrastructure/data/integration.data';
import { IntegrationNode } from '@/domain/architecture.types';
import {
  Layers,
  ArrowUpDown,
  Laptop,
  Server,
  Database,
  Archive,
  Cloud,
  Cpu,
  CheckCircle2,
} from 'lucide-react';

export const EnterpriseIntegrationSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<IntegrationNode>(
    ENTERPRISE_INTEGRATION_NODES[1] // APIs by default
  );

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'app':
        return <Laptop className="w-5 h-5 text-sky-400" />;
      case 'api':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'db':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'legacy':
        return <Archive className="w-5 h-5 text-amber-400" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 'infra':
        return <Cpu className="w-5 h-5 text-rose-400" />;
      default:
        return <Layers className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="integration" className="py-24 border-t border-slate-800/80 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Especialidad Central de Integración"
          title="Conexión de Sistemas Complejos"
          description="Mi fortaleza radica en construir soluciones donde diferentes sistemas, aplicaciones, bases de datos y servicios necesitan trabajar juntos de forma confiable y resiliente."
        />

        {/* Declaración central en bloque empresarial */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <blockquote className="p-6 rounded-2xl bg-slate-950/80 border border-sky-500/20 text-slate-200 text-sm sm:text-base leading-relaxed italic">
            &ldquo;Mi fortaleza está en construir soluciones donde diferentes sistemas, aplicaciones, bases de datos y servicios necesitan trabajar juntos de forma confiable.&rdquo;
          </blockquote>
        </div>

        {/* Diagrama de Topología de Arquitectura Empresarial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Matriz interactiva de Nodos Conectados */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
              <span>Topología del Ecosistema Interconectado</span>
              <span className="text-sky-400">Selecciona un nodo para inspeccionar</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ENTERPRISE_INTEGRATION_NODES.map((node) => {
                const isSelected = selectedNode.id === node.id;

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`p-4 rounded-xl text-left transition-all border flex items-start gap-3.5 group cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900/90 border-sky-500 ring-2 ring-sky-500/20 shadow-lg shadow-sky-500/10'
                        : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
                    }`}
                  >
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                      {getNodeIcon(node.iconType)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-sm text-slate-100 group-hover:text-white">
                          {node.name}
                        </span>
                        <ArrowUpDown className="w-3 h-3 text-slate-500" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
                        {node.role}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Resumen de Conectores Bidireccionales */}
            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 mt-4 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Interconexión bidireccional continua
              </span>
              <span>Tolerancia a fallos & Reintentos activos</span>
            </div>
          </div>

          {/* Panel de Inspección de Integración del Nodo Seleccionado */}
          <div className="lg:col-span-5">
            <div className="enterprise-card p-6 sm:p-7 rounded-2xl border border-sky-500/30 shadow-xl bg-slate-950/90">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800">
                <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-500/30">
                  {getNodeIcon(selectedNode.iconType)}
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-white">
                    {selectedNode.name}
                  </h4>
                  <span className="text-xs font-mono text-sky-400">
                    {selectedNode.role}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                    Rol Operativo & Estrategia de Conexión
                  </label>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedNode.description}
                  </p>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                    Protocolos, Estándares & Formatos
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedNode.protocols.map((proto, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-800 text-sky-300"
                      >
                        {proto}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex items-start gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      Garantía de idempotencia, serialización estricta y aislamiento de excepciones para evitar caídas en cascada.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
