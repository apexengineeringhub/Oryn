import { Icon } from './Icon';
import risingSunArt from '../assets/oryn-sunrise-blended.jpg';

const principles = [
  { icon: 'lightbulb', title: 'Innovate', subtitle: 'New possibilities', tone: 'amber' },
  { icon: 'layers', title: 'Build', subtitle: 'Scalable products', tone: 'blue' },
  { icon: 'settings', title: 'Solve', subtitle: 'Real problems', tone: 'orange' },
  { icon: 'signal', title: 'Create Impact', subtitle: 'A better tomorrow', tone: 'violet' },
];

const toneClasses: Record<string, string> = {
  amber: 'bg-amber-50/90 text-amber-600 ring-amber-100',
  blue: 'bg-blue-50/90 text-blue-600 ring-blue-100',
  orange: 'bg-orange-50/90 text-orange-600 ring-orange-100',
  violet: 'bg-violet-50/90 text-violet-600 ring-violet-100',
};

export default function Hero() {
  return (
    <section id="home" className="oryn-hero relative isolate overflow-hidden bg-[#f8f9fc]">
      {/* Scenic artwork is blended into the hero; the tagline is live, accessible text. */}
      <div className="oryn-hero-sunrise pointer-events-none absolute right-0 z-0" aria-hidden="true">
        <img src={risingSunArt} alt="" className="h-full w-full object-cover" fetchPriority="high" />
      </div>
      <div className="oryn-hero-wash pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div className="oryn-sunrise-tagline pointer-events-none absolute z-10" aria-label="Ideas today. A brighter tomorrow.">
        <span>Ideas today.</span>
        <span className="oryn-sunrise-tagline-second">A brighter tomorrow.</span>
        <span className="oryn-sunrise-tagline-stroke" aria-hidden="true" />
      </div>

      <div className="container relative z-10 mx-auto w-full px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="oryn-hero-main grid grid-cols-1 items-center lg:grid-cols-[minmax(0,1.04fr)_minmax(300px,.96fr)]">
          <div className="oryn-hero-copy hero-fade-up relative z-10 max-w-[700px] py-8 sm:py-10 lg:py-12">
            <div className="hero-fade-up-delay-1 mb-5 flex items-center gap-3 sm:mb-6">
              <span className="h-[2px] w-8 rounded-full bg-amber-500 sm:w-10" />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-slate-600 sm:text-xs">Technology Origin</span>
              <span className="h-[2px] w-8 rounded-full bg-amber-500 sm:w-10" />
            </div>

            <h1 className="hero-fade-up-delay-2 mb-5 max-w-[650px] text-[clamp(2.45rem,4vw,4.15rem)] font-bold leading-[0.99] tracking-[-0.055em] text-[#101d45]">
              Where Ideas<br />Become <span className="oryn-gradient-text relative inline-block">Solutions<span className="oryn-solution-underline" aria-hidden="true" /></span>
            </h1>

            <p className="hero-fade-up-delay-3 mb-6 max-w-[590px] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Oryn Technology builds innovative software products and custom technology solutions that help businesses, institutions and communities grow, simplify work and create lasting impact.
            </p>

            <div className="hero-fade-up-delay-4 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href="#products" className="btn-shine group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-[#0d1b38] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:shadow-xl sm:px-7 sm:text-base">
                Explore Our Products <Icon name="arrow-right" size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300/90 bg-white/90 px-6 py-3 text-sm font-semibold text-[#101d45] shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white sm:px-7 sm:text-base">
                Talk to Our Team
              </a>
            </div>
            <p className="oryn-mobile-tagline mt-5 text-sm font-semibold tracking-wide text-[#263a68] lg:hidden">
              <span className="mr-3 inline-block h-[2px] w-7 -translate-y-1 rounded-full bg-amber-500" aria-hidden="true" />
              Ideas today. A brighter tomorrow.
            </p>
          </div>

          {/* Spacer reserves a deliberate image column without a card border or boxed look. */}
          <div className="oryn-hero-image-space hidden lg:block" aria-hidden="true" />
        </div>

        <div className="oryn-principles relative z-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/80 bg-white/70 shadow-[0_12px_45px_rgba(20,38,80,0.07)] backdrop-blur-md sm:grid-cols-4">
          {principles.map((item, index) => (
            <div key={item.title} className={`flex min-w-0 items-center justify-center gap-3 px-3 py-3 sm:px-4 sm:py-3.5 lg:gap-3 ${index > 0 ? 'sm:border-l sm:border-slate-300/80' : ''} ${index > 1 ? 'border-t border-slate-200/80 sm:border-t-0' : ''}`}>
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ring-1 sm:h-10 sm:w-10 ${toneClasses[item.tone]}`}>
                <Icon name={item.icon} size={20} />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-sm font-bold leading-5 text-[#101d45] sm:text-base">{item.title}</span>
                <span className="mt-0.5 block text-xs leading-4 text-slate-500 sm:text-sm">{item.subtitle}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
