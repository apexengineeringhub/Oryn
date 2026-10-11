import { Icon } from './Icon';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function AboutSection() {
  const [ref, isVisible] = useScrollAnimation();

  const capabilities = [
    'Product thinking',
    'Engineering',
    'Business understanding',
    'Modern technology',
    'Long-term partnership'
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-6xl mx-auto px-6 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
          
          <div className="w-full lg:w-[55%]">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-gray-900">
              Technology for Real Progress
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              We believe technology should simplify complexity, empower people and create lasting impact.
            </p>
            <ul className="mb-10 space-y-3">
              {capabilities.map(cap => (
                <li key={cap} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-oryn-blue"></span>
                  <span className="text-sm text-text-secondary">{cap}</span>
                </li>
              ))}
            </ul>
            <a href="#vision" className="inline-flex items-center gap-2 text-oryn-blue font-semibold hover:opacity-80 transition-opacity">
              Know Our Story <Icon name="arrow-right" className="w-4 h-4" />
            </a>
          </div>

          <div className="w-full lg:w-[45%]">
            <div className="relative mx-auto w-full max-w-xl aspect-[1.08/1] min-h-[320px]">
              <div aria-hidden="true" className="absolute inset-5 rounded-[2rem] bg-gradient-to-br from-blue-100 via-white to-violet-100 rotate-3" />
              <div className="absolute inset-2 rounded-[1.7rem] border border-slate-200/80 bg-white/90 p-4 shadow-[0_28px_80px_-30px_rgba(15,23,42,0.28)] sm:inset-4 sm:p-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white">O</div>
                    <div><p className="text-sm font-bold text-slate-900">ORYN WORKSPACE</p><p className="text-xs text-slate-500">Ideas into impact</p></div>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Built to evolve</span>
                </div>
                <div className="grid grid-cols-2 gap-3 py-4 sm:gap-4">
                  <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-3 sm:p-4">
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white"><Icon name="layers" className="h-5 w-5" /></div>
                    <p className="text-xs text-slate-500">Product thinking</p><p className="mt-1 text-sm font-bold text-slate-900 sm:text-base">Purposeful products</p>
                  </div>
                  <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-3 sm:p-4">
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white"><Icon name="code" className="h-5 w-5" /></div>
                    <p className="text-xs text-slate-500">Engineering</p><p className="mt-1 text-sm font-bold text-slate-900 sm:text-base">Reliable by design</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 sm:p-5">
                  <p className="mb-4 text-sm font-semibold text-slate-800">From idea to real-world impact</p>
                  <div className="flex items-center justify-between gap-1 sm:gap-2">
                    {[['01','Idea'],['02','Design'],['03','Build'],['04','Impact']].map(([number, label], index) => (
                      <div key={number} className="flex min-w-0 flex-1 items-center gap-1 sm:gap-2">
                        <div className="min-w-0 text-center"><div className={`mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${index === 3 ? 'bg-gradient-to-br from-blue-600 to-violet-600 text-white' : 'bg-white text-blue-700 ring-1 ring-slate-200'}`}>{number}</div><span className="text-[10px] font-medium text-slate-600 sm:text-xs">{label}</span></div>
                        {index < 3 && <div className="mb-5 h-px flex-1 bg-gradient-to-r from-blue-200 to-violet-200" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-1 -left-1 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-lg sm:bottom-2 sm:left-0"><p className="text-xs text-slate-500">Our approach</p><p className="text-sm font-semibold text-slate-900">People + Product + Technology</p></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
