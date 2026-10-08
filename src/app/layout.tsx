import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Stiven Charry | Technical Lead · Backend Engineer · Software Engineer',
  description:
    'Portfolio profesional de Stiven Alberto Charry Bonilla. Construyendo sistemas backend escalables, integraciones empresariales de misión crítica y software listo para producción.',
  keywords: [
    'Technical Lead',
    'Backend Engineer',
    'Software Engineer',
    'Node.js',
    'TypeScript',
    'Enterprise Integrations',
    'SQL Server',
    'PostgreSQL',
    'WebSockets',
    'Docker',
    'Linux',
  ],
  authors: [{ name: 'Stiven Alberto Charry Bonilla' }],
  openGraph: {
    title: 'Stiven Charry | Líder Técnico · Ingeniero Backend',
    description:
      'Construcción de sistemas backend escalables, integraciones empresariales y software listo para producción.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 selection:bg-sky-500/20 selection:text-sky-300">
        {children}
      </body>
    </html>
  );
}
