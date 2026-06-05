import facilityImg from "../assets/about-facility.png";
import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const PROCESS_STAGES = [
    {
        num: "01",
        icon: (
            <svg viewBox="0 0 48 48" width="38" height="38" fill="none" stroke="#e8611a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="24" cy="16" r="8" />
                <path d="M8 44c0-8.8 7.2-16 16-16s16 7.2 16 16" />
                <path d="M36 10c2 1.5 4 4 4 6" strokeWidth="1.3" />
                <path d="M12 10c-2 1.5-4 4-4 6" strokeWidth="1.3" />
            </svg>
        ),
        phase: "Phase 1",
        title: "Accredited Farm Sourcing",
        shortTitle: "Farm Sourcing",
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
            <svg viewBox="0 0 48 48" width="38" height="38" fill="none" stroke="#e8611a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 4L6 12v12c0 11 7.5 19 18 22 10.5-3 18-11 18-22V12L24 4z" />
                <polyline points="16,24 21,29 32,18" strokeWidth="2.2" />
            </svg>
        ),
        phase: "Phase 2",
        title: "Ante & Post-Mortem Inspection",
        shortTitle: "Veterinary Inspection",
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
            <svg viewBox="0 0 48 48" width="38" height="38" fill="none" stroke="#e8611a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
            <svg viewBox="0 0 48 48" width="38" height="38" fill="none" stroke="#e8611a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="8" width="32" height="32" rx="3" />
                <path d="M16 24h6M26 24h6M24 16v6M24 26v6" />
                <path d="M13 13l4 4M31 13l-4 4M13 35l4-4M31 35l-4-4" strokeWidth="1.3" />
            </svg>
        ),
        phase: "Phase 4",
        title: "Precision Cutting & Portioning",
        shortTitle: "Cutting & Portioning",
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
            <svg viewBox="0 0 48 48" width="38" height="38" fill="none" stroke="#e8611a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 24C10 15.2 16.3 8 24 8s14 7.2 14 16" />
                <path d="M8 28c0 9 7 16 16 16s16-7 16-16" strokeDasharray="3 3" />
                <path d="M24 16v8l5 3" strokeWidth="2" />
                <circle cx="24" cy="24" r="3" fill="#e8611a" stroke="none" />
                <path d="M14 12l-4-4M34 12l4-4" strokeWidth="1.3" />
            </svg>
        ),
        phase: "Phase 5",
        title: "Individual Quick Freezing (IQF)",
        shortTitle: "IQF Freezing",
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
            <svg viewBox="0 0 48 48" width="38" height="38" fill="none" stroke="#e8611a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
        desc: "Frozen products move directly to our GMP-compliant packaging room where they are sealed in food-grade, tamper-evident vacuum or modified-atmosphere packaging. Labels include product weight, batch number, production date, best-before date, and cold-chain handling instructions.",
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
            <svg viewBox="0 0 48 48" width="38" height="38" fill="none" stroke="#e8611a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
            <svg viewBox="0 0 48 48" width="38" height="38" fill="none" stroke="#e8611a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
        desc: "All outbound shipments are dispatched in NMIS-accredited refrigerated trucks equipped with GPS tracking and temperature data loggers. Delivery teams follow standardised cold chain handling protocols — including mandatory pre-cooling of trucks and signature-based delivery confirmation. Clients receive delivery manifests with temperature records for every shipment.",
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

const FAQS = [
    {
        q: "How does Toughman ensure product freshness during delivery?",
        a: "All deliveries are made in NMIS-accredited refrigerated trucks pre-cooled to −18°C before loading. Each truck is fitted with a real-time temperature data logger, and clients receive delivery manifests showing the temperature record from dispatch to arrival."
    },
    {
        q: "What is IQF and why is it better than block-freezing?",
        a: "IQF (Individual Quick Freezing) freezes each piece separately at blast speed, which prevents large ice crystals from forming inside the meat cells. Block-freezing bundles pieces together and causes large destructive ice crystals. IQF product retains better texture, flavour, moisture, and nutritional value after thawing."
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
        a: "Yes. We offer custom cutting programs, weight specifications, and private-label packaging for bulk and institutional clients. Minimum order quantities apply. Contact our sales team for a custom quotation."
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
  --navy: #0a1628; --navy-dark: #060f1e; --blue: #1a3a6b;
  --orange: #e8611a; --orange-dark: #c9500f;
  --gray-light: #f5f7fa; --gray: #7a8499;
  --radius-card: 12px;
  --radius-btn: 6px;
  --shadow-card: 0 2px 12px rgba(0,0,0,.07);
  --shadow-card-hover: 0 8px 32px rgba(13,27,62,.13);
}

/* ─ SHARED INNER ─ */
.opp-inner {
  width: 100%; max-width: 1280px;
  margin: 0 auto; padding: 0 40px;
  box-sizing: border-box;
}

/* ─ SHARED BUTTON SYSTEM ─
   All buttons follow consistent padding, radius, font-size, and weight.
   Only background and color differ per variant.
*/
.opp-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 28px; border-radius: var(--radius-btn);
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12px;
  text-transform: uppercase; letter-spacing: .8px;
  border: 2px solid transparent; cursor: pointer;
  transition: background .2s, color .2s, border-color .2s;
  white-space: nowrap; line-height: 1;
}
.opp-btn-primary { background: var(--orange); color: #fff; border-color: var(--orange); }
.opp-btn-primary:hover { background: var(--orange-dark); border-color: var(--orange-dark); }
.opp-btn-dark { background: var(--navy); color: #fff; border-color: var(--navy); }
.opp-btn-dark:hover { background: var(--navy-light); border-color: var(--navy-light); }
.opp-btn-outline-white { background: transparent; color: #fff; border-color: rgba(255,255,255,.4); }
.opp-btn-outline-white:hover { border-color: var(--orange); color: var(--orange); }

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
    radial-gradient(ellipse 60% 70% at 90% 50%, rgba(232,97,26,.07) 0%, transparent 65%),
    repeating-linear-gradient(-45deg,
      transparent, transparent 38px,
      rgba(255,255,255,.014) 38px, rgba(255,255,255,.014) 39px);
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
  font-size: clamp(28px, 3.8vw, 50px);
  line-height: 1.08; color: #fff; text-transform: uppercase;
  letter-spacing: -.3px; margin-bottom: 0;
}
.opp-hero-title .hl { color: var(--orange); }
.opp-hero-divider { width: 48px; height: 3px; background: var(--orange); border-radius: 2px; margin: 20px 0; }
.opp-hero-desc {
  font-size: 14px; color: rgba(255,255,255,.62); line-height: 1.9; margin-bottom: 32px;
}
.opp-hero-pills { display: flex; flex-wrap: wrap; gap: 8px; }
.opp-hero-pill {
  display: flex; align-items: center; gap: 7px; padding: 7px 14px;
  border: 1px solid rgba(232,97,26,.3); border-radius: 20px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10px;
  color: rgba(255,255,255,.75); text-transform: uppercase; letter-spacing: .5px;
  background: rgba(232,97,26,.07);
}
.opp-hero-pill-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--orange); flex-shrink: 0; }

.opp-hero-img-wrap {
  position: relative; border-radius: 14px; overflow: hidden;
  aspect-ratio: 4/3;
  background: linear-gradient(135deg, #0d2a4a 0%, #1a3a6b 60%, #0a1628 100%);
  box-shadow: 0 20px 56px rgba(0,0,0,.45);
}
.opp-hero-img-wrap img {
  width: 100%; height: 100%; object-fit: cover; display: block;
}
/* ISO accent: positioned inside the image, top-right corner — no overflow clipping issues */
.opp-hero-img-accent {
  position: absolute; top: 16px; right: 16px;
  background: var(--orange);
  border-radius: 8px; padding: 10px 14px;
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 10px;
  color: #fff; text-align: center; letter-spacing: .8px; line-height: 1.4;
  box-shadow: 0 4px 16px rgba(232,97,26,.35);
}
.opp-hero-img-badge {
  position: absolute; bottom: 16px; left: 16px;
  background: rgba(9,22,48,.88); backdrop-filter: blur(8px);
  border: 1px solid rgba(232,97,26,.35); border-radius: 10px;
  padding: 12px 16px;
}
.opp-hero-img-badge-val {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 20px;
  color: var(--orange); line-height: 1;
}
.opp-hero-img-badge-lbl {
  font-size: 10px; color: rgba(255,255,255,.55); text-transform: uppercase;
  letter-spacing: .5px; margin-top: 3px;
}

/* ════════════════════════════════════════
   PROCESS TIMELINE
════════════════════════════════════════ */
.opp-timeline-section { background: var(--gray-bg); padding: 80px 0; width: 100%; }
.opp-tl-header { text-align: center; margin-bottom: 60px; }
.opp-section-label {
  display: inline-block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 12px;
}
.opp-section-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(22px, 2.8vw, 34px);
  color: var(--navy); text-transform: uppercase; letter-spacing: .3px;
  margin-bottom: 12px; line-height: 1.12;
}
.opp-section-sub {
  font-size: 14px; color: var(--gray-text); line-height: 1.8; max-width: 540px; margin: 0 auto;
}

/* Step cards */
.opp-steps { display: flex; flex-direction: column; gap: 0; }
.opp-step {
  display: grid; grid-template-columns: 72px 4px 1fr; gap: 0 24px;
  align-items: stretch; min-height: 0;
}
.opp-step-num-col { display: flex; flex-direction: column; align-items: center; gap: 0; }
.opp-step-num-circle {
  width: 60px; height: 60px; border-radius: 50%;
  background: var(--navy); border: 2.5px solid var(--orange);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 15px;
  color: var(--orange); flex-shrink: 0; position: relative; z-index: 2;
}
.opp-step-line {
  flex: 1; width: 2px;
  background: linear-gradient(to bottom, rgba(232,97,26,.5), rgba(232,97,26,.1));
  margin: 4px auto 0;
}
.opp-step:last-child .opp-step-line { display: none; }

.opp-step-card {
  background: #fff; border-radius: var(--radius-card); padding: 24px 24px 24px 20px;
  border: 1px solid #e8eaf0; box-shadow: var(--shadow-card);
  margin-bottom: 20px;
  transition: box-shadow .22s, border-color .22s;
  display: grid; grid-template-columns: 1fr auto; gap: 20px; align-items: start;
}
.opp-step-card:hover {
  box-shadow: var(--shadow-card-hover);
  border-color: rgba(232,97,26,.28);
}
.opp-step-card-left { display: flex; flex-direction: column; }
.opp-step-phase {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10px;
  color: var(--orange); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 6px;
  display: flex; align-items: center; gap: 8px;
}
.opp-step-phase::before { content: ''; width: 18px; height: 2px; background: var(--orange); flex-shrink: 0; }
.opp-step-card-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 17px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .2px; margin-bottom: 10px;
}
.opp-step-card-desc {
  font-size: 13.5px; color: #4a5568; line-height: 1.82; margin-bottom: 16px;
}
.opp-step-details { display: flex; flex-wrap: wrap; gap: 7px; }
.opp-step-detail {
  display: flex; align-items: center; gap: 6px; padding: 5px 11px;
  background: var(--gray-bg); border: 1px solid #dde2ec; border-radius: 5px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 9.5px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .4px;
}
.opp-step-detail::before { content: '✓'; color: var(--orange); font-weight: 900; font-size: 10px; }
.opp-step-card-right {
  display: flex; flex-direction: column; align-items: center; gap: 14px;
  min-width: 100px; flex-shrink: 0;
}
.opp-step-icon-wrap {
  width: 76px; height: 76px; border-radius: 12px;
  background: linear-gradient(135deg, #0a1628 0%, #1a3a6b 100%);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; box-shadow: 0 4px 16px rgba(13,27,62,.2);
}
.opp-step-stat {
  text-align: center; padding: 10px 12px; border-radius: 8px;
  background: var(--navy); min-width: 88px; width: 100%;
}
.opp-step-stat-val {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 16px;
  color: var(--orange); line-height: 1; white-space: nowrap;
}
.opp-step-stat-lbl {
  font-size: 9px; color: rgba(255,255,255,.48); text-transform: uppercase;
  letter-spacing: .5px; margin-top: 4px;
}

/* ════════════════════════════════════════
   FACILITY HIGHLIGHT
════════════════════════════════════════ */
.opp-facility { background: #fff; padding: 80px 0; width: 100%; }
.opp-facility .opp-inner {
  display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
}
.opp-facility-img-wrap {
  position: relative; border-radius: 14px; overflow: hidden;
  aspect-ratio: 4/3;
  background: linear-gradient(135deg, #0d2a4a 0%, #1a3a6b 100%);
  box-shadow: 0 14px 44px rgba(13,27,62,.14);
}
.opp-facility-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
/* Accent badge: inside the image, top-right — clean, no overflow clipping */
.opp-facility-img-accent {
  position: absolute; top: 14px; right: 14px;
  background: var(--orange); border-radius: 8px; padding: 10px 14px;
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 10px;
  color: #fff; text-align: center; letter-spacing: .8px; line-height: 1.4;
  box-shadow: 0 4px 12px rgba(232,97,26,.3);
}
.opp-facility-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px;
}
.opp-facility-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(20px, 2.4vw, 30px);
  color: var(--navy); text-transform: uppercase; letter-spacing: .2px;
  line-height: 1.18; margin-bottom: 16px;
}
.opp-facility-desc {
  font-size: 13.5px; color: var(--gray-text); line-height: 1.88; margin-bottom: 28px;
}
.opp-facility-metrics {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-bottom: 30px;
}
.opp-facility-metric {
  background: var(--gray-bg); border-radius: 8px; padding: 14px 16px;
  border-left: 3px solid var(--orange);
}
.opp-facility-metric-val {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 20px;
  color: var(--navy); line-height: 1;
}
.opp-facility-metric-lbl {
  font-size: 10.5px; color: var(--gray-text); margin-top: 4px;
  text-transform: uppercase; letter-spacing: .4px;
}

/* ════════════════════════════════════════
   FAQ
════════════════════════════════════════ */
.opp-faq { background: var(--gray-bg); padding: 72px 0; width: 100%; }
.opp-faq .opp-inner {
  display: grid; grid-template-columns: 320px 1fr; gap: 60px; align-items: start;
}
.opp-faq-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px;
}
.opp-faq-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(20px, 2.3vw, 28px);
  color: var(--navy); text-transform: uppercase; letter-spacing: .2px;
  line-height: 1.22; margin-bottom: 14px;
}
.opp-faq-sub { font-size: 13.5px; color: var(--gray-text); line-height: 1.82; margin-bottom: 28px; }

.opp-faq-list { display: flex; flex-direction: column; gap: 10px; }
.opp-faq-item {
  background: #fff; border-radius: var(--radius-card);
  border: 1px solid #e8eaf0; overflow: hidden;
  box-shadow: 0 1px 6px rgba(0,0,0,.04);
  transition: border-color .2s;
}
.opp-faq-item.open { border-color: rgba(232,97,26,.35); }
.opp-faq-q {
  width: 100%; background: none; border: none; cursor: pointer;
  padding: 16px 20px; text-align: left;
  display: flex; align-items: center; justify-content: space-between; gap: 14px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 13px;
  color: var(--navy); line-height: 1.4;
  transition: color .2s;
}
.opp-faq-item.open .opp-faq-q { color: var(--orange); }
.opp-faq-chevron {
  width: 22px; height: 22px; border-radius: 50%;
  background: var(--gray-bg); border: 1px solid #dde2ec;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; flex-shrink: 0; color: var(--navy);
  transition: background .2s, transform .28s, color .2s;
}
.opp-faq-item.open .opp-faq-chevron {
  background: var(--orange); color: #fff; border-color: var(--orange);
  transform: rotate(180deg);
}
.opp-faq-a {
  padding: 0 20px; max-height: 0; overflow: hidden;
  font-size: 13px; color: #4a5568; line-height: 1.85;
  transition: max-height .32s ease, padding .32s ease;
}
.opp-faq-item.open .opp-faq-a { max-height: 300px; padding: 0 20px 18px; }

/* ════════════════════════════════════════
   CTA BANNER
════════════════════════════════════════ */
.opp-cta {
  background: linear-gradient(135deg, #060f1e 0%, var(--navy-light) 60%, var(--navy) 100%);
  padding: 72px 0; width: 100%; position: relative; overflow: hidden;
}
.opp-cta::before {
  content: ''; position: absolute; inset: 0;
  background: repeating-linear-gradient(-45deg,
    transparent, transparent 38px,
    rgba(255,255,255,.01) 38px, rgba(255,255,255,.01) 39px);
  pointer-events: none;
}
.opp-cta .opp-inner {
  position: relative; z-index: 1;
  display: flex; align-items: center; justify-content: space-between;
  gap: 40px; flex-wrap: wrap;
}
.opp-cta-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 12px;
}
.opp-cta-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(20px, 2.4vw, 30px);
  color: #fff; text-transform: uppercase; letter-spacing: .2px; line-height: 1.18; margin-bottom: 10px;
}
.opp-cta-sub { font-size: 14px; color: rgba(255,255,255,.58); line-height: 1.72; max-width: 400px; }
.opp-cta-btns { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; flex-shrink: 0; }

/* ════════════════════════════════════════
   RESPONSIVE
════════════════════════════════════════ */
@media (max-width: 1100px) {
  .opp-inner { padding: 0 24px; }
}
@media (max-width: 900px) {
  .opp-hero { padding: 52px 0 44px; }
  .opp-hero .opp-inner { padding: 0 24px; }
  .opp-hero-layout { grid-template-columns: 1fr; gap: 32px; }
  .opp-hero-img-wrap { max-width: 540px; margin: 0 auto; }
  .opp-step { grid-template-columns: 52px 3px 1fr; gap: 0 16px; }
  .opp-step-num-circle { width: 50px; height: 50px; font-size: 13px; }
  /* Stack right panel below content on tablet */
  .opp-step-card { grid-template-columns: 1fr; }
  .opp-step-card-right {
    flex-direction: row; min-width: 0;
    justify-content: flex-start; gap: 12px;
  }
  .opp-step-icon-wrap { width: 60px; height: 60px; }
  .opp-step-stat { min-width: 80px; }
  .opp-facility .opp-inner { grid-template-columns: 1fr; gap: 36px; }
  .opp-faq .opp-inner { grid-template-columns: 1fr; gap: 36px; }
}
@media (max-width: 640px) {
  .opp-inner { padding: 0 18px; }
  .opp-hero { padding: 44px 0 36px; }
  .opp-timeline-section { padding: 48px 0; }
  .opp-tl-header { margin-bottom: 36px; }
  .opp-step { grid-template-columns: 42px 2px 1fr; gap: 0 12px; }
  .opp-step-num-circle { width: 42px; height: 42px; font-size: 12px; border-width: 2px; }
  .opp-step-card { padding: 18px 14px; gap: 14px; }
  .opp-step-card-title { font-size: 14px; }
  .opp-step-card-desc { font-size: 13px; }
  .opp-step-card-right { flex-direction: row; flex-wrap: wrap; }
  .opp-step-icon-wrap { width: 52px; height: 52px; border-radius: 10px; }
  .opp-step-stat { min-width: 72px; padding: 8px 10px; }
  .opp-step-stat-val { font-size: 14px; }
  .opp-facility { padding: 48px 0; }
  .opp-facility-metrics { grid-template-columns: 1fr 1fr; gap: 10px; }
  .opp-facility-metric-val { font-size: 18px; }
  .opp-faq { padding: 48px 0; }
  .opp-cta { padding: 48px 0; }
  .opp-cta .opp-inner { flex-direction: column; align-items: flex-start; }
  .opp-cta-btns { width: 100%; }
  .opp-btn { font-size: 11px; padding: 12px 20px; }
}
@media (max-width: 420px) {
  .opp-inner { padding: 0 14px; }
  .opp-hero-pills { gap: 6px; }
  .opp-hero-pill { font-size: 9px; padding: 6px 10px; }
  .opp-step-details { gap: 5px; }
  .opp-step-detail { font-size: 9px; padding: 4px 9px; }
  .opp-cta-btns { flex-direction: column; }
  .opp-btn { width: 100%; justify-content: center; }
}
`;

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function OurProcessPage({ onNavigate = () => { } }) {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: PROCESS_CSS }} />

            {/* ════════════════════ HERO ════════════════════ */}
            <section className="opp-hero">
                <div className="opp-inner">

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
                                <div className="opp-hero-img-accent">ISO 22000<br />CERTIFIED</div>
                                <div className="opp-hero-img-badge">
                                    <div className="opp-hero-img-badge-val">10+</div>
                                    <div className="opp-hero-img-badge-lbl">Years of Processing Excellence</div>
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
                                <div className="opp-step-num-col">
                                    <div className="opp-step-num-circle">{stage.num}</div>
                                    <div className="opp-step-line" />
                                </div>
                                <div />
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

            {/* ════════════════════ FACILITY ════════════════════ */}
            <section className="opp-facility">
                <div className="opp-inner">
                    <div className="opp-facility-img-wrap">
                        <img
                            src={facilityImg}
                            alt="Toughman Processing Facility"
                            onError={e => { e.target.style.opacity = "0"; }}
                        />
                        <div className="opp-facility-img-accent">ISO CERT ✓</div>
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
                        <button className="opp-btn opp-btn-dark" onClick={() => onNavigate("contact")}>
                            Schedule a Facility Tour
                        </button>
                    </div>
                </div>
            </section>

            {/* ════════════════════ FAQ ════════════════════ */}
            <section className="opp-faq">
                <div className="opp-inner">
                    <div className="opp-faq-left">
                        <span className="opp-faq-label">Common Questions</span>
                        <h2 className="opp-faq-title">Process &amp; Quality FAQs</h2>
                        <p className="opp-faq-sub">
                            Have a specific question about our process, certifications, or delivery?
                            Our team is ready to assist.
                        </p>
                        <button className="opp-btn opp-btn-primary" onClick={() => onNavigate("contact")}>
                            Contact Our Team
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


        </>
    );
}