import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../config/companyInfo';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  ExternalLink,
  RotateCcw,
  Truck,
  Building
} from 'lucide-react';

interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

interface ContactProps {
  prefilledService?: string;
  onOpenCustomizationGuide: () => void;
}

export const Contact: React.FC<ContactProps> = ({ prefilledService, onOpenCustomizationGuide }) => {
  const { t, isRTL } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    projectType: prefilledService || '',
    budgetRange: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  React.useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, projectType: prefilledService }));
    }
  }, [prefilledService]);

  const validate = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = t.contact.form.errors.nameRequired;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errors.phone = t.contact.form.errors.phoneRequired;
    }
    if (!formData.email.trim()) {
      errors.email = t.contact.form.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = t.contact.form.errors.emailInvalid;
    }
    if (!formData.projectType) {
      errors.projectType = t.contact.form.errors.projectRequired;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errors.message = t.contact.form.errors.messageRequired;
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setSubmissionSuccess(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      projectType: '',
      budgetRange: '',
      message: '',
    });
    setFormErrors({});
  };

  const projectTypeOptions = [
    { value: 'Construction Material Transport', label: isRTL ? 'تعمیراتی مٹیریل کی ترسیل (ریت، بجری، سیمنٹ، سرییا)' : 'Construction Material Transport (Sand, Gravel, Cement, Steel)' },
    { value: 'Residential Construction', label: isRTL ? 'رہائشی تعمیرات (ولا، گھر، بنگلہ)' : 'Residential Construction (Villas, Houses)' },
    { value: 'Commercial Construction', label: isRTL ? 'تجارتی تعمیرات (پلازہ، دفاتر، دکانیں)' : 'Commercial Construction (Offices, Plazas)' },
    { value: 'Civil Engineering Works', label: isRTL ? 'سول انجینئرنگ اور بھاری فاؤنڈیشن' : 'Civil Engineering & Heavy Foundations' },
    { value: 'Renovation & Remodeling', label: isRTL ? 'عمارت کی تزئین و آرائش' : 'Renovation & Building Remodeling' },
    { value: 'Architectural Planning', label: isRTL ? 'نقشہ جات اور آرکیٹیکچرل پلاننگ' : 'Architectural Planning & Blueprints' },
  ];

  const budgetOptions = [
    { value: 'Material Supply Quote', label: isRTL ? 'مٹیریل سپلائی کوٹیشن (ٹرانسپورٹ ریٹس)' : 'Bulk Material Transport & Supply Rates' },
    { value: 'Under 5M PKR', label: isRTL ? '50 لاکھ روپے سے کم' : 'Under 5 Million PKR' },
    { value: '5M - 15M PKR', label: isRTL ? '50 لاکھ تا 1.5 کروڑ روپے' : '5M – 15 Million PKR' },
    { value: '15M - 35M PKR', label: isRTL ? '1.5 کروڑ تا 3.5 کروڑ روپے' : '15M – 35 Million PKR' },
    { value: '35M+ PKR', label: isRTL ? '3.5 کروڑ روپے سے زائد' : '35 Million+ PKR / Large Commercial' },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-amber-500 font-bold tracking-wider text-xs uppercase mb-3">
            {isRTL ? 'رابطہ کیجیے' : 'Get In Touch Directly'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {isRTL 
              ? 'لال خان اور ایل کے سی سی ٹیم سے رابطہ کریں' 
              : 'Contact Lal Khan & The LKCC Engineering Team'}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {isRTL
              ? 'تعمیراتی مشاورت، سائٹ وزٹ یا ریت، بجری، سیمنٹ اور سرییا کی بلک ترسیل کے لیے ہمارے دیے گئے نمبروں پر فوری رابطہ فرمائیں۔'
              : 'Reach out directly for building inquiries, turnkey construction, or immediate bulk material dispatch quotes across Pakistan.'}
          </p>
        </div>

        {/* 4 Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Direct Phone / Call */}
          <div className="p-6 rounded-2xl bg-slate-850 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                {isRTL ? 'براہِ راست فون / موبائل' : 'Direct Phone / Mobile'}
              </h3>
              <p className="text-lg font-bold font-mono text-white mb-1 dir-ltr text-left">
                {COMPANY_CONFIG.phone}
              </p>
              <span className="text-[11px] text-amber-400 block mb-4">
                {isRTL ? 'لال خان (بانی و سی ای او)' : 'Lal Khan (Founder & CEO)'}
              </span>
            </div>
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all"
            >
              <span>{isRTL ? 'ابھی کال کریں' : 'Call Directly'}</span>
              <Phone className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* WhatsApp Direct */}
          <div className="p-6 rounded-2xl bg-slate-850 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                {isRTL ? 'واٹس ایپ رابطہ' : 'WhatsApp Chat'}
              </h3>
              <p className="text-lg font-bold font-mono text-white mb-1 dir-ltr text-left">
                {COMPANY_CONFIG.whatsapp}
              </p>
              <span className="text-[11px] text-emerald-400 block mb-4">
                {isRTL ? '24/7 آن لائن میسجنگ' : 'Instant 24/7 Messaging'}
              </span>
            </div>
            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
            >
              <span>{isRTL ? 'واٹس ایپ پر میسج کریں' : 'Chat on WhatsApp'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Direct Email */}
          <div className="p-6 rounded-2xl bg-slate-850 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                {isRTL ? 'آفیشل ای میل' : 'Official Email'}
              </h3>
              <p className="text-sm font-bold font-mono text-white mb-1 break-all">
                {COMPANY_CONFIG.email}
              </p>
              <span className="text-[11px] text-slate-400 block mb-4">
                {isRTL ? 'کوٹیشن اور ٹینڈر انکوائری' : 'Quotes & Tender Inquiries'}
              </span>
            </div>
            <a
              href={`mailto:${COMPANY_CONFIG.email}`}
              className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs border border-slate-700 transition-all"
            >
              <span>{isRTL ? 'ای میل بھیجیں' : 'Send Email'}</span>
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Head Office Address */}
          <div className="p-6 rounded-2xl bg-slate-850 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                {isRTL ? 'مرکزی دفتر' : 'Head Office & Fleet Hub'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mb-2 leading-relaxed">
                {isRTL ? COMPANY_CONFIG.officeAddressUrdu : COMPANY_CONFIG.officeAddress}
              </p>
            </div>
            <div className="text-[11px] text-amber-400 font-semibold pt-2 border-t border-slate-800">
              {isRTL ? '24 گھنٹے مٹیریل ٹرانسپورٹ دستیاب' : '24/7 Material Transport Operations'}
            </div>
          </div>

        </div>

        {/* Contact Form & Side Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-slate-850 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <h3 className="text-2xl font-extrabold text-white mb-2">
              {isRTL ? 'تعمیراتی یا مٹیریل ٹرانسپورٹ کی انکوائری بھیجیں' : 'Send Project or Material Haulage Inquiry'}
            </h3>
            <p className="text-xs text-amber-400 mb-8 font-medium">
              {isRTL 
                ? 'فارم پُر کریں یا براہِ راست فون/واٹس ایپ (0321 2170813) پر رابطہ کریں۔' 
                : 'Fill out this inquiry or contact Lal Khan directly on Phone/WhatsApp: 0321 2170813'}
            </p>

            {submissionSuccess ? (
              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-slate-200 animate-in fade-in duration-300">
                <div className="flex items-center gap-3 text-amber-400 mb-3">
                  <CheckCircle className="w-6 h-6 shrink-0" />
                  <h4 className="text-lg font-bold">
                    {isRTL ? 'آپ کی انکوائری کامیابی سے موصول ہو چکی ہے' : 'Inquiry Successfully Registered!'}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {isRTL
                    ? 'شکریہ! جناب لال خان صاحب اور LKCC کی تکنیکی ٹیم آپ کے پیغام کا جائزہ لے کر جلد از جلد آپ سے رابطہ کرے گی۔ فوری گفتگو کے لیے 0321 2170813 پر کال یا واٹس ایپ بھی کر سکتے ہیں۔'
                    : 'Thank you! Mr. Lal Khan and the LKCC engineering team will review your specifications and contact you shortly. For immediate response, call or WhatsApp 0321 2170813.'}
                </p>

                {submittedData && (
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono space-y-1 mb-6 text-slate-300">
                    <div><strong className="text-amber-400">Name:</strong> {submittedData.fullName}</div>
                    <div><strong className="text-amber-400">Phone:</strong> {submittedData.phone}</div>
                    <div><strong className="text-amber-400">Email:</strong> {submittedData.email}</div>
                    <div><strong className="text-amber-400">Service:</strong> {submittedData.projectType}</div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{isRTL ? 'ایک اور انکوائری جمع کریں' : 'Submit Another Inquiry'}</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      {isRTL ? 'پورا نام' : 'Full Name'} *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={isRTL ? 'اپنا نام درج کریں' : 'Enter your name'}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                        formErrors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-800'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      {isRTL ? 'فون / واٹس ایپ نمبر' : 'Phone / Mobile Number'} *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0321 2170813"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                        formErrors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-800'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      {isRTL ? 'ای میل ایڈریس' : 'Email Address'} *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                        formErrors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-800'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      {isRTL ? 'سروس کی قسم' : 'Service Required'} *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                        formErrors.projectType ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-800'
                      }`}
                    >
                      <option value="" disabled>
                        {isRTL ? 'سروس منتخب کریں...' : 'Select service...'}
                      </option>
                      {projectTypeOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-slate-900 text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {formErrors.projectType && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.projectType}
                      </p>
                    )}
                  </div>
                </div>

                {/* Scope & Budget Category */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {isRTL ? 'تخمینی دائرہ کار / بجٹ' : 'Approximate Scale / Budget'}
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">{isRTL ? 'بجٹ یا مٹیریل کوٹیشن منتخب کریں...' : 'Select budget or material quote...'}</option>
                    {budgetOptions.map((b) => (
                      <option key={b.value} value={b.value} className="bg-slate-900 text-white">
                        {b.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {isRTL ? 'منصوبے یا مٹیریل آرڈر کی تفصیلات' : 'Project Scope or Material Order Details'} *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={isRTL ? 'پراجیکٹ کی لوکیشن، مطلوبہ تعمیراتی رقبہ، یا مطلوبہ ریت، بجری، سیمنٹ کے ڈمپرز کی تعداد تحریر کریں...' : 'Specify location, covered area, or required dumper loads of sand, gravel, cement, or steel...'}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                      formErrors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-800'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-bold shadow-lg shadow-amber-500/20 transition-all duration-200 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{t.contact.form.submitting}</span>
                  ) : (
                    <>
                      <span>{isRTL ? 'انکوائری ارسال کریں' : 'Submit Inquiry to Lal Khan & LKCC'}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

          {/* Side Info Spotlight */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Owner Direct Contact Card */}
            <div className="bg-gradient-to-br from-slate-850 to-slate-900 border-2 border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 text-amber-400 flex items-center justify-center shadow-md shrink-0">
                  <Building className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-white">
                    {isRTL ? 'جناب لال خان' : 'Mr. Lal Khan'}
                  </h4>
                  <p className="text-xs text-amber-400 font-semibold">
                    {isRTL ? 'بانی و چیف ایگزیکٹو آفیسر' : 'Founder & CEO'}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {isRTL ? '30 سالہ تجربہ' : '30+ Years Leadership'}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs text-slate-200">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400">{isRTL ? 'موبائل نمبر:' : 'Direct Mobile:'}</span>
                  <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="font-bold text-amber-400 font-mono hover:underline dir-ltr">
                    {COMPANY_CONFIG.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400">{isRTL ? 'واٹس ایپ:' : 'WhatsApp:'}</span>
                  <a href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}`} target="_blank" rel="noreferrer" className="font-bold text-emerald-400 font-mono hover:underline dir-ltr">
                    {COMPANY_CONFIG.whatsapp}
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400">{isRTL ? 'ای میل:' : 'Email:'}</span>
                  <a href={`mailto:${COMPANY_CONFIG.email}`} className="font-bold text-slate-200 font-mono hover:underline text-[11px] truncate max-w-[190px]">
                    {COMPANY_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Transport Quick Callout */}
            <div className="bg-slate-850 border border-slate-800 rounded-3xl p-6 shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white mb-1">
                  {isRTL ? 'تعمیراتی میٹریل کی فوری ترسیل' : 'Immediate Material Haulage'}
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isRTL
                    ? 'ریت، بجری، سیمنٹ اور اینٹوں کے ڈمپر آرڈر کے لیے 0321 2170813 پر رابطہ کریں۔ 24 گھنٹے سپلائی جاری رہتی ہے۔'
                    : 'Dispatch dumpers for river sand, Margalla aggregate, cement, and bricks round-the-clock.'}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
