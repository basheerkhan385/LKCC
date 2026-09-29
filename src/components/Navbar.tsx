import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../config/companyInfo';
import { LkccLogo } from './LkccLogo';
import { 
  Menu, 
  X, 
  Globe, 
  ArrowRight, 
  ArrowLeft, 
  Phone,
  MessageSquare,
  Truck
} from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  onOpenCustomizationGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, onOpenCustomizationGuide }) => {
  const { t, language, toggleLanguage, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: isRTL ? 'تعمیراتی خدمات' : 'Construction', href: '#services' },
    { label: isRTL ? 'میٹریل ٹرانسپورٹ' : 'Material Transport', href: '#transport' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-xl shadow-slate-950/40 border-b border-slate-800'
          : 'bg-slate-950/90 backdrop-blur-sm border-b border-slate-850'
      }`}
    >
      {/* Top micro announcement bar with owner phone, email & 30 yrs experience */}
      <div className="hidden sm:block bg-amber-500 text-slate-950 py-1 px-4 text-xs font-bold border-b border-amber-600">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span>★ {isRTL ? '30 سالہ قابل اعتماد تعمیراتی اور ٹرانسپورٹ کا تجربہ' : '30+ Years Construction & Material Transport Leadership'}</span>
            </span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">
              {isRTL ? 'بانی و سی ای او: لال خان' : 'Founder & CEO: Lal Khan'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="hover:underline flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span className="dir-ltr">{COMPANY_CONFIG.phone}</span>
            </a>
            <span>|</span>
            <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:underline hidden lg:inline">
              {COMPANY_CONFIG.email}
            </a>
            <span>|</span>
            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}`}
              target="_blank"
              rel="noreferrer"
              className="hover:underline flex items-center gap-1 font-extrabold"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Official LKCC Brand Logo */}
          <a
            href="#home"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
            title="LKCC – Lal Khan Construction & Material Transport Company"
          >
            <LkccLogo className="h-13 w-auto" variant="dark" showTagline={true} />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Language switcher, Call Now, Get Quote) */}
          <div className="flex items-center gap-3">
            
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-lg bg-slate-850 hover:bg-slate-800 text-amber-400 border border-amber-500/30 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
              title={language === 'en' ? 'Switch to Urdu (اردو)' : 'Switch to English'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t.nav.languageToggle}</span>
            </button>

            {/* Quick Call Button */}
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-white bg-slate-850 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="dir-ltr">{COMPANY_CONFIG.phone}</span>
            </a>

            {/* Quick Quote Button */}
            <button
              onClick={onOpenQuoteModal}
              type="button"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-95"
            >
              <span>{t.nav.getQuote}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-800/80 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-md cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>{isRTL ? 'کال کریں: ' : 'Call Now: '}</span>
                <span className="dir-ltr">{COMPANY_CONFIG.phone}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp ({COMPANY_CONFIG.phone})</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 cursor-pointer"
              >
                <span>{t.nav.getQuote}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-md bg-slate-800 text-amber-400 border border-amber-500/30 cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{t.nav.languageToggle}</span>
                </button>

                <div className="text-xs text-slate-400">
                  {COMPANY_CONFIG.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
