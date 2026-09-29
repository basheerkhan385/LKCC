import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  MessagesSquare, 
  MapPin, 
  Calculator, 
  HardHat, 
  KeyRound 
} from 'lucide-react';

export const WorkProcess: React.FC = () => {
  const { t } = useLanguage();

  const stepIcons = [
    MessagesSquare,
    MapPin,
    Calculator,
    HardHat,
    KeyRound,
  ];

  return (
    <section id="process" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="text-amber-500 font-bold tracking-wider text-xs uppercase mb-3">
            {t.process.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            {t.process.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {t.process.steps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <div
                key={index}
                className="relative rounded-2xl p-6 bg-slate-850/90 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-amber-500 font-mono">
                      {step.stepNumber}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:bg-amber-500/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
                  Stage {index + 1} of 5
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
