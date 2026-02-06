export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  architecture: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  category: 'api' | 'system' | 'cloud';
}

export interface Skill {
  name: string;
  icon: any; // Changed to any to allow Lucide components directly if needed, or string
  category: 'Languages' | 'Frameworks' | 'Database' | 'Cloud/DevOps' | 'AI & GenAI';
  level?: number; // 1-100
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  skills: string[];
}

export interface NavItem {
  label: string;
  id: string; // Changed path to id for anchor scrolling
}