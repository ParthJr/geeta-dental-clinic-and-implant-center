import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clinicData } from '../config/clinicData';

gsap.registerPlugin(ScrollTrigger);

export const TreatmentPlanningSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const stepsListRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate vertical ruler connector line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: 'top center',
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Animate timeline step cards
      if (stepsListRef.current) {
        const stepItems = stepsListRef.current.children;
        gsap.fromTo(
          stepItems,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.25,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stepsListRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="roadmap"
      ref={containerRef}
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[#F2F4F2] border-b border-[#123C43]/10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#3E665B] font-bold block mb-2">
            [ 05 ] Clinical Process Protocol
          </span>
          <h2 className="font-['Sora'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#00262B]">
            Know What Comes Next.
          </h2>
          <p className="text-sm sm:text-base text-[#41484A] max-w-lg mx-auto mt-3 leading-relaxed">
            A dependable, step-by-step roadmap so you always know what to expect at every phase of
            your dental consultation.
          </p>
        </div>

        {/* Vertical Architectural Ruler Sequence */}
        <div className="relative pl-8 md:pl-16 space-y-8 lg:space-y-10">
          {/* Vertical continuous ruler line */}
          <div
            ref={lineRef}
            className="absolute left-3 md:left-7 top-4 bottom-4 w-px bg-[#123C43]/30"
          />

          <div ref={stepsListRef} className="space-y-8 lg:space-y-10">
            {clinicData.planningSteps.map((stepItem, index) => {
              const hoverColor =
                index === 1 ? 'group-hover:bg-[#C0ECDD]' : 'group-hover:bg-[#D5F06A]';

              return (
                <div key={stepItem.step} className="relative group">
                  {/* Numbered Square Badge on Timeline */}
                  <div
                    className={`absolute -left-8 md:-left-16 top-1 w-6 h-6 md:w-8 md:h-8 rounded-none border border-[#00262B] bg-white flex items-center justify-center font-['Sora'] text-xs md:text-sm font-bold text-[#00262B] ${hoverColor} transition-colors z-10`}
                  >
                    {stepItem.step}
                  </div>

                  {/* Card Container */}
                  <div className="bg-white border border-[#C0C8C9] p-6 lg:p-8 hover:border-[#123C43] transition-colors shadow-xs">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#3E665B] font-bold block mb-1.5">
                      {stepItem.phase}
                    </span>
                    <h3 className="font-['Sora'] text-xl sm:text-2xl font-bold text-[#00262B] mb-2.5">
                      {stepItem.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#41484A] leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
