import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink } from 'lucide-react';
import { clinicData } from '../config/clinicData';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="location"
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[#F2F4F2] border-b border-[#123C43]/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Split: Contact Details & Schedule (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#3E665B] font-bold block mb-2">
                [ 09 ] Location & Inquiries
              </span>

              <h2 className="font-['Sora'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#00262B] mb-5">
                Find Us in Gandhinagar.
              </h2>

              <p className="text-base text-[#41484A] mb-8 leading-relaxed font-normal">
                Conveniently situated in Sector 7, Gandhinagar, accessible via major capital avenues
                with dedicated patient parking access.
              </p>

              <div className="space-y-4 mb-8">
                {/* Facility Card */}
                <div className="border border-[#C0C8C9] bg-white p-5 flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#00262B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] text-[#71787A] uppercase tracking-wider block">
                      Physical Address
                    </span>
                    <span className="font-['Sora'] text-base font-bold text-[#00262B] block mt-0.5">
                      {clinicData.name}
                    </span>
                    <span className="text-xs sm:text-sm text-[#41484A] block mt-0.5">
                      {clinicData.fullAddress}
                    </span>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="border border-[#C0C8C9] bg-white p-5 flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#00262B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] text-[#71787A] uppercase tracking-wider block">
                      Consulting Schedule
                    </span>
                    <span className="font-['Sora'] text-base font-bold text-[#00262B] block mt-0.5">
                      Mon – Sat: 10:00 AM – 01:30 PM & 05:00 PM – 08:30 PM
                    </span>
                    <span className="text-xs text-[#3E665B] font-semibold block mt-1">
                      {clinicData.schedule.mondayNote} · {clinicData.schedule.sundayNote}
                    </span>
                  </div>
                </div>

                {/* Telephony */}
                <div className="border border-[#C0C8C9] bg-white p-5 flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#00262B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] text-[#71787A] uppercase tracking-wider block">
                      Direct Desk Contact
                    </span>
                    <a
                      href={clinicData.phone.telHref}
                      className="font-['Sora'] text-xl font-bold text-[#00262B] hover:text-[#3E665B] transition-colors block mt-0.5 font-mono tabular-nums"
                    >
                      {clinicData.phone.display}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={clinicData.phone.telHref}
                className="inline-flex items-center gap-2 bg-[#00262B] text-[#F8FAF8] hover:bg-[#D5F06A] hover:text-[#00262B] px-6 py-3 font-mono text-xs uppercase tracking-widest font-bold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {clinicData.phone.display}</span>
              </a>

              <a
                href={clinicData.googleReviews.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#00262B] text-[#00262B] hover:bg-[#C0ECDD] px-6 py-3 font-mono text-xs uppercase tracking-widest font-bold transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Split: Stylized Swiss Architectural Vector Map Module (6 cols) */}
          <div className="lg:col-span-6 bg-white border border-[#00262B] p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-[#C0C8C9] mb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#00262B] font-bold">
                Sector 7 Cartographic Schematic
              </span>
              <span className="font-mono text-[11px] text-[#71787A]">Gandhinagar Grid</span>
            </div>

            {/* Architectural SVG Map Graphic representing Gandhinagar's Sectors */}
            <div className="w-full aspect-4/3 bg-[#F2F4F2] relative overflow-hidden flex items-center justify-center border border-[#C0C8C9]/60">
              <svg
                viewBox="0 0 500 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-[#00262B]"
                role="img"
                aria-label="Map diagram of Gandhinagar grid showing Sector 7 location"
              >
                <rect width="500" height="380" fill="#F2F4F2" />

                {/* Sector 6 */}
                <rect x="30" y="30" width="200" height="140" fill="#FFFFFF" stroke="#C0C8C9" strokeWidth="1.5" />
                <text x="45" y="55" fill="#71787A" fontFamily="DM Sans" fontSize="11" fontWeight="600" letterSpacing="1">
                  SECTOR 6
                </text>

                {/* Sector 8 */}
                <rect x="270" y="30" width="200" height="140" fill="#FFFFFF" stroke="#C0C8C9" strokeWidth="1.5" />
                <text x="285" y="55" fill="#71787A" fontFamily="DM Sans" fontSize="11" fontWeight="600" letterSpacing="1">
                  SECTOR 8
                </text>

                {/* Sector 7 (Target Sector with Highlight) */}
                <rect
                  x="30"
                  y="210"
                  width="200"
                  height="140"
                  fill="#C0ECDD"
                  fillOpacity="0.35"
                  stroke="#123C43"
                  strokeWidth="2"
                />
                <text x="45" y="235" fill="#00262B" fontFamily="Sora" fontSize="13" fontWeight="700" letterSpacing="1">
                  SECTOR 7
                </text>
                <text x="45" y="254" fill="#3E665B" fontFamily="DM Sans" fontSize="10" fontWeight="600">
                  GEETA DENTAL ZONE
                </text>

                {/* Sector 16 */}
                <rect x="270" y="210" width="200" height="140" fill="#FFFFFF" stroke="#C0C8C9" strokeWidth="1.5" />
                <text x="285" y="235" fill="#71787A" fontFamily="DM Sans" fontSize="11" fontWeight="600" letterSpacing="1">
                  SECTOR 16
                </text>

                {/* Major Arterial Roads "CH" and "GH" roads */}
                <line x1="250" y1="0" x2="250" y2="380" stroke="#123C43" strokeWidth="4" />
                <line x1="0" y1="190" x2="500" y2="190" stroke="#123C43" strokeWidth="4" />

                <text x="255" y="20" fill="#123C43" fontFamily="DM Sans" fontSize="9" fontWeight="bold">
                  CH ROAD
                </text>
                <text x="10" y="185" fill="#123C43" fontFamily="DM Sans" fontSize="9" fontWeight="bold">
                  GH ROAD
                </text>

                {/* Clinical Location Marker Pin */}
                <g transform="translate(130, 275)">
                  <circle cx="0" cy="0" r="14" fill="#123C43" />
                  <circle cx="0" cy="0" r="5" fill="#D5F06A" />
                  <rect x="-1" y="14" width="2" height="16" fill="#123C43" />
                </g>

                <rect x="150" y="265" width="105" height="24" fill="#00262B" />
                <text x="156" y="281" fill="#F8FAF8" fontFamily="DM Sans" fontSize="9" fontWeight="bold">
                  GEETA DENTAL
                </text>
              </svg>

              {/* Floating Map Chip */}
              <div className="absolute bottom-3 right-3 bg-white border border-[#C0C8C9] px-2 py-1 text-[#41484A] font-mono text-[10px] uppercase tracking-wider">
                GPS: {clinicData.coordinates.formatted}
              </div>
            </div>

            <div className="pt-3 flex items-center justify-between text-[#41484A] font-mono text-xs">
              <span>Gandhinagar Capital Urban Ring</span>
              <a
                href={clinicData.googleReviews.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00262B] font-bold hover:underline flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
