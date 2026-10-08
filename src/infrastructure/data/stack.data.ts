import { StackCategory } from '@/domain/stack.types';

export const TECH_STACK_CATEGORIES: StackCategory[] = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    shortTitle: 'Backend',
    description:
      'Construcción de servicios principales, lógica transaccional y capas de API con tipado robusto y patrones limpios.',
    items: [
      { name: 'Node.js', category: 'backend', highlight: true, tag: 'Runtime Principal' },
      { name: 'TypeScript', category: 'backend', highlight: true, tag: 'Tipado Estricto' },
      { name: 'NestJS', category: 'backend', highlight: true, tag: 'Arquitectura Empresarial' },
      { name: 'Express.js', category: 'backend', tag: 'Microservicios / APIs' },
      { name: 'REST APIs', category: 'backend', highlight: true, tag: 'Diseño de Contratos' },
      { name: 'WebSockets', category: 'backend', highlight: true, tag: 'Eventos en Tiempo Real' },
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture & Integration',
    shortTitle: 'Arquitectura',
    description:
      'Diseño estructural para asegurar interoperabilidad, alta cohesión y bajo acoplamiento entre sistemas distribuidos.',
    items: [
      { name: 'Enterprise Integrations', category: 'architecture', highlight: true, tag: 'Conectividad Crítica' },
      { name: 'Microservices / SOA', category: 'architecture', highlight: true, tag: 'Desacoplamiento' },
      { name: 'Legacy Systems Integration', category: 'architecture', highlight: true, tag: 'Modernización' },
      { name: 'Real-Time Systems', category: 'architecture', highlight: true, tag: 'Baja Latencia' },
      { name: 'Distributed Systems', category: 'architecture', tag: 'Resiliencia' },
      { name: 'Layered Architecture', category: 'architecture', tag: 'Mantenibilidad' },
    ],
  },
  {
    id: 'databases',
    title: 'Database Engineering',
    shortTitle: 'Bases de Datos',
    description:
      'Almacenamiento relacional, diseño transaccional ACID, optimización y orquestación con ORMs modernos y query builders.',
    items: [
      { name: 'Microsoft SQL Server', category: 'databases', highlight: true, tag: 'Motor Empresarial / SPs' },
      { name: 'PostgreSQL', category: 'databases', highlight: true, tag: 'Bases de Datos Relacionales' },
      { name: 'Prisma', category: 'databases', highlight: true, tag: 'ORM Type-Safe' },
      { name: 'Sequelize', category: 'databases', tag: 'ORM Relacional' },
      { name: 'Knex', category: 'databases', tag: 'Query Builder' },
      { name: 'Procedimientos Almacenados', category: 'databases', tag: 'Lógica SQL Optimizada' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Infrastructure',
    shortTitle: 'DevOps',
    description:
      'Aprovisionamiento, contenerización y puesta en marcha de aplicaciones en servidores de producción y entornos continuos.',
    items: [
      { name: 'Linux', category: 'devops', highlight: true, tag: 'Servidores & Shell' },
      { name: 'Docker', category: 'devops', highlight: true, tag: 'Contenerización' },
      { name: 'Docker Compose', category: 'devops', tag: 'Orquestación de Servicios' },
      { name: 'Nginx', category: 'devops', highlight: true, tag: 'Reverse Proxy & SSL' },
      { name: 'Traefik', category: 'devops', tag: 'Edge Router Dinámico' },
      { name: 'Jenkins', category: 'devops', tag: 'Pipelines CI/CD' },
      { name: 'PM2', category: 'devops', tag: 'Process Manager en Producción' },
      { name: 'Git & GitHub', category: 'devops', tag: 'Control de Versiones' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & UI Engineering',
    shortTitle: 'Frontend',
    description:
      'Desarrollo de interfaces web modernas y operativas para el consumo de servicios y visualización de datos.',
    items: [
      { name: 'Next.js', category: 'frontend', highlight: true, tag: 'React Server & App Router' },
      { name: 'React', category: 'frontend', highlight: true, tag: 'Componentes Declarativos' },
      { name: 'Angular', category: 'frontend', tag: 'Framework Empresarial' },
      { name: 'SvelteKit', category: 'frontend', tag: 'Rendimiento Reactivo' },
      { name: 'Tailwind CSS', category: 'frontend', highlight: true, tag: 'Sistemas de Diseño' },
    ],
  },
];
