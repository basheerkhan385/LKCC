import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../config/companyInfo';
import { X, Code2, FileCode, CheckCircle2, Copy, Check } from 'lucide-react';

interface CustomizationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomizationModal: React.FC<CustomizationModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [copiedKey, setCopiedKey] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const placeholdersList = [
    {
      title: 'Company Logo',
      placeholder: '[INSERT LKCC COMPANY LOGO HERE]',
      file: '/src/config/companyInfo.ts',
      param: 'logoUrl: "/path-to-your-logo.png"',
      note: 'Set image URL or place your image in /src/assets/images/. Leave blank to show the neat LKCC vector badge.',
    },
    {
      title: 'Phone Number',
      placeholder: COMPANY_CONFIG.phone,
      file: '/src/config/companyInfo.ts',
      param: 'phone: "+92 300 1234567", phoneRaw: "+923001234567"',
      note: 'Enter phone string for display, and phoneRaw for direct click-to-call mobile dialer.',
    },
    {
      title: 'Email Address',
      placeholder: COMPANY_CONFIG.email,
      file: '/src/config/companyInfo.ts',
      param: 'email: "info@lkcc.com.pk"',
      note: 'Automatically powers all mailto: buttons on the website.',
    },
    {
      title: 'Office Address',
      placeholder: COMPANY_CONFIG.officeAddress,
      file: '/src/config/companyInfo.ts',
      param: 'officeAddress: "Plot 12, Main Commercial Ave, Islamabad"',
      note: 'Both English and Urdu versions can be set in companyInfo.ts.',
    },
    {
      title: 'WhatsApp Number',
      placeholder: COMPANY_CONFIG.whatsapp,
      file: '/src/config/companyInfo.ts',
      param: 'whatsapp: "+92 300 1234567", whatsappRaw: "923001234567"',
      note: 'whatsappRaw should be just country code + number without plus sign.',
    },
    {
      title: 'Company Established Year',
      placeholder: COMPANY_CONFIG.establishedYear,
      file: '/src/config/companyInfo.ts',
      param: 'establishedYear: "2010"',
      note: 'Shows in the footer and about section once set.',
    },
    {
      title: 'Portfolio Projects & Images',
      placeholder: '[DEMO PROJECTS]',
      file: '/src/i18n/translations.ts',
      param: 'projects.items: [ ... ]',
      note: 'Replace demo project names, descriptions, locations, and images with real completed projects.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Close guide modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            <FileCode className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.customizationGuide.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {t.customizationGuide.subtitle}
            </p>
          </div>
        </div>

        {/* 3 Step Quick Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-bold text-amber-400 mb-1">
              {t.customizationGuide.step1Title}
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              {t.customizationGuide.step1Desc}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-bold text-amber-400 mb-1">
              {t.customizationGuide.step2Title}
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              {t.customizationGuide.step2Desc}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-bold text-amber-400 mb-1">
              {t.customizationGuide.step3Title}
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              {t.customizationGuide.step3Desc}
            </p>
          </div>
        </div>

        {/* Placeholders Table */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Editable Placeholders Checklist
          </h4>

          {placeholdersList.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">{item.title}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    {item.file}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(item.param, item.title)}
                  className="inline-flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 font-mono cursor-pointer self-start sm:self-auto"
                >
                  {copiedKey === item.title ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy snippet</span>
                    </>
                  )}
                </button>
              </div>

              <div className="font-mono text-xs text-amber-300 bg-slate-900 p-2 rounded-lg mb-2 break-all">
                {item.placeholder}
              </div>

              <p className="text-[11px] text-slate-400">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
          >
            {t.customizationGuide.close}
          </button>
        </div>

      </div>
    </div>
  );
};
