export interface FlowStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  keyActivities: string[];
}

export interface IntegrationNode {
  id: string;
  name: string;
  role: string;
  iconType: 'app' | 'api' | 'db' | 'legacy' | 'cloud' | 'infra';
  description: string;
  protocols: string[];
}

export interface WhatIDoCapability {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  iconType: string;
}
