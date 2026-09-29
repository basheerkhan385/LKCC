import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../config/companyInfo';
import { Truck, CheckCircle2, Shield, Clock, Phone, MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react';

interface TransportSectionProps {
  onOpenQuoteModal: () => void;
}

export const TransportSection: React.FC<TransportSectionProps> = ({ onOpenQuoteModal }) => {
  const { isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const fleetPillars = [
    {
      title: isRTL ? 'ہیوی ڈمپر اور ٹریلر فلیٹ' : 'Heavy Dumper & Trailer Fleet',
      desc: isRTL ? 'ریت، بجری اور مٹی کی تیز رفتار اور بلک ترسیل کے لیے خصوصی ڈمپر ٹرک۔' : 'Dedicated high-tonnage dumpers and multi-axle trailers for swift bulk aggregate movement.',
    },
    {
      title: isRTL ? '24/7 آن سائٹ سپلائی' : '24/7 Site Delivery Timelines',
      desc: isRTL ? 'منصوبے میں تاخیر سے بچنے کے لیے دن اور رات مسلسل مٹیریل سپلائی کی سہولت۔' : 'Round-the-clock dispatch schedules guaranteeing project pouring and structural continuity.',
    },
    {
      title: isRTL ? 'مصدقہ اور اعلیٰ معیار' : 'Certified & Tested Material',
      desc: isRTL ? 'سیمنٹ، ریت، بجری اور سرییا لیبارٹری ٹیسٹ شدہ اور تصدیق شدہ کوالٹی کا۔' : 'Laboratory-verified gravel, certified river sand, branded cement, and grade-60 steel.',
    },
    {
      title: isRTL ? 'شفاف اور مناسب ریٹس' : 'Direct Quarry & Mill Pricing',
      desc: isRTL ? 'براہِ راست کرشرز اور ملز سے فراہمی جس سے کلائنٹ کو بہترین اور سستے ریٹس ملتے ہیں۔' : 'Transparent competitive per-ton and per-dumper rates without intermediary markups.',
    },
  ];

  return (
    <section id="transport" className="py-24 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase mb-3">
            <Truck className="w-4 h-4 text-amber-400" />
            <span>{isRTL ? 'ٹرانسپورٹ اور لاجسٹکس سروسز' : 'Heavy Material Logistics & Haulage'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {isRTL ? COMPANY_CONFIG.transportCapabilities.titleUrdu : COMPANY_CONFIG.transportCapabilities.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mt-4">
            {isRTL ? COMPANY_CONFIG.transportCapabilities.descUrdu : COMPANY_CONFIG.transportCapabilities.desc}
          </p>
        </div>

        {/* Spotlight: Fleet Image + Material Inventory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Transport Fleet Image */}
          <div className="lg:col-span-6 relative group">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-850 relative">
              <img
                src="/src/assets/images/transport_fleet_1790690695057.jpg"
                alt="LKCC Heavy Construction Material Transport Fleet"
                referrerPolicy="no-referrer"
                className="w-full h-[440px] object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              
              {/* Overlay Stat Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">
                    {isRTL ? 'لال خان ٹرانسپورٹ فلیٹ' : 'LKCC Heavy Transport Fleet'}
                  </div>
                  <div className="text-xs text-amber-400">
                    {isRTL ? 'ڈمپر، ٹریلر اور بلک سپلائی گاڑیاں' : 'Dumpers, Multi-axle Trailers & Mixers'}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-amber-400 font-mono">75+</span>
                  <span className="block text-[10px] text-slate-400 uppercase">
                    {isRTL ? 'گاڑیاں' : 'Vehicles'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Supplied Materials List */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-850 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">
                {isRTL ? 'فراہم کردہ اہم تعمیراتی مٹیریل:' : 'Bulk Construction Materials We Supply & Transport:'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {isRTL 
                  ? 'ایل کے سی سی ہر قسم کی چھوٹی اور بڑی تعمیراتی سائٹس پر کوالٹی میٹریل کی براہِ راست ترسیل کی ذمہ داری لیتی ہے۔'
                  : 'We supply certified structural materials directly from top quarries, mills, and kilns with guaranteed prompt site delivery.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {(isRTL ? COMPANY_CONFIG.transportCapabilities.materialsUrdu : COMPANY_CONFIG.transportCapabilities.materials).map((mat, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-md transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>{isRTL ? 'مٹیریل آرڈر کریں (کال)' : 'Order Material (Call Now)'}</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}?text=${encodeURIComponent(isRTL ? 'السلام علیکم! مجھے تعمیراتی مٹیریل اور ٹرانسپورٹ کے بارے میں معلومات اور ریٹس چاہییں۔' : 'Hello! I need information and rates for construction material transport.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isRTL ? 'واٹس ایپ پر ریٹس لیں' : 'Get Rates on WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Transport Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetPillars.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-850/80 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                  <Truck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-amber-400 font-semibold">
                {isRTL ? 'تصدیق شدہ سروس' : 'Verified Logistics'}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
