import { useState } from "react";
import facilityImg from "../assets/about-facility.png";

// ─── DATA ────────────────────────────────────────────────────────────────────

const QUALITY_PILLARS = [
    {
        num: "01",
        icon: (
            <svg viewBox="0 0 48 48" width="38" height="38" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 4L6 11v11c0 11 7.5 18.5 18 21.5C34.5 40.5 42 33 42 22V11L24 4z" />
                <polyline points="15,24 21,30 33,18" strokeWidth="2.4" />
            </svg>
        ),
        title: "Source Integrity",
        desc: "Quality starts at the farm. We source exclusively from DA-BAI and NMIS-accredited partner farms that comply with our strict biosecurity, feed, and animal welfare requirements.",
        color: "var(--orange)",
    },
    {
        num: "02",
        icon: (
            <svg viewBox="0 0 48 48" width="38" height="38" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="24" cy="24" r="18" />
                <path d="M16 24h6M26 24h6M24 16v6M24 26v6" />
                <circle cx="24" cy="24" r="4" fill="#f47b20" stroke="none" opacity=".3" />
            </svg>
        ),
        title: "HACCP Control Points",
        desc: "Our processing line operates under 12 critical control points (CCPs) monitored in real-time. Any deviation triggers an automatic hold and full batch review before release.",
        color: "#7dd3fc",
    },
    {
        num: "03",
        icon: (
            <svg viewBox="0 0 48 48" width="38" height="38" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="6" width="32" height="36" rx="3" />
                <path d="M16 16h16M16 22h16M16 28h10" />
                <circle cx="36" cy="36" r="8" fill="#0d1b3e" stroke="#f47b20" strokeWidth="1.6" />
                <polyline points="32,36 35,39 40,33" strokeWidth="2" stroke="#f47b20" />
            </svg>
        ),
        title: "Batch Traceability",
        desc: "Every batch carries a unique code traceable from farm of origin through each processing step to the final packaged product — enabling full recall capability within 2 hours.",
        color: "#86efac",
    },
    {
        num: "04",
        icon: (
            <svg viewBox="0 0 48 48" width="38" height="38" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 24C10 15.2 16.3 8 24 8s14 7.2 14 16" />
                <path d="M8 28c0 9 7 16 16 16s16-7 16-16" strokeDasharray="3 3" />
                <path d="M24 16v8l5 3" strokeWidth="2" />
                <circle cx="24" cy="24" r="3" fill="#f47b20" stroke="none" />
            </svg>
        ),
        title: "Cold Chain Integrity",
        desc: "Temperature is monitored and logged at every transfer point — IQF tunnel, cold store, loading dock, and delivery vehicle — ensuring unbroken cold chain from −18°C to your door.",
        color: "#fde68a",
    },
    {
        num: "05",
        icon: (
            <svg viewBox="0 0 48 48" width="38" height="38" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="24" cy="20" r="10" />
                <path d="M10 44c0-7.7 6.3-14 14-14s14 6.3 14 14" />
                <polyline points="20,20 23,23 28,17" strokeWidth="2.2" />
            </svg>
        ),
        title: "Trained Quality Teams",
        desc: "All quality personnel undergo HACCP and GMP training twice yearly. Every production shift is supervised by a certified food safety officer with authority to halt any line.",
        color: "#c4b5fd",
    },
    {
        num: "06",
        icon: (
            <svg viewBox="0 0 48 48" width="38" height="38" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 24L18 36 42 12" strokeWidth="2.8" />
            </svg>
        ),
        title: "Third-Party Audits",
        desc: "We welcome scheduled and unannounced third-party audits by clients and government bodies. Our audit scores and corrective action records are maintained openly.",
        color: "#fb923c",
    },
];

const CERTIFICATIONS = [
    {
        name: "HACCP",
        full: "Hazard Analysis & Critical Control Points",
        body: "International Food Safety Standard",
        year: "Re-certified 2025",
        icon: (
            <svg viewBox="0 0 56 56" width="48" height="48" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M28 4L6 12v13c0 13 9 21.5 22 25 13-3.5 22-12 22-25V12L28 4z" />
                <polyline points="18,28 24,34 38,20" strokeWidth="2.5" />
            </svg>
        ),
        color: "var(--orange)",
    },
    {
        name: "ISO 22000",
        full: "Food Safety Management Systems",
        body: "International Organization for Standardization",
        year: "ISO 22000:2018",
        icon: (
            <svg viewBox="0 0 56 56" width="48" height="48" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="28" cy="28" r="22" />
                <text x="28" y="34" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="900" fontFamily="Montserrat,sans-serif" stroke="none">ISO</text>
            </svg>
        ),
        color: "#7dd3fc",
    },
    {
        name: "GMP",
        full: "Good Manufacturing Practice",
        body: "Philippine FDA / WHO Guidelines",
        year: "Current Certification",
        icon: (
            <svg viewBox="0 0 56 56" width="48" height="48" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="8" width="40" height="40" rx="5" />
                <polyline points="18,28 24,34 38,20" strokeWidth="2.5" />
            </svg>
        ),
        color: "#86efac",
    },
    {
        name: "HALAL",
        full: "Halal Certified Products",
        body: "Islamic Da'wah Council of the Philippines",
        year: "Annual Certification",
        icon: (
            <svg viewBox="0 0 56 56" width="48" height="48" fill="none" stroke="#fff" strokeWidth="1.5">
                <circle cx="28" cy="28" r="22" />
                <text x="28" y="36" textAnchor="middle" fill="#fff" fontSize="22" fontFamily="serif" stroke="none">حلال</text>
            </svg>
        ),
        color: "#fde68a",
    },
    {
        name: "NMIS",
        full: "National Meat Inspection Service",
        body: "Department of Agriculture — Philippines",
        year: "DA Accredited",
        icon: (
            <svg viewBox="0 0 56 56" width="48" height="48" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M28 4L6 12v13c0 13 9 21.5 22 25 13-3.5 22-12 22-25V12L28 4z" />
                <text x="28" y="32" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="Montserrat,sans-serif" stroke="none">NMIS</text>
            </svg>
        ),
        color: "#c4b5fd",
    },
];

const QUALITY_CHECKS = [
    {
        stage: "Incoming Livestock",
        checks: ["Live bird health screening", "Farm accreditation verification", "Transport temperature log review", "Ante-mortem veterinary clearance"],
        icon: "🐔",
    },
    {
        stage: "During Processing",
        checks: ["12 HACCP CCPs monitored in real-time", "Processing room temp ≤10°C verified", "Automated sanitisation cycle confirmation", "Water quality testing — every shift"],
        icon: "⚙️",
    },
    {
        stage: "Post Processing",
        checks: ["Post-mortem carcass inspection", "Microbiological sampling per batch", "Visual defect inspection & grading", "pH & colour measurement"],
        icon: "🔬",
    },
    {
        stage: "Packaging & Labelling",
        checks: ["Correct weight within ±5g tolerance", "Seal integrity vacuum test", "Label accuracy: batch, date, weight", "Foreign-object metal detection"],
        icon: "📦",
    },
    {
        stage: "Cold Storage",
        checks: ["Core temperature −18°C or below", "Continuous 24/7 temp data logging", "FIFO batch rotation enforced", "Freezer alarm system tested daily"],
        icon: "❄️",
    },
    {
        stage: "Outbound Delivery",
        checks: ["Truck pre-cooled to −18°C before load", "GPS & data logger activated", "Delivery manifest with temp records", "Driver cold-chain handling briefing"],
        icon: "🚚",
    },
];

const METRICS = [
    { val: "100%", lbl: "Batches Traceable", icon: "📍" },
    { val: "12", lbl: "HACCP Control Points", icon: "🎯" },
    { val: "<2 hrs", lbl: "Recall Response Time", icon: "⚡" },
    { val: "0", lbl: "Major Audit Non-Conformities (2024)", icon: "✅" },
    { val: "2×/yr", lbl: "Staff HACCP Training", icon: "🎓" },
    { val: "24/7", lbl: "Temperature Monitoring", icon: "🌡️" },
];

const TESTIMONIALS = [
    {
        quote: "Toughman's documentation and traceability records are among the best we've reviewed from any local poultry supplier. Their HACCP compliance is genuine, not just paperwork.",
        name: "Dr. Maria Santos",
        role: "Independent Food Safety Auditor",
        initial: "MS",
    },
    {
        quote: "We've been sourcing from Toughman for three years. The consistency of their cold chain and product quality is why we keep renewing. Zero incidents in 36 months.",
        name: "Ronaldo Cruz",
        role: "Procurement Head, Major QSR Chain",
        initial: "RC",
    },
    {
        quote: "Their facility tour convinced us. The processing environment, staff discipline, and monitoring systems are at a level you'd expect from an international supplier.",
        name: "Jennifer Lim",
        role: "Quality Manager, National Supermarket Group",
        initial: "JL",
    },
];

const FAQS = [
    {
        q: "How does Toughman ensure microbiological safety?",
        a: "We conduct microbiological sampling on every production batch — testing for total plate count, Salmonella, E. coli, and Listeria. Results are reviewed by our quality team before any batch is released to cold storage. Any out-of-spec result triggers an immediate batch hold and root-cause investigation.",
    },
    {
        q: "What is your product recall capability?",
        a: "Every product carries a batch traceability code linking it to the farm of origin, slaughter date, processing shift, packaging run, and outbound delivery manifest. In the event of a recall, we can isolate and notify all affected recipients within 2 hours.",
    },
    {
        q: "How often are your quality systems audited?",
        a: "Our quality management system undergoes internal audits quarterly and external third-party audits at least once per year. We also host client audits and regulatory NMIS inspections. All audit findings and corrective actions are documented and retained for a minimum of 3 years.",
    },
    {
        q: "Are your products Halal certified?",
        a: "Yes. All our products are certified Halal by the Islamic Da'wah Council of the Philippines (IDCP). Halal slaughter protocols are observed throughout processing, and the certification is renewed annually with on-site inspection.",
    },
    {
        q: "What temperature standards govern your cold chain?",
        a: "Processing rooms are maintained at ≤10°C. The IQF blast freezer brings core product temperature to −18°C within 30 minutes. Cold storage is held at −18°C to −22°C. Delivery trucks are pre-cooled to −18°C and fitted with real-time temperature data loggers on every trip.",
    },
];

// ─── CSS ─────────────────────────────────────────────────────────────────────

const QUALITY_CSS = `
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
#root, #__next { width: 100% !important; margin: 0 !important; padding: 0 !important; background: #f5f7fa !important; }
.tm-page { width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important; overflow-x: hidden !important; background: #f5f7fa !important; }

:root {
  --navy: #0d1b3e; --navy-dark: #060f23; --blue: #1a3a6b;
  --orange: #f47b20; --orange-dark: #d96a10;
  --gray-light: #f5f7fa; --gray: #7a8499;
}

/* ─ SHARED ─ */
.qp-inner { width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 40px; box-sizing: border-box; }

/* ════ HERO ════ */
.qp-hero { background: var(--navy); padding: 72px 0 64px; position: relative; overflow: hidden; width: 100%; }
.qp-hero::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 55% 70% at 85% 40%, rgba(244,123,32,.09) 0%, transparent 60%),
    repeating-linear-gradient(-45deg, transparent, transparent 38px, rgba(255,255,255,.016) 38px, rgba(255,255,255,.016) 39px);
  pointer-events: none;
}
.qp-hero .qp-inner { position: relative; z-index: 1; }
.qp-breadcrumb {
  display: flex; align-items: center; gap: 8px; margin-bottom: 24px;
  font-family: 'Montserrat', sans-serif; font-size: 11px;
  color: rgba(255,255,255,.4); letter-spacing: 1px; text-transform: uppercase;
}
.qp-breadcrumb-btn {
  background: none; border: none; cursor: pointer; padding: 0;
  font-family: 'Montserrat', sans-serif; font-size: 11px;
  color: rgba(255,255,255,.4); letter-spacing: 1px; text-transform: uppercase; transition: color .2s;
}
.qp-breadcrumb-btn:hover { color: var(--orange); }
.qp-breadcrumb-sep { color: rgba(255,255,255,.2); }
.qp-breadcrumb-cur { color: var(--orange); }

.qp-hero-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
.qp-hero-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 16px;
}
.qp-hero-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(30px, 4vw, 54px);
  line-height: 1.05; color: #fff; text-transform: uppercase; letter-spacing: -.5px;
}
.qp-hero-title .hl { color: var(--orange); }
.qp-hero-divider { width: 50px; height: 3.5px; background: var(--orange); border-radius: 2px; margin: 20px 0; }
.qp-hero-desc { font-size: 14px; color: rgba(255,255,255,.65); line-height: 1.85; margin-bottom: 32px; }
.qp-hero-pills { display: flex; flex-wrap: wrap; gap: 10px; }
.qp-hero-pill {
  display: flex; align-items: center; gap: 8px; padding: 8px 16px;
  border: 1px solid rgba(244,123,32,.35); border-radius: 24px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10.5px;
  color: rgba(255,255,255,.85); text-transform: uppercase; letter-spacing: .6px;
  background: rgba(244,123,32,.08);
}
.qp-pill-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); flex-shrink: 0; }

/* Hero right: metrics card stack */
.qp-hero-right { display: flex; flex-direction: column; gap: 14px; }
.qp-hero-metric-card {
  background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);
  border-radius: 12px; padding: 16px 20px;
  display: flex; align-items: center; gap: 16px;
  transition: background .2s, border-color .2s;
}
.qp-hero-metric-card:hover { background: rgba(255,255,255,.1); border-color: rgba(244,123,32,.35); }
.qp-hero-metric-icon { font-size: 24px; flex-shrink: 0; width: 40px; text-align: center; }
.qp-hero-metric-val {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 20px;
  color: var(--orange); line-height: 1;
}
.qp-hero-metric-lbl { font-size: 11px; color: rgba(255,255,255,.5); text-transform: uppercase; letter-spacing: .5px; margin-top: 3px; }

/* ════ QUALITY PILLARS ════ */
.qp-pillars { background: var(--gray-light); padding: 80px 0; width: 100%; }
.qp-section-header { text-align: center; margin-bottom: 56px; }
.qp-section-label {
  display: inline-block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px;
}
.qp-section-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(22px, 3vw, 34px);
  color: var(--navy); text-transform: uppercase; letter-spacing: .4px; line-height: 1.1; margin-bottom: 12px;
}
.qp-section-title-white { color: #fff; }
.qp-section-sub { font-size: 14px; color: var(--gray); line-height: 1.8; max-width: 540px; margin: 0 auto; }
.qp-section-sub-white { color: rgba(255,255,255,.55); }
.qp-pillars-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.qp-pillar-card {
  background: #fff; border-radius: 16px; padding: 30px 26px 26px;
  border: 1px solid #eaeaea; box-shadow: 0 4px 20px rgba(0,0,0,.05);
  transition: box-shadow .25s, transform .25s, border-color .25s;
  position: relative; overflow: hidden;
}
.qp-pillar-card:hover { box-shadow: 0 12px 40px rgba(13,27,62,.12); transform: translateY(-4px); border-color: rgba(244,123,32,.25); }
.qp-pillar-num {
  position: absolute; top: 16px; right: 18px;
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 40px;
  color: rgba(13,27,62,.05); letter-spacing: -2px; line-height: 1;
}
.qp-pillar-icon-wrap {
  width: 64px; height: 64px; border-radius: 14px;
  background: linear-gradient(135deg, #0d1b3e 0%, #1a3a6b 100%);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 18px; box-shadow: 0 6px 20px rgba(13,27,62,.2);
}
.qp-pillar-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 15px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .3px; margin-bottom: 10px;
}
.qp-pillar-desc { font-size: 13px; color: var(--gray); line-height: 1.8; }

/* ════ CERTIFICATIONS ════ */
.qp-certs { background: var(--navy); padding: 80px 0; width: 100%; }
.qp-certs-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; margin-top: 52px; }
.qp-cert-card {
  border-radius: 16px; padding: 30px 20px 26px; text-align: center;
  border: 1px solid rgba(255,255,255,.09);
  background: rgba(255,255,255,.04);
  transition: background .2s, border-color .2s, transform .2s;
  position: relative; overflow: hidden;
}
.qp-cert-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  border-radius: 16px 16px 0 0;
}
.qp-cert-card:hover { background: rgba(255,255,255,.08); border-color: rgba(244,123,32,.35); transform: translateY(-4px); }
.qp-cert-icon-wrap {
  width: 72px; height: 72px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 16px; border: 2px solid rgba(255,255,255,.15);
  background: rgba(255,255,255,.07);
}
.qp-cert-name {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 16px;
  color: #fff; margin-bottom: 6px; letter-spacing: .3px;
}
.qp-cert-full { font-size: 11px; color: rgba(255,255,255,.55); line-height: 1.55; margin-bottom: 10px; }
.qp-cert-body { font-size: 10px; color: rgba(255,255,255,.35); line-height: 1.5; margin-bottom: 10px; }
.qp-cert-year {
  display: inline-block; padding: 4px 12px; border-radius: 20px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 9.5px;
  letter-spacing: .8px; text-transform: uppercase;
  background: rgba(244,123,32,.18); color: var(--orange); border: 1px solid rgba(244,123,32,.3);
}

/* ════ QUALITY CHECKLIST ════ */
.qp-checklist-section { background: #fff; padding: 80px 0; width: 100%; }
.qp-checklist-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 52px; }
.qp-check-card {
  background: var(--gray-light); border-radius: 16px; padding: 28px 24px;
  border: 1px solid #eaeaea; transition: box-shadow .25s, border-color .25s;
}
.qp-check-card:hover { box-shadow: 0 10px 32px rgba(13,27,62,.1); border-color: rgba(244,123,32,.25); }
.qp-check-card-header {
  display: flex; align-items: center; gap: 12px; margin-bottom: 20px;
  padding-bottom: 16px; border-bottom: 2px solid var(--orange);
}
.qp-check-icon { font-size: 28px; flex-shrink: 0; }
.qp-check-stage {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 13px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .3px; line-height: 1.3;
}
.qp-check-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.qp-check-item {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 12.5px; color: #4a5568; line-height: 1.6;
}
.qp-check-tick {
  width: 18px; height: 18px; border-radius: 50%;
  background: var(--navy); display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; margin-top: 1px;
  font-size: 9px; color: #fff; font-weight: 900;
}

/* ════ METRICS STRIP ════ */
.qp-metrics-strip { background: var(--orange); padding: 0; width: 100%; }
.qp-metrics-strip .qp-inner { display: flex; flex-wrap: wrap; }
.qp-metric-block {
  flex: 1; min-width: 160px;
  padding: 36px 28px; text-align: center;
  border-right: 1px solid rgba(255,255,255,.25);
  transition: background .2s;
}
.qp-metric-block:last-child { border-right: none; }
.qp-metric-block:hover { background: rgba(0,0,0,.06); }
.qp-metric-icon { font-size: 22px; margin-bottom: 8px; }
.qp-metric-val {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 26px;
  color: #fff; line-height: 1; margin-bottom: 6px;
}
.qp-metric-lbl { font-size: 10.5px; color: rgba(255,255,255,.8); text-transform: uppercase; letter-spacing: .7px; line-height: 1.4; }

/* ════ TESTIMONIALS ════ */
.qp-testimonials { background: var(--gray-light); padding: 80px 0; width: 100%; }
.qp-testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 52px; }
.qp-testimonial-card {
  background: #fff; border-radius: 16px; padding: 30px 26px;
  border: 1px solid #eaeaea; box-shadow: 0 4px 16px rgba(0,0,0,.04);
  display: flex; flex-direction: column; gap: 20px;
  transition: box-shadow .25s, transform .25s;
}
.qp-testimonial-card:hover { box-shadow: 0 12px 40px rgba(13,27,62,.1); transform: translateY(-3px); }
.qp-testimonial-quote-mark {
  font-size: 56px; line-height: .8; color: var(--orange); font-family: Georgia, serif;
  font-weight: 900; opacity: .4;
}
.qp-testimonial-text { font-size: 13.5px; color: #374151; line-height: 1.85; font-style: italic; flex: 1; }
.qp-testimonial-author { display: flex; align-items: center; gap: 12px; }
.qp-testimonial-avatar {
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--navy); display: flex; align-items: center; justify-content: center;
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 13px;
  color: var(--orange); flex-shrink: 0; border: 2px solid var(--orange);
}
.qp-testimonial-name {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 13px;
  color: var(--navy); margin-bottom: 2px;
}
.qp-testimonial-role { font-size: 11.5px; color: var(--gray); }

/* ════ FAQ ════ */
.qp-faq { background: var(--navy); padding: 80px 0; width: 100%; }
.qp-faq .qp-inner { display: grid; grid-template-columns: 320px 1fr; gap: 64px; align-items: start; }
.qp-faq-left-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px;
}
.qp-faq-left-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(20px, 2.2vw, 28px);
  color: #fff; text-transform: uppercase; line-height: 1.2; margin-bottom: 16px;
}
.qp-faq-left-sub { font-size: 13.5px; color: rgba(255,255,255,.55); line-height: 1.8; margin-bottom: 28px; }
.btn-qp-faq {
  background: var(--orange); color: #fff; border: none;
  padding: 13px 26px; border-radius: 7px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12px;
  text-transform: uppercase; letter-spacing: .8px; cursor: pointer;
  transition: background .2s; display: inline-flex; align-items: center; gap: 8px;
}
.btn-qp-faq:hover { background: var(--orange-dark); }
.qp-faq-list { display: flex; flex-direction: column; gap: 10px; }
.qp-faq-item {
  background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);
  border-radius: 12px; overflow: hidden; transition: border-color .2s;
}
.qp-faq-item.open { border-color: rgba(244,123,32,.5); background: rgba(255,255,255,.07); }
.qp-faq-q {
  width: 100%; background: none; border: none; cursor: pointer;
  padding: 18px 22px; text-align: left;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 13px;
  color: rgba(255,255,255,.9); line-height: 1.4; transition: color .2s;
}
.qp-faq-item.open .qp-faq-q { color: var(--orange); }
.qp-faq-chevron {
  width: 26px; height: 26px; border-radius: 50%;
  background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.15);
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; flex-shrink: 0; color: rgba(255,255,255,.7);
  transition: background .2s, transform .3s, color .2s;
}
.qp-faq-item.open .qp-faq-chevron { background: var(--orange); color: #fff; border-color: var(--orange); transform: rotate(180deg); }
.qp-faq-a {
  max-height: 0; overflow: hidden; padding: 0 22px;
  font-size: 13px; color: rgba(255,255,255,.6); line-height: 1.85;
  transition: max-height .35s ease, padding .35s ease;
}
.qp-faq-item.open .qp-faq-a { max-height: 300px; padding: 0 22px 20px; }

/* ════ CTA ════ */
.qp-cta {
  background: #fff; padding: 80px 0; width: 100%;
  border-top: 1px solid #eaeaea;
}
.qp-cta .qp-inner {
  display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
}
.qp-cta-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px;
}
.qp-cta-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(22px, 2.5vw, 34px);
  color: var(--navy); text-transform: uppercase; line-height: 1.1; margin-bottom: 16px;
}
.qp-cta-desc { font-size: 14px; color: var(--gray); line-height: 1.85; margin-bottom: 32px; }
.qp-cta-btns { display: flex; gap: 14px; flex-wrap: wrap; }
.btn-qp-cta-primary {
  background: var(--orange); color: #fff; border: none;
  padding: 15px 32px; border-radius: 7px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12.5px;
  cursor: pointer; letter-spacing: .8px; text-transform: uppercase;
  transition: background .2s; white-space: nowrap; display: inline-flex; align-items: center; gap: 8px;
}
.btn-qp-cta-primary:hover { background: var(--orange-dark); }
.btn-qp-cta-outline {
  background: transparent; color: var(--navy); border: 2px solid var(--navy);
  padding: 15px 32px; border-radius: 7px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12.5px;
  cursor: pointer; letter-spacing: .8px; text-transform: uppercase; transition: all .2s; white-space: nowrap;
}
.btn-qp-cta-outline:hover { border-color: var(--orange); color: var(--orange); }
.qp-cta-img-wrap {
  border-radius: 16px; overflow: hidden; aspect-ratio: 4/3;
  background: linear-gradient(135deg, #0d2a4a 0%, #1a3a6b 100%);
  box-shadow: 0 16px 48px rgba(13,27,62,.15); position: relative;
}
.qp-cta-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
.qp-cta-img-stamp {
  position: absolute; bottom: 20px; right: 20px;
  background: rgba(9,22,48,.85); backdrop-filter: blur(8px);
  border: 1px solid rgba(244,123,32,.5); border-radius: 10px;
  padding: 12px 16px; text-align: center;
}
.qp-cta-img-stamp-val {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 18px;
  color: var(--orange); line-height: 1;
}
.qp-cta-img-stamp-lbl { font-size: 9px; color: rgba(255,255,255,.6); text-transform: uppercase; letter-spacing: .6px; margin-top: 3px; }

/* ════ RESPONSIVE ════ */
@media (max-width: 1100px) {
  .qp-inner { padding: 0 24px; }
  .qp-certs-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .qp-pillars-grid { grid-template-columns: repeat(2, 1fr); }
  .qp-checklist-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 900px) {
  .qp-hero-layout { grid-template-columns: 1fr; gap: 36px; }
  .qp-hero-right { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .qp-certs-grid { grid-template-columns: repeat(3, 1fr); }
  .qp-testimonials-grid { grid-template-columns: 1fr 1fr; }
  .qp-faq .qp-inner { grid-template-columns: 1fr; gap: 36px; }
  .qp-cta .qp-inner { grid-template-columns: 1fr; gap: 36px; }
}
@media (max-width: 640px) {
  .qp-hero { padding: 48px 0 40px; }
  .qp-pillars { padding: 52px 0; }
  .qp-pillars-grid { grid-template-columns: 1fr; }
  .qp-certs { padding: 52px 0; }
  .qp-certs-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .qp-checklist-section { padding: 52px 0; }
  .qp-checklist-grid { grid-template-columns: 1fr; }
  .qp-metrics-strip .qp-inner { flex-direction: column; }
  .qp-metric-block { border-right: none; border-bottom: 1px solid rgba(255,255,255,.2); }
  .qp-metric-block:last-child { border-bottom: none; }
  .qp-testimonials-grid { grid-template-columns: 1fr; }
  .qp-faq { padding: 52px 0; }
  .qp-hero-right { grid-template-columns: 1fr; }
  .qp-cta { padding: 52px 0; }
}
@media (max-width: 420px) {
  .qp-inner { padding: 0 16px; }
  .qp-certs-grid { grid-template-columns: 1fr 1fr; }
  .qp-hero-title { font-size: 28px; }
  .qp-cta-btns { flex-direction: column; }
  .btn-qp-cta-primary, .btn-qp-cta-outline { width: 100%; justify-content: center; }
}
`;

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function QualityPage({ onNavigate = () => { } }) {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: QUALITY_CSS }} />

            {/* ════════════ HERO ════════════ */}
            <section className="qp-hero">
                <div className="qp-inner">
                    <div className="qp-breadcrumb">
                        <button className="qp-breadcrumb-btn" onClick={() => onNavigate("home")}>Home</button>
                        <span className="qp-breadcrumb-sep">›</span>
                        <span className="qp-breadcrumb-cur">Quality</span>
                    </div>

                    <div className="qp-hero-layout">
                        {/* Left */}
                        <div>
                            <span className="qp-hero-label">Quality Assurance</span>
                            <h1 className="qp-hero-title">
                                Uncompromising<br />
                                <span className="hl">Quality Standards</span>
                            </h1>
                            <div className="qp-hero-divider" />
                            <p className="qp-hero-desc">
                                At Toughman, quality is not a checkpoint — it is woven into every
                                stage of our operation. From accredited farms to certified cold-chain
                                delivery, every process is governed, monitored, and documented to
                                international standards.
                            </p>
                            <div className="qp-hero-pills">
                                {["HACCP Certified", "ISO 22000:2018", "GMP Compliant", "Halal Certified", "NMIS Approved"].map(p => (
                                    <span className="qp-hero-pill" key={p}>
                                        <span className="qp-pill-dot" />{p}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right: key metrics cards */}
                        <div className="qp-hero-right">
                            {METRICS.map(m => (
                                <div className="qp-hero-metric-card" key={m.lbl}>
                                    <div className="qp-hero-metric-icon">{m.icon}</div>
                                    <div>
                                        <div className="qp-hero-metric-val">{m.val}</div>
                                        <div className="qp-hero-metric-lbl">{m.lbl}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════ QUALITY PILLARS ════════════ */}
            <section className="qp-pillars">
                <div className="qp-inner">
                    <div className="qp-section-header">
                        <span className="qp-section-label">Our Quality Framework</span>
                        <h2 className="qp-section-title">Six Pillars of Quality</h2>
                        <p className="qp-section-sub">
                            Every element of our quality management system is built around six
                            core pillars that govern how we source, process, freeze, and deliver
                            every product.
                        </p>
                    </div>
                    <div className="qp-pillars-grid">
                        {QUALITY_PILLARS.map(p => (
                            <div className="qp-pillar-card" key={p.num}>
                                <div className="qp-pillar-num">{p.num}</div>
                                <div className="qp-pillar-icon-wrap">{p.icon}</div>
                                <div className="qp-pillar-title">{p.title}</div>
                                <p className="qp-pillar-desc">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ CERTIFICATIONS ════════════ */}
            <section className="qp-certs">
                <div className="qp-inner">
                    <div className="qp-section-header">
                        <span className="qp-section-label">Our Certifications</span>
                        <h2 className="qp-section-title qp-section-title-white">Certified for Your Confidence</h2>
                        <p className="qp-section-sub qp-section-sub-white">
                            Each certification represents an independent, rigorous validation
                            that our systems, processes, and products meet globally recognised standards.
                        </p>
                    </div>
                    <div className="qp-certs-grid">
                        {CERTIFICATIONS.map(c => (
                            <div className="qp-cert-card" key={c.name}
                                style={{ "--cert-color": c.color }}>
                                <div className="qp-cert-icon-wrap" style={{ borderColor: c.color + "44" }}>
                                    <div style={{ color: c.color }}>{c.icon}</div>
                                </div>
                                <div className="qp-cert-name" style={{ color: c.color }}>{c.name}</div>
                                <div className="qp-cert-full">{c.full}</div>
                                <div className="qp-cert-body">{c.body}</div>
                                <span className="qp-cert-year">{c.year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ QUALITY CHECKLIST ════════════ */}
            <section className="qp-checklist-section">
                <div className="qp-inner">
                    <div className="qp-section-header">
                        <span className="qp-section-label">Stage-by-Stage Verification</span>
                        <h2 className="qp-section-title">Quality Checks at Every Stage</h2>
                        <p className="qp-section-sub">
                            No stage is assumed safe. Every handover point in our process carries
                            a mandatory quality gate that must be passed before the product advances.
                        </p>
                    </div>
                    <div className="qp-checklist-grid">
                        {QUALITY_CHECKS.map(s => (
                            <div className="qp-check-card" key={s.stage}>
                                <div className="qp-check-card-header">
                                    <span className="qp-check-icon">{s.icon}</span>
                                    <span className="qp-check-stage">{s.stage}</span>
                                </div>
                                <ul className="qp-check-list">
                                    {s.checks.map(c => (
                                        <li className="qp-check-item" key={c}>
                                            <span className="qp-check-tick">✓</span>
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ METRICS STRIP ════════════ */}
            <div className="qp-metrics-strip">
                <div className="qp-inner">
                    {METRICS.map(m => (
                        <div className="qp-metric-block" key={m.lbl}>
                            <div className="qp-metric-icon">{m.icon}</div>
                            <div className="qp-metric-val">{m.val}</div>
                            <div className="qp-metric-lbl">{m.lbl}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ════════════ TESTIMONIALS ════════════ */}
            <section className="qp-testimonials">
                <div className="qp-inner">
                    <div className="qp-section-header">
                        <span className="qp-section-label">What Clients Say</span>
                        <h2 className="qp-section-title">Trusted by Industry Partners</h2>
                        <p className="qp-section-sub">
                            Our quality standards aren't just internal claims — they're validated
                            by auditors and experienced by the clients who rely on us daily.
                        </p>
                    </div>
                    <div className="qp-testimonials-grid">
                        {TESTIMONIALS.map(t => (
                            <div className="qp-testimonial-card" key={t.name}>
                                <div className="qp-testimonial-quote-mark">"</div>
                                <p className="qp-testimonial-text">{t.quote}</p>
                                <div className="qp-testimonial-author">
                                    <div className="qp-testimonial-avatar">{t.initial}</div>
                                    <div>
                                        <div className="qp-testimonial-name">{t.name}</div>
                                        <div className="qp-testimonial-role">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ FAQ ════════════ */}
            <section className="qp-faq">
                <div className="qp-inner">
                    <div>
                        <span className="qp-faq-left-label">Quality Questions</span>
                        <h2 className="qp-faq-left-title">Frequently Asked Quality Questions</h2>
                        <p className="qp-faq-left-sub">
                            Transparency is part of our quality commitment. Here are the
                            questions we hear most from clients and auditors.
                        </p>
                        <button className="btn-qp-faq" onClick={() => onNavigate("contact")}>
                            📋 Request Audit Documentation
                        </button>
                    </div>
                    <div className="qp-faq-list">
                        {FAQS.map((faq, i) => (
                            <div
                                className={`qp-faq-item${openFaq === i ? " open" : ""}`}
                                key={i}
                            >
                                <button
                                    className="qp-faq-q"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    {faq.q}
                                    <span className="qp-faq-chevron">▾</span>
                                </button>
                                <div className="qp-faq-a">{faq.a}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ CTA ════════════ */}
            <section className="qp-cta">
                <div className="qp-inner">
                    <div>
                        <span className="qp-cta-label">Partner With Confidence</span>
                        <h2 className="qp-cta-title">Quality You Can Verify.<br />Standards You Can Trust.</h2>
                        <p className="qp-cta-desc">
                            We welcome facility tours, third-party audits, and documentation
                            requests. Our quality team is available to walk you through every
                            certification, process record, and control point — no appointment needed.
                        </p>
                        <div className="qp-cta-btns">
                            <button className="btn-qp-cta-primary" onClick={() => onNavigate("contact")}>
                                📅 Book a Facility Audit
                            </button>
                            <button className="btn-qp-cta-outline" onClick={() => onNavigate("process")}>
                                View Our Process
                            </button>
                        </div>
                    </div>
                    <div className="qp-cta-img-wrap">
                        <img
                            src={facilityImg}
                            alt="Toughman quality facility"
                            onError={e => { e.target.style.opacity = "0"; }}
                        />
                        <div className="qp-cta-img-stamp">
                            <div className="qp-cta-img-stamp-val">100%</div>
                            <div className="qp-cta-img-stamp-lbl">Quality Committed</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}