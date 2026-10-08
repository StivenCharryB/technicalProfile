import { FlowStep } from '@/domain/architecture.types';

export const LIFECYCLE_FLOW_STEPS: FlowStep[] = [
  {
    stepNumber: '01',
    title: 'Requerimiento de Negocio',
    subtitle: 'Comprensión y viabilidad del negocio',
    description:
      'Reunión con stakeholders y equipos de producto para traducir necesidades operativas y estratégicas en objetivos de ingeniería tangibles.',
    keyActivities: [
      'Entendimiento del problema de negocio',
      'Definición de criterios de éxito y SLA',
      'Identificación de restricciones de cumplimiento y seguridad',
    ],
  },
  {
    stepNumber: '02',
    title: 'Análisis Técnico',
    subtitle: 'Evaluación técnica y alcance',
    description:
      'Estudio exhaustivo del ecosistema existente, contratos de datos, dependencias de terceros y análisis de viabilidad técnica.',
    keyActivities: [
      'Mapeo de dependencias e interfaces existentes',
      'Estimación rigurosa de tiempos y esfuerzo',
      'Detección temprana de riesgos arquitectónicos',
    ],
  },
  {
    stepNumber: '03',
    title: 'Arquitectura y Diseño',
    subtitle: 'Modelado y contratos de software',
    description:
      'Definición de la arquitectura por capas, esquemas de bases de datos, protocolos de integración y especificaciones OpenAPI/REST.',
    keyActivities: [
      'Modelado de entidades y bases de datos relacionales',
      'Definición de contratos de API e idempotencia',
      'Selección de patrones de diseño (SOLID, Repository, Adapter)',
    ],
  },
  {
    stepNumber: '04',
    title: 'Desarrollo de Software',
    subtitle: 'Construcción con código limpio y tipado estricto',
    description:
      'Implementación backend en TypeScript/Node.js aplicando estándares de código limpio, modularidad y separación estricta de responsabilidades.',
    keyActivities: [
      'Desarrollo modular desacoplado',
      'Manejo robusto de excepciones y errores de dominio',
      'Optimización de lógica SQL y llamadas a servicios',
    ],
  },
  {
    stepNumber: '05',
    title: 'Integración de Sistemas',
    subtitle: 'Conexión de sistemas y servicios externos',
    description:
      'Articulación segura entre nuevos componentes, bases de datos, sistemas legados, APIs de terceros y colas de comunicación.',
    keyActivities: [
      'Transformación y normalización de payloads',
      'Estrategias de reintentos con backoff exponencial',
      'Pruebas de compatibilidad con sistemas legados',
    ],
  },
  {
    stepNumber: '06',
    title: 'Pruebas y Calidad',
    subtitle: 'Validación de contratos y lógica de negocio',
    description:
      'Ejecución de pruebas unitarias y de integración para garantizar que las reglas de negocio y los casos de borde operen sin fisuras.',
    keyActivities: [
      'Pruebas unitarias de servicios de dominio',
      'Verificación de contratos y respuestas HTTP',
      'Validación de transacciones y consistencia de datos',
    ],
  },
  {
    stepNumber: '07',
    title: 'CI/CD y Automatización',
    subtitle: 'Automatización y empaquetado continuo',
    description:
      'Construcción de imágenes Docker ligeras, análisis estático de código y validación automatizada previa a despliegue con Jenkins o GitHub Actions.',
    keyActivities: [
      'Contenerización con Dockerfiles optimizados multi-stage',
      'Pipeline automatizado de linting y pruebas',
      'Gestión de variables de entorno y secretos seguros',
    ],
  },
  {
    stepNumber: '08',
    title: 'Puesta en Producción',
    subtitle: 'Despliegue coordinado en entornos productivos',
    description:
      'Puesta en marcha en servidores Linux gestionados con Nginx/Traefik y PM2, minimizando tiempos de indisponibilidad y coordinando ventanas de release.',
    keyActivities: [
      'Despliegue sin fricción y gestión de rollback',
      'Configuración de reverse proxies y certificados SSL',
      'Coordinación técnica con áreas operativas',
    ],
  },
  {
    stepNumber: '09',
    title: 'Monitoreo y Evolución',
    subtitle: 'Observabilidad y mejora continua',
    description:
      'Seguimiento en vivo del estado del servicio, registros de auditoría, métricas de respuesta y evolución iterativa de la solución.',
    keyActivities: [
      'Monitoreo de latencia y uso de recursos',
      'Revisión de logs y alertas preventivas',
      'Optimización continua de queries y rendimiento',
    ],
  },
];
