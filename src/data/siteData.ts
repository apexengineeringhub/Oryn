export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  status: 'flagship' | 'coming-soon' | 'available';
  tags?: string[];
  accentColor: string;
  accentGradient: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Capability {
  title: string;
  description: string;
  icon: string;
}

export interface TechGroup {
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  name: string;
  icon: string;
}

export const products: Product[] = [
  {
    id: 'taxoryn',
    name: 'Taxoryn',
    category: 'Tax & Compliance Platform',
    description:
      'A configurable platform designed to simplify tax, compliance and practice management for professionals and businesses.',
    status: 'flagship',
    tags: ['GST', 'TDS', 'ITR', 'Compliance', 'Practice Management'],
    accentColor: '#2563eb',
    accentGradient: 'from-blue-600 to-blue-400',
    ctaText: 'Explore Taxoryn',
    ctaLink: 'https://taxoryn.com',
  },
  {
    id: 'eduoryn',
    name: 'Eduoryn',
    category: 'Education Management Platform',
    description:
      'A smarter way for schools to connect student records, teachers, attendance, fees and everyday campus operations.',
    status: 'coming-soon',
    accentColor: '#7c3aed',
    accentGradient: 'from-violet-600 to-violet-400',
  },
  {
    id: 'servoryn',
    name: 'Servoryn',
    category: 'Service & Business Management Platform',
    description:
      'A clearer way to manage customers, service requests, team schedules, invoices and day-to-day business workflows.',
    status: 'coming-soon',
    accentColor: '#10b981',
    accentGradient: 'from-emerald-600 to-emerald-400',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the business, problem and requirements.',
  },
  {
    number: '02',
    title: 'Define',
    description: 'Convert business requirements into a clear solution strategy.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Design the user experience, architecture and technology solution.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'Engineer the solution using modern development practices.',
  },
  {
    number: '05',
    title: 'Integrate',
    description:
      'Connect APIs, databases, third-party systems and existing platforms.',
  },
  {
    number: '06',
    title: 'Deploy',
    description:
      'Release the solution into production with security, scalability and reliability.',
  },
  {
    number: '07',
    title: 'Evolve',
    description:
      'Provide continuous improvements, support and future enhancements.',
  },
];

export const solutionCapabilities: Capability[] = [
  {
    title: 'Build From Scratch',
    description: 'Turn a business idea into a complete digital product.',
    icon: 'rocket',
  },
  {
    title: 'Modernize Existing Systems',
    description:
      'Modernize legacy applications, architectures and technology platforms.',
    icon: 'refresh',
  },
  {
    title: 'Business Platforms',
    description:
      'Build configurable platforms designed around specific business domains.',
    icon: 'layers',
  },
  {
    title: 'System Integration',
    description:
      'Connect applications, APIs, databases and third-party systems.',
    icon: 'link',
  },
  {
    title: 'Process Automation',
    description:
      'Transform manual processes into digital workflows and automation.',
    icon: 'zap',
  },
  {
    title: 'Product Extension',
    description:
      'Build new modules, features and integrations for existing products.',
    icon: 'puzzle',
  },
];

export const techGroups: TechGroup[] = [
  {
    title: 'Application Engineering',
    description: 'Java, Spring Boot, React and modern web technologies.',
    icon: 'code',
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'AWS, Docker, Kubernetes and scalable cloud architecture.',
    icon: 'cloud',
  },
  {
    title: 'Data & Integration',
    description:
      'PostgreSQL, Oracle, MongoDB, APIs and event-driven architecture.',
    icon: 'database',
  },
  {
    title: 'AI & Automation',
    description:
      'AI-powered workflows, intelligent automation and business process optimization.',
    icon: 'brain',
  },
  {
    title: 'Enterprise Architecture',
    description:
      'Microservices, security, observability, reliability and scalable distributed systems.',
    icon: 'shield',
  },
];

export const industries: Industry[] = [
  { name: 'Tax & Finance', icon: 'calculator' },
  { name: 'Education', icon: 'graduation' },
  { name: 'Professional Services', icon: 'briefcase' },
  { name: 'Telecom', icon: 'signal' },
  { name: 'Healthcare', icon: 'heart' },
  { name: 'Business Operations', icon: 'settings' },
  { name: 'Enterprise Technology', icon: 'server' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Oryn Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];
