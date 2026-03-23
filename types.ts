export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  architecture: string;
  techStack: string[];
  challenges: string;
  scaling: string;
  devops: string;
  aiIntegration: string;
  impact: string;
  githubUrl: string;
  demoUrl?: string;
  category: 'api' | 'system' | 'cloud';
}

export interface Skill {
  name: string;
  icon: any;
  category: 'Languages' | 'Frameworks' | 'Database' | 'Cloud/DevOps' | 'AI & GenAI';
  description: string; // Added description for real-world usage
  level?: number;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  skills: string[];
}

export interface NavItem {
  label: string;
  id: string;
}