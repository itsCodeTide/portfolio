import { Project, Skill, NavItem, TimelineItem } from './types';

export const PROFILE = {
  name: "Labh Jethe",
  title: "Backend & AI Integration Engineer",
  subtitle: "Building Scalable, High-Performance Distributed Systems",
  email: "labhjethe498@gmail.com",
  github: "https://github.com/itsCodeTide",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com/itsCodeTide",
  location: "India",
  aboutShort: "Results-driven Backend Engineer specializing in high-throughput microservices, cloud infrastructure, and integrating AI models into production environments."
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Activity", id: "activity" },
  { label: "Contact", id: "contact" },
];

export const SKILLS: Skill[] = [
  // AI & GenAI (New High Value Section)
  { name: "OpenAI / LLMs", icon: "Sparkles", category: "AI & GenAI", description: "" },
  { name: "RAG Pipelines", icon: "BrainCircuit", category: "AI & GenAI", description: "" },
  { name: "Vector DBs (Pinecone)", icon: "DatabaseZap", category: "AI & GenAI", description: "" },
  { name: "LangChain", icon: "Bot", category: "AI & GenAI", description: "" },

  // Languages
  { name: "Java Core / 21", icon: "Coffee", category: "Languages", description: "" },
  { name: "Python", icon: "FileCode", category: "Languages", description: "" },
  { name: "JavaScript", icon: "FileJson", category: "Languages", description: "" },
  { name: "TypeScript", icon: "FileCode2", category: "Languages", description: "" },
  { name: "SQL / NoSQL", icon: "Database", category: "Languages", description: "" },
  
  // Frameworks & Architecture
  { name: "Spring Boot 3", icon: "Leaf", category: "Frameworks", description: "" },
  { name: "Node.js", icon: "Server", category: "Frameworks", description: "" },
  { name: "FastAPI", icon: "Zap", category: "Frameworks", description: "" },
  { name: "Microservices", icon: "Network", category: "Frameworks", description: "" },
  { name: "RESTful APIs", icon: "Globe", category: "Frameworks", description: "" },
  { name: "GraphQL", icon: "Share2", category: "Frameworks", description: "" },
  { name: "gRPC", icon: "ArrowRightLeft", category: "Frameworks", description: "" },
  { name: "Kafka", icon: "Activity", category: "Frameworks", description: "" },

  // Database & Tools
  { name: "PostgreSQL", icon: "Database", category: "Database", description: "" },
  { name: "Redis", icon: "Layers", category: "Database", description: "" },
  { name: "MongoDB", icon: "Files", category: "Database", description: "" },

  // Cloud & DevOps
  { name: "AWS Services", icon: "Server", category: "Cloud/DevOps", description: "" },
  { name: "Docker & K8s", icon: "Container", category: "Cloud/DevOps", description: "" },
  { name: "Terraform (IaC)", icon: "Box", category: "Cloud/DevOps", description: "" },
  { name: "CI/CD Pipelines", icon: "RefreshCw", category: "Cloud/DevOps", description: "" },
  { name: "Prometheus & Grafana", icon: "BarChart3", category: "Cloud/DevOps", description: "" },
  { name: "Linux & Git", icon: "Terminal", category: "Cloud/DevOps", description: "" },
];

export const ACTIVITIES = [
  {
    title: "GitLab AI Hackathon",
    location: "Online",
    description: "Developed and deployed 'Cloud Cost Pulse', an AI-driven cloud optimization platform. Competed under the theme 'You Orchestrate. AI Accelerates.' Recognized as a Featured project for innovative AI integration.",
    badge: "Featured",
    highlights: ["AI Cloud Optimization", "Featured Submission"]
  },
  {
    title: "Gemini 3 Hackathon",
    location: "Online",
    description: "Architected and deployed 'ScholarMate', an AI-powered research assistant. Leveraged advanced LLMs to process complex academic papers and generate grounded, hallucination-free summaries and code.",
    highlights: ["LLM Integration", "Document Processing"]
  },
  {
    title: "DigitalOcean Gradient™ AI Hackathon",
    location: "Online",
    description: "Engineered an autonomous digital executive assistant. Designed agentic workflows to handle complex scheduling, task management, and automated information retrieval without human intervention.",
    highlights: ["Agentic Workflows", "Task Automation"]
  }
];

export const EXPERIENCE: TimelineItem[] = [
  {
    year: "Current",
    title: "Backend Engineering Focus",
    description: "Architecting cloud-native microservices with a focus on fault tolerance and scalability. Implementing advanced distributed patterns (Circuit Breaker, Saga) using Spring Cloud and AWS.",
    skills: ["Spring Cloud", "AWS", "System Design", "Microservices"]
  },
  {
    year: "2023",
    title: "Enterprise Application Development",
    description: "Developed production-grade REST APIs compliant with industry security standards. Integrated OAuth2 authentication and optimized SQL queries to reduce latency in high-traffic endpoints.",
    skills: ["Java 17", "Spring Boot", "Spring Security", "PostgreSQL"]
  },
  {
    year: "2022",
    title: "Computer Science Foundations",
    description: "Established a rigorous foundation in Data Structures, Algorithms, and Object-Oriented Design. Built the core competencies required for writing efficient, maintainable, and type-safe code.",
    skills: ["DSA", "OOP", "Database Normalization"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "ScholarMate",
    category: "system",
    shortDescription: "AI-powered research paper assistant that turns papers into grounded summaries, critiques, and reproducible experiments.",
    problem: "Students and researchers struggle to efficiently digest, critique, and experiment with complex research papers, slowing down the pace of innovation.",
    architecture: "Built with a modern tech stack utilizing AI for text summarization, code generation, and slide creation. Processes complex PDFs and extracts structured data.",
    techStack: ["Python", "LangChain", "LLMs", "AI Agents"],
    challenges: "Ensuring grounded, hallucination-free summaries and generating runnable, accurate Python code from paper methodologies.",
    scaling: "Designed to handle large PDFs and complex document parsing efficiently using optimized chunking strategies.",
    devops: "Automated testing and deployment pipelines for reliable releases.",
    aiIntegration: "Deep integration with LLMs for summarization, critique generation, and code synthesis.",
    impact: "Helps researchers move from reading papers to understanding and experimenting with them significantly faster.",
    githubUrl: "https://github.com/itsCodeTide/ScholarMate",
  },
  {
    id: "2",
    title: "Cloud Cost Pulse",
    category: "cloud",
    shortDescription: "AI-powered cloud cost optimization platform that analyzes usage and detects inefficiencies.",
    problem: "Organizations struggle to track, analyze, and optimize their cloud spending across complex, multi-service infrastructures.",
    architecture: "Interactive dashboard backed by an analytical engine that processes cloud usage data and generates actionable insights.",
    techStack: ["Python", "React", "Cloud APIs", "Data Analytics"],
    challenges: "Processing large volumes of billing data and accurately identifying cost anomalies without false positives.",
    scaling: "Capable of analyzing multi-account cloud environments and aggregating data efficiently.",
    devops: "Deployed to Render with automated environment configuration and CI/CD.",
    aiIntegration: "Uses AI to detect inefficiencies and provide smart, actionable cost-saving recommendations based on usage patterns.",
    impact: "Empowers teams to reduce cloud waste and optimize their infrastructure spending through clear, actionable insights.",
    githubUrl: "https://github.com/itsCodeTide/cloud-cost-pulse",
  },
  {
    id: "3",
    title: "Autonomous Digital Executive Assistant",
    category: "api",
    shortDescription: "An autonomous AI agent designed to handle executive tasks, scheduling, and information retrieval.",
    problem: "Executives spend too much time on administrative tasks, scheduling, and basic research, reducing time for strategic work.",
    architecture: "Agentic workflow system capable of interacting with external APIs, managing state, and executing multi-step plans.",
    techStack: ["Python", "LangChain", "Claude", "Agentic AI"],
    challenges: "Building reliable autonomous loops that can handle edge cases and API failures without human intervention.",
    scaling: "Designed to handle concurrent task execution and multiple third-party integrations seamlessly.",
    devops: "Containerized deployment for reliable, isolated execution environments.",
    aiIntegration: "Powered by Claude and LangChain to reason, plan, and execute multi-step tasks autonomously.",
    impact: "Automates routine executive workflows, freeing up significant time for high-level strategic work and decision making.",
    githubUrl: "https://github.com/itsCodeTide/Autonomous-Digital-Executive-Assistant",
  }
];