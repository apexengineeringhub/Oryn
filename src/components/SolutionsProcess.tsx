import { useState } from 'react';
import { processSteps } from '../data/siteData';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function SolutionsProcess() {
  const [ref, isVisible] = useScrollAnimation();
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="mt-20">
      {/* Desktop Timeline */}
      <div className="hidden lg:flex flex-row items-start justify-between relative w-full">
        {/* Connecting Line Background */}
        <div className="absolute top-6 left-[7%] right-[7%] h-[2px] bg-gray-200 -z-10 rounded-full" />
        
        {/* Connecting Line Active (Animated Gradient) */}
        <div className="absolute top-6 left-[7%] right-[7%] h-[2px] -z-10 rounded-full overflow-hidden">
          <div 
            className="w-full h-full bg-gradient-to-r from-oryn-blue to-oryn-violet origin-left transition-transform duration-[1500ms] ease-out"
            style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}
          />
        </div>

        {processSteps.map((step, index) => {
          const delay = index * 150;
          const isHovered = hoveredStep === index;

          return (
            <div
              key={step.number}
              className="flex flex-col items-center relative group w-[14%]"
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
              }}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 z-10 ${
                  isHovered
                    ? 'bg-gradient-to-r from-oryn-blue to-oryn-violet text-white shadow-lg scale-110 border-none'
                    : 'bg-white text-oryn-blue shadow-[inset_0_0_0_2px_currentColor]'
                }`}
              >
                {step.number}
              </div>
              <h4 className={`text-sm font-semibold mt-4 transition-colors duration-300 ${isHovered ? 'text-oryn-blue' : 'text-text-primary'}`}>
                {step.title}
              </h4>
              <p className="text-xs text-text-secondary mt-1 text-center max-w-[120px] leading-relaxed transition-opacity duration-300">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile Timeline */}
      <div className="flex flex-col lg:hidden relative pl-6 space-y-10">
        {/* Vertical Line Background */}
        <div className="absolute top-2 bottom-2 left-[23px] w-[2px] bg-gray-200 -z-10 rounded-full" />
        
        {/* Vertical Line Active (Animated Gradient) */}
        <div className="absolute top-2 bottom-2 left-[23px] w-[2px] -z-10 rounded-full overflow-hidden">
          <div 
            className="w-full h-full bg-gradient-to-b from-oryn-blue to-oryn-violet origin-top transition-transform duration-[1500ms] ease-out"
            style={{ transform: isVisible ? 'scaleY(1)' : 'scaleY(0)' }}
          />
        </div>

        {processSteps.map((step, index) => {
          const delay = index * 150;
          const isHovered = hoveredStep === index;

          return (
            <div
              key={step.number}
              className="flex flex-row items-start relative group"
              onClick={() => setHoveredStep(isHovered ? null : index)}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
              }}
            >
              <div
                className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 -ml-[20px] mt-1 z-10 ${
                  isHovered
                    ? 'bg-gradient-to-br from-oryn-blue to-oryn-violet text-white shadow-md scale-110 border-none'
                    : 'bg-white text-oryn-blue shadow-[inset_0_0_0_2px_currentColor]'
                }`}
              >
                {step.number}
              </div>
              <div className="ml-6">
                <h4 className={`text-sm font-semibold transition-colors duration-300 ${isHovered ? 'text-oryn-blue' : 'text-text-primary'}`}>
                  {step.title}
                </h4>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
