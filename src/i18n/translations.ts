/**
 * @file translations.ts
 * @description Comprehensive bilingual dictionary for English and Urdu for LKCC.
 */

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    process: string;
    whyUs: string;
    contact: string;
    getQuote: string;
    languageToggle: string;
    customizeGuide: string;
  };
  hero: {
    badge: string;
    headline: string;
    subtitle: string;
    exploreProjects: string;
    requestQuote: string;
    highlights: {
      residential: string;
      commercial: string;
      civilEngineering: string;
      infrastructure: string;
    };
  };
  about: {
    sectionTag: string;
    title: string;
    lead: string;
    description: string;
    placeholders: {
      historyTitle: string;
      historyContent: string;
      missionTitle: string;
      missionContent: string;
      experienceTitle: string;
      experienceContent: string;
      areasTitle: string;
      areasContent: string;
    };
    imageBadge: string;
    imageCaption: string;
  };
  services: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      desc: string;
      features: string[];
    }[];
    inquireBtn: string;
  };
  whyUs: {
    sectionTag: string;
    title: string;
    subtitle: string;
    reasons: {
      title: string;
      desc: string;
    }[];
  };
  projects: {
    sectionTag: string;
    title: string;
    subtitle: string;
    all: string;
    residential: string;
    commercial: string;
    renovation: string;
    civil: string;
    demoNotice: string;
    viewDetails: string;
    modalTitle: string;
    modalLocation: string;
    modalScope: string;
    modalStatus: string;
    closeModal: string;
    items: {
      id: string;
      name: string;
      category: 'residential' | 'commercial' | 'renovation' | 'civil';
      categoryLabel: string;
      location: string;
      description: string;
      scope: string;
      status: string;
      image: string;
    }[];
  };
  process: {
    sectionTag: string;
    title: string;
    subtitle: string;
    steps: {
      stepNumber: string;
      title: string;
      desc: string;
    }[];
  };
  stats: {
    sectionTag: string;
    title: string;
    notice: string;
    experience: string;
    projects: string;
    clients: string;
    team: string;
  };
  testimonials: {
    sectionTag: string;
    title: string;
    subtitle: string;
    placeholderNotice: string;
    items: {
      name: string;
      project: string;
      review: string;
    }[];
  };
  cta: {
    title: string;
    subtitle: string;
    requestQuote: string;
    contactUs: string;
  };
  contact: {
    sectionTag: string;
    title: string;
    subtitle: string;
    phoneCard: string;
    emailCard: string;
    whatsappCard: string;
    addressCard: string;
    mapsTitle: string;
    mapsPlaceholder: string;
    mapsInstructions: string;
    form: {
      title: string;
      fullName: string;
      fullNamePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      projectType: string;
      selectType: string;
      budgetRange: string;
      selectBudget: string;
      message: string;
      messagePlaceholder: string;
      submitBtn: string;
      submitting: string;
      successTitle: string;
      successMessage: string;
      demoNotice: string;
      resetBtn: string;
      errors: {
        nameRequired: string;
        phoneRequired: string;
        emailRequired: string;
        emailInvalid: string;
        projectRequired: string;
        messageRequired: string;
      };
    };
  };
  quoteModal: {
    title: string;
    subtitle: string;
    projectType: string;
    areaSize: string;
    areaSizePlaceholder: string;
    unit: string;
    finishingQuality: string;
    qualities: {
      standard: string;
      premium: string;
      luxury: string;
    };
    estimatedRange: string;
    disclaimer: string;
    sendInquiry: string;
    close: string;
  };
  customizationGuide: {
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    close: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    rightsReserved: string;
    privacyPolicy: string;
    termsConditions: string;
    companyEstablished: string;
    customizationTrigger: string;
  };
  legal: {
    privacyTitle: string;
    privacyContent: string;
    termsTitle: string;
    termsContent: string;
    close: string;
  };
}

export const translations: Record<'en' | 'ur', TranslationSchema> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      process: "Work Process",
      whyUs: "Why LKCC",
      contact: "Contact Us",
      getQuote: "Get a Free Quote",
      languageToggle: "اردو",
      customizeGuide: "Edit Site Data",
    },
    hero: {
      badge: "Civil Engineering & General Construction",
      headline: "Building Your Vision, Constructing Your Future.",
      subtitle:
        "LKCC – Lal Khan Construction Company delivers quality construction, reliable project management, and innovative building solutions with a commitment to excellence, safety, and customer satisfaction.",
      exploreProjects: "Explore Our Projects",
      requestQuote: "Request a Free Quote",
      highlights: {
        residential: "Residential",
        commercial: "Commercial",
        civilEngineering: "Civil Engineering",
        infrastructure: "Infrastructure",
      },
    },
    about: {
      sectionTag: "About LKCC",
      title: "Dedicated to Dependable Building Solutions",
      lead:
        "LKCC – Lal Khan Construction Company is committed to delivering dependable construction services, superior structural workmanship, careful project planning, and client-focused building solutions.",
      description:
        "We approach every project with strict adherence to safety codes, high-grade materials, and proactive engineering management. Whether executing a luxury custom home, commercial facility, or public infrastructure, we partner with clients from initial concept to turnkey handover.",
      placeholders: {
        historyTitle: "Company Background & History",
        historyContent:
          "[INSERT COMPANY BACKGROUND AND HISTORY HERE: Provide the narrative of how Lal Khan Construction Company was founded, key milestones, and growth in the regional construction sector.]",
        missionTitle: "Mission & Vision",
        missionContent:
          "[INSERT COMPANY MISSION AND VISION HERE: Define LKCC's vision for architectural innovation, sustainable engineering, and uncompromising client dedication.]",
        experienceTitle: "Company Experience",
        experienceContent:
          "[INSERT COMPANY EXPERIENCE HERE: Highlight specialized construction expertise, structural proficiencies, and notable operational capacity.]",
        areasTitle: "Operating Locations",
        areasContent:
          "[INSERT COMPANY LOCATION AND OPERATING AREAS HERE: Specify cities, provinces, industrial corridors, and residential zones served by LKCC.]",
      },
      imageBadge: "Strict Safety & Quality Standards",
      imageCaption: "Civil engineers and site managers conducting precision structural reviews.",
    },
    services: {
      sectionTag: "Our Services",
      title: "Comprehensive Construction & Engineering Capabilities",
      subtitle:
        "From foundational civil works to interior turnkey finishing, LKCC delivers end-to-end building expertise tailored to residential, commercial, and institutional clients.",
      items: [
        {
          id: "residential",
          title: "Residential Construction",
          desc: "Custom villas, single-family homes, multi-story apartments, and residential gated developments crafted with durable structural integrity and elegant finishing.",
          features: [
            "Custom Villa & Bungalow Construction",
            "Multi-Unit Residential Complexes",
            "Reinforced Concrete Foundations",
            "Turnkey Interior & Exterior Finishing",
          ],
        },
        {
          id: "commercial",
          title: "Commercial Construction",
          desc: "Modern office towers, corporate headquarters, retail plazas, shopping complexes, and industrial warehouses engineered for commercial viability and heavy traffic.",
          features: [
            "Corporate Offices & Tech Parks",
            "Retail Plazas & Shopping Centers",
            "Warehouses & Logistics Hubs",
            "Fire-rated & Code-compliant Systems",
          ],
        },
        {
          id: "civil",
          title: "Civil Engineering",
          desc: "Structural engineering, heavy foundations, earthworks, drainage infrastructure, and precision concrete frameworks executed to rigorous geotechnical tolerances.",
          features: [
            "Structural Frame Design & Execution",
            "Deep Excavation & Foundation Works",
            "Stormwater & Drainage Networks",
            "Heavy Retaining Walls & Embankments",
          ],
        },
        {
          id: "renovation",
          title: "Renovation and Remodeling",
          desc: "Complete building rehabilitation, seismic retrofitting, commercial space repositioning, interior upgrades, and facade modernization.",
          features: [
            "Structural Retrofitting & Reinforcement",
            "Interior & Architectural Overhauls",
            "Commercial Tenant Improvements",
            "Energy-efficient Building Upgrades",
          ],
        },
        {
          id: "architecture",
          title: "Architectural Planning and Design",
          desc: "Architectural drafting, 2D/3D spatial planning, interior schematics, structural coordination, and local municipal approval assistance.",
          features: [
            "Comprehensive Master Planning",
            "3D Concept & Elevation Renderings",
            "MEP & Structural Engineering Coordination",
            "Permit & Building Code Approvals",
          ],
        },
        {
          id: "management",
          title: "Project Management",
          desc: "Rigorous construction supervision, budget governance, material quality testing, milestone tracking, and contractor coordination.",
          features: [
            "Detailed Cost Estimation & Budgeting",
            "Gantt Milestone Scheduling & Tracking",
            "Rigorous On-site Quality Assurance",
            "Subcontractor & Vendor Coordination",
          ],
        },
        {
          id: "infrastructure",
          title: "Infrastructure and General Construction",
          desc: "General contracting, site development, road grading, utilities installation, and broad-scale infrastructure civil works.",
          features: [
            "Turnkey General Contracting",
            "Site Preparation & Earth Moving",
            "Pavement & Access Road Construction",
            "Underground Utilities & Sub-stations",
          ],
        },
      ],
      inquireBtn: "Inquire About This Service",
    },
    whyUs: {
      sectionTag: "Why Choose LKCC",
      title: "Built on Trust, Precision, and Accountability",
      subtitle:
        "We prioritize honest craftsmanship, transparent budgeting, and rigorous safety practices across every project phase.",
      reasons: [
        {
          title: "Commitment to Quality Workmanship",
          desc: "We strictly utilize high-standard structural materials, certified concrete mixes, and skilled tradesmen to guarantee long-term durability.",
        },
        {
          title: "Customer Satisfaction",
          desc: "Our client relationships are anchored in proactive responsiveness, collaborative planning, and dedicated project managers assigned to each build.",
        },
        {
          title: "Professional Project Planning",
          desc: "Detailed architectural breakdowns, transparent Bills of Quantities (BOQ), and realistic milestone projections prevent unexpected delays.",
        },
        {
          title: "Safety-Conscious Construction",
          desc: "Every site enforces standard PPE protocols, hazard mitigations, secure scaffolding, and strict workplace safety management.",
        },
        {
          title: "Transparent Communication",
          desc: "You receive continuous milestone reports, unvarnished progress logs, and clear accounting with zero hidden costs.",
        },
        {
          title: "Timely Project Coordination",
          desc: "Systematic supply-chain tracking and disciplined crew scheduling keep projects marching steadily toward scheduled completion.",
        },
      ],
    },
    projects: {
      sectionTag: "Our Portfolio",
      title: "Featured Construction & Engineering Projects",
      subtitle:
        "Explore a curated selection of our work across residential, commercial, renovation, and civil disciplines. All cards below display editable demo structures ready for your actual project showcases.",
      all: "All Projects",
      residential: "Residential",
      commercial: "Commercial",
      renovation: "Renovation",
      civil: "Civil Engineering",
      demoNotice: "EDITABLE DEMO PROJECT — Replace with actual LKCC company project data",
      viewDetails: "View Project Specs",
      modalTitle: "Project Specification",
      modalLocation: "Location",
      modalScope: "Scope of Work",
      modalStatus: "Current Status",
      closeModal: "Close Window",
      items: [
        {
          id: "proj-1",
          name: "[DEMO] Contemporary Executive Villa",
          category: "residential",
          categoryLabel: "Residential Construction",
          location: "[INSERT PROJECT LOCATION HERE - e.g. Sector F-7, Islamabad]",
          description:
            "[INSERT PROJECT DESCRIPTION HERE - Turnkey design and construction of a modern two-story luxury residence featuring reinforced concrete framework, energy-efficient glazing, and custom architectural masonry.]",
          scope: "Ground-up Villa Construction, Structural Engineering & Interior Finishing",
          status: "Completed (Demo Showcase)",
          image: "/src/assets/images/residential_project_1790687984244.jpg",
        },
        {
          id: "proj-2",
          name: "[DEMO] Commercial Corporate Tower",
          category: "commercial",
          categoryLabel: "Commercial Construction",
          location: "[INSERT PROJECT LOCATION HERE - e.g. Blue Area, Islamabad / Gulberg, Lahore]",
          description:
            "[INSERT PROJECT DESCRIPTION HERE - Multi-story corporate center equipped with high-performance glass curtain wall, underground multi-level parking, and high-load civil foundation.]",
          scope: "Commercial High-Rise Shell & Core, Glass Facade & MEP Integration",
          status: "Completed (Demo Showcase)",
          image: "/src/assets/images/commercial_civil_project_1790687995843.jpg",
        },
        {
          id: "proj-3",
          name: "[DEMO] High-Altitude Civil Retaining Structure",
          category: "civil",
          categoryLabel: "Civil Engineering",
          location: "[INSERT PROJECT LOCATION HERE - e.g. Northern Infrastructure Corridor]",
          description:
            "[INSERT PROJECT DESCRIPTION HERE - Heavy-duty geotechnical slope stabilization, anchored retaining walls, and high-volume stormwater channelization for highway access.]",
          scope: "Geotechnical Stabilization, Deep Anchor Piles & Drainage Engineering",
          status: "Delivered (Demo Showcase)",
          image: "/src/assets/images/hero_construction_site_1790687955838.jpg",
        },
        {
          id: "proj-4",
          name: "[DEMO] Heritage Commercial Plaza Modernization",
          category: "renovation",
          categoryLabel: "Renovation & Remodeling",
          location: "[INSERT PROJECT LOCATION HERE - e.g. Commercial District]",
          description:
            "[INSERT PROJECT DESCRIPTION HERE - Complete structural retrofitting, interior demolition, modern HVAC routing, and energy-compliant facade reconstruction of a commercial facility.]",
          scope: "Structural Retrofitting, Facade Modernization & MEP Overhaul",
          status: "Handed Over (Demo Showcase)",
          image: "/src/assets/images/about_construction_site_1790687970681.jpg",
        },
        {
          id: "proj-5",
          name: "[DEMO] Luxury Gated Residential Enclave",
          category: "residential",
          categoryLabel: "Residential Construction",
          location: "[INSERT PROJECT LOCATION HERE - e.g. DHA Phase 8]",
          description:
            "[INSERT PROJECT DESCRIPTION HERE - Master-planned luxury residential housing development comprising reinforced foundations, paved boundary walls, and modern architectural styling.]",
          scope: "Residential Enclave Master Construction & Civil Works",
          status: "Completed (Demo Showcase)",
          image: "/src/assets/images/residential_project_1790687984244.jpg",
        },
        {
          id: "proj-6",
          name: "[DEMO] Industrial Distribution Warehouse & Steel Frame",
          category: "civil",
          categoryLabel: "Civil Engineering",
          location: "[INSERT PROJECT LOCATION HERE - e.g. Industrial Estate]",
          description:
            "[INSERT PROJECT DESCRIPTION HERE - Clear-span pre-engineered steel warehouse with heavy-duty concrete slab floors, loading dock bays, and stormwater retention system.]",
          scope: "Industrial Warehouse Fabrication, Concrete Flooring & Site Utilities",
          status: "Delivered (Demo Showcase)",
          image: "/src/assets/images/commercial_civil_project_1790687995843.jpg",
        },
      ],
    },
    process: {
      sectionTag: "How We Work",
      title: "Our Proven 5-Step Construction Process",
      subtitle:
        "Every successful project follows a structured methodology to ensure technical compliance, budget integrity, and dependable milestone handovers.",
      steps: [
        {
          stepNumber: "01",
          title: "Initial Consultation",
          desc: "We discuss your vision, functional requirements, architectural intent, target timelines, and preliminary budget considerations.",
        },
        {
          stepNumber: "02",
          title: "Site Visit & Requirements",
          desc: "Our engineers inspect the physical site, assess soil and topography conditions, access routes, and municipal utility connections.",
        },
        {
          stepNumber: "03",
          title: "Planning & Estimation",
          desc: "We deliver transparent architectural plans, structural calculations, Bills of Quantities (BOQ), and fixed milestone schedules.",
        },
        {
          stepNumber: "04",
          title: "Project Execution",
          desc: "Experienced civil crews carry out structural framing, masonry, MEP installations, and finishes under strict daily supervision.",
        },
        {
          stepNumber: "05",
          title: "Quality Inspection & Handover",
          desc: "We perform comprehensive punch-list inspections, structural testing, and deliver complete documentation with formal key handover.",
        },
      ],
    },
    stats: {
      sectionTag: "Company Metrics",
      title: "Operational Capacity & Track Record",
      notice:
        "Note: The figures below are editable placeholders ready to display your verified company statistics.",
      experience: "Years of Experience",
      projects: "Projects Completed",
      clients: "Happy Clients",
      team: "Team Members & Engineers",
    },
    testimonials: {
      sectionTag: "Client Feedback",
      title: "What Our Partners Say",
      subtitle:
        "Editable testimonial placeholders. Add actual verified client statements once received.",
      placeholderNotice: "Attributable client feedback placeholder ready for actual review text",
      items: [
        {
          name: "[CLIENT NAME PLACEHOLDER 1]",
          project: "[PROJECT PLACEHOLDER - e.g. Residential Villa Client]",
          review:
            "\"LKCC provided exemplary professionalism from the initial site inspection to final key handover. Their dedication to structural quality and transparent communication made the construction process smooth and predictable.\"",
        },
        {
          name: "[CLIENT NAME PLACEHOLDER 2]",
          project: "[PROJECT PLACEHOLDER - e.g. Commercial Facility Developer]",
          review:
            "\"The engineering rigor and project management demonstrated by Lal Khan Construction Company kept our commercial building on schedule. Their safety standards and material testing protocols are commendable.\"",
        },
        {
          name: "[CLIENT NAME PLACEHOLDER 3]",
          project: "[PROJECT PLACEHOLDER - e.g. Civil Infrastructure Partner]",
          review:
            "\"Working with the LKCC team gave us peace of mind. Every milestone was accompanied by thorough technical reports and proactive coordination with local municipal bodies.\"",
        },
      ],
    },
    cta: {
      title: "Ready to Build Your Dream Project?",
      subtitle:
        "Let’s discuss your construction needs and turn your ideas into reality with LKCC's trusted engineering team.",
      requestQuote: "Request a Free Quote",
      contactUs: "Contact LKCC Directly",
    },
    contact: {
      sectionTag: "Get In Touch",
      title: "Contact LKCC – Lal Khan Construction Company",
      subtitle:
        "Reach out directly by phone, WhatsApp, or email, or submit project requirements through our inquiry form.",
      phoneCard: "Call Us",
      emailCard: "Email Inquiries",
      whatsappCard: "WhatsApp Chat",
      addressCard: "Head Office",
      mapsTitle: "Office Location Map",
      mapsPlaceholder: "[GOOGLE MAPS EMBED PLACEHOLDER]",
      mapsInstructions:
        "To embed your real Google Map, paste your iframe src URL into `src/config/companyInfo.ts` under `googleMapsEmbedUrl`.",
      form: {
        title: "Send Us a Message / Request a Quote",
        fullName: "Full Name",
        fullNamePlaceholder: "Enter your full name",
        phone: "Phone / Mobile Number",
        phonePlaceholder: "e.g. +92 300 1234567",
        email: "Email Address",
        emailPlaceholder: "name@example.com",
        projectType: "Project Type",
        selectType: "Select project type...",
        budgetRange: "Estimated Budget Range",
        selectBudget: "Select approximate budget...",
        message: "Project Details & Scope",
        messagePlaceholder:
          "Describe your project requirements, location, estimated size (sq ft / marla), and expected timeline...",
        submitBtn: "Submit Construction Inquiry",
        submitting: "Processing Inquiry...",
        successTitle: "Inquiry Successfully Registered (Demo Mode)",
        successMessage:
          "Thank you for reaching out to LKCC! Because this is a static frontend deployment, your request has been logged locally in this demo environment. To receive actual inquiries in your inbox, connect your preferred form service (such as Formspree, EmailJS, or an Express backend) in src/components/Contact.tsx.",
        demoNotice:
          "Demo submission: Form data is captured and validated on the frontend. Connect your backend endpoint to receive live client emails.",
        resetBtn: "Submit Another Inquiry",
        errors: {
          nameRequired: "Please enter your full name.",
          phoneRequired: "Please enter a valid phone number.",
          emailRequired: "Please enter your email address.",
          emailInvalid: "Please enter a valid email address.",
          projectRequired: "Please select a project type.",
          messageRequired: "Please provide brief details about your project.",
        },
      },
    },
    quoteModal: {
      title: "Construction Cost Estimator & Quote Request",
      subtitle:
        "Calculate an approximate preliminary estimate based on typical construction parameters and send an inquiry directly to LKCC.",
      projectType: "Select Project Type",
      areaSize: "Total Covered Area",
      areaSizePlaceholder: "e.g. 2500",
      unit: "Unit of Measurement",
      finishingQuality: "Finishing & Material Grade",
      qualities: {
        standard: "Standard Quality (Durable Grey Structure & Essential Finishing)",
        premium: "Premium Quality (High-Grade Finishes, Imported Fittings & Fixtures)",
        luxury: "Luxury Grade (Architectural Grade Marble, Custom Woodwork & Smart Home Ready)",
      },
      estimatedRange: "Estimated Preliminary Budget Range",
      disclaimer:
        "Disclaimer: This calculation is for informational estimation purposes only. Final costs depend on geotechnical soil conditions, architectural blueprints, structural design, and specific client selections.",
      sendInquiry: "Pre-fill Contact Form With These Details",
      close: "Close Calculator",
    },
    customizationGuide: {
      title: "Owner Customization Guide",
      subtitle:
        "Easily replace placeholders with your actual company information in just one file.",
      step1Title: "1. Update Company Information",
      step1Desc:
        "Open `src/config/companyInfo.ts` and fill in your real Phone Number, Email Address, Office Address, WhatsApp number, and Established Year.",
      step2Title: "2. Add Company Logo",
      step2Desc:
        "Place your logo image in `/src/assets/images/` and set `logoUrl: '/src/assets/images/your_logo.png'` in `companyInfo.ts`. If left blank, the website uses the built-in LKCC vector brandmark.",
      step3Title: "3. Replace Portfolio Projects",
      step3Desc:
        "Update the project cards in `src/i18n/translations.ts` under `projects.items` with your actual finished projects and photographs.",
      close: "Got It",
    },
    footer: {
      description:
        "LKCC – Lal Khan Construction Company is a premier contractor delivering residential builds, commercial developments, civil engineering, and infrastructure works with uncompromising safety and craftsmanship.",
      quickLinks: "Quick Navigation",
      servicesTitle: "Construction Services",
      contactTitle: "Contact & Head Office",
      rightsReserved: "All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms & Conditions",
      companyEstablished: "Est.",
      customizationTrigger: "Developer & Owner Guide: Edit Placeholders",
    },
    legal: {
      privacyTitle: "Privacy Policy",
      privacyContent:
        "LKCC – Lal Khan Construction Company is committed to safeguarding the personal information and inquiry details provided by our clients and website visitors. We collect project inquiries solely for the purpose of communicating cost estimates, scheduling site consultations, and executing contracted building works. We do not sell, rent, or distribute personal information to third parties.",
      termsTitle: "Terms & Conditions",
      termsContent:
        "All content, project descriptions, architectural concepts, and materials displayed on this website are the property of LKCC – Lal Khan Construction Company or used with authorized licensing. Preliminary estimates provided through website calculators are indicative only and subject to comprehensive geotechnical assessments, formal Bills of Quantities (BOQ), and signed contracts.",
      close: "Close",
    },
  },

  ur: {
    nav: {
      home: "صفحہ اول",
      about: "ہمارے متعلق",
      services: "خدمات",
      projects: "منصوبہ جات",
      process: "طریقہ کار",
      whyUs: "ایل کے سی سی ہی کیوں؟",
      contact: "رابطہ کریں",
      getQuote: "مفت کوٹیشن حاصل کریں",
      languageToggle: "English",
      customizeGuide: "ڈیٹا ایڈٹ گائیڈ",
    },
    hero: {
      badge: "سول انجینئرنگ اور جنرل کنسٹرکشن سروسز",
      headline: "آپ کے وژن کی تعمیر، آپ کے مستقبل کی تشکیل۔",
      subtitle:
        "ایل کے سی سی – لال خان کنسٹرکشن کمپنی اعلیٰ معیار کی تعمیرات، قابل اعتماد پراجیکٹ مینجمنٹ، اور جدید بلڈنگ سلوشنز فراہم کرتی ہے جو کہ حفاظت، معیار اور کسٹمر کے مکمل اطمینان پر مبنی ہیں۔",
      exploreProjects: "ہمارے منصوبے دیکھیں",
      requestQuote: "مفت کوٹیشن کی درخواست کریں",
      highlights: {
        residential: "رہائشی تعمیرات",
        commercial: "تجارتی منصوبے",
        civilEngineering: "سول انجینئرنگ",
        infrastructure: "بنیادی ڈھانچہ",
      },
    },
    about: {
      sectionTag: "ایل کے سی سی کا تعارف",
      title: "قابل اعتماد اور پائیدار تعمیراتی خدمات کے امین",
      lead:
        "ایل کے سی سی – لال خان کنسٹرکشن کمپنی اعلیٰ پائے کی تعمیراتی خدمات، معیاری کاریگری، منظم منصوبہ بندی اور کسٹمر دوست تعمیراتی حل پیش کرنے کے لیے پرعزم ہے۔",
      description:
        "ہم ہر منصوبے پر مضبوط حفاظتی ضوابط، معیاری مٹیریل اور جدید انجینئرنگ اصولوں کے تحت کام کرتے ہیں۔ چاہے لگژری رہائشی بنگلہ ہو، تجارتی پلازہ ہو یا سرکاری بنیادی ڈھانچے کا پروجیکٹ، ہم ابتدائی نقشے سے لے کر چابی کی حوالگی تک مکمل ذمہ داری نبھاتے ہیں۔",
      placeholders: {
        historyTitle: "کمپنی کا پس منظر اور تاریخ",
        historyContent:
          "[یہاں کمپنی کا پس منظر اور تاریخ درج کریں: لال خان کنسٹرکشن کمپنی کے قیام کا احوال، بنیادی سنگ میل اور تعمیراتی شعبے میں ترقی کی تفصیلات۔]",
        missionTitle: "ہمارا مشن اور وژن",
        missionContent:
          "[یہاں کمپنی کا مشن اور وژن درج کریں: ایل کے سی سی کا جدید تعمیراتی طریقوں، پائیدار انجینئرنگ اور صارفین کے اعتماد کا وژن۔]",
        experienceTitle: "کمپنی کا عملی تجربہ",
        experienceContent:
          "[یہاں کمپنی کا تجربہ درج کریں: تعمیراتی مہارت، سٹرکچرل ڈیزائن کی صلاحیت اور عملی صلاحیتوں کی تفصیل۔]",
        areasTitle: "آپریٹنگ ایریاز اور مقامات",
        areasContent:
          "[یہاں کمپنی کے کام کے علاقے درج کریں: وہ شہر، اضلاع اور رہائشی زونز جہاں ایل کے سی سی اپنی خدمات فراہم کرتی ہے۔]",
      },
      imageBadge: "سخت حفاظتی اور معیاری اصول",
      imageCaption: "ہمارے سول انجینئرز اور سائٹ مینیجرز زیر تعمیر عمارت کے سٹرکچر کا باریک بینی سے معائنہ کرتے ہوئے۔",
    },
    services: {
      sectionTag: "ہماری خدمات",
      title: "تعمیرات اور سول انجینئرنگ کی جامع خدمات",
      subtitle:
        "ابتدائی بنیادوں سے لے کر مکمل اندرونی و بیرونی تزئین و آرائش تک، ایل کے سی سی رہائشی، تجارتی اور صنعتی کلائنٹس کو اعلیٰ ترین خدمات فراہم کرتی ہے۔",
      items: [
        {
          id: "residential",
          title: "رہائشی تعمیرات (Residential Construction)",
          desc: "شاندار کوٹھیاں، ولاز، رہائشی پلازے اور ہاؤسنگ یونٹس کی پائیدار، خوبصورت اور مضبوط تعمیر۔",
          features: [
            "کسٹم ولاز اور بنگلوں کی تعمیر",
            "ملٹی سٹوری رہائشی اپارٹمنٹس",
            "مضبوط فاؤنڈیشن اور کنکریٹ سٹرکچر",
            "ٹرن کی بنیاد پر اندرونی و بیرونی فنشنگ",
          ],
        },
        {
          id: "commercial",
          title: "تجارتی تعمیرات (Commercial Construction)",
          desc: "کارپوریٹ دفاتر، تجارتی پلازے، مارکیٹس، دکانیں اور صنعتی گودام جو جدید تجارتی ضروریات کے عین مطابق ہوں۔",
          features: [
            "کارپوریٹ دفاتر اور بزنس سینٹرز",
            "کمرشل شاپنگ پلازے اور مالز",
            "صنعتی ویئرہاؤس اور فیکٹریاں",
            "سیفٹی اور فائر سیفٹی معیار کے مطابق عمارتیں",
          ],
        },
        {
          id: "civil",
          title: "سول انجینئرنگ (Civil Engineering)",
          desc: "سٹرکچرل ڈیزائن، بھاری بنیادیں، مٹی کی کھدائی، نکاسی آب کا نظام اور اعلیٰ انجینئرنگ کے شاہکار منصوبے۔",
          features: [
            "آر سی سی فریم ورک اور سٹرکچرل ڈیزائن",
            "گہری کھدائی اور مضبوط بنیادیں",
            "نکاسی آب اور سیوریج نیٹ ورک",
            "ریٹیننگ والز اور بھاری زمینی ڈھانچے",
          ],
        },
        {
          id: "renovation",
          title: "تزئین و آرائش اور ری ماڈلنگ (Renovation)",
          desc: "پرانی عمارتوں کی بحالی، سٹرکچرل مضبوطی، اندرونی تزئین، جدید فرنٹ ایلیویشن اور جدید ترین اپ گریڈیشن۔",
          features: [
            "عمارتوں کی سٹرکچرل مضبوطی و مرمت",
            "اندرونی و بیرونی جدید ترین ری ماڈلنگ",
            "تجارتی دفاتر کی ازسرنو آرائش",
            "توانائی بچانے والے جدید نظام",
          ],
        },
        {
          id: "architecture",
          title: "آرکیٹیکچرل پلاننگ اور ڈیزائن (Design & Planning)",
          desc: "جدید بلڈنگ لے آؤٹس، 2D و 3D ماڈلنگ، اندرونی نقشہ جات اور میونسپل اپروول کے لیے تیکنیکی ڈرائنگز۔",
          features: [
            "جامع ماسٹر پلاننگ اور آرکیٹیکچر",
            "تھری ڈی ایلیویشن اور رینڈرنگ",
            "الیکٹریکل، پلمبنگ اور سٹرکچرل ڈرائنگز",
            "بلڈنگ بائی لاز اور نقشہ پاس کروانے کی رہنمائی",
          ],
        },
        {
          id: "management",
          title: "پراجیکٹ مینجمنٹ (Project Management)",
          desc: "منصوبے کی مکمل نگرانی، بجٹ کنٹرول، مٹیریل کی کوالٹی ٹیسٹنگ، ٹائم لائن کی پابندی اور لیبر مینجمنٹ۔",
          features: [
            "تفصیلی لاگت کا تخمینہ اور بجٹنگ",
            "مرحلہ وار شیڈولنگ اور ٹائم مانیٹرنگ",
            "سائٹ پر مٹیریل کا سخت کوالٹی کنٹرول",
            "کنٹریکٹرز اور وینڈرز کی باقاعدہ کوآرڈینیشن",
          ],
        },
        {
          id: "infrastructure",
          title: "بنیادی ڈھانچہ اور عمومی تعمیرات (Infrastructure)",
          desc: "جنرل کنٹریکٹنگ، سڑکوں کی تعمیر، سائٹ ڈویلپمنٹ، پانی اور بجلی کے بنیادی نظام کی تنصیب۔",
          features: [
            "مکمل جنرل کنٹریکٹنگ سروسز",
            "سائٹ پریپریشن اور زمینی لیولنگ",
            "سڑکوں، گلیوں اور پیورز کی تعمیر",
            "زیر زمین یوٹیلیٹیز اور نکاسی آب کی تنصیب",
          ],
        },
      ],
      inquireBtn: "اس سروس کے بارے میں رابطہ کریں",
    },
    whyUs: {
      sectionTag: "ایل کے سی سی کا انتخاب کیوں؟",
      title: "اعتماد، عمدگی اور شفافیت کی ضمانت",
      subtitle:
        "ہم ہر مرحلے پر اعلیٰ کاریگری، شفاف حساب کتاب اور مکمل حفاظتی اصولوں کو ترجیح دیتے ہیں۔",
      reasons: [
        {
          title: "معیاری کاریگری کا پختہ عزم",
          desc: "ہم صرف اعلیٰ درجے کا تعمیراتی مٹیریل، مستند سیمنٹ مکس اور ماہر کاریگر استعمال کرتے ہیں تاکہ عمارت سالہا سال پائیدار رہے۔",
        },
        {
          title: "صارفین کا بھرپور اطمینان",
          desc: "ہمارا مقصد کلائنٹ کی مکمل تسلی ہے۔ ہم ہر مرحلے پر کلائنٹ کے مشورے اور ضروریات کو اولیت دیتے ہیں۔",
        },
        {
          title: "پیشہ ورانہ منصوبہ بندی",
          desc: "تفصیلی ڈرائنگز، واضح تخمینہ لاگت اور حقیقی شیڈولنگ تاکہ کسی غیر متوقع تاخیر یا اضافی اخراجات سے بچا جا سکے۔",
        },
        {
          title: "حفاظتی اصولوں پر سخت عملدرآمد",
          desc: "ہماری ہر سائٹ پر حفاظتی ہیلمٹ، سیفٹی کٹس اور ورکرز کی حفاظت کا بین الاقوامی معیار کے مطابق خیال رکھا جاتا ہے۔",
        },
        {
          title: "شفاف اور ایماندارانہ رابطہ",
          desc: "منصوبے کی پیشرفت، مواد کی خریداری اور مالی معاملات میں مکمل شفافیت اور باقاعدہ رپورٹنگ۔",
        },
        {
          title: "بروقت تکمیل کی کوشش",
          desc: "منظم سپلائی چین اور تجربہ کار لیبر فورس کے ذریعے پراجیکٹ کو طے شدہ وقت پر مکمل کرنے کی انتھک محنت۔",
        },
      ],
    },
    projects: {
      sectionTag: "ہمارا پورٹ فولیو",
      title: "اہم تعمیراتی اور انجینئرنگ منصوبہ جات",
      subtitle:
        "رہائشی، تجارتی، تزئین و آرائش اور سول انجینئرنگ کے نمونے دیکھیں۔ نیچے دیے گئے تمام کارڈز ایڈٹ کرنے کے قابل نمونہ جاتی پراجیکٹس ہیں۔",
      all: "تمام منصوبے",
      residential: "رہائشی",
      commercial: "تجارتی",
      renovation: "تزئین و آرائش",
      civil: "سول انجینئرنگ",
      demoNotice: "ایڈیٹ ایبل ڈیمو پراجیکٹ — یہاں اصل پراجیکٹ کی تفصیل درج کریں",
      viewDetails: "پراجیکٹ کی تفصیلات دیکھیں",
      modalTitle: "پراجیکٹ کی تفصیلی معلومات",
      modalLocation: "مقام",
      modalScope: "کام کا دائرہ کار",
      modalStatus: "موجودہ صورتحال",
      closeModal: "بند کریں",
      items: [
        {
          id: "proj-1",
          name: "[ڈیمو] جدید ایگزیکٹو لگژری ولا",
          category: "residential",
          categoryLabel: "رہائشی تعمیرات",
          location: "[یہاں پراجیکٹ کا مقام درج کریں - مثلاً سیکٹر ایف 7، اسلام آباد]",
          description:
            "[یہاں پراجیکٹ کی تفصیل درج کریں - دو منزلہ لگژری رہائش گاہ کی مکمل ڈیزائننگ اور تعمیر، جس میں مضبوط کنکریٹ سٹرکچر اور اعلیٰ درجے کی فنشنگ کی گئی ہے۔]",
          scope: "مکمل ولا کی تعمیر، سٹرکچرل ڈیزائننگ اور اندرونی فنشنگ",
          status: "مکمل شدہ (ڈیمو نمونہ)",
          image: "/src/assets/images/residential_project_1790687984244.jpg",
        },
        {
          id: "proj-2",
          name: "[ڈیمو] جدید کمرشل کارپوریٹ ٹاور",
          category: "commercial",
          categoryLabel: "تجارتی تعمیرات",
          location: "[یہاں پراجیکٹ کا مقام درج کریں - مثلاً بلیو ایریا، اسلام آباد / گلبرگ، لاہور]",
          description:
            "[یہاں پراجیکٹ کی تفصیل درج کریں - ملٹی سٹوری تجارتی عمارت جس میں جدید شیشے کا فیکڈ، انڈر گراؤنڈ پارکنگ اور ہیوی ڈیوٹی فاؤنڈیشن شامل ہے۔]",
          scope: "کمرشل ہائی رائز سٹرکچر، گلاس فیکڈ اور ایم ای پی سسٹمز",
          status: "مکمل شدہ (ڈیمو نمونہ)",
          image: "/src/assets/images/commercial_civil_project_1790687995843.jpg",
        },
        {
          id: "proj-3",
          name: "[ڈیمو] ہائی وے سول ریٹیننگ سٹرکچر",
          category: "civil",
          categoryLabel: "سول انجینئرنگ",
          location: "[یہاں پراجیکٹ کا مقام درج کریں - مثلاً ناردرن انفراسٹرکچر کوریڈور]",
          description:
            "[یہاں پراجیکٹ کی تفصیل درج کریں - پہاڑی سڑک کے ساتھ لینڈ سلائیڈنگ سے بچاؤ کے لیے ہیوی ریٹیننگ والز اور پانی کی نکاسی کے خصوصی چینلز کی تعمیر۔]",
          scope: "جیومیٹریکل سٹیبلائزیشن، اینکرڈ پائلز اور ڈرینیج نیٹ ورک",
          status: "کامیاب تکمیل (ڈیمو نمونہ)",
          image: "/src/assets/images/hero_construction_site_1790687955838.jpg",
        },
        {
          id: "proj-4",
          name: "[ڈیمو] کمرشل پلازہ کی مکمل تزئین و آرائش",
          category: "renovation",
          categoryLabel: "تزئین و آرائش",
          location: "[یہاں پراجیکٹ کا مقام درج کریں - کمرشل مارکیٹ]",
          description:
            "[یہاں پراجیکٹ کی تفصیل درج کریں - پرانی کمرشل بلڈنگ کی سٹرکچرل مضبوطی، بیرونی ڈیزائن کی جدید کاری اور اندرونی دفتروں کی ری ماڈلنگ۔]",
          scope: "سٹرکچرل ریٹروفٹنگ، فیکڈ ماڈرنائزیشن اور جدید فنشنگ",
          status: "حوالے کر دیا گیا (ڈیمو نمونہ)",
          image: "/src/assets/images/about_construction_site_1790687970681.jpg",
        },
        {
          id: "proj-5",
          name: "[ڈیمو] لگژری ہاؤسنگ انکلیو",
          category: "residential",
          categoryLabel: "رہائشی تعمیرات",
          location: "[یہاں پراجیکٹ کا مقام درج کریں - مثلاً ڈی ایچ اے فیز 8]",
          description:
            "[یہاں پراجیکٹ کی تفصیل درج کریں - کسٹم ہاؤسنگ سوسائٹی میں خوبصورت باؤنڈری والز، مضبوط بنیادیں اور جدید فنشنگ کے ساتھ ولاز کی تعمیر۔]",
          scope: "ماسٹر پلاننگ، فاؤنڈیشن اور ریزیڈنشل سٹرکچر",
          status: "مکمل شدہ (ڈیمو نمونہ)",
          image: "/src/assets/images/residential_project_1790687984244.jpg",
        },
        {
          id: "proj-6",
          name: "[ڈیمو] انڈسٹریل سٹیل فریم ویئرہاؤس",
          category: "civil",
          categoryLabel: "سول انجینئرنگ",
          location: "[یہاں پراجیکٹ کا مقام درج کریں - انڈسٹریل اسٹیٹ]",
          description:
            "[یہاں پراجیکٹ کی تفصیل درج کریں - صنعتی استعمال کے لیے پری انجینئرڈ سٹیل شیڈ، بھاری وزن برداشت کرنے والے کنکریٹ فلورز اور لوڈنگ بے۔]",
          scope: "سٹیل فریم ورک، ہیوی کنکریٹ سلیب اور سائٹ یوٹیلیٹیز",
          status: "حوالے کر دیا گیا (ڈیمو نمونہ)",
          image: "/src/assets/images/commercial_civil_project_1790687995843.jpg",
        },
      ],
    },
    process: {
      sectionTag: "کام کا طریقہ کار",
      title: "ہمارا منظم اور قابل اعتماد 5 مرحلہ وار عمل",
      subtitle:
        "ہر کامیاب منصوبہ ایک منظم لائحہ عمل کا محتاج ہوتا ہے تاکہ تکنیکی معیار، بجٹ اور مقررہ وقت کی پابندی کو یقینی بنایا جا سکے۔",
      steps: [
        {
          stepNumber: "01",
          title: "ابتدائی مشاورت اور تفہیم",
          desc: "ہم آپ کی ضروریات، مطلوبہ ڈیزائن، تخمینی بجٹ اور تکمیل کے متوقع وقت پر تفصیلی بات چیت کرتے ہیں۔",
        },
        {
          stepNumber: "02",
          title: "سائٹ کا معائنہ اور ضروریات",
          desc: "ہمارے انجینئرز سائٹ کا دورہ کر کے زمین، مٹی کی ساخت، آس پاس کے راستوں اور یوٹیلیٹیز کا جائزہ لیتے ہیں۔",
        },
        {
          stepNumber: "03",
          title: "منصوبہ بندی اور تخمینہ لاگت",
          desc: "ہم تفصیلی نقشہ جات، مٹیریل کی فہرست (BOQ)، لاگت کا تخمینہ اور مرحلہ وار ٹائم لائن پیش کرتے ہیں۔",
        },
        {
          stepNumber: "04",
          title: "عملی تعمیر اور نگرانی",
          desc: "ہماری ماہر ٹیمیں بنیادوں، سٹرکچر، پلمبنگ، الیکٹریکل اور فنشنگ کا کام سخت نگرانی میں انجام دیتی ہیں۔",
        },
        {
          stepNumber: "05",
          title: "کوالٹی چیک اور چابی کی حوالگی",
          desc: "مکمل معائنے اور کوالٹی تسلی کے بعد تمام تیکنیکی دستاویزات کے ساتھ پراجیکٹ باقاعدہ طور پر آپ کے حوالے کیا جاتا ہے۔",
        },
      ],
    },
    stats: {
      sectionTag: "کمپنی کے اعداد و شمار",
      title: "ہماری آپریشنل صلاحیت اور ریکارڈ",
      notice:
        "نوٹ: نیچے دیے گئے اعداد و شمار ایڈٹ ایبل پلیس ہولڈرز ہیں جہاں آپ اپنی کمپنی کے تصدیق شدہ اعداد و شمار درج کر سکتے ہیں۔",
      experience: "سالوں کا تجربہ",
      projects: "مکمل شدہ منصوبے",
      clients: "مطمئن صارفین",
      team: "انجینئرز اور ماہرین کی ٹیم",
    },
    testimonials: {
      sectionTag: "کلائنٹس کی آراء",
      title: "ہمارے صارفین اور پارٹنرز کیا کہتے ہیں",
      subtitle:
        "ایڈٹ ایبل ٹیسٹیمونیل کارڈز۔ اصل صارفین کی رائے حاصل ہونے پر یہاں باآسانی درج کی جا سکتی ہے۔",
      placeholderNotice: "کلائنٹ فیڈ بیک پلیس ہولڈر - یہاں اصل کسٹمر ریویو شامل کریں",
      items: [
        {
          name: "[کسٹمر کا نام پلیس ہولڈر 1]",
          project: "[پراجیکٹ کا نام - مثلاً رہائشی ولا کے مالک]",
          review:
            "\"ایل کے سی سی نے ابتدائی معائنے سے لے کر چابی ملنے تک انتہائی پیشہ ورانہ انداز میں کام کیا۔ ان کے سٹرکچر کا معیار اور شفاف رابطہ داری واقعی قابل تعریف ہے۔\"",
        },
        {
          name: "[کسٹمر کا نام پلیس ہولڈر 2]",
          project: "[پراجیکٹ کا نام - مثلاً کمرشل پلازہ ڈویلپر]",
          review:
            "\"لال خان کنسٹرکشن کمپنی کے انجینئرز نے ہمارے کمرشل پروجیکٹ کو مقررہ وقت پر مکمل کیا۔ سائٹ پر حفاظتی اصولوں اور مٹیریل ٹیسٹنگ پر ان کی توجہ لاجواب تھی۔\"",
        },
        {
          name: "[کسٹمر کا نام پلیس ہولڈر 3]",
          project: "[پراجیکٹ کا نام - مثلاً سول انفراسٹرکچر پارٹنر]",
          review:
            "\"ایل کے سی سی کی ٹیم کے ساتھ کام کر کے ہمیں مکمل ذہنی سکون ملا۔ ہر مرحلے پر باقاعدہ تکنیکی رپورٹس اور شفاف حساب کتاب ان کا طرہ امتیاز ہے۔\"",
        },
      ],
    },
    cta: {
      title: "کیا آپ اپنے خوابوں کے منصوبے کی تعمیر کے لیے تیار ہیں؟",
      subtitle:
        "آئیے اپنی تعمیراتی ضروریات پر بات کریں اور ایل کے سی سی کی بااعتماد ٹیم کے ساتھ اپنے خوابوں کو حقیقت کا روپ دیں۔",
      requestQuote: "مفت کوٹیشن کی درخواست کریں",
      contactUs: "ایل کے سی سی سے براہِ راست رابطہ کریں",
    },
    contact: {
      sectionTag: "رابطہ کیجیے",
      title: "ایل کے سی سی – لال خان کنسٹرکشن کمپنی سے رابطہ کریں",
      subtitle:
        "فون، واٹس ایپ یا ای میل کے ذریعے رابطہ کریں یا نیچے دیے گئے فارم کے ذریعے اپنی ضروریات بھیجیں۔",
      phoneCard: "فون پر بات کریں",
      emailCard: "ای میل انکوائری",
      whatsappCard: "واٹس ایپ چیٹ",
      addressCard: "مرکزی دفتر کا پتہ",
      mapsTitle: "دفتر کا نقشہ",
      mapsPlaceholder: "[گوگل میپس پلیس ہولڈر]",
      mapsInstructions:
        "اپنا اصل گوگل میپ لگانے کے لیے `src/config/companyInfo.ts` میں `googleMapsEmbedUrl` کے اندر اپنا میپ لنک درج کریں۔",
      form: {
        title: "ہمیں پیغام بھیجیں / کوٹیشن حاصل کریں",
        fullName: "پورا نام",
        fullNamePlaceholder: "اپنا مکمل نام درج کریں",
        phone: "فون / موبائل نمبر",
        phonePlaceholder: "مثلاً 0300 1234567",
        email: "ای میل ایڈریس",
        emailPlaceholder: "name@example.com",
        projectType: "منصوبے کی قسم",
        selectType: "منصوبے کی قسم منتخب کریں...",
        budgetRange: "تخمینی بجٹ",
        selectBudget: "اپنا متوقع بجٹ منتخب کریں...",
        message: "منصوبے کی تفصیلات",
        messagePlaceholder:
          "اپنے منصوبے کی تفصیل، رقبہ (مربع فٹ / مرلہ / کنال)، مقام اور متوقع ٹائم فریم درج کریں...",
        submitBtn: "انکوائری فارم جمع کروائیں",
        submitting: "انکوائری پروسیس ہو رہی ہے...",
        successTitle: "آپ کی انکوائری درج ہو چکی ہے (ڈیمو موڈ)",
        successMessage:
          "ایل کے سی سی سے رابطہ کرنے کا شکریہ! چونکہ یہ ایک سٹیٹک فرنٹ اینڈ ڈیمو ہے، آپ کا پیغام فرنٹ اینڈ پر محفوظ ہو گیا ہے۔ اپنے اصل ای میل پر براہِ راست پیغامات موصول کرنے کے لیے Formspree یا EmailJS سروس کو src/components/Contact.tsx کے ساتھ منسلک فرمائیں۔",
        demoNotice:
          "ڈیمو جمع آوری: فارم کا ڈیٹا فرنٹ اینڈ پر باقاعدہ تصدیق کے ساتھ وصول کر لیا گیا ہے۔ اصل پیغامات کے لیے اپنا ای میل بیک اینڈ جوڑیں۔",
        resetBtn: "ایک اور انکوائری بھیجیں",
        errors: {
          nameRequired: "براہ کرم اپنا پورا نام درج کریں۔",
          phoneRequired: "براہ کرم درست فون نمبر درج کریں۔",
          emailRequired: "براہ کرم اپنا ای میل ایڈریس درج کریں۔",
          emailInvalid: "براہ کرم درست ای میل فارمیٹ درج کریں۔",
          projectRequired: "براہ کرم منصوبے کی قسم منتخب کریں۔",
          messageRequired: "براہ کرم اپنے پراجیکٹ کے بارے میں چند جملے تحریر کریں۔",
        },
      },
    },
    quoteModal: {
      title: "تعمیراتی لاگت کا تخمینہ اور کوٹیشن کیلکولیٹر",
      subtitle:
        "اپنے مطلوبہ رقبے اور تعمیراتی معیار کے مطابق ابتدائی تخمینہ حاصل کریں اور تفصیلات ایل کے سی سی کو ارسال کریں۔",
      projectType: "منصوبے کی قسم منتخب کریں",
      areaSize: "کل تعمیراتی رقبہ (Covered Area)",
      areaSizePlaceholder: "مثلاً 2500",
      unit: "پیمائش کا یونٹ",
      finishingQuality: "مٹیریل اور فنشنگ کا گریڈ",
      qualities: {
        standard: "معیاری گریڈ (مضبوط گرے سٹرکچر اور بنیادی فنشنگ)",
        premium: "پریمیم گریڈ (اعلیٰ پائے کا مٹیریل، امپورٹڈ سینیٹری اور ٹائلز)",
        luxury: "لگژری گریڈ (اطالوی ماربل، کسٹم ووڈ ورک اور سمارٹ ہوم سہولیات)",
      },
      estimatedRange: "متوقع ابتدائی بجٹ کی حد",
      disclaimer:
        "وضاحت: یہ حساب کتاب صرف تخمینی معلومات کے لیے ہے۔ حتمی لاگت کا تعین سائٹ کے معائنے، سٹرکچرل ڈرائنگز اور مخصوص مٹیریل کے انتخاب کے بعد کیا جاتا ہے۔",
      sendInquiry: "یہ معلومات کانٹیکٹ فارم میں خودکار درج کریں",
      close: "کیلکولیٹر بند کریں",
    },
    customizationGuide: {
      title: "ویب سائٹ اونر گائیڈ (ڈیٹا تبدیل کرنے کا طریقہ)",
      subtitle:
        "صرف ایک فائل کے ذریعے تمام پلیس ہولڈرز کو اپنی اصل کمپنی کی معلومات سے تبدیل کریں۔",
      step1Title: "1. کمپنی کی معلومات تبدیل کریں",
      step1Desc:
        "فائل `src/config/companyInfo.ts` کھولیں اور اپنا فون نمبر، ای میل، دفتری پتہ، واٹس ایپ اور قیام کا سال درج کریں۔",
      step2Title: "2. کمپنی کا اصل لوگو لگائیں",
      step2Desc:
        "اپنا لوگو `/src/assets/images/` میں رکھیں اور `companyInfo.ts` میں `logoUrl` کا پاتھ سیٹ کریں۔ اگر خالی چھوڑیں گے تو خوبصورت ٹیکسٹ ویکٹر لوگو دکھائی دے گا۔",
      step3Title: "3. اصل پراجیکٹس کی تصاویر لگائیں",
      step3Desc:
        "فائل `src/i18n/translations.ts` میں `projects.items` کے اندر اپنے مکمل شدہ پراجیکٹس کی تفصیلات اور تصاویر تبدیل کریں۔",
      close: "سمجھ آ گیا",
    },
    footer: {
      description:
        "ایل کے سی سی – لال خان کنسٹرکشن کمپنی رہائشی، تجارتی، سول انجینئرنگ اور بنیادی ڈھانچے کے شعبوں میں حفاظت، معیار اور پائیداری کا دوسرا نام ہے۔",
      quickLinks: "فوری لنکس",
      servicesTitle: "ہماری خدمات",
      contactTitle: "رابطہ اور مرکزی دفتر",
      rightsReserved: "تمام حقوق محفوظ ہیں۔",
      privacyPolicy: "پرائیویسی پالیسی",
      termsConditions: "قواعد و ضوابط",
      companyEstablished: "قیام:",
      customizationTrigger: "ڈیٹا ایڈٹ کرنے کی گائیڈ دیکھیں",
    },
    legal: {
      privacyTitle: "پرائیویسی پالیسی",
      privacyContent:
        "ایل کے سی سی – لال خان کنسٹرکشن کمپنی اپنے تمام معزز صارفین اور کلائنٹس کے کوائف کے تحفظ کی مکمل ذمہ داری لیتی ہے۔ فارم کے ذریعے حاصل کی جانے والی معلومات صرف کوٹیشن کی فراہمی، سائٹ وزٹ کے شیڈول اور تعمیراتی کاموں کی انجام دہی کے لیے استعمال ہوتی ہیں اور کسی تیسرے فریق کو فراہم نہیں کی جاتیں۔",
      termsTitle: "قواعد و ضوابط",
      termsContent:
        "اس ویب سائٹ پر موجود تمام تعمیراتی خاکے، پراجیکٹ کی تفصیلات اور تحریری مواد ایل کے سی سی کی ملکیت ہیں۔ ویب سائٹ کیلکولیٹر سے حاصل ہونے والے تمام تخمینے صرف ابتدائی رہنمائی کے لیے ہیں اور حتمی لاگت باقاعدہ سروے اور معاہدے کے بعد طے کی جاتی ہے۔",
      close: "بند کریں",
    },
  },
};
