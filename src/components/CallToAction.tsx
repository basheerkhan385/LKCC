import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ArrowLeft, PhoneCall, Calculator } from 'lucide-react';

interface CallToActionProps {
  onOpenQuoteModal: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenQuoteModal }) => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* Background Image with Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_construction_site_1790687955838.jpg"
          alt="LKCC Construction Skyline"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 text-balance">
          {t.cta.title}
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          {t.cta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-xl shadow-xl shadow-amber-500/20 transition-all cursor-pointer"
          >
            <Calculator className="w-5 h-5" />
            <span>{t.cta.requestQuote}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-slate-900/90 hover:bg-slate-850 border border-slate-700 rounded-xl transition-all"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>{t.cta.contactUs}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
