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

// ─── DATA ───────────────────────────────────────────────────────────────────

const FEATURES = [
    { icon: "shield", title: "Hygiene Safety", desc: "High safety standards" },
    { icon: "snowflake", title: "Keep Frozen", desc: "-18°C and below" },
    { icon: "truck", title: "Fast & Reliable", desc: "On-time delivery" },
    { icon: "star", title: "Best Quality", desc: "Guaranteed fresh" },
];

const STATS = [
    { value: "10+", label: "Years of Experience" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "100%", label: "Quality Commitment" },
    { value: "-18°C", label: "Cold Chain Maintained" },
];


const NEWS = [
    { day: "20", month: "Jun", year: "2025", img: newsHaccp, title: "Toughman Achieves HACCP Re-Certification", excerpt: "We are proud to announce that we have successfully passed the HACCP re-certification." },
    { day: "15", month: "May", year: "2025", img: newsQuality, title: "Maintaining Quality in Every Step of Processing", excerpt: "Discover how our advanced techniques ensure standards from farm to freeze." },
    { day: "10", month: "Apr", year: "2025", img: newsColdChain, title: "Expanding Our Cold Chain Logistics", excerpt: "We continue to invest in modern logistics to serve you better." },
];

const THUMB_PRODUCTS = [
    { img: thumbWholeChicken, name: "Whole Chicken" },
    { img: thumbChickenCuts, name: "Chicken Cuts" },
    { img: thumbIndividuallyPacked, name: "Individually Packed" },
];

const PRODUCTS_LIST = [
    { name: "Whole Chicken", desc: "Premium whole chicken, perfect and frozen for maximum freshness and quality.", img: productWholeChicken },
    { name: "Chicken Cuts", desc: "High-quality cuts, perfect for every culinary need.", img: productChickenCuts },
    { name: "Chicken Parts", desc: "Selected chicken parts, ideal for various recipes and easy to prepare.", img: productChickenParts },
    { name: "Individually Packed", desc: "Individually packed for convenience and maximum hygiene.", img: productIndividuallyPacked },
];

const FEATURES_STRIP = [
    {
        svg: (
            <svg viewBox="0 0 28 28" width="26" height="26" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="14" width="24" height="12" rx="1" />
                <path d="M2 14l6-6v6" /><path d="M8 14l6-6v6" /><path d="M14 14l6-6v6" />
                <rect x="5" y="18" width="4" height="8" /><rect x="12" y="18" width="4" height="8" />
                <rect x="19" y="18" width="4" height="4" />
                <path d="M10 6V2M14 6V2M18 6V2" strokeWidth="1.4" />
            </svg>
        ),
        title: "Modern Processing",
        desc: "State-of-the-art processes ensure hygiene, quality, and consistency in every product.",
    },
    {
        svg: (
            <svg viewBox="0 0 28 28" width="26" height="26" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2L4 7v7c0 6 4.5 10.5 10 12 5.5-1.5 10-6 10-12V7L14 2z" />
                <polyline points="9.5,14 12.5,17 18.5,11" strokeWidth="2" />
            </svg>
        ),
        title: "Quality Assurance",
        desc: "We follow strict quality standards to guarantee safe, healthy, and premium-grade products.",
    },
    {
        svg: (
            <svg viewBox="0 0 28 28" width="26" height="26" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <line x1="14" y1="2" x2="14" y2="26" />
                <line x1="2" y1="14" x2="26" y2="14" />
                <line x1="5.5" y1="5.5" x2="22.5" y2="22.5" />
                <line x1="22.5" y1="5.5" x2="5.5" y2="22.5" />
                <circle cx="14" cy="14" r="2.5" fill="#fff" stroke="none" />
                <line x1="14" y1="2" x2="11.5" y2="5.5" /><line x1="14" y1="2" x2="16.5" y2="5.5" />
                <line x1="14" y1="26" x2="11.5" y2="22.5" /><line x1="14" y1="26" x2="16.5" y2="22.5" />
                <line x1="2" y1="14" x2="5.5" y2="11.5" /><line x1="2" y1="14" x2="5.5" y2="16.5" />
                <line x1="26" y1="14" x2="22.5" y2="11.5" /><line x1="26" y1="14" x2="22.5" y2="16.5" />
            </svg>
        ),
        title: "Cold Chain System",
        desc: "Our cold storage and logistics network protects freshness from our facility to your table.",
    },
    {
        svg: (
            <svg viewBox="0 0 28 28" width="26" height="26" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="10" cy="8" r="3.5" />
                <path d="M3 24c0-4 3.1-7 7-7s7 3 7 7" />
                <circle cx="21" cy="8" r="3" strokeWidth="1.4" />
                <path d="M19 17.2c.6-.1 1.3-.2 2-.2 3.3 0 5.8 2.4 6 5.5" strokeWidth="1.4" />
            </svg>
        ),
        title: "Trusted by Many",
        desc: "We supply to retailers, distributors, and businesses across the Philippines.",
    },
];

const CERTS = [
    {
        svg: <svg viewBox="0 0 48 48" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="24" r="20" /><text x="24" y="20" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold" fontFamily="sans-serif" stroke="none">HACCP</text><path d="M14 26c0-5.5 4.5-10 10-10s10 4.5 10 10" /><path d="M18 30l3 3 7-7" strokeWidth="2" /></svg>,
        name: "HACCP", sub: "Food Safety\nManagement",
    },
    {
        svg: <svg viewBox="0 0 48 48" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="24" r="20" /><text x="24" y="22" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="900" fontFamily="serif" stroke="none" letterSpacing="-1">ISO</text><line x1="12" y1="28" x2="36" y2="28" /></svg>,
        name: "ISO", sub: "22000:2018",
    },
    {
        svg: <svg viewBox="0 0 48 48" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="24" r="20" /><text x="24" y="22" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="sans-serif" stroke="none">GMP</text><path d="M16 30c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeWidth="1.3" /></svg>,
        name: "GMP", sub: "Good Manufacturing\nPractice",
    },
    {
        svg: <svg viewBox="0 0 48 48" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="24" r="20" /><text x="24" y="28" textAnchor="middle" fill="#fff" fontSize="18" fontFamily="serif" stroke="none">حلال</text></svg>,
        name: "HALAL", sub: "Certified Halal",
    },
    {
        svg: <svg viewBox="0 0 48 48" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M24 4l18 7v11c0 11-8 20-18 23C14 42 6 33 6 22V11L24 4z" /><path d="M18 25l4 4 8-8" strokeWidth="2" /></svg>,
        name: "NATIONAL MEAT\nINSPECTION SERVICE", sub: "",
    },
    {
        svg: <svg viewBox="0 0 48 48" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="24" r="20" /><circle cx="24" cy="24" r="8" /><circle cx="24" cy="24" r="3" fill="#fff" stroke="none" />{[0, 45, 90, 135, 180, 225, 270, 315].map(a => <line key={a} x1={24 + 11 * Math.cos(a * Math.PI / 180)} y1={24 + 11 * Math.sin(a * Math.PI / 180)} x2={24 + 16 * Math.cos(a * Math.PI / 180)} y2={24 + 16 * Math.sin(a * Math.PI / 180)} />)}</svg>,
        name: "BEST QUALITY", sub: "Assurance Seal",
    },
];

// ─── ICON SVG ────────────────────────────────────────────────────────────────

const IconSVG = ({ name }) => {
    const s = { fill: "none", stroke: "#fff", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
    const icons = {
        shield: (
            <svg viewBox="0 0 24 24" width="28" height="28" {...s}>
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
                <polyline points="9 12 11 14 15 10" />
            </svg>
        ),
        snowflake: (
            <svg viewBox="0 0 24 24" width="28" height="28" {...s}>
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
        truck: (
            <svg viewBox="0 0 24 24" width="28" height="28" {...s}>
                <rect x="1" y="3" width="15" height="13" rx="1" />
                <path d="M16 8h4l3 5v3h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
        ),
        star: (
            <svg viewBox="0 0 24 24" width="28" height="28" {...s}>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
    };
    return icons[name] || null;
};

// ─── STYLES ──────────────────────────────────────────────────────────────────

const HOME_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Open+Sans:wght@400;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { width: 100%; margin: 0; padding: 0; }
body {
  width: 100% !important; min-width: 100% !important;
  margin: 0 !important; padding: 0 !important;
  overflow-x: hidden; font-family: 'Open Sans', sans-serif;
  background: #fff; color: #1a2340;
}
:root {
  --navy: #0d1b3e; --navy-dark: #060f23; --blue: #1a3a6b;
  --orange: #f47b20; --orange-dark: #d96a10;
  --gray-light: #f5f7fa; --gray: #7a8499;
}
#root, #__next { width: 100%; margin: 0; padding: 0; }
a { text-decoration: none; color: inherit; }

/* ─ WRAPPERS ─ */
.tm-page { width: 100%; min-width: 100%; overflow-x: hidden; }
.inner { width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 40px; }

/* ─ HERO ─ */
.hero {
  width: 100%; background: #050d1f; min-height: 100vh;
  position: relative; overflow: hidden; display: flex; align-items: stretch;
}
.hero-bg-img {
  position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: cover; object-position: center center; z-index: 0; display: block;
}
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to right,
    rgba(5,13,31,0.97) 0%, rgba(5,13,31,0.93) 28%,
    rgba(5,13,31,0.70) 48%, rgba(5,13,31,0.20) 68%, rgba(5,13,31,0.0) 100%);
  z-index: 1;
}
.hero-inner { width: 100%; display: flex; align-items: stretch; position: relative; z-index: 2; }
.hero-left {
  flex: 0 0 52%; padding: 40px 50px 30px 5%;
  display: flex; flex-direction: column; justify-content: center;
  align-items: flex-start; position: relative; z-index: 3;
}
.hero-badge-text {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12px;
  color: var(--orange); letter-spacing: 2.5px; text-transform: uppercase;
  margin-bottom: 18px; display: block;
}
.hero-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 58px;
  line-height: 1.05; text-transform: uppercase; color: #fff;
  letter-spacing: -0.5px; margin-bottom: 0; text-align: left;
}
.hero-title .orange { color: var(--orange); }
.hero-divider { width: 50px; height: 3.5px; background: var(--orange); border-radius: 2px; margin: 16px 0 18px; }
.hero-desc { font-size: 14px; color: rgba(255,255,255,.72); line-height: 1.8; max-width: 520px; margin-bottom: 28px; text-align: left; }
.hero-btns { display: flex; gap: 14px; flex-wrap: nowrap; margin-bottom: 40px; }
.btn-hero-orange {
  background: var(--orange); color: #fff; border: none; padding: 15px 30px; border-radius: 4px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 13px;
  cursor: pointer; letter-spacing: .8px; text-transform: uppercase;
  transition: background .2s; display: inline-flex; align-items: center; gap: 8px; white-space: nowrap;
}
.btn-hero-orange:hover { background: var(--orange-dark); }
.btn-hero-outline {
  background: transparent; color: #fff; border: 2px solid rgba(255,255,255,.6);
  padding: 15px 30px; border-radius: 4px; font-family: 'Montserrat', sans-serif;
  font-weight: 700; font-size: 13px; cursor: pointer; letter-spacing: .8px; text-transform: uppercase;
  transition: all .2s; display: inline-flex; align-items: center; gap: 8px; white-space: nowrap;
}
.btn-hero-outline:hover { border-color: var(--orange); color: var(--orange); }
.hero-icons {
  display: flex; gap: 30px; flex-wrap: nowrap; padding: 24px 0 32px;
  border-top: 1px solid rgba(255,255,255,.12); width: 100%;
}
.hero-icon-item { display: flex; align-items: center; gap: 9px; flex-shrink: 0; }
.hero-icon-box {
  width: 38px; height: 38px; flex-shrink: 0;
  border: 1.5px solid rgba(255,255,255,.25); border-radius: 8px;
  display: flex; align-items: center; justify-content: center; font-size: 17px;
}
.hero-icon-title { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 13px; color: #fff; line-height: 1.2; white-space: nowrap; }
.hero-icon-sub { font-size: 11px; color: rgba(255,255,255,.5); margin-top: 2px; white-space: nowrap; }
.hero-right { flex: 1; position: relative; overflow: hidden; display: flex; flex-direction: column; z-index: 2; }
.hero-img-area { flex: 1; position: relative; padding-bottom: 110px; }
.hero-stamp {
  position: absolute; top: 22px; right: 22px; width: 82px; height: 82px;
  border: 2px solid rgba(255,255,255,.55); border-radius: 50%;
  background: rgba(9,22,48,.75); backdrop-filter: blur(8px);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center; z-index: 5;
}
.hero-stamp-stars { font-size: 9px; color: var(--orange); letter-spacing: 2px; margin-bottom: 2px; }
.hero-stamp-pct { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 17px; color: #fff; line-height: 1; }
.hero-stamp-word { font-family: 'Montserrat', sans-serif; font-size: 7.5px; color: var(--orange); letter-spacing: 1.5px; text-transform: uppercase; font-weight: 700; margin-top: 2px; }
.hero-stamp-guaranteed { font-family: 'Montserrat', sans-serif; font-size: 6.5px; color: rgba(255,255,255,.5); letter-spacing: 1px; text-transform: uppercase; margin-top: 1px; }
.hero-arrow {
  position: absolute; top: 50%; transform: translateY(-50%); width: 38px; height: 38px;
  border-radius: 50%; background: rgba(255,255,255,.12); border: 1.5px solid rgba(255,255,255,.35);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: #fff; font-size: 15px; transition: background .2s; z-index: 5;
}
.hero-arrow:hover { background: rgba(255,255,255,.25); }
.hero-arrow-left { left: 8px; }
.hero-arrow-right { right: 8px; }
.hero-thumbs { position: absolute; bottom: 0; left: 0; right: 0; display: flex; z-index: 6; height: 160px; }
.hero-thumb {
  flex: 1; background: rgba(7,16,38,.85); backdrop-filter: blur(6px);
  border-right: 1px solid rgba(255,255,255,.1); display: flex; flex-direction: column;
  align-items: stretch; cursor: pointer; transition: background .2s; position: relative; overflow: hidden;
}
.hero-thumb:last-child { border-right: none; }
.hero-thumb:hover { background: rgba(14,32,65,.90); }
.hero-thumb-img { flex: 1; overflow: hidden; position: relative; background: rgba(8,18,44,.6); display: flex; align-items: center; justify-content: center; }
.hero-thumb-img img { width: 100%; height: 100%; object-fit: contain; object-position: center center; display: block; transition: transform .3s; background: transparent; }
.hero-thumb:hover .hero-thumb-img img { transform: scale(1.04); }
.hero-thumb-img-fallback { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 32px; }
.hero-thumb-row { display: flex; align-items: center; gap: 10px; padding: 0 14px; height: 44px; flex-shrink: 0; background: rgba(8,18,44,.92); border-top: 1px solid rgba(255,255,255,.08); }
.hero-thumb-arrow { width: 26px; height: 26px; background: var(--orange); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; color: #fff; flex-shrink: 0; }
.hero-thumb-name { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11.5px; color: #fff; text-transform: uppercase; letter-spacing: .7px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

/* ─ FEATURES STRIP ─ */
.features-wrap { background: #f5f7fa; padding: 60px 0 48px; }
.features-inner { max-width: 1280px; margin: 0 auto; padding: 0 40px; }
.features-card { background: #fff; border-radius: 14px; box-shadow: 0 8px 40px rgba(0,0,0,.12); display: flex; overflow: hidden; border: 1px solid #eaeaea; }
.feature-item { flex: 1; padding: 32px 24px; display: flex; align-items: flex-start; gap: 16px; border-right: 1px solid #eee; }
.feature-item:last-child { border-right: none; }
.feature-icon-box { width: 54px; height: 54px; flex-shrink: 0; background: var(--navy); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; }
.feature-title { font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 13px; color: var(--navy); text-transform: uppercase; letter-spacing: .5px; margin-bottom: 6px; }
.feature-desc { font-size: 12px; color: var(--gray); line-height: 1.65; margin-bottom: 10px; }
.feature-link { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12px; color: var(--navy); text-decoration: none; display: inline-flex; align-items: center; gap: 4px; border-bottom: 1.5px solid var(--navy); padding-bottom: 1px; transition: color .2s, border-color .2s; }
.feature-link:hover { color: var(--orange); border-color: var(--orange); }

/* ─ SECTION SHARED ─ */
.orange-bar { display: block; width: 42px; height: 4px; background: var(--orange); border-radius: 2px; margin-bottom: 14px; }
.section-title { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 28px; color: var(--navy); text-transform: uppercase; letter-spacing: .8px; margin-bottom: 14px; line-height: 1.2; }
.section-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 36px; }

/* ─ ABOUT ─ */
.about { background: var(--navy); padding: 70px 0; }
.about .inner { display: flex; align-items: center; gap: 64px; }
.about-left { flex: 0 0 44%; }
.about-label { display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px; color: var(--orange); letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 14px; text-align: left; }
.about-left .section-title { color: #fff; text-align: left; font-size: 32px; line-height: 1.15; margin-bottom: 18px; }
.section-desc { font-size: 14px; color: rgba(255,255,255,.7); line-height: 1.85; margin-bottom: 24px; text-align: left; }
.check-list { list-style: none; margin-bottom: 32px; }
.check-list li { display: flex; align-items: center; gap: 12px; font-size: 14px; color: rgba(255,255,255,.85); margin-bottom: 14px; text-align: left; }
.check-dot { width: 24px; height: 24px; background: var(--orange); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 13px; color: #fff; flex-shrink: 0; }
.btn-about-us { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,.55); padding: 13px 30px; border-radius: 4px; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12px; cursor: pointer; letter-spacing: 1px; text-transform: uppercase; transition: all .2s; display: inline-flex; align-items: center; gap: 8px; }
.btn-about-us:hover { border-color: var(--orange); color: var(--orange); }
.about-right { flex: 1; display: flex; flex-direction: column; border-radius: 16px; overflow: hidden; border: 1.5px solid rgba(255,255,255,.12); box-shadow: 0 12px 48px rgba(0,0,0,.35); }
.about-img-wrap { position: relative; overflow: hidden; background: linear-gradient(135deg, #0d2a4a 0%, #1a3a6b 60%, #0d1b3e 100%); min-height: 300px; display: flex; align-items: center; justify-content: center; }
.about-facility-img { width: 100%; height: 300px; object-fit: cover; object-position: center center; display: block; }
.about-img-placeholder-box { width: 100%; height: 300px; background: linear-gradient(135deg, #0d2a4a 0%, #1a3a6b 60%, #0d1b3e 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; }
.about-img-placeholder-icon { font-size: 64px; opacity: .5; }
.about-img-placeholder-text { font-family: 'Montserrat', sans-serif; font-size: 12px; color: rgba(255,255,255,.4); letter-spacing: 1.5px; text-transform: uppercase; }
.about-play-btn { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 64px; height: 64px; background: var(--orange); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 22px; color: #fff; cursor: pointer; border: 3px solid rgba(255,255,255,.7); box-shadow: 0 4px 24px rgba(244,123,32,.5); transition: transform .2s, box-shadow .2s; z-index: 4; }
.about-play-btn:hover { transform: translate(-50%,-50%) scale(1.1); box-shadow: 0 6px 32px rgba(244,123,32,.7); }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); background: #0a1628; }
.stat-card { padding: 20px 12px; text-align: center; border-right: 1px solid rgba(255,255,255,.08); }
.stat-card:last-child { border-right: none; }
.stat-value { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 28px; color: var(--orange); margin-bottom: 4px; line-height: 1; }
.stat-label { font-size: 10px; color: rgba(255,255,255,.5); text-transform: uppercase; letter-spacing: .6px; line-height: 1.5; }

/* ─ CERT STRIP ─ */
.cert-strip { background: var(--navy); padding: 36px 0; }
.cert-strip .inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0; }
.cert-strip-title { width: 100%; text-align: center; font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 12px; color: #fff; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 28px; }
.cert-items-row { display: flex; align-items: center; justify-content: space-between; width: 100%; flex-wrap: wrap; gap: 0; }
.cert-item { display: flex; align-items: center; gap: 14px; padding: 0 24px; flex: 1; border-right: 1px solid rgba(255,255,255,.12); }
.cert-item:last-child { border-right: none; }
.cert-icon { width: 52px; height: 52px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
.cert-icon svg { width: 48px; height: 48px; }
.cert-text-name { font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 13px; color: #fff; text-transform: uppercase; letter-spacing: .3px; line-height: 1.2; }
.cert-text-sub { font-size: 11px; color: rgba(255,255,255,.55); margin-top: 2px; line-height: 1.3; }

/* ─ PRODUCTS ─ */
.products { padding: 70px 0 80px; background: #f5f7fa; }
.products .section-title { font-size: 30px; text-transform: none; letter-spacing: 0; font-weight: 900; color: var(--navy); }
.products-label { display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px; color: var(--orange); letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 10px; }
.products-subtitle { font-size: 14px; color: var(--gray); margin-top: 6px; }
.btn-products-outline { background: #fff; color: var(--navy); border: 2px solid var(--navy); padding: 13px 28px; border-radius: 6px; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 13px; cursor: pointer; letter-spacing: .5px; text-transform: uppercase; transition: all .2s; display: inline-flex; align-items: center; gap: 8px; white-space: nowrap; }
.btn-products-outline:hover { background: var(--navy); color: #fff; }
.products-carousel-wrap { position: relative; }
.products-arrow { position: absolute; top: 50%; transform: translateY(-50%); width: 44px; height: 44px; border-radius: 50%; background: #fff; border: 1.5px solid #dde0e8; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 18px; color: var(--navy); z-index: 10; box-shadow: 0 2px 12px rgba(0,0,0,.1); transition: all .2s; }
.products-arrow:hover { background: var(--navy); color: #fff; border-color: var(--navy); }
.products-arrow-left { left: -22px; }
.products-arrow-right { right: -22px; }
.products-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.product-card { border-radius: 14px; overflow: hidden; background: #fff; border: 1px solid #e4e8ef; box-shadow: 0 2px 16px rgba(0,0,0,.06); transition: transform .2s, box-shadow .2s; display: flex; flex-direction: column; }
.product-card:hover { transform: translateY(-6px); box-shadow: 0 14px 40px rgba(0,0,0,.12); }
.product-img-area { height: 220px; position: relative; overflow: hidden; background: #f0f2f5; display: flex; align-items: center; justify-content: center; }
.product-img-placeholder { width: 100%; height: 100%; object-fit: cover; display: block; }
.product-img-placeholder-box { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; background: #eef0f4; }
.product-img-placeholder-box svg { opacity: .25; }
.product-img-placeholder-label { font-family: 'Montserrat', sans-serif; font-size: 10px; color: #aab; letter-spacing: 1.5px; text-transform: uppercase; }
.product-body { padding: 20px 20px 24px; flex: 1; display: flex; flex-direction: column; }
.product-name { font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 18px; color: var(--navy); margin-bottom: 10px; text-transform: none; letter-spacing: 0; }
.product-desc { font-size: 13px; color: var(--gray); line-height: 1.7; margin-bottom: 20px; flex: 1; }
.product-link { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12px; color: var(--navy); text-transform: uppercase; letter-spacing: .8px; display: inline-flex; align-items: center; gap: 6px; text-decoration: none; transition: color .2s; }
.product-link:hover { color: var(--orange); }


/* ─ NEWS ─ */
.news-section { padding: 80px 0; background: #fff; }
.news-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
.news-card { background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 14px rgba(0,0,0,.06); border: 1px solid #e8e8e8; transition: transform .2s, box-shadow .2s; }
.news-card:hover { transform: translateY(-5px); box-shadow: 0 14px 36px rgba(0,0,0,.1); }
.news-img { height: 200px; overflow: hidden; position: relative; }
.news-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .3s; }
.news-card:hover .news-img img { transform: scale(1.04); }
.news-body { padding: 22px 22px 26px; display: flex; gap: 16px; align-items: flex-start; }
.news-date-col { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; padding-right: 16px; border-right: 2px solid #e8ecf0; min-width: 52px; }
.news-month-top { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px; color: var(--orange); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 2px; }
.news-day { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 32px; color: var(--navy); line-height: 1; }
.news-year { font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 11px; color: var(--gray); margin-top: 2px; }
.news-content { flex: 1; }
.news-title { font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 14px; color: var(--navy); letter-spacing: .2px; line-height: 1.4; margin-bottom: 9px; }
.news-excerpt { font-size: 12px; color: var(--gray); line-height: 1.75; margin-bottom: 16px; }
.news-link { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px; color: var(--navy); text-transform: uppercase; letter-spacing: .8px; display: inline-flex; align-items: center; gap: 5px; text-decoration: none; transition: color .2s; }
.news-link:hover { color: var(--orange); }

/* ─ SHARED BUTTONS ─ */
.btn-view-all-news { background: transparent; color: var(--navy); border: 1.5px solid var(--navy); padding: 11px 26px; border-radius: 4px; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12px; cursor: pointer; letter-spacing: .8px; text-transform: uppercase; transition: all .2s; display: inline-flex; align-items: center; gap: 6px; text-decoration: none; white-space: nowrap; }
.btn-view-all-news:hover { background: var(--navy); color: #fff; }

/* ─ RESPONSIVE ─ */
@media (max-width: 1100px) { .hero-title { font-size: 42px; } }
@media (max-width: 1024px) { .products-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) {
  .hero-inner { flex-direction: column; }
  .hero-left { flex: none; padding: 40px 24px 30px; }
  .hero-right { min-height: 340px; }
  .hero-title { font-size: 34px; }
  .features-card { flex-direction: column; }
  .feature-item { border-right: none; border-bottom: 1px solid #eee; }
  .products-grid, .news-grid { grid-template-columns: 1fr 1fr; }
  .inner { padding: 0 18px; }
  .about .inner { flex-direction: column; }
}
@media (max-width: 480px) {
  .products-grid, .news-grid { grid-template-columns: 1fr; }
  .hero-icons { gap: 16px; }
}
`;

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function HomePage() {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: HOME_CSS }} />

            {/* ═══ HERO ═══ */}
            <section className="hero">
                <img className="hero-bg-img" src={heroChicken} alt="" aria-hidden="true" />
                <div className="hero-overlay" />
                <div className="hero-inner">

                    {/* LEFT: Text content */}
                    <div className="hero-left">
                        <span className="hero-badge-text">Premium Quality · Frozen to Perfection</span>
                        <h1 className="hero-title">
                            FRESH FROZEN CHICKEN<br />
                            YOU CAN <span className="orange">TRUST</span>
                        </h1>
                        <div className="hero-divider" />
                        <p className="hero-desc">
                            Toughman Frozen Product Processing is committed to delivering
                            high-quality frozen chicken products with strict food safety,
                            advanced processing, and efficient distribution.
                        </p>
                        <div className="hero-btns">
                            <button className="btn-hero-orange">OUR PRODUCTS →</button>
                            <button className="btn-hero-outline">LEARN MORE →</button>
                        </div>
                        <div className="hero-icons">
                            {FEATURES.map(f => (
                                <div className="hero-icon-item" key={f.title}>
                                    <div className="hero-icon-box"><IconSVG name={f.icon} /></div>
                                    <div>
                                        <div className="hero-icon-title">{f.title}</div>
                                        <div className="hero-icon-sub">{f.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Stamp + arrows + thumbs */}
                    <div className="hero-right">
                        <div className="hero-img-area">
                            <div className="hero-stamp">
                                <div className="hero-stamp-stars">★ ★</div>
                                <div className="hero-stamp-pct">100%</div>
                                <div className="hero-stamp-word">PREMIUM</div>
                                <div className="hero-stamp-guaranteed">GUARANTEED</div>
                            </div>
                            <div className="hero-arrow hero-arrow-left">‹</div>
                            <div className="hero-arrow hero-arrow-right">›</div>
                        </div>
                        <div className="hero-thumbs">
                            {THUMB_PRODUCTS.map(p => (
                                <div className="hero-thumb" key={p.name}>
                                    <div className="hero-thumb-img">
                                        <img
                                            src={p.img}
                                            alt={p.name}
                                            onError={e => {
                                                e.target.style.display = "none";
                                                e.target.nextSibling.style.display = "flex";
                                            }}
                                        />
                                        <div className="hero-thumb-img-fallback" style={{ display: "none" }}>
                                            {p.name === "Whole Chicken" ? "🐔" : p.name === "Chicken Cuts" ? "🍗" : "📦"}
                                        </div>
                                    </div>
                                    <div className="hero-thumb-row">
                                        <div className="hero-thumb-arrow">→</div>
                                        <div className="hero-thumb-name">{p.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* ═══ FEATURES STRIP ═══ */}
            <div className="features-wrap">
                <div className="features-inner">
                    <div className="features-card">
                        {FEATURES_STRIP.map(f => (
                            <div className="feature-item" key={f.title}>
                                <div className="feature-icon-box">{f.svg}</div>
                                <div>
                                    <div className="feature-title">{f.title}</div>
                                    <div className="feature-desc">{f.desc}</div>
                                    <a href="#" className="feature-link">Learn more →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ═══ ABOUT ═══ */}
            <section className="about">
                <div className="inner">
                    <div className="about-left">
                        <span className="about-label">ABOUT TOUGHMAN</span>
                        <h2 className="section-title">Your Trusted Partner<br />in Frozen Chicken Products</h2>
                        <p className="section-desc">
                            We are a Philippine-based company dedicated to providing premium frozen chicken products.
                            With our advanced facilities, strict quality assurance protocols, and reliable cold chain
                            system, we ensure products that you can trust.
                        </p>
                        <ul className="check-list">
                            {["High-quality chicken, responsibly sourced", "Safe and healthy products, always fresh", "Reliable delivery with temperature care"].map(item => (
                                <li key={item}><span className="check-dot">✓</span>{item}</li>
                            ))}
                        </ul>
                        <button className="btn-about-us">ABOUT US →</button>
                    </div>
                    <div className="about-right">
                        <div className="about-img-wrap">
                            <img
                                src={aboutFacility}
                                alt="Toughman facility and delivery truck"
                                className="about-facility-img"
                                onError={e => {
                                    e.target.style.display = "none";
                                    e.target.nextSibling.style.display = "flex";
                                }}
                            />
                            <div className="about-img-placeholder-box" style={{ display: "none" }}>
                                <div className="about-img-placeholder-icon">🏭🚛</div>
                                <div className="about-img-placeholder-text">Facility &amp; Logistics Photo</div>
                            </div>
                            <div className="about-play-btn">▶</div>
                        </div>
                        <div className="stats-grid">
                            {STATS.map(s => (
                                <div className="stat-card" key={s.label}>
                                    <div className="stat-value">{s.value}</div>
                                    <div className="stat-label">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ PRODUCTS ═══ */}
            <section className="products">
                <div className="inner">
                    <div className="section-header" style={{ alignItems: "flex-start" }}>
                        <div>
                            <span className="products-label">OUR PRODUCTS</span>
                            <h2 className="section-title">High-Quality Frozen Chicken</h2>
                            <p className="products-subtitle">Processed with care to ensure freshness, taste, and nutrition in every product.</p>
                        </div>
                        <button className="btn-products-outline">VIEW ALL PRODUCTS →</button>
                    </div>
                    <div className="products-carousel-wrap">
                        <button className="products-arrow products-arrow-left">‹</button>
                        <div className="products-grid">
                            {PRODUCTS_LIST.map(p => (
                                <div className="product-card" key={p.name}>
                                    <div className="product-img-area">
                                        {p.img
                                            ? <img src={p.img} alt={p.name} className="product-img-placeholder" />
                                            : (
                                                <div className="product-img-placeholder-box">
                                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" rx="8" fill="#d0d4de" /><path d="M14 38l10-14 8 10 5-6 9 10H14z" fill="#b0b6c8" /><circle cx="38" cy="20" r="5" fill="#b0b6c8" /></svg>
                                                    <div className="product-img-placeholder-label">Product Photo</div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="product-body">
                                        <div className="product-name">{p.name}</div>
                                        <div className="product-desc">{p.desc}</div>
                                        <a href="#" className="product-link">VIEW PRODUCT →</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="products-arrow products-arrow-right">›</button>
                    </div>
                </div>
            </section>

            {/* ═══ CERT STRIP ═══ */}
            <div className="cert-strip">
                <div className="inner" style={{ flexDirection: "column" }}>
                    <div className="cert-strip-title">CERTIFIED FOR YOUR PEACE OF MIND</div>
                    <div className="cert-items-row">
                        {CERTS.map((c, i) => (
                            <div className="cert-item" key={i}>
                                <div className="cert-icon">{c.svg}</div>
                                <div>
                                    <div className="cert-text-name" style={{ whiteSpace: "pre-line" }}>{c.name}</div>
                                    {c.sub && <div className="cert-text-sub" style={{ whiteSpace: "pre-line" }}>{c.sub}</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ═══ NEWS ═══ */}
            <section className="news-section">
                <div className="inner">
                    <div className="section-header">
                        <div>
                            <span className="orange-bar" />
                            <h2 className="section-title">Latest News & Updates</h2>
                            <p style={{ fontSize: 14, color: "var(--gray)" }}>Stay updated with our latest news, announcements, and industry insights.</p>
                        </div>
                        <a href="#" className="btn-view-all-news">VIEW ALL NEWS →</a>
                    </div>
                    <div className="news-grid">
                        {NEWS.map(n => (
                            <div className="news-card" key={n.title}>
                                <div className="news-img">
                                    {n.img
                                        ? <img src={n.img} alt={n.title} />
                                        : <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#0d1b3e,#1a3a6b)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>🖼️</div>
                                    }
                                </div>
                                <div className="news-body">
                                    <div className="news-date-col">
                                        <div className="news-month-top">{n.month}</div>
                                        <div className="news-day">{n.day}</div>
                                        <div className="news-year">{n.year}</div>
                                    </div>
                                    <div className="news-content">
                                        <div className="news-title">{n.title}</div>
                                        <p className="news-excerpt">{n.excerpt}</p>
                                        <a href="#" className="news-link">READ MORE →</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}