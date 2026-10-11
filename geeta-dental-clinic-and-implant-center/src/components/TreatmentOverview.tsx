import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, ArrowRight, Check, Activity, Shield, Sparkles, HeartHandshake } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clinicData } from '../config/clinicData';

gsap.registerPlugin(ScrollTrigger);

interface TreatmentOverviewProps {
  onSelectService: (serviceId: string) => void;
  onOpenDetails: (serviceId: string) => void;
}

export const TreatmentOverview: React.FC<TreatmentOverviewProps> = ({
  onSelectService,
  onOpenDetails,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const cards = gridRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const implantService = clinicData.services.find((s) => s.id === 'implant-consultation');
  const checkupService = clinicData.services.find((s) => s.id === 'preventive-checkup');
  const generalService = clinicData.services.find((s) => s.id === 'general-care');
  const restorativeService = clinicData.services.find((s) => s.id === 'restorative-care');

  return (
    <section
      id="treatments"
      ref={containerRef}
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[#F8FAF8] border-b border-[#123C43]/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#C0C8C9]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#3E665B] font-bold block mb-1.5">
              [ 03 ] Clinical Services Catalogue
            </span>
            <h2 className="font-['Sora'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#00262B]">
              Explore Your Treatment Options.
            </h2>
          </div>
          <p className="text-sm text-[#41484A] max-w-sm mt-3 md:mt-0 leading-relaxed">
            Evidence-based treatment protocols organized to assist you in evaluating routine
            maintenance, restorative care, and implant options.
          </p>
        </div>

        {/* Asymmetrical 4-Card Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Card 1: Dental Implant Consultation (Wide Featured Card, 7 cols) */}
          {implantService && (
            <div className="lg:col-span-7 bg-[#F2F4F2] border border-[#123C43]/20 p-6 sm:p-8 flex flex-col justify-between relative group hover:border-[#123C43] transition-all duration-300">
              <div className="absolute top-0 right-0 bg-[#C0ECDD] text-[#00262B] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest">
                Primary Specialization
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3 text-[#123C43]">
                  <Activity className="w-5 h-5 text-[#3E665B]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[#41484A]">
                    Service Spec: {implantService.code}
                  </span>
                </div>

                <h3 className="font-['Sora'] text-2xl sm:text-3xl font-bold text-[#00262B] mb-2">
                  {implantService.title}
                </h3>

                <p className="text-sm sm:text-base text-[#41484A] max-w-xl mb-6 leading-relaxed">
                  {implantService.description}
                </p>

                {/* Step breakdown micro-matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#C0C8C9]/60 mb-6">
                  {implantService.stages?.map((stage) => (
                    <div
                      key={stage.step}
                      className="p-3 bg-white border border-[#C0C8C9]/40"
                    >
                      <span className="font-mono text-[10px] text-[#3E665B] font-bold block">
                        {stage.step}
                      </span>
                      <span className="font-['Sora'] text-xs font-semibold text-[#00262B] block mt-0.5">
                        {stage.title}
                      </span>
                      <span className="text-[11px] text-[#41484A] block mt-1 leading-tight">
                        {stage.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#C0C8C9]/40">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectService('implant-consultation')}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#00262B] uppercase tracking-widest hover:text-[#3E665B] transition-colors cursor-pointer group-hover:underline"
                  >
                    <span>Request Implant Assessment</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <button
                    onClick={() => onOpenDetails('implant-consultation')}
                    className="text-xs text-[#41484A] hover:text-[#00262B] underline cursor-pointer"
                  >
                    Clinical Details
                  </button>
                </div>
                <span className="font-mono text-[10px] text-[#71787A] uppercase tracking-wider">
                  Sector 7 Surgical Unit
                </span>
              </div>
            </div>
          )}

          {/* Card 2: Dental Check-ups (5 cols) */}
          {checkupService && (
            <div className="lg:col-span-5 bg-white border border-[#C0C8C9] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#123C43] transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#41484A]">
                    Service Spec: {checkupService.code}
                  </span>
                  <Shield className="w-4 h-4 text-[#3E665B]" />
                </div>

                <h3 className="font-['Sora'] text-xl sm:text-2xl font-bold text-[#00262B] mb-2">
                  {checkupService.title}
                </h3>

                <p className="text-sm text-[#41484A] mb-5 leading-relaxed">
                  {checkupService.description}
                </p>

                <ul className="space-y-2.5 border-t border-[#C0C8C9]/60 pt-4 mb-6 text-sm text-[#191C1B]">
                  {checkupService.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#3E665B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => onSelectService('preventive-checkup')}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#00262B] uppercase tracking-widest hover:text-[#3E665B] transition-colors cursor-pointer"
                >
                  <span>Book Routine Check-up</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenDetails('preventive-checkup')}
                  className="text-xs text-[#41484A] hover:text-[#00262B] underline cursor-pointer"
                >
                  Details
                </button>
              </div>
            </div>
          )}

          {/* Card 3: General Dental Care (5 cols) */}
          {generalService && (
            <div className="lg:col-span-5 bg-white border border-[#C0C8C9] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#123C43] transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#41484A]">
                    Service Spec: {generalService.code}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#3E665B]" />
                </div>

                <h3 className="font-['Sora'] text-xl sm:text-2xl font-bold text-[#00262B] mb-2">
                  {generalService.title}
                </h3>

                <p className="text-sm text-[#41484A] mb-5 leading-relaxed">
                  {generalService.description}
                </p>

                <ul className="space-y-2.5 border-t border-[#C0C8C9]/60 pt-4 mb-6 text-sm text-[#191C1B]">
                  {generalService.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#3E665B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => onSelectService('general-care')}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#00262B] uppercase tracking-widest hover:text-[#3E665B] transition-colors cursor-pointer"
                >
                  <span>Schedule Cleaning</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenDetails('general-care')}
                  className="text-xs text-[#41484A] hover:text-[#00262B] underline cursor-pointer"
                >
                  Details
                </button>
              </div>
            </div>
          )}

          {/* Card 4: Restorative Dentistry (7 cols) */}
          {restorativeService && (
            <div className="lg:col-span-7 bg-white border border-[#C0C8C9] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#123C43] transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#41484A]">
                    Service Spec: {restorativeService.code}
                  </span>
                  <HeartHandshake className="w-4 h-4 text-[#3E665B]" />
                </div>

                <h3 className="font-['Sora'] text-2xl sm:text-3xl font-bold text-[#00262B] mb-2">
                  {restorativeService.title}
                </h3>

                <p className="text-sm sm:text-base text-[#41484A] max-w-xl mb-5 leading-relaxed">
                  {restorativeService.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#C0C8C9]/60 mb-6 text-sm text-[#191C1B]">
                  {restorativeService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#3E665B] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#C0C8C9]/40">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectService('restorative-care')}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#00262B] uppercase tracking-widest hover:text-[#3E665B] transition-colors cursor-pointer"
                  >
                    <span>Discuss Restorative Options</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onOpenDetails('restorative-care')}
                    className="text-xs text-[#41484A] hover:text-[#00262B] underline cursor-pointer"
                  >
                    Clinical Details
                  </button>
                </div>
                <span className="font-mono text-[10px] text-[#71787A] uppercase tracking-wider">
                  Tooth Preservation First
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
