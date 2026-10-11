import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { gsap } from 'gsap';
import { clinicData } from '../config/clinicData';
import { scrollToSection } from '../utils/scrollHelper';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const reputationRef = useRef<HTMLDivElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);

  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Clean sequential reveal without blocking interaction
      tl.fromTo(
        [headlineLine1Ref.current, headlineLine2Ref.current],
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.15 }
      )
        .fromTo(
          copyRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          ctaGroupRef.current,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          '-=0.3'
        )
        .fromTo(
          reputationRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          '-=0.2'
        )
        .fromTo(
          imageCardRef.current,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.8 },
          '-=0.6'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 border-b border-[#123C43]/10 relative overflow-hidden bg-[#F8FAF8]"
    >
      {/* Architectural Subtle Grid Coordinates - Swiss Style */}
      <div className="absolute right-8 top-6 hidden xl:block font-mono text-[11px] text-[#71787A]/70 tracking-widest uppercase select-none pointer-events-none">
        GRID: 12-COL · REF: GDC-SEC7-2025 · INDEX [ 01 / 09 ]
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & CTAs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-6">
            <div>
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ECEEEC] border border-[#C0C8C9]/60 mb-6">
                <span className="w-2 h-2 rounded-none bg-[#D5F06A] inline-block animate-pulse" />
                <span className="text-xs font-semibold tracking-widest text-[#00262B] uppercase">
                  01 / DENTAL CARE · SECTOR 7, GANDHINAGAR
                </span>
              </div>

              {/* Hero Headline */}
              <h1 className="font-['Sora'] text-4xl sm:text-5xl lg:text-[4.5rem] font-bold text-[#00262B] tracking-tight leading-[1.05] mb-6">
                <span ref={headlineLine1Ref} className="inline-block">
                  Precision Care.
                </span>
                <br />
                <span
                  ref={headlineLine2Ref}
                  className="inline-block text-[#3E665B] mt-1"
                >
                  Confident Smiles.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p
                ref={copyRef}
                className="text-base sm:text-lg text-[#41484A] max-w-xl mb-8 leading-relaxed font-normal"
              >
                Explore dental care options, understand your treatment choices, and take an
                informed next step toward your long-term oral health and structural rehabilitation.
              </p>

              {/* CTAs */}
              <div
                ref={ctaGroupRef}
                className="flex flex-wrap items-center gap-4 mb-10"
              >
                <button
                  onClick={() => scrollToSection('treatments', 84)}
                  className="inline-flex items-center gap-2 bg-[#123C43] text-[#F8FAF8] hover:bg-[#D5F06A] hover:text-[#00262B] px-6 py-3.5 transition-all duration-200 text-xs font-bold uppercase tracking-widest cursor-pointer shadow-xs group"
                >
                  <span>Explore Treatments</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 border border-[#123C43] text-[#123C43] hover:bg-[#C0ECDD] transition-colors px-6 py-3.5 text-xs font-bold uppercase tracking-widest cursor-pointer"
                >
                  <span>Request a Consultation</span>
                </button>
              </div>
            </div>

            {/* Reputation Metric Indicator */}
            <div
              ref={reputationRef}
              className="pt-6 border-t border-[#C0C8C9]/50 flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-3 bg-[#F2F4F2] px-4 py-2.5 border border-[#C0C8C9]/50">
                <div className="flex items-center text-[#00262B]">
                  <span className="font-['Sora'] text-xl font-bold mr-1.5 tabular-nums">
                    {clinicData.googleReviews.rating}
                  </span>
                  <div className="flex text-[#303B00] fill-current">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#123C43] text-[#123C43]"
                      />
                    ))}
                  </div>
                </div>

                <div className="h-6 w-px bg-[#C0C8C9]" />

                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#00262B] uppercase tracking-wider">
                    {clinicData.googleReviews.count} Google Reviews
                  </span>
                  <span className="text-[10px] text-[#41484A] flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3 h-3 text-[#3E665B]" /> Verified Practice
                  </span>
                </div>
              </div>

              <div className="hidden sm:flex flex-col text-xs text-[#41484A] uppercase tracking-wider">
                <span>Sterile Protocols · ISO Compliant</span>
                <span className="text-[#3E665B] font-semibold">Active Surgical Triage</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Image & Precision Metadata (5 Cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex flex-col justify-center">
            {/* Mint Underlay Card Offset */}
            <div className="absolute -bottom-3 -right-3 w-full h-full bg-[#C0ECDD]/50 -z-0 pointer-events-none hidden sm:block" />

            <div
              ref={imageCardRef}
              className="relative z-10 border border-[#123C43] bg-white p-2 shadow-xs"
            >
              <div className="overflow-hidden relative aspect-4/3 bg-[#ECEEEC] group">
                {!imgError ? (
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgpNmq2u01RgnTE_l0DBNVGFhciruV8A1xhNivCXcNPx12gyJJx1u-QsfI8Xv0YVk_b-aiZGNRpfvYJkoOhy9NOhDb1_m7sOuR4Nkkq7qY0VQ5i5Fp6HqsF6V76lqMdZbBh_a-9snP4b-hOPAuOj_kXkD8uuuZW-g2d0z8OW3ynCuj8vl-VnW0hZbaTihkFDuqWtBrRNmH_Ic3zCawPokyd-ZNaosxLvmPER7Mi6lTKzKKi2N_3sr6"
                    alt="Interior view of Geeta Dental Clinic operatory room in Sector 7 Gandhinagar with dental chair and diagnostic monitors"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setImgError(true)}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      imgLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ) : (
                  <div className="w-full h-full bg-[#123C43]/10 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-12 h-12 border border-[#123C43] flex items-center justify-center bg-white mb-2">
                      <div className="w-3 h-3 bg-[#123C43]" />
                    </div>
                    <span className="font-['Sora'] font-bold text-xs uppercase text-[#00262B]">
                      Clinical Operatory Suite
                    </span>
                    <span className="text-[11px] text-[#41484A] mt-1">
                      Sector 7, Gandhinagar, Gujarat
                    </span>
                  </div>
                )}

                <div className="absolute top-3 left-3 bg-[#00262B] text-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest">
                  Clinical Practice Suite
                </div>
              </div>

              {/* Bottom Structural Coordinates Bar */}
              <div className="mt-2.5 pt-2 border-t border-[#E8EEEC] flex items-center justify-between text-[#41484A] text-[11px]">
                <span className="font-mono uppercase tracking-wider">
                  Coord: {clinicData.coordinates.formatted}
                </span>
                <span className="uppercase font-semibold text-[#00262B]">
                  Sector 7 Operatory
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
