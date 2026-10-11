import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { clinicData, ServiceDetail } from '../config/clinicData';

interface ServiceDetailModalProps {
  serviceId: string | null;
  onClose: () => void;
  onProceedToBooking: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  serviceId,
  onClose,
  onProceedToBooking,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (serviceId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [serviceId, onClose]);

  if (!serviceId) return null;

  const service = clinicData.services.find((s) => s.id === serviceId);
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#00262B]/60 backdrop-blur-xs animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div className="relative w-full max-w-2xl bg-[#F8FAF8] border border-[#123C43] shadow-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-[#123C43] text-[#F8FAF8] p-5 sm:p-6 flex items-start justify-between gap-4 sticky top-0 z-10 border-b border-[#00262B]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[10px] text-[#D5F06A] uppercase tracking-widest font-bold">
                Service Spec: {service.code}
              </span>
              {service.badge && (
                <span className="bg-[#C0ECDD] text-[#00262B] px-2 py-0.2 text-[10px] font-mono font-bold uppercase">
                  {service.badge}
                </span>
              )}
            </div>
            <h3 id="modal-service-title" className="font-['Sora'] text-xl sm:text-2xl font-bold">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#F8FAF8] hover:bg-[#00262B] transition-colors cursor-pointer"
            aria-label="Close service details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#3E665B] font-bold mb-2">
              Clinical Assessment Overview
            </h4>
            <p className="text-sm sm:text-base text-[#41484A] leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Sequential Stages if available */}
          {service.stages && service.stages.length > 0 && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#3E665B] font-bold mb-3">
                Evaluation Workflow
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {service.stages.map((stage) => (
                  <div
                    key={stage.step}
                    className="p-3.5 bg-white border border-[#C0C8C9]"
                  >
                    <span className="font-mono text-[10px] text-[#3E665B] font-bold block">
                      {stage.step}
                    </span>
                    <span className="font-['Sora'] text-xs font-semibold text-[#00262B] block mt-0.5">
                      {stage.title}
                    </span>
                    <span className="text-xs text-[#41484A] block mt-1 leading-snug">
                      {stage.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#3E665B] font-bold mb-3">
              Included Protocols & Features
            </h4>
            <ul className="space-y-2.5">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#191C1B]">
                  <CheckCircle2 className="w-4 h-4 text-[#3E665B] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-[#C0C8C9] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onProceedToBooking(service.id);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00262B] text-[#F8FAF8] hover:bg-[#D5F06A] hover:text-[#00262B] px-6 py-3 font-mono text-xs uppercase tracking-widest font-bold transition-colors cursor-pointer"
            >
              <span>Request Consultation for This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="text-xs font-mono uppercase text-[#71787A] hover:text-[#00262B] cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
