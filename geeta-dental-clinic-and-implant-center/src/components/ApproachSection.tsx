import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clinicData } from '../config/clinicData';

gsap.registerPlugin(ScrollTrigger);

export const ApproachSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Stagger 3 principles
      if (cardsRef.current) {
        const principles = cardsRef.current.children;
        gsap.fromTo(
          principles,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="approach"
      ref={sectionRef}
      className="w-full bg-[#123C43] text-[#F8FAF8] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-b border-[#00262B]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          ref={headingRef}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#F8FAF8]/15 gap-6"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#D5F06A] font-bold block mb-2">
              [ 02 ] Our Clinical Approach
            </span>
            <h2 className="font-['Sora'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8FAF8] leading-tight">
              Clear Information.
              <br />
              Thoughtful Decisions.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#7FA6AE] max-w-md leading-relaxed font-normal">
            Understanding your dental needs and available options is an essential part of making
            confident, enduring treatment decisions without pressure.
          </p>
        </div>

        {/* 3 Care Principles Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t md:border-t-0 border-[#F8FAF8]/15 divide-y md:divide-y-0 md:divide-x divide-[#F8FAF8]/15"
        >
          {clinicData.carePrinciples.map((principle, index) => {
            const isSecond = index === 1;
            const accentBg = isSecond ? 'bg-[#C0ECDD]' : 'bg-[#D5F06A]';

            return (
              <div
                key={principle.index}
                className="py-8 md:px-8 md:first:pl-0 md:last:pr-0 flex flex-col justify-between group transition-colors hover:bg-[#00262B]/20"
              >
                <div>
                  {/* Thin Accent Indicator Line */}
                  <div
                    className={`w-8 h-1 ${accentBg} mb-6 group-hover:w-16 transition-all duration-300`}
                  />

                  <span className="font-['Sora'] text-3xl lg:text-4xl font-bold text-[#C0ECDD] block mb-2">
                    {principle.index}
                  </span>

                  <h3 className="font-['Sora'] text-xl sm:text-2xl font-semibold text-[#F8FAF8] uppercase tracking-tight mb-3">
                    {principle.title}
                  </h3>

                  <p className="text-sm text-[#7FA6AE] leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                <div className="mt-8 font-mono text-[11px] uppercase tracking-wider text-[#A5CFC2]">
                  {principle.subtitle}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
