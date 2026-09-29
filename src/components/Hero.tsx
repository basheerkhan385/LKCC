import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../config/companyInfo';
import { ArrowRight, ArrowLeft, ShieldCheck, Building, Wrench, Truck, Phone, MessageSquare } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950"
    >
      {/* Background Image with Dark Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_construction_site_1790687955838.jpg"
          alt="LKCC Lal Khan Major Construction & Civil Engineering Site"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 hero-scrim" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-center">
        
        {/* Quality Marker Tag: 30 Years Experience */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 text-xs sm:text-sm font-bold mb-6 backdrop-blur-md self-start shadow-lg">
          <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            {isRTL 
              ? '30 سالہ قابل اعتماد تجربہ | بانی و سی ای او: لال خان' 
              : '30+ Years Industry Excellence | Founder & CEO: Lal Khan'}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl text-balance mb-6">
          {isRTL 
            ? 'آپ کے وژن کی تعمیر، آپ کے خوابوں کی پائیدار تکمیل' 
            : 'Building Your Vision, Constructing Your Future.'}
        </h1>

        {/* Supporting Narrative */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed mb-10 font-normal">
          {isRTL
            ? 'ایل کے سی سی – لال خان کنسٹرکشن اینڈ میٹریل ٹرانسپورٹ کمپنی: اعلیٰ معیار کی رہائشی و تجارتی تعمیرات، سول انجینئرنگ اور تعمیراتی مٹیریل (ریت، بجری، سیمنٹ، سرییا) کی ڈمپر اور ٹریلر فلیٹ کے ذریعے بروقت ترسیل۔'
            : 'LKCC – Lal Khan Construction & Material Transport Company delivers premier turnkey building construction, civil engineering, and specialized bulk construction material haulage (sand, gravel, cement, steel) with 30+ years of trust, safety, and direct accountability.'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <button
            onClick={onOpenQuoteModal}
            type="button"
            className="flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-xl shadow-lg shadow-amber-500/25 transition-all duration-200 cursor-pointer active:scale-98"
          >
            <span>{t.hero.requestQuote}</span>
            <ArrowIcon className="w-5 h-5" />
          </button>

          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 rounded-xl backdrop-blur-md transition-all duration-200"
          >
            <Phone className="w-5 h-5 text-amber-400" />
            <span>{isRTL ? 'لال خان سے رابطہ:' : 'Call Lal Khan:'}</span>
            <span className="dir-ltr text-amber-300 font-mono">{COMPANY_CONFIG.phone}</span>
          </a>

          <a
            href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg transition-all duration-200"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* 4 Core Pillars */}
        <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-center gap-3 text-slate-200">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">
                {isRTL ? 'رہائشی و کمرشل تعمیرات' : 'Residential & Commercial'}
              </div>
              <div className="text-[11px] text-slate-400">
                {isRTL ? 'بنگلے اور پلازے' : 'Villas & High-rises'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-200">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">
                {isRTL ? 'مٹیریل ٹرانسپورٹ فلیٹ' : 'Material Transport Fleet'}
              </div>
              <div className="text-[11px] text-slate-400">
                {isRTL ? 'ڈمپر، ریت و بجری سپلائی' : '75+ Heavy Dumpers'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-200">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">
                {isRTL ? 'سول انجینئرنگ' : 'Civil Engineering'}
              </div>
              <div className="text-[11px] text-slate-400">
                {isRTL ? 'بنیادیں اور سٹرکچر' : 'Heavy Foundations'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-200">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">
                {isRTL ? '30 سالہ تجربہ' : '30+ Years Heritage'}
              </div>
              <div className="text-[11px] text-slate-400">
                {isRTL ? 'بے مثال ساکھ' : '100% Client Trust'}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
