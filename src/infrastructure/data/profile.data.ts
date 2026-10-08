import { ProfileMetadata } from '@/domain/profile.types';

export const PROFILE_DATA: ProfileMetadata = {
  name: 'STIVEN ALBERTO CHARRY BONILLA',
  title: 'Líder Técnico · Ingeniero Backend · Ingeniero de Software',
  subtitle: 'Construcción de sistemas backend escalables, integraciones empresariales y software listo para producción.',
  description:
    'Especializado en backend, integraciones empresariales, arquitectura de software, bases de datos, sistemas en tiempo real, infraestructura y despliegues en producción.',
  location: 'Remoto / Híbrido',
  availability: {
    status: true,
    badgeText: 'DISPONIBLE PARA NUEVAS OPORTUNIDADES',
    subtext: 'Disponible para roles de Líder Técnico & Ingeniero Backend Senior',
  },
  valueProposition: {
    title: 'De la Definición del Negocio a la Ejecución en Producción',
    description:
      'Ingeniero Backend y Líder Técnico enfocado en construir software empresarial confiable, integrar sistemas complejos y liderar soluciones desde el análisis técnico hasta su operación productiva continua.',
  },
  socialLinks: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/stivencharry',
      iconName: 'linkedin',
      highlight: true,
    },
    {
      label: 'GitHub',
      url: 'https://github.com/stivencharry',
      iconName: 'github',
    },
    {
      label: 'Email',
      url: 'mailto:stivencharry.dev@gmail.com',
      iconName: 'mail',
    },
    {
      label: 'Currículum Técnico (CV)',
      url: '#contacto',
      iconName: 'file-text',
    },
  ],
  pillars: [
    {
      number: '01',
      title: 'INGENIERÍA',
      subtitle: 'Sé construir software',
      description:
        'Desarrollo de servicios robustos, lógica de negocio mantenible, patrones SOLID, algoritmos eficientes y código limpio preparado para escalar.',
    },
    {
      number: '02',
      title: 'ARQUITECTURA',
      subtitle: 'Sé diseñar soluciones',
      description:
        'Diseño modular por capas, microservicios, desacoplamiento de dependencias y selección rigurosa de tecnologías acorde a la necesidad del negocio.',
    },
    {
      number: '03',
      title: 'INTEGRACIÓN',
      subtitle: 'Sé conectar sistemas complejos',
      description:
        'Especialidad en enlazar plataformas heterogéneas, APIs externas, servicios legados, colas y bases de datos con resiliencia garantizada.',
    },
    {
      number: '04',
      title: 'PRODUCCIÓN',
      subtitle: 'Sé llevar software real a producción',
      description:
        'Contenedores Docker, servidores Linux, pipelines CI/CD, proxies inversos (Nginx/Traefik) y soporte directo en ambientes productivos de misión crítica.',
    },
    {
      number: '05',
      title: 'LIDERAZGO',
      subtitle: 'Sé tomar decisiones técnicas y liderar',
      description:
        'Análisis técnico exhaustivo, estimaciones certeras, revisiones de código profundas, alineación con stakeholders y acompañamiento activo del equipo.',
    },
  ],
};
