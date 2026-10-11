import { Icon } from './Icon';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function CTASection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="contact" className="relative bg-navy py-24 lg:py-32 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] -translate-y-1/2 mix-blend-screen pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Have an Idea or a Business Challenge?
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Let's explore what technology can do for you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:hello@oryntech.in?subject=Let%27s%20build%20with%20Oryn"
              className="w-full sm:w-auto bg-white text-navy px-8 py-4 rounded-lg font-semibold text-sm hover:bg-slate-100 transition btn-shine flex items-center justify-center gap-2"
            >
              Talk to Oryn <Icon name="arrow-right" className="w-4 h-4" />
            </a>
            <a 
              href="#products" 
              className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-sm hover:bg-white/10 transition flex items-center justify-center gap-2"
            >
              Explore Our Products <Icon name="arrow-right" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
