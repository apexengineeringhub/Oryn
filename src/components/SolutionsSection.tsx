import { useScrollAnimation } from '../hooks/useAnimations';
import SolutionsProcess from './SolutionsProcess';
import BrandWordmark from './BrandWordmark';

export default function SolutionsSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="solutions"
      className="py-24 lg:py-32"
      style={{ backgroundColor: 'var(--color-off-white)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`flex flex-col items-center text-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="solutions-brand-label mb-5 inline-flex items-center" aria-label="ORYN Solutions">
            <BrandWordmark compact className="solutions-brand-wordmark" aria-hidden="true" />
            <span className="oryn-gradient-text solutions-brand-solutions">SOLUTIONS</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-text-primary">
            Your Requirement. Our Technology.
          </h2>
          <p className="text-xl text-text-secondary mt-4 max-w-3xl">
            From an idea to a production-ready solution.
          </p>
          <p className="text-text-secondary max-w-2xl mt-6 leading-relaxed">
            Every business has unique challenges. Oryn Solutions works with clients to understand their requirements, design the right technology solution, build it, integrate it with existing systems, and provide ongoing support.
          </p>
        </div>

        <SolutionsProcess />
      </div>
    </section>
  );
}
