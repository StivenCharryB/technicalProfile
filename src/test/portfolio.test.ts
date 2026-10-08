import { describe, it, expect } from 'vitest';
import { PROFILE_DATA } from '@/infrastructure/data/profile.data';
import { WHAT_I_DO_CAPABILITIES } from '@/infrastructure/data/what-i-do.data';
import { TECH_STACK_CATEGORIES } from '@/infrastructure/data/stack.data';
import { LIFECYCLE_FLOW_STEPS } from '@/infrastructure/data/flow.data';
import { ENTERPRISE_INTEGRATION_NODES } from '@/infrastructure/data/integration.data';
import { SELECTED_PROJECTS } from '@/infrastructure/data/projects.data';
import { LEADERSHIP_RESPONSIBILITIES } from '@/infrastructure/data/leadership.data';

describe('Integridad de los datos del Portfolio de Stiven Charry', () => {
  it('debe contener los datos completos y roles requeridos de Stiven Charry', () => {
    expect(PROFILE_DATA.name).toBe('STIVEN ALBERTO CHARRY BONILLA');
    expect(PROFILE_DATA.title).toContain('Technical Lead');
    expect(PROFILE_DATA.title).toContain('Backend Engineer');
    expect(PROFILE_DATA.availability.status).toBe(true);
    expect(PROFILE_DATA.pillars.length).toBe(5);
  });

  it('debe tener las 6 capacidades técnicas de What I Do', () => {
    expect(WHAT_I_DO_CAPABILITIES.length).toBe(6);
    const ids = WHAT_I_DO_CAPABILITIES.map((c) => c.id);
    expect(ids).toContain('backend');
    expect(ids).toContain('integrations');
    expect(ids).toContain('leadership');
    expect(ids).toContain('realtime');
    expect(ids).toContain('databases');
    expect(ids).toContain('devops');
  });

  it('debe organizar el stack tecnológico en las categorías obligatorias', () => {
    const categoryIds = TECH_STACK_CATEGORIES.map((cat) => cat.id);
    expect(categoryIds).toContain('backend');
    expect(categoryIds).toContain('architecture');
    expect(categoryIds).toContain('databases');
    expect(categoryIds).toContain('devops');
    expect(categoryIds).toContain('frontend');

    const backendCat = TECH_STACK_CATEGORIES.find((c) => c.id === 'backend');
    const backendTechs = backendCat?.items.map((i) => i.name) || [];
    expect(backendTechs).toContain('Node.js');
    expect(backendTechs).toContain('TypeScript');
    expect(backendTechs).toContain('NestJS');
    expect(backendTechs).toContain('WebSockets');
  });

  it('debe contar con los 9 pasos del ciclo de vida de ingeniería (From Requirement to Production)', () => {
    expect(LIFECYCLE_FLOW_STEPS.length).toBe(9);
    expect(LIFECYCLE_FLOW_STEPS[0].title).toBe('Business Requirement');
    expect(LIFECYCLE_FLOW_STEPS[8].title).toBe('Monitoring & Evolution');
  });

  it('debe incluir los 6 nodos de topología de integración empresarial', () => {
    expect(ENTERPRISE_INTEGRATION_NODES.length).toBe(6);
    const nodeIds = ENTERPRISE_INTEGRATION_NODES.map((n) => n.id);
    expect(nodeIds).toContain('applications');
    expect(nodeIds).toContain('apis');
    expect(nodeIds).toContain('databases');
    expect(nodeIds).toContain('legacy');
    expect(nodeIds).toContain('external');
    expect(nodeIds).toContain('infrastructure');
  });

  it('debe detallar los casos técnicos de estudio sin inventar métricas', () => {
    expect(SELECTED_PROJECTS.length).toBe(3);
    const projectNames = SELECTED_PROJECTS.map((p) => p.name);
    expect(projectNames).toContain('Real-Time Operating Room Platform');
    expect(projectNames).toContain('Enterprise Appointment Integration');
    expect(projectNames).toContain('Healthcare Systems Integration');

    SELECTED_PROJECTS.forEach((proj) => {
      expect(proj.problem.length).toBeGreaterThan(20);
      expect(proj.solution.length).toBeGreaterThan(20);
      expect(proj.architecture.length).toBeGreaterThan(20);
      expect(proj.result.length).toBeGreaterThan(20);
      expect(proj.technologies.length).toBeGreaterThan(0);
    });
  });

  it('debe incluir las responsabilidades de liderazgo técnico requeridas', () => {
    expect(LEADERSHIP_RESPONSIBILITIES.length).toBeGreaterThanOrEqual(9);
    const titles = LEADERSHIP_RESPONSIBILITIES.map((r) => r.title);
    expect(titles).toContain('Technical Decision Making');
    expect(titles).toContain('Architecture Definition');
    expect(titles).toContain('Code & Solution Review');
    expect(titles).toContain('Production Support');
  });
});
