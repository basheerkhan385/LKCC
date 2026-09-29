import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  Smile, 
  FileCheck2, 
  HardHat, 
  MessagesSquare, 
  Clock 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    ShieldCheck,
    Smile,
    FileCheck2,
    HardHat,
    MessagesSquare,
    Clock,
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="text-amber-500 font-bold tracking-wider text-xs uppercase mb-3">
            {t.whyUs.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            {t.whyUs.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 6 Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyUs.reasons.map((reason, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-slate-850/80 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-850 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
