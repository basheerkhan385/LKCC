import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Quote, UserCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-amber-500 font-bold tracking-wider text-xs uppercase mb-3">
            {t.testimonials.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4">
            {t.testimonials.subtitle}
          </p>
          <div className="inline-block px-3 py-1 rounded bg-slate-800 text-[11px] font-mono text-amber-400 border border-slate-700">
            {t.testimonials.placeholderNotice}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-850/90 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-500/40 mb-6" />
                <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                  {item.review}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-mono">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-amber-500/90 font-mono">
                    {item.project}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
