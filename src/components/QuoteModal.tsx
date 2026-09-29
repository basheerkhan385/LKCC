import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Calculator, ArrowRight, ArrowLeft, Check, Sparkles, Building2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyToForm: (data: { projectType: string; message: string; budgetRange: string }) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, onApplyToForm }) => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const [projectType, setProjectType] = useState<string>('Residential Villa');
  const [area, setArea] = useState<number>(2500);
  const [unit, setUnit] = useState<'sqft' | 'marla'>('sqft');
  const [finishGrade, setFinishGrade] = useState<'standard' | 'premium' | 'luxury'>('premium');

  if (!isOpen) return null;

  // Approximate base rates per sqft in PKR
  // Standard grey structure + basic finish: ~3,500 - 4,200 / sqft
  // Premium finish: ~4,800 - 6,000 / sqft
  // Luxury finish: ~6,800 - 9,500+ / sqft
  const effectiveSqFt = unit === 'marla' ? area * 225 : area;

  const rateBrackets = {
    standard: { min: 3600, max: 4400, label: t.quoteModal.qualities.standard },
    premium: { min: 5000, max: 6200, label: t.quoteModal.qualities.premium },
    luxury: { min: 7200, max: 9800, label: t.quoteModal.qualities.luxury },
  };

  const selectedRate = rateBrackets[finishGrade];
  const minEstimate = (effectiveSqFt * selectedRate.min);
  const maxEstimate = (effectiveSqFt * selectedRate.max);

  const formatPKR = (amount: number) => {
    if (amount >= 10000000) {
      const crore = (amount / 10000000).toFixed(2);
      return `${crore} Crore PKR`;
    } else if (amount >= 100000) {
      const lakh = (amount / 100000).toFixed(1);
      return `${lakh} Lakh PKR`;
    }
    return `${amount.toLocaleString()} PKR`;
  };

  const handleApply = () => {
    const formattedBudget = `${formatPKR(minEstimate)} – ${formatPKR(maxEstimate)}`;
    const prefilledMessage = `Project Estimate Request:\n- Type: ${projectType}\n- Covered Area: ${area} ${unit === 'marla' ? 'Marla (~' + effectiveSqFt + ' sq ft)' : 'sq ft'}\n- Finish Grade: ${selectedRate.label}\n- Preliminary Estimate: ${formattedBudget}`;
    
    onApplyToForm({
      projectType,
      message: prefilledMessage,
      budgetRange: minEstimate > 35000000 ? '35M - 75M PKR' : minEstimate > 15000000 ? '15M - 35M PKR' : '5M - 15M PKR',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Close quote calculator"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.quoteModal.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {t.quoteModal.subtitle}
            </p>
          </div>
        </div>

        {/* Body Form */}
        <div className="space-y-6 mt-6">
          
          {/* Project Type */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              {t.quoteModal.projectType}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['Residential Villa', 'Commercial Plaza', 'Civil Works', 'Renovation'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setProjectType(type)}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                    projectType === type
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md'
                      : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-600'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Area & Unit */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              {t.quoteModal.areaSize}
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min={100}
                max={500000}
                value={area || ''}
                onChange={(e) => setArea(Number(e.target.value))}
                placeholder={t.quoteModal.areaSizePlaceholder}
                className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <div className="flex bg-slate-800 p-1 rounded-xl border border-slate-700">
                <button
                  type="button"
                  onClick={() => setUnit('sqft')}
                  className={`px-3 py-2 text-xs font-bold rounded-lg cursor-pointer transition-colors ${
                    unit === 'sqft' ? 'bg-amber-500 text-slate-950' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Sq Ft
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('marla')}
                  className={`px-3 py-2 text-xs font-bold rounded-lg cursor-pointer transition-colors ${
                    unit === 'marla' ? 'bg-amber-500 text-slate-950' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Marla
                </button>
              </div>
            </div>
            {unit === 'marla' && (
              <span className="text-[11px] text-slate-400 mt-1 block font-mono">
                ~ {effectiveSqFt.toLocaleString()} Sq Ft standard calculation basis
              </span>
            )}
          </div>

          {/* Finishing Quality */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              {t.quoteModal.finishingQuality}
            </label>
            <div className="space-y-2">
              {(['standard', 'premium', 'luxury'] as const).map((grade) => (
                <div
                  key={grade}
                  onClick={() => setFinishGrade(grade)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    finishGrade === grade
                      ? 'bg-amber-500/10 border-amber-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                      finishGrade === grade ? 'border-amber-500 bg-amber-500 text-slate-950' : 'border-slate-600'
                    }`}>
                      {finishGrade === grade && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="text-xs font-medium">{rateBrackets[grade].label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Estimated Range Output */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-amber-500/30">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              {t.quoteModal.estimatedRange}
            </span>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
              {formatPKR(minEstimate)} – {formatPKR(maxEstimate)}
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed mt-2 italic">
              {t.quoteModal.disclaimer}
            </p>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={handleApply}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <span>{t.quoteModal.sendInquiry}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              {t.quoteModal.close}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
