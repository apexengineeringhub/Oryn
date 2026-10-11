import { useScrollAnimation } from '../hooks/useAnimations';

const steps = [
  'Understand',
  'Simplify',
  'Design',
  'Engineer',
  'Deliver',
  'Improve'
];

export default function HowWeWork() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-24 bg-white">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-5xl mx-auto px-6 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
          From Complexity to Clarity
        </h2>
        
        <div className="relative">
          {/* Gradient line for desktop */}
          <div className="hidden lg:block absolute top-[20px] left-[40px] right-[40px] h-[2px] bg-gradient-to-r from-oryn-blue to-oryn-violet opacity-50" />
          
          {/* Gradient line for mobile */}
          <div className="lg:hidden absolute left-[19px] top-[20px] bottom-[20px] w-[2px] bg-gradient-to-b from-oryn-blue to-oryn-violet opacity-50" />

          <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step} className="flex flex-row lg:flex-col items-center gap-6 lg:gap-4 group">
                <div className="relative w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 text-sm font-semibold text-gray-500 transition-colors group-hover:border-blue-200 group-hover:text-blue-600">
                  {index + 1}
                </div>
                <div className="font-semibold text-gray-900 bg-white lg:bg-transparent px-4 py-2 lg:px-0 lg:py-0 rounded-lg shadow-sm border border-gray-50 lg:shadow-none lg:border-none text-base">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
