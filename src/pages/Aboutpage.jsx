import { useAboutData, useTeamData } from "../hooks/useSiteData";
import aboutFacility from "../assets/about-facility.png";

/* ─────────────────────────────────────────────
   SHARED SVG PRIMITIVES
───────────────────────────────────────────── */

const SX = { fill: "none", stroke: "#fff", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

const IconArrow = ({ size = 13, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
);

const IconCheck = ({ size = 11, color = "#fff" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

/* ─────────────────────────────────────────────
   ICON COMPONENT  (navy icon box)
───────────────────────────────────────────── */

const ICONS = {
    star: (
        <svg viewBox="0 0 24 24" width="26" height="26" {...SX}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    ),
    handshake: (
        <svg viewBox="0 0 24 24" width="26" height="26" {...SX}>
            <path d="M9 12l2 2 4-4" />
            <path d="M3 12c0-1.5.8-2.9 2-3.7L9 6l3 3-2 2 2 2-3 3-3-2C3.8 14.9 3 13.5 3 12z" />
            <path d="M21 12c0-1.5-.8-2.9-2-3.7L15 6l-3 3 2 2-2 2 3 3 3-2c1.2-.8 2-2.2 2-3.7z" />
        </svg>
    ),
    truck: (
        <svg viewBox="0 0 24 24" width="26" height="26" {...SX}>
            <rect x="1" y="3" width="15" height="13" rx="1" />
            <path d="M16 8h4l3 5v3h-7V8z" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
    ),
    moon: (
        <svg viewBox="0 0 24 24" width="26" height="26" {...SX}>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    ),
    lightbulb: (
        <svg viewBox="0 0 24 24" width="26" height="26" {...SX}>
            <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.2-1.2 4.2-3 5.4V17H9v-2.6C7.2 13.2 6 11.2 6 9a6 6 0 0 1 6-6z" />
        </svg>
    ),
    heart: (
        <svg viewBox="0 0 24 24" width="26" height="26" {...SX}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
    ),
    chicken: (
        <svg viewBox="0 0 24 24" width="26" height="26" {...SX}>
            <path d="M12 2C9 2 7 4 7 6c0 1 .4 2 1 2.7L5 12H3l-1 4h4l1-2h1v4h8v-4h1l1 2h4l-1-4h-2l-3-3.3c.6-.7 1-1.7 1-2.7 0-2-2-4-5-4z" />
            <circle cx="14" cy="6" r="1" fill="#fff" stroke="none" />
        </svg>
    ),
    snowflake: (
        <svg viewBox="0 0 24 24" width="26" height="26" {...SX}>
            <line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /><line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
            <circle cx="12" cy="12" r="2" />
            <line x1="12" y1="2" x2="10" y2="5" /><line x1="12" y1="2" x2="14" y2="5" />
            <line x1="12" y1="22" x2="10" y2="19" /><line x1="12" y1="22" x2="14" y2="19" />
            <line x1="2" y1="12" x2="5" y2="10" /><line x1="2" y1="12" x2="5" y2="14" />
            <line x1="22" y1="12" x2="19" y2="10" /><line x1="22" y1="12" x2="19" y2="14" />
        </svg>
    ),
    package: (
        <svg viewBox="0 0 24 24" width="26" height="26" {...SX}>
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
    ),
    shop: (
        <svg viewBox="0 0 24 24" width="26" height="26" {...SX}>
            <path d="M3 9l1-6h16l1 6" />
            <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
            <path d="M5 21V11h14v10" />
            <rect x="9" y="14" width="6" height="7" />
        </svg>
    ),
    cart: (
        <svg viewBox="0 0 24 24" width="26" height="26" {...SX}>
            <circle cx="9" cy="21" r="1" fill="#fff" stroke="none" />
            <circle cx="20" cy="21" r="1" fill="#fff" stroke="none" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
    ),
    coldchain: (
        <svg viewBox="0 0 24 24" width="26" height="26" {...SX}>
            <rect x="1" y="3" width="15" height="13" rx="1" />
            <path d="M16 8h4l3 5v3h-7V8z" />
            <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
            <line x1="7" y1="7" x2="7" y2="12" strokeWidth="1.4" />
            <line x1="5" y1="9" x2="9" y2="9" strokeWidth="1.4" />
        </svg>
    ),
    b2b: (
        <svg viewBox="0 0 24 24" width="26" height="26" {...SX}>
            <rect x="2" y="7" width="8" height="14" rx="1" />
            <rect x="14" y="3" width="8" height="18" rx="1" />
            <path d="M10 10h4M10 14h4" />
        </svg>
    ),
    target: (
        <svg viewBox="0 0 24 24" width="26" height="26" {...SX}>
            <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" fill="#fff" stroke="none" />
        </svg>
    ),
    telescope: (
        <svg viewBox="0 0 24 24" width="26" height="26" {...SX}>
            <path d="M10 9l-7 3.5 1 2 7-3.5" /><path d="M10 9l5-2.5 1 2-5 2.5" />
            <path d="M16 6.5l3-1.5 1 2-3 1.5" />
            <line x1="10" y1="9" x2="12" y2="21" /><line x1="8" y1="21" x2="16" y2="21" />
        </svg>
    ),
    shield: (
        <svg viewBox="0 0 24 24" width="26" height="26" {...SX}>
            <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
            <polyline points="9 12 11 14 15 10" />
        </svg>
    ),
    rocket: (
        <svg viewBox="0 0 24 24" width="26" height="26" {...SX}>
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    ),
    pin: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
    ),
    phone: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    ),
    mail: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    ),
    linkedin: (
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
        </svg>
    ),
    building: (
        <svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="1" />
            <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
        </svg>
    ),
};

const IconBox = ({ name, ghost = false }) => (
    <div className={ghost ? "ab-icon-box ab-icon-ghost" : "ab-icon-box"} aria-hidden="true">
        {ICONS[name] || null}
    </div>
);

const IconBoxSm = ({ name, ghost = false }) => (
    <div className={ghost ? "ab-icon-box-sm ab-icon-ghost-sm" : "ab-icon-box-sm"} aria-hidden="true">
        {ICONS[name] || null}
    </div>
);

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const STATS = [
    { value: "2026", label: "Year Established" },
    { value: "100%", label: "Halal Compliant" },
    { value: "-18°C", label: "Cold Chain Standard" },
    { value: "5+", label: "Management Experts" },
];

const CORE_VALUES = [
    { icon: "star", name: "Quality", desc: "Every product leaving our facility is held to strict food safety, hygiene, and quality standards — no exceptions." },
    { icon: "handshake", name: "Integrity", desc: "We conduct business with transparency and professionalism, building trust with every partner and client we work with." },
    { icon: "truck", name: "Reliability", desc: "From processing schedules to delivery commitments, we hold ourselves accountable to timelines our partners can plan around." },
    { icon: "moon", name: "Halal Compliance", desc: "Our operations strictly follow certified Halal processing standards, respecting both religious requirements and food safety protocols." },
    { icon: "lightbulb", name: "Continuous Improvement", desc: "We invest in better systems, equipment, and training to keep pace with industry standards and client expectations." },
    { icon: "heart", name: "Client Focus", desc: "Long-term business relationships are built on consistent service — we work hard to earn and maintain the trust of every account." },
];

const SERVICES = [
    { icon: "chicken", name: "Halal Frozen Chicken Processing", desc: "Certified Halal processing from slaughter to freezing under Islamic and food safety protocols, conducted by trained personnel." },
    { icon: "snowflake", name: "Cold Storage & Preservation", desc: "Industrial cold storage at -18°C or below to preserve product quality, texture, and shelf life throughout our facility." },
    { icon: "package", name: "Product Packaging", desc: "Hygienic, sealed vacuum packaging designed to maintain product integrity during extended storage and transport." },
    { icon: "shop", name: "Wholesale Distribution", desc: "High-volume supply solutions structured for supermarket chains, food distributors, and large-scale institutional buyers." },
    { icon: "cart", name: "Retail Supply", desc: "Retail-ready product lines with consistent sizing and packaging suited for consumer-facing grocery and wet market accounts." },
    { icon: "coldchain", name: "Cold Chain Logistics", desc: "Temperature-controlled transport from our facility to your receiving dock — maintaining -18°C throughout the delivery chain." },
    { icon: "b2b", name: "B2B Supply Agreements", desc: "Custom volume agreements for restaurants, hotels, canteens, food processors, and other institutional buyers requiring scheduled supply." },
];

const TEAM = [
    {
        name: "Abdelrasul Adjilani",
        role: "Chief Executive Officer (CEO)",
        initials: "AA",
        desc: "Leads the overall vision, strategic direction, and corporate growth of TOUGHMANFP Corporation. He oversees executive management, business development, corporate partnerships, and long-term organizational planning to ensure sustainable success and innovation across all operations.",
        linkedin: "#",
    },
    {
        name: "Wryan Alfred Punzalan",
        role: "Chief Operating Officer (COO) / Chief Technical Officer (CTO)",
        initials: "WP",
        desc: "Manages the corporation's operational and technological infrastructure. Leads system development, IT operations, digital transformation, cybersecurity initiatives, and technical innovation while ensuring efficient day-to-day business operations and scalable technology solutions.",
        linkedin: "#",
    },
    {
        name: "Al-Bhien Adjilani",
        role: "Executive Shareholder",
        initials: "BA",
        desc: "Plays a vital role in supporting the corporation's strategic growth and investment direction. Contributes to high-level business planning, corporate expansion initiatives, and long-term financial sustainability.",
        linkedin: "#",
    },
    {
        name: "Aldizier Tantong",
        role: "Board Member",
        initials: "AT",
        desc: "Serves as a Board Member responsible for providing governance, strategic oversight, and advisory support. Contributes to policy development, organizational planning, and key decision-making processes that strengthen corporate stability and growth.",
        linkedin: "#",
    },
    {
        name: "Mudzhar Adju",
        role: "Board Member",
        initials: "MA",
        desc: "Supports the corporation through strategic guidance, governance oversight, and business advisory responsibilities. Participates in evaluating corporate initiatives, operational performance, and future opportunities aligned with the company's mission and objectives.",
        linkedin: "#",
    },
];

const COMMITMENTS = [
    "Delivering safe, premium Halal frozen products on every order",
    "Maintaining proper hygiene and food safety standards throughout processing",
    "Building strong and long-term client and supplier relationships",
    "Upholding transparent and ethical business practices company-wide",
    "Continuously improving operational efficiency across all departments",
    "Expanding distribution capacity to reach more regions nationwide",
    "Adopting modern enterprise systems for better operations management",
];

const FUTURE_GOALS = [
    "Expand nationwide distribution across Luzon, Visayas, and Mindanao",
    "Increase cold storage capacity and processing volume to meet growing demand",
    "Establish additional processing facilities in strategic regions",
    "Implement an enterprise resource planning system across all departments",
    "Develop stronger partnerships with suppliers, distributors, and retailers",
    "Establish Toughman as a recognized Halal frozen food brand in the Philippines",
];

const CONTACT_DETAILS = [
    { icon: "pin", label: "Location", text: "Sta. Maria, Zamboanga City, Philippines" },
    { icon: "phone", label: "Phone", text: "+63 945 982 9389", href: "tel:+639459829389" },
    { icon: "mail", label: "Email", text: "inquiries@toughmanfp.com", href: "mailto:inquiries@toughmanfp.com" },
];

/* ─────────────────────────────────────────────
   STYLES
───────────────────────────────────────────── */

const ABOUT_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { width: 100%; overflow-x: hidden; }
body { width: 100%; overflow-x: hidden; font-family: 'Open Sans', sans-serif; background: #fff; color: #1a2340; }
a { text-decoration: none; color: inherit; }

:root {
  --navy:       #0a1628;
  --navy-mid:   #0d1b3e;
  --navy-light: #1a3a6b;
  --orange:     #e8611a;
  --orange-dk:  #c9500f;
  --orange-dim: rgba(232,97,26,.12);
  --gray-bg:    #f5f7fa;
  --gray-text:  #6b7589;
  --border:     #e4e8ef;
}

.ab-page  { width: 100%; overflow-x: hidden; }
.ab-inner { max-width: 1280px; width: 100%; margin: 0 auto; padding: 0 48px; box-sizing: border-box; }

/* Shared typography */
.ab-eyebrow {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700; font-size: 10.5px;
  color: var(--orange); letter-spacing: 2.5px;
  text-transform: uppercase; margin-bottom: 12px;
}
.ab-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900; font-size: 30px;
  color: var(--navy); line-height: 1.15;
  letter-spacing: -.3px; margin-bottom: 14px;
}
.ab-title-white { color: #fff; }
.ab-desc { font-size: 14px; color: var(--gray-text); line-height: 1.85; }
.ab-desc-white { color: rgba(255,255,255,.65); }
.ab-orange-bar { display: block; width: 40px; height: 3px; background: var(--orange); border-radius: 2px; margin-bottom: 14px; }
.ab-section-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 44px; gap: 24px; }

/* Icon boxes */
.ab-icon-box {
  width: 54px; height: 54px;
  background: var(--navy); border-radius: 12px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.ab-icon-box-sm {
  width: 36px; height: 36px;
  background: var(--navy); border-radius: 8px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.ab-icon-ghost    { background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.16); }
.ab-icon-ghost-sm { background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.16); }

/* ─────── PAGE HERO ─────── */
.ab-hero {
  background: var(--navy);
  padding: 80px 0 0;
  position: relative; overflow: hidden;
  width: 100%;
}
.ab-hero::before {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(232,97,26,.07) 0%, transparent 55%);
  pointer-events: none;
}
.ab-hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px; align-items: center;
  padding-bottom: 60px;
}
.ab-hero-eyebrow {
  display: flex; align-items: center; gap: 10px;
  font-family: 'Montserrat', sans-serif; font-weight: 700;
  font-size: 10.5px; color: var(--orange); letter-spacing: 2.5px;
  text-transform: uppercase; margin-bottom: 18px;
}
.ab-hero-eyebrow::before {
  content: ''; display: inline-block;
  width: 24px; height: 2px;
  background: var(--orange); border-radius: 2px; flex-shrink: 0;
}
.ab-hero-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900;
  font-size: 46px; color: #fff; line-height: 1.06;
  text-transform: uppercase; letter-spacing: -.5px; margin-bottom: 18px;
}
.ab-hero-title span { color: var(--orange); }
.ab-hero-divider { width: 46px; height: 3px; background: var(--orange); border-radius: 2px; margin-bottom: 20px; }
.ab-hero-desc { font-size: 14px; color: rgba(255,255,255,.67); line-height: 1.85; margin-bottom: 32px; max-width: 500px; }
.ab-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
.btn-primary {
  background: var(--orange); color: #fff; border: none;
  padding: 13px 26px; border-radius: 4px;
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 11.5px;
  cursor: pointer; letter-spacing: .7px; text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 8px; white-space: nowrap;
  transition: background .2s, box-shadow .2s, transform .15s;
  box-shadow: 0 4px 16px rgba(232,97,26,.38);
}
.btn-primary:hover { background: var(--orange-dk); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(232,97,26,.48); }
.btn-outline-light {
  background: transparent; color: #fff;
  border: 1.5px solid rgba(255,255,255,.45);
  padding: 13px 26px; border-radius: 4px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11.5px;
  cursor: pointer; letter-spacing: .7px; text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 8px;
  transition: border-color .2s, color .2s;
}
.btn-outline-light:hover { border-color: var(--orange); color: var(--orange); }

/* Hero image card */
.ab-hero-img-card {
  border-radius: 14px; overflow: hidden;
  border: 1.5px solid rgba(255,255,255,.1);
  box-shadow: 0 16px 52px rgba(0,0,0,.4);
}
.ab-hero-img { width: 100%; height: 300px; object-fit: cover; display: block; }
.ab-hero-img-fallback {
  width: 100%; height: 300px;
  background: #0a1e3a;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 10px;
}
.ab-hero-img-fallback-text {
  font-family: 'Montserrat', sans-serif; font-size: 11px;
  color: rgba(255,255,255,.3); letter-spacing: 1.5px; text-transform: uppercase;
}
.ab-hero-stats {
  display: grid; grid-template-columns: repeat(4, 1fr);
  background: #060f1e;
}
.ab-stat-card {
  padding: 18px 12px; text-align: center;
  border-right: 1px solid rgba(255,255,255,.07);
}
.ab-stat-card:last-child { border-right: none; }
.ab-stat-value { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 24px; color: var(--orange); margin-bottom: 4px; line-height: 1; }
.ab-stat-label { font-size: 9.5px; color: rgba(255,255,255,.45); text-transform: uppercase; letter-spacing: .6px; line-height: 1.5; }

/* ─────── MISSION & VISION ─────── */
.ab-mv { background: var(--gray-bg); padding: 80px 0; }
.ab-mv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 26px; margin-top: 48px; }
.ab-mv-card {
  background: #fff; border-radius: 14px;
  padding: 36px 32px; border: 1px solid var(--border);
  box-shadow: 0 2px 16px rgba(0,0,0,.055);
  position: relative; overflow: hidden;
}
.ab-mv-card::before {
  content: ''; position: absolute;
  top: 0; left: 0; right: 0; height: 3px;
  background: var(--orange);
}
.ab-mv-icon { margin-bottom: 18px; }
.ab-mv-label {
  font-family: 'Montserrat', sans-serif; font-weight: 700;
  font-size: 10px; color: var(--orange); letter-spacing: 2.5px;
  text-transform: uppercase; margin-bottom: 10px; display: block;
}
.ab-mv-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900;
  font-size: 21px; color: var(--navy); margin-bottom: 16px; line-height: 1.2;
}
.ab-mv-text { font-size: 13.5px; color: var(--gray-text); line-height: 1.85; }

/* ─────── CORE VALUES ─────── */
.ab-values { background: var(--navy); padding: 80px 0; }
.ab-values-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 20px; margin-top: 48px;
}
.ab-value-card {
  background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);
  border-radius: 12px; padding: 26px 22px;
  display: flex; align-items: flex-start; gap: 16px;
  transition: background .2s, transform .2s;
}
.ab-value-card:hover { background: rgba(255,255,255,.09); transform: translateY(-3px); }
.ab-value-name {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 12.5px;
  color: #fff; text-transform: uppercase; letter-spacing: .5px; margin-bottom: 8px;
}
.ab-value-desc { font-size: 12px; color: rgba(255,255,255,.55); line-height: 1.75; }

/* ─────── SERVICES ─────── */
.ab-services { background: var(--gray-bg); padding: 80px 0; }
.ab-services-grid {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 20px; margin-top: 44px;
}
.ab-service-card {
  background: #fff; border-radius: 12px; padding: 26px 20px;
  border: 1px solid var(--border); box-shadow: 0 2px 12px rgba(0,0,0,.05);
  display: flex; align-items: flex-start; gap: 15px;
  transition: transform .2s, box-shadow .2s;
}
.ab-service-card:hover { transform: translateY(-4px); box-shadow: 0 10px 32px rgba(0,0,0,.09); }
.ab-service-name {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 12.5px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .4px;
  margin-bottom: 8px; line-height: 1.3;
}
.ab-service-desc { font-size: 12px; color: var(--gray-text); line-height: 1.75; margin-bottom: 12px; }
.ab-service-link {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11.5px;
  color: var(--navy); display: inline-flex; align-items: center; gap: 5px;
  border-bottom: 1.5px solid var(--navy); padding-bottom: 1px;
  transition: color .18s, border-color .18s;
  background: none; border-top: none; border-left: none; border-right: none;
  cursor: pointer;
}
.ab-service-link:hover { color: var(--orange); border-bottom-color: var(--orange); }

/* ─────── BOARD OF DIRECTORS ─────── */
.ab-team {
  background: var(--gray-bg); padding: 88px 0;
}
.ab-team-header { text-align: center; margin-bottom: 56px; }
.ab-team-header .ab-eyebrow { justify-content: center; display: flex; align-items: center; gap: 10px; }
.ab-team-header .ab-eyebrow::before,
.ab-team-header .ab-eyebrow::after {
  content: ''; display: inline-block; width: 28px; height: 2px;
  background: var(--orange); border-radius: 2px; flex-shrink: 0;
}

/* CEO row — centered single large card */
.ab-team-ceo-row {
  display: flex; justify-content: center; margin-bottom: 28px;
}
.ab-team-card-ceo {
  display: flex; align-items: stretch;
  background: var(--navy); border-radius: 12px; overflow: hidden;
  box-shadow: 0 8px 40px rgba(10,22,40,.22);
  max-width: 820px; width: 100%;
  border: 1px solid rgba(255,255,255,.08);
  transition: transform .22s, box-shadow .22s;
}
.ab-team-card-ceo:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 56px rgba(10,22,40,.3);
}
.ab-team-card-ceo .ab-team-avatar-side {
  width: 200px; flex-shrink: 0;
  background: linear-gradient(160deg, #0d1e3a 0%, #0a1628 100%);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 16px;
  padding: 36px 24px; position: relative;
}
.ab-team-card-ceo .ab-team-avatar-side::after {
  content: ''; position: absolute; right: 0; top: 20%; bottom: 20%;
  width: 1px; background: rgba(255,255,255,.08);
}
.ab-team-avatar-lg {
  width: 96px; height: 96px; border-radius: 50%;
  background: var(--orange);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 30px; color: #fff;
  border: 3px solid rgba(255,255,255,.15);
  box-shadow: 0 6px 24px rgba(232,97,26,.4);
  flex-shrink: 0;
}
.ab-team-ceo-tag {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 8.5px;
  letter-spacing: 1.5px; text-transform: uppercase;
  color: var(--orange); background: rgba(232,97,26,.12);
  border: 1px solid rgba(232,97,26,.25); border-radius: 3px;
  padding: 4px 10px; text-align: center; white-space: nowrap;
}
.ab-team-card-ceo .ab-team-content-side {
  flex: 1; padding: 32px 36px;
  display: flex; flex-direction: column; justify-content: center;
}
.ab-team-name-lg {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 20px;
  color: #fff; margin-bottom: 4px; line-height: 1.2;
}
.ab-team-role-lg {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); text-transform: uppercase; letter-spacing: .8px;
  margin-bottom: 16px;
}
.ab-team-divider-lg {
  width: 36px; height: 2.5px; background: var(--orange);
  border-radius: 2px; margin-bottom: 16px;
}
.ab-team-desc-lg {
  font-size: 13px; color: rgba(255,255,255,.62); line-height: 1.85;
  margin-bottom: 22px; max-width: 520px;
}
.ab-team-linkedin-white {
  display: inline-flex; align-items: center; gap: 7px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10.5px;
  color: rgba(255,255,255,.7); text-transform: uppercase; letter-spacing: .6px;
  text-decoration: none; border: 1px solid rgba(255,255,255,.2);
  border-radius: 4px; padding: 8px 14px; width: fit-content;
  transition: background .2s, color .2s, border-color .2s;
}
.ab-team-linkedin-white:hover {
  background: var(--orange); border-color: var(--orange); color: #fff;
}

/* COO+CTO row — one wide card full width below CEO */
.ab-team-coo-row {
  display: flex; justify-content: center; margin-bottom: 28px;
}
.ab-team-card-coo {
  display: flex; align-items: stretch;
  background: #fff; border-radius: 12px; overflow: hidden;
  box-shadow: 0 4px 24px rgba(10,22,40,.09);
  max-width: 820px; width: 100%;
  border: 1px solid var(--border-light);
  transition: transform .22s, box-shadow .22s;
}
.ab-team-card-coo:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(10,22,40,.14);
}
.ab-team-card-coo .ab-team-avatar-side {
  width: 180px; flex-shrink: 0;
  background: var(--gray-bg);
  border-right: 1px solid var(--border-light);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 14px;
  padding: 28px 20px;
}
.ab-team-card-coo .ab-team-content-side {
  flex: 1; padding: 28px 32px;
  display: flex; flex-direction: column; justify-content: center;
}

/* Board members grid — 3 cards */
.ab-team-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.ab-team-card {
  background: #fff; border-radius: 12px; overflow: hidden;
  border: 1px solid var(--border-light);
  box-shadow: 0 2px 14px rgba(0,0,0,.06);
  transition: transform .22s, box-shadow .22s;
  display: flex; flex-direction: column;
}
.ab-team-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 36px rgba(10,22,40,.12);
}
.ab-team-avatar-bg {
  background: linear-gradient(135deg, #0a1628 0%, #0d1e3a 100%);
  padding: 28px 0 22px;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 12px;
}
.ab-team-avatar {
  width: 76px; height: 76px; border-radius: 50%;
  background: var(--orange);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 24px; color: #fff;
  border: 3px solid rgba(255,255,255,.15);
  box-shadow: 0 4px 16px rgba(232,97,26,.4);
  flex-shrink: 0;
}
.ab-team-member-tag {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 8px;
  letter-spacing: 1.2px; text-transform: uppercase;
  color: rgba(255,255,255,.45); background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.1); border-radius: 3px;
  padding: 3px 9px;
}
.ab-team-body {
  padding: 20px 20px 24px;
  display: flex; flex-direction: column; flex: 1;
}
.ab-team-name {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 13.5px;
  color: var(--navy); margin-bottom: 5px; line-height: 1.25;
}
.ab-team-role {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 9.5px;
  color: var(--orange); text-transform: uppercase; letter-spacing: .6px;
  margin-bottom: 12px; line-height: 1.45;
}
.ab-team-divider {
  width: 28px; height: 2px; background: var(--orange);
  border-radius: 2px; margin-bottom: 12px;
}
.ab-team-desc {
  font-size: 12px; color: var(--gray-text); line-height: 1.8;
  margin-bottom: 18px; flex: 1;
}
.ab-team-linkedin {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .5px;
  text-decoration: none; border: 1px solid var(--border-light);
  border-radius: 4px; padding: 7px 12px; width: fit-content;
  transition: background .18s, color .18s, border-color .18s;
  margin-top: auto;
}
.ab-team-linkedin:hover { background: var(--navy); color: #fff; border-color: var(--navy); }

/* ─────── COMMITMENT & GOALS ─────── */
.ab-commitment { background: var(--navy); padding: 80px 0; }
.ab-commit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 48px; align-items: start; }
.ab-commit-block-title {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 12.5px;
  color: var(--orange); text-transform: uppercase; letter-spacing: 1px;
  margin-bottom: 22px; display: flex; align-items: center; gap: 12px;
}
.ab-commit-list { list-style: none; }
.ab-commit-list li {
  display: flex; align-items: flex-start; gap: 13px;
  font-size: 13.5px; color: rgba(255,255,255,.8);
  margin-bottom: 16px; line-height: 1.7;
}
.ab-check-icon {
  width: 22px; height: 22px; background: var(--orange); border-radius: 50%;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;
}
.ab-goals-card {
  background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);
  border-radius: 14px; padding: 30px;
}
.ab-goals-list { list-style: none; }
.ab-goals-list li {
  display: flex; align-items: flex-start; gap: 12px;
  font-size: 13px; color: rgba(255,255,255,.72);
  margin-bottom: 14px; line-height: 1.65;
}
.ab-goals-list li:last-child { margin-bottom: 0; }
.ab-goal-num {
  width: 22px; height: 22px; flex-shrink: 0; margin-top: 1px;
  background: rgba(232,97,26,.15); border: 1px solid rgba(232,97,26,.45);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 9.5px; color: var(--orange);
}

/* ─────── CONTACT CTA ─────── */
.ab-cta {
  background: var(--orange); padding: 60px 0;
  position: relative; overflow: hidden;
}
.ab-cta::before {
  content: '';
  position: absolute; inset: 0;
  background: repeating-linear-gradient(
    -45deg, transparent, transparent 18px,
    rgba(0,0,0,.04) 18px, rgba(0,0,0,.04) 19px
  );
  pointer-events: none;
}
.ab-cta-inner {
  display: flex; align-items: center;
  justify-content: space-between; gap: 32px;
  flex-wrap: wrap; position: relative;
}
.ab-cta-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900;
  font-size: 26px; color: #fff; margin-bottom: 6px; text-transform: uppercase; letter-spacing: -.3px;
}
.ab-cta-sub { font-size: 13.5px; color: rgba(255,255,255,.8); }
.ab-cta-details { display: flex; gap: 28px; flex-wrap: wrap; }
.ab-cta-detail { display: flex; align-items: center; gap: 11px; }
.ab-cta-detail-icon {
  width: 40px; height: 40px; background: rgba(255,255,255,.18);
  border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.ab-cta-detail-label { font-size: 9.5px; color: rgba(255,255,255,.68); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 2px; }
.ab-cta-detail-text { font-size: 13px; color: #fff; font-weight: 600; line-height: 1.4; }
a.ab-cta-detail-text { transition: opacity .18s; }
a.ab-cta-detail-text:hover { opacity: .8; }
.btn-white {
  background: #fff; color: var(--orange); border: none;
  padding: 15px 34px; border-radius: 4px;
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 12.5px;
  cursor: pointer; letter-spacing: .7px; text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 8px; white-space: nowrap; flex-shrink: 0;
  box-shadow: 0 4px 18px rgba(0,0,0,.15);
  transition: background .2s, color .2s;
}
.btn-white:hover { background: var(--navy); color: #fff; }

/* ─────── RESPONSIVE ─────── */
@media (max-width: 1100px) {
  .ab-team-grid    { grid-template-columns: repeat(3, 1fr); }
  .ab-team-card-ceo, .ab-team-card-coo { flex-direction: column; }
  .ab-team-card-ceo .ab-team-avatar-side,
  .ab-team-card-coo .ab-team-avatar-side { width: 100%; flex-direction: row; padding: 20px 24px; gap: 20px; }
  .ab-team-card-ceo .ab-team-avatar-side::after { display: none; }
  .ab-services-grid { grid-template-columns: repeat(3, 1fr); }
  .ab-hero-title   { font-size: 38px; }
  .ab-inner        { padding: 0 32px; }
}
@media (max-width: 900px) {
  .ab-services-grid { grid-template-columns: repeat(2, 1fr); }
  .ab-values-grid   { grid-template-columns: 1fr 1fr; }
  .ab-inner         { padding: 0 28px; }
}
@media (max-width: 768px) {
  .ab-hero-grid, .ab-mv-grid, .ab-commit-grid { grid-template-columns: 1fr; gap: 36px; }
  .ab-hero-title  { font-size: 32px; }
  .ab-team-grid   { grid-template-columns: 1fr 1fr; }
  .ab-cta-inner   { flex-direction: column; align-items: flex-start; gap: 24px; }
  .ab-cta-details { flex-direction: column; gap: 16px; }
  .ab-inner       { padding: 0 24px; }
  .ab-section-header { flex-direction: column; align-items: flex-start; gap: 16px; }
}
@media (max-width: 560px) {
  .ab-values-grid, .ab-services-grid, .ab-team-grid { grid-template-columns: 1fr; }
  .ab-team-card-ceo .ab-team-content-side,
  .ab-team-card-coo .ab-team-content-side { padding: 20px; }
  .ab-hero-btns   { flex-direction: column; }
  .btn-primary, .btn-outline-light { justify-content: center; width: 100%; }
  .ab-hero-title  { font-size: 28px; }
  .ab-mv-grid     { grid-template-columns: 1fr; }
  .ab-hero-stats  { grid-template-columns: repeat(2, 1fr); }
  .ab-stat-card:nth-child(2) { border-right: none; }
  .ab-inner       { padding: 0 20px; }
}
@media (max-width: 380px) {
  .ab-inner { padding: 0 16px; }
}
`;

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */

export default function AboutPage({ onNavigate = () => { } }) {
    /* ── Firebase data ── */
    const aboutData = useAboutData({
        heroTitle: "We Are\nToughman",
        heroDesc: "TOUGHMANFP Corporation is a registered halal frozen chicken processing company based in Zamboanga City. We supply premium frozen poultry products to distributors, supermarkets, and food service operators across the Philippines.",
        stats: STATS,
        commitments: COMMITMENTS,
        futureGoals: FUTURE_GOALS,
    });
    const liveStats = aboutData.stats || STATS;
    const liveCommitments = aboutData.commitments || COMMITMENTS;
    const liveFutureGoals = aboutData.futureGoals || FUTURE_GOALS;
    const liveHeroTitle = aboutData.heroTitle;
    const liveHeroDesc = aboutData.heroDesc;

    const liveTeam = useTeamData(TEAM);

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: ABOUT_CSS }} />
            <main className="ab-page">

                {/* ══════════════════════════════
                    PAGE HERO
                ═══════════════════════════════ */}
                <section className="ab-hero">
                    <div className="ab-inner">
                        <div className="ab-hero-grid">

                            {/* Left: Text */}
                            <div>
                                <div className="ab-hero-eyebrow">Who We Are</div>
                                <h1 className="ab-hero-title">
                                    About <span>Toughman</span><br />Halal Chicken
                                </h1>
                                <div className="ab-hero-divider" />
                                <p className="ab-hero-desc">
                                    Toughman Frozen Product Processing is a Philippine-based frozen poultry
                                    processing and distribution company established in 2026. We operate an
                                    integrated processing facility and cold chain logistics network to supply
                                    certified Halal frozen chicken products to distributors, food service
                                    operators, and retailers nationwide.
                                </p>
                                <div className="ab-hero-btns">
                                    <button className="btn-primary" onClick={() => onNavigate("products")}>
                                        Our Products <IconArrow size={13} />
                                    </button>
                                    <button className="btn-outline-light" onClick={() => onNavigate("contact")}>
                                        Contact Us <IconArrow size={13} />
                                    </button>
                                </div>
                            </div>

                            {/* Right: Image card */}
                            <div className="ab-hero-img-card">
                                <img
                                    src={aboutFacility}
                                    alt="Toughman processing facility and delivery fleet"
                                    className="ab-hero-img"
                                    onError={e => {
                                        e.target.style.display = "none";
                                        e.target.nextSibling.style.display = "flex";
                                    }}
                                />
                                <div className="ab-hero-img-fallback" style={{ display: "none" }}>
                                    {ICONS.building}
                                    <span className="ab-hero-img-fallback-text">Processing Facility</span>
                                </div>
                                <div className="ab-hero-stats">
                                    {liveStats.map(s => (
                                        <div className="ab-stat-card" key={s.label}>
                                            <div className="ab-stat-value">{s.value}</div>
                                            <div className="ab-stat-label">{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════
                    MISSION & VISION
                ═══════════════════════════════ */}
                <section className="ab-mv" aria-labelledby="mv-heading">
                    <div className="ab-inner">
                        <div style={{ textAlign: "center" }}>
                            <span className="ab-eyebrow">Our Purpose</span>
                            <h2 className="ab-title" id="mv-heading">Mission &amp; Vision</h2>
                            <p className="ab-desc" style={{ maxWidth: 580, margin: "0 auto" }}>
                                Every decision we make is anchored on building a company that the Philippine
                                food industry — and the Halal community — can genuinely rely on.
                            </p>
                        </div>
                        <div className="ab-mv-grid">
                            <div className="ab-mv-card">
                                <div className="ab-mv-icon"><IconBox name="target" /></div>
                                <span className="ab-mv-label">Our Mission</span>
                                <div className="ab-mv-title">What We Do Every Day</div>
                                <p className="ab-mv-text">
                                    To supply premium-quality Halal frozen chicken products through safe and
                                    certified processing, disciplined cold chain management, and reliable
                                    delivery — while maintaining integrity and operational consistency in
                                    every transaction we fulfill.
                                </p>
                            </div>
                            <div className="ab-mv-card">
                                <div className="ab-mv-icon"><IconBox name="telescope" /></div>
                                <span className="ab-mv-label">Our Vision</span>
                                <div className="ab-mv-title">Where We Are Headed</div>
                                <p className="ab-mv-text">
                                    To become a recognized and trusted Halal frozen poultry processing
                                    company in the Philippines — known among food industry buyers for
                                    consistent quality, dependable supply, and professional business conduct.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════
                    CORE VALUES
                ═══════════════════════════════ */}
                <section className="ab-values" aria-labelledby="values-heading">
                    <div className="ab-inner">
                        <div style={{ textAlign: "center" }}>
                            <span className="ab-eyebrow" style={{ color: "var(--orange)" }}>What Drives Us</span>
                            <h2 className="ab-title ab-title-white" id="values-heading">Our Core Values</h2>
                            <p className="ab-desc ab-desc-white" style={{ maxWidth: 560, margin: "0 auto" }}>
                                These principles guide how we operate, how we treat our partners, and how
                                we make decisions at every level of the business.
                            </p>
                        </div>
                        <div className="ab-values-grid">
                            {CORE_VALUES.map(v => (
                                <div className="ab-value-card" key={v.name}>
                                    <IconBox name={v.icon} ghost />
                                    <div>
                                        <div className="ab-value-name">{v.name}</div>
                                        <div className="ab-value-desc">{v.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════
                    SERVICES
                ═══════════════════════════════ */}
                <section className="ab-services" aria-labelledby="services-heading">
                    <div className="ab-inner">
                        <div className="ab-section-header">
                            <div>
                                <span className="ab-eyebrow">What We Offer</span>
                                <h2 className="ab-title" id="services-heading">Our Services</h2>
                                <p className="ab-desc" style={{ maxWidth: 520 }}>
                                    From Halal-certified processing to cold chain logistics, we provide
                                    end-to-end frozen poultry supply solutions for businesses of any scale.
                                </p>
                            </div>
                        </div>
                        <div className="ab-services-grid">
                            {SERVICES.map(svc => (
                                <div className="ab-service-card" key={svc.name}>
                                    <IconBox name={svc.icon} />
                                    <div style={{ flex: 1 }}>
                                        <div className="ab-service-name">{svc.name}</div>
                                        <div className="ab-service-desc">{svc.desc}</div>
                                        <button
                                            className="ab-service-link"
                                            onClick={() => onNavigate("contact")}
                                        >
                                            Inquire <IconArrow size={11} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════
                    BOARD OF DIRECTORS
                ═══════════════════════════════ */}
                <section className="ab-team" aria-labelledby="team-heading">
                    <div className="ab-inner">

                        {/* Section header */}
                        <div className="ab-team-header">
                            <span className="ab-eyebrow">Leadership &amp; Governance</span>
                            <h2 className="ab-title" id="team-heading" style={{ marginTop: 10 }}>Meet Our Board of Directors</h2>
                            <p className="ab-desc" style={{ maxWidth: 640, margin: "0 auto" }}>
                                At TOUGHMANFP Corporation, our leadership team is composed of experienced professionals
                                committed to innovation, operational excellence, strategic growth, and long-term business
                                sustainability. Together, they drive the corporation forward with strong leadership,
                                technical expertise, and a shared vision for success.
                            </p>
                        </div>

                        {/* CEO — wide horizontal card */}
                        <div className="ab-team-ceo-row">
                            <article className="ab-team-card-ceo" aria-label="Chief Executive Officer">
                                <div className="ab-team-avatar-side">
                                    <div className="ab-team-avatar-lg" aria-hidden="true">AA</div>
                                    <span className="ab-team-ceo-tag">Chief Executive Officer</span>
                                </div>
                                <div className="ab-team-content-side">
                                    <div className="ab-team-name-lg">Abdelrasul Adjilani</div>
                                    <div className="ab-team-role-lg">Chief Executive Officer (CEO)</div>
                                    <div className="ab-team-divider-lg" />
                                    <p className="ab-team-desc-lg">
                                        Leads the overall vision, strategic direction, and corporate growth of TOUGHMANFP Corporation.
                                        He oversees executive management, business development, corporate partnerships, and long-term
                                        organizational planning to ensure sustainable success and innovation across all operations.
                                    </p>
                                    <a href="#" className="ab-team-linkedin-white" aria-label="Abdelrasul Adjilani LinkedIn">
                                        {ICONS.linkedin} LinkedIn
                                    </a>
                                </div>
                            </article>
                        </div>

                        {/* COO/CTO — wide horizontal card */}
                        <div className="ab-team-coo-row">
                            <article className="ab-team-card-coo" aria-label="Chief Operating Officer">
                                <div className="ab-team-avatar-side">
                                    <div className="ab-team-avatar" aria-hidden="true" style={{ width: 76, height: 76, fontSize: 22 }}>WP</div>
                                    <span className="ab-team-member-tag" style={{ color: "var(--orange)", background: "var(--orange-dim)", border: "1px solid rgba(232,97,26,.25)" }}>COO / CTO</span>
                                </div>
                                <div className="ab-team-content-side">
                                    <div className="ab-team-name" style={{ fontSize: 16, marginBottom: 5 }}>Wryan Alfred Punzalan</div>
                                    <div className="ab-team-role">Chief Operating Officer (COO) / Chief Technical Officer (CTO)</div>
                                    <div className="ab-team-divider" style={{ marginBottom: 14 }} />
                                    <p className="ab-team-desc" style={{ fontSize: 13, lineHeight: 1.85, marginBottom: 20, color: "#4a5568", maxWidth: 560 }}>
                                        Manages the corporation's operational and technological infrastructure. Leads system development,
                                        IT operations, digital transformation, cybersecurity initiatives, and technical innovation while
                                        ensuring efficient day-to-day business operations and scalable technology solutions.
                                    </p>
                                    <a href="#" className="ab-team-linkedin" aria-label="Wryan Alfred Punzalan LinkedIn">
                                        {ICONS.linkedin} LinkedIn
                                    </a>
                                </div>
                            </article>
                        </div>

                        {/* Board Members — 3-column grid */}
                        <div className="ab-team-grid">
                            {TEAM.slice(2).map(m => (
                                <article className="ab-team-card" key={m.name}>
                                    <div className="ab-team-avatar-bg">
                                        <div className="ab-team-avatar" aria-hidden="true">{m.initials}</div>
                                        <span className="ab-team-member-tag">Board Member</span>
                                    </div>
                                    <div className="ab-team-body">
                                        <div className="ab-team-name">{m.name}</div>
                                        <div className="ab-team-role">{m.role}</div>
                                        <div className="ab-team-divider" />
                                        <p className="ab-team-desc">{m.desc}</p>
                                        <a
                                            href={m.linkedin}
                                            className="ab-team-linkedin"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${m.name} LinkedIn profile`}
                                        >
                                            {ICONS.linkedin} LinkedIn
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>

                    </div>
                </section>

                {/* ══════════════════════════════
                    COMMITMENT & FUTURE GOALS
                ═══════════════════════════════ */}
                <section className="ab-commitment" aria-labelledby="commit-heading">
                    <div className="ab-inner">
                        <div style={{ textAlign: "center" }}>
                            <span className="ab-eyebrow" style={{ color: "var(--orange)" }}>Our Promise</span>
                            <h2 className="ab-title ab-title-white" id="commit-heading">
                                Commitments &amp; Future Goals
                            </h2>
                            <p className="ab-desc ab-desc-white" style={{ maxWidth: 560, margin: "0 auto" }}>
                                We are actively growing our capacity, reach, and capabilities to serve the
                                Philippine food industry at a higher level each year.
                            </p>
                        </div>
                        <div className="ab-commit-grid">

                            {/* Commitments */}
                            <div>
                                <div className="ab-commit-block-title">
                                    <IconBoxSm name="shield" ghost />
                                    Our Commitments
                                </div>
                                <ul className="ab-commit-list">
                                    {liveCommitments.map(item => (
                                        <li key={item}>
                                            <span className="ab-check-icon" aria-hidden="true">
                                                <IconCheck size={11} />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Goals */}
                            <div className="ab-goals-card">
                                <div className="ab-commit-block-title">
                                    <IconBoxSm name="rocket" ghost />
                                    Future Goals
                                </div>
                                <ul className="ab-goals-list">
                                    {liveFutureGoals.map((goal, i) => (
                                        <li key={i}>
                                            <span className="ab-goal-num" aria-hidden="true">{i + 1}</span>
                                            {goal}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════
                    CONTACT CTA
                ═══════════════════════════════ */}
                <section className="ab-cta" aria-label="Contact call to action">
                    <div className="ab-inner ab-cta-inner">
                        <div>
                            <h2 className="ab-cta-title">Get in Touch</h2>
                            <p className="ab-cta-sub">
                                Inquiries, supply agreements, and partnership discussions are always welcome.
                            </p>
                        </div>
                        <div className="ab-cta-details">
                            {CONTACT_DETAILS.map(c => (
                                <div className="ab-cta-detail" key={c.label}>
                                    <div className="ab-cta-detail-icon" aria-hidden="true">
                                        {ICONS[c.icon]}
                                    </div>
                                    <div>
                                        <div className="ab-cta-detail-label">{c.label}</div>
                                        {c.href
                                            ? <a href={c.href} className="ab-cta-detail-text">{c.text}</a>
                                            : <div className="ab-cta-detail-text">{c.text}</div>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="btn-white" onClick={() => onNavigate("contact")}>
                            Contact Us <IconArrow size={13} color="var(--orange)" />
                        </button>
                    </div>
                </section>

            </main>
        </>
    );
}