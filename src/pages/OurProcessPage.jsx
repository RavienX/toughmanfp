import facilityImg from "../assets/about-facility.png";

// ─── DATA ────────────────────────────────────────────────────────────────────

const PROCESS_STAGES = [
    {
        num: "01",
        icon: (
            <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="24" cy="16" r="8" />
                <path d="M8 44c0-8.8 7.2-16 16-16s16 7.2 16 16" />
                <path d="M36 10c2 1.5 4 4 4 6" strokeWidth="1.3" />
                <path d="M12 10c-2 1.5-4 4-4 6" strokeWidth="1.3" />
            </svg>
        ),
        phase: "Phase 1",
        title: "Accredited Farm Sourcing",
        shortTitle: "Farm Sourcing",
        color: "#1a4a8a",
        desc: "Every Toughman chicken originates from DA-BAI and NMIS-accredited partner farms across the Philippines. Flocks are raised under strict biosecurity protocols — no growth hormones, controlled feed, and regular veterinary oversight — ensuring every bird meets our premium quality baseline before it ever reaches our facility.",
        details: [
            "DA-BAI & NMIS-accredited farms only",
            "Hormone-free & antibiotic-responsible raising",
            "Regular on-site veterinary inspections",
            "Traceability records from hatch to harvest",
            "Humane animal welfare standards enforced",
        ],
        stat: { val: "100%", lbl: "Accredited Farms" },
    },
    {
        num: "02",
        icon: (
            <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 4L6 12v12c0 11 7.5 19 18 22 10.5-3 18-11 18-22V12L24 4z" />
                <polyline points="16,24 21,29 32,18" strokeWidth="2.2" />
            </svg>
        ),
        phase: "Phase 2",
        title: "Ante & Post-Mortem Inspection",
        shortTitle: "Veterinary Inspection",
        color: "#1a5a3a",
        desc: "Before and after slaughter, every batch undergoes rigorous ante-mortem and post-mortem inspections by licensed government veterinarians. Only birds that pass both stages proceed to processing. Rejected materials are immediately segregated and disposed of under biosafety protocols, with full documentation for regulatory compliance.",
        details: [
            "Licensed government veterinarians on-site",
            "Ante-mortem: live bird health screening",
            "Post-mortem: carcass-by-carcass examination",
            "Immediate segregation of rejected lots",
            "Full digital traceability & audit logs",
        ],
        stat: { val: "0%", lbl: "Tolerance for Substandard" },
    },
    {
        num: "03",
        icon: (
            <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="20" width="36" height="22" rx="2" />
                <path d="M6 20l9-10h18l9 10" />
                <rect x="12" y="28" width="6" height="14" />
                <rect x="21" y="28" width="6" height="14" />
                <rect x="30" y="28" width="6" height="8" />
                <path d="M16 10V6M24 10V6M32 10V6" strokeWidth="1.4" />
            </svg>
        ),
        phase: "Phase 3",
        title: "Modern Automated Processing",
        shortTitle: "Processing Line",
        color: "#5a1a6a",
        desc: "Our ISO 22000-certified facility operates fully automated, stainless-steel processing lines designed to minimise human contact and contamination risk. Temperature-controlled rooms are maintained at ≤10°C throughout. Slaughter, scalding, defeathering, evisceration, and washing all follow HACCP-approved critical control points with continuous monitoring.",
        details: [
            "ISO 22000:2018-certified processing plant",
            "Fully automated stainless-steel lines",
            "Processing rooms maintained ≤10°C",
            "HACCP CCPs monitored in real-time",
            "Automated wash & rinse sanitisation cycles",
        ],
        stat: { val: "≤10°C", lbl: "Processing Room Temp" },
    },
    {
        num: "04",
        icon: (
            <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="8" width="32" height="32" rx="3" />
                <path d="M16 24h6M26 24h6M24 16v6M24 26v6" />
                <path d="M13 13l4 4M31 13l-4 4M13 35l4-4M31 35l-4-4" strokeWidth="1.3" />
            </svg>
        ),
        phase: "Phase 4",
        title: "Precision Cutting & Portioning",
        shortTitle: "Cutting & Portioning",
        color: "#6a4a10",
        desc: "Post-processing carcasses enter our precision portioning line where skilled operators and automated cutters break down each bird into consistent portions — whole chicken, halves, quarters, breast fillet, drumsticks, wings, and mixed cuts. Weight tolerances are tightly controlled per product SKU to ensure uniformity for retail and foodservice customers.",
        details: [
            "Automated & manual portioning lines",
            "Weight-controlled per SKU (±5g tolerance)",
            "Whole, halves, quarters, fillets & parts",
            "Custom cutting programs for bulk clients",
            "Stainless-steel hygienic blades & equipment",
        ],
        stat: { val: "±5g", lbl: "Weight Tolerance" },
    },
    {
        num: "05",
        icon: (
            <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 24C10 15.2 16.3 8 24 8s14 7.2 14 16" />
                <path d="M8 28c0 9 7 16 16 16s16-7 16-16" strokeDasharray="3 3" />
                <path d="M24 16v8l5 3" strokeWidth="2" />
                <circle cx="24" cy="24" r="3" fill="#f47b20" stroke="none" />
                <path d="M14 12l-4-4M34 12l4-4" strokeWidth="1.3" />
            </svg>
        ),
        phase: "Phase 5",
        title: "Individual Quick Freezing (IQF)",
        shortTitle: "IQF Freezing",
        color: "#0d4a6a",
        desc: "Portioned products proceed immediately to our IQF (Individual Quick Freezing) tunnel, which rapidly drops the core product temperature to −18°C or below within minutes. IQF technology freezes each piece individually rather than in blocks, preserving cellular structure, locking in juices and nutrients, and preventing ice-crystal damage that degrades texture and flavour.",
        details: [
            "IQF tunnel: core temp reaches −18°C in <30 min",
            "Preserves cellular structure & natural juices",
            "No ice-block clumping — pieces stay separate",
            "Extends shelf life up to 12 months",
            "Continuous temperature logging & records",
        ],
        stat: { val: "−18°C", lbl: "IQF Core Temp" },
    },
    {
        num: "06",
        icon: (
            <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="10" y="14" width="28" height="22" rx="2" />
                <path d="M10 20h28" />
                <path d="M18 14V10h12v4" />
                <rect x="16" y="24" width="6" height="6" rx="1" />
                <rect x="26" y="24" width="6" height="6" rx="1" />
            </svg>
        ),
        phase: "Phase 6",
        title: "Hygienic Food-Grade Packaging",
        shortTitle: "Packaging",
        color: "#4a1a5a",
        desc: "Frozen products move directly to our GMP-compliant packaging room where they are sealed in food-grade, tamper-evident vacuum or modified-atmosphere packaging. Labels include product weight, batch number, production date, best-before date, and cold-chain handling instructions. Packaging is designed to maintain product integrity from our cold store to the end consumer's freezer.",
        details: [
            "GMP-compliant, temperature-controlled packaging room",
            "Vacuum & modified-atmosphere options available",
            "Tamper-evident, food-grade multilayer films",
            "Batch traceability codes on every pack",
            "Retail-ready & bulk/foodservice formats",
        ],
        stat: { val: "100%", lbl: "Tamper-Evident Sealed" },
    },
    {
        num: "07",
        icon: (
            <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 36V20l14-12 14 12v16" />
                <rect x="18" y="26" width="8" height="10" />
                <rect x="10" y="22" width="6" height="6" />
                <rect x="28" y="22" width="6" height="6" />
                <path d="M6 36h32M2 36h44" strokeWidth="1.3" />
            </svg>
        ),
        phase: "Phase 7",
        title: "Cold Storage & Warehousing",
        shortTitle: "Cold Storage",
        color: "#1a3a6b",
        desc: "Packed products enter our refrigerated cold store maintained at a steady −18°C to −22°C. Products are organised by batch, SKU, and FIFO (first-in, first-out) rotation. Our warehouse management system tracks real-time inventory levels, temperature logs, and stock movement — giving clients and auditors full visibility into storage conditions at any time.",
        details: [
            "Cold store maintained −18°C to −22°C",
            "FIFO stock rotation enforced",
            "Real-time temperature monitoring & alarms",
            "WMS-tracked batch & inventory management",
            "Segregated storage: retail vs. foodservice",
        ],
        stat: { val: "−20°C", lbl: "Avg. Storage Temp" },
    },
    {
        num: "08",
        icon: (
            <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="22" width="30" height="16" rx="2" />
                <path d="M32 28h6l8 6v4h-6" />
                <circle cx="12" cy="40" r="4" />
                <circle cx="38" cy="40" r="4" />
                <path d="M2 28h-0M8 22V18h16v4" strokeWidth="1.3" />
            </svg>
        ),
        phase: "Phase 8",
        title: "Refrigerated Cold Chain Delivery",
        shortTitle: "Cold Chain Delivery",
        color: "#3a1a1a",
        desc: "All outbound shipments are dispatched in NMIS-accredited refrigerated trucks equipped with GPS tracking and temperature data loggers. Delivery teams follow standardised cold chain handling protocols — no door-open time limits, mandatory pre-cooling of trucks, and signature-based delivery confirmation. Clients receive delivery manifests with temperature records for every shipment.",
        details: [
            "NMIS-accredited refrigerated fleet",
            "GPS tracking & real-time temperature loggers",
            "Pre-cooled trucks before every loading",
            "Delivery manifests with temperature records",
            "Metro Manila & provincial delivery available",
        ],
        stat: { val: "100%", lbl: "GPS-Tracked Deliveries" },
    },
];

const STANDARDS = [
    {
        icon: <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 3L4 9v10c0 9.4 6.4 17 16 19.5C30.5 36 37 28.4 37 19V9L20 3z" /><polyline points="13,21 18,26 28,16" strokeWidth="2.2" /></svg>,
        name: "HACCP",
        full: "Hazard Analysis & Critical Control Points",
        color: "var(--orange)",
    },
    {
        icon: <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="20" cy="20" r="16" /><text x="20" y="25" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="900" fontFamily="Montserrat,sans-serif" stroke="none">ISO</text></svg>,
        name: "ISO 22000",
        full: "Food Safety Management Systems",
        color: "#7dd3fc",
    },
    {
        icon: <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="28" height="28" rx="3" /><polyline points="13,20 18,25 27,15" strokeWidth="2.2" /></svg>,
        name: "GMP",
        full: "Good Manufacturing Practice",
        color: "#86efac",
    },
    {
        icon: <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="20" cy="20" r="16" /><text x="20" y="26" textAnchor="middle" fill="currentColor" fontSize="16" fontFamily="serif" stroke="none">حلال</text></svg>,
        name: "HALAL",
        full: "Halal Certified Products",
        color: "#fde68a",
    },
    {
        icon: <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 3L4 9v10c0 9.4 6.4 17 16 19.5C30.5 36 37 28.4 37 19V9L20 3z" /><polyline points="13,21 18,26 28,16" strokeWidth="2.2" /></svg>,
        name: "NMIS",
        full: "National Meat Inspection Service",
        color: "#c4b5fd",
    },
];

const FAQS = [
    {
        q: "How does Toughman ensure product freshness during delivery?",
        a: "All deliveries are made in NMIS-accredited refrigerated trucks pre-cooled to −18°C before loading. Each truck is fitted with a real-time temperature data logger, and clients receive delivery manifests showing the temperature record from dispatch to arrival."
    },
    {
        q: "What is IQF and why is it better than block-freezing?",
        a: "IQF (Individual Quick Freezing) freezes each piece separately at blast speed, which prevents large ice crystals from forming inside the meat cells. Block-freezing bundles pieces together and forms large destructive ice crystals. IQF product retains better texture, flavour, moisture, and nutritional value after thawing."
    },
    {
        q: "Can we visit the facility for an audit or inspection?",
        a: "Yes. Toughman welcomes client and third-party audits. Our facility is open for scheduled visits in compliance with our biosecurity entry protocols. Please contact our sales team to arrange a facility tour or formal audit appointment."
    },
    {
        q: "What certifications does Toughman hold?",
        a: "We are certified under HACCP, ISO 22000:2018, GMP, and Halal, and are fully accredited by the National Meat Inspection Service (NMIS). All certifications are available for review upon request."
    },
    {
        q: "Does Toughman offer custom portioning or private-label packaging?",
        a: "Yes. We offer custom cutting programs, weight specifications, and private-label packaging for bulk and institutional clients. Minimum order quantities apply. Reach out to our sales team for a custom quotation."
    },
];

// ─── CSS ─────────────────────────────────────────────────────────────────────

const PROCESS_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Open+Sans:wght@400;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { width: 100%; background: #f5f7fa; }
body {
  width: 100% !important; min-width: 320px !important;
  margin: 0 !important; padding: 0 !important;
  overflow-x: hidden !important;
  font-family: 'Open Sans', sans-serif;
  background: #f5f7fa !important;
}
#root, #__next {
  width: 100% !important; margin: 0 !important; padding: 0 !important;
  background: #f5f7fa !important;
}
.tm-page {
  width: 100% !important; max-width: 100% !important;
  margin: 0 !important; padding: 0 !important;
  overflow-x: hidden !important; background: #f5f7fa !important;
}

:root {
  --navy: #0d1b3e; --navy-dark: #060f23; --blue: #1a3a6b;
  --orange: #f47b20; --orange-dark: #d96a10;
  --gray-light: #f5f7fa; --gray: #7a8499;
}

/* ─ SHARED INNER ─ */
.opp-inner {
  width: 100%; max-width: 1280px;
  margin: 0 auto; padding: 0 40px;
  box-sizing: border-box;
}

/* ════════════════════════════════════════
   HERO
════════════════════════════════════════ */
.opp-hero {
  background: var(--navy);
  padding: 72px 0 64px;
  position: relative; overflow: hidden; width: 100%;
}
.opp-hero::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 60% 70% at 90% 50%, rgba(244,123,32,.08) 0%, transparent 65%),
    repeating-linear-gradient(-45deg,
      transparent, transparent 38px,
      rgba(255,255,255,.016) 38px, rgba(255,255,255,.016) 39px);
  pointer-events: none;
}
.opp-hero .opp-inner { position: relative; z-index: 1; }
.opp-breadcrumb {
  display: flex; align-items: center; gap: 8px; margin-bottom: 24px;
  font-family: 'Montserrat', sans-serif; font-size: 11px;
  color: rgba(255,255,255,.4); letter-spacing: 1px; text-transform: uppercase;
}
.opp-breadcrumb-btn {
  background: none; border: none; cursor: pointer; padding: 0;
  font-family: 'Montserrat', sans-serif; font-size: 11px;
  color: rgba(255,255,255,.4); letter-spacing: 1px; text-transform: uppercase;
  transition: color .2s;
}
.opp-breadcrumb-btn:hover { color: var(--orange); }
.opp-breadcrumb-sep { color: rgba(255,255,255,.2); }
.opp-breadcrumb-cur { color: var(--orange); }

.opp-hero-layout {
  display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
}
.opp-hero-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 16px;
}
.opp-hero-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900;
  font-size: clamp(30px, 4vw, 52px);
  line-height: 1.05; color: #fff; text-transform: uppercase;
  letter-spacing: -.5px; margin-bottom: 0;
}
.opp-hero-title .hl { color: var(--orange); }
.opp-hero-divider { width: 50px; height: 3.5px; background: var(--orange); border-radius: 2px; margin: 20px 0; }
.opp-hero-desc { font-size: 14px; color: rgba(255,255,255,.65); line-height: 1.85; margin-bottom: 36px; }
.opp-hero-pills { display: flex; flex-wrap: wrap; gap: 10px; }
.opp-hero-pill {
  display: flex; align-items: center; gap: 8px; padding: 8px 16px;
  border: 1px solid rgba(244,123,32,.35); border-radius: 24px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10.5px;
  color: rgba(255,255,255,.8); text-transform: uppercase; letter-spacing: .6px;
  background: rgba(244,123,32,.08);
}
.opp-hero-pill-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); flex-shrink: 0; }

.opp-hero-img-wrap {
  position: relative; border-radius: 16px; overflow: hidden;
  aspect-ratio: 4/3;
  background: linear-gradient(135deg, #0d2a4a 0%, #1a3a6b 60%, #0d1b3e 100%);
  box-shadow: 0 24px 64px rgba(0,0,0,.5);
}
.opp-hero-img-wrap img {
  width: 100%; height: 100%; object-fit: cover; display: block;
}
.opp-hero-img-badge {
  position: absolute; bottom: 20px; left: 20px;
  background: rgba(9,22,48,.85); backdrop-filter: blur(8px);
  border: 1px solid rgba(244,123,32,.4); border-radius: 10px;
  padding: 14px 18px; display: flex; align-items: center; gap: 12px;
}
.opp-hero-img-badge-val {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 22px;
  color: var(--orange); line-height: 1;
}
.opp-hero-img-badge-lbl { font-size: 10px; color: rgba(255,255,255,.6); text-transform: uppercase; letter-spacing: .6px; margin-top: 2px; }

/* ════════════════════════════════════════
   PROCESS TIMELINE
════════════════════════════════════════ */
.opp-timeline-section { background: var(--gray-light); padding: 80px 0; width: 100%; }
.opp-tl-header { text-align: center; margin-bottom: 64px; }
.opp-section-label {
  display: inline-block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px;
}
.opp-section-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(24px, 3vw, 36px);
  color: var(--navy); text-transform: uppercase; letter-spacing: .4px;
  margin-bottom: 12px; line-height: 1.1;
}
.opp-section-sub {
  font-size: 14px; color: var(--gray); line-height: 1.8; max-width: 560px; margin: 0 auto;
}

/* Step cards */
.opp-steps { display: flex; flex-direction: column; gap: 0; }
.opp-step {
  display: grid; grid-template-columns: 80px 4px 1fr; gap: 0 28px;
  align-items: stretch; min-height: 0;
}
.opp-step-num-col { display: flex; flex-direction: column; align-items: center; gap: 0; }
.opp-step-num-circle {
  width: 64px; height: 64px; border-radius: 50%;
  background: var(--navy); border: 3px solid var(--orange);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 16px;
  color: var(--orange); flex-shrink: 0; position: relative; z-index: 2;
}
.opp-step-line { flex: 1; width: 2px; background: linear-gradient(to bottom, var(--orange), rgba(244,123,32,.15)); margin: 4px auto 0; }
.opp-step:last-child .opp-step-line { display: none; }
.opp-step-connector { display: none; }

.opp-step-card {
  background: #fff; border-radius: 16px; padding: 28px 28px 28px 24px;
  border: 1px solid #eaeaea; box-shadow: 0 4px 20px rgba(0,0,0,.05);
  margin-bottom: 24px;
  transition: box-shadow .25s, border-color .25s;
  display: grid; grid-template-columns: 1fr auto; gap: 20px; align-items: start;
}
.opp-step-card:hover {
  box-shadow: 0 12px 40px rgba(13,27,62,.12);
  border-color: rgba(244,123,32,.3);
}
.opp-step-card-left { display: flex; flex-direction: column; }
.opp-step-phase {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10px;
  color: var(--orange); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 6px;
  display: flex; align-items: center; gap: 8px;
}
.opp-step-phase::before { content: ''; width: 20px; height: 2px; background: var(--orange); flex-shrink: 0; }
.opp-step-card-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 18px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .3px; margin-bottom: 12px;
}
.opp-step-card-desc {
  font-size: 13.5px; color: #4a5568; line-height: 1.8; margin-bottom: 18px;
}
.opp-step-details { display: flex; flex-wrap: wrap; gap: 8px; }
.opp-step-detail {
  display: flex; align-items: center; gap: 6px; padding: 5px 12px;
  background: var(--gray-light); border: 1px solid #dde2ec; border-radius: 5px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .5px;
}
.opp-step-detail::before { content: '✓'; color: var(--orange); font-weight: 900; font-size: 11px; }
.opp-step-card-right {
  display: flex; flex-direction: column; align-items: center; gap: 16px;
  min-width: 110px;
}
.opp-step-icon-wrap {
  width: 80px; height: 80px; border-radius: 14px;
  background: linear-gradient(135deg, #0d1b3e 0%, #1a3a6b 100%);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; box-shadow: 0 6px 20px rgba(13,27,62,.2);
}
.opp-step-stat {
  text-align: center; padding: 12px 14px; border-radius: 10px;
  background: var(--navy); min-width: 90px;
}
.opp-step-stat-val {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 17px;
  color: var(--orange); line-height: 1; white-space: nowrap;
}
.opp-step-stat-lbl { font-size: 9px; color: rgba(255,255,255,.5); text-transform: uppercase; letter-spacing: .6px; margin-top: 4px; }

/* ════════════════════════════════════════
   STANDARDS SECTION
════════════════════════════════════════ */
.opp-standards { background: var(--navy); padding: 72px 0; width: 100%; }
.opp-standards .opp-section-title { color: #fff; }
.opp-standards .opp-section-sub { color: rgba(255,255,255,.55); }
.opp-standards-grid {
  display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; margin-top: 48px;
}
.opp-std-card {
  background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);
  border-radius: 14px; padding: 28px 20px 24px; text-align: center;
  transition: background .2s, border-color .2s, transform .2s;
}
.opp-std-card:hover {
  background: rgba(255,255,255,.09); border-color: rgba(244,123,32,.4);
  transform: translateY(-4px);
}
.opp-std-icon { margin-bottom: 14px; display: flex; justify-content: center; }
.opp-std-name {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 15px;
  color: #fff; letter-spacing: .3px; margin-bottom: 6px;
}
.opp-std-full {
  font-size: 11px; color: rgba(255,255,255,.45); line-height: 1.6; text-align: center;
}

/* ════════════════════════════════════════
   FACILITY HIGHLIGHT
════════════════════════════════════════ */
.opp-facility { background: #fff; padding: 80px 0; width: 100%; }
.opp-facility .opp-inner {
  display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
}
.opp-facility-img-wrap {
  position: relative; border-radius: 16px; overflow: hidden;
  aspect-ratio: 4/3;
  background: linear-gradient(135deg, #0d2a4a 0%, #1a3a6b 100%);
  box-shadow: 0 16px 48px rgba(13,27,62,.15);
}
.opp-facility-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
.opp-facility-img-accent {
  position: absolute; top: -12px; left: -12px;
  width: 80px; height: 80px; border-radius: 14px;
  background: var(--orange); display: flex; align-items: center; justify-content: center;
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 11px;
  color: #fff; text-align: center; letter-spacing: .5px; line-height: 1.3;
  box-shadow: 0 8px 20px rgba(244,123,32,.4);
}
.opp-facility-content {}
.opp-facility-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px;
}
.opp-facility-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(22px, 2.5vw, 32px);
  color: var(--navy); text-transform: uppercase; letter-spacing: .3px;
  line-height: 1.15; margin-bottom: 16px;
}
.opp-facility-desc {
  font-size: 13.5px; color: var(--gray); line-height: 1.85; margin-bottom: 28px;
}
.opp-facility-metrics { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 32px; }
.opp-facility-metric {
  background: var(--gray-light); border-radius: 10px; padding: 16px 18px;
  border-left: 4px solid var(--orange);
}
.opp-facility-metric-val {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 22px;
  color: var(--navy); line-height: 1;
}
.opp-facility-metric-lbl { font-size: 11px; color: var(--gray); margin-top: 4px; text-transform: uppercase; letter-spacing: .5px; }
.btn-opp-facility {
  background: var(--navy); color: #fff; border: none;
  padding: 13px 28px; border-radius: 7px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12px;
  text-transform: uppercase; letter-spacing: .8px; cursor: pointer;
  transition: background .2s; display: inline-flex; align-items: center; gap: 8px;
}
.btn-opp-facility:hover { background: var(--blue); }

/* ════════════════════════════════════════
   FAQ
════════════════════════════════════════ */
.opp-faq { background: var(--gray-light); padding: 72px 0; width: 100%; }
.opp-faq .opp-inner { display: grid; grid-template-columns: 340px 1fr; gap: 64px; align-items: start; }
.opp-faq-left {}
.opp-faq-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px;
}
.opp-faq-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(22px, 2.5vw, 30px);
  color: var(--navy); text-transform: uppercase; letter-spacing: .3px;
  line-height: 1.2; margin-bottom: 16px;
}
.opp-faq-sub { font-size: 13.5px; color: var(--gray); line-height: 1.8; margin-bottom: 28px; }
.btn-opp-faq {
  background: var(--orange); color: #fff; border: none;
  padding: 13px 28px; border-radius: 7px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12px;
  text-transform: uppercase; letter-spacing: .8px; cursor: pointer;
  transition: background .2s; display: inline-flex; align-items: center; gap: 8px;
}
.btn-opp-faq:hover { background: var(--orange-dark); }

.opp-faq-list { display: flex; flex-direction: column; gap: 12px; }
.opp-faq-item {
  background: #fff; border-radius: 12px;
  border: 1px solid #eaeaea; overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,.04);
  transition: border-color .2s;
}
.opp-faq-item.open { border-color: rgba(244,123,32,.4); }
.opp-faq-q {
  width: 100%; background: none; border: none; cursor: pointer;
  padding: 18px 22px; text-align: left;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 13px;
  color: var(--navy); line-height: 1.4;
  transition: color .2s;
}
.opp-faq-item.open .opp-faq-q { color: var(--orange); }
.opp-faq-chevron {
  width: 24px; height: 24px; border-radius: 50%;
  background: var(--gray-light); border: 1px solid #dde2ec;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; flex-shrink: 0; color: var(--navy);
  transition: background .2s, transform .3s, color .2s;
}
.opp-faq-item.open .opp-faq-chevron { background: var(--orange); color: #fff; border-color: var(--orange); transform: rotate(180deg); }
.opp-faq-a {
  padding: 0 22px; max-height: 0; overflow: hidden;
  font-size: 13px; color: #4a5568; line-height: 1.85;
  transition: max-height .35s ease, padding .35s ease;
}
.opp-faq-item.open .opp-faq-a { max-height: 300px; padding: 0 22px 20px; }

/* ════════════════════════════════════════
   CTA BANNER
════════════════════════════════════════ */
.opp-cta {
  background: linear-gradient(135deg, var(--navy-dark) 0%, var(--blue) 60%, var(--navy) 100%);
  padding: 72px 0; width: 100%; position: relative; overflow: hidden;
}
.opp-cta::before {
  content: ''; position: absolute; inset: 0;
  background: repeating-linear-gradient(-45deg,
    transparent, transparent 38px,
    rgba(255,255,255,.012) 38px, rgba(255,255,255,.012) 39px);
  pointer-events: none;
}
.opp-cta .opp-inner {
  position: relative; z-index: 1;
  display: flex; align-items: center; justify-content: space-between; gap: 40px; flex-wrap: wrap;
}
.opp-cta-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px;
}
.opp-cta-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(22px, 2.5vw, 32px);
  color: #fff; text-transform: uppercase; letter-spacing: .3px; line-height: 1.15; margin-bottom: 10px;
}
.opp-cta-sub { font-size: 14px; color: rgba(255,255,255,.6); line-height: 1.7; max-width: 420px; }
.opp-cta-btns { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; flex-shrink: 0; }
.btn-opp-cta-primary {
  background: var(--orange); color: #fff; border: none;
  padding: 15px 32px; border-radius: 7px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12.5px;
  cursor: pointer; letter-spacing: .8px; text-transform: uppercase;
  transition: background .2s; white-space: nowrap; display: inline-flex; align-items: center; gap: 8px;
}
.btn-opp-cta-primary:hover { background: var(--orange-dark); }
.btn-opp-cta-outline {
  background: transparent; color: #fff;
  border: 2px solid rgba(255,255,255,.45); padding: 15px 32px; border-radius: 7px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12.5px;
  cursor: pointer; letter-spacing: .8px; text-transform: uppercase;
  transition: all .2s; white-space: nowrap;
}
.btn-opp-cta-outline:hover { border-color: var(--orange); color: var(--orange); }

/* ════════════════════════════════════════
   RESPONSIVE
════════════════════════════════════════ */
@media (max-width: 1100px) {
  .opp-inner { padding: 0 24px; }
  .opp-standards-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 900px) {
  .opp-hero .opp-inner { padding: 0 24px; }
  .opp-hero-layout { grid-template-columns: 1fr; gap: 36px; }
  .opp-hero-img-wrap { max-width: 560px; }
  .opp-step { grid-template-columns: 56px 3px 1fr; gap: 0 18px; }
  .opp-step-num-circle { width: 52px; height: 52px; font-size: 14px; }
  .opp-step-card { grid-template-columns: 1fr; }
  .opp-step-card-right { flex-direction: row; min-width: 0; justify-content: flex-start; }
  .opp-facility .opp-inner { grid-template-columns: 1fr; gap: 36px; }
  .opp-faq .opp-inner { grid-template-columns: 1fr; gap: 36px; }
  .opp-standards-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 640px) {
  .opp-hero { padding: 48px 0 40px; }
  .opp-timeline-section { padding: 52px 0; }
  .opp-tl-header { margin-bottom: 40px; }
  .opp-step { grid-template-columns: 44px 2px 1fr; gap: 0 12px; }
  .opp-step-num-circle { width: 44px; height: 44px; font-size: 12px; border-width: 2px; }
  .opp-step-card { padding: 20px 16px; }
  .opp-step-card-title { font-size: 15px; }
  .opp-step-card-right { flex-direction: row; }
  .opp-standards-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .opp-facility { padding: 52px 0; }
  .opp-facility-metrics { grid-template-columns: 1fr 1fr; }
  .opp-faq { padding: 52px 0; }
  .opp-cta { padding: 52px 0; }
  .opp-cta .opp-inner { flex-direction: column; align-items: flex-start; }
  .opp-cta-btns { width: 100%; }
  .btn-opp-cta-primary, .btn-opp-cta-outline { flex: 1; justify-content: center; }
}
@media (max-width: 420px) {
  .opp-inner { padding: 0 16px; }
  .opp-hero-pills { gap: 6px; }
  .opp-hero-pill { font-size: 9.5px; padding: 6px 12px; }
  .opp-standards-grid { grid-template-columns: 1fr 1fr; }
  .opp-step-details { gap: 6px; }
}
`;

// ─── COMPONENT ────────────────────────────────────────────────────────────────

import { useState } from "react";

export default function OurProcessPage({ onNavigate = () => { } }) {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: PROCESS_CSS }} />

            {/* ════════════════════ HERO ════════════════════ */}
            <section className="opp-hero">
                <div className="opp-inner">
                    <div className="opp-breadcrumb">
                        <button className="opp-breadcrumb-btn" onClick={() => onNavigate("home")}>Home</button>
                        <span className="opp-breadcrumb-sep">›</span>
                        <span className="opp-breadcrumb-cur">Our Process</span>
                    </div>
                    <div className="opp-hero-layout">
                        <div>
                            <span className="opp-hero-label">Farm to Freezer</span>
                            <h1 className="opp-hero-title">
                                From Farm<br />to <span className="hl">Your Freezer</span>
                            </h1>
                            <div className="opp-hero-divider" />
                            <p className="opp-hero-desc">
                                Every Toughman product travels an 8-stage certified journey — from
                                accredited Philippine farms through HACCP-monitored processing lines,
                                IQF blast freezing, hygienic packaging, and GPS-tracked cold-chain
                                delivery. No shortcuts. No compromises.
                            </p>
                            <div className="opp-hero-pills">
                                {["8-Stage Process", "HACCP Certified", "IQF Technology", "ISO 22000", "Cold Chain Tracked"].map(p => (
                                    <span className="opp-hero-pill" key={p}>
                                        <span className="opp-hero-pill-dot" />{p}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="opp-hero-img-wrap">
                                <img
                                    src={facilityImg}
                                    alt="Toughman Processing Facility"
                                    onError={e => { e.target.style.opacity = "0"; }}
                                />
                                <div className="opp-hero-img-accent">ISO<br />22000<br />CERT</div>
                                <div className="opp-hero-img-badge">
                                    <div>
                                        <div className="opp-hero-img-badge-val">10+</div>
                                        <div className="opp-hero-img-badge-lbl">Years of Processing Excellence</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════ PROCESS TIMELINE ════════════════════ */}
            <section className="opp-timeline-section">
                <div className="opp-inner">
                    <div className="opp-tl-header">
                        <span className="opp-section-label">Our 8-Stage Process</span>
                        <h2 className="opp-section-title">How We Process Every Product</h2>
                        <p className="opp-section-sub">
                            Each stage is governed by strict standard operating procedures,
                            documented critical control points, and continuous temperature monitoring.
                        </p>
                    </div>

                    <div className="opp-steps">
                        {PROCESS_STAGES.map((stage) => (
                            <div className="opp-step" key={stage.num}>
                                {/* Left: number + vertical line */}
                                <div className="opp-step-num-col">
                                    <div className="opp-step-num-circle">{stage.num}</div>
                                    <div className="opp-step-line" />
                                </div>

                                {/* Spacer column */}
                                <div />

                                {/* Card */}
                                <div className="opp-step-card">
                                    <div className="opp-step-card-left">
                                        <div className="opp-step-phase">{stage.phase}</div>
                                        <div className="opp-step-card-title">{stage.title}</div>
                                        <p className="opp-step-card-desc">{stage.desc}</p>
                                        <div className="opp-step-details">
                                            {stage.details.map(d => (
                                                <span className="opp-step-detail" key={d}>{d}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="opp-step-card-right">
                                        <div className="opp-step-icon-wrap">{stage.icon}</div>
                                        <div className="opp-step-stat">
                                            <div className="opp-step-stat-val">{stage.stat.val}</div>
                                            <div className="opp-step-stat-lbl">{stage.stat.lbl}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════ STANDARDS ════════════════════ */}
            <section className="opp-standards">
                <div className="opp-inner">
                    <div style={{ textAlign: "center" }}>
                        <span className="opp-section-label">Certifications & Standards</span>
                        <h2 className="opp-section-title">Certified at Every Stage</h2>
                        <p className="opp-section-sub">
                            Our process is validated by the world's most respected food safety bodies,
                            giving clients and consumers complete confidence in every product we deliver.
                        </p>
                    </div>
                    <div className="opp-standards-grid">
                        {STANDARDS.map(s => (
                            <div className="opp-std-card" key={s.name}>
                                <div className="opp-std-icon" style={{ color: s.color }}>{s.icon}</div>
                                <div className="opp-std-name">{s.name}</div>
                                <div className="opp-std-full">{s.full}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════ FACILITY ════════════════════ */}
            <section className="opp-facility">
                <div className="opp-inner">
                    <div className="opp-facility-img-wrap">
                        <img
                            src={facilityImg}
                            alt="Toughman Processing Facility"
                            onError={e => { e.target.style.opacity = "0"; }}
                        />
                        <div className="opp-facility-img-accent">ISO<br />CERT<br />✓</div>
                    </div>
                    <div className="opp-facility-content">
                        <span className="opp-facility-label">Our Facility</span>
                        <h2 className="opp-facility-title">Built for Food Safety,<br />Designed for Scale</h2>
                        <p className="opp-facility-desc">
                            Our processing plant is purpose-built to meet international food safety
                            standards. Stainless-steel automated lines, positive-pressure clean rooms,
                            full CCTV coverage of all processing areas, and real-time HACCP monitoring
                            sensors ensure every batch meets the same high standard — whether we're
                            processing 1 tonne or 10 tonnes a day.
                        </p>
                        <div className="opp-facility-metrics">
                            {[
                                { val: "≤10°C", lbl: "Processing Room" },
                                { val: "−20°C", lbl: "Cold Store" },
                                { val: "100%", lbl: "CCTV Coverage" },
                                { val: "24/7", lbl: "Temp Monitoring" },
                            ].map(m => (
                                <div className="opp-facility-metric" key={m.lbl}>
                                    <div className="opp-facility-metric-val">{m.val}</div>
                                    <div className="opp-facility-metric-lbl">{m.lbl}</div>
                                </div>
                            ))}
                        </div>
                        <button className="btn-opp-facility" onClick={() => onNavigate("contact")}>
                            📅 Schedule a Facility Tour
                        </button>
                    </div>
                </div>
            </section>

            {/* ════════════════════ FAQ ════════════════════ */}
            <section className="opp-faq">
                <div className="opp-inner">
                    <div className="opp-faq-left">
                        <span className="opp-faq-label">Common Questions</span>
                        <h2 className="opp-faq-title">Process & Quality FAQs</h2>
                        <p className="opp-faq-sub">
                            Have a specific question about our process, certifications, or delivery?
                            Reach out — our team is always ready to assist.
                        </p>
                        <button className="btn-opp-faq" onClick={() => onNavigate("contact")}>
                            📞 Ask Our Team
                        </button>
                    </div>
                    <div className="opp-faq-list">
                        {FAQS.map((faq, i) => (
                            <div
                                className={`opp-faq-item${openFaq === i ? " open" : ""}`}
                                key={i}
                            >
                                <button
                                    className="opp-faq-q"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    {faq.q}
                                    <span className="opp-faq-chevron">▾</span>
                                </button>
                                <div className="opp-faq-a">{faq.a}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════ CTA ════════════════════ */}
            <section className="opp-cta">
                <div className="opp-inner">
                    <div>
                        <span className="opp-cta-label">Ready to Partner With Us?</span>
                        <h2 className="opp-cta-title">Consistent Quality.<br />Reliable Cold Chain.</h2>
                        <p className="opp-cta-sub">
                            Whether you're a supermarket, restaurant, caterer, or distributor —
                            our certified process guarantees the same premium product every time.
                        </p>
                    </div>
                    <div className="opp-cta-btns">
                        <button className="btn-opp-cta-primary" onClick={() => onNavigate("contact")}>
                            📞 Contact Sales
                        </button>
                        <button className="btn-opp-cta-outline" onClick={() => onNavigate("products")}>
                            View Products
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}