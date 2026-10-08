'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TECH_STACK_CATEGORIES } from '@/infrastructure/data/stack.data';
import { StackCategoryId } from '@/domain/stack.types';
import { Layers, Database, Cpu, Layout, Server, Sparkles } from 'lucide-react';

export const StackSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<StackCategoryId | 'all'>('all');

  const getCategoryIcon = (id: StackCategoryId) => {
    switch (id) {
      case 'backend':
        return <Server className="w-4 h-4" />;
      case 'architecture':
        return <Layers className="w-4 h-4" />;
      case 'databases':
        return <Database className="w-4 h-4" />;
      case 'devops':
        return <Cpu className="w-4 h-4" />;
      case 'frontend':
        return <Layout className="w-4 h-4" />;
    }
  };

  const filteredCategories =
    activeTab === 'all'
      ? TECH_STACK_CATEGORIES
      : TECH_STACK_CATEGORIES.filter((cat) => cat.id === activeTab);

  return (
    <section id="stack" className="py-24 border-t border-slate-800/80 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Ecosistema de Herramientas & Estándares"
          title="Technology Stack"
          description="Tecnologías consolidadas utilizadas en producción para construir sistemas escalables, resistentes a fallos e integrados a gran escala."
        />

        {/* Selector de Categorías / Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'all'
                ? 'bg-sky-400 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            TODAS LAS CATEGORÍAS ({TECH_STACK_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0)})
          </button>

          {TECH_STACK_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeTab === cat.id
                  ? 'bg-sky-400 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.shortTitle.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Grid de Categorías y Tecnologías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="enterprise-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2 text-sky-400">
                    {getCategoryIcon(category.id)}
                    <h3 className="text-base font-bold text-slate-100 tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {category.items.length} TECS
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Lista de Tecnologías en la Categoría */}
                <div className="space-y-2.5">
                  {category.items.map((tech, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between group hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        {tech.highlight && (
                          <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        )}
                        <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                      {tech.tag && (
                        <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800/60">
                          {tech.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/40 text-[11px] font-mono text-slate-500 text-right">
                Producción verificada
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
