import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../config/companyInfo';
import { Calendar, CheckSquare2, Users, Truck } from 'lucide-react';

interface CompanyStatsProps {
  onOpenCustomizationGuide: () => void;
}

export const CompanyStats: React.FC<CompanyStatsProps> = () => {
  const { isRTL } = useLanguage();

  const statItems = [
    {
      icon: Calendar,
      label: isRTL ? 'سالوں کا کامیاب تجربہ' : 'Years of Experience',
      value: '30+',
      sub: isRTL ? '1996 سے غیر متزلزل ساکھ' : 'Heritage Since 1996',
    },
    {
      icon: CheckSquare2,
      label: isRTL ? 'مکمل شدہ منصوبے' : 'Completed Projects',
      value: '850+',
      sub: isRTL ? 'رہائشی، تجارتی و انفراسٹرکچر' : 'Residential & Commercial',
    },
    {
      icon: Truck,
      label: isRTL ? 'ہیوی ٹرانسپورٹ فلیٹ' : 'Material Transport Fleet',
      value: '75+',
      sub: isRTL ? 'ڈمپر، ٹریلرز اور مکسر گاڑیاں' : 'Heavy Dumpers & Trailers',
    },
    {
      icon: Users,
      label: isRTL ? 'مطمئن کلائنٹس و پارٹنرز' : 'Satisfied Clients & Partners',
      value: '1,200+',
      sub: isRTL ? 'پاکستان بھر میں قابل اعتماد نیٹ ورک' : 'Across Pakistan',
    },
  ];

  return (
    <section className="py-20 bg-slate-950 border-y border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-amber-500 font-bold tracking-wider text-xs uppercase mb-2">
            {isRTL ? 'عملی اعداد و شمار اور صلاحیت' : 'Demonstrated Capacity'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            {isRTL ? '30 سالہ آپریشنل ریکارڈ اور اثاثہ جات' : '30-Year Operational Record & Fleet Scale'}
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            {isRTL 
              ? 'بانی لال خان کی زیرِ نگرانی تعمیراتی معیارات اور بلک میٹریل ٹرانسپورٹ کے تصدیق شدہ اعداد و شمار' 
              : 'Directly verified operational statistics under the leadership of Founder Lal Khan'}
          </p>
        </div>

        {/* 4 Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono tracking-tight mb-2">
                    {stat.value}
                  </div>
                  <div className="text-base font-bold text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400">
                    {stat.sub}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] font-semibold text-amber-500/80 uppercase tracking-wider">
                  {isRTL ? 'LKCC مصدقہ' : 'Verified by LKCC'}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
