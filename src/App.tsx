/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { OwnerSection } from './components/OwnerSection';
import { Services } from './components/Services';
import { TransportSection } from './components/TransportSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Projects } from './components/Projects';
import { WorkProcess } from './components/WorkProcess';
import { CompanyStats } from './components/CompanyStats';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { CustomizationModal } from './components/CustomizationModal';
import { LegalModal } from './components/LegalModal';
import { COMPANY_CONFIG } from './config/companyInfo';
import { MessageSquare, Phone } from 'lucide-react';

const MainContent: React.FC = () => {
  const { isRTL } = useLanguage();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isCustomizationModalOpen, setIsCustomizationModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('');

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyQuoteEstimate = (data: { projectType: string; message: string; budgetRange: string }) => {
    setPrefilledService(data.projectType);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 ${isRTL ? 'font-urdu' : 'font-english'}`}>
      
      {/* Navigation Bar */}
      <Navbar
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenCustomizationGuide={() => setIsCustomizationModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* Executive Owner Spotlight: Lal Khan (Founder & CEO, 30 Years Experience) */}
        <OwnerSection />

        {/* About LKCC Section */}
        <About onOpenCustomizationGuide={() => setIsCustomizationModalOpen(true)} />

        {/* Construction Services Section */}
        <Services onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Dedicated Construction Material Transport & Logistics Fleet Section */}
        <TransportSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* Why Choose LKCC */}
        <WhyChooseUs />

        {/* Projects / Portfolio */}
        <Projects />

        {/* 5-Step Work Process */}
        <WorkProcess />

        {/* Company Statistics (30+ Years, 850+ Projects, 75+ Dumpers) */}
        <CompanyStats onOpenCustomizationGuide={() => setIsCustomizationModalOpen(true)} />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Strong CTA */}
        <CallToAction onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* Contact Us & Direct Owner Lines */}
        <Contact
          prefilledService={prefilledService}
          onOpenCustomizationGuide={() => setIsCustomizationModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenCustomizationGuide={() => setIsCustomizationModalOpen(true)}
      />

      {/* Floating Action Buttons for quick mobile connect (stays within 15% sticky cap) */}
      <div className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-40 flex flex-col gap-3`}>
        {/* Floating Call */}
        <a
          href={`tel:${COMPANY_CONFIG.phoneRaw}`}
          aria-label="Call Lal Khan directly"
          className="w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-xl shadow-amber-900/30 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title={`Call Lal Khan: ${COMPANY_CONFIG.phone}`}
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Floating WhatsApp */}
        <a
          href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}?text=${encodeURIComponent(isRTL ? 'السلام علیکم لال خان صاحب! میں تعمیرات اور مٹیریل ٹرانسپورٹ کے بارے میں رابطہ کرنا چاہتا ہوں۔' : 'Hello Mr. Lal Khan! I would like to inquire about construction and material transport.')}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Lal Khan on WhatsApp"
          className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-900/40 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="WhatsApp Contact"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>

      {/* Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onApplyToForm={handleApplyQuoteEstimate}
      />

      <CustomizationModal
        isOpen={isCustomizationModalOpen}
        onClose={() => setIsCustomizationModalOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
