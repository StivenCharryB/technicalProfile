import { LeadershipResponsibility, ImpactArea } from '@/domain/leadership.types';

export const LEADERSHIP_RESPONSIBILITIES: LeadershipResponsibility[] = [
  {
    title: 'Toma de Decisiones Técnicas',
    category: 'strategy',
    description:
      'Selección justificada de stacks tecnológicos, arquitecturas, librerías y patrones de diseño equilibrando velocidad de entrega y mantenibilidad a largo plazo.',
    focus: 'Estrategia Tecnológica',
  },
  {
    title: 'Análisis de Requerimientos',
    category: 'strategy',
    description:
      'Desglose analítico de requerimientos de negocio complejos en especificaciones técnicas de ingeniería claras, viables y sin ambigüedades.',
    focus: 'Alineación con Negocio',
  },
  {
    title: 'Definición de Arquitectura',
    category: 'strategy',
    description:
      'Definición de capas de software, modelos de datos relacionales, contratos de comunicación y estrategias de integración desacopladas.',
    focus: 'Diseño de Sistemas',
  },
  {
    title: 'Estimación de Desarrollo',
    category: 'execution',
    description:
      'Estimación realista y técnica de tiempos de desarrollo, identificando dependencias críticas, rutas críticas y contingencias operativas.',
    focus: 'Previsibilidad & Alcance',
  },
  {
    title: 'Revisión de Código y Soluciones',
    category: 'execution',
    description:
      'Revisiones exhaustivas de pull requests garantizando el cumplimiento de patrones SOLID, tipado riguroso, seguridad y rendimiento en consultas.',
    focus: 'Calidad de Software',
  },
  {
    title: 'Coordinación de Despliegues',
    category: 'execution',
    description:
      'Planificación y ejecución de ventanas de despliegue en entornos productivos, asegurando cero o mínimo downtime y protocolos de rollback.',
    focus: 'Operaciones Productivas',
  },
  {
    title: 'Coordinación Técnica con Proveedores',
    category: 'coordination',
    description:
      'Interlocución directa con equipos de ingeniería de proveedores externos, validando especificaciones de APIs, contratos y resolución de incompatibilidades.',
    focus: 'Interoperabilidad Externa',
  },
  {
    title: 'Soporte y Estabilidad en Producción',
    category: 'coordination',
    description:
      'Diagnóstico y resolución rápida de incidencias críticas en servidores de producción, analizando logs de servidor, queries bloqueantes y estabilidad del servicio.',
    focus: 'Continuidad de Negocio',
  },
  {
    title: 'Mentoría y Acompañamiento de Equipo',
    category: 'coordination',
    description:
      'Acompañamiento técnico continuo a desarrolladores para resolver bloqueos de implementación, elevar el estándar de código y transferir buenas prácticas.',
    focus: 'Crecimiento del Equipo',
  },
];

export const IMPACT_DOMAINS: ImpactArea[] = [
  {
    title: 'Sistemas Empresariales',
    focusDescription:
      'Construcción y soporte de plataformas corporativas donde la disponibilidad, la consistencia de datos y el soporte multiusuario son mandatorios.',
    tag: 'Empresarial',
    criticality: 'Alta',
  },
  {
    title: 'Integraciones de Misión Crítica',
    focusDescription:
      'Interconexión de sistemas heterogéneos donde el fallo en la transmisión de datos impacta de inmediato en la operación diaria del cliente.',
    tag: 'Integraciones',
    criticality: 'Misión Crítica',
  },
  {
    title: 'Aplicaciones en Tiempo Real',
    focusDescription:
      'Implementación de plataformas con actualización instantánea de estados mediante WebSockets para monitoreo operativo en vivo.',
    tag: 'Tiempo Real',
    criticality: 'Alta',
  },
  {
    title: 'Tecnología en Salud y Sector Clínico',
    focusDescription:
      'Desarrollo e integración de tecnología aplicada al ámbito médico y hospitalario, con estricto apego a la precisión y continuidad operativa.',
    tag: 'Salud & Quirófanos',
    criticality: 'Misión Crítica',
  },
  {
    title: 'Modernización de Sistemas Legados',
    focusDescription:
      'Creación de capas de abstracción y APIs modernas sobre bases de datos y sistemas legados sin alterar su funcionamiento preexistente.',
    tag: 'Modernización',
    criticality: 'Continuidad Operativa',
  },
  {
    title: 'Entornos Productivos e Infraestructura Linux',
    focusDescription:
      'Configuración y mantenimiento de ambientes productivos estables mediante Docker, Nginx, PM2 y servidores Linux.',
    tag: 'Infraestructura',
    criticality: 'Alta',
  },
];
