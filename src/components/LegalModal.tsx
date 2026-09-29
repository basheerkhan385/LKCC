import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const { t } = useLanguage();

  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? t.legal.privacyTitle : t.legal.termsTitle;
  const content = isPrivacy ? t.legal.privacyContent : t.legal.termsContent;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative max-w-lg w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            {isPrivacy ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
          </div>
          <h3 className="text-xl font-bold text-white">
            {title}
          </h3>
        </div>

        <div className="text-sm text-slate-300 leading-relaxed mb-8 space-y-4">
          <p>{content}</p>
          <p className="text-xs text-slate-400 font-mono">
            LKCC – Lal Khan Construction Company | Governance & Compliance
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            {t.legal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
