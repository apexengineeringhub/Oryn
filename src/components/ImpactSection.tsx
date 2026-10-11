import { useScrollAnimation } from '../hooks/useAnimations';

export default function ImpactSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-24" style={{ backgroundColor: 'var(--color-off-white)' }}>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-0 xl:divide-x lg:divide-gray-200/60">
          
          <div className="text-center px-4 min-w-0">
            <div className="text-xs uppercase tracking-wider text-text-tertiary mb-2">Products</div>
            <div className="text-4xl lg:text-5xl font-bold oryn-gradient-text">3</div>
            <div className="text-sm text-text-secondary mt-2 leading-relaxed">Taxoryn + upcoming products</div>
          </div>
          
          <div className="text-center px-4 min-w-0">
            <div className="text-xs uppercase tracking-wider text-text-tertiary mb-2">Architecture</div>
            <div className="text-3xl sm:text-4xl xl:text-[clamp(1.65rem,2.3vw,2.75rem)] font-bold leading-tight break-words oryn-gradient-text">Scalable</div>
            <div className="text-sm text-text-secondary mt-2 leading-relaxed">Designed for growth</div>
          </div>
          
          <div className="text-center px-4 min-w-0">
            <div className="text-xs uppercase tracking-wider text-text-tertiary mb-2">Approach</div>
            <div className="text-3xl sm:text-4xl xl:text-[clamp(1.55rem,2vw,2.45rem)] font-bold leading-tight break-words oryn-gradient-text">Configurable</div>
            <div className="text-sm text-text-secondary mt-2 leading-relaxed">Built around business requirements</div>
          </div>
          
          <div className="text-center px-4 min-w-0">
            <div className="text-xs uppercase tracking-wider text-text-tertiary mb-2">Partnership</div>
            <div className="text-3xl sm:text-4xl xl:text-[clamp(1.65rem,2.3vw,2.75rem)] font-bold leading-tight break-words oryn-gradient-text">Long-Term</div>
            <div className="text-sm text-text-secondary mt-2 leading-relaxed">Technology beyond initial delivery</div>
          </div>

        </div>
      </div>
    </section>
  );
}
