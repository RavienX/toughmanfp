import { useState } from "react";
import productWholeChicken from "../assets/thumb-whole-chicken.png";
import productChickenCuts from "../assets/thumb-chicken-cuts.png";
import productChickenParts from "../assets/product-chicken-parts.png";
import productIndividuallyPacked from "../assets/thumb-individually-packed.png";

// ─── DATA ───────────────────────────────────────────────────────────────────

const CATEGORIES = ["ALL", "WHOLE CHICKEN", "CUTS", "PARTS", "PACKED"];

const PRODUCTS = [
    {
        id: 1,
        name: "Whole Chicken",
        category: "WHOLE CHICKEN",
        img: productWholeChicken,
        tag: "BEST SELLER",
        tagColor: "var(--orange)",
        weight: "1.2 – 1.8 kg",
        temp: "-18°C",
        desc: "Premium whole chicken processed and frozen at peak freshness. Ideal for roasting, grilling, or traditional Filipino dishes. Raised without hormones, certified HACCP-compliant.",
        features: ["Hormone-free", "HACCP Certified", "IQF Frozen", "Halal Certified"],
    },
    {
        id: 2,
        name: "Chicken Cuts",
        category: "CUTS",
        img: productChickenCuts,
        tag: "POPULAR",
        tagColor: "#1a3a6b",
        weight: "500g – 1 kg",
        temp: "-18°C",
        desc: "Precision-cut chicken portions ready for your kitchen. Each cut is individually quick-frozen to lock in flavour, moisture, and nutritional value.",
        features: ["Precision Cut", "IQF Frozen", "Vacuum Sealed", "Halal Certified"],
    },
    {
        id: 3,
        name: "Chicken Parts",
        category: "PARTS",
        img: productChickenParts,
        tag: "VERSATILE",
        tagColor: "#2a6b1a",
        weight: "300g – 800g",
        temp: "-18°C",
        desc: "Selected premium chicken parts including breast, thigh, drumstick, and wings. Perfect for restaurants, catering, and home cooking.",
        features: ["Multiple Cuts", "Consistent Weight", "Cold Chain", "NMIS Approved"],
    },
    {
        id: 4,
        name: "Individually Packed",
        category: "PACKED",
        img: productIndividuallyPacked,
        tag: "HYGIENIC",
        tagColor: "#6b1a4a",
        weight: "150g – 300g",
        temp: "-18°C",
        desc: "Single-serve portions sealed in food-grade packaging for maximum hygiene and convenience. Perfect for retail, food delivery, and on-the-go meal prep.",
        features: ["Single-Serve", "Tamper-Proof", "Extended Shelf Life", "Retail Ready"],
    },
    {
        id: 5,
        name: "Breast Fillet",
        category: "PARTS",
        img: productChickenParts,
        tag: "HIGH PROTEIN",
        tagColor: "#1a5a6b",
        weight: "200g – 400g",
        temp: "-18°C",
        desc: "Boneless, skinless breast fillets — lean, tender, and protein-packed. Perfect for health-conscious consumers, gyms, and meal-prep businesses.",
        features: ["Boneless", "Skinless", "High Protein", "Halal Certified"],
    },
    {
        id: 6,
        name: "Mixed Pack Bundle",
        category: "PACKED",
        img: productIndividuallyPacked,
        tag: "VALUE PACK",
        tagColor: "#d96a10",
        weight: "2 – 3 kg",
        temp: "-18°C",
        desc: "A curated bundle of our best-selling cuts — great value for families and small businesses. Every piece individually frozen and hygienically packed.",
        features: ["Bundle Value", "Assorted Cuts", "Family Size", "Free Delivery"],
    },
];

const PROCESS_STEPS = [
    { num: "01", icon: "🐔", title: "Farm Sourcing", desc: "Ethically raised, hormone-free chickens from accredited Philippine farms." },
    { num: "02", icon: "🔬", title: "Quality Inspection", desc: "Veterinary-grade inspection at each stage — ante and post-mortem." },
    { num: "03", icon: "⚙️", title: "Modern Processing", desc: "ISO-certified, fully automated lines ensure hygiene and precision." },
    { num: "04", icon: "❄️", title: "IQF Freezing", desc: "Individual quick freezing locks in freshness at -18°C or below." },
    { num: "05", icon: "📦", title: "Hygienic Packaging", desc: "Food-grade vacuum sealing prevents contamination and extends shelf life." },
    { num: "06", icon: "🚚", title: "Cold Chain Delivery", desc: "Real-time temperature-monitored logistics straight to your door." },
];

const CERTS_MINI = [
    { label: "HACCP", sub: "Food Safety" },
    { label: "ISO 22000", sub: "Certified" },
    { label: "GMP", sub: "Compliant" },
    { label: "HALAL", sub: "Certified" },
    { label: "NMIS", sub: "Approved" },
];

// ─── STYLES ──────────────────────────────────────────────────────────────────

const PRODUCT_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Open+Sans:wght@400;600&display=swap');

/* ─ ROOT RESET — kills every black gap ─ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html {
  width: 100%; margin: 0; padding: 0;
  background: #f5f7fa;
}
body {
  width: 100% !important; min-width: 320px !important;
  margin: 0 !important; padding: 0 !important;
  overflow-x: hidden !important;
  font-family: 'Open Sans', sans-serif;
  background: #f5f7fa !important;
  color: #1a2340;
}
#root, #__next {
  width: 100% !important; margin: 0 !important; padding: 0 !important;
  background: #f5f7fa !important;
}
.tm-page {
  width: 100% !important; min-width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important; padding: 0 !important;
  overflow-x: hidden !important;
  background: #f5f7fa !important;
}

:root {
  --navy: #0d1b3e; --navy-dark: #060f23; --blue: #1a3a6b;
  --orange: #f47b20; --orange-dark: #d96a10;
  --gray-light: #f5f7fa; --gray: #7a8499;
}

/* ─ SHARED INNER ─ */
.pp-inner {
  width: 100%; max-width: 1280px;
  margin: 0 auto; padding: 0 40px;
  box-sizing: border-box;
}

/* ─ PAGE HERO ─ */
.pp-hero {
  background: var(--navy);
  padding: 72px 0 56px;
  position: relative; overflow: hidden;
  display: block; width: 100%;
}
.pp-hero::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 80% at 80% 50%, rgba(244,123,32,0.07) 0%, transparent 70%),
    repeating-linear-gradient(-45deg,
      transparent, transparent 38px,
      rgba(255,255,255,0.018) 38px, rgba(255,255,255,0.018) 39px);
  pointer-events: none; z-index: 0;
}
.pp-hero .pp-inner { position: relative; z-index: 1; text-align: center; }
.pp-breadcrumb {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  font-family: 'Montserrat', sans-serif; font-size: 11px;
  color: rgba(255,255,255,.4); letter-spacing: 1px; text-transform: uppercase;
  margin-bottom: 22px;
}
.pp-breadcrumb-btn {
  background: none; border: none; cursor: pointer;
  font-family: 'Montserrat', sans-serif; font-size: 11px;
  color: rgba(255,255,255,.4); letter-spacing: 1px; text-transform: uppercase;
  padding: 0; transition: color .2s;
}
.pp-breadcrumb-btn:hover { color: var(--orange); }
.pp-breadcrumb-sep { color: rgba(255,255,255,.2); }
.pp-breadcrumb-cur { color: var(--orange); }
.pp-hero-label {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase;
  margin-bottom: 16px; display: block;
}
.pp-hero-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(32px, 5vw, 56px);
  line-height: 1.05; color: #fff; text-transform: uppercase;
  letter-spacing: -0.5px; margin-bottom: 0;
}
.pp-hero-title .hl { color: var(--orange); }
.pp-hero-divider {
  width: 50px; height: 3.5px; background: var(--orange);
  border-radius: 2px; margin: 18px auto;
}
.pp-hero-desc {
  font-size: 14px; color: rgba(255,255,255,.65); line-height: 1.85;
  max-width: 560px; margin: 0 auto 32px; text-align: center;
}
.pp-hero-stats {
  display: flex; gap: 36px; flex-wrap: wrap; justify-content: center;
  padding-top: 28px; border-top: 1px solid rgba(255,255,255,.1);
}
.pp-hero-stat-val {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 28px;
  color: var(--orange); line-height: 1;
}
.pp-hero-stat-lbl {
  font-size: 11px; color: rgba(255,255,255,.45); text-transform: uppercase;
  letter-spacing: .8px; margin-top: 4px;
}

/* ─ FILTER BAR ─ */
.pp-filter-bar {
  background: #fff; border-bottom: 1px solid #eaeaea;
  position: sticky; top: 90px; z-index: 100;
  box-shadow: 0 2px 12px rgba(0,0,0,.06);
  width: 100%;
}
.pp-filter-bar .pp-inner {
  display: flex; align-items: center; justify-content: space-between; gap: 20px;
  height: 60px; padding-top: 0; padding-bottom: 0;
}
.pp-filter-tabs { display: flex; gap: 0; overflow-x: auto; }
.pp-filter-tabs::-webkit-scrollbar { display: none; }
.pp-filter-tab {
  padding: 0 18px; height: 60px; line-height: 60px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11.5px;
  color: var(--gray); text-transform: uppercase; letter-spacing: .8px;
  border: none; background: none; cursor: pointer;
  border-bottom: 3px solid transparent; transition: color .2s, border-color .2s;
  white-space: nowrap; flex-shrink: 0;
}
.pp-filter-tab.active, .pp-filter-tab:hover { color: var(--navy); border-bottom-color: var(--orange); }
.pp-filter-count {
  font-family: 'Montserrat', sans-serif; font-size: 12px; color: var(--gray);
  white-space: nowrap; flex-shrink: 0;
}
.pp-filter-count b { color: var(--navy); }

/* ─ PRODUCT GRID ─ */
.pp-grid-section {
  background: var(--gray-light); padding: 60px 0 80px; width: 100%;
}
.pp-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

/* ─ PRODUCT CARD ─ */
.pp-card {
  background: #fff; border-radius: 16px; overflow: hidden;
  border: 1px solid #eaeaea; box-shadow: 0 4px 24px rgba(0,0,0,.06);
  transition: box-shadow .25s, transform .25s;
  display: flex; flex-direction: column;
}
.pp-card:hover { box-shadow: 0 12px 48px rgba(13,27,62,.14); transform: translateY(-4px); }
.pp-card-img-wrap {
  position: relative;
  background: linear-gradient(135deg, #0d2a4a 0%, #1a3a6b 50%, #0d1b3e 100%);
  height: 220px; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
}
.pp-card-img-wrap img {
  width: 100%; height: 100%; object-fit: contain; object-position: center;
  transition: transform .35s; display: block;
}
.pp-card:hover .pp-card-img-wrap img { transform: scale(1.05); }
.pp-card-tag {
  position: absolute; top: 14px; left: 14px; padding: 4px 12px; border-radius: 20px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 9.5px;
  letter-spacing: 1.2px; text-transform: uppercase; color: #fff; z-index: 2;
}
.pp-card-temp {
  position: absolute; top: 14px; right: 14px;
  background: rgba(9,22,48,.75); backdrop-filter: blur(6px);
  border: 1px solid rgba(255,255,255,.2); padding: 5px 10px; border-radius: 6px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: #7dd3fc; letter-spacing: .5px;
}
.pp-card-body { padding: 24px 22px 20px; display: flex; flex-direction: column; flex: 1; }
.pp-card-name {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 16px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .4px; margin-bottom: 4px;
}
.pp-card-weight {
  font-size: 11.5px; color: var(--orange); font-family: 'Montserrat', sans-serif;
  font-weight: 700; letter-spacing: .5px; margin-bottom: 12px;
}
.pp-card-desc { font-size: 12.5px; color: var(--gray); line-height: 1.75; margin-bottom: 16px; flex: 1; }
.pp-card-features { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }
.pp-card-feat {
  font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700;
  letter-spacing: .6px; text-transform: uppercase; padding: 4px 10px; border-radius: 4px;
  background: var(--gray-light); color: var(--navy); border: 1px solid #dde2ec;
}
.pp-card-actions { display: flex; gap: 10px; margin-top: auto; }
.btn-pp-primary {
  flex: 1; background: var(--navy); color: #fff; border: none;
  padding: 11px 0; border-radius: 6px; font-family: 'Montserrat', sans-serif;
  font-weight: 700; font-size: 11.5px; letter-spacing: .8px; text-transform: uppercase;
  cursor: pointer; transition: background .2s;
}
.btn-pp-primary:hover { background: var(--blue); }
.btn-pp-outline {
  padding: 11px 14px; border-radius: 6px; border: 2px solid var(--orange);
  background: transparent; color: var(--orange); font-family: 'Montserrat', sans-serif;
  font-weight: 700; font-size: 11.5px; cursor: pointer; transition: background .2s, color .2s;
}
.btn-pp-outline:hover { background: var(--orange); color: #fff; }

/* ─ PROCESS SECTION ─ */
.pp-process { background: var(--navy); padding: 72px 0; width: 100%; }
.pp-section-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px;
}
.pp-section-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 30px;
  color: #fff; text-transform: uppercase; letter-spacing: .6px;
  margin-bottom: 10px; line-height: 1.15;
}
.pp-section-sub {
  font-size: 13.5px; color: rgba(255,255,255,.55); line-height: 1.8;
  max-width: 520px; margin-bottom: 48px;
}
.pp-process-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.pp-process-card {
  background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.09);
  border-radius: 14px; padding: 28px 24px;
  transition: background .2s, border-color .2s;
  position: relative; overflow: hidden;
}
.pp-process-card:hover { background: rgba(255,255,255,.07); border-color: rgba(244,123,32,.3); }
.pp-process-num {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 42px;
  color: rgba(244,123,32,.15); letter-spacing: -2px; line-height: 1;
  position: absolute; top: 16px; right: 20px;
}
.pp-process-icon { font-size: 32px; margin-bottom: 14px; display: block; }
.pp-process-step-title {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 13px;
  color: #fff; text-transform: uppercase; letter-spacing: .4px; margin-bottom: 10px;
}
.pp-process-step-desc { font-size: 12.5px; color: rgba(255,255,255,.55); line-height: 1.75; }

/* ─ CERT BANNER ─ */
.pp-cert-banner {
  background: linear-gradient(90deg, var(--navy-dark) 0%, var(--blue) 50%, var(--navy-dark) 100%);
  padding: 40px 0; width: 100%;
  border-top: 1px solid rgba(255,255,255,.08);
  border-bottom: 1px solid rgba(255,255,255,.08);
}
.pp-cert-banner .pp-inner {
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;
}
.pp-cert-title {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 11px;
  color: rgba(255,255,255,.5); letter-spacing: 3px; text-transform: uppercase;
}
.pp-cert-list { display: flex; gap: 0; align-items: center; flex-wrap: wrap; }
.pp-cert-badge {
  display: flex; flex-direction: column; align-items: center;
  padding: 0 28px; border-right: 1px solid rgba(255,255,255,.1); text-align: center;
}
.pp-cert-badge:last-child { border-right: none; }
.pp-cert-badge-name {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 14px;
  color: #fff; letter-spacing: .3px;
}
.pp-cert-badge-sub {
  font-size: 10px; color: rgba(255,255,255,.4); margin-top: 3px;
  text-transform: uppercase; letter-spacing: .5px;
}

/* ─ CTA ─ */
.pp-cta { background: #fff; padding: 72px 0; width: 100%; }
.pp-cta .pp-inner {
  display: flex; align-items: center; justify-content: space-between; gap: 40px;
  flex-wrap: wrap;
}
.pp-cta-left { flex: 1; min-width: 280px; }
.pp-cta-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px;
}
.pp-cta-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 30px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .5px;
  line-height: 1.15; margin-bottom: 14px;
}
.pp-cta-desc { font-size: 13.5px; color: var(--gray); line-height: 1.8; max-width: 460px; }
.pp-cta-right { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
.btn-pp-cta-primary {
  background: var(--orange); color: #fff; border: none;
  padding: 15px 32px; border-radius: 6px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12.5px;
  cursor: pointer; letter-spacing: .8px; text-transform: uppercase;
  transition: background .2s; display: inline-flex; align-items: center; gap: 8px;
  white-space: nowrap;
}
.btn-pp-cta-primary:hover { background: var(--orange-dark); }
.btn-pp-cta-outline {
  background: transparent; color: var(--navy);
  border: 2px solid var(--navy); padding: 15px 32px; border-radius: 6px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12.5px;
  cursor: pointer; letter-spacing: .8px; text-transform: uppercase;
  transition: all .2s; white-space: nowrap;
}
.btn-pp-cta-outline:hover { border-color: var(--orange); color: var(--orange); }

/* ─ MODAL ─ */
.pp-modal-backdrop {
  position: fixed; inset: 0; background: rgba(5,13,31,.88);
  backdrop-filter: blur(6px); z-index: 999;
  display: flex; align-items: center; justify-content: center;
  padding: 24px;
}
.pp-modal {
  background: #fff; border-radius: 20px;
  max-width: 700px; width: 100%;
  max-height: 90vh; overflow-y: auto;
  position: relative;
  box-shadow: 0 24px 80px rgba(0,0,0,.5);
  animation: ppModalIn .25s ease;
}
@keyframes ppModalIn {
  from { opacity: 0; transform: scale(.94) translateY(12px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
.pp-modal-close {
  position: absolute; top: 18px; right: 18px;
  width: 36px; height: 36px; border-radius: 50%;
  background: var(--gray-light); border: none; cursor: pointer;
  font-size: 18px; display: flex; align-items: center; justify-content: center;
  color: var(--navy); transition: background .2s; z-index: 5;
}
.pp-modal-close:hover { background: #e2e6ed; }
.pp-modal-img {
  width: 100%; height: 280px; object-fit: contain;
  background: linear-gradient(135deg, #0d2a4a 0%, #1a3a6b 50%, #0d1b3e 100%);
  display: block; border-radius: 20px 20px 0 0;
}
.pp-modal-body { padding: 28px 32px 32px; }
.pp-modal-tag {
  display: inline-block; padding: 4px 12px; border-radius: 20px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 9.5px;
  letter-spacing: 1.2px; text-transform: uppercase; color: #fff;
  margin-bottom: 12px;
}
.pp-modal-name {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 24px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .3px;
  margin-bottom: 6px;
}
.pp-modal-weight {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 13px;
  color: var(--orange); margin-bottom: 16px; letter-spacing: .3px;
}
.pp-modal-weight span { color: var(--gray); font-weight: 400; margin-right: 12px; font-size: 12px; }
.pp-modal-desc {
  font-size: 13.5px; color: #4a5568; line-height: 1.85; margin-bottom: 22px;
}
.pp-modal-features-title {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 11px;
  color: var(--navy); text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px;
}
.pp-modal-feats { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
.pp-modal-feat {
  display: flex; align-items: center; gap: 6px;
  padding: 7px 14px; border-radius: 6px;
  background: var(--gray-light); border: 1px solid #dde2ec;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10.5px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .6px;
}
.pp-modal-feat::before { content: '✓'; color: var(--orange); font-weight: 900; }
.pp-modal-actions { display: flex; gap: 12px; }
.btn-pp-modal-primary {
  flex: 1; background: var(--orange); color: #fff; border: none;
  padding: 13px 0; border-radius: 8px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12.5px;
  text-transform: uppercase; letter-spacing: .8px; cursor: pointer; transition: background .2s;
}
.btn-pp-modal-primary:hover { background: var(--orange-dark); }
.btn-pp-modal-secondary {
  flex: 1; background: transparent; color: var(--navy);
  border: 2px solid var(--navy); padding: 13px 0; border-radius: 8px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12.5px;
  text-transform: uppercase; letter-spacing: .8px; cursor: pointer; transition: all .2s;
}
.btn-pp-modal-secondary:hover { border-color: var(--orange); color: var(--orange); }

/* ─ RESPONSIVE ─ */
@media (max-width: 1100px) {
  .pp-inner { padding: 0 24px; }
  .pp-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .pp-process-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .pp-hero { padding: 52px 0 40px; }
  .pp-hero-title { font-size: clamp(28px, 7vw, 40px); }
  .pp-hero-stats { gap: 20px; }
  .pp-hero-stat-val { font-size: 22px; }
  .pp-filter-bar { position: static; }
  .pp-filter-bar .pp-inner { height: auto; padding: 0 16px; flex-wrap: wrap; gap: 0; }
  .pp-filter-tabs { width: 100%; border-bottom: 1px solid #eaeaea; overflow-x: auto; }
  .pp-filter-count { width: 100%; padding: 8px 0 12px; font-size: 11px; }
  .pp-filter-tab { padding: 0 14px; font-size: 10.5px; height: 48px; line-height: 48px; }
  .pp-grid-section { padding: 40px 0 60px; }
  .pp-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .pp-process { padding: 52px 0; }
  .pp-process-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .pp-section-title { font-size: 24px; }
  .pp-cert-banner .pp-inner { flex-direction: column; gap: 16px; text-align: center; }
  .pp-cert-list { justify-content: center; }
  .pp-cert-badge { padding: 8px 16px; }
  .pp-cta { padding: 52px 0; }
  .pp-cta .pp-inner { flex-direction: column; align-items: flex-start; gap: 28px; }
  .pp-cta-title { font-size: 24px; }
}
@media (max-width: 480px) {
  .pp-inner { padding: 0 16px; }
  .pp-hero { padding: 40px 0 32px; }
  .pp-hero-stats { gap: 12px; }
  .pp-hero-stat-val { font-size: 20px; }
  .pp-hero-stat-lbl { font-size: 9px; }
  .pp-grid { grid-template-columns: 1fr; gap: 16px; }
  .pp-process-grid { grid-template-columns: 1fr; }
  .pp-card-img-wrap { height: 180px; }
  .pp-cta-right { width: 100%; }
  .btn-pp-cta-primary, .btn-pp-cta-outline { width: 100%; justify-content: center; }
  .pp-modal { margin: 0 8px; }
  .pp-modal-body { padding: 20px 18px 24px; }
  .pp-modal-actions { flex-direction: column; }
}
`;

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function ProductPage({ onNavigate = () => { } }) {
    const [activeCategory, setActiveCategory] = useState("ALL");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filtered = activeCategory === "ALL"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: PRODUCT_CSS }} />

            {/* ═══ PAGE HERO ═══ */}
            <section className="pp-hero">
                <div className="pp-inner">
                    <div className="pp-breadcrumb">
                        <button className="pp-breadcrumb-btn" onClick={() => onNavigate("home")}>Home</button>
                        <span className="pp-breadcrumb-sep">›</span>
                        <span className="pp-breadcrumb-cur">Products</span>
                    </div>
                    <span className="pp-hero-label">Our Products</span>
                    <h1 className="pp-hero-title">
                        Premium Frozen<br />
                        <span className="hl">Chicken Products</span>
                    </h1>
                    <div className="pp-hero-divider" />
                    <p className="pp-hero-desc">
                        From the farm to your freezer — every Toughman product is processed under the
                        strictest hygiene standards, individually quick-frozen, and certified by
                        internationally recognised food safety authorities.
                    </p>
                    <div className="pp-hero-stats">
                        {[
                            { val: "4+", lbl: "Product Lines" },
                            { val: "-18°C", lbl: "Cold Chain" },
                            { val: "100%", lbl: "HACCP Certified" },
                            { val: "500+", lbl: "Happy Clients" },
                        ].map(s => (
                            <div key={s.lbl}>
                                <div className="pp-hero-stat-val">{s.val}</div>
                                <div className="pp-hero-stat-lbl">{s.lbl}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FILTER BAR ═══ */}
            <div className="pp-filter-bar">
                <div className="pp-inner">
                    <div className="pp-filter-tabs">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                className={`pp-filter-tab${activeCategory === cat ? " active" : ""}`}
                                onClick={() => setActiveCategory(cat)}
                            >{cat}</button>
                        ))}
                    </div>
                    <div className="pp-filter-count">
                        Showing <b>{filtered.length}</b> product{filtered.length !== 1 ? "s" : ""}
                    </div>
                </div>
            </div>

            {/* ═══ PRODUCT GRID ═══ */}
            <section className="pp-grid-section">
                <div className="pp-inner">
                    <div className="pp-grid">
                        {filtered.map(p => (
                            <div className="pp-card" key={p.id}>
                                <div className="pp-card-img-wrap">
                                    <img
                                        src={p.img}
                                        alt={p.name}
                                        onError={e => { e.target.style.display = "none"; }}
                                    />
                                    <div className="pp-card-tag" style={{ background: p.tagColor }}>{p.tag}</div>
                                    <div className="pp-card-temp">❄️ {p.temp}</div>
                                </div>
                                <div className="pp-card-body">
                                    <div className="pp-card-name">{p.name}</div>
                                    <div className="pp-card-weight">⚖️ {p.weight}</div>
                                    <div className="pp-card-desc">{p.desc}</div>
                                    <div className="pp-card-features">
                                        {p.features.map(f => (
                                            <span className="pp-card-feat" key={f}>{f}</span>
                                        ))}
                                    </div>
                                    <div className="pp-card-actions">
                                        <button
                                            className="btn-pp-primary"
                                            onClick={() => setSelectedProduct(p)}
                                        >View Details</button>
                                        <button className="btn-pp-outline">🛒</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ PROCESS SECTION ═══ */}
            <section className="pp-process">
                <div className="pp-inner">
                    <span className="pp-section-label">From Farm to Freezer</span>
                    <h2 className="pp-section-title">Our Production Process</h2>
                    <p className="pp-section-sub">
                        Every step of our process is designed to preserve freshness,
                        ensure safety, and deliver consistent quality to your table.
                    </p>
                    <div className="pp-process-grid">
                        {PROCESS_STEPS.map(step => (
                            <div className="pp-process-card" key={step.num}>
                                <div className="pp-process-num">{step.num}</div>
                                <span className="pp-process-icon">{step.icon}</span>
                                <div className="pp-process-step-title">{step.title}</div>
                                <div className="pp-process-step-desc">{step.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CERT BANNER ═══ */}
            <div className="pp-cert-banner">
                <div className="pp-inner">
                    <div className="pp-cert-title">Our Certifications</div>
                    <div className="pp-cert-list">
                        {CERTS_MINI.map(c => (
                            <div className="pp-cert-badge" key={c.label}>
                                <div className="pp-cert-badge-name">{c.label}</div>
                                <div className="pp-cert-badge-sub">{c.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ═══ CTA ═══ */}
            <section className="pp-cta">
                <div className="pp-inner">
                    <div className="pp-cta-left">
                        <span className="pp-cta-label">Bulk Orders & Partnerships</span>
                        <h2 className="pp-cta-title">Ready to Order<br />in Bulk?</h2>
                        <p className="pp-cta-desc">
                            We supply to supermarkets, restaurants, caterers, and distributors across the
                            Philippines. Get in touch with our sales team for a custom quote and delivery
                            arrangement.
                        </p>
                    </div>
                    <div className="pp-cta-right">
                        <button className="btn-pp-cta-primary" onClick={() => onNavigate("contact")}>
                            📞 Contact Sales
                        </button>
                        <button className="btn-pp-cta-outline" onClick={() => onNavigate("about")}>
                            Learn About Us
                        </button>
                    </div>
                </div>
            </section>

            {/* ═══ PRODUCT MODAL ═══ */}
            {selectedProduct && (
                <div
                    className="pp-modal-backdrop"
                    onClick={e => { if (e.target === e.currentTarget) setSelectedProduct(null); }}
                >
                    <div className="pp-modal">
                        <button className="pp-modal-close" onClick={() => setSelectedProduct(null)}>✕</button>
                        <img
                            src={selectedProduct.img}
                            alt={selectedProduct.name}
                            className="pp-modal-img"
                            onError={e => { e.target.style.display = "none"; }}
                        />
                        <div className="pp-modal-body">
                            <div
                                className="pp-modal-tag"
                                style={{ background: selectedProduct.tagColor }}
                            >{selectedProduct.tag}</div>
                            <div className="pp-modal-name">{selectedProduct.name}</div>
                            <div className="pp-modal-weight">
                                <span>Weight:</span>{selectedProduct.weight}
                                &nbsp;&nbsp;
                                <span>Storage:</span>
                                <span style={{ color: "#7dd3fc", fontWeight: 700 }}>{selectedProduct.temp}</span>
                            </div>
                            <p className="pp-modal-desc">{selectedProduct.desc}</p>
                            <div className="pp-modal-features-title">Key Features</div>
                            <div className="pp-modal-feats">
                                {selectedProduct.features.map(f => (
                                    <span className="pp-modal-feat" key={f}>{f}</span>
                                ))}
                            </div>
                            <div className="pp-modal-actions">
                                <button className="btn-pp-modal-primary">🛒 Add to Cart</button>
                                <button
                                    className="btn-pp-modal-secondary"
                                    onClick={() => { setSelectedProduct(null); onNavigate("contact"); }}
                                >Inquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}