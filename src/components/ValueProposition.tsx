import { Icon } from './Icon';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function ValueProposition() {
  const [ref, isVisible] = useScrollAnimation();

  const valueProps = [
    {
      title: 'Innovative Products',
      description: 'Purpose-built technology products designed for real-world business needs.',
      icon: 'sparkles',
      iconBg: 'bg-blue-50 text-blue-600',
      delay: 'animate-on-scroll-delay-1',
    },
    {
      title: 'Custom Solutions',
      description: 'Technology designed around the unique requirements of each client.',
      icon: 'target',
      iconBg: 'bg-purple-50 text-purple-600',
      delay: 'animate-on-scroll-delay-2',
    },
    {
      title: 'Trusted Partnership',
      description: 'Long-term technology partnerships focused on sustainable value.',
      icon: 'handshake',
      iconBg: 'bg-emerald-50 text-emerald-600',
      delay: 'animate-on-scroll-delay-3',
    }
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className="bg-surface py-20 w-full"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-8 border border-border-light premium-card hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-on-scroll ${prop.delay} ${isVisible ? 'is-visible' : ''}`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${prop.iconBg}`}>
                <Icon name={prop.icon as any} size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-text-primary">
                {prop.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
