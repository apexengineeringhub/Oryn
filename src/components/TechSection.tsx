import { Icon } from './Icon';
import { useScrollAnimation } from '../hooks/useAnimations';

const techGroups = [
  { title: 'Application Engineering', description: 'Java, Spring Boot, React and modern web technologies.', icon: 'code' },
  { title: 'Cloud & Infrastructure', description: 'AWS, Docker, Kubernetes and scalable cloud architecture.', icon: 'cloud' },
  { title: 'Data & Integration', description: 'PostgreSQL, Oracle, MongoDB, APIs and event-driven architecture.', icon: 'database' },
  { title: 'AI & Automation', description: 'AI-powered workflows, intelligent automation and business process optimization.', icon: 'brain' },
  { title: 'Enterprise Architecture', description: 'Microservices, security, observability, reliability and scalable distributed systems.', icon: 'shield' },
] as const;

export default function TechSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="relative py-24 lg:py-32 bg-navy text-white overflow-hidden" id="technology">
      {/* Subtle glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-oryn-blue/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Technology That Scales With Your Ambition
          </h2>
          <p className="text-slate-400">
            We leverage modern, battle-tested technologies to build robust systems that are secure, scalable, and maintainable.
          </p>
        </div>

        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6 justify-center"
        >
          {techGroups.map((tech, index) => (
            <div 
              key={index}
              className={`bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-oryn-blue mb-3">
                <Icon name={tech.icon as string} size={24} />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">
                {tech.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
