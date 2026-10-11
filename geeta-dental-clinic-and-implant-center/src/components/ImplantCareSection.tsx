import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ImplantCareSectionProps {
  onSelectImplantBooking: () => void;
}

export const ImplantCareSection: React.FC<ImplantCareSectionProps> = ({
  onSelectImplantBooking,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const stagesRef = useRef<HTMLDivElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (stagesRef.current) {
        const items = stagesRef.current.children;
        gsap.fromTo(
          items,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stagesRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const implantStages = [
    {
      num: '01',
      title: 'Initial Consultation & Goals',
      detail:
        'Discuss personal functional expectations, medical background, and budget requirements with an implant surgeon in an unhurried, private environment.',
      badgeStyle: 'text-[#D5F06A] border-[#D5F06A]/40',
    },
    {
      num: '02',
      title: 'Quantitative Bone Assessment',
      detail:
        'Clinical evaluation of ridge architecture and bone density to determine anatomical suitability for single or multi-unit implants.',
      badgeStyle: 'text-[#C0ECDD] border-[#C0ECDD]/40',
    },
    {
      num: '03',
      title: 'Structured Surgical Planning',
      detail:
        'Review the customized procedural roadmap, post-surgical recovery timelines, and prosthetic attachment options before any commitment.',
      badgeStyle: 'text-[#F8FAF8] border-[#F8FAF8]/40',
    },
  ];

  return (
    <section
      id="implant-care"
      ref={containerRef}
      className="w-full border-b border-[#123C43]/10 bg-[#F8FAF8]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        {/* Left Split: High-Resolution Clinical Model Photo (6 cols) */}
        <div className="lg:col-span-6 relative bg-[#ECEEEC] overflow-hidden min-h-[360px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-[#123C43]/20 flex items-center justify-center">
          {!imgError ? (
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrGU-Kh_2rQnsbs6breikYZDk1O6BhkDt0reA9kj-roc9WVCrXZcfUu7HtoaVbhySiYyKWGfx1yN9HEOdnb52PbJdJ-TfwnIPz5EkqSt43xdpC8w0FQ7_oAcjJPXi5XkIOmpzuOOWwxKss6AOnHJcWOInsJz_CUhfRQ68lquSOdXFVgS84gg2jhr9bOClkkGwLlUfVCfK3qyUQ6c4-r1r-kFmg8SZYMxZDAhJy1g365fVIjpG1XQK-"
              alt="Close-up clinical educational jaw model showing precision dental titanium implant integrated into bone structure"
              referrerPolicy="no-referrer"
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              className={`w-full h-full object-cover transition-opacity duration-700 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : (
            <div className="w-full h-full min-h-[360px] bg-[#00262B] text-[#F8FAF8] flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 border border-[#B8E3D5] flex items-center justify-center mb-4">
                <div className="w-4 h-4 bg-[#D5F06A]" />
              </div>
              <h3 className="font-['Sora'] text-xl font-bold uppercase tracking-tight text-[#F8FAF8]">
                Precision Implant Triage
              </h3>
              <p className="text-xs text-[#7FA6AE] max-w-xs mt-2">
                Anatomical osteointegration and restorative bone density assessment
              </p>
            </div>
          )}

          <div className="absolute inset-0 bg-[#00262B]/10 mix-blend-multiply pointer-events-none" />

          {/* Floating Anatomical Badge */}
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-xs border border-[#C0C8C9] p-3.5 max-w-xs shadow-xs">
            <span className="font-mono text-[10px] text-[#00262B] font-bold uppercase tracking-widest block mb-1">
              Anatomical Visualization
            </span>
            <p className="text-xs text-[#41484A] leading-relaxed">
              Precision osteointegration model demonstrating structural root simulation and abutment
              stability.
            </p>
          </div>
        </div>

        {/* Right Split: Architectural Midnight Teal Panel (6 cols) */}
        <div className="lg:col-span-6 bg-[#123C43] text-[#F8FAF8] px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#D5F06A] font-bold block mb-2">
              [ 04 ] Implant Care Specialization
            </span>

            <h2 className="font-['Sora'] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#F8FAF8] mb-4 leading-tight">
              Understand Your Tooth-Replacement Options.
            </h2>

            <p className="text-sm sm:text-base text-[#7FA6AE] max-w-lg mb-8 leading-relaxed font-normal">
              Considering dental implants? Learn about our step-by-step clinical evaluation, bone
              density assessment, treatment protocols, and durable alternatives suited to your
              lifestyle.
            </p>

            {/* 3 Sequential Stages */}
            <div
              ref={stagesRef}
              className="space-y-6 border-t border-[#F8FAF8]/15 pt-6 mb-10"
            >
              {implantStages.map((stage) => (
                <div key={stage.num} className="flex items-start gap-4">
                  <span
                    className={`font-['Sora'] text-sm font-bold border px-2.5 py-0.5 mt-0.5 shrink-0 ${stage.badgeStyle}`}
                  >
                    {stage.num}
                  </span>
                  <div>
                    <h4 className="font-['Sora'] text-base sm:text-lg font-semibold text-[#F8FAF8]">
                      {stage.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#7FA6AE] mt-1 leading-relaxed">
                      {stage.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <button
              onClick={onSelectImplantBooking}
              className="inline-flex items-center gap-2 bg-[#D5F06A] text-[#00262B] hover:bg-[#C0ECDD] px-8 py-3.5 transition-colors font-mono text-xs uppercase tracking-widest font-bold cursor-pointer"
            >
              <span>Enquire About Implant Care</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
