/**
 * @file companyInfo.ts
 * @description Centralized configuration for LKCC – Lal Khan Construction & Material Transport Company.
 */

export interface CompanyConfig {
  name: string;
  nameUrdu: string;
  shortName: string;
  ownerName: string;
  ownerNameUrdu: string;
  ownerTitle: string;
  ownerTitleUrdu: string;
  ownerImage: string;
  tagline: string;
  taglineUrdu: string;
  logoUrl: string;
  phone: string;
  phoneRaw: string;
  email: string;
  officeAddress: string;
  officeAddressUrdu: string;
  whatsapp: string;
  whatsappRaw: string;
  establishedYear: string;
  experienceYears: string;
  operatingHours: string;
  operatingHoursUrdu: string;
  socials: {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
  stats: {
    experienceYears: string;
    projectsCompleted: string;
    happyClients: string;
    transportFleet: string;
    teamMembers: string;
  };
  transportCapabilities: {
    title: string;
    titleUrdu: string;
    desc: string;
    descUrdu: string;
    materials: string[];
    materialsUrdu: string[];
  };
  googleMapsEmbedUrl: string;
}

export const COMPANY_CONFIG: CompanyConfig = {
  // Official Company Name
  name: "LKCC – Lal Khan Construction & Material Transport Company",
  nameUrdu: "ایل کے سی سی – لال خان کنسٹرکشن اینڈ میٹریل ٹرانسپورٹ کمپنی",
  shortName: "LKCC",

  // Owner & Leadership
  ownerName: "Lal Khan",
  ownerNameUrdu: "لال خان",
  ownerTitle: "Founder & Chief Executive Officer",
  ownerTitleUrdu: "بانی و چیف ایگزیکٹو آفیسر",
  ownerImage: "",

  // Tagline (From Official Logo)
  tagline: "Building Your Dreams",
  taglineUrdu: "آپ کے خوابوں کی پائیدار تعمیر",

  // Official Logo (Rendered via high-fidelity LkccLogo component)
  logoUrl: "",

  // Verified Contact Details
  phone: "0321 2170813",
  phoneRaw: "+923212170813",

  email: "lalkhan2223555@gmail.com",

  officeAddress: "Main Head Office, Lal Khan Construction & Transport Complex, Pakistan",
  officeAddressUrdu: "مین ہیڈ آفس، لال خان کنسٹرکشن اینڈ ٹرانسپورٹ کمپلیکس، پاکستان",

  whatsapp: "0321 2170813",
  whatsappRaw: "923212170813",

  establishedYear: "1996",
  experienceYears: "30+",

  // Operating Hours
  operatingHours: "Monday – Sunday: 24/7 Transport & Construction Support",
  operatingHoursUrdu: "ہفتے کے ساتوں دن: 24 گھنٹے ٹرانسپورٹ اور تعمیراتی خدمات",

  // Social Media Links
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },

  // Company Statistics
  stats: {
    experienceYears: "30+ Years",
    projectsCompleted: "850+ Projects",
    happyClients: "1,200+ Clients",
    transportFleet: "75+ Heavy Trucks & Dumpers",
    teamMembers: "180+ Engineers & Drivers",
  },

  // Material Transport Fleet Capabilities
  transportCapabilities: {
    title: "Construction Material Haulage & Heavy Logistics",
    titleUrdu: "تعمیراتی مٹیریل کی ترسیل اور ہیوی ٹرانسپورٹ فلیٹ",
    desc: "Equipped with dedicated fleets of high-capacity dumper trucks, multi-axle trailers, and transit vehicles supplying bulk construction materials directly to project sites across Pakistan.",
    descUrdu: "جدید ڈمپر ٹرکوں، ہیوی ٹریلرز اور سپلائی گاڑیوں پر مشتمل وسیع فلیٹ کے ذریعے پاکستان بھر میں تعمیراتی سائٹس پر بلک مٹیریل کی بروقت فراہمی۔",
    materials: [
      "River Sand & Plaster Sand (ریت)",
      "Crushed Stone / Gravel & Aggregate (بجری اور کرش)",
      "Certified Cement Bags & Bulk Cement (سیمنٹ)",
      "Deformed Steel Rebar 60-Grade (سرییا)",
      "First-Class Clay Bricks & Solid Blocks (اینٹیں اور بلاکس)",
      "Excavation Soil Haulage & Site Backfill (مٹی کی بھرتی اور نکاسی)",
    ],
    materialsUrdu: [
      "چناب اور راوی ریت، پلاسٹر اور چنائی کی ریت",
      "مارگلہ اور سرگودھا کا اعلیٰ کوالٹی کرش اور بجری",
      "معیاری برانڈڈ سیمنٹ کے تھیلے اور بلک ترسیل",
      "گریڈ 60 سٹیل ری بار (مضبوط سرییا)",
      "اول درجے کی پختہ لال اینٹیں اور کنکریٹ بلاکس",
      "زمین کی کھدائی، مٹی کی اٹھائی اور سٹرکچرل بیک فلنگ",
    ],
  },

  // Google Maps Embed
  googleMapsEmbedUrl: "",
};

export const isPlaceholder = (val: string): boolean => {
  return !val || val.includes("[INSERT") || val.includes("[YEARS") || val.includes("[PROJECTS") || val.includes("[HAPPY");
};
