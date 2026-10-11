import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ApproachSection } from './components/ApproachSection';
import { TreatmentOverview } from './components/TreatmentOverview';
import { ImplantCareSection } from './components/ImplantCareSection';
import { TreatmentPlanningSection } from './components/TreatmentPlanningSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { AppointmentForm } from './components/AppointmentForm';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { scrollToSection } from './utils/scrollHelper';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [detailModalServiceId, setDetailModalServiceId] = useState<string | null>(null);

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedService(serviceId);
    }
    scrollToSection('consultation-booking', 84);
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedService(serviceId);
    scrollToSection('consultation-booking', 84);
  };

  const handleOpenDetails = (serviceId: string) => {
    setDetailModalServiceId(serviceId);
  };

  const handleCloseDetails = () => {
    setDetailModalServiceId(null);
  };

  const handleProceedFromModal = (serviceId: string) => {
    setSelectedService(serviceId);
    scrollToSection('consultation-booking', 84);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] text-[#191C1B] flex flex-col font-sans selection:bg-[#B8E3D5] selection:text-[#00262B]">
      {/* 1. Header and navigation */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1 w-full pt-[76px]">
        {/* 2. Animated hero */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Introduction and care principles */}
        <ApproachSection />

        {/* 4. Treatment overview */}
        <TreatmentOverview
          onSelectService={handleSelectService}
          onOpenDetails={handleOpenDetails}
        />

        {/* 5. Implant-care feature */}
        <ImplantCareSection
          onSelectImplantBooking={() => handleSelectService('implant-consultation')}
        />

        {/* 6. Treatment-planning timeline */}
        <TreatmentPlanningSection />

        {/* 7. About the clinic */}
        <AboutSection />

        {/* 8. Google reviews */}
        <ReviewsSection />

        {/* 9. Appointment form */}
        <AppointmentForm
          selectedService={selectedService}
          onClearServiceSelection={() => setSelectedService('')}
        />

        {/* 10. Location and contact */}
        <LocationSection />
      </main>

      {/* 11. Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Clinical Details Dialog */}
      <ServiceDetailModal
        serviceId={detailModalServiceId}
        onClose={handleCloseDetails}
        onProceedToBooking={handleProceedFromModal}
      />
    </div>
  );
}
