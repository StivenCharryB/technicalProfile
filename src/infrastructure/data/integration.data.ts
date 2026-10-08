import { IntegrationNode } from '@/domain/architecture.types';

export const ENTERPRISE_INTEGRATION_NODES: IntegrationNode[] = [
  {
    id: 'applications',
    name: 'Applications',
    role: 'Frontend & Clientes Operativos',
    iconType: 'app',
    description:
      'Portales empresariales, dashboards clínicos, interfaces de usuario y aplicaciones móviles que requieren sincronización constante de estado.',
    protocols: ['HTTPS', 'WSS (WebSockets)', 'REST', 'JSON'],
  },
  {
    id: 'apis',
    name: 'Core APIs & Microservicios',
    role: 'Capa de Negocio y Orquestación Backend',
    iconType: 'api',
    description:
      'Servicios Node.js / NestJS con tipado TypeScript estricto, control de acceso, rate limiting, validaciones de esquema y lógica transaccional.',
    protocols: ['OpenAPI 3.0', 'JWT / OAuth', 'Reverse Proxy', 'Event Streams'],
  },
  {
    id: 'databases',
    name: 'Databases & Storage',
    role: 'Persistencia Transaccional',
    iconType: 'db',
    description:
      'Motores relacionales como Microsoft SQL Server y PostgreSQL, ejecutando transacciones ACID complejas, índices de alta concurrencia y SPs optimizados.',
    protocols: ['T-SQL / PL-pgSQL', 'Prisma / Knex', 'Connection Pooling', 'CDC'],
  },
  {
    id: 'legacy',
    name: 'Legacy Systems',
    role: 'Sistemas Heredados & Core Corporativo',
    iconType: 'legacy',
    description:
      'Sistemas on-premise, ERPs propietarios y software crítico preexistente que carece de APIs modernas y demanda adaptadores seguros.',
    protocols: ['Direct DB Queries', 'XML / SOAP', 'Batch Sync', 'Custom Adapters'],
  },
  {
    id: 'external',
    name: 'External Services & Providers',
    role: 'Integraciones con Terceros',
    iconType: 'cloud',
    description:
      'Plataformas externas de agendamiento, pasarelas de pago, sistemas de facturación y servicios en la nube de proveedores especializados.',
    protocols: ['Webhooks', 'REST APIs', 'Mutual TLS', 'Retry Queues'],
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure & Edge',
    role: 'Plataforma de Despliegue y Red',
    iconType: 'infra',
    description:
      'Servidores Linux, contenedores Docker, routers Traefik, balanceadores Nginx y gestión de procesos PM2 asegurando alta disponibilidad 24/7.',
    protocols: ['Docker Compose', 'Linux Systemd', 'SSL / TLS Termination', 'CI/CD'],
  },
];
