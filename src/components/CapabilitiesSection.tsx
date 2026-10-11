import { Icon } from './Icon';
import { useScrollAnimation } from '../hooks/useAnimations';

const solutionCapabilities = [
  { title: 'Build From Scratch', description: 'Turn a business idea into a complete digital product.', icon: 'rocket' },
  { title: 'Modernize Existing Systems', description: 'Modernize legacy applications, architectures and technology platforms.', icon: 'refresh' },
  { title: 'Business Platforms', description: 'Build configurable platforms designed around specific business domains.', icon: 'layers' },
  { title: 'System Integration', description: 'Connect applications, APIs, databases and third-party systems.', icon: 'link' },
  { title: 'Process Automation', description: 'Transform manual processes into digital workflows and automation.', icon: 'zap' },
  { title: 'Product Extension', description: 'Build new modules, features and integrations for existing products.', icon: 'puzzle' },
] as const;

export default function CapabilitiesSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-24 bg-white" id="capabilities">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-text-primary">
          Built Around Your Requirements
        </h2>
        
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutionCapabilities.map((capability, index) => (
            <div 
              key={index}
              className={`bg-surface-alt/50 rounded-xl p-7 border border-border-light hover:border-oryn-blue/20 transition premium-card transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-oryn-blue mb-4">
                <Icon name={capability.icon as string} size={22} />
              </div>
              <h3 className="text-base font-semibold mb-2 text-text-primary">
                {capability.title}
              </h3>
              <p className="text-sm text-text-secondary">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
