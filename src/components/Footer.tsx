import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../config/companyInfo';
import { LkccLogo } from './LkccLogo';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  Truck,
  Award
} from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenCustomizationGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenPrivacy, 
  onOpenTerms, 
}) => {
  const { isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-6">
            <LkccLogo className="h-16 w-auto" variant="dark" showTagline={true} />

            <p className="text-sm text-slate-300 leading-relaxed">
              {isRTL
                ? 'ایل کے سی سی – لال خان کنسٹرکشن اینڈ میٹریل ٹرانسپورٹ کمپنی: رہائشی، تجارتی اور سول تعمیرات کے ساتھ ساتھ ریت، بجری، سیمنٹ اور سرییا کی ملک گیر ہیوی ٹرانسپورٹ فلیٹ کے ذریعے بروقت ترسیل۔'
                : 'LKCC – Lal Khan Construction & Material Transport Company: Premier turnkey general contracting, civil engineering, and high-capacity construction material haulage fleet delivering across Pakistan.'}
            </p>

            {/* Leadership & 30-Year Badge */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-amber-500/30 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                <Award className="w-4 h-4 text-amber-400" />
                <span>{isRTL ? 'بانی و سی ای او: لال خان' : 'Founder & CEO: Lal Khan'}</span>
              </div>
              <div className="text-[11px] text-slate-300">
                {isRTL ? '30 سالہ قابل اعتماد تعمیراتی اور لاجسٹکس ریکارڈ' : '30+ Years of Uncompromising Structural Excellence'}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_CONFIG.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="LKCC Facebook"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_CONFIG.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="LKCC Instagram"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_CONFIG.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LKCC LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_CONFIG.socials.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="LKCC YouTube"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
              {isRTL ? 'فوری لنکس' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  {isRTL ? 'صفحہ اول' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  {isRTL ? 'ہمارے متعلق' : 'About LKCC'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isRTL ? 'تعمیراتی خدمات' : 'Construction Services'}
                </a>
              </li>
              <li>
                <a href="#transport" className="hover:text-amber-400 transition-colors font-semibold text-amber-400">
                  {isRTL ? 'میٹریل ٹرانسپورٹ فلیٹ' : 'Material Transport Fleet'}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors">
                  {isRTL ? 'منصوبہ جات' : 'Featured Projects'}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-amber-400 transition-colors">
                  {isRTL ? 'طریقہ کار' : 'Work Process'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  {isRTL ? 'رابطہ کریں' : 'Contact Us'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Transport */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
              {isRTL ? 'تعمیرات و ٹرانسپورٹ' : 'Capabilities & Haulage'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>• {isRTL ? 'رہائشی ولاز اور بنگلوں کی تعمیر' : 'Residential Villas & Houses'}</li>
              <li>• {isRTL ? 'کمرشل پلازے اور دکانیں' : 'Commercial Towers & Plazas'}</li>
              <li>• {isRTL ? 'سول انجینئرنگ و بھاری بنیادیں' : 'Civil Engineering & Foundations'}</li>
              <li>• {isRTL ? 'ریت اور چنائی مٹیریل کی ترسیل' : 'River Sand Bulk Transport'}</li>
              <li>• {isRTL ? 'مارگلہ اور سرگودھا کرش و بجری' : 'Crushed Stone / Gravel Supply'}</li>
              <li>• {isRTL ? 'سیمنٹ اور گریڈ 60 سرییا کی ترسیل' : 'Cement & Grade-60 Steel Rebar'}</li>
              <li>• {isRTL ? 'کھدائی، مٹی کی اٹھائی و بھرتی' : 'Excavation Haulage & Backfill'}</li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
              {isRTL ? 'رابطہ معلومات' : 'Direct Contact'}
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {isRTL ? COMPANY_CONFIG.officeAddressUrdu : COMPANY_CONFIG.officeAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="font-mono font-bold text-amber-400 hover:underline dir-ltr">
                  {COMPANY_CONFIG.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}`} target="_blank" rel="noreferrer" className="font-mono font-bold text-emerald-400 hover:underline dir-ltr">
                  {COMPANY_CONFIG.whatsapp} (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="font-mono hover:underline break-all text-slate-200">
                  {COMPANY_CONFIG.email}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-400">
                {isRTL ? '24/7 تعمیراتی اور مٹیریل ٹرانسپورٹ سپورٹ' : '24/7 Round-the-Clock Site Haulage Dispatch'}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} LKCC – Lal Khan Construction & Material Transport Company. {isRTL ? 'تمام حقوق محفوظ ہیں۔' : 'All rights reserved.'}
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              {isRTL ? 'پرائیویسی پالیسی' : 'Privacy Policy'}
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              {isRTL ? 'قواعد و ضوابط' : 'Terms & Conditions'}
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
