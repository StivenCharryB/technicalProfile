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
  metadataBase: new URL('https://stivencharry.web.app'),
  title: {
    default: 'Stiven Alberto Charry Bonilla | Desarrollador de Software · Líder Técnico · Ingeniero Backend',
    template: '%s | Stiven Charry',
  },
  description:
    'Portafolio y perfil técnico de Stiven Alberto Charry Bonilla (Stiven Charry). Desarrollador de software, líder técnico e ingeniero backend especializado en arquitecturas por capas, microservicios, sistemas en tiempo real, Node.js, TypeScript y soluciones de misión crítica.',
  keywords: [
    // Identidad y Variaciones del Nombre
    'Stiven Charry',
    'Stiven Alberto Charry Bonilla',
    'Stiven Charry Bonilla',
    'Stiven Charry desarrollador',
    'Stiven Charry portfolio',
    'Stiven Charry perfil tecnico',

    // Cargos y Profesiones Principales
    'Desarrollador de Software',
    'Desarrollador de Software Backend',
    'Ingeniero de Software',
    'Ingeniero Backend',
    'Líder Técnico',
    'Technical Lead',
    'Senior Backend Engineer',
    'Software Engineer',
    'Arquitecto de Software',

    // Competencias Clave y Tecnologías
    'Node.js',
    'TypeScript',
    'NestJS',
    'Express.js',
    'Sistemas en Tiempo Real',
    'WebSockets',
    'Integraciones Empresariales',
    'Arquitectura por Capas',
    'Microservicios',
    'SQL Server',
    'PostgreSQL',
    'Docker',
    'Linux',
    'Desarrollador Full Stack',
    'Desarrollador de Software Colombia',
    'Desarrollador Backend Remoto',
  ],
  authors: [{ name: 'Stiven Alberto Charry Bonilla', url: 'https://stivencharry.web.app' }],
  creator: 'Stiven Alberto Charry Bonilla',
  publisher: 'Stiven Alberto Charry Bonilla',
  alternates: {
    canonical: '/',
    languages: {
      'es-CO': '/',
      'es': '/',
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'es_CO',
    alternateLocale: ['es_ES', 'en_US'],
    url: 'https://stivencharry.web.app',
    title: 'Stiven Alberto Charry Bonilla | Desarrollador de Software & Líder Técnico',
    description:
      'Portafolio técnico y trayectoria de ingeniería de Stiven Alberto Charry Bonilla. Especializado en backend escalable, sistemas en tiempo real y arquitectura de software.',
    siteName: 'Stiven Charry - Perfil Técnico & Portafolio',
    firstName: 'Stiven Alberto',
    lastName: 'Charry Bonilla',
    username: 'stivencharry',
    gender: 'male',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stiven Alberto Charry Bonilla | Desarrollador de Software & Líder Técnico',
    description:
      'Desarrollador de software, líder técnico e ingeniero backend. Arquitecturas escalables, sistemas en tiempo real e integraciones empresariales.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  classification: 'Portafolio Profesional de Desarrollo de Software e Ingeniería Backend',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://stivencharry.web.app/#website',
      url: 'https://stivencharry.web.app',
      name: 'Stiven Charry | Portafolio Técnico & Desarrollador de Software',
      description: 'Portafolio profesional y perfil técnico de ingeniería de Stiven Alberto Charry Bonilla',
      inLanguage: 'es-CO',
      publisher: {
        '@id': 'https://stivencharry.web.app/#person',
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://stivencharry.web.app/#webpage',
      url: 'https://stivencharry.web.app',
      name: 'Stiven Alberto Charry Bonilla - Desarrollador de Software & Líder Técnico',
      isPartOf: {
        '@id': 'https://stivencharry.web.app/#website',
      },
      about: {
        '@id': 'https://stivencharry.web.app/#person',
      },
      mainEntity: {
        '@id': 'https://stivencharry.web.app/#person',
      },
      inLanguage: 'es-CO',
    },
    {
      '@type': 'Person',
      '@id': 'https://stivencharry.web.app/#person',
      name: 'Stiven Alberto Charry Bonilla',
      alternateName: ['Stiven Charry', 'Stiven Charry Bonilla'],
      givenName: 'Stiven Alberto',
      familyName: 'Charry Bonilla',
      url: 'https://stivencharry.web.app',
      jobTitle: [
        'Desarrollador de Software',
        'Líder Técnico',
        'Ingeniero Backend',
        'Technical Lead',
        'Software Engineer',
        'Senior Backend Engineer',
      ],
      description:
        'Desarrollador de software y líder técnico backend enfocado en construir software empresarial confiable, integrar sistemas complejos y liderar soluciones desde el análisis técnico hasta su operación productiva continua.',
      email: 'mailto:stiven1859b@gmail.com',
      sameAs: [
        'https://www.linkedin.com/in/stiven-alberto-charry-bonilla-016b33208',
        'https://github.com/StivenCharryB',
      ],
      knowsAbout: [
        'Desarrollo de Software',
        'Ingeniería de Software',
        'Arquitectura de Software',
        'Backend Engineering',
        'Node.js',
        'TypeScript',
        'NestJS',
        'Express.js',
        'Sistemas en Tiempo Real',
        'WebSockets',
        'Integración de Sistemas',
        'Arquitectura por Capas',
        'Microservicios',
        'Bases de Datos Relacionales',
        'Microsoft SQL Server',
        'PostgreSQL',
        'Docker',
        'Linux',
        'DevOps & CI/CD',
      ],
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Desarrollador de Software / Ingeniero Backend',
        occupationalCategory: '15-1252.00',
        skills: 'Node.js, TypeScript, Backend Architecture, Microservices, SQL Server, Docker',
      },
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 selection:bg-sky-500/20 selection:text-sky-300">
        {children}
      </body>
    </html>
  );
}
