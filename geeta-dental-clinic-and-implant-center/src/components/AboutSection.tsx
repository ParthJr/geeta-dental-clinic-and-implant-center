import React, { useRef, useEffect } from 'react';
import { MessageSquare, Microscope, CalendarCheck } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[#F8FAF8] border-b border-[#123C43]/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Philosophy (6 cols) */}
          <div ref={leftColRef} className="lg:col-span-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3E665B] font-bold block mb-2">
              [ 06 ] Practice Ethos
            </span>

            <h2 className="font-['Sora'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#00262B] mb-5">
              Care Built Around Clear Communication.
            </h2>

            <p className="text-base sm:text-lg text-[#41484A] mb-8 leading-relaxed font-normal">
              At Geeta Dental Clinic and Implant Center, we hold that quality dental outcomes stem
              from unhurried discussions, ethical assessments, and meticulous clinical craft.
            </p>

            {/* 3 Pillars */}
            <div className="space-y-6 border-t border-[#C0C8C9]/60 pt-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border border-[#123C43] flex items-center justify-center bg-[#C0ECDD] shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4 text-[#00262B]" />
                </div>
                <div>
                  <h4 className="font-['Sora'] text-base font-bold text-[#00262B]">
                    Patient Communication
                  </h4>
                  <p className="text-xs sm:text-sm text-[#41484A] mt-1 leading-relaxed">
                    We eliminate ambiguity. Every diagnosis is articulated simply with no
                    high-pressure sales tactics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border border-[#123C43] flex items-center justify-center bg-[#D5F06A] shrink-0 mt-0.5">
                  <Microscope className="w-4 h-4 text-[#00262B]" />
                </div>
                <div>
                  <h4 className="font-['Sora'] text-base font-bold text-[#00262B]">
                    Thoughtful Assessment
                  </h4>
                  <p className="text-xs sm:text-sm text-[#41484A] mt-1 leading-relaxed">
                    We prioritize long-term structural integrity and biological preservation before
                    proposing surgical steps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border border-[#123C43] flex items-center justify-center bg-[#C0ECDD] shrink-0 mt-0.5">
                  <CalendarCheck className="w-4 h-4 text-[#00262B]" />
                </div>
                <div>
                  <h4 className="font-['Sora'] text-base font-bold text-[#00262B]">
                    Clear Treatment Planning
                  </h4>
                  <p className="text-xs sm:text-sm text-[#41484A] mt-1 leading-relaxed">
                    Transparent schedules, predictable appointments, and written roadmaps prior to
                    procedure commencement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Data Grid Box (6 cols) */}
          <div
            ref={rightColRef}
            className="lg:col-span-6 bg-[#ECEEEC] p-6 sm:p-8 border border-[#123C43]/20"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#C0C8C9] mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#00262B] font-bold">
                Practice Registry & Standards
              </span>
              <span className="font-mono text-[11px] text-[#41484A]">Sector 7 · Gandhinagar</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white border border-[#C0C8C9]/60">
                <span className="font-mono text-[10px] text-[#71787A] uppercase tracking-wider block">
                  Location Anchor
                </span>
                <span className="font-['Sora'] text-base sm:text-lg font-bold text-[#00262B] block mt-1">
                  Sector 7
                </span>
                <span className="text-xs text-[#41484A] block mt-0.5">Gandhinagar, Gujarat</span>
              </div>

              <div className="p-4 bg-white border border-[#C0C8C9]/60">
                <span className="font-mono text-[10px] text-[#71787A] uppercase tracking-wider block">
                  Clinical Hygiene
                </span>
                <span className="font-['Sora'] text-base sm:text-lg font-bold text-[#00262B] block mt-1">
                  Class-B Autoclave
                </span>
                <span className="text-xs text-[#41484A] block mt-0.5">Sterilized instrumentation</span>
              </div>

              <div className="p-4 bg-white border border-[#C0C8C9]/60">
                <span className="font-mono text-[10px] text-[#71787A] uppercase tracking-wider block">
                  Diagnostics
                </span>
                <span className="font-['Sora'] text-base sm:text-lg font-bold text-[#00262B] block mt-1">
                  Intraoral HD
                </span>
                <span className="text-xs text-[#41484A] block mt-0.5">Low-dose radiological audit</span>
              </div>

              <div className="p-4 bg-white border border-[#C0C8C9]/60">
                <span className="font-mono text-[10px] text-[#71787A] uppercase tracking-wider block">
                  Consultation Model
                </span>
                <span className="font-['Sora'] text-base sm:text-lg font-bold text-[#00262B] block mt-1">
                  Dedicated Slots
                </span>
                <span className="text-xs text-[#41484A] block mt-0.5">Zero-crowd scheduling</span>
              </div>
            </div>

            <div className="p-3 bg-[#F2F4F2] border border-[#C0C8C9] flex items-center justify-between font-mono text-[11px] text-[#41484A]">
              <span>ETHICAL HEALTHCARE COMPLIANCE</span>
              <span className="font-bold text-[#00262B]">VERIFIED DISCLOSURE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
