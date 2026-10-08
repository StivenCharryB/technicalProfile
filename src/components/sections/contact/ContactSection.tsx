import React from 'react';
import { Mail, FileText, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '@/infrastructure/data/profile.data';

export const ContactSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'linkedin':
        return (
          <svg
            className="w-5 h-5 text-sky-400 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28M7.86 18.5v-8.37H5.07v8.37h2.79Z" />
          </svg>
        );
      case 'github':
        return (
          <svg
            className="w-5 h-5 text-slate-200 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
          </svg>
        );
      case 'mail':
        return <Mail className="w-5 h-5 text-emerald-400" />;
      case 'file-text':
        return <FileText className="w-5 h-5 text-indigo-400" />;
      default:
        return <Mail className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-800/80 bg-slate-950 relative overflow-hidden">
      {/* Luz ambiental sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-sky-500/30 bg-sky-950/30 text-xs font-mono tracking-wider text-sky-400 uppercase">
          <span>Iniciemos Conversación</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 uppercase">
          Construyamos Software de Alto Impacto
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          ¿Buscas un ingeniero capaz de entender el negocio, diseñar la solución, escribir el backend y llevarlo hasta producción?
        </p>

        {/* CTA Principal */}
        <div className="mb-14">
          <a
            href="mailto:stivencharry.dev@gmail.com"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-all shadow-xl shadow-sky-500/25 active:scale-95"
          >
            <span>Hablemos</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* Canales de Contacto Directos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {PROFILE_DATA.socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all flex items-center gap-3.5 group text-left"
            >
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0 group-hover:border-sky-500/40 transition-colors">
                {getIcon(link.iconName)}
              </div>
              <div className="overflow-hidden">
                <span className="text-xs font-mono text-slate-400 block">Canal Directo</span>
                <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors truncate block">
                  {link.label}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-sky-400 ml-auto transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
