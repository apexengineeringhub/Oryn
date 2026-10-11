import { Icon } from './Icon';
import { products } from '../data/siteData';
import { useScrollAnimation } from '../hooks/useAnimations';

const comingSoonFeatures: Record<string, string[]> = {
  eduoryn: ['Students & staff', 'Attendance & fees', 'School insights'],
  servoryn: ['Clients & work orders', 'Scheduling & tasks', 'Invoices & analytics'],
};

export default function ProductsSection() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation();

  return (
    <section id="products" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`mx-auto mb-16 max-w-2xl text-center transition-all duration-700 transform ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-oryn-blue">
            OUR PRODUCTS
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            Purpose-built products. More on the way.
          </h2>
          <p className="text-lg text-slate-500">
            Explore the Oryn product ecosystem—one live platform today, with more focused solutions taking shape for the future.
          </p>
        </div>

        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {products.map((product, index) => {
            const isVisible = cardsVisible;
            const isFlagship = product.status === 'flagship';
            const isEduoryn = product.id === 'eduoryn';
            const isServoryn = product.id === 'servoryn';
            const accent = isEduoryn ? '#7545F5' : isServoryn ? '#008F75' : product.accentColor;
            const visualBackground = isEduoryn
              ? 'radial-gradient(circle at 80% 15%, rgba(167,139,250,.27), transparent 42%), linear-gradient(135deg,#faf9ff 0%,#f0ebff 100%)'
              : isServoryn
                ? 'radial-gradient(circle at 80% 15%, rgba(52,211,153,.23), transparent 42%), linear-gradient(135deg,#f5fffc 0%,#e5f8f2 100%)'
                : 'linear-gradient(135deg,#f5f8ff 0%,#edf3ff 100%)';
            const previewSrc = isFlagship
              ? '/taxoryn-workspace-preview.svg'
              : isEduoryn
                ? '/eduoryn-dashboard-preview.webp'
                : '/servoryn-dashboard-preview.webp';
            const previewAlt = isFlagship
              ? 'Taxoryn practice workspace preview showing client management, compliance tracking, documents, tasks and recent activity'
              : isEduoryn
                ? 'Eduoryn school management dashboard concept showing student and teacher metrics, attendance, fees, class distribution and school activity'
                : 'Servoryn service management dashboard concept showing work orders, scheduling, team status, invoices and service performance';

            return (
              <div
                key={product.id}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <article className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isFlagship
                    ? 'border-blue-200 shadow-lg shadow-blue-500/5 ring-1 ring-blue-500/10'
                    : 'border-slate-200 shadow-sm hover:border-slate-300'
                }`}>
                  {/* Product preview */}
                  <div
                    className="relative h-64 overflow-hidden border-b border-slate-200 sm:h-72"
                    style={{ background: visualBackground }}
                  >
                    <div className="pointer-events-none absolute -right-10 -top-14 h-44 w-44 rounded-full border border-white/70" />
                    <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full border border-white/70" />
                    <div className="absolute left-5 top-5 z-20">
                      {isFlagship ? (
                        <span className="inline-flex items-center rounded-lg bg-blue-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md shadow-blue-900/10">
                          Live Product
                        </span>
                      ) : (
                        <span
                          className="inline-flex items-center gap-2 rounded-lg border border-white/90 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider shadow-md backdrop-blur-sm"
                          style={{ color: accent }}
                        >
                          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                          Coming Soon
                        </span>
                      )}
                    </div>
                    {!isFlagship && (
                      <div
                        className="absolute right-5 top-5 z-20 rounded-full border border-white/80 bg-white/75 px-3 py-1 text-[10px] font-semibold backdrop-blur-sm"
                        style={{ color: accent }}
                      >
                        Product preview
                      </div>
                    )}
                    <div className={`absolute inset-x-3 bottom-2 top-12 flex items-center justify-center sm:inset-x-4 ${isFlagship ? 'top-11' : ''}`}>
                      <img
                        src={previewSrc}
                        alt={previewAlt}
                        className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.025] ${isFlagship ? 'object-cover object-center' : 'object-contain object-center drop-shadow-[0_12px_18px_rgba(30,41,59,0.10)]'}`}
                        loading="lazy"
                      />
                    </div>
                    {!isFlagship && (
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/30 to-transparent" />
                    )}
                  </div>

                  {/* Product details */}
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="mb-2 text-sm font-medium text-slate-500">{product.category}</div>
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-slate-900">{product.name}</h3>
                    <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600">{product.description}</p>

                    {isFlagship ? (
                      product.tags && product.tags.length > 0 && (
                        <div className="mb-6 flex flex-wrap gap-2">
                          {product.tags.map((tag) => (
                            <span key={tag} className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )
                    ) : (
                      <div className="mb-6 flex flex-wrap gap-2">
                        {(comingSoonFeatures[product.id] || []).map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium"
                            style={{ color: accent, backgroundColor: `${accent}0B`, borderColor: `${accent}24` }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                      {isFlagship ? (
                        <a
                          href={product.ctaLink || '#'}
                          className="group/link inline-flex items-center text-sm font-semibold transition-opacity hover:opacity-80"
                          style={{ color: accent }}
                        >
                          {product.ctaText || 'Explore Taxoryn'}
                          <Icon name="arrow-right" className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: accent }}>
                          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
                          In development
                        </span>
                      )}
                      {!isFlagship && <span className="text-xs font-medium text-slate-400">A future Oryn product</span>}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        <div className={`mt-14 text-center text-sm text-slate-400 transition-all duration-700 delay-500 transform ${
          cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          Thoughtfully designed products, built around real-world needs.
        </div>
      </div>
    </section>
  );
}
