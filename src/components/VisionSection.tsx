import { useScrollAnimation } from '../hooks/useAnimations';

const sequence = ['Idea', 'Technology', 'Product', 'Business', 'Impact'];

export default function VisionSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="vision" className="py-24 lg:py-32" style={{ backgroundColor: 'var(--color-off-white)' }}>
      <style>{`
        @keyframes trail-x {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .trail-anim-x {
          animation: trail-x 2s infinite linear;
        }
        @keyframes trail-y {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .trail-anim-y {
          animation: trail-y 2s infinite linear;
        }
      `}</style>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-5xl mx-auto px-6 text-center transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6 text-gray-900">
          Ideas Today. Solutions Tomorrow.
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-16">
          We are building a technology company where ideas can evolve into products, platforms and solutions that create meaningful value.
        </p>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2 overflow-hidden rounded-full">
            <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent trail-anim-x shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          </div>

          {/* Connecting line - mobile */}
          <div className="lg:hidden absolute top-0 left-1/2 w-[2px] h-full bg-gray-200 -translate-x-1/2 overflow-hidden rounded-full">
             <div className="h-1/3 w-full bg-gradient-to-b from-transparent via-blue-500 to-transparent trail-anim-y shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4 relative z-10">
            {sequence.map((word) => (
              <div key={word} className="bg-white border border-gray-100 rounded-xl px-6 py-4 shadow-sm text-gray-800 font-semibold min-w-[120px]">
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
