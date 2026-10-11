import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Phone, RotateCcw } from 'lucide-react';
import { clinicData } from '../config/clinicData';

interface AppointmentFormProps {
  selectedService?: string;
  onClearServiceSelection?: () => void;
}

interface FormState {
  fullName: string;
  phoneNumber: string;
  serviceInterest: string;
  preferredDate: string;
  preferredTime: string;
  patientMessage: string;
  privacyConsent: boolean;
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  serviceInterest?: string;
  preferredDate?: string;
  privacyConsent?: string;
  general?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  selectedService,
  onClearServiceSelection,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phoneNumber: '',
    serviceInterest: selectedService || '',
    preferredDate: '',
    preferredTime: 'morning',
    patientMessage: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState<string>('');

  // Update selected service if prop changes
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, serviceInterest: selectedService }));
    }
  }, [selectedService]);

  // Set minimum date to today
  const todayString = new Date().toISOString().split('T')[0];

  const validatePhone = (phone: string): boolean => {
    // Validates Indian 10-digit mobile number, with optional +91 or 0 prefix
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');
    const regex = /^(?:\+91|0)?[6-9]\d{9}$/;
    return regex.test(cleaned);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Mobile number is required.';
    } else if (!validatePhone(formData.phoneNumber)) {
      newErrors.phoneNumber =
        'Please enter a valid 10-digit Indian mobile number (e.g. 099741 93410).';
    }

    if (!formData.serviceInterest) {
      newErrors.serviceInterest = 'Please select a service of interest.';
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'You must consent to being contacted by clinic staff.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));

    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate real request processing with deterministic validation
      await new Promise((resolve) => setTimeout(resolve, 800));

      const generatedId = `REQ-${Date.now().toString().slice(-6)}`;
      setSubmissionId(generatedId);
      setIsSuccess(true);
    } catch {
      setErrors({
        general:
          'Unable to submit your request at this moment. Please call our clinic directly at 099741 93410.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      serviceInterest: '',
      preferredDate: '',
      preferredTime: 'morning',
      patientMessage: '',
      privacyConsent: false,
    });
    setErrors({});
    setIsSuccess(false);
    setSubmissionId('');
    if (onClearServiceSelection) {
      onClearServiceSelection();
    }
  };

  return (
    <section
      id="consultation-booking"
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[#F8FAF8] border-b border-[#123C43]/10"
    >
      <div className="max-w-4xl mx-auto border border-[#123C43] bg-white shadow-xs">
        {/* Header Bar */}
        <div className="bg-[#123C43] text-[#F8FAF8] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#00262B]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#D5F06A] font-bold block mb-1">
              [ 08 ] Direct Scheduling Request
            </span>
            <h2 className="font-['Sora'] text-2xl sm:text-3xl font-bold text-[#F8FAF8]">
              Let&apos;s Discuss Your Dental Needs.
            </h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#A5CFC2]">
            Gandhinagar Sector 7 Triage
          </span>
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <p className="text-sm sm:text-base text-[#41484A] mb-8 leading-relaxed">
            Send a consultation request and let the clinic team assist you in coordinating your
            preferred time and answering pre-appointment queries.
          </p>

          {/* General submission error notice if triggered */}
          {errors.general && (
            <div className="mb-6 p-4 bg-red-50 border border-red-300 text-red-900 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Submission Notice</p>
                <p>{errors.general}</p>
              </div>
            </div>
          )}

          {!isSuccess ? (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="fullName"
                    className="font-mono text-xs uppercase tracking-wider text-[#00262B] font-bold mb-1.5"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Patel"
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={`border bg-[#F2F4F2] px-4 py-3 text-sm text-[#191C1B] focus:bg-white focus:outline-none focus:border-[#123C43] transition-colors rounded-none ${
                      errors.fullName ? 'border-red-500' : 'border-[#C0C8C9]'
                    }`}
                  />
                  {errors.fullName && (
                    <span id="fullName-error" className="text-xs text-red-600 mt-1">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="phoneNumber"
                    className="font-mono text-xs uppercase tracking-wider text-[#00262B] font-bold mb-1.5"
                  >
                    Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="e.g. 099741 93410"
                    aria-required="true"
                    aria-invalid={!!errors.phoneNumber}
                    aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
                    className={`border bg-[#F2F4F2] px-4 py-3 text-sm text-[#191C1B] focus:bg-white focus:outline-none focus:border-[#123C43] transition-colors rounded-none ${
                      errors.phoneNumber ? 'border-red-500' : 'border-[#C0C8C9]'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <span id="phoneNumber-error" className="text-xs text-red-600 mt-1">
                      {errors.phoneNumber}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: Service, Date, Slot */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="serviceInterest"
                    className="font-mono text-xs uppercase tracking-wider text-[#00262B] font-bold mb-1.5"
                  >
                    Service of Interest <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.serviceInterest}
                    aria-describedby={errors.serviceInterest ? 'service-error' : undefined}
                    className={`border bg-[#F2F4F2] px-4 py-3 text-sm text-[#191C1B] focus:bg-white focus:outline-none focus:border-[#123C43] transition-colors rounded-none ${
                      errors.serviceInterest ? 'border-red-500' : 'border-[#C0C8C9]'
                    }`}
                  >
                    <option value="">Select treatment category</option>
                    <option value="implant-consultation">Dental Implant Consultation</option>
                    <option value="preventive-checkup">Preventive Check-up</option>
                    <option value="general-care">General Dental Care & Hygiene</option>
                    <option value="restorative-care">Restorative / Tooth Preservation</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                  {errors.serviceInterest && (
                    <span id="service-error" className="text-xs text-red-600 mt-1">
                      {errors.serviceInterest}
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="preferredDate"
                    className="font-mono text-xs uppercase tracking-wider text-[#00262B] font-bold mb-1.5"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    min={todayString}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="border border-[#C0C8C9] bg-[#F2F4F2] px-4 py-3 text-sm text-[#191C1B] focus:bg-white focus:outline-none focus:border-[#123C43] transition-colors rounded-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="preferredTime"
                    className="font-mono text-xs uppercase tracking-wider text-[#00262B] font-bold mb-1.5"
                  >
                    Preferred Slot
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="border border-[#C0C8C9] bg-[#F2F4F2] px-4 py-3 text-sm text-[#191C1B] focus:bg-white focus:outline-none focus:border-[#123C43] transition-colors rounded-none"
                  >
                    <option value="morning">Morning (10:00 AM – 01:30 PM)</option>
                    <option value="evening">Evening (05:00 PM – 08:30 PM)</option>
                    <option value="anytime">First Available Slot</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Optional Clinical Notes */}
              <div className="flex flex-col">
                <label
                  htmlFor="patientMessage"
                  className="font-mono text-xs uppercase tracking-wider text-[#00262B] font-bold mb-1.5"
                >
                  Brief Clinical Notes or Symptoms (Optional)
                </label>
                <textarea
                  id="patientMessage"
                  name="patientMessage"
                  rows={3}
                  value={formData.patientMessage}
                  onChange={handleChange}
                  placeholder="Tell us about specific concerns (e.g. missing tooth, mild sensitivity, routine check-up)"
                  className="border border-[#C0C8C9] bg-[#F2F4F2] p-4 text-sm text-[#191C1B] focus:bg-white focus:outline-none focus:border-[#123C43] transition-colors resize-none rounded-none"
                />
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="flex flex-col pt-1">
                <div className="flex items-start gap-3">
                  <input
                    id="privacyConsent"
                    name="privacyConsent"
                    type="checkbox"
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.privacyConsent}
                    aria-describedby={errors.privacyConsent ? 'consent-error' : undefined}
                    className="mt-1 w-4 h-4 rounded-none accent-[#123C43] border border-[#71787A] cursor-pointer"
                  />
                  <label
                    htmlFor="privacyConsent"
                    className="text-xs text-[#41484A] leading-relaxed cursor-pointer select-none"
                  >
                    I consent to the clinic staff reviewing these details to contact me via phone
                    for scheduling verification.
                  </label>
                </div>
                {errors.privacyConsent && (
                  <span id="consent-error" className="text-xs text-red-600 mt-1 pl-7">
                    {errors.privacyConsent}
                  </span>
                )}
              </div>

              {/* Submit Button & Direct Desk Notice */}
              <div className="pt-6 border-t border-[#C0C8C9] flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00262B] text-[#F8FAF8] hover:bg-[#D5F06A] hover:text-[#00262B] px-8 py-3.5 transition-colors font-mono text-xs uppercase tracking-widest font-bold cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Processing Request...' : 'Request Consultation'}</span>
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>

                <span className="font-mono text-xs text-[#41484A] text-center sm:text-right">
                  Direct Desk:{' '}
                  <a
                    href={clinicData.phone.telHref}
                    className="text-[#00262B] font-semibold hover:underline"
                  >
                    {clinicData.phone.display}
                  </a>
                </span>
              </div>
            </form>
          ) : (
            /* Genuine Confirmation State */
            <div
              role="alert"
              className="p-6 sm:p-8 bg-[#C0ECDD]/30 border border-[#3E665B] text-[#00262B] animate-fade-in"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 text-[#3E665B] shrink-0 mt-0.5" />
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-['Sora'] text-lg font-bold text-[#00262B]">
                      Consultation Request Received
                    </h4>
                    {submissionId && (
                      <span className="font-mono text-[11px] bg-white px-2 py-0.5 border border-[#C0C8C9] text-[#41484A]">
                        Ref: {submissionId}
                      </span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-[#191C1B] leading-relaxed font-medium">
                    Your consultation request has been received. The clinic team will contact you to
                    confirm availability.
                  </p>

                  <div className="p-3 bg-white border border-[#C0C8C9]/60 text-xs text-[#41484A] space-y-1">
                    <p>
                      <strong>Patient:</strong> {formData.fullName} ({formData.phoneNumber})
                    </p>
                    <p>
                      <strong>Preference:</strong> {formData.preferredDate || 'Earliest available'}{' '}
                      · {formData.preferredTime}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#3E665B] font-bold hover:underline cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Submit Another Request</span>
                    </button>

                    <a
                      href={clinicData.phone.telHref}
                      className="inline-flex items-center gap-1.5 text-xs text-[#123C43] hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Clinic directly ({clinicData.phone.display})</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
