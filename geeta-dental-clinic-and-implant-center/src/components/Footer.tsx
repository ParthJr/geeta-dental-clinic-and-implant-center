import React from 'react';
import { Phone, Shield, ArrowUp } from 'lucide-react';
import { clinicData } from '../config/clinicData';
import { scrollToSection } from '../utils/scrollHelper';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="w-full bg-[#123C43] text-[#F8FAF8] border-t border-[#00262B]">
      {/* 4-Column Architectural Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Col 1: Identity & Address */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 border border-[#C0ECDD] flex items-center justify-center bg-[#00262B]">
              <div className="w-2 h-2 bg-[#D5F06A]" />
            </div>
            <span className="font-['Sora'] text-base font-bold tracking-tight text-[#F8FAF8] uppercase">
              {clinicData.shortName}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#7FA6AE] leading-relaxed">
            Architectural precision dentistry and advanced dental implants in Gandhinagar. Sterile
            methodology, diagnostic imaging, and dedicated patient rehabilitation.
          </p>

          <div className="flex flex-col gap-1 pt-3 border-t border-[#F8FAF8]/15 font-mono text-xs text-[#A5CFC2]">
            <span className="uppercase tracking-wider">Plot 702/A, Sector 7</span>
            <span className="uppercase tracking-wider">Gandhinagar, Gujarat 382007</span>
          </div>
        </div>

        {/* Col 2: Services */}
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs tracking-widest text-[#C0ECDD] uppercase font-bold">
            [ 01 ] Clinical Services
          </span>
          <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#7FA6AE]">
            <button
              onClick={() => scrollToSection('treatments', 84)}
              className="hover:text-[#D5F06A] transition-colors text-left cursor-pointer"
            >
              Dental Implant Consultation
            </button>
            <button
              onClick={() => scrollToSection('treatments', 84)}
              className="hover:text-[#D5F06A] transition-colors text-left cursor-pointer"
            >
              Preventive Dental Check-ups
            </button>
            <button
              onClick={() => scrollToSection('treatments', 84)}
              className="hover:text-[#D5F06A] transition-colors text-left cursor-pointer"
            >
              General Dental Care & Hygiene
            </button>
            <button
              onClick={() => scrollToSection('treatments', 84)}
              className="hover:text-[#D5F06A] transition-colors text-left cursor-pointer"
            >
              Restorative Tooth Preservation
            </button>
          </div>
        </div>

        {/* Col 3: Patient Resources */}
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs tracking-widest text-[#C0ECDD] uppercase font-bold">
            [ 02 ] Patient Navigation
          </span>
          <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#7FA6AE]">
            <button
              onClick={() => scrollToSection('approach', 84)}
              className="hover:text-[#D5F06A] transition-colors text-left cursor-pointer"
            >
              Clinical Approach (Listen, Assess, Plan)
            </button>
            <button
              onClick={() => scrollToSection('roadmap', 84)}
              className="hover:text-[#D5F06A] transition-colors text-left cursor-pointer"
            >
              Treatment Planning Roadmap
            </button>
            <button
              onClick={() => scrollToSection('reviews', 84)}
              className="hover:text-[#D5F06A] transition-colors text-left cursor-pointer"
            >
              Patient Reviews (4.9 ★ Rating)
            </button>
            <button
              onClick={() => scrollToSection('about', 84)}
              className="hover:text-[#D5F06A] transition-colors text-left cursor-pointer"
            >
              Practice Ethos & Standards
            </button>
          </div>
        </div>

        {/* Col 4: Clinical Direct Line */}
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs tracking-widest text-[#C0ECDD] uppercase font-bold">
            [ 03 ] Direct Line & Triage
          </span>

          <div className="p-4 border border-[#F8FAF8]/20 bg-[#00262B]/40">
            <span className="font-mono text-[10px] text-[#A5CFC2] uppercase block mb-1">
              Appointments & Triage
            </span>
            <a
              href={clinicData.phone.telHref}
              className="font-['Sora'] text-xl text-[#F8FAF8] hover:text-[#D5F06A] transition-colors block font-bold font-mono tabular-nums"
            >
              {clinicData.phone.display}
            </a>
            <span className="text-xs text-[#7FA6AE] mt-2 block leading-relaxed">
              Mon–Sat: 10:00–13:30, 17:00–20:30
            </span>

            <button
              onClick={onOpenBooking}
              className="mt-4 w-full bg-[#D5F06A] text-[#00262B] hover:bg-[#C0ECDD] py-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Request Booking
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Coordinates & Copyright Bar */}
      <div className="border-t border-[#F8FAF8]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-[#7FA6AE] font-mono text-xs">
          <div className="flex items-center gap-3">
            <span>COORD: {clinicData.coordinates.formatted}</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-[#3E665B]" />
              <span>GANDHINAGAR SEC-7</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="uppercase tracking-wider">
              © {new Date().getFullYear()} {clinicData.name}. All rights reserved.
            </span>

            <button
              onClick={() => scrollToSection('hero', 0)}
              className="text-[#F8FAF8] hover:text-[#D5F06A] p-1 border border-[#F8FAF8]/30 flex items-center gap-1 text-[11px] uppercase cursor-pointer"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
