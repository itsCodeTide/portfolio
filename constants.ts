import { Project, Skill, NavItem, TimelineItem } from './types';

export const PROFILE = {
  name: "Labh Jethe",
  title: "Cloud-Native Backend Engineer",
  subtitle: "Java, Spring Boot & Distributed Systems",
  email: "labhjethe498@gmail.com",
  github: "https://github.com/itsCodeTide",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com/itsCodeTide",
  location: "India",
  aboutShort: "Cloud-Native Backend Engineer focused on building scalable, reliable, and maintainable backend systems."
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Timeline", id: "journey" },
  { label: "Contact", id: "contact" },
];

export const SKILLS: Skill[] = [
  // AI & GenAI (New High Value Section)
  { name: "OpenAI / LLMs", icon: "Sparkles", category: "AI & GenAI" },
  { name: "RAG Pipelines", icon: "BrainCircuit", category: "AI & GenAI" },
  { name: "Vector DBs (Pinecone)", icon: "DatabaseZap", category: "AI & GenAI" },
  { name: "LangChain", icon: "Bot", category: "AI & GenAI" },

  // Languages
  { name: "Java Core / 21", icon: "Coffee", category: "Languages" },
  { name: "Python", icon: "FileCode", category: "Languages" },
  { name: "SQL / NoSQL", icon: "Database", category: "Languages" },
  
  // Frameworks & Architecture
  { name: "Spring Boot 3", icon: "Leaf", category: "Frameworks" },
  { name: "FastAPI", icon: "Zap", category: "Frameworks" },
  { name: "Microservices", icon: "Network", category: "Frameworks" },
  { name: "RESTful APIs", icon: "Globe", category: "Frameworks" },
  { name: "GraphQL", icon: "Share2", category: "Frameworks" },
  { name: "gRPC", icon: "ArrowRightLeft", category: "Frameworks" },
  { name: "Kafka", icon: "Activity", category: "Frameworks" },

  // Database & Tools
  { name: "PostgreSQL", icon: "Database", category: "Database" },
  { name: "Redis", icon: "Layers", category: "Database" },
  { name: "MongoDB", icon: "Files", category: "Database" },

  // Cloud & DevOps
  { name: "AWS Services", icon: "Server", category: "Cloud/DevOps" },
  { name: "Docker & K8s", icon: "Container", category: "Cloud/DevOps" },
  { name: "Terraform (IaC)", icon: "Box", category: "Cloud/DevOps" },
  { name: "CI/CD Pipelines", icon: "RefreshCw", category: "Cloud/DevOps" },
  { name: "Prometheus & Grafana", icon: "BarChart3", category: "Cloud/DevOps" },
  { name: "Linux & Git", icon: "Terminal", category: "Cloud/DevOps" },
];

export const JOURNEY: TimelineItem[] = [
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
    title: "High-Concurrency Task API",
    category: "api",
    shortDescription: "Enterprise-grade REST API designed to handle concurrent data updates with high integrity.",
    problem: "Addressed data inconsistency (race conditions) during simultaneous status updates by distributed teams.",
    architecture: "Implemented Optimistic Locking via JPA @Version to ensure ACID compliance. Decoupled notification logic using asynchronous event listeners.",
    techStack: ["Java 17", "Spring Boot", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/itsCodeTide",
  },
  {
    id: "2",
    title: "Centralized Identity Service",
    category: "system",
    shortDescription: "Scalable authentication microservice providing OAuth2/OIDC compliant security.",
    problem: "Needed a stateless, unified identity validation mechanism to eliminate redundant DB lookups across services.",
    architecture: "Engineered a custom Spring Security filter chain with Redis-backed session management for high-performance token validation.",
    techStack: ["Spring Security", "JWT", "Redis", "MySQL"],
    githubUrl: "https://github.com/itsCodeTide",
  },
  {
    id: "3",
    title: "Event-Driven Inventory Engine",
    category: "cloud",
    shortDescription: "Asynchronous microservice for real-time stock reservation and order processing.",
    problem: "Resolved inventory overselling issues during high-traffic spikes caused by blocking synchronous calls.",
    architecture: "Leveraged Apache Kafka for event buffering and sequential processing, ensuring eventual consistency under load.",
    techStack: ["Spring Boot", "Kafka", "Hibernate", "AWS"],
    githubUrl: "https://github.com/itsCodeTide",
  }
];