import aboutFacility from "../assets/about-facility.png";

// ─── SVG ICON COMPONENT (same style as homepage feature-icon-box) ─────────────

const s = { fill: "none", stroke: "#fff", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

const Icon = ({ name }) => {
    const icons = {
        // Core Values
        star: (
            <svg viewBox="0 0 24 24" width="26" height="26" {...s}>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
        handshake: (
            <svg viewBox="0 0 24 24" width="26" height="26" {...s}>
                <path d="M9 12l2 2 4-4" />
                <path d="M3 12c0-1.5.8-2.9 2-3.7L9 6l3 3-2 2 2 2-3 3-3-2c-1.2-.8-2-2.2-2-3.7z" />
                <path d="M21 12c0-1.5-.8-2.9-2-3.7L15 6l-3 3 2 2-2 2 3 3 3-2c1.2-.8 2-2.2 2-3.7z" />
            </svg>
        ),
        truck: (
            <svg viewBox="0 0 24 24" width="26" height="26" {...s}>
                <rect x="1" y="3" width="15" height="13" rx="1" />
                <path d="M16 8h4l3 5v3h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
        ),
        moon: (
            <svg viewBox="0 0 24 24" width="26" height="26" {...s}>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
        ),
        lightbulb: (
            <svg viewBox="0 0 24 24" width="26" height="26" {...s}>
                <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.2-1.2 4.2-3 5.4V17H9v-2.6C7.2 13.2 6 11.2 6 9a6 6 0 0 1 6-6z" />
            </svg>
        ),
        heart: (
            <svg viewBox="0 0 24 24" width="26" height="26" {...s}>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
        // Services
        chicken: (
            <svg viewBox="0 0 24 24" width="26" height="26" {...s}>
                <path d="M12 2C9 2 7 4 7 6c0 1 .4 2 1 2.7L5 12H3l-1 4h4l1-2h1v4h8v-4h1l1 2h4l-1-4h-2l-3-3.3c.6-.7 1-1.7 1-2.7 0-2-2-4-5-4z" />
                <circle cx="14" cy="6" r="1" fill="#fff" stroke="none" />
            </svg>
        ),
        snowflake: (
            <svg viewBox="0 0 24 24" width="26" height="26" {...s}>
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
        package: (
            <svg viewBox="0 0 24 24" width="26" height="26" {...s}>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        ),
        shop: (
            <svg viewBox="0 0 24 24" width="26" height="26" {...s}>
                <path d="M3 9l1-6h16l1 6" />
                <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
                <path d="M5 21V11h14v10" />
                <rect x="9" y="14" width="6" height="7" />
            </svg>
        ),
        cart: (
            <svg viewBox="0 0 24 24" width="26" height="26" {...s}>
                <circle cx="9" cy="21" r="1" fill="#fff" stroke="none" />
                <circle cx="20" cy="21" r="1" fill="#fff" stroke="none" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
        ),
        coldchain: (
            <svg viewBox="0 0 24 24" width="26" height="26" {...s}>
                <rect x="1" y="3" width="15" height="13" rx="1" />
                <path d="M16 8h4l3 5v3h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
                <line x1="7" y1="7" x2="7" y2="12" strokeWidth="1.4" />
                <line x1="5" y1="9" x2="9" y2="9" strokeWidth="1.4" />
            </svg>
        ),
        b2b: (
            <svg viewBox="0 0 24 24" width="26" height="26" {...s}>
                <rect x="2" y="7" width="8" height="14" rx="1" />
                <rect x="14" y="3" width="8" height="18" rx="1" />
                <path d="M10 10h4M10 14h4" />
            </svg>
        ),
        // Mission / Vision
        target: (
            <svg viewBox="0 0 24 24" width="26" height="26" {...s}>
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" fill="#fff" stroke="none" />
            </svg>
        ),
        telescope: (
            <svg viewBox="0 0 24 24" width="26" height="26" {...s}>
                <path d="M10 9l-7 3.5 1 2 7-3.5" />
                <path d="M10 9l5-2.5 1 2-5 2.5" />
                <path d="M16 6.5l3-1.5 1 2-3 1.5" />
                <line x1="10" y1="9" x2="12" y2="21" />
                <line x1="8" y1="21" x2="16" y2="21" />
            </svg>
        ),
        // Commitment
        shield: (
            <svg viewBox="0 0 24 24" width="26" height="26" {...s}>
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
                <polyline points="9 12 11 14 15 10" />
            </svg>
        ),
        rocket: (
            <svg viewBox="0 0 24 24" width="26" height="26" {...s}>
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
    };
    return icons[name] || null;
};

// Icon box — same class as homepage .feature-icon-box
const IconBox = ({ name, small = false }) => (
    <div className={small ? "about-icon-box-sm" : "about-icon-box"}>
        <Icon name={name} />
    </div>
);

// ─── DATA ────────────────────────────────────────────────────────────────────

const STATS = [
    { value: "2026", label: "Year Established" },
    { value: "100%", label: "Halal Compliant" },
    { value: "-18°C", label: "Cold Chain Maintained" },
    { value: "5+", label: "Management Experts" },
];

const CORE_VALUES = [
    { icon: "star", name: "Quality", desc: "We ensure every product meets strict quality, hygiene, and food safety standards." },
    { icon: "handshake", name: "Integrity", desc: "We conduct business honestly, transparently, and professionally." },
    { icon: "truck", name: "Reliability", desc: "We are committed to timely delivery and dependable service." },
    { icon: "moon", name: "Halal Compliance", desc: "We follow proper Halal processing practices and maintain respect for Islamic food preparation standards." },
    { icon: "lightbulb", name: "Innovation", desc: "We continuously improve our systems, operations, and processes." },
    { icon: "heart", name: "Customer Commitment", desc: "We prioritize long-term relationships and customer satisfaction." },
];

const SERVICES = [
    { icon: "chicken", name: "Halal Frozen Chicken Processing", desc: "Certified Halal processing from slaughter to freezing under strict Islamic and food safety guidelines." },
    { icon: "snowflake", name: "Cold Storage & Preservation", desc: "State-of-the-art cold storage facilities maintaining -18°C to preserve product quality and freshness." },
    { icon: "package", name: "Product Packaging", desc: "Hygienic, sealed packaging designed to protect product integrity during storage and transport." },
    { icon: "shop", name: "Wholesale Distribution", desc: "Bulk supply solutions tailored for supermarkets, food businesses, and large-scale buyers." },
    { icon: "cart", name: "Retail Supply", desc: "Reliable retail-ready product lines for grocery stores and consumer-facing establishments." },
    { icon: "coldchain", name: "Cold Chain Logistics", desc: "End-to-end temperature-controlled logistics ensuring freshness from our facility to your doorstep." },
    { icon: "b2b", name: "Business-to-Business Supply", desc: "Custom supply agreements with restaurants, hotels, canteens, and institutional buyers." },
];

const TEAM = [
    { name: "Abdelrasul Adjilani", role: "Chief Executive Officer (CEO)", initials: "AA", desc: "Leads overall business direction, corporate decision-making, and strategic growth while ensuring operational excellence and long-term sustainability." },
    { name: "Wryan Alfred Punzalan", role: "Chief Operating Officer / Chief Technical Officer", initials: "WP", desc: "Oversees day-to-day operations, technology systems, process automation, system development, and technical management." },
    { name: "Al-Bhien Adjilani", role: "Executive Shareholder", initials: "BA", desc: "Supports company investment initiatives and contributes to strategic growth and financial direction." },
    { name: "Aldizier Tantong", role: "Board Member", initials: "AT", desc: "Participates in corporate governance, strategic planning, and organizational decision-making to support company objectives." },
    { name: "Mudzhar Adju", role: "Board Member", initials: "MA", desc: "Contributes to business operations, strategic discussions, and company development while supporting organizational goals." },
];

const FUTURE_GOALS = [
    "Expand nationwide distribution across the Philippines",
    "Increase cold storage capacity and processing volume",
    "Establish additional processing facilities in key regions",
    "Implement advanced enterprise resource planning systems",
    "Develop stronger partnerships with suppliers and distributors",
    "Become a recognized Halal frozen product brand in the Philippines",
];

// ─── STYLES ──────────────────────────────────────────────────────────────────

const ABOUT_CSS = `
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
.tm-page { width: 100%; min-width: 100%; overflow-x: hidden; }
.inner { width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 40px; }

/* ─ PAGE HERO BANNER ─ */
.about-page-hero { background: var(--navy); padding: 80px 0 70px; position: relative; overflow: hidden; }
.about-page-hero::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(244,123,32,.08) 0%, transparent 60%); pointer-events: none; }
.about-page-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
.about-hero-label { display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px; color: var(--orange); letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 16px; }
.about-hero-title { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 48px; color: #fff; line-height: 1.08; text-transform: uppercase; letter-spacing: -0.5px; margin-bottom: 20px; }
.about-hero-title span { color: var(--orange); }
.about-hero-divider { width: 50px; height: 3.5px; background: var(--orange); border-radius: 2px; margin-bottom: 20px; }
.about-hero-desc { font-size: 14px; color: rgba(255,255,255,.7); line-height: 1.85; margin-bottom: 32px; max-width: 500px; }
.about-hero-btns { display: flex; gap: 14px; }
.btn-hero-orange { background: var(--orange); color: #fff; border: none; padding: 14px 28px; border-radius: 4px; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12px; cursor: pointer; letter-spacing: .8px; text-transform: uppercase; transition: background .2s; display: inline-flex; align-items: center; gap: 8px; }
.btn-hero-orange:hover { background: var(--orange-dark); }
.btn-hero-outline { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,.5); padding: 14px 28px; border-radius: 4px; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12px; cursor: pointer; letter-spacing: .8px; text-transform: uppercase; transition: all .2s; display: inline-flex; align-items: center; gap: 8px; }
.btn-hero-outline:hover { border-color: var(--orange); color: var(--orange); }
.about-hero-img-card { border-radius: 16px; overflow: hidden; border: 1.5px solid rgba(255,255,255,.12); box-shadow: 0 16px 56px rgba(0,0,0,.4); }
.about-hero-img { width: 100%; height: 300px; object-fit: cover; display: block; }
.about-hero-img-placeholder { width: 100%; height: 300px; background: linear-gradient(135deg, #0d2a4a, #1a3a6b); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; }
.about-hero-stats { display: grid; grid-template-columns: repeat(4, 1fr); background: #0a1628; }
.about-stat-card { padding: 18px 12px; text-align: center; border-right: 1px solid rgba(255,255,255,.08); }
.about-stat-card:last-child { border-right: none; }
.about-stat-value { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 24px; color: var(--orange); margin-bottom: 4px; line-height: 1; }
.about-stat-label { font-size: 10px; color: rgba(255,255,255,.5); text-transform: uppercase; letter-spacing: .6px; line-height: 1.5; }

/* ─ MISSION VISION ─ */
.mv-section { background: #f5f7fa; padding: 80px 0; }
.mv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: 48px; }
.mv-card { background: #fff; border-radius: 14px; padding: 36px 32px; border: 1px solid #e4e8ef; box-shadow: 0 2px 16px rgba(0,0,0,.06); position: relative; overflow: hidden; }
.mv-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: var(--orange); }
.mv-card-icon-wrap { margin-bottom: 18px; }
.mv-card-label { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10px; color: var(--orange); letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 10px; }
.mv-card-title { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 22px; color: var(--navy); margin-bottom: 16px; line-height: 1.2; }
.mv-card-text { font-size: 14px; color: var(--gray); line-height: 1.85; }

/* ─ ICON BOX (matches homepage .feature-icon-box exactly) ─ */
.about-icon-box {
  width: 54px; height: 54px;
  background: var(--navy);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.about-icon-box-sm {
  width: 34px; height: 34px;
  background: var(--navy);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
/* on dark navy backgrounds, flip box to slightly lighter so it's visible */
.values-section .about-icon-box,
.commitment-section .about-icon-box,
.commitment-section .about-icon-box-sm {
  background: rgba(255,255,255,.12);
  border: 1px solid rgba(255,255,255,.18);
}

/* ─ SHARED ─ */
.section-label { display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px; color: var(--orange); letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 12px; }
.section-title { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 30px; color: var(--navy); text-transform: uppercase; letter-spacing: .5px; margin-bottom: 14px; line-height: 1.2; }
.section-title-white { color: #fff; }
.section-sub { font-size: 14px; color: var(--gray); line-height: 1.75; max-width: 580px; }
.section-sub-white { color: rgba(255,255,255,.65); }
.orange-bar { display: block; width: 42px; height: 4px; background: var(--orange); border-radius: 2px; margin-bottom: 14px; }
.section-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 40px; }

/* ─ CORE VALUES ─ */
.values-section { background: var(--navy); padding: 80px 0; }
.values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 48px; }
.value-card {
  background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);
  border-radius: 12px; padding: 28px 24px;
  transition: transform .2s, background .2s;
  display: flex; align-items: flex-start; gap: 18px;
}
.value-card:hover { transform: translateY(-4px); background: rgba(255,255,255,.09); }
.value-text { flex: 1; }
.value-name {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 13px;
  color: #fff; text-transform: uppercase; letter-spacing: .5px; margin-bottom: 8px;
}
.value-desc { font-size: 12px; color: rgba(255,255,255,.58); line-height: 1.75; }

/* ─ SERVICES ─ */
.services-section { background: #f5f7fa; padding: 80px 0; }
.services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
.service-card {
  background: #fff; border-radius: 12px; padding: 28px 22px;
  border: 1px solid #e4e8ef; box-shadow: 0 2px 12px rgba(0,0,0,.05);
  transition: transform .2s, box-shadow .2s;
  display: flex; align-items: flex-start; gap: 16px;
}
.service-card:hover { transform: translateY(-5px); box-shadow: 0 12px 36px rgba(0,0,0,.1); }
.service-text { flex: 1; }
.service-name {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 13px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .4px;
  margin-bottom: 8px; line-height: 1.3;
}
.service-desc { font-size: 12px; color: var(--gray); line-height: 1.75; }
.service-link {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12px;
  color: var(--navy); text-decoration: none; display: inline-flex; align-items: center; gap: 4px;
  border-bottom: 1.5px solid var(--navy); padding-bottom: 1px; margin-top: 10px;
  transition: color .2s, border-color .2s;
}
.service-link:hover { color: var(--orange); border-color: var(--orange); }

/* ─ TEAM ─ */
.team-section { background: #fff; padding: 80px 0; }
.team-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; margin-top: 48px; }
.team-card { background: #fff; border-radius: 14px; overflow: hidden; border: 1px solid #e4e8ef; box-shadow: 0 2px 14px rgba(0,0,0,.06); transition: transform .2s, box-shadow .2s; text-align: center; }
.team-card:hover { transform: translateY(-5px); box-shadow: 0 14px 36px rgba(0,0,0,.1); }
.team-avatar-wrap { background: var(--navy); padding: 28px 0 20px; display: flex; align-items: center; justify-content: center; }
.team-avatar { width: 72px; height: 72px; border-radius: 50%; background: linear-gradient(135deg, var(--orange) 0%, #d96a10 100%); display: flex; align-items: center; justify-content: center; font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 22px; color: #fff; border: 3px solid rgba(255,255,255,.2); box-shadow: 0 4px 18px rgba(244,123,32,.4); }
.team-body { padding: 20px 16px 24px; }
.team-name { font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 13px; color: var(--navy); margin-bottom: 6px; line-height: 1.3; }
.team-role { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10px; color: var(--orange); text-transform: uppercase; letter-spacing: .5px; margin-bottom: 12px; line-height: 1.4; }
.team-divider { width: 28px; height: 2px; background: var(--orange); border-radius: 2px; margin: 0 auto 12px; }
.team-desc { font-size: 11.5px; color: var(--gray); line-height: 1.75; }

/* ─ COMMITMENT & GOALS ─ */
.commitment-section { background: var(--navy); padding: 80px 0; }
.commitment-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 48px; align-items: start; }
.commitment-block-title { font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 13px; color: var(--orange); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }
.commitment-list { list-style: none; }
.commitment-list li { display: flex; align-items: flex-start; gap: 14px; font-size: 14px; color: rgba(255,255,255,.82); margin-bottom: 16px; line-height: 1.7; }
.check-dot { width: 24px; height: 24px; background: var(--orange); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; color: #fff; flex-shrink: 0; margin-top: 2px; }
.goals-card { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); border-radius: 14px; padding: 32px; }
.goals-list { list-style: none; }
.goals-list li { display: flex; align-items: flex-start; gap: 12px; font-size: 13px; color: rgba(255,255,255,.72); margin-bottom: 14px; line-height: 1.65; }
.goal-number { width: 22px; height: 22px; background: rgba(244,123,32,.2); border: 1px solid var(--orange); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10px; color: var(--orange); flex-shrink: 0; margin-top: 1px; }

/* ─ CONTACT CTA ─ */
.contact-cta { background: var(--orange); padding: 60px 0; }
.contact-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 32px; }
.contact-cta-title { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 28px; color: #fff; margin-bottom: 6px; text-transform: uppercase; }
.contact-cta-sub { font-size: 14px; color: rgba(255,255,255,.8); }
.contact-cta-details { display: flex; gap: 32px; flex-wrap: wrap; }
.contact-detail { display: flex; align-items: center; gap: 12px; }
.contact-detail-icon-box { width: 42px; height: 42px; background: rgba(255,255,255,.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.contact-detail-text { font-size: 13px; color: #fff; font-weight: 600; line-height: 1.5; }
.contact-detail-label { font-size: 10px; color: rgba(255,255,255,.7); text-transform: uppercase; letter-spacing: 1px; }
.btn-contact-white { background: #fff; color: var(--orange); border: none; padding: 16px 36px; border-radius: 4px; font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 13px; cursor: pointer; letter-spacing: .8px; text-transform: uppercase; transition: all .2s; display: inline-flex; align-items: center; gap: 8px; white-space: nowrap; flex-shrink: 0; box-shadow: 0 4px 20px rgba(0,0,0,.15); }
.btn-contact-white:hover { background: var(--navy); color: #fff; }

/* ─ RESPONSIVE ─ */
@media (max-width: 1100px) { .team-grid { grid-template-columns: repeat(3, 1fr); } .services-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 768px) {
  .about-page-hero-grid, .mv-grid, .commitment-grid { grid-template-columns: 1fr; gap: 36px; }
  .about-hero-title { font-size: 34px; }
  .values-grid { grid-template-columns: 1fr 1fr; }
  .services-grid { grid-template-columns: 1fr 1fr; }
  .team-grid { grid-template-columns: 1fr 1fr; }
  .contact-cta-inner { flex-direction: column; align-items: flex-start; gap: 24px; }
  .inner { padding: 0 18px; }
}
@media (max-width: 480px) {
  .values-grid, .services-grid, .team-grid { grid-template-columns: 1fr; }
  .contact-cta-details { flex-direction: column; gap: 16px; }
}
`;

// ─── CONTACT ICON SVGS (white stroke, for orange bg) ─────────────────────────

const ContactIcon = ({ type }) => {
    const cs = { fill: "none", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
    const icons = {
        pin: <svg viewBox="0 0 24 24" width="20" height="20" {...cs}><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
        phone: <svg viewBox="0 0 24 24" width="20" height="20" {...cs}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
        mail: <svg viewBox="0 0 24 24" width="20" height="20" {...cs}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
    };
    return icons[type] || null;
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function AboutPage() {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: ABOUT_CSS }} />

            {/* ═══ PAGE HERO ═══ */}
            <section className="about-page-hero">
                <div className="inner">
                    <div className="about-page-hero-grid">
                        <div>
                            <span className="about-hero-label">WHO WE ARE</span>
                            <h1 className="about-hero-title">
                                ABOUT <span>TOUGHMAN</span><br />FROZEN PRODUCTS
                            </h1>
                            <div className="about-hero-divider" />
                            <p className="about-hero-desc">
                                TOUGHMAN Frozen Product Processing is a Philippine-based frozen food processing and
                                distribution company established in May 2026 — committed to providing high-quality,
                                safe, hygienic, and Halal-compliant frozen chicken products to businesses, retailers,
                                and consumers nationwide.
                            </p>
                            <div className="about-hero-btns">
                                <button className="btn-hero-orange">OUR PRODUCTS →</button>
                                <button className="btn-hero-outline">CONTACT US →</button>
                            </div>
                        </div>
                        <div className="about-hero-img-card">
                            <img
                                src={aboutFacility}
                                alt="Toughman Facility"
                                className="about-hero-img"
                                onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                            />
                            <div className="about-hero-img-placeholder" style={{ display: "none" }}>
                                <IconBox name="b2b" size={64} />
                            </div>
                            <div className="about-hero-stats">
                                {STATS.map(s => (
                                    <div className="about-stat-card" key={s.label}>
                                        <div className="about-stat-value">{s.value}</div>
                                        <div className="about-stat-label">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ MISSION & VISION ═══ */}
            <section className="mv-section">
                <div className="inner">
                    <div style={{ textAlign: "center" }}>
                        <span className="section-label">OUR PURPOSE</span>
                        <h2 className="section-title">Mission &amp; Vision</h2>
                        <p className="section-sub" style={{ margin: "0 auto" }}>
                            Built on a foundation of integrity and excellence, we strive to be the most trusted
                            name in Halal frozen food processing in the Philippines.
                        </p>
                    </div>
                    <div className="mv-grid">
                        <div className="mv-card">
                            <div className="mv-card-icon-wrap"><IconBox name="target" /></div>
                            <div className="mv-card-label">OUR MISSION</div>
                            <div className="mv-card-title">What We Do Every Day</div>
                            <p className="mv-card-text">
                                To provide premium-quality Halal frozen chicken products through safe processing,
                                hygienic handling, reliable cold chain management, and excellent customer service
                                while maintaining integrity, consistency, and operational excellence.
                            </p>
                        </div>
                        <div className="mv-card">
                            <div className="mv-card-icon-wrap"><IconBox name="telescope" /></div>
                            <div className="mv-card-label">OUR VISION</div>
                            <div className="mv-card-title">Where We Are Headed</div>
                            <p className="mv-card-text">
                                To become a trusted and recognized Halal frozen food processing company in the
                                Philippines known for quality, reliability, innovation, food safety, and
                                customer satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CORE VALUES ═══ */}
            <section className="values-section">
                <div className="inner">
                    <div style={{ textAlign: "center" }}>
                        <span className="section-label">WHAT DRIVES US</span>
                        <h2 className="section-title section-title-white">Our Core Values</h2>
                        <p className="section-sub section-sub-white" style={{ margin: "0 auto" }}>
                            These six principles guide every decision, process, and relationship at TOUGHMAN.
                        </p>
                    </div>
                    <div className="values-grid">
                        {CORE_VALUES.map(v => (
                            <div className="value-card" key={v.name}>
                                <IconBox name={v.icon} />
                                <div className="value-text">
                                    <div className="value-name">{v.name}</div>
                                    <div className="value-desc">{v.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SERVICES ═══ */}
            <section className="services-section">
                <div className="inner">
                    <div className="section-header" style={{ alignItems: "flex-start" }}>
                        <div>
                            <span className="section-label">WHAT WE OFFER</span>
                            <h2 className="section-title">Our Services</h2>
                            <p className="section-sub">
                                From Halal processing to cold chain logistics, we provide end-to-end
                                frozen food solutions for every scale of business.
                            </p>
                        </div>
                    </div>
                    <div className="services-grid">
                        {SERVICES.map(s => (
                            <div className="service-card" key={s.name}>
                                <IconBox name={s.icon} />
                                <div className="service-text">
                                    <div className="service-name">{s.name}</div>
                                    <div className="service-desc">{s.desc}</div>
                                    <a href="#" className="service-link">Learn more →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ MANAGEMENT TEAM ═══ */}
            <section className="team-section">
                <div className="inner">
                    <div style={{ textAlign: "center" }}>
                        <span className="section-label">THE PEOPLE BEHIND TOUGHMAN</span>
                        <h2 className="section-title">Our Management Team</h2>
                        <p className="section-sub" style={{ margin: "0 auto" }}>
                            Founded by experienced, business-minded individuals united by a common vision of
                            building a trusted Halal frozen food brand in the Philippines.
                        </p>
                    </div>
                    <div className="team-grid">
                        {TEAM.map(m => (
                            <div className="team-card" key={m.name}>
                                <div className="team-avatar-wrap">
                                    <div className="team-avatar">{m.initials}</div>
                                </div>
                                <div className="team-body">
                                    <div className="team-name">{m.name}</div>
                                    <div className="team-role">{m.role}</div>
                                    <div className="team-divider" />
                                    <div className="team-desc">{m.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ COMMITMENT & FUTURE GOALS ═══ */}
            <section className="commitment-section">
                <div className="inner">
                    <div style={{ textAlign: "center" }}>
                        <span className="section-label">OUR PROMISE</span>
                        <h2 className="section-title section-title-white">Commitment &amp; Future Goals</h2>
                        <p className="section-sub section-sub-white" style={{ margin: "0 auto" }}>
                            We are continuously growing, improving, and expanding to better serve our customers
                            and the Halal food industry across the Philippines.
                        </p>
                    </div>
                    <div className="commitment-grid">
                        <div>
                            <div className="commitment-block-title">
                                <IconBox name="shield" size={34} />
                                Our Commitments
                            </div>
                            <ul className="commitment-list">
                                {[
                                    "Delivering safe and premium Halal frozen products",
                                    "Maintaining proper hygiene and food safety standards",
                                    "Building strong and long-term customer relationships",
                                    "Maintaining transparent business practices",
                                    "Improving operational efficiency across all processes",
                                    "Expanding distribution capabilities nationwide",
                                    "Adopting modern technology and management systems",
                                ].map(item => (
                                    <li key={item}><span className="check-dot">✓</span>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="goals-card">
                            <div className="commitment-block-title">
                                <IconBox name="rocket" size={34} />
                                Future Goals
                            </div>
                            <ul className="goals-list">
                                {FUTURE_GOALS.map((goal, i) => (
                                    <li key={i}>
                                        <span className="goal-number">{i + 1}</span>
                                        {goal}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CONTACT CTA ═══ */}
            <section className="contact-cta">
                <div className="inner contact-cta-inner">
                    <div>
                        <h2 className="contact-cta-title">GET IN TOUCH WITH US</h2>
                        <p className="contact-cta-sub">Inquiries, orders, and partnerships are always welcome.</p>
                    </div>
                    <div className="contact-cta-details">
                        {[
                            { type: "pin", label: "Location", text: "Sta. Maria, Zamboanga City, Philippines" },
                            { type: "phone", label: "Phone", text: "+63 945 982 9389" },
                            { type: "mail", label: "Email", text: "inquiries@toughmanfp.com" },
                        ].map(c => (
                            <div className="contact-detail" key={c.label}>
                                <div className="contact-detail-icon-box"><ContactIcon type={c.type} /></div>
                                <div>
                                    <div className="contact-detail-label">{c.label}</div>
                                    <div className="contact-detail-text">{c.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="btn-contact-white">CONTACT US →</button>
                </div>
            </section>
        </>
    );
}