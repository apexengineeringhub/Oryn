import { Icon } from './Icon';
import { products } from '../data/siteData';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function ProductsSection() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation();

  return (
    <section id="products" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 transform ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="uppercase tracking-[0.2em] text-xs text-oryn-blue font-semibold mb-4">
            OUR PRODUCTS
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-slate-900">
            Building Products for a Smarter Tomorrow
          </h2>
          <p className="text-slate-500 text-lg">
            Oryn develops focused technology products designed to solve real-world business challenges. Our product ecosystem is growing, with new solutions currently in development.
          </p>
        </div>

        <div 
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {products.map((product, index) => {
            const isVisible = cardsVisible;
            const delay = index * 150;
            const isFlagship = product.status === 'flagship';
            
            return (
              <div
                key={product.id}
                className={`transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className={`h-full bg-white rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isFlagship ? 'border-slate-200 shadow-lg shadow-blue-500/5 ring-1 ring-blue-500/10' : 'border-slate-200'
                }`}>
                  {/* Top Visual Area */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-50 border-b border-slate-200 flex items-center justify-center">
                    {isFlagship ? (
                      <div className="absolute inset-0 bg-[#f5f7fc]">
                        <img
                          src="/taxoryn-workspace-preview.svg"
                          alt="Taxoryn practice workspace preview showing client management, compliance tracking, documents, tasks, upcoming compliance and recent activity"
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/10" />
                      </div>
                    ) : (
                      // Consistent, lightweight concept preview for products in development
                      <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 px-6 py-5">
                        <div className="absolute -right-8 -top-10 h-44 w-44 rounded-full blur-3xl opacity-20" style={{ backgroundColor: product.accentColor }} />
                        <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full blur-3xl opacity-15" style={{ backgroundColor: product.accentColor }} />
                        <div className="relative z-10 w-full max-w-sm rounded-2xl border border-white/90 bg-white/95 p-4 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.22)] transition-transform duration-500 hover:-translate-y-1">
                          <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                            <div className="flex items-center gap-2.5"><div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ backgroundColor: `${product.accentColor}18`, color: product.accentColor }}><Icon name={product.id === 'eduoryn' ? 'graduation' : 'briefcase'} className="h-4 w-4" /></div><div><div className="h-2.5 w-24 rounded-full bg-slate-200"/><div className="mt-1.5 h-2 w-16 rounded-full bg-slate-100"/></div></div>
                            <span className="rounded-full px-2 py-1 text-[9px] font-semibold uppercase tracking-wide" style={{ backgroundColor: `${product.accentColor}12`, color: product.accentColor }}>Preview</span>
                          </div>
                          <div className="mb-3 grid grid-cols-3 gap-2">
                            {[0,1,2].map((item) => <div key={item} className="rounded-lg border border-slate-100 bg-slate-50 p-2"><div className="mb-2 h-2 w-8 rounded-full bg-slate-200"/><div className="h-4 rounded" style={{ backgroundColor: `${product.accentColor}${item === 1 ? '30' : '18'}`, width: `${65 + item * 10}%` }}/></div>)}
                          </div>
                          <div className="flex h-14 items-end gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 pt-3">
                            {[35,60,45,78,55,90,68,82,48,72].map((height, item) => <div key={item} className="flex-1 rounded-t-sm" style={{ height: `${height}%`, backgroundColor: product.accentColor, opacity: 0.18 + (item % 4) * 0.16 }} />)}
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Status Badge */}
                    <div className="absolute top-5 left-5 z-20">
                      {isFlagship ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-blue-600 text-white shadow-sm">
                          Flagship Product
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-white/90 text-slate-600 backdrop-blur-sm border border-slate-200 shadow-sm">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="mb-2 text-sm font-medium text-slate-500">
                      {product.category}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-6 flex-1 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Tags */}
                    {product.tags && product.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-8">
                        {product.tags.map(tag => (
                          <span key={tag} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTA */}
                    <div className="mt-auto pt-5 border-t border-slate-100">
                      {isFlagship ? (
                        <a 
                          href={product.ctaLink || '#'} 
                          className="inline-flex items-center text-sm font-semibold hover:opacity-80 transition-opacity group"
                          style={{ color: product.accentColor }}
                        >
                          {product.ctaText || 'Explore Taxoryn'}
                          <Icon name="arrow-right" className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-slate-400 flex items-center">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className={`mt-16 text-center text-sm text-slate-400 transition-all duration-700 transform delay-500 ${
          cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          More products are on the way.
        </div>
      </div>
    </section>
  );
}
