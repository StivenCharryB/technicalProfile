export type StackCategoryId =
  | 'backend'
  | 'frontend'
  | 'databases'
  | 'devops'
  | 'architecture';

export interface TechItem {
  name: string;
  category: StackCategoryId;
  highlight?: boolean;
  description?: string;
  tag?: string;
}

export interface StackCategory {
  id: StackCategoryId;
  title: string;
  shortTitle: string;
  description: string;
  items: TechItem[];
}
