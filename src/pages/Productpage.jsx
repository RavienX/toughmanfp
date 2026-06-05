import { useProductsData } from "../hooks/useSiteData";
import { useState } from "react";
import productWholeChicken from "../assets/thumb-whole-chicken.png";
import productChickenCuts from "../assets/thumb-chicken-cuts.png";
import productChickenParts from "../assets/product-chicken-parts.png";
import productIndividuallyPacked from "../assets/thumb-individually-packed.png";
import fillet from "../assets/fillet.png";
// ─── ICONS (same style as HomePage) ──────────────────────────────────────────

const IconArrow = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const IconCheck = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconSnowflake = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /><line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const IconScale = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="3" x2="12" y2="21" /><path d="M3 9l9-7 9 7" /><path d="M3 15l9 7 9-7" />
  </svg>
);
const IconPhone = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.49 5.49l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconX = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ─── PROCESS STEP ICONS (SVG, no emoji) ──────────────────────────────────────

const STEP_ICONS = [
  // Farm
  <svg key="farm" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  // Inspection
  <svg key="inspect" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>,
  // Processing
  <svg key="process" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></svg>,
  // Freezing
  <svg key="freeze" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /><line x1="19.07" y1="4.93" x2="4.93" y2="19.07" /><circle cx="12" cy="12" r="2.5" fill="#fff" stroke="none" /></svg>,
  // Packaging
  <svg key="pack" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>,
  // Delivery
  <svg key="delivery" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 5v3h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
];

// ─── DATA ─────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { key: "ALL", label: "All Products" },
  { key: "WHOLE CHICKEN", label: "Whole Chicken" },
  { key: "CUTS", label: "Chicken Cuts" },
  { key: "PARTS", label: "Chicken Parts" },
  { key: "PACKED", label: "Individually Packed" },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Whole Chicken",
    category: "WHOLE CHICKEN",
    img: productWholeChicken,
    tag: "BEST SELLER",
    weight: "1.2 – 1.8 kg",
    temp: "-18°C",
    desc: "Whole chicken, cleaned and blast-frozen shortly after processing. No added hormones. Works well for roasting, grilling, or traditional Filipino preparations. Available in bulk orders for food service and retail.",
    features: ["Hormone-Free", "HACCP Certified", "IQF Frozen", "Halal Certified"],
  },
  {
    id: 2,
    name: "Chicken Cuts",
    category: "CUTS",
    img: productChickenCuts,
    tag: "POPULAR",
    weight: "500g – 1 kg",
    temp: "-18°C",
    desc: "Pre-cut portions sized for commercial kitchens and food service operations. Each piece is individually frozen to maintain consistent weight and quality across every batch.",
    features: ["Precision Cut", "IQF Frozen", "Vacuum Sealed", "Halal Certified"],
  },
  {
    id: 3,
    name: "Chicken Parts",
    category: "PARTS",
    img: productChickenParts,
    tag: "VERSATILE",
    weight: "300g – 800g",
    temp: "-18°C",
    desc: "Breast, thigh, drumstick, and wings — available separately or as a mixed assortment. Suitable for restaurants, institutional kitchens, and bulk buyers who need specific cuts in volume.",
    features: ["Multiple Cuts", "Consistent Weight", "Cold Chain", "NMIS Approved"],
  },
  {
    id: 4,
    name: "Individually Packed",
    category: "PACKED",
    img: productIndividuallyPacked,
    tag: "HYGIENIC",
    weight: "150g – 300g",
    temp: "-18°C",
    desc: "Single-portion pieces sealed in food-grade packaging. Designed for retail display, meal delivery, and institutional use where hygiene handling and portion control are required.",
    features: ["Single-Serve", "Tamper-Proof", "Extended Shelf Life", "Retail Ready"],
  },
  {
    id: 5,
    name: "Breast Fillet",
    category: "PARTS",
    img: fillet,
    tag: "HIGH PROTEIN",
    weight: "200g – 400g",
    temp: "-18°C",
    desc: "Boneless, skinless breast fillets trimmed and frozen to a consistent size. A practical choice for health-focused menus, meal prep suppliers, and high-volume kitchen operations.",
    features: ["Boneless", "Skinless", "High Protein", "Halal Certified"],
  },
  {
    id: 6,
    name: "Mixed Pack Bundle",
    category: "PACKED",
    img: productIndividuallyPacked,
    tag: "VALUE PACK",
    weight: "2 – 3 kg",
    temp: "-18°C",
    desc: "An assorted bundle of our standard cuts, individually sealed and packed together. Practical for small businesses, commissary kitchens, and buyers who need variety without placing multiple orders.",
    features: ["Bundle Value", "Assorted Cuts", "Family Size", "Cold Chain"],
  },
];

const PROCESS_STEPS = [
  { num: "01", icon: STEP_ICONS[0], title: "Farm Sourcing", desc: "Chickens are sourced from accredited local farms. No hormones or prohibited additives are used at any point in the supply chain." },
  { num: "02", icon: STEP_ICONS[1], title: "Ante & Post-Mortem Inspection", desc: "Every batch goes through veterinary inspection before and after processing, in line with NMIS and HACCP protocols." },
  { num: "03", icon: STEP_ICONS[2], title: "Processing", desc: "Processing is carried out on ISO-certified lines with strict hygiene controls at each stage, from slaughter to cutting and trimming." },
  { num: "04", icon: STEP_ICONS[3], title: "IQF Blast Freezing", desc: "Products are individually quick-frozen at -18°C or below immediately after processing to lock in quality before packaging." },
  { num: "05", icon: STEP_ICONS[4], title: "Packaging", desc: "Each product is sealed in food-grade, tamper-evident packaging with batch and traceability information printed on every pack." },
  { num: "06", icon: STEP_ICONS[5], title: "Cold Chain Delivery", desc: "Refrigerated trucks maintain -18°C throughout transport. Temperature logs are kept for every delivery route." },
];


const PAGE_STATS = [
  { val: "4+", lbl: "Product Lines" },
  { val: "-18°C", lbl: "Cold Chain Standard" },
  { val: "100%", lbl: "HACCP Certified" },
  { val: "500+", lbl: "Business Partners" },
];

// ─── STYLES ──────────────────────────────────────────────────────────────────

const PRODUCT_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600&display=swap');

/* ─ RESET ─ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { width: 100%; overflow-x: hidden; }
body {
  width: 100%; overflow-x: hidden;
  font-family: 'Open Sans', sans-serif;
  background: #fff;
  color: #1a2340;
}
#root, #__next { width: 100%; overflow-x: hidden; }
a { text-decoration: none; color: inherit; }

/* ─ CSS VARS — identical to HomePage ─ */
:root {
  --navy:         #0a1628;
  --navy-mid:     #0a1628;
  --navy-light:   #1a3a6b;
  --orange:       #e8611a;
  --orange-dark:  #c9500f;
  --orange-dim:   rgba(232,97,26,.12);
  --gray-bg:      #f5f7fa;
  --gray-text:    #6b7589;
  --border-light: #e4e8ef;
}

/* ─ LAYOUT ─ */
.tm-page { width: 100%; overflow-x: hidden; }
.pp-inner { max-width: 1280px; margin: 0 auto; padding: 0 40px; }

/* ─ SHARED TYPOGRAPHY — matches HomePage ─ */
.section-eyebrow {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700; font-size: 10.5px;
  color: var(--orange); letter-spacing: 2.5px;
  text-transform: uppercase; margin-bottom: 12px;
}
.section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900; font-size: 30px;
  color: var(--navy); line-height: 1.15;
  letter-spacing: -.3px; margin-bottom: 14px;
}
.section-title.light { color: #fff; }
.section-desc {
  font-size: 14px; color: var(--gray-text);
  line-height: 1.85; max-width: 560px;
}
.section-desc.light { color: rgba(255,255,255,.6); }
.orange-accent {
  display: block; width: 40px; height: 3.5px;
  background: var(--orange); border-radius: 2px; margin-bottom: 14px;
}
.section-header {
  display: flex; align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 40px; gap: 24px;
}

/* ─ SHARED BUTTONS — identical to HomePage ─ */
.btn-primary {
  background: var(--orange); color: #fff;
  border: none; padding: 14px 28px; border-radius: 4px;
  font-family: 'Montserrat', sans-serif; font-weight: 800;
  font-size: 12px; cursor: pointer; letter-spacing: .8px;
  text-transform: uppercase; display: inline-flex;
  align-items: center; gap: 8px; white-space: nowrap;
  transition: background .2s, box-shadow .2s, transform .15s;
  box-shadow: 0 4px 16px rgba(232,97,26,.4);
}
.btn-primary:hover {
  background: var(--orange-dark);
  box-shadow: 0 6px 22px rgba(232,97,26,.5);
  transform: translateY(-1px);
}
.btn-outline-navy {
  background: #fff; color: var(--navy);
  border: 1.5px solid var(--navy); padding: 12px 26px; border-radius: 4px;
  font-family: 'Montserrat', sans-serif; font-weight: 700;
  font-size: 11.5px; cursor: pointer; letter-spacing: .6px;
  text-transform: uppercase; display: inline-flex;
  align-items: center; gap: 7px; white-space: nowrap;
  transition: background .2s, color .2s;
}
.btn-outline-navy:hover { background: var(--navy); color: #fff; }
.btn-outline-white {
  background: transparent; color: #fff;
  border: 1.5px solid rgba(255,255,255,.45); padding: 13px 28px; border-radius: 4px;
  font-family: 'Montserrat', sans-serif; font-weight: 700;
  font-size: 11.5px; cursor: pointer; letter-spacing: .8px;
  text-transform: uppercase; display: inline-flex;
  align-items: center; gap: 8px; white-space: nowrap;
  transition: border-color .2s, color .2s;
}
.btn-outline-white:hover { border-color: var(--orange); color: var(--orange); }

/* ─ PAGE HERO — same dark navy style as HomePage hero ─ */
.pp-hero {
  width: 100%; background: var(--navy);
  padding: 80px 0 64px;
  position: relative; overflow: hidden;
}
.pp-hero::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 60% 70% at 80% 50%, rgba(232,97,26,.07) 0%, transparent 65%),
    repeating-linear-gradient(-45deg,
      transparent, transparent 38px,
      rgba(255,255,255,.016) 38px, rgba(255,255,255,.016) 39px);
  pointer-events: none; z-index: 0;
}
.pp-hero-inner { position: relative; z-index: 1; text-align: left !important; }
.pp-breadcrumb {
  display: flex; align-items: center; gap: 8px;
  font-family: 'Montserrat', sans-serif; font-size: 11px;
  color: rgba(255,255,255,.4); letter-spacing: 1.2px; text-transform: uppercase;
  margin-bottom: 28px;
}
.pp-breadcrumb-btn {
  background: none; border: none; cursor: pointer;
  font-family: 'Montserrat', sans-serif; font-size: 11px;
  color: rgba(255,255,255,.4); letter-spacing: 1.2px; text-transform: uppercase;
  padding: 0; transition: color .2s;
}
.pp-breadcrumb-btn:hover { color: var(--orange); }
.pp-breadcrumb-sep { color: rgba(255,255,255,.2); }
.pp-breadcrumb-cur { color: var(--orange); }

.pp-hero-eyebrow {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 2.5px; text-transform: uppercase;
  margin-bottom: 18px; display: flex; align-items: center; gap: 10px;
  text-align: left !important; justify-content: flex-start;
}
.pp-hero-eyebrow::before {
  content: ''; display: inline-block;
  width: 28px; height: 2px;
  background: var(--orange); border-radius: 2px; flex-shrink: 0;
}
.pp-hero-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900;
  font-size: clamp(28px, 3.5vw, 42px); line-height: 1.1;
  text-transform: uppercase; color: #fff;
  letter-spacing: -0.3px; margin-bottom: 18px;
  text-align: left !important; max-width: 700px;
}
.pp-hero-title .hl { color: var(--orange); }
.pp-hero-divider {
  width: 48px; height: 3px; background: var(--orange);
  border-radius: 2px; margin-bottom: 20px;
  margin-left: 0 !important;
}
.pp-hero-desc {
  font-size: 14px; color: rgba(255,255,255,.65);
  line-height: 1.85; max-width: 580px; margin-bottom: 40px;
  text-align: left !important;
}
.pp-hero-stats {
  display: flex; gap: 0; flex-wrap: wrap;
  border-top: 1px solid rgba(255,255,255,.1);
  padding-top: 28px; max-width: 640px;
}
.pp-hero-stat {
  flex: 0 0 auto; padding-right: 32px; margin-right: 32px;
  border-right: 1px solid rgba(255,255,255,.1);
}
.pp-hero-stat:last-child { border-right: none; margin-right: 0; padding-right: 0; }
.pp-hero-stat-val {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 28px;
  color: var(--orange); line-height: 1; margin-bottom: 5px;
}
.pp-hero-stat-lbl {
  font-size: 10.5px; color: rgba(255,255,255,.45);
  text-transform: uppercase; letter-spacing: .8px;
}

/* ─ FILTER BAR ─ */
.pp-filter-bar {
  background: #fff;
  border-bottom: 1px solid var(--border-light);
  position: sticky; top: 0; z-index: 100;
  box-shadow: 0 2px 12px rgba(0,0,0,.06);
  width: 100%;
}
.pp-filter-inner {
  display: flex; align-items: center;
  justify-content: space-between; gap: 20px;
  height: 60px;
}
.pp-filter-tabs {
  display: flex; gap: 0; overflow-x: auto;
  scrollbar-width: none;
}
.pp-filter-tabs::-webkit-scrollbar { display: none; }
.pp-filter-tab {
  padding: 0 20px; height: 60px; line-height: 60px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11.5px;
  color: var(--gray-text); text-transform: uppercase; letter-spacing: .8px;
  border: none; background: none; cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: color .2s, border-color .2s;
  white-space: nowrap; flex-shrink: 0;
}
.pp-filter-tab.active,
.pp-filter-tab:hover { color: var(--navy); border-bottom-color: var(--orange); }
.pp-filter-count {
  font-family: 'Montserrat', sans-serif; font-size: 12px;
  color: var(--gray-text); white-space: nowrap; flex-shrink: 0;
}
.pp-filter-count b { color: var(--navy); }

/* ─ PRODUCT GRID ─ */
.pp-grid-section { background: var(--gray-bg); padding: 64px 0 80px; }
.pp-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: stretch;
}

/* ─ PRODUCT CARD ─ */
.pp-card {
  background: #fff; border-radius: 10px; overflow: hidden;
  border: 1px solid var(--border-light);
  box-shadow: 0 2px 12px rgba(0,0,0,.05);
  transition: transform .2s, box-shadow .2s;
  display: flex; flex-direction: column; height: 100%;
}
.pp-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 32px rgba(10,22,40,.10);
}
.pp-card-img-wrap {
  position: relative;
  background: linear-gradient(135deg, #0a1e40 0%, #1a3a6b 50%, #0a1628 100%);
  height: 220px; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.pp-card-img-wrap img {
  width: 100%; height: 100%; object-fit: contain;
  transition: transform .3s; display: block;
}
.pp-card:hover .pp-card-img-wrap img { transform: scale(1.04); }
.pp-card-img-fallback {
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 8px;
}
.pp-card-img-fallback-text {
  font-family: 'Montserrat', sans-serif; font-size: 10px;
  color: rgba(255,255,255,.25); letter-spacing: 1.5px; text-transform: uppercase;
}
.pp-card-tag {
  position: absolute; top: 12px; left: 12px;
  padding: 4px 10px; border-radius: 4px;
  font-family: 'Montserrat', sans-serif; font-weight: 700;
  font-size: 9px; letter-spacing: 1px; text-transform: uppercase;
  color: #fff; background: var(--orange); z-index: 2;
}
.pp-card-temp {
  position: absolute; top: 12px; right: 12px;
  background: rgba(5,13,31,.82);
  border: 1px solid rgba(255,255,255,.15);
  padding: 4px 9px; border-radius: 4px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10.5px;
  color: #7dd3fc; letter-spacing: .5px;
  display: flex; align-items: center; gap: 5px; z-index: 2;
}
.pp-card-body { padding: 20px 20px 22px; display: flex; flex-direction: column; flex: 1; }
.pp-card-name {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 14.5px;
  color: var(--navy); text-transform: uppercase;
  letter-spacing: .3px; margin-bottom: 4px;
}
.pp-card-weight {
  font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700;
  color: var(--orange); letter-spacing: .4px; margin-bottom: 12px;
  display: flex; align-items: center; gap: 5px;
}
.pp-card-desc {
  font-size: 12.5px; color: var(--gray-text); line-height: 1.75;
  margin-bottom: 16px; flex: 1;
}
.pp-card-features { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 18px; }
.pp-card-feat {
  font-family: 'Montserrat', sans-serif; font-size: 9.5px; font-weight: 700;
  letter-spacing: .5px; text-transform: uppercase;
  padding: 4px 9px; border-radius: 4px;
  background: var(--gray-bg); color: var(--navy);
  border: 1px solid var(--border-light);
}
.pp-card-actions { display: flex; gap: 10px; margin-top: auto; }
.btn-pp-primary {
  flex: 1; background: var(--navy); color: #fff; border: none;
  padding: 11px 0; border-radius: 4px;
  font-family: 'Montserrat', sans-serif; font-weight: 700;
  font-size: 11px; letter-spacing: .6px; text-transform: uppercase;
  cursor: pointer; transition: background .2s;
}
.btn-pp-primary:hover { background: var(--navy-light); }
.btn-pp-inquire {
  padding: 11px 14px; border-radius: 4px;
  border: 1.5px solid var(--border-light);
  background: transparent; color: var(--gray-text);
  font-family: 'Montserrat', sans-serif; font-weight: 700;
  font-size: 11px; letter-spacing: .6px; cursor: pointer;
  transition: border-color .2s, color .2s; white-space: nowrap;
}
.btn-pp-inquire:hover { border-color: var(--orange); color: var(--orange); }

/* ─ PROCESS SECTION ─ */
.pp-process { background: var(--navy); padding: 80px 0; width: 100%; }
.pp-process-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 44px; }
.pp-process-card {
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 10px; padding: 28px 24px;
  transition: background .2s, border-color .2s;
  position: relative; overflow: hidden;
}
.pp-process-card:hover {
  background: rgba(255,255,255,.07);
  border-color: rgba(232,97,26,.25);
}
.pp-process-num {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 40px;
  color: rgba(232,97,26,.10); letter-spacing: -2px; line-height: 1;
  position: absolute; top: 14px; right: 16px;
}
.pp-process-icon-wrap {
  width: 48px; height: 48px; border-radius: 8px;
  background: var(--navy-light);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 16px; flex-shrink: 0;
}
.pp-process-step-title {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 13px;
  color: #fff; text-transform: uppercase; letter-spacing: .3px; margin-bottom: 10px;
}
.pp-process-step-desc {
  font-size: 12.5px; color: rgba(255,255,255,.52); line-height: 1.75;
}

/* ─ CTA SECTION ─ */
.pp-cta { background: var(--gray-bg); padding: 80px 0; }
.pp-cta-inner {
  display: flex; align-items: center;
  justify-content: space-between; gap: 48px;
}
.pp-cta-left { flex: 1; }
.pp-cta-right { display: flex; gap: 14px; flex-wrap: wrap; flex-shrink: 0; }

/* ─ MODAL ─ */
.pp-modal-backdrop {
  position: fixed; inset: 0;
  background: rgba(5,13,31,.88); backdrop-filter: blur(6px);
  z-index: 999; display: flex; align-items: center; justify-content: center;
  padding: 24px;
}
.pp-modal {
  background: #fff; border-radius: 16px;
  max-width: 680px; width: 100%;
  max-height: 90vh; overflow-y: auto;
  position: relative;
  box-shadow: 0 24px 80px rgba(0,0,0,.5);
  animation: ppModalIn .22s ease;
}
@keyframes ppModalIn {
  from { opacity: 0; transform: scale(.95) translateY(10px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
.pp-modal-close {
  position: absolute; top: 16px; right: 16px;
  width: 36px; height: 36px; border-radius: 50%;
  background: var(--gray-bg); border: 1px solid var(--border-light);
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  color: var(--navy); transition: background .2s; z-index: 5;
}
.pp-modal-close:hover { background: var(--border-light); }
.pp-modal-img-area {
  width: 100%; height: 260px; overflow: hidden;
  background: linear-gradient(135deg, #0a1e40 0%, #1a3a6b 50%, #0a1628 100%);
  border-radius: 16px 16px 0 0;
  display: flex; align-items: center; justify-content: center;
}
.pp-modal-img-area img {
  width: 100%; height: 100%; object-fit: contain; display: block;
}
.pp-modal-body { padding: 28px 32px 32px; }
.pp-modal-tag {
  display: inline-block; padding: 4px 12px; border-radius: 20px;
  background: var(--orange);
  font-family: 'Montserrat', sans-serif; font-weight: 700;
  font-size: 9.5px; letter-spacing: 1.2px; text-transform: uppercase;
  color: #fff; margin-bottom: 14px;
}
.pp-modal-name {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 22px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .3px;
  margin-bottom: 8px;
}
.pp-modal-meta {
  display: flex; gap: 20px; flex-wrap: wrap;
  margin-bottom: 16px; font-family: 'Montserrat', sans-serif;
  font-size: 12px; font-weight: 700;
}
.pp-modal-meta-item { display: flex; align-items: center; gap: 6px; }
.pp-modal-meta-label { color: var(--gray-text); font-weight: 400; }
.pp-modal-meta-val { color: var(--navy); }
.pp-modal-meta-val.cold { color: #0ea5e9; }
.pp-modal-desc {
  font-size: 13.5px; color: #4a5568; line-height: 1.85; margin-bottom: 22px;
}
.pp-modal-features-title {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 10.5px;
  color: var(--navy); text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px;
}
.pp-modal-feats { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
.pp-modal-feat {
  display: flex; align-items: center; gap: 7px;
  padding: 6px 12px; border-radius: 4px;
  background: var(--gray-bg); border: 1px solid var(--border-light);
  font-family: 'Montserrat', sans-serif; font-weight: 700;
  font-size: 10.5px; color: var(--navy);
  text-transform: uppercase; letter-spacing: .6px;
}
.pp-modal-feat-check {
  width: 18px; height: 18px; border-radius: 50%;
  background: var(--orange);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.pp-modal-actions { display: flex; gap: 12px; }
.btn-pp-modal-primary {
  flex: 1; background: var(--orange); color: #fff; border: none;
  padding: 13px 0; border-radius: 4px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12px;
  text-transform: uppercase; letter-spacing: .8px;
  cursor: pointer; transition: background .2s;
  display: flex; align-items: center; justify-content: center; gap: 8px;
}
.btn-pp-modal-primary:hover { background: var(--orange-dark); }
.btn-pp-modal-secondary {
  flex: 1; background: transparent; color: var(--navy);
  border: 1.5px solid var(--navy); padding: 13px 0; border-radius: 4px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12px;
  text-transform: uppercase; letter-spacing: .8px;
  cursor: pointer; transition: border-color .2s, color .2s;
}
.btn-pp-modal-secondary:hover { border-color: var(--orange); color: var(--orange); }

/* ─ RESPONSIVE ─ */
@media (max-width: 1100px) {
  .pp-inner { padding: 0 24px; }
  .pp-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .pp-process-grid { grid-template-columns: repeat(2, 1fr); }
  .pp-hero-stat { min-width: 80px; }
}
@media (max-width: 768px) {
  .pp-hero { padding: 56px 0 44px; }
  .pp-hero-title { font-size: clamp(22px, 6vw, 32px); }
  .pp-hero-stats { gap: 0; max-width: 100%; }
  .pp-hero-stat { padding-right: 20px; margin-right: 20px; }
  .pp-hero-stat-val { font-size: 22px; }
  .pp-filter-bar { position: static; }
  .pp-filter-inner { height: auto; flex-wrap: wrap; gap: 0; padding: 0 16px; }
  .pp-filter-tabs { width: 100%; border-bottom: 1px solid var(--border-light); }
  .pp-filter-count { width: 100%; padding: 8px 0 12px; font-size: 11px; }
  .pp-filter-tab { padding: 0 14px; font-size: 10.5px; height: 48px; line-height: 48px; }
  .pp-grid-section { padding: 40px 0 56px; }
  .pp-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .pp-process { padding: 56px 0; }
  .pp-process-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .section-title { font-size: 24px; }
  .pp-cert-strip { padding: 32px 0; }
  .pp-cert-items-row { gap: 20px 0; flex-wrap: wrap; }
  .pp-cert-item { min-width: 45%; border-right: none; border-bottom: 1px solid rgba(255,255,255,.07); padding: 12px 16px; }
  .pp-cert-item:nth-child(odd) { border-right: 1px solid rgba(255,255,255,.07); }
  .pp-cta { padding: 56px 0; }
  .pp-cta-inner { flex-direction: column; align-items: flex-start; gap: 28px; }
  .pp-cta-right { width: 100%; }
  .section-header { flex-direction: column; align-items: flex-start; }
}
@media (max-width: 480px) {
  .pp-inner { padding: 0 16px; }
  .pp-hero { padding: 40px 0 36px; }
  .pp-hero-stat-val { font-size: 20px; }
  .pp-hero-stat-lbl { font-size: 9px; }
  .pp-hero-stats { flex-wrap: wrap; gap: 16px; border-top: none; padding-top: 0; max-width: 100%; }
  .pp-hero-stat { border-right: none; margin-right: 0; padding-right: 0; flex: 0 0 40%; }
  .pp-grid { grid-template-columns: 1fr; gap: 16px; }
  .pp-process-grid { grid-template-columns: 1fr; }
  .pp-card-img-wrap { height: 180px; }
  .pp-cert-item { min-width: 100%; border-right: none !important; }
  .pp-cta-right { flex-direction: column; }
  .pp-cta-right .btn-primary,
  .pp-cta-right .btn-outline-navy { width: 100%; justify-content: center; }
  .pp-modal { margin: 0 8px; }
  .pp-modal-body { padding: 20px 18px 24px; }
  .pp-modal-actions { flex-direction: column; }
}
`;

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function ProductPage({ onNavigate = () => { } }) {
  /* ── Firebase products (defaults shown immediately) ── */
  const liveProducts = useProductsData(PRODUCTS);

  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered = activeCategory === "ALL"
    ? PRODUCTS
    : liveProducts.filter(p => p.category === activeCategory);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PRODUCT_CSS }} />

      <div className="tm-page">

        {/* ══════════════════════════════
                    PAGE HERO
                ═══════════════════════════════ */}
        <section className="pp-hero" aria-label="Products page header">
          <div className="pp-inner pp-hero-inner">


            <div className="pp-hero-eyebrow">Product Range</div>
            <h1 className="pp-hero-title">
              Frozen Chicken<br />
              <span className="hl">Products & Cuts</span>
            </h1>
            <div className="pp-hero-divider" aria-hidden="true" />
            <p className="pp-hero-desc">
              Toughman supplies whole chicken, portioned cuts, and individually packed products to supermarkets, restaurants, and food service distributors across the Philippines. All products are halal certified, HACCP-compliant, and maintained at -18°C from processing to delivery.
            </p>

            <div className="pp-hero-stats" role="list" aria-label="Key figures">
              {PAGE_STATS.map(s => (
                <div className="pp-hero-stat" key={s.lbl} role="listitem">
                  <div className="pp-hero-stat-val">{s.val}</div>
                  <div className="pp-hero-stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
                    FILTER BAR
                ═══════════════════════════════ */}
        <div className="pp-filter-bar" role="navigation" aria-label="Product filter">
          <div className="pp-inner pp-filter-inner">
            <div className="pp-filter-tabs" role="tablist" aria-label="Filter by category">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.key}
                  role="tab"
                  aria-selected={activeCategory === cat.key}
                  className={`pp-filter-tab${activeCategory === cat.key ? " active" : ""}`}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="pp-filter-count" aria-live="polite">
              Showing <b>{filtered.length}</b> product{filtered.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════
                    PRODUCT GRID
                ═══════════════════════════════ */}
        <section className="pp-grid-section" aria-label="Product catalogue">
          <div className="pp-inner">
            <div className="pp-grid" role="list">
              {filtered.map(p => (
                <article className="pp-card" key={p.id} role="listitem">
                  <div className="pp-card-img-wrap">
                    {p.img ? (
                      <img
                        src={p.img}
                        alt={`Toughman ${p.name} — halal certified frozen chicken`}
                        loading="lazy"
                        onError={e => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                    ) : null}
                    <div className="pp-card-img-fallback" style={{ display: p.img ? "none" : "flex" }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                      </svg>
                      <span className="pp-card-img-fallback-text">Product Photo</span>
                    </div>
                    <div className="pp-card-tag">{p.tag}</div>
                    <div className="pp-card-temp" aria-label={`Storage temperature: ${p.temp}`}>
                      <IconSnowflake size={12} />
                      {p.temp}
                    </div>
                  </div>
                  <div className="pp-card-body">
                    <div className="pp-card-name">{p.name}</div>
                    <div className="pp-card-weight" aria-label={`Net weight: ${p.weight}`}>
                      <IconScale size={12} />
                      {p.weight}
                    </div>
                    <p className="pp-card-desc">{p.desc}</p>
                    <div className="pp-card-features" aria-label="Product features">
                      {p.features.map(f => (
                        <span className="pp-card-feat" key={f}>{f}</span>
                      ))}
                    </div>
                    <div className="pp-card-actions">
                      <button
                        className="btn-pp-primary"
                        onClick={() => setSelectedProduct(p)}
                        aria-label={`View details for ${p.name}`}
                      >
                        View Details
                      </button>
                      <button
                        className="btn-pp-inquire"
                        onClick={() => onNavigate("contact")}
                        aria-label={`Inquire about ${p.name}`}
                      >
                        Inquire
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
                    PROCESS SECTION
                ═══════════════════════════════ */}
        <section className="pp-process" aria-labelledby="process-heading">
          <div className="pp-inner">
            <span className="section-eyebrow">How We Operate</span>
            <h2 className="section-title light" id="process-heading">
              From Farm to Delivery
            </h2>
            <p className="section-desc light" style={{ marginBottom: 0 }}>
              A straightforward look at how our products are handled — from sourcing through
              to the cold chain delivery that reaches your facility.
            </p>
            <div className="pp-process-grid">
              {PROCESS_STEPS.map(step => (
                <div className="pp-process-card" key={step.num}>
                  <div className="pp-process-num" aria-hidden="true">{step.num}</div>
                  <div className="pp-process-icon-wrap" aria-hidden="true">
                    {step.icon}
                  </div>
                  <div className="pp-process-step-title">{step.title}</div>
                  <p className="pp-process-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
                    CTA
                ═══════════════════════════════ */}
        <section className="pp-cta" aria-label="Bulk order call to action">
          <div className="pp-inner pp-cta-inner">
            <div className="pp-cta-left">
              <span className="section-eyebrow">Wholesale &amp; Distribution</span>
              <span className="orange-accent" aria-hidden="true" />
              <h2 className="section-title" style={{ fontSize: 28 }}>
                Inquire About Bulk Supply
              </h2>
              <p className="section-desc">
                We work with supermarkets, restaurants, hotel chains, and regional distributors
                that need reliable, high-volume frozen chicken supply. Get in touch with our
                sales team to discuss product availability, pricing, and delivery coverage.
              </p>
            </div>
            <div className="pp-cta-right">
              <button className="btn-primary" onClick={() => onNavigate("contact")}>
                <IconPhone size={15} />
                Contact Sales
              </button>
              <button className="btn-outline-navy" onClick={() => onNavigate("about")}>
                About Toughman <IconArrow size={12} />
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
                    PRODUCT MODAL
                ═══════════════════════════════ */}
        {selectedProduct && (
          <div
            className="pp-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={`Product details: ${selectedProduct.name}`}
            onClick={e => { if (e.target === e.currentTarget) setSelectedProduct(null); }}
          >
            <div className="pp-modal">
              <button
                className="pp-modal-close"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close product details"
              >
                <IconX size={16} />
              </button>

              <div className="pp-modal-img-area">
                <img
                  src={selectedProduct.img}
                  alt={`Toughman ${selectedProduct.name}`}
                  onError={e => { e.target.style.display = "none"; }}
                />
              </div>

              <div className="pp-modal-body">
                <div className="pp-modal-tag">{selectedProduct.tag}</div>
                <div className="pp-modal-name">{selectedProduct.name}</div>

                <div className="pp-modal-meta">
                  <div className="pp-modal-meta-item">
                    <span className="pp-modal-meta-label">Net Weight</span>
                    <span className="pp-modal-meta-val">{selectedProduct.weight}</span>
                  </div>
                  <div className="pp-modal-meta-item">
                    <span className="pp-modal-meta-label">Storage</span>
                    <span className="pp-modal-meta-val cold">{selectedProduct.temp}</span>
                  </div>
                </div>

                <p className="pp-modal-desc">{selectedProduct.desc}</p>

                <div className="pp-modal-features-title">Key Features</div>
                <div className="pp-modal-feats">
                  {selectedProduct.features.map(f => (
                    <span className="pp-modal-feat" key={f}>
                      <span className="pp-modal-feat-check" aria-hidden="true">
                        <IconCheck size={9} />
                      </span>
                      {f}
                    </span>
                  ))}
                </div>

                <div className="pp-modal-actions">
                  <button
                    className="btn-pp-modal-primary"
                    onClick={() => { setSelectedProduct(null); onNavigate("contact"); }}
                  >
                    <IconPhone size={14} />
                    Inquire Now
                  </button>
                  <button
                    className="btn-pp-modal-secondary"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}