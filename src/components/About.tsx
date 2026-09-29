import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../config/companyInfo';
import { History, Target, Award, MapPin, HardHat, Truck } from 'lucide-react';

interface AboutProps {
  onOpenCustomizationGuide: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCustomizationGuide }) => {
  const { isRTL } = useLanguage();

  const companyHighlights = [
    {
      icon: Award,
      title: isRTL ? '30 سالہ عملی تاریخ اور ساکھ' : '30+ Years Proven Industry Heritage',
      content: isRTL
        ? 'لال خان صاحب کی دوراندیش قیادت میں 30 سال قبل قائم ہونے والی کمپنی نے پاکستان کے مختلف شہروں میں رہائشی، تجارتی اور انفراسٹرکچر کے بے شمار منصوبے کامیابی سے مکمل کیے ہیں۔'
        : 'Founded over 30 years ago by Mr. Lal Khan, LKCC has built an unblemished reputation for structural integrity, superior concrete workmanship, and client trust across Pakistan.',
    },
    {
      icon: Truck,
      title: isRTL ? 'تعمیراتی میٹریل کی ٹرانسپورٹ ڈویژن' : 'Construction Material Transport Division',
      content: isRTL
        ? 'کمپنی ڈمپر ٹرکوں اور ٹریلرز کے ذریعے ریت، بجری، مارگلہ کرش، سیمنٹ، اینٹیں اور سرییا براہِ راست کانوں اور ملوں سے سائٹ پر 24/7 سپلائی کرتی ہے۔'
        : 'Operating a specialized heavy fleet of dumpers and multi-axle trailers, delivering river sand, Margalla/Sargodha crushed stone, certified cement, steel rebar, and clay bricks 24/7.',
    },
    {
      icon: Target,
      title: isRTL ? 'مشن، وژن اور شفافیت' : 'Mission, Vision & Values',
      content: isRTL
        ? 'ہر پراجیکٹ پر مضبوط فاؤنڈیشن، معیاری میٹریل کا استعمال، لاگت کا درست اور ایماندارانہ حساب کتاب، اور مقررہ وقت پر چابی کی باوقار حوالگی۔'
        : 'To construct enduring physical assets and maintain the most reliable bulk material supply chain with strict safety codes and zero hidden pricing.',
    },
    {
      icon: MapPin,
      title: isRTL ? 'آپریٹنگ نیٹ ورک' : 'Operational Footprint',
      content: isRTL
        ? 'پورے ملک میں تعمیراتی سائٹس، ہاؤسنگ سوسائٹیز، روڈ انفراسٹرکچر اور انڈسٹریل کوریڈورز میں سرگرم خدمات۔'
        : 'Serving urban centers, commercial developments, major housing authorities, and regional transport infrastructure networks across Pakistan.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-amber-500 font-bold tracking-wider text-xs uppercase mb-3">
            {isRTL ? 'ایل کے سی سی کا تعارف' : 'About LKCC'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {isRTL 
              ? 'ایل کے سی سی – لال خان کنسٹرکشن اینڈ ٹرانسپورٹ کمپنی' 
              : 'About LKCC – Lal Khan Construction & Material Transport'}
          </h2>
          <p className="text-lg text-amber-400 font-semibold leading-relaxed mb-4">
            {isRTL
              ? '30 سالہ تجربہ، اعلیٰ تعمیراتی معیار اور تعمیراتی میٹریل کی ترسیل کا بااعتماد ادارہ۔'
              : 'Over 30 years of premier construction engineering and heavy construction material transport logistics.'}
          </p>
          <p className="text-base text-slate-300 leading-relaxed">
            {isRTL
              ? 'لال خان کنسٹرکشن کمپنی صرف عمارتیں بنانے تک محدود نہیں ہے بلکہ یہ تعمیراتی سامان (ریت، بجری، سیمنٹ، سرییا، اینٹیں) کی ترسیل کے لیے ایک وسیع اور منظم ہیوی ٹرانسپورٹ فلیٹ بھی چلاتی ہے۔ ہم منصوبے کی ابتدائی کھدائی اور میٹریل کی فراہمی سے لے کر سٹرکچر کی تکمیل اور اعلیٰ فنشنگ تک تمام مراحل کو خود سنبھالتے ہیں۔'
              : 'LKCC is not merely a general contracting firm; we operate a full-scale heavy material haulage division. By controlling both structural execution and the transport supply chain (sand, gravel, cement, steel, bricks), we eliminate subcontractor delays and pass direct quarry/mill savings on to our clients.'}
          </p>
        </div>

        {/* Dual Layout: Media Spotlight & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Construction & Architectural Photography */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-800">
              <img
                src="/src/assets/images/about_construction_site_1790687970681.jpg"
                alt="LKCC Engineering and Site Coordination"
                referrerPolicy="no-referrer"
                className="w-full h-[470px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      {isRTL ? '30 سالہ مصدقہ معیار و حفاظت' : '30+ Years Verified Field Quality'}
                    </div>
                    <div className="text-xs text-slate-300">
                      {isRTL ? 'سول انجینئرز اور فلیٹ سپروائزرز کی سخت نگرانی' : 'Supervised by senior civil engineers & fleet directors'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Structured Factual Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {companyHighlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-slate-850/85 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-amber-400 uppercase tracking-wider font-semibold">
                    {isRTL ? 'LKCC تصدیق شدہ' : 'Verified Capability'}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
