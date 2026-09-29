import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Home, 
  Building2, 
  Hammer, 
  Sparkles, 
  Compass, 
  ClipboardCheck, 
  Truck,
  ArrowRight,
  ArrowLeft,
  Check
} from 'lucide-react';

interface ServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const iconMap: Record<string, React.ElementType> = {
    residential: Home,
    commercial: Building2,
    civil: Hammer,
    renovation: Sparkles,
    architecture: Compass,
    management: ClipboardCheck,
    infrastructure: Truck,
  };

  return (
    <section id="services" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-amber-500 font-bold tracking-wider text-xs uppercase mb-3">
            {t.services.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {t.services.items.map((service, index) => {
            const Icon = iconMap[service.id] || Building2;
            const isMarquee = index === 0 || index === 2; // Subtle visual hierarchy

            return (
              <div
                key={service.id}
                className={`rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between group border ${
                  isMarquee
                    ? 'bg-slate-900 border-amber-500/30 hover:border-amber-500/60 shadow-xl shadow-amber-500/5'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div>
                  {/* Service Icon with Glow */}
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-amber-500/20 transition-all">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Specific Key Capabilities */}
                  <ul className="space-y-2 mb-8 pt-4 border-t border-slate-800/80">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inquiry Action */}
                <button
                  type="button"
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-slate-800/80 hover:bg-amber-500 text-slate-200 hover:text-slate-950 text-xs font-bold transition-all duration-200 cursor-pointer"
                >
                  <span>{t.services.inquireBtn}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
