import { useState } from "react";
import facilityImg from "../assets/about-facility.png";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const QUALITY_PILLARS = [
    {
        num: "01",
        icon: (
            <svg viewBox="0 0 48 48" width="34" height="34" fill="none" stroke="#e8611a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 4L6 11v11c0 11 7.5 18.5 18 21.5C34.5 40.5 42 33 42 22V11L24 4z" />
                <polyline points="15,24 21,30 33,18" strokeWidth="2.2" />
            </svg>
        ),
        title: "Source Integrity",
        desc: "We source exclusively from DA-BAI and NMIS-accredited farms that meet our biosecurity, feed management, and animal welfare requirements before a single bird is accepted.",
    },
    {
        num: "02",
        icon: (
            <svg viewBox="0 0 48 48" width="34" height="34" fill="none" stroke="#e8611a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="24" cy="24" r="18" />
                <line x1="24" y1="14" x2="24" y2="24" strokeWidth="2.2" />
                <line x1="24" y1="24" x2="31" y2="24" strokeWidth="2.2" />
                <circle cx="24" cy="24" r="2.5" fill="#e8611a" stroke="none" />
            </svg>
        ),
        title: "HACCP Control Points",
        desc: "Our processing line operates under 12 documented critical control points monitored in real time. Any deviation triggers an automatic hold and full batch review before release.",
    },
    {
        num: "03",
        icon: (
            <svg viewBox="0 0 48 48" width="34" height="34" fill="none" stroke="#e8611a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="6" width="32" height="36" rx="3" />
                <line x1="16" y1="16" x2="32" y2="16" />
                <line x1="16" y1="22" x2="32" y2="22" />
                <line x1="16" y1="28" x2="26" y2="28" />
                <polyline points="30,33 33,36 38,29" strokeWidth="2" />
            </svg>
        ),
        title: "Batch Traceability",
        desc: "Every batch carries a unique code linked from the farm of origin through each processing stage to the final packaged product — enabling complete recall capability within 2 hours.",
    },
    {
        num: "04",
        icon: (
            <svg viewBox="0 0 48 48" width="34" height="34" fill="none" stroke="#e8611a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="12" width="32" height="28" rx="3" />
                <path d="M16 12V9a8 8 0 0116 0v3" />
                <line x1="24" y1="22" x2="24" y2="30" strokeWidth="2" />
                <circle cx="24" cy="20" r="2" fill="#e8611a" stroke="none" />
            </svg>
        ),
        title: "Cold Chain Integrity",
        desc: "Temperature is logged at every transfer point — IQF tunnel, cold storage, loading dock, and delivery vehicle — maintaining an unbroken cold chain from −18°C to the point of delivery.",
    },
    {
        num: "05",
        icon: (
            <svg viewBox="0 0 48 48" width="34" height="34" fill="none" stroke="#e8611a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="24" cy="18" r="10" />
                <path d="M10 44c0-7.7 6.3-14 14-14s14 6.3 14 14" />
                <polyline points="20,18 23,21 28,15" strokeWidth="2" />
            </svg>
        ),
        title: "Qualified Quality Teams",
        desc: "All quality personnel complete HACCP and GMP training twice annually. Every shift is supervised by a certified food safety officer with the authority to halt any production line.",
    },
    {
        num: "06",
        icon: (
            <svg viewBox="0 0 48 48" width="34" height="34" fill="none" stroke="#e8611a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="24" cy="24" r="18" />
                <polyline points="15,24 21,30 33,18" strokeWidth="2.4" />
            </svg>
        ),
        title: "Third-Party Audits",
        desc: "We accommodate scheduled and unannounced third-party audits from clients and regulatory bodies. Audit scores and corrective action records are retained and available on request.",
    },
];

const QUALITY_CHECKS = [
    {
        stage: "Incoming Livestock",
        checks: ["Live bird health screening", "Farm accreditation verification", "Transport temperature log review", "Ante-mortem veterinary clearance"],
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
    },
    {
        stage: "During Processing",
        checks: ["12 HACCP CCPs monitored in real-time", "Processing room temperature ≤10°C", "Automated sanitation cycle confirmation", "Water quality testing — every shift"],
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
            </svg>
        ),
    },
    {
        stage: "Post Processing",
        checks: ["Post-mortem carcass inspection", "Microbiological sampling per batch", "Visual defect inspection and grading", "pH and colour measurement"],
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
            </svg>
        ),
    },
    {
        stage: "Packaging & Labelling",
        checks: ["Correct weight within ±5g tolerance", "Seal integrity vacuum test", "Label accuracy: batch, date, weight", "Metal detection — every unit"],
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            </svg>
        ),
    },
    {
        stage: "Cold Storage",
        checks: ["Core temperature −18°C or below", "Continuous 24/7 temperature logging", "FIFO batch rotation enforced", "Freezer alarm system tested daily"],
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
            </svg>
        ),
    },
    {
        stage: "Outbound Delivery",
        checks: ["Truck pre-cooled to −18°C before loading", "GPS and data logger activated", "Delivery manifest with temperature records", "Driver cold-chain handling briefing"],
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 4v4h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
        ),
    },
];

const METRICS = [
    { val: "100%", lbl: "Batches Traceable" },
    { val: "12", lbl: "HACCP Control Points" },
    { val: "<2 hrs", lbl: "Recall Response Time" },
    { val: "0", lbl: "Major Audit Non-Conformities (2024)" },
    { val: "2×/yr", lbl: "Staff HACCP Training Cycles" },
    { val: "24/7", lbl: "Temperature Monitoring" },
];

const TESTIMONIALS = [
    {
        quote: "Toughman's traceability documentation is among the most thorough we have reviewed from any local poultry supplier. Their HACCP compliance is operational, not just paperwork.",
        name: "Dr. Maria Santos",
        role: "Independent Food Safety Auditor",
        initial: "MS",
    },
    {
        quote: "We have sourced from Toughman for three years. The consistency of their cold chain and product quality is the reason we keep renewing. No incidents in 36 months of supply.",
        name: "Ronaldo Cruz",
        role: "Procurement Head, Major QSR Chain",
        initial: "RC",
    },
    {
        quote: "The facility tour settled our decision. The processing environment, staff discipline, and monitoring systems are at a level you expect from an export-grade supplier.",
        name: "Jennifer Lim",
        role: "Quality Manager, National Supermarket Group",
        initial: "JL",
    },
];

const FAQS = [
    {
        q: "How does Toughman ensure microbiological safety?",
        a: "We conduct microbiological sampling on every production batch, testing for total plate count, Salmonella, E. coli, and Listeria. Results are reviewed before any batch moves to cold storage. Out-of-spec results trigger an immediate hold and root-cause investigation.",
    },
    {
        q: "What is your product recall capability?",
        a: "Every product carries a batch traceability code linking it to the farm of origin, slaughter date, processing shift, packaging run, and outbound delivery manifest. In the event of a recall, we can isolate and notify all affected recipients within 2 hours.",
    },
    {
        q: "How often are your quality systems audited?",
        a: "Our quality management system undergoes internal audits quarterly and third-party external audits at least once per year. We also accommodate client-initiated audits and NMIS regulatory inspections. All findings and corrective actions are documented and retained for a minimum of 3 years.",
    },
    {
        q: "Are your products Halal certified?",
        a: "Yes. All products are certified Halal by the Islamic Da'wah Council of the Philippines (IDCP). Halal slaughter protocols are maintained throughout processing, and certification is renewed annually with an on-site inspection.",
    },
    {
        q: "What temperature standards govern your cold chain?",
        a: "Processing rooms are maintained at ≤10°C. The IQF blast freezer brings core product temperature to −18°C within 30 minutes. Cold storage is held between −18°C and −22°C. Delivery trucks are pre-cooled to −18°C and carry real-time temperature data loggers on every trip.",
    },
];

// ─── CSS ──────────────────────────────────────────────────────────────────────

const QUALITY_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Source+Serif+4:ital,wght@0,300;0,400;1,300&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --navy:         #0a1628;
  --navy-mid:     #0d1b3e;
  --navy-light:   #1a3a6b;
  --navy-dark:    #060f1e;
  --orange:       #e8611a;
  --orange-dark:  #c9500f;
  --orange-dim:   rgba(232,97,26,.12);
  --gray-bg:      #f5f7fa;
  --gray-text:    #6b7589;
  --border-light: #e4e8ef;
}

html, body { width: 100%; overflow-x: hidden; }
body { font-family: 'Montserrat', sans-serif; background: var(--gray-bg); color: #1a2340; -webkit-font-smoothing: antialiased; }

.qp-inner {
  width: 100%; max-width: 1240px;
  margin: 0 auto;
  padding: 0 48px;
}

/* ═══ HERO ═══ */
.qp-hero {
  background: #060f1e;
  padding: 64px 0 56px;
  position: relative;
  overflow: hidden;
  width: 100%;
}
.qp-hero::before {
  content: '';
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 60% 80% at 90% 50%, rgba(232,97,26,.07) 0%, transparent 55%),
    radial-gradient(ellipse 40% 60% at 5% 80%, rgba(26,58,107,.5) 0%, transparent 60%);
  pointer-events: none;
}
.qp-hero-grid-overlay {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}

.qp-hero .qp-inner { position: relative; z-index: 1; }

.qp-breadcrumb {
  display: flex; align-items: center; gap: 8px;
  margin-bottom: 28px;
  font-size: 11px; font-weight: 600;
  color: rgba(255,255,255,.35);
  letter-spacing: 1.2px; text-transform: uppercase;
}
.qp-breadcrumb-btn {
  background: none; border: none; cursor: pointer; padding: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px; font-weight: 600;
  color: rgba(255,255,255,.35);
  letter-spacing: 1.2px; text-transform: uppercase;
  transition: color .2s;
}
.qp-breadcrumb-btn:hover { color: var(--orange); }
.qp-breadcrumb-sep { color: rgba(255,255,255,.18); }
.qp-breadcrumb-cur { color: rgba(255,255,255,.55); }

.qp-hero-layout {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 72px;
  align-items: center;
}
.qp-hero-eyebrow {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 20px;
}
.qp-hero-eyebrow-line {
  width: 28px; height: 2px; background: var(--orange); flex-shrink: 0;
}
.qp-hero-eyebrow-text {
  font-size: 11px; font-weight: 700;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase;
}
.qp-hero-title {
  font-size: clamp(28px, 3.8vw, 52px);
  font-weight: 900;
  line-height: 1.06;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: -.5px;
  margin-bottom: 22px;
}
.qp-hero-title .hl { color: var(--orange); }
.qp-hero-desc {
  font-size: 14px; font-weight: 400;
  color: rgba(255,255,255,.55);
  line-height: 1.9;
  margin-bottom: 32px;
  max-width: 500px;
  font-family: 'Source Serif 4', serif;
  font-style: italic;
}
.qp-hero-pills {
  display: flex; flex-wrap: wrap; gap: 8px;
}
.qp-hero-pill {
  display: flex; align-items: center; gap: 7px;
  padding: 7px 14px;
  border: 1px solid rgba(232,97,26,.3);
  border-radius: 4px;
  font-size: 10px; font-weight: 700;
  color: rgba(255,255,255,.75);
  text-transform: uppercase; letter-spacing: .8px;
  background: rgba(232,97,26,.07);
}
.qp-pill-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--orange);
  flex-shrink: 0;
}

/* Hero right: metric stack */
.qp-hero-right { display: flex; flex-direction: column; gap: 10px; }
.qp-hero-metric-card {
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 10px;
  padding: 14px 18px;
  display: flex; align-items: center; gap: 16px;
  transition: background .2s, border-color .2s;
}
.qp-hero-metric-card:hover {
  background: rgba(255,255,255,.09);
  border-color: rgba(232,97,26,.3);
}
.qp-hero-metric-icon {
  width: 36px; height: 36px; border-radius: 8px;
  background: rgba(232,97,26,.15);
  border: 1px solid rgba(232,97,26,.2);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  color: var(--orange);
}
.qp-hero-metric-val {
  font-size: 18px; font-weight: 900;
  color: var(--orange); line-height: 1;
}
.qp-hero-metric-lbl {
  font-size: 10.5px; font-weight: 500;
  color: rgba(255,255,255,.45);
  text-transform: uppercase; letter-spacing: .4px;
  margin-top: 3px;
}

/* ═══ SHARED SECTION HEADER ═══ */
.qp-section-header { text-align: center; margin-bottom: 52px; }
.qp-section-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  margin-bottom: 14px;
}
.qp-section-eyebrow-line { width: 20px; height: 2px; background: var(--orange); }
.qp-section-label {
  font-size: 10.5px; font-weight: 700;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase;
}
.qp-section-title {
  font-size: clamp(20px, 2.6vw, 30px);
  font-weight: 900;
  color: var(--navy);
  text-transform: uppercase; letter-spacing: .3px;
  line-height: 1.1; margin-bottom: 14px;
}
.qp-section-title-white { color: #fff; }
.qp-section-sub {
  font-size: 14px; font-weight: 400;
  color: var(--gray-text); line-height: 1.85;
  max-width: 520px; margin: 0 auto;
  font-family: 'Source Serif 4', serif;
}
.qp-section-sub-white { color: rgba(255,255,255,.5); }

/* ═══ QUALITY PILLARS ═══ */
.qp-pillars { background: var(--gray-bg); padding: 80px 0; width: 100%; }
.qp-pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.qp-pillar-card {
  background: #fff;
  border-radius: 12px;
  padding: 28px 24px 26px;
  border: 1px solid var(--gray-bg);
  box-shadow: 0 2px 12px rgba(0,0,0,.04);
  transition: box-shadow .25s, transform .25s, border-color .25s;
  position: relative; overflow: hidden;
}
.qp-pillar-card:hover {
  box-shadow: 0 10px 36px rgba(13,27,62,.1);
  transform: translateY(-3px);
  border-color: rgba(232,97,26,.25);
}
.qp-pillar-num {
  position: absolute; top: 14px; right: 16px;
  font-size: 38px; font-weight: 900;
  color: rgba(13,27,62,.04);
  letter-spacing: -2px; line-height: 1;
  user-select: none;
}
.qp-pillar-icon-wrap {
  width: 56px; height: 56px; border-radius: 10px;
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 16px;
  box-shadow: 0 4px 14px rgba(13,27,62,.18);
}
.qp-pillar-title {
  font-size: 13px; font-weight: 800;
  color: var(--navy); text-transform: uppercase;
  letter-spacing: .3px; margin-bottom: 10px;
}
.qp-pillar-desc {
  font-size: 13px; font-weight: 400;
  color: var(--gray-text); line-height: 1.8;
  font-family: 'Source Serif 4', serif;
}


/* ═══ QUALITY CHECKLIST ═══ */
.qp-checklist-section { background: #fff; padding: 80px 0; width: 100%; }
.qp-checklist-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; margin-top: 48px;
}
.qp-check-card {
  background: var(--gray-bg);
  border-radius: 10px; padding: 24px 22px;
  border: 1px solid var(--gray-bg);
  transition: box-shadow .25s, border-color .25s;
}
.qp-check-card:hover {
  box-shadow: 0 8px 28px rgba(13,27,62,.08);
  border-color: rgba(232,97,26,.2);
}
.qp-check-card-header {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 18px; padding-bottom: 14px;
  border-bottom: 2px solid var(--orange);
}
.qp-check-icon {
  width: 34px; height: 34px; border-radius: 7px;
  background: var(--navy);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; color: var(--orange);
}
.qp-check-stage {
  font-size: 12px; font-weight: 800;
  color: var(--navy); text-transform: uppercase; letter-spacing: .3px; line-height: 1.3;
}
.qp-check-list { list-style: none; display: flex; flex-direction: column; gap: 9px; }
.qp-check-item {
  display: flex; align-items: flex-start; gap: 9px;
  font-size: 12.5px; color: #4b5563; line-height: 1.6;
  font-family: 'Source Serif 4', serif;
}
.qp-check-tick {
  width: 16px; height: 16px; border-radius: 50%;
  background: var(--navy);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; margin-top: 2px;
  font-size: 8px; color: #fff; font-weight: 900;
}

/* ═══ METRICS STRIP ═══ */
.qp-metrics-strip { background: var(--orange); width: 100%; }
.qp-metrics-strip .qp-inner { display: flex; flex-wrap: wrap; }
.qp-metric-block {
  flex: 1; min-width: 150px;
  padding: 32px 24px; text-align: center;
  border-right: 1px solid rgba(255,255,255,.22);
  transition: background .2s;
}
.qp-metric-block:last-child { border-right: none; }
.qp-metric-block:hover { background: rgba(0,0,0,.05); }
.qp-metric-val {
  font-size: 24px; font-weight: 900;
  color: #fff; line-height: 1; margin-bottom: 6px;
}
.qp-metric-lbl {
  font-size: 10px; font-weight: 600;
  color: rgba(255,255,255,.8);
  text-transform: uppercase; letter-spacing: .6px; line-height: 1.4;
}

/* ═══ TESTIMONIALS ═══ */
.qp-testimonials { background: var(--gray-bg); padding: 80px 0; width: 100%; }
.qp-testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; margin-top: 48px;
}
.qp-testimonial-card {
  background: #fff; border-radius: 12px; padding: 28px 24px;
  border: 1px solid var(--gray-bg);
  box-shadow: 0 2px 10px rgba(0,0,0,.04);
  display: flex; flex-direction: column; gap: 20px;
  transition: box-shadow .25s, transform .25s;
}
.qp-testimonial-card:hover {
  box-shadow: 0 10px 36px rgba(13,27,62,.09);
  transform: translateY(-2px);
}
.qp-testimonial-quote-mark {
  font-size: 48px; line-height: .75; color: var(--orange);
  font-family: Georgia, serif; font-weight: 900; opacity: .35;
}
.qp-testimonial-text {
  font-size: 13.5px; color: #374151; line-height: 1.85;
  font-family: 'Source Serif 4', serif;
  font-style: italic; flex: 1;
}
.qp-testimonial-author { display: flex; align-items: center; gap: 12px; }
.qp-testimonial-avatar {
  width: 40px; height: 40px; border-radius: 50%;
  background: var(--navy);
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 900;
  color: var(--orange); flex-shrink: 0;
  border: 2px solid var(--orange);
}
.qp-testimonial-name { font-size: 12.5px; font-weight: 800; color: var(--navy); margin-bottom: 2px; }
.qp-testimonial-role { font-size: 11px; font-weight: 400; color: var(--gray-text); }

/* ═══ FAQ ═══ */
.qp-faq { background: var(--navy); padding: 80px 0; width: 100%; }
.qp-faq .qp-inner {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 72px; align-items: start;
}
.qp-faq-left-eyebrow {
  display: flex; align-items: center; gap: 10px; margin-bottom: 16px;
}
.qp-faq-left-eyebrow-line { width: 20px; height: 2px; background: var(--orange); }
.qp-faq-left-label {
  font-size: 10.5px; font-weight: 700;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase;
}
.qp-faq-left-title {
  font-size: clamp(18px, 2vw, 24px); font-weight: 900;
  color: #fff; text-transform: uppercase; line-height: 1.2;
  margin-bottom: 16px;
}
.qp-faq-left-sub {
  font-size: 13.5px; color: rgba(255,255,255,.5);
  line-height: 1.85; margin-bottom: 28px;
  font-family: 'Source Serif 4', serif;
}
.btn-qp-faq {
  background: var(--orange); color: #fff; border: none;
  padding: 12px 22px; border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px; font-weight: 700;
  text-transform: uppercase; letter-spacing: .8px;
  cursor: pointer; transition: background .2s;
  display: inline-flex; align-items: center; gap: 8px;
}
.btn-qp-faq:hover { background: var(--orange-dark); }
.qp-faq-list { display: flex; flex-direction: column; gap: 8px; }
.qp-faq-item {
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 8px; overflow: hidden;
  transition: border-color .2s;
}
.qp-faq-item.open {
  border-color: rgba(232,97,26,.4);
  background: rgba(255,255,255,.06);
}
.qp-faq-q {
  width: 100%; background: none; border: none; cursor: pointer;
  padding: 16px 20px; text-align: left;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12.5px; font-weight: 700;
  color: rgba(255,255,255,.85); line-height: 1.4;
  transition: color .2s;
}
.qp-faq-item.open .qp-faq-q { color: var(--orange); }
.qp-faq-chevron {
  width: 24px; height: 24px; border-radius: 50%;
  background: rgba(255,255,255,.07);
  border: 1px solid rgba(255,255,255,.12);
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; flex-shrink: 0;
  color: rgba(255,255,255,.6);
  transition: background .2s, transform .3s, color .2s;
}
.qp-faq-item.open .qp-faq-chevron {
  background: var(--orange); color: #fff;
  border-color: var(--orange); transform: rotate(180deg);
}
.qp-faq-a {
  max-height: 0; overflow: hidden; padding: 0 20px;
  font-size: 13px; font-weight: 400;
  color: rgba(255,255,255,.55); line-height: 1.85;
  transition: max-height .35s ease, padding .35s ease;
  font-family: 'Source Serif 4', serif;
}
.qp-faq-item.open .qp-faq-a { max-height: 300px; padding: 0 20px 18px; }

/* ═══ CTA ═══ */
.qp-cta {
  background: #fff; padding: 80px 0; width: 100%;
  border-top: 1px solid var(--gray-bg);
}
.qp-cta .qp-inner {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 64px; align-items: center;
}
.qp-cta-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
.qp-cta-eyebrow-line { width: 20px; height: 2px; background: var(--orange); }
.qp-cta-label {
  font-size: 10.5px; font-weight: 700;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase;
}
.qp-cta-title {
  font-size: clamp(20px, 2.4vw, 30px); font-weight: 900;
  color: var(--navy); text-transform: uppercase;
  line-height: 1.1; margin-bottom: 16px;
}
.qp-cta-desc {
  font-size: 14px; color: var(--gray-text); line-height: 1.9;
  margin-bottom: 32px;
  font-family: 'Source Serif 4', serif;
}
.qp-cta-btns { display: flex; gap: 12px; flex-wrap: wrap; }
.btn-qp-cta-primary {
  background: var(--orange); color: #fff; border: none;
  padding: 14px 28px; border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px; font-weight: 700;
  cursor: pointer; letter-spacing: .8px; text-transform: uppercase;
  transition: background .2s; white-space: nowrap;
  display: inline-flex; align-items: center; gap: 8px;
}
.btn-qp-cta-primary:hover { background: var(--orange-dark); }
.btn-qp-cta-outline {
  background: transparent; color: var(--navy);
  border: 2px solid var(--navy);
  padding: 14px 28px; border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px; font-weight: 700;
  cursor: pointer; letter-spacing: .8px; text-transform: uppercase;
  transition: all .2s; white-space: nowrap;
}
.btn-qp-cta-outline:hover { border-color: var(--orange); color: var(--orange); }
.qp-cta-img-wrap {
  border-radius: 12px; overflow: hidden;
  aspect-ratio: 4/3;
  background: linear-gradient(135deg, #060f1e 0%, var(--navy-light) 100%);
  box-shadow: 0 16px 48px rgba(13,27,62,.12);
  position: relative;
}
.qp-cta-img-wrap img {
  width: 100%; height: 100%; object-fit: cover; display: block;
}
.qp-cta-img-stamp {
  position: absolute; bottom: 16px; right: 16px;
  background: rgba(9,22,48,.88);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(232,97,26,.4);
  border-radius: 8px; padding: 10px 14px; text-align: center;
}
.qp-cta-img-stamp-val {
  font-size: 16px; font-weight: 900;
  color: var(--orange); line-height: 1;
}
.qp-cta-img-stamp-lbl {
  font-size: 8.5px; font-weight: 600;
  color: rgba(255,255,255,.55);
  text-transform: uppercase; letter-spacing: .6px; margin-top: 3px;
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 1100px) {
  .qp-inner { padding: 0 28px; }
  .qp-hero-layout { grid-template-columns: 1fr; gap: 40px; }
  .qp-hero-right { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .qp-pillars-grid { grid-template-columns: repeat(2, 1fr); }
  .qp-checklist-grid { grid-template-columns: repeat(2, 1fr); }
  .qp-faq .qp-inner { grid-template-columns: 260px 1fr; gap: 48px; }
}
@media (max-width: 860px) {
  .qp-hero { padding: 48px 0 40px; }
  .qp-hero-right { grid-template-columns: repeat(2, 1fr); }
  .qp-testimonials-grid { grid-template-columns: repeat(2, 1fr); }
  .qp-faq .qp-inner { grid-template-columns: 1fr; gap: 40px; }
  .qp-cta .qp-inner { grid-template-columns: 1fr; gap: 40px; }
  .qp-cta-img-wrap { max-height: 340px; }
}
@media (max-width: 640px) {
  .qp-inner { padding: 0 20px; }
  .qp-pillars { padding: 56px 0; }
  .qp-pillars-grid { grid-template-columns: 1fr; }
  .qp-checklist-section { padding: 56px 0; }
  .qp-checklist-grid { grid-template-columns: 1fr; }
  .qp-metrics-strip .qp-inner { flex-direction: column; }
  .qp-metric-block { border-right: none; border-bottom: 1px solid rgba(255,255,255,.18); }
  .qp-metric-block:last-child { border-bottom: none; }
  .qp-testimonials { padding: 56px 0; }
  .qp-testimonials-grid { grid-template-columns: 1fr; }
  .qp-faq { padding: 56px 0; }
  .qp-hero-right { grid-template-columns: 1fr; }
  .qp-cta { padding: 56px 0; }
  .qp-cta-btns { flex-direction: column; }
  .btn-qp-cta-primary, .btn-qp-cta-outline { width: 100%; justify-content: center; }
}
@media (max-width: 420px) {
  .qp-inner { padding: 0 16px; }
  .qp-hero-title { font-size: 26px; }
}
`;

// ─── SVG ICONS FOR METRICS ────────────────────────────────────────────────────

const MetricIcons = [
    // Traceability
    <svg key="1" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
    // CCPs
    <svg key="2" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    // Speed
    <svg key="3" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    // Check
    <svg key="4" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,
    // Training
    <svg key="5" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>,
    // Temperature
    <svg key="6" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" /></svg>,
];

// ─── COMPONENT ─────────────────────────────────────────────────────────────────

export default function QualityPage({ onNavigate = () => { } }) {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: QUALITY_CSS }} />

            {/* ════ HERO ════ */}
            <section className="qp-hero">
                <div className="qp-hero-grid-overlay" />
                <div className="qp-inner">


                    <div className="qp-hero-layout">
                        <div>
                            <div className="qp-hero-eyebrow">
                                <div className="qp-hero-eyebrow-line" />
                                <span className="qp-hero-eyebrow-text">Quality Assurance</span>
                            </div>
                            <h1 className="qp-hero-title">
                                Uncompromising<br />
                                <span className="hl">Quality Standards</span>
                            </h1>
                            <p className="qp-hero-desc">
                                At Toughman, quality is built into the operation — not added at the end.
                                From accredited farms to certified cold-chain delivery, every process
                                is governed, monitored, and documented to international standards.
                            </p>
                            <div className="qp-hero-pills">
                                {["HACCP Certified", "ISO 22000:2018", "GMP Compliant", "Halal Certified", "NMIS Approved"].map(p => (
                                    <span className="qp-hero-pill" key={p}>
                                        <span className="qp-pill-dot" />{p}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="qp-hero-right">
                            {METRICS.map((m, i) => (
                                <div className="qp-hero-metric-card" key={m.lbl}>
                                    <div className="qp-hero-metric-icon">
                                        {MetricIcons[i]}
                                    </div>
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

            {/* ════ QUALITY PILLARS ════ */}
            <section className="qp-pillars">
                <div className="qp-inner">
                    <div className="qp-section-header">
                        <div className="qp-section-eyebrow">
                            <div className="qp-section-eyebrow-line" />
                            <span className="qp-section-label">Our Quality Framework</span>
                        </div>
                        <h2 className="qp-section-title">Six Pillars of Quality</h2>
                        <p className="qp-section-sub">
                            Every element of our quality management system is built around six
                            principles that govern how we source, process, freeze, and deliver
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

            {/* ════ QUALITY CHECKLIST ════ */}
            <section className="qp-checklist-section">
                <div className="qp-inner">
                    <div className="qp-section-header">
                        <div className="qp-section-eyebrow">
                            <div className="qp-section-eyebrow-line" />
                            <span className="qp-section-label">Stage-by-Stage Verification</span>
                        </div>
                        <h2 className="qp-section-title">Quality Checks at Every Stage</h2>
                        <p className="qp-section-sub">
                            No stage is assumed safe. Every handover point in our process carries
                            a mandatory quality gate that must pass before the product advances.
                        </p>
                    </div>
                    <div className="qp-checklist-grid">
                        {QUALITY_CHECKS.map(s => (
                            <div className="qp-check-card" key={s.stage}>
                                <div className="qp-check-card-header">
                                    <div className="qp-check-icon">{s.icon}</div>
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

            {/* ════ METRICS STRIP ════ */}
            <div className="qp-metrics-strip">
                <div className="qp-inner">
                    {METRICS.map(m => (
                        <div className="qp-metric-block" key={m.lbl}>
                            <div className="qp-metric-val">{m.val}</div>
                            <div className="qp-metric-lbl">{m.lbl}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ════ TESTIMONIALS ════ */}
            <section className="qp-testimonials">
                <div className="qp-inner">
                    <div className="qp-section-header">
                        <div className="qp-section-eyebrow">
                            <div className="qp-section-eyebrow-line" />
                            <span className="qp-section-label">Client Feedback</span>
                        </div>
                        <h2 className="qp-section-title">Trusted by Industry Partners</h2>
                        <p className="qp-section-sub">
                            Our quality standards are validated by independent auditors and
                            confirmed by the clients who rely on us for consistent supply.
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

            {/* ════ FAQ ════ */}
            <section className="qp-faq">
                <div className="qp-inner">
                    <div>
                        <div className="qp-faq-left-eyebrow">
                            <div className="qp-faq-left-eyebrow-line" />
                            <span className="qp-faq-left-label">Quality Questions</span>
                        </div>
                        <h2 className="qp-faq-left-title">Frequently Asked Quality Questions</h2>
                        <p className="qp-faq-left-sub">
                            Transparency is part of our commitment. Below are the questions
                            we hear most from clients, distributors, and auditors.
                        </p>
                        <button className="btn-qp-faq" onClick={() => onNavigate("contact")}>
                            Request Audit Documentation
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

            {/* ════ CTA ════ */}
            <section className="qp-cta">
                <div className="qp-inner">
                    <div>
                        <div className="qp-cta-eyebrow">
                            <div className="qp-cta-eyebrow-line" />
                            <span className="qp-cta-label">Partner With Confidence</span>
                        </div>
                        <h2 className="qp-cta-title">Quality You Can Verify.<br />Standards You Can Trust.</h2>
                        <p className="qp-cta-desc">
                            We welcome facility tours, third-party audits, and documentation
                            requests. Our quality team is available to walk you through every
                            certification, process record, and control point.
                        </p>
                        <div className="qp-cta-btns">
                            <button className="btn-qp-cta-primary" onClick={() => onNavigate("contact")}>
                                Book a Facility Audit
                            </button>
                            <button className="btn-qp-cta-outline" onClick={() => onNavigate("process")}>
                                View Our Process
                            </button>
                        </div>
                    </div>
                    <div className="qp-cta-img-wrap">
                        <img
                            src={facilityImg}
                            alt="Toughman Food Processing facility"
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