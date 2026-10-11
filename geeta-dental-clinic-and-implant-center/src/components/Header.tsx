import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { clinicData } from '../config/clinicData';
import { scrollToSection } from '../utils/scrollHelper';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Approach', target: 'approach' },
    { label: 'Treatments', target: 'treatments' },
    { label: 'Implant Care', target: 'implant-care' },
    { label: 'Roadmap', target: 'roadmap' },
    { label: 'About', target: 'about' },
    { label: 'Location', target: 'location' },
  ];

  const handleNavClick = (target: string) => {
    setMobileMenuOpen(false);
    scrollToSection(target, 84);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-[#F8FAF8]/95 backdrop-blur-md border-[#123C43]/15 shadow-xs py-3.5'
            : 'bg-[#F8FAF8] border-[#123C43]/10 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Brand Wordmark Zone */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="flex items-center gap-3 group focus-visible:outline-2"
          >
            <div className="w-8 h-8 border border-[#123C43] flex items-center justify-center bg-white relative shrink-0 transition-colors group-hover:bg-[#B8E3D5]">
              <div className="w-2.5 h-2.5 border border-[#123C43]" />
              <div className="absolute w-1 h-1 bg-[#123C43] rounded-none" />
            </div>
            <div className="flex flex-col">
              <span className="font-['Sora'] font-bold text-base sm:text-lg text-[#00262B] tracking-tight leading-none uppercase">
                Geeta Dental & Implant
              </span>
              <span className="text-[10px] tracking-widest text-[#41484A] font-semibold uppercase mt-0.5">
                Sector 7 · Gandhinagar
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#41484A]"
          >
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="hover:text-[#123C43] py-1 border-b border-transparent hover:border-[#123C43] transition-all whitespace-nowrap cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Zone: Phone + Consultation Button */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={clinicData.phone.telHref}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#123C43] hover:text-[#3E665B] transition-colors py-2 px-1"
              aria-label={`Call clinic at ${clinicData.phone.display}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#3E665B]" />
              <span className="font-mono tabular-nums">{clinicData.phone.display}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="bg-[#123C43] text-[#F8FAF8] hover:bg-[#D5F06A] hover:text-[#00262B] transition-colors px-4 py-2.5 text-xs font-bold uppercase tracking-widest cursor-pointer whitespace-nowrap"
            >
              Request Consultation
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#123C43] hover:bg-[#E8EEEC] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#00262B]/50 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#F8FAF8] border-l border-[#123C43] z-50 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#E8EEEC]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border border-[#123C43] flex items-center justify-center bg-white">
                <div className="w-1.5 h-1.5 bg-[#123C43]" />
              </div>
              <span className="font-['Sora'] font-bold text-xs uppercase text-[#00262B]">
                Geeta Dental & Implant
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-[#123C43] hover:bg-[#E8EEEC] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links List */}
          <nav className="flex flex-col gap-1 mt-6">
            {navLinks.map((link, idx) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="flex items-center justify-between py-3 px-3 text-sm font-semibold uppercase tracking-wider text-[#191C1B] hover:bg-[#B8E3D5]/40 hover:text-[#123C43] text-left transition-colors cursor-pointer border-b border-[#E8EEEC]/60"
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-[#41484A] font-mono">0{idx + 1}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Footer Contact */}
        <div className="pt-6 border-t border-[#E8EEEC] flex flex-col gap-3">
          <div className="text-xs text-[#41484A]">
            <span className="block font-semibold uppercase tracking-wider text-[#123C43]">
              Sector 7, Gandhinagar
            </span>
            <span className="block text-[11px] mt-0.5">Mon – Sat: 10:00 AM – 08:30 PM</span>
          </div>

          <a
            href={clinicData.phone.telHref}
            className="flex items-center justify-center gap-2 border border-[#123C43] text-[#123C43] py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#B8E3D5] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {clinicData.phone.display}</span>
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="bg-[#123C43] text-[#F8FAF8] hover:bg-[#D5F06A] hover:text-[#00262B] py-3 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Request Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </>
  );
};
