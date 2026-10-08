export interface LeadershipResponsibility {
  title: string;
  category: 'strategy' | 'execution' | 'coordination';
  description: string;
  focus: string;
}

export interface ImpactArea {
  title: string;
  focusDescription: string;
  tag: string;
  criticality: 'Alta' | 'Misión Crítica' | 'Continuidad Operativa';
}
