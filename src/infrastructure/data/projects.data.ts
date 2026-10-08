import { EngineeringProject } from '@/domain/project.types';

export const SELECTED_PROJECTS: EngineeringProject[] = [
  {
    id: 'operating-room-platform',
    name: 'Plataforma de Quirófanos en Tiempo Real',
    category: 'Sistemas en Tiempo Real · Salud',
    badge: 'Producción Activa · Misión Crítica',
    problem:
      'La gestión de quirófanos hospitalarios requería monitoreo visual inmediato del estado de las salas quirúrgicas, pacientes y procedimientos, donde cualquier retraso en la visualización afectaba la coordinación médica y la rotación de salas.',
    solution:
      'Diseño e implementación de una plataforma de baja latencia basada en Node.js y WebSockets, sincronizada directamente con la base de datos operativa, emitiendo actualizaciones instantáneas a múltiples pantallas y estaciones de trabajo clínicas.',
    technologies: ['Node.js', 'WebSockets', 'SQL Server', 'TypeScript', 'Linux', 'PM2'],
    architecture:
      'Arquitectura orientada a eventos con servidor WebSocket centralizado, capa de abstracción para SQL Server con procedimientos almacenados de alto rendimiento y conexión persistente bidireccional con reconexión automática.',
    result:
      'Operación ininterrumpida en entorno productivo hospitalario, sincronización de estados quirúrgicos en milisegundos y eliminación total de recargas manuales de página para el personal médico.',
    metricsOrHighlight: 'Sincronización instantánea de salas en tiempo real',
  },
  {
    id: 'enterprise-appointment-integration',
    name: 'Integración Empresarial de Citas Médicas',
    category: 'Integración Empresarial · APIs',
    badge: 'Integración Crítica · Alto Volumen',
    problem:
      'Dispersión y desincronización de agendas y citas entre plataformas externas de pacientes y el sistema central corporativo con SQL Server, generando bloqueos por sobreposición de horarios y demoras en la actualización.',
    solution:
      'Desarrollo de un servicio backend de integración en Node.js con endpoints REST robustos, validación de reglas de negocio, colas de procesamiento y manejo transaccional para evitar colisiones y dobles reservas.',
    technologies: ['Node.js', 'REST APIs', 'SQL Server', 'Sequelize/Prisma', 'Express', 'Docker'],
    architecture:
      'Capa de API Gateway con validación de esquemas, middleware de autenticación, control de concurrencia y transacciones ACID en base de datos para garantizar la consistencia absoluta de las citas.',
    result:
      'Canal de comunicación unificado y confiable entre los sistemas de agendamiento externos y el core corporativo, garantizando integridad de datos y trazabilidad completa de cada reserva.',
    metricsOrHighlight: 'Consistencia transaccional sin duplicidades',
  },
  {
    id: 'healthcare-systems-integration',
    name: 'Integración de Sistemas de Salud',
    category: 'Modernización Legacy & Docker',
    badge: 'Interoperabilidad · Enterprise',
    problem:
      'Sistemas legados hospitalarios con esquemas de datos cerrados y sin documentación de API necesitaban comunicarse con nuevos servicios clínicos y sistemas de información en la nube.',
    solution:
      'Construcción de microservicios adaptadores contenerizados en Docker con REST APIs, que aíslan la complejidad de las fuentes de datos preexistentes, estandarizan los modelos de respuesta y protegen la infraestructura legacy.',
    technologies: ['REST APIs', 'Sistemas Legados', 'PostgreSQL', 'SQL Server', 'Docker', 'Nginx'],
    architecture:
      'Patrón Adapter / Facade distribuido: microservicios especializados que traducen consultas a formatos estándar JSON/REST, balanceados mediante Nginx y empaquetados en contenedores Docker.',
    result:
      'Interoperabilidad transparente para los nuevos sistemas sin alterar ni poner en riesgo la estabilidad del software legado en producción.',
    metricsOrHighlight: 'Modernización desacoplada sin riesgo operativo',
  },
];
