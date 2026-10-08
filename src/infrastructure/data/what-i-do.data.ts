import { WhatIDoCapability } from '@/domain/architecture.types';

export const WHAT_I_DO_CAPABILITIES: WhatIDoCapability[] = [
  {
    id: 'backend',
    title: 'Ingeniería Backend',
    description:
      'Construcción de APIs, microservicios y arquitecturas backend robustas, altamente disponibles y mantenibles mediante código limpio y tipado estricto.',
    highlights: [
      'APIs RESTful de alto rendimiento',
      'Arquitecturas limpias y patrones SOLID',
      'Modelado de dominio y desacoplamiento',
      'Seguridad y control de acceso',
    ],
    iconType: 'server',
  },
  {
    id: 'integrations',
    title: 'Integraciones Empresariales',
    description:
      'Integración y orquestación de múltiples sistemas corporativos, APIs de terceros, plataformas externas y sistemas legados críticos.',
    highlights: [
      'Puentes entre sistemas legacy y modernos',
      'Resiliencia ante fallos y reintentos controlados',
      'Transformación y serialización de datos complejos',
      'Auditoría y trazabilidad de eventos',
    ],
    iconType: 'network',
  },
  {
    id: 'leadership',
    title: 'Liderazgo Técnico',
    description:
      'Análisis técnico de requerimientos, estimación de esfuerzo, definición de arquitectura, revisión de código y mentoría técnica a desarrolladores.',
    highlights: [
      'Toma de decisiones técnicas fundamentadas',
      'Code reviews con foco en calidad y seguridad',
      'Coordinación técnica con proveedores externos',
      'Alineación entre ingeniería y objetivos del negocio',
    ],
    iconType: 'users',
  },
  {
    id: 'realtime',
    title: 'Sistemas en Tiempo Real',
    description:
      'Implementación de canales bidireccionales por WebSockets para difusión de datos en tiempo real y monitoreo instantáneo de eventos operativos.',
    highlights: [
      'Comunicación por WebSockets de baja latencia',
      'Sincronización de estados concurrentes',
      'Transmisión confiable de telemetría y alertas',
      'Manejo eficiente de conexiones vivas',
    ],
    iconType: 'activity',
  },
  {
    id: 'databases',
    title: 'Ingeniería de Bases de Datos',
    description:
      'Modelado relacional, optimización de consultas complejas, diseño transaccional y procedimientos almacenados en SQL Server y PostgreSQL.',
    highlights: [
      'Procedimientos almacenados y transacciones ACID',
      'Optimización de planes de ejecución e índices',
      'Mapeo de datos con Prisma, Sequelize y Knex',
      'Garantía de integridad y consistencia de datos',
    ],
    iconType: 'database',
  },
  {
    id: 'devops',
    title: 'DevOps y Producción',
    description:
      'Gestión de infraestructura en servidores Linux, contenedores Docker, proxies inversos (Nginx/Traefik) y soporte operativo en producción.',
    highlights: [
      'Contenerización con Docker y Compose',
      'Pipelines CI/CD con Jenkins y GitHub',
      'Proxies inversos con SSL (Nginx / Traefik)',
      'Gestión de procesos productivos con PM2',
    ],
    iconType: 'cpu',
  },
];
