import React from 'react';
import { Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { clinicData } from '../config/clinicData';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-[#F2F4F2] border-b border-[#123C43]/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Metric Bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-[#C0C8C9]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <div className="flex items-baseline gap-2">
              <span className="font-['Sora'] text-5xl sm:text-6xl font-bold text-[#00262B] tabular-nums">
                {clinicData.googleReviews.rating}
              </span>
              <span className="font-mono text-xs text-[#71787A] uppercase tracking-widest">
                / 5.0 Rating
              </span>
            </div>

            <div className="h-12 w-px bg-[#C0C8C9] hidden sm:block" />

            <div>
              <div className="flex text-[#123C43] mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#123C43] text-[#123C43]" />
                ))}
              </div>
              <span className="font-['Sora'] text-base sm:text-lg font-bold text-[#00262B] block leading-none">
                {clinicData.googleReviews.count} Verified Patient Reviews
              </span>
              <span className="font-mono text-xs text-[#41484A] uppercase tracking-wider block mt-1">
                Independent Google Review Index · Gandhinagar
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="border border-[#C0C8C9] px-4 py-2 bg-white font-mono text-xs uppercase tracking-wider text-[#3E665B] font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#3E665B]" />
              <span>Sector 7 Community Practice</span>
            </div>

            <a
              href={clinicData.googleReviews.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-[#00262B] text-[#00262B] hover:bg-[#00262B] hover:text-[#F8FAF8] px-5 py-2 transition-colors font-mono text-xs uppercase tracking-widest font-bold"
            >
              <span>Read Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {clinicData.verifiedReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-[#C0C8C9] p-6 flex flex-col justify-between hover:border-[#123C43] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#123C43]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#123C43] text-[#123C43]" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#3E665B] font-bold bg-[#C0ECDD]/40 px-2 py-0.5">
                    {rev.treatmentType}
                  </span>
                </div>

                <p className="text-sm text-[#41484A] leading-relaxed italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8EEEC] flex items-center justify-between font-mono text-[11px] text-[#71787A]">
                <span className="font-semibold text-[#00262B]">{rev.author}</span>
                <span>{rev.dateText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
