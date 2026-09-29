import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../config/companyInfo';
import { LkccLogo } from './LkccLogo';
import { Award, ShieldCheck, Phone, MessageSquare, Truck, Building2, Quote, CheckCircle2 } from 'lucide-react';

export const OwnerSection: React.FC = () => {
  const { isRTL } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag & Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{isRTL ? 'بانی و قیادت کا پیغام' : 'Executive Leadership & Vision'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {isRTL ? 'بانی اور سی ای او: لال خان' : 'Founder & CEO: Lal Khan'}
          </h2>
          <p className="text-base text-amber-400/95 font-medium mt-3">
            {isRTL 
              ? '30 سالہ پیشہ ورانہ تجربہ، مخلصانہ قیادت اور معیاری تعمیرات کا ضامن ادارہ' 
              : '30+ Years of Unwavering Integrity in Construction & Heavy Material Transport'}
          </p>
        </div>

        {/* Executive Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Official LKCC Brand Crest & Executive Stats */}
          <div className="lg:col-span-4 rounded-3xl bg-slate-850 border border-slate-800 p-8 flex flex-col justify-between shadow-2xl relative">
            <div>
              {/* Brand Logo Presentation */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700/80 mb-6 flex flex-col items-center text-center">
                <LkccLogo className="h-16 w-auto mb-2" variant="dark" showTagline={true} />
                <div className="mt-4 pt-3 border-t border-slate-800 w-full text-center">
                  <span className="text-xs font-extrabold text-white block">
                    {isRTL ? COMPANY_CONFIG.ownerNameUrdu : COMPANY_CONFIG.ownerName}
                  </span>
                  <span className="text-[11px] text-amber-400 font-semibold block">
                    {isRTL ? COMPANY_CONFIG.ownerTitleUrdu : COMPANY_CONFIG.ownerTitle}
                  </span>
                </div>
              </div>

              {/* Verified Trust Badges */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {isRTL ? '30 سالہ عملی تاریخ' : '30+ Years Active Experience'}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {isRTL ? '1996 سے پاکستان بھر میں خدمات' : 'Operating since 1996 across Pakistan'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {isRTL ? 'براہِ راست نگرانی و جوابدہی' : 'Direct Leadership Accountability'}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {isRTL ? 'کوالٹی اور مٹیریل کی ذاتی گارنٹی' : 'Direct oversight by Lal Khan & senior team'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-slate-800">
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all active:scale-98"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{isRTL ? 'لال خان سے رابطہ (کال):' : 'Call Lal Khan Directly:'}</span>
                <span className="dir-ltr font-mono">{COMPANY_CONFIG.phone}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}?text=${encodeURIComponent(isRTL ? 'السلام علیکم لال خان صاحب! میں تعمیرات اور مٹیریل ٹرانسپورٹ کے بارے میں رابطہ کرنا چاہتا ہوں۔' : 'Hello Mr. Lal Khan! I would like to inquire about construction and material transport.')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all active:scale-98"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{isRTL ? 'واٹس ایپ پر میسج کریں' : 'Chat on WhatsApp'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Founder's Message & Core Pillars */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-850 border border-slate-800 shadow-2xl relative">
              <Quote className="w-12 h-12 text-amber-500/20 absolute top-6 right-6" />
              
              <h4 className="text-xl font-bold text-amber-400 mb-5">
                {isRTL ? 'لال خان صاحب کا خصوصی پیغام برائے معزز کلائنٹس:' : 'A Personal Message from Lal Khan:'}
              </h4>

              <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
                {isRTL ? (
                  <>
                    <p>
                      ”بسم اللہ الرحمٰن الرحیم۔ گزشتہ <strong>30 سالوں</strong> سے میرا اور لال خان کنسٹرکشن کمپنی (LKCC) کا صرف ایک ہی نصب العین رہا ہے: <strong>ایمانداری، بہترین کوالٹی اور کسٹمر کے اعتماد کا تحفظ</strong>۔ ہم نے چھوٹی بنیادوں سے لے کر بڑے کمرشل پلازوں، شاہراہوں اور ہاؤسنگ پراجیکٹس تک ہمیشہ معیار پر کبھی سمجھوتہ نہیں کیا۔“
                    </p>
                    <p>
                      ”تعمیرات کے ساتھ ساتھ، ہم نے یہ محسوس کیا کہ بروقت اور اعلیٰ درجے کے میٹریل کی فراہمی کسی بھی منصوبے کی جان ہوتی ہے۔ اسی لیے ہم نے <strong>تعمیراتی مٹیریل کی ترسیل (Transport) کا ایک باقاعدہ وسیع فلیٹ</strong> قائم کیا تاکہ ریت، بجری، سیمنٹ، سرییا اور اینٹیں بغیر کسی تاخیر کے براہِ راست سائٹ پر دستیاب ہوں۔ چاہے رہائشی تعمیر ہو یا مٹیریل کی سپلائی، آپ مجھ سے اور میری ٹیم سے براہِ راست رابطہ کر سکتے ہیں۔“
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      "For over <strong>30 years</strong>, my guiding principle at LKCC has been unwavering: <strong>absolute integrity, structural craftsmanship, and honoring our clients' trust</strong>. From custom residential homes to high-load commercial facilities and civil infrastructure, we build each structure with the highest engineering care."
                    </p>
                    <p>
                      "Recognizing that dependable material supply is the foundation of every successful project, we also operate our dedicated <strong>Construction Material Transport & Heavy Fleet Division</strong>. We supply and haul river sand, Margalla/Sargodha gravel, certified cement, steel rebar, and clay bricks directly to project sites with 24/7 reliability. When you work with LKCC, you deal directly with experienced leadership that stands firmly behind every commitment."
                    </p>
                  </>
                )}
              </div>

              {/* Founder Signoff Info */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-lg font-bold text-white">
                    {isRTL ? 'لال خان' : 'Lal Khan'}
                  </div>
                  <div className="text-xs text-amber-400 font-semibold">
                    {isRTL ? 'بانی و چیف ایگزیکٹو آفیسر، LKCC' : 'Founder & Chief Executive Officer, LKCC'}
                  </div>
                </div>

                <div className="text-xs text-slate-300 font-mono">
                  <span className="text-slate-400 block text-[11px] uppercase">Official Helpline:</span>
                  <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="text-amber-400 font-bold hover:underline dir-ltr text-sm">
                    {COMPANY_CONFIG.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Dual Core Pillars: Construction + Material Haulage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4 hover:border-amber-500/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white mb-1">
                    {isRTL ? 'تعمیراتی مہارت (Construction)' : 'Turnkey Building Construction'}
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {isRTL ? 'رہائشی ولاز، کمرشل پلازے، سول سٹرکچرز اور مکمل فنشنگ۔' : 'Villas, multi-story plazas, reinforced foundations & modern finishes.'}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4 hover:border-amber-500/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white mb-1">
                    {isRTL ? 'میٹریل ٹرانسپورٹ (Heavy Logistics)' : 'Heavy Material Transport Fleet'}
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {isRTL ? 'ڈمپر اور ٹریلر فلیٹ کے ذریعے ریت، بجری، سیمنٹ اور سرییا کی ترسیل۔' : 'High-capacity dumpers & trailers for bulk sand, aggregate, cement & steel.'}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
