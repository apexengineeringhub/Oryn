import { Icon } from './Icon';
import { useScrollAnimation } from '../hooks/useAnimations';

const industries = [
  { name: 'Tax & Finance', icon: 'calculator' },
  { name: 'Education', icon: 'graduation' },
  { name: 'Professional Services', icon: 'briefcase' },
  { name: 'Telecom', icon: 'signal' },
  { name: 'Healthcare', icon: 'heart' },
  { name: 'Business Operations', icon: 'settings' },
  { name: 'Enterprise Technology', icon: 'server' },
] as const;

export default function IndustrySection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-24 bg-off-white" id="industries">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.2em] text-xs text-oryn-blue font-semibold mb-4">
            AREAS WE CAN BUILD FOR
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary">
            Cross-Industry Expertise
          </h2>
        </div>

        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className="flex flex-wrap justify-center gap-3 lg:gap-4"
        >
          {industries.map((industry, index) => (
            <div 
              key={index}
              className={`bg-white rounded-full px-5 py-3 border border-border-light flex items-center gap-2 hover:border-oryn-blue/30 hover:shadow-sm transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <span className="text-text-secondary">
                <Icon name={industry.icon as string} size={18} />
              </span>
              <span className="text-sm font-medium text-text-primary">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
