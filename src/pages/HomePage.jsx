import { useState, useRef } from "react";
import { useHomepageData, useProductsData, useNewsData } from "../hooks/useSiteData";
import heroChicken from "../assets/hero-chicken.png";
import thumbWholeChicken from "../assets/thumb-whole-chicken.png";
import thumbChickenCuts from "../assets/thumb-chicken-cuts.png";
import thumbIndividuallyPacked from "../assets/thumb-individually-packed.png";
import aboutFacility from "../assets/about-facility.png";
import newsHaccp from "../assets/news-haccp.png";
import newsQuality from "../assets/news-quality.png";
import newsColdChain from "../assets/about-facility.png";
import productWholeChicken from "../assets/thumb-whole-chicken.png";
import productChickenCuts from "../assets/thumb-chicken-cuts.png";
import productChickenParts from "../assets/product-chicken-parts.png";
import productIndividuallyPacked from "../assets/thumb-individually-packed.png";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const HERO_FEATURES = [
    {
        icon: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
                <polyline points="9 12 11 14 15 10" />
            </svg>
        ),
        title: "Hygiene Safety",
        desc: "Certified food-safe standards",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                <circle cx="12" cy="12" r="2" />
                <line x1="12" y1="2" x2="10" y2="5" /><line x1="12" y1="2" x2="14" y2="5" />
                <line x1="12" y1="22" x2="10" y2="19" /><line x1="12" y1="22" x2="14" y2="19" />
                <line x1="2" y1="12" x2="5" y2="10" /><line x1="2" y1="12" x2="5" y2="14" />
                <line x1="22" y1="12" x2="19" y2="10" /><line x1="22" y1="12" x2="19" y2="14" />
            </svg>
        ),
        title: "Keep Frozen",
        desc: "-18°C and below",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="1" />
                <path d="M16 8h4l3 5v3h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
        ),
        title: "Reliable Delivery",
        desc: "On-time, every time",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
        title: "Premium Grade",
        desc: "Guaranteed freshness",
    },
];

const STATS = [
    { value: "10+", label: "Years in Operation" },
    { value: "500+", label: "Business Partners" },
    { value: "100%", label: "Halal Certified" },
    { value: "-18°C", label: "Cold Chain Standard" },
];

const FEATURES_STRIP = [
    {
        icon: (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="1" />
                <path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2" />
                <line x1="12" y1="12" x2="12" y2="16" />
                <line x1="10" y1="14" x2="14" y2="14" />
            </svg>
        ),
        title: "Modern Processing",
        desc: "Our facility operates with state-of-the-art equipment designed to meet international food safety requirements at every stage of production.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
                <polyline points="9 12 11 14 15 10" strokeWidth="2" />
            </svg>
        ),
        title: "Quality Assurance",
        desc: "We enforce rigorous inspection protocols at every checkpoint — from incoming raw materials to final packaging before dispatch.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                <circle cx="12" cy="12" r="2.5" fill="#fff" stroke="none" />
            </svg>
        ),
        title: "Cold Chain System",
        desc: "Maintained at -18°C from processing through transport, our cold chain logistics protect product integrity from our facility to your door.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="7" r="4" />
                <path d="M2 21v-2a7 7 0 0 1 14 0v2" />
                <path d="M19 7a3 3 0 0 1 0 6M23 21v-1.5A5.5 5.5 0 0 0 19 14" strokeWidth="1.5" />
            </svg>
        ),
        title: "Trusted by Distributors",
        desc: "We supply retailers, food service operators, and wholesale distributors across the Philippines with consistent volume and quality.",
    },
];

const ABOUT_POINTS = [
    "Certified halal poultry, responsibly sourced and processed",
    "Strict temperature control throughout the entire supply chain",
    "Consistent supply capacity for wholesale and B2B accounts",
];

const PRODUCTS_LIST = [
    { name: "Whole Chicken", desc: "Premium whole chicken, cleaned and blast-frozen to lock in freshness from processing to delivery.", img: productWholeChicken },
    { name: "Chicken Cuts", desc: "Precision-cut portions suited for restaurants, caterers, and food retailers requiring consistent sizing.", img: productChickenCuts },
    { name: "Chicken Parts", desc: "Individual parts including breast, thigh, and drumstick — ideal for menu operators and bulk buyers.", img: productChickenParts },
    { name: "Individually Packed", desc: "Vacuum-sealed and individually packed to maintain hygiene standards and extend shelf life.", img: productIndividuallyPacked },
];

const CERTS = [
    {
        icon: (
            <svg viewBox="0 0 56 56" width="54" height="54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="50" height="50" rx="8" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" fill="rgba(255,255,255,.04)" />
                <polyline points="15,30 23,38 41,20" stroke="#e8611a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        name: "HACCP",
        sub: "Hazard Analysis & Critical Control Points",
    },
    {
        icon: (
            <svg viewBox="0 0 56 56" width="54" height="54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="25" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" fill="rgba(255,255,255,.04)" />
                <circle cx="28" cy="28" r="17" stroke="rgba(255,255,255,.12)" strokeWidth="1" fill="none" />
                <text x="28" y="26" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="900" fontFamily="Arial Black,Arial,sans-serif" stroke="none">ISO</text>
                <text x="28" y="38" textAnchor="middle" fill="#e8611a" fontSize="10" fontWeight="700" fontFamily="Arial,sans-serif" stroke="none">22000</text>
            </svg>
        ),
        name: "ISO 22000",
        sub: "Food Safety Mgmt System — 2018",
    },
    {
        icon: (
            <svg viewBox="0 0 56 56" width="54" height="54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="25" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" fill="rgba(255,255,255,.04)" />
                <circle cx="28" cy="28" r="16" stroke="rgba(255,255,255,.12)" strokeWidth="1" strokeDasharray="4 3" fill="none" />
                <text x="28" y="33" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="900" fontFamily="Arial Black,Arial,sans-serif" stroke="none">GMP</text>
            </svg>
        ),
        name: "GMP",
        sub: "Good Manufacturing Practice",
    },
    {
        icon: (
            <svg viewBox="0 0 56 56" width="54" height="54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 4 L50 13 L50 31 C50 44 40 52 28 55 C16 52 6 44 6 31 L6 13 Z" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" fill="rgba(255,255,255,.04)" />
                <path d="M28 11 L44 18 L44 31 C44 41 37 48 28 51 C19 48 12 41 12 31 L12 18 Z" stroke="rgba(255,255,255,.1)" strokeWidth="1" fill="none" />
                <text x="28" y="37" textAnchor="middle" fill="#e8611a" fontSize="20" fontFamily="Traditional Arabic,Scheherazade,serif" stroke="none">حلال</text>
            </svg>
        ),
        name: "Halal Certified",
        sub: "Certified Halal Product",
    },
    {
        icon: (
            <svg viewBox="0 0 56 56" width="54" height="54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="50" height="50" rx="8" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" fill="rgba(255,255,255,.04)" />
                <path d="M28 13 l3.5 7 l7.5 1.1 l-5.4 5.3 l1.3 7.5 L28 30.5 l-6.9 3.4 l1.3-7.5 L16.9 21.1 l7.5-1.1 Z" fill="none" stroke="#e8611a" strokeWidth="1.8" strokeLinejoin="round" />
                <line x1="14" y1="41" x2="42" y2="41" stroke="rgba(255,255,255,.15)" strokeWidth="1" strokeLinecap="round" />
                <line x1="18" y1="46" x2="38" y2="46" stroke="rgba(255,255,255,.08)" strokeWidth="1" strokeLinecap="round" />
            </svg>
        ),
        name: "NMIS Inspected",
        sub: "DA — Nat'l Meat Inspection Service",
    },
    {
        icon: (
            <svg viewBox="0 0 56 56" width="54" height="54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="25" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" fill="rgba(255,255,255,.04)" />
                <circle cx="28" cy="28" r="16" stroke="rgba(255,255,255,.18)" strokeWidth="1" fill="none" />
                <circle cx="28" cy="28" r="8" stroke="rgba(255,255,255,.1)" strokeWidth="1" fill="none" />
                <circle cx="28" cy="28" r="3.5" fill="#e8611a" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
                    <line key={a}
                        x1={28 + 18 * Math.cos(a * Math.PI / 180)}
                        y1={28 + 18 * Math.sin(a * Math.PI / 180)}
                        x2={28 + 23 * Math.cos(a * Math.PI / 180)}
                        y2={28 + 23 * Math.sin(a * Math.PI / 180)}
                        stroke="rgba(255,255,255,.4)" strokeWidth="1.5" strokeLinecap="round"
                    />
                ))}
            </svg>
        ),
        name: "Quality Assured",
        sub: "Internal Standards Seal",
    },
];

const THUMB_PRODUCTS = [
    { img: thumbWholeChicken, name: "Whole Chicken" },
    { img: thumbChickenCuts, name: "Chicken Cuts" },
    { img: thumbIndividuallyPacked, name: "Individually Packed" },
];

const NEWS = [
    {
        day: "20", month: "Jun", year: "2025",
        img: newsHaccp,
        tag: "Certification",
        title: "Toughman Achieves HACCP Re-Certification",
        excerpt: "Following a comprehensive audit of our processing and safety protocols, we have successfully renewed our HACCP certification — reaffirming our commitment to food safety.",
    },
    {
        day: "15", month: "May", year: "2025",
        img: newsQuality,
        tag: "Operations",
        title: "Maintaining Standards From Farm to Freezer",
        excerpt: "A closer look at how our multi-stage quality inspection process ensures consistency, hygiene, and product integrity across every batch we process.",
    },
    {
        day: "10", month: "Apr", year: "2025",
        img: newsColdChain,
        tag: "Logistics",
        title: "Expanding Cold Chain Capacity Nationwide",
        excerpt: "We have expanded our refrigerated fleet and distribution network to improve delivery reliability and reach more business partners across Luzon, Visayas, and Mindanao.",
    },
];

/* ─────────────────────────────────────────────
   SHARED SVG ICONS
───────────────────────────────────────────── */

const IconArrow = ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
);
const IconChevronLeft = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="15 18 9 12 15 6" />
    </svg>
);
const IconChevronRight = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);
const IconCheck = ({ size = 13, color = "#fff" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);
const IconPlay = ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff" stroke="none" aria-hidden="true">
        <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
);

/* ─────────────────────────────────────────────
   STYLES
───────────────────────────────────────────── */

const HOME_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}
body {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  font-family: 'Open Sans', sans-serif;
  background: #fff;
  color: #1a2340;
}
#root, [data-reactroot] {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}
a { text-decoration: none; color: inherit; }

/* ─── CSS VARS ─── */
:root {
  --navy:          #0a1628;
  --navy-mid:      #0a1628;
  --navy-light:    #1a3a6b;
  --orange:        #e8611a;
  --orange-dark:   #c9500f;
  --orange-dim:    rgba(232,97,26,.12);
  --gray-bg:       #f5f7fa;
  --gray-text:     #6b7589;
  --border-light:  #e4e8ef;
}

/* ─── LAYOUT ─── */
.tm-page   { width: 100%; overflow-x: hidden; }
.hp-inner  { max-width: 1280px; margin: 0 auto; padding: 0 40px; }
.section-eyebrow {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 10.5px;
  color: var(--orange);
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 30px;
  color: var(--navy);
  line-height: 1.15;
  letter-spacing: -.3px;
  margin-bottom: 14px;
}
.section-desc {
  font-size: 14px;
  color: var(--gray-text);
  line-height: 1.85;
  max-width: 560px;
}
.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 40px;
  gap: 24px;
}
.orange-accent {
  display: block;
  width: 40px;
  height: 3.5px;
  background: var(--orange);
  border-radius: 2px;
  margin-bottom: 14px;
}

/* ─────────── HERO ─────────── */
.hero {
  width: 100%;
  background: #050d1f;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: stretch;
}
.hero-bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
  display: block;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(5,13,31,0.97) 0%,
    rgba(5,13,31,0.93) 28%,
    rgba(5,13,31,0.72) 48%,
    rgba(5,13,31,0.22) 68%,
    rgba(5,13,31,0.0) 100%
  );
  z-index: 1;
}
.hero-inner {
  width: 100%;
  display: flex;
  align-items: stretch;
  position: relative;
  z-index: 2;
}

/* LEFT COLUMN */
.hero-left {
  flex: 0 0 52%;
  padding: 60px 48px 40px 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  z-index: 3;
}
.hero-eyebrow {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: var(--orange);
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.hero-eyebrow::before {
  content: '';
  display: inline-block;
  width: 28px;
  height: 2px;
  background: var(--orange);
  border-radius: 2px;
  flex-shrink: 0;
}
.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 56px;
  line-height: 1.05;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: -0.5px;
  margin-bottom: 18px;
}
.hero-title .hl { color: var(--orange); }
.hero-divider {
  width: 48px;
  height: 3px;
  background: var(--orange);
  border-radius: 2px;
  margin-bottom: 20px;
}
.hero-desc {
  font-size: 14px;
  color: rgba(255,255,255,.68);
  line-height: 1.85;
  max-width: 480px;
  margin-bottom: 34px;
}
.hero-btns {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 44px;
}
.btn-primary {
  background: var(--orange);
  color: #fff;
  border: none;
  padding: 14px 28px;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 12px;
  cursor: pointer;
  letter-spacing: .8px;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  transition: background .2s, box-shadow .2s, transform .15s;
  box-shadow: 0 4px 16px rgba(232,97,26,.4);
  text-decoration: none;
}
.btn-primary:hover {
  background: var(--orange-dark);
  box-shadow: 0 6px 22px rgba(232,97,26,.5);
  transform: translateY(-1px);
}
.btn-outline-light {
  background: transparent;
  color: #fff;
  border: 1.5px solid rgba(255,255,255,.5);
  padding: 14px 28px;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  letter-spacing: .8px;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  transition: border-color .2s, color .2s;
}
.btn-outline-light:hover {
  border-color: var(--orange);
  color: var(--orange);
}

/* Hero features row */
.hero-features-row {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  padding-top: 28px;
  border-top: 1px solid rgba(255,255,255,.1);
  width: 100%;
}
.hero-feat-item {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
.hero-feat-icon {
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border: 1.5px solid rgba(255,255,255,.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,.05);
}
.hero-feat-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  color: #fff;
  line-height: 1.2;
  white-space: nowrap;
}
.hero-feat-sub {
  font-size: 10.5px;
  color: rgba(255,255,255,.45);
  margin-top: 2px;
  white-space: nowrap;
}

/* RIGHT COLUMN */
.hero-right {
  flex: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 2;
}
.hero-img-area {
  flex: 1;
  position: relative;
  padding-bottom: 158px;
}

/* Thumbnail row */
.hero-thumbs {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 6;
  height: 158px;
}
.hero-thumb {
  flex: 1;
  background: rgba(7,16,38,.88);
  border-right: 1px solid rgba(255,255,255,.08);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: background .2s;
  overflow: hidden;
}
.hero-thumb:last-child { border-right: none; }
.hero-thumb:hover { background: rgba(14,32,65,.92); }
.hero-thumb-active { background: rgba(14,32,65,.92) !important; border-top: 2px solid var(--orange); }
.hero-thumb-img {
  flex: 1;
  overflow: hidden;
  background: rgba(8,18,44,.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-thumb-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  transition: transform .3s;
}
.hero-thumb:hover .hero-thumb-img img { transform: scale(1.05); }
.hero-thumb-img-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,.03);
}
.hero-thumb-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  height: 44px;
  flex-shrink: 0;
  background: rgba(8,18,44,.95);
  border-top: 1px solid rgba(255,255,255,.07);
}
.hero-thumb-arrow {
  width: 24px;
  height: 24px;
  background: var(--orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.hero-thumb-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: .6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ─────────── FEATURES STRIP ─────────── */
.features-wrap {
  background: var(--gray-bg);
  padding: 56px 0 48px;
}
.features-card {
  background: #fff;
  border-radius: 12px;
  border: 1px solid var(--border-light);
  box-shadow: 0 4px 24px rgba(0,0,0,.07);
  display: flex;
  overflow: hidden;
}
.feat-item {
  flex: 1;
  padding: 30px 24px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  border-right: 1px solid var(--border-light);
  transition: background .2s;
}
.feat-item:last-child { border-right: none; }
.feat-item:hover { background: #fafbfc; }
.feat-icon-box {
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  background: var(--navy);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.feat-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 12.5px;
  color: var(--navy);
  text-transform: uppercase;
  letter-spacing: .5px;
  margin-bottom: 7px;
}
.feat-desc {
  font-size: 12px;
  color: var(--gray-text);
  line-height: 1.7;
  margin-bottom: 12px;
}
.feat-link {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: var(--orange);
  text-decoration: none;
  background: none;
  border: none;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  letter-spacing: .5px;
  text-transform: uppercase;
  transition: opacity .2s, gap .2s;
}
.feat-link:hover { opacity: .75; gap: 8px; }

/* ─────────── ABOUT ─────────── */
.about-section {
  background: var(--navy);
  padding: 80px 0;
}
.about-inner {
  display: flex;
  align-items: center;
  gap: 64px;
}
.about-left {
  flex: 0 0 44%;
}
.about-left .section-title { color: #fff; font-size: 32px; }
.about-left .section-desc  { color: rgba(255,255,255,.65); max-width: 100%; }
.check-list {
  list-style: none;
  margin: 24px 0 32px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 13px;
}
.check-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 13.5px;
  color: rgba(255,255,255,.8);
  line-height: 1.5;
}
.check-icon {
  width: 22px;
  height: 22px;
  background: var(--orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}
.btn-outline-white {
  background: transparent;
  color: #fff;
  border: 1.5px solid rgba(255,255,255,.45);
  padding: 13px 28px;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  cursor: pointer;
  letter-spacing: .8px;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: border-color .2s, color .2s;
}
.btn-outline-white:hover { border-color: var(--orange); color: var(--orange); }
.about-right {
  flex: 1;
  border-radius: 14px;
  overflow: hidden;
  border: 1.5px solid rgba(255,255,255,.1);
  box-shadow: 0 12px 48px rgba(0,0,0,.35);
}
.about-img-wrap {
  position: relative;
  overflow: hidden;
  background: #0a1e3a;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-facility-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  display: block;
}
.about-img-fallback {
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #0d2a4a 0%, #1a3a6b 60%, #0a1628 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.about-img-fallback-icon {
  opacity: .4;
}
.about-img-fallback-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  color: rgba(255,255,255,.35);
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.about-play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 64px;
  height: 64px;
  background: var(--orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 3px solid rgba(255,255,255,.6);
  box-shadow: 0 4px 24px rgba(232,97,26,.5);
  transition: transform .2s, box-shadow .2s;
  z-index: 4;
  padding-left: 3px;
}
.about-play-btn:hover {
  transform: translate(-50%,-50%) scale(1.08);
  box-shadow: 0 6px 32px rgba(232,97,26,.7);
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #060f1e;
}
.stat-card {
  padding: 20px 12px;
  text-align: center;
  border-right: 1px solid rgba(255,255,255,.07);
}
.stat-card:last-child { border-right: none; }
.stat-value {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 26px;
  color: var(--orange);
  margin-bottom: 4px;
  line-height: 1;
}
.stat-label {
  font-size: 9.5px;
  color: rgba(255,255,255,.45);
  text-transform: uppercase;
  letter-spacing: .6px;
  line-height: 1.5;
}

/* ─────────── CERT STRIP ─────────── */
.cert-strip {
  background: #060f1e;
  padding: 38px 0;
  border-top: 1px solid rgba(255,255,255,.06);
  border-bottom: 1px solid rgba(255,255,255,.06);
}
.cert-strip-heading {
  width: 100%;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 11px;
  color: rgba(255,255,255,.4);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 28px;
}
.cert-items-row {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0;
}
.cert-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  padding: 28px 20px;
  flex: 1;
  border-right: 1px solid rgba(255,255,255,.1);
  min-width: 140px;
}
.cert-item:last-child { border-right: none; }
.cert-item-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: .9;
}
.cert-item-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: .5px;
  line-height: 1.2;
  margin-bottom: 4px;
}
.cert-item-sub {
  font-size: 10.5px;
  color: rgba(255,255,255,.4);
  line-height: 1.45;
}

/* ─────────── PRODUCTS ─────────── */
.products-section {
  padding: 76px 0 84px;
  background: var(--gray-bg);
}
.products-section .section-title { font-size: 28px; }
.btn-outline-navy {
  background: #fff;
  color: var(--navy);
  border: 1.5px solid var(--navy);
  padding: 12px 26px;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  cursor: pointer;
  letter-spacing: .6px;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  white-space: nowrap;
  transition: background .2s, color .2s;
  text-decoration: none;
}
.btn-outline-navy:hover { background: var(--navy); color: #fff; }
.products-carousel-wrap { position: relative; }
.products-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--navy);
  z-index: 10;
  box-shadow: 0 2px 12px rgba(0,0,0,.09);
  transition: background .2s, color .2s, border-color .2s;
}
.products-nav-btn:hover { background: var(--navy); color: #fff; border-color: var(--navy); }
.products-nav-left  { left: -22px; }
.products-nav-right { right: -22px; }
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.product-card {
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid var(--border-light);
  box-shadow: 0 2px 14px rgba(0,0,0,.05);
  transition: transform .22s, box-shadow .22s;
  display: flex;
  flex-direction: column;
}
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 36px rgba(0,0,0,.1);
}
.product-img-area {
  height: 220px;
  overflow: hidden;
  background: #eef0f5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.product-img-area img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .3s;
}
.product-card:hover .product-img-area img { transform: scale(1.03); }
.product-img-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #eef0f5;
}
.product-img-fallback-icon {
  opacity: .22;
}
.product-img-fallback-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  color: #aab;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.product-body {
  padding: 22px 20px 26px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.product-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 17px;
  color: var(--navy);
  margin-bottom: 10px;
}
.product-desc {
  font-size: 12.5px;
  color: var(--gray-text);
  line-height: 1.72;
  margin-bottom: 20px;
  flex: 1;
}
.product-link {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: var(--orange);
  text-transform: uppercase;
  letter-spacing: .5px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: opacity .2s, gap .2s;
  text-decoration: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  align-self: flex-start;
}
.product-link:hover { opacity: .75; gap: 8px; }

/* ─────────── NEWS ─────────── */
.news-section {
  padding: 80px 0;
  background: #fff;
}
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
}
.news-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--border-light);
  box-shadow: 0 2px 14px rgba(0,0,0,.055);
  transition: transform .22s, box-shadow .22s;
  display: flex;
  flex-direction: column;
}
.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 36px rgba(0,0,0,.09);
}
.news-img-wrap {
  height: 200px;
  overflow: hidden;
  position: relative;
  background: #e8ecf2;
}
.news-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .3s;
}
.news-card:hover .news-img-wrap img { transform: scale(1.04); }
.news-img-fallback {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a1628, #1a3a6b);
  display: flex;
  align-items: center;
  justify-content: center;
}
.news-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--orange);
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 4px 9px;
  border-radius: 3px;
}
.news-body {
  padding: 22px 22px 26px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  flex: 1;
}
.news-date-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-right: 16px;
  border-right: 2px solid #e8ecf0;
  min-width: 50px;
}
.news-month {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 10.5px;
  color: var(--orange);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2px;
}
.news-day {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 30px;
  color: var(--navy);
  line-height: 1;
}
.news-year {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 10.5px;
  color: var(--gray-text);
  margin-top: 2px;
}
.news-content { flex: 1; }
.news-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 14px;
  color: var(--navy);
  line-height: 1.4;
  margin-bottom: 9px;
}
.news-excerpt {
  font-size: 12px;
  color: var(--gray-text);
  line-height: 1.75;
  margin-bottom: 16px;
}
.news-read-more {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: var(--orange);
  text-transform: uppercase;
  letter-spacing: .5px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: opacity .2s, gap .2s;
  text-decoration: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
.news-read-more:hover { opacity: .75; gap: 8px; }

/* ─────────── PRODUCTS CAROUSEL SCROLL ─────────── */
.products-scroll-track {
  display: flex;
  gap: 20px;
  overflow: hidden;
  scroll-behavior: smooth;
}
.products-scroll-track .product-card {
  flex: 0 0 calc(25% - 15px);
  min-width: 220px;
}
@media (max-width: 960px) {
  .products-scroll-track .product-card { flex: 0 0 calc(50% - 10px); }
}
@media (max-width: 580px) {
  .products-scroll-track .product-card { flex: 0 0 100%; }
}

/* ─────────── RESPONSIVE ─────────── */
@media (max-width: 1100px) {
  .hero-title { font-size: 44px; }
  .hp-inner { padding: 0 28px; }
  .feat-item { padding: 26px 18px; }
}
@media (max-width: 960px) {
  .products-grid { grid-template-columns: repeat(2, 1fr); }
  .cert-item { padding: 0 14px; }
}
@media (max-width: 860px) {
  .about-inner { flex-direction: column; gap: 40px; }
  .about-left { flex: none; width: 100%; }
  .features-card { flex-direction: column; }
  .feat-item { border-right: none; border-bottom: 1px solid var(--border-light); }
  .feat-item:last-child { border-bottom: none; }
  .cert-items-row { gap: 20px 0; flex-wrap: wrap; }
  .cert-item { min-width: 45%; border-right: none; border-bottom: 1px solid rgba(255,255,255,.07); padding: 12px 16px; }
  .cert-item:nth-child(odd) { border-right: 1px solid rgba(255,255,255,.07); }
}
@media (max-width: 768px) {
  .hero-inner { flex-direction: column; }
  .hero-left { flex: none; padding: 44px 24px 32px; }
  .hero-title { font-size: 34px; }
  .hero-right { min-height: 360px; }
  .news-grid { grid-template-columns: 1fr 1fr; }
  .hp-inner { padding: 0 20px; }
  .section-header { flex-direction: column; align-items: flex-start; gap: 16px; }
}
@media (max-width: 580px) {
  .products-grid, .news-grid { grid-template-columns: 1fr; }
  .hero-features-row { gap: 16px; }
  .hero-title { font-size: 28px; }
  .hero-feat-title { font-size: 11.5px; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .stat-card:nth-child(2) { border-right: none; }
  .hero-thumbs { height: 130px; }
  .cert-item { min-width: 100%; border-right: none !important; }
}
@media (max-width: 400px) {
  .hero-left { padding: 36px 16px 28px; }
  .hp-inner { padding: 0 16px; }
  .hero-btns { flex-direction: column; }
  .btn-primary, .btn-outline-light { justify-content: center; width: 100%; }
}
`;

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */

export default function HomePage({ onNavigate = () => { } }) {
    /* ── Firebase data (defaults shown immediately, Firebase overlays when loaded) ── */
    const hpData = useHomepageData({
        hero: {
            tagline: "HALAL FROZEN CHICKEN SUPPLIER",
            headline: "Premium Frozen\nChicken Products",
            subheadline: "Supplying the Philippines",
            description: "Toughman Processing delivers certified halal frozen chicken to food service operators, wholesalers, and retailers across the Philippines — with full cold-chain compliance from facility to delivery.",
            ctaPrimary: "View Our Products",
            ctaSecondary: "Contact Sales",
        },
        stats: STATS,
        aboutSection: {
            eyebrow: "Who We Are",
            title: "Trusted Halal Frozen Chicken Processor",
            description: "Toughman Processing Corporation is a registered halal frozen chicken processor and distributor based in Zamboanga City, Philippines. We supply supermarkets, wet markets, food service operators, and institutional buyers with premium frozen chicken products.",
            points: ABOUT_POINTS,
        },
    });
    const liveStats = hpData.stats;
    const liveHero = hpData.hero;
    const liveAbout = hpData.aboutSection;

    const liveProducts = useProductsData(PRODUCTS_LIST.map((p, i) => ({ ...p, id: i + 1, imgUrl: p.img ? null : "" })));
    const liveNews = useNewsData(NEWS);

    /* ── Carousel state ── */
    const [heroSlide, setHeroSlide] = useState(0);
    const productsTrackRef = useRef(null);

    const heroSlides = THUMB_PRODUCTS;
    const totalHeroSlides = heroSlides.length;

    function prevHeroSlide() {
        setHeroSlide(s => (s - 1 + totalHeroSlides) % totalHeroSlides);
    }
    function nextHeroSlide() {
        setHeroSlide(s => (s + 1) % totalHeroSlides);
    }

    function scrollProducts(dir) {
        const track = productsTrackRef.current;
        if (!track) return;
        const cardWidth = track.querySelector(".product-card")?.offsetWidth || 260;
        track.scrollBy({ left: dir * (cardWidth + 20), behavior: "smooth" });
    }

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: HOME_CSS }} />
            <main className="tm-page">

                {/* ══════════════════════════════
                    HERO
                ═══════════════════════════════ */}
                <section className="hero" aria-label="Homepage hero">
                    <img className="hero-bg-img" src={heroChicken} alt="Fresh halal chicken — Toughman Processing" loading="lazy" />
                    <div className="hero-overlay" aria-hidden="true" />
                    <div className="hero-inner">

                        {/* Left: Text */}
                        <div className="hero-left">
                            <span className="hero-eyebrow">
                                Halal Certified &nbsp;·&nbsp; Premium Frozen Poultry
                            </span>
                            <h1 className="hero-title">
                                CERTIFIED HALAL CHICKEN<br />
                                YOUR BUSINESS CAN <span className="hl">RELY ON</span>
                            </h1>
                            <div className="hero-divider" />
                            <p className="hero-desc">
                                Tougman Frozen Product Processing operates a fully integrated processing and cold chain
                                distribution network, supplying retailers, food service operators, and wholesale
                                distributors across the Philippines with consistent volume and certified quality.
                            </p>
                            <div className="hero-btns">
                                <button className="btn-primary" onClick={() => onNavigate("products")}>
                                    View Our Products <IconArrow size={13} />
                                </button>
                                <button className="btn-outline-light" onClick={() => onNavigate("contact")}>
                                    Request a Quote <IconArrow size={13} />
                                </button>
                            </div>
                            <div className="hero-features-row">
                                {HERO_FEATURES.map(f => (
                                    <div className="hero-feat-item" key={f.title}>
                                        <div className="hero-feat-icon">{f.icon}</div>
                                        <div>
                                            <div className="hero-feat-title">{f.title}</div>
                                            <div className="hero-feat-sub">{f.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Image area */}
                        <div className="hero-right">
                            <div className="hero-img-area">
                            </div>
                            <div className="hero-thumbs">
                                {THUMB_PRODUCTS.map((p, i) => (
                                    <div
                                        className={`hero-thumb${heroSlide === i ? " hero-thumb-active" : ""}`}
                                        key={p.name}
                                        onClick={() => setHeroSlide(i)}
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`View ${p.name}`}
                                        onKeyDown={e => e.key === "Enter" && setHeroSlide(i)}
                                    >
                                        <div className="hero-thumb-img">
                                            <img
                                                src={p.img}
                                                alt={`Toughman ${p.name} — halal frozen poultry`}
                                                loading="lazy"
                                                onError={e => {
                                                    e.target.style.display = "none";
                                                    e.target.nextSibling.style.display = "flex";
                                                }}
                                            />
                                            <div className="hero-thumb-img-fallback" style={{ display: "none" }}>
                                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                                    <polyline points="21 15 16 10 5 21" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="hero-thumb-bar">
                                            <span className="hero-thumb-arrow" aria-hidden="true">
                                                <IconArrow size={11} />
                                            </span>
                                            <span className="hero-thumb-name">{p.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* ══════════════════════════════
                    FEATURES STRIP
                ═══════════════════════════════ */}
                <div className="features-wrap">
                    <div className="hp-inner">
                        <div className="features-card">
                            {FEATURES_STRIP.map(f => (
                                <div className="feat-item" key={f.title}>
                                    <div className="feat-icon-box" aria-hidden="true">{f.icon}</div>
                                    <div>
                                        <div className="feat-title">{f.title}</div>
                                        <div className="feat-desc">{f.desc}</div>
                                        <button
                                            className="feat-link"
                                            onClick={() => onNavigate("about")}
                                        >
                                            Learn more <IconArrow size={11} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ══════════════════════════════
                    ABOUT
                ═══════════════════════════════ */}
                <section className="about-section" aria-labelledby="about-heading">
                    <div className="hp-inner">
                        <div className="about-inner">
                            <div className="about-left">
                                <span className="section-eyebrow">About Toughman</span>
                                <h2 className="section-title" id="about-heading">
                                    A Reliable Supply Partner for the Food Industry
                                </h2>
                                <p className="section-desc">
                                    Based in the Philippines,Tougman Frozen Product Processing operates an integrated
                                    poultry processing facility with full cold chain logistics. We work directly
                                    with distributors, supermarkets, hotels, and food service businesses that
                                    require consistent supply, certified standards, and professional account management.
                                </p>
                                <ul className="check-list">
                                    {(liveAbout.points || ABOUT_POINTS).map(item => (
                                        <li key={item}>
                                            <span className="check-icon" aria-hidden="true">
                                                <IconCheck size={11} />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button className="btn-outline-white" onClick={() => onNavigate("about")}>
                                    About Our Company <IconArrow size={13} />
                                </button>
                            </div>
                            <div className="about-right">
                                <div className="about-img-wrap">
                                    <img
                                        src={aboutFacility}
                                        alt="Toughman halal poultry processing facility and cold chain delivery fleet"
                                        className="about-facility-img"
                                        loading="lazy"
                                        onError={e => {
                                            e.target.style.display = "none";
                                            e.target.nextSibling.style.display = "flex";
                                        }}
                                    />
                                    <div className="about-img-fallback" style={{ display: "none" }}>
                                        <div className="about-img-fallback-icon">
                                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="1" y="3" width="15" height="13" rx="1" />
                                                <path d="M16 8h4l3 5v3h-7V8z" />
                                                <circle cx="5.5" cy="18.5" r="2.5" />
                                                <circle cx="18.5" cy="18.5" r="2.5" />
                                            </svg>
                                        </div>
                                        <div className="about-img-fallback-text">Facility &amp; Logistics</div>
                                    </div>
                                    <button className="about-play-btn" aria-label="Play facility video">
                                        <IconPlay size={22} />
                                    </button>
                                </div>
                                <div className="stats-grid">
                                    {liveStats.map(s => (
                                        <div className="stat-card" key={s.label}>
                                            <div className="stat-value">{s.value}</div>
                                            <div className="stat-label">{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════
                    CERTIFICATIONS STRIP
                ═══════════════════════════════ */}
                <div className="cert-strip">
                    <div className="hp-inner" style={{ display: "flex", flexDirection: "column" }}>
                        <div className="cert-strip-heading">Certifications &amp; Compliance</div>
                        <div className="cert-items-row">
                            {CERTS.map((c, i) => (
                                <div className="cert-item" key={i}>
                                    <div className="cert-item-icon" aria-hidden="true">{c.icon}</div>
                                    <div>
                                        <div className="cert-item-name">{c.name}</div>
                                        {c.sub && <div className="cert-item-sub">{c.sub}</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ══════════════════════════════
                    PRODUCTS
                ═══════════════════════════════ */}
                <section className="products-section" aria-labelledby="products-heading">
                    <div className="hp-inner">
                        <div className="section-header">
                            <div>
                                <span className="section-eyebrow">Our Products</span>
                                <h2 className="section-title" id="products-heading">
                                    Premium Frozen Chicken Products
                                </h2>
                                <p className="section-desc" style={{ marginTop: 0 }}>
                                    Processed, frozen, and packed to meet the demands of food service and retail operations.
                                </p>
                            </div>
                            <button
                                className="btn-outline-navy"
                                onClick={() => onNavigate("products")}
                            >
                                View All Products <IconArrow size={12} />
                            </button>
                        </div>
                        <div className="products-carousel-wrap">
                            <button className="products-nav-btn products-nav-left" aria-label="Previous products" onClick={() => scrollProducts(-1)}>
                                <IconChevronLeft size={18} />
                            </button>
                            <div className="products-scroll-track" ref={productsTrackRef}>
                                {liveProducts.map(p => (
                                    <div className="product-card" key={p.name}>
                                        <div className="product-img-area">
                                            {p.img
                                                ? (
                                                    <img
                                                        src={p.img}
                                                        alt={`Toughman ${p.name} — halal certified frozen chicken`}
                                                        loading="lazy"
                                                        onError={e => {
                                                            e.target.style.display = "none";
                                                            e.target.nextSibling.style.display = "flex";
                                                        }}
                                                    />
                                                )
                                                : null
                                            }
                                            <div className="product-img-fallback" style={{ display: p.img ? "none" : "flex" }}>
                                                <div className="product-img-fallback-icon">
                                                    <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#b0b6c8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                                        <rect x="3" y="3" width="18" height="18" rx="2" />
                                                        <circle cx="8.5" cy="8.5" r="1.5" />
                                                        <polyline points="21 15 16 10 5 21" />
                                                    </svg>
                                                </div>
                                                <div className="product-img-fallback-label">Product Photo</div>
                                            </div>
                                        </div>
                                        <div className="product-body">
                                            <div className="product-name">{p.name}</div>
                                            <div className="product-desc">{p.desc}</div>
                                            <button
                                                className="product-link"
                                                onClick={() => onNavigate("products")}
                                            >
                                                View Details <IconArrow size={11} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="products-nav-btn products-nav-right" aria-label="Next products" onClick={() => scrollProducts(1)}>
                                <IconChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════
                    NEWS
                ═══════════════════════════════ */}
                <section className="news-section" aria-labelledby="news-heading">
                    <div className="hp-inner">
                        <div className="section-header">
                            <div>
                                <h2 className="section-title" id="news-heading">
                                    Latest News &amp; Updates
                                </h2>
                                <p className="section-desc" style={{ marginTop: 0 }}>
                                    Company announcements, certifications, and operational updates from Toughman.
                                </p>
                            </div>
                            <button
                                className="btn-outline-navy"
                                onClick={() => onNavigate("news")}
                            >
                                View All News <IconArrow size={12} />
                            </button>
                        </div>
                        <div className="news-grid">
                            {liveNews.map(n => (
                                <article className="news-card" key={n.title}>
                                    <div className="news-img-wrap">
                                        {n.img
                                            ? <img src={n.img} alt={`Toughman news: ${n.title}`} loading="lazy" />
                                            : (
                                                <div className="news-img-fallback">
                                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <rect x="3" y="3" width="18" height="18" rx="2" />
                                                        <circle cx="8.5" cy="8.5" r="1.5" />
                                                        <polyline points="21 15 16 10 5 21" />
                                                    </svg>
                                                </div>
                                            )
                                        }
                                        {n.tag && <span className="news-tag">{n.tag}</span>}
                                    </div>
                                    <div className="news-body">
                                        <div className="news-date-col" aria-label={`${n.month} ${n.day}, ${n.year}`}>
                                            <div className="news-month">{n.month}</div>
                                            <div className="news-day">{n.day}</div>
                                            <div className="news-year">{n.year}</div>
                                        </div>
                                        <div className="news-content">
                                            <div className="news-title">{n.title}</div>
                                            <p className="news-excerpt">{n.excerpt}</p>
                                            <button
                                                className="news-read-more"
                                                onClick={() => onNavigate("news")}
                                            >
                                                Read More <IconArrow size={11} />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}