import { Icon } from './Icon';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function CareersSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="careers" className="py-24 bg-white">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-4xl mx-auto px-6 text-center transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="uppercase tracking-[0.2em] text-xs text-oryn-blue font-semibold mb-4 block">
          CAREERS
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-text-primary">
          Build the Future With Us
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          We're always interested in connecting with thoughtful engineers, designers and problem-solvers
          who care about building useful technology. Share your profile and the kind of work you'd love to do.
        </p>
        <a
          href="mailto:careers@oryntech.in?subject=Careers%20at%20Oryn"
          className="inline-flex items-center gap-2 bg-navy text-white px-7 py-3.5 rounded-lg text-sm font-semibold hover:bg-navy-light transition-colors btn-shine"
        >
          Introduce Yourself
          <Icon name="arrow-right" size={16} />
        </a>
      </div>
    </section>
  );
}
