import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const DEPARTMENTS = ["ALL", "OPERATIONS", "QUALITY", "LOGISTICS", "ADMIN", "SALES"];

const JOB_LISTINGS = [
    {
        id: 1,
        title: "Production Line Supervisor",
        dept: "OPERATIONS",
        type: "Full-Time",
        location: "Quezon City, PH",
        level: "Mid-Level",
        posted: "3 days ago",
        urgent: true,
        desc: "Oversee daily production line activities, ensure HACCP compliance, coordinate with quality team, and manage a team of 10–15 line workers across two processing shifts.",
        requirements: ["2+ years supervisory experience in food processing", "Familiarity with HACCP and GMP protocols", "Strong leadership and communication skills", "Willing to work shifting schedule"],
        benefits: ["Competitive salary", "HMO coverage", "13th month pay", "Overtime pay"],
    },
    {
        id: 2,
        title: "Quality Assurance Specialist",
        dept: "QUALITY",
        type: "Full-Time",
        location: "Quezon City, PH",
        level: "Mid-Level",
        posted: "5 days ago",
        urgent: true,
        desc: "Conduct microbiological sampling, monitor HACCP critical control points, maintain batch traceability records, and support internal and third-party audit preparations.",
        requirements: ["BS Food Technology, Biology, or related field", "HACCP training certificate preferred", "Experience in food manufacturing QA", "Keen attention to detail and strong documentation skills"],
        benefits: ["Competitive salary", "HMO coverage", "Training & certification support", "Career growth path"],
    },
    {
        id: 3,
        title: "Refrigerated Delivery Driver",
        dept: "LOGISTICS",
        type: "Full-Time",
        location: "Metro Manila & Nearby Provinces",
        level: "Entry-Level",
        posted: "1 week ago",
        urgent: false,
        desc: "Operate NMIS-accredited refrigerated delivery trucks to transport frozen chicken products to client locations across Metro Manila, maintaining cold chain integrity throughout.",
        requirements: ["Valid Professional Driver's License (PDL)", "Experience driving refrigerated vehicles preferred", "Knowledge of Metro Manila routes", "Good communication and customer service skills"],
        benefits: ["Competitive salary + delivery allowance", "HMO coverage", "Company uniform provided", "Performance incentives"],
    },
    {
        id: 4,
        title: "Cold Chain Logistics Coordinator",
        dept: "LOGISTICS",
        type: "Full-Time",
        location: "Quezon City, PH",
        level: "Mid-Level",
        posted: "1 week ago",
        urgent: false,
        desc: "Plan and coordinate outbound cold chain delivery schedules, monitor GPS and temperature data loggers, liaise with clients on delivery status, and maintain accurate dispatch records.",
        requirements: ["Experience in logistics or supply chain coordination", "Proficiency in MS Excel and logistics systems", "Strong organisational and problem-solving skills", "Understanding of cold chain requirements preferred"],
        benefits: ["Competitive salary", "HMO coverage", "Fuel and communication allowance", "Career development opportunities"],
    },
    {
        id: 5,
        title: "Sales Account Manager",
        dept: "SALES",
        type: "Full-Time",
        location: "Metro Manila, PH",
        level: "Mid-Level",
        posted: "2 weeks ago",
        urgent: false,
        desc: "Develop and manage key accounts with supermarkets, restaurants, and institutional clients. Drive volume growth through prospecting, pitching, and maintaining strong client relationships.",
        requirements: ["3+ years B2B sales experience, preferably in FMCG or food", "Existing network in foodservice or retail a strong advantage", "Strong negotiation and presentation skills", "Self-motivated with proven track record of hitting targets"],
        benefits: ["Competitive base salary + commission", "HMO coverage", "Transportation allowance", "Mobile phone allowance"],
    },
    {
        id: 6,
        title: "HR & Admin Assistant",
        dept: "ADMIN",
        type: "Full-Time",
        location: "Quezon City, PH",
        level: "Entry-Level",
        posted: "2 weeks ago",
        urgent: false,
        desc: "Support HR functions including recruitment coordination, employee records management, payroll processing assistance, and general administrative duties for the Toughman head office.",
        requirements: ["BS Psychology, HRDM, Business Administration, or related", "Strong attention to detail and organisational skills", "Proficiency in MS Office", "Experience in a manufacturing HR setting preferred"],
        benefits: ["Competitive salary", "HMO coverage", "Government mandated benefits", "Learning & development opportunities"],
    },
    {
        id: 7,
        title: "Meat Processing Technician",
        dept: "OPERATIONS",
        type: "Full-Time",
        location: "Quezon City, PH",
        level: "Entry-Level",
        posted: "3 weeks ago",
        urgent: false,
        desc: "Operate processing equipment on the production line including cutting, deboning, and portioning machines. Ensure consistent product weights and adhere to hygiene and safety protocols.",
        requirements: ["Vocational course or experience in meat processing preferred", "Physically fit and able to work in cold environments", "Willing to work shifting schedule", "Trainable and team-oriented"],
        benefits: ["Competitive salary", "HMO coverage", "Free meal allowance", "Career progression path"],
    },
    {
        id: 8,
        title: "Food Safety & Compliance Officer",
        dept: "QUALITY",
        type: "Full-Time",
        location: "Quezon City, PH",
        level: "Senior-Level",
        posted: "3 weeks ago",
        urgent: false,
        desc: "Lead HACCP system maintenance, manage regulatory compliance filings with NMIS and FDA, prepare for third-party audits, and develop food safety training programmes for all staff.",
        requirements: ["BS Food Technology or related; HACCP Lead Auditor certification required", "3+ years in food safety compliance in manufacturing", "Strong knowledge of Philippine food regulations", "Experience managing regulatory body relationships"],
        benefits: ["Senior-level compensation package", "HMO with dependents", "Professional development budget", "Company car or car allowance"],
    },
];

const PERKS = [
    {
        icon: (
            <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4z" />
                <path d="M24 12v12l8 4" strokeWidth="2" />
            </svg>
        ),
        title: "Competitive Compensation",
        desc: "Market-rate salaries reviewed annually, performance bonuses, and 13th month pay as standard.",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 4L6 11v11c0 11 7.5 18.5 18 21.5C34.5 33.5 42 26 42 22V11L24 4z" />
                <path d="M16 24l5 5 11-11" strokeWidth="2.2" />
            </svg>
        ),
        title: "HMO Health Coverage",
        desc: "Comprehensive HMO from day one. Senior roles include dependent coverage for family members.",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="24" cy="16" r="8" />
                <path d="M8 44c0-8.8 7.2-16 16-16s16 7.2 16 16" />
                <path d="M34 20l4 4-4 4" strokeWidth="1.5" />
                <path d="M38 24h-6" strokeWidth="1.5" />
            </svg>
        ),
        title: "Career Growth Path",
        desc: "Structured career ladders across all departments with internal promotion as our default policy.",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="10" width="32" height="28" rx="3" />
                <path d="M8 18h32" />
                <path d="M18 10V6M30 10V6" />
                <circle cx="24" cy="30" r="4" />
                <path d="M20 34l4-4 4 4" strokeWidth="1.4" />
            </svg>
        ),
        title: "Training & Certifications",
        desc: "HACCP, GMP, and food safety training funded by the company. External certifications supported for eligible roles.",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="20" width="36" height="22" rx="2" />
                <path d="M6 20l9-10h18l9 10" />
                <rect x="18" y="28" width="12" height="14" rx="1" />
            </svg>
        ),
        title: "Stable Work Environment",
        desc: "A growing company with over a decade of operations, a supportive team culture, and genuine job stability.",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="#f47b20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="24" cy="24" r="18" />
                <path d="M24 14v10l6 6" strokeWidth="2.2" />
                <path d="M14 24h-4M38 24h-4M24 10V6M24 42v-4" strokeWidth="1.3" />
            </svg>
        ),
        title: "Work-Life Allowances",
        desc: "Transportation, meals, and communication allowances for eligible positions. Overtime compensated fairly.",
    },
];

const VALUES = [
    { label: "Integrity", icon: "🤝", desc: "We do what we say and say what we do — in our products and in how we treat our people." },
    { label: "Excellence", icon: "⭐", desc: "We pursue the highest standard in every task, whether running a production line or filing a report." },
    { label: "Safety First", icon: "🛡️", desc: "Food safety and workplace safety are non-negotiable. We protect both our products and our people." },
    { label: "Teamwork", icon: "👥", desc: "Our best results come from collaboration across departments, shifts, and levels of seniority." },
];

const PROCESS_STEPS = [
    { num: "01", title: "Browse & Apply", desc: "Find a role that fits your skills and experience. Submit your application via our online form — no lengthy portals, just a clean form with your CV." },
    { num: "02", title: "Initial Screening", desc: "Our HR team reviews all applications within 5 business days. Shortlisted candidates are contacted for a brief phone or video screening." },
    { num: "03", title: "Interview", desc: "Qualified candidates are invited for a structured interview with the hiring manager and an HR representative — in person or via video call." },
    { num: "04", title: "Assessment", desc: "Depending on the role, a short technical or practical assessment may be conducted to validate specific skills or competencies." },
    { num: "05", title: "Job Offer", desc: "Successful candidates receive a formal job offer with a complete compensation and benefits breakdown. We aim to respond within 2 weeks of your interview." },
    { num: "06", title: "Onboarding", desc: "New hires go through a structured onboarding programme including food safety orientation, facility tour, and team introductions on Day 1." },
];

// ─── CSS ─────────────────────────────────────────────────────────────────────

const CAREERS_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Open+Sans:wght@400;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { width: 100%; background: #f5f7fa; }
body {
  width: 100% !important; min-width: 320px !important;
  margin: 0 !important; padding: 0 !important; overflow-x: hidden !important;
  font-family: 'Open Sans', sans-serif; background: #f5f7fa !important;
}
#root, #__next { width: 100% !important; margin: 0 !important; padding: 0 !important; background: #f5f7fa !important; }
.tm-page { width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important; overflow-x: hidden !important; background: #f5f7fa !important; }

:root {
  --navy: #0d1b3e; --navy-dark: #060f23; --blue: #1a3a6b;
  --orange: #f47b20; --orange-dark: #d96a10;
  --gray-light: #f5f7fa; --gray: #7a8499;
}

.cp-inner { width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 40px; box-sizing: border-box; }

/* ════ HERO ════ */
.cp-hero { background: var(--navy); padding: 72px 0 64px; position: relative; overflow: hidden; width: 100%; }
.cp-hero::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 60% 80% at 85% 50%, rgba(244,123,32,.08) 0%, transparent 65%),
    repeating-linear-gradient(-45deg, transparent, transparent 38px, rgba(255,255,255,.016) 38px, rgba(255,255,255,.016) 39px);
  pointer-events: none;
}
.cp-hero .cp-inner { position: relative; z-index: 1; }
.cp-breadcrumb {
  display: flex; align-items: center; gap: 8px; margin-bottom: 24px;
  font-family: 'Montserrat', sans-serif; font-size: 11px;
  color: rgba(255,255,255,.4); letter-spacing: 1px; text-transform: uppercase;
}
.cp-breadcrumb-btn {
  background: none; border: none; cursor: pointer; padding: 0;
  font-family: 'Montserrat', sans-serif; font-size: 11px;
  color: rgba(255,255,255,.4); letter-spacing: 1px; text-transform: uppercase; transition: color .2s;
}
.cp-breadcrumb-btn:hover { color: var(--orange); }
.cp-breadcrumb-sep { color: rgba(255,255,255,.2); }
.cp-breadcrumb-cur { color: var(--orange); }

.cp-hero-layout { display: grid; grid-template-columns: 1fr 420px; gap: 64px; align-items: center; }
.cp-hero-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 16px;
}
.cp-hero-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900;
  font-size: clamp(30px, 4vw, 54px);
  line-height: 1.05; color: #fff; text-transform: uppercase; letter-spacing: -.5px;
}
.cp-hero-title .hl { color: var(--orange); }
.cp-hero-divider { width: 50px; height: 3.5px; background: var(--orange); border-radius: 2px; margin: 20px 0; }
.cp-hero-desc { font-size: 14px; color: rgba(255,255,255,.65); line-height: 1.85; margin-bottom: 32px; max-width: 520px; }
.cp-hero-stats { display: flex; gap: 36px; flex-wrap: wrap; padding-top: 28px; border-top: 1px solid rgba(255,255,255,.1); }
.cp-hero-stat-val { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 28px; color: var(--orange); line-height: 1; }
.cp-hero-stat-lbl { font-size: 10.5px; color: rgba(255,255,255,.45); text-transform: uppercase; letter-spacing: .8px; margin-top: 4px; }

/* Hero right: open roles card */
.cp-hero-card {
  background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12);
  border-radius: 20px; padding: 28px 24px; backdrop-filter: blur(4px);
}
.cp-hero-card-title {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 12px;
  color: var(--orange); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px;
}
.cp-hero-role-list { display: flex; flex-direction: column; gap: 10px; }
.cp-hero-role-item {
  background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.09);
  border-radius: 10px; padding: 12px 16px;
  display: flex; align-items: center; justify-content: space-between;
  transition: background .2s, border-color .2s; cursor: pointer;
}
.cp-hero-role-item:hover { background: rgba(255,255,255,.1); border-color: rgba(244,123,32,.4); }
.cp-hero-role-name { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12.5px; color: #fff; }
.cp-hero-role-dept {
  font-family: 'Montserrat', sans-serif; font-size: 9.5px; font-weight: 700;
  color: rgba(255,255,255,.45); text-transform: uppercase; letter-spacing: .8px; margin-top: 2px;
}
.cp-hero-role-badge {
  padding: 3px 10px; border-radius: 12px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 9px;
  letter-spacing: .8px; text-transform: uppercase; white-space: nowrap; flex-shrink: 0;
}
.cp-hero-role-badge.urgent { background: rgba(244,123,32,.25); color: var(--orange); border: 1px solid rgba(244,123,32,.4); }
.cp-hero-role-badge.open { background: rgba(255,255,255,.1); color: rgba(255,255,255,.6); border: 1px solid rgba(255,255,255,.15); }
.cp-hero-card-footer {
  margin-top: 16px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,.08);
  display: flex; align-items: center; justify-content: space-between;
}
.cp-hero-card-count { font-size: 11.5px; color: rgba(255,255,255,.45); }
.cp-hero-card-count b { color: #fff; }

/* ════ VALUES STRIP ════ */
.cp-values-strip { background: var(--orange); padding: 0; width: 100%; }
.cp-values-strip .cp-inner { display: flex; flex-wrap: wrap; }
.cp-value-block {
  flex: 1; min-width: 200px; padding: 32px 24px;
  border-right: 1px solid rgba(255,255,255,.25);
  display: flex; align-items: flex-start; gap: 14px;
  transition: background .2s;
}
.cp-value-block:last-child { border-right: none; }
.cp-value-block:hover { background: rgba(0,0,0,.06); }
.cp-value-icon { font-size: 24px; flex-shrink: 0; margin-top: 2px; }
.cp-value-label { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 13px; color: #fff; margin-bottom: 4px; text-transform: uppercase; letter-spacing: .3px; }
.cp-value-desc { font-size: 12px; color: rgba(255,255,255,.8); line-height: 1.65; }

/* ════ PERKS ════ */
.cp-perks { background: var(--gray-light); padding: 80px 0; width: 100%; }
.cp-section-header { text-align: center; margin-bottom: 52px; }
.cp-section-label {
  display: inline-block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px;
}
.cp-section-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(22px, 3vw, 34px);
  color: var(--navy); text-transform: uppercase; letter-spacing: .4px; line-height: 1.1; margin-bottom: 12px;
}
.cp-section-title-white { color: #fff; }
.cp-section-sub { font-size: 14px; color: var(--gray); line-height: 1.8; max-width: 540px; margin: 0 auto; }
.cp-section-sub-white { color: rgba(255,255,255,.55); }
.cp-perks-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.cp-perk-card {
  background: #fff; border-radius: 16px; padding: 28px 24px;
  border: 1px solid #eaeaea; box-shadow: 0 4px 16px rgba(0,0,0,.05);
  transition: box-shadow .25s, transform .25s, border-color .25s;
  display: flex; align-items: flex-start; gap: 18px;
}
.cp-perk-card:hover { box-shadow: 0 12px 40px rgba(13,27,62,.12); transform: translateY(-3px); border-color: rgba(244,123,32,.25); }
.cp-perk-icon-wrap {
  width: 60px; height: 60px; border-radius: 12px; flex-shrink: 0;
  background: linear-gradient(135deg, #0d1b3e 0%, #1a3a6b 100%);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 6px 18px rgba(13,27,62,.2);
}
.cp-perk-title { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 14px; color: var(--navy); text-transform: uppercase; letter-spacing: .3px; margin-bottom: 8px; }
.cp-perk-desc { font-size: 13px; color: var(--gray); line-height: 1.75; }

/* ════ JOB LISTINGS ════ */
.cp-jobs { background: #fff; padding: 80px 0; width: 100%; }
.cp-jobs-filter-bar {
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  margin-bottom: 36px; flex-wrap: wrap;
}
.cp-jobs-filter-tabs { display: flex; gap: 0; flex-wrap: wrap; gap: 8px; }
.cp-filter-tab {
  padding: 9px 18px; border-radius: 24px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--gray); text-transform: uppercase; letter-spacing: .8px;
  border: 1.5px solid #dde2ec; background: #fff; cursor: pointer;
  transition: all .2s; white-space: nowrap;
}
.cp-filter-tab.active { background: var(--navy); color: #fff; border-color: var(--navy); }
.cp-filter-tab:hover:not(.active) { border-color: var(--orange); color: var(--orange); }
.cp-jobs-count { font-family: 'Montserrat', sans-serif; font-size: 12.5px; color: var(--gray); white-space: nowrap; }
.cp-jobs-count b { color: var(--navy); }
.cp-jobs-grid { display: flex; flex-direction: column; gap: 16px; }

/* Job Card */
.cp-job-card {
  background: var(--gray-light); border-radius: 16px;
  border: 1px solid #eaeaea; overflow: hidden;
  transition: box-shadow .25s, border-color .25s;
}
.cp-job-card:hover { box-shadow: 0 8px 32px rgba(13,27,62,.1); border-color: rgba(244,123,32,.3); }
.cp-job-card-header {
  padding: 22px 26px 18px;
  display: flex; align-items: flex-start; justify-content: space-between; gap: 16px;
  cursor: pointer;
}
.cp-job-card-left { flex: 1; }
.cp-job-top-row { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; flex-wrap: wrap; }
.cp-job-dept-badge {
  padding: 3px 11px; border-radius: 5px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 9.5px;
  letter-spacing: 1px; text-transform: uppercase;
  background: var(--navy); color: var(--orange);
}
.cp-job-urgent-badge {
  padding: 3px 11px; border-radius: 5px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 9.5px;
  letter-spacing: 1px; text-transform: uppercase;
  background: rgba(244,123,32,.15); color: var(--orange); border: 1px solid rgba(244,123,32,.3);
}
.cp-job-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 17px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .3px; margin-bottom: 10px;
}
.cp-job-meta { display: flex; gap: 20px; flex-wrap: wrap; }
.cp-job-meta-item {
  display: flex; align-items: center; gap: 5px;
  font-size: 12px; color: var(--gray);
  font-family: 'Montserrat', sans-serif; font-weight: 600;
}
.cp-job-meta-icon { font-size: 13px; }
.cp-job-card-right { display: flex; flex-direction: column; align-items: flex-end; gap: 10px; flex-shrink: 0; }
.cp-job-posted { font-size: 11px; color: var(--gray); white-space: nowrap; }
.cp-job-expand-btn {
  width: 32px; height: 32px; border-radius: 50%;
  background: var(--navy); border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; color: #fff; transition: background .2s, transform .3s;
  flex-shrink: 0;
}
.cp-job-card.open .cp-job-expand-btn { background: var(--orange); transform: rotate(180deg); }

/* Job card expanded body */
.cp-job-body {
  max-height: 0; overflow: hidden;
  transition: max-height .4s ease;
  border-top: 0px solid #eaeaea;
}
.cp-job-card.open .cp-job-body { max-height: 600px; border-top: 1px solid #eaeaea; }
.cp-job-body-inner {
  padding: 24px 26px 28px;
  display: grid; grid-template-columns: 1fr 1fr; gap: 28px;
}
.cp-job-desc { font-size: 13.5px; color: #4a5568; line-height: 1.8; margin-bottom: 16px; }
.cp-job-list-title {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 11px;
  color: var(--navy); text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 10px;
}
.cp-job-req-list, .cp-job-ben-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.cp-job-req-item, .cp-job-ben-item {
  display: flex; align-items: flex-start; gap: 8px;
  font-size: 12.5px; color: #374151; line-height: 1.6;
}
.cp-job-req-dot {
  width: 16px; height: 16px; border-radius: 50%;
  background: var(--navy); display: flex; align-items: center; justify-content: center;
  font-size: 8px; color: var(--orange); font-weight: 900; flex-shrink: 0; margin-top: 2px;
}
.cp-job-ben-dot {
  width: 16px; height: 16px; border-radius: 50%;
  background: rgba(244,123,32,.15); border: 1.5px solid var(--orange);
  display: flex; align-items: center; justify-content: center;
  font-size: 8px; color: var(--orange); font-weight: 900; flex-shrink: 0; margin-top: 2px;
}
.cp-job-apply-row {
  grid-column: 1 / -1; padding-top: 18px; border-top: 1px solid #eaeaea;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;
}
.cp-job-apply-note { font-size: 12px; color: var(--gray); }
.btn-cp-apply {
  background: var(--orange); color: #fff; border: none;
  padding: 12px 28px; border-radius: 7px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12.5px;
  text-transform: uppercase; letter-spacing: .8px; cursor: pointer;
  transition: background .2s; display: inline-flex; align-items: center; gap: 8px; white-space: nowrap;
}
.btn-cp-apply:hover { background: var(--orange-dark); }

/* ════ APPLICATION PROCESS ════ */
.cp-process { background: var(--navy); padding: 80px 0; width: 100%; }
.cp-process-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 52px; }
.cp-process-step {
  background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.09);
  border-radius: 16px; padding: 28px 22px; position: relative; overflow: hidden;
  transition: background .2s, border-color .2s;
}
.cp-process-step:hover { background: rgba(255,255,255,.07); border-color: rgba(244,123,32,.35); }
.cp-process-step-num {
  position: absolute; top: 14px; right: 18px;
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 48px;
  color: rgba(244,123,32,.1); letter-spacing: -2px; line-height: 1;
}
.cp-process-step-badge {
  display: inline-flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; border-radius: 50%;
  background: var(--orange); color: #fff;
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 14px;
  margin-bottom: 16px; flex-shrink: 0;
}
.cp-process-step-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 14px;
  color: #fff; text-transform: uppercase; letter-spacing: .3px; margin-bottom: 10px;
}
.cp-process-step-desc { font-size: 13px; color: rgba(255,255,255,.55); line-height: 1.75; }

/* ════ APPLICATION MODAL ════ */
.cp-modal-backdrop {
  position: fixed; inset: 0; background: rgba(5,13,31,.9);
  backdrop-filter: blur(6px); z-index: 999;
  display: flex; align-items: center; justify-content: center; padding: 24px;
}
.cp-modal {
  background: #fff; border-radius: 20px;
  max-width: 640px; width: 100%; max-height: 90vh; overflow-y: auto;
  position: relative; box-shadow: 0 24px 80px rgba(0,0,0,.5);
  animation: cpModalIn .25s ease;
}
@keyframes cpModalIn {
  from { opacity: 0; transform: scale(.94) translateY(12px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
.cp-modal-header {
  background: var(--navy); padding: 28px 32px 24px;
  border-radius: 20px 20px 0 0; position: relative;
}
.cp-modal-close {
  position: absolute; top: 16px; right: 16px;
  width: 32px; height: 32px; border-radius: 50%;
  background: rgba(255,255,255,.1); border: none; cursor: pointer;
  font-size: 16px; color: rgba(255,255,255,.7);
  display: flex; align-items: center; justify-content: center;
  transition: background .2s;
}
.cp-modal-close:hover { background: rgba(255,255,255,.2); }
.cp-modal-job-dept {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10px;
  color: var(--orange); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px; display: block;
}
.cp-modal-job-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 20px;
  color: #fff; text-transform: uppercase; margin-bottom: 4px;
}
.cp-modal-job-meta { font-size: 12px; color: rgba(255,255,255,.5); }
.cp-modal-body { padding: 28px 32px 32px; }
.cp-modal-note {
  background: var(--gray-light); border-left: 4px solid var(--orange);
  padding: 12px 16px; border-radius: 0 8px 8px 0; margin-bottom: 24px;
  font-size: 12.5px; color: var(--gray); line-height: 1.6;
}
.cp-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.cp-form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
.cp-form-group.full { grid-column: 1 / -1; }
.cp-form-label {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .8px;
}
.cp-form-input, .cp-form-select, .cp-form-textarea {
  border: 1.5px solid #dde2ec; border-radius: 8px; padding: 11px 14px;
  font-family: 'Open Sans', sans-serif; font-size: 13.5px; color: var(--navy);
  background: #fff; transition: border-color .2s, box-shadow .2s; outline: none;
  width: 100%;
}
.cp-form-input:focus, .cp-form-select:focus, .cp-form-textarea:focus {
  border-color: var(--orange); box-shadow: 0 0 0 3px rgba(244,123,32,.12);
}
.cp-form-textarea { resize: vertical; min-height: 90px; }
.cp-form-upload {
  border: 2px dashed #dde2ec; border-radius: 10px; padding: 20px 16px;
  text-align: center; cursor: pointer; transition: border-color .2s, background .2s;
  background: var(--gray-light);
}
.cp-form-upload:hover { border-color: var(--orange); background: rgba(244,123,32,.04); }
.cp-form-upload-icon { font-size: 28px; margin-bottom: 6px; }
.cp-form-upload-text { font-size: 13px; color: var(--gray); }
.cp-form-upload-text b { color: var(--navy); }
.cp-form-upload-sub { font-size: 11px; color: rgba(122,132,153,.7); margin-top: 3px; }
.cp-modal-submit-row { display: flex; gap: 12px; margin-top: 24px; align-items: center; }
.btn-cp-submit {
  flex: 1; background: var(--orange); color: #fff; border: none;
  padding: 14px 0; border-radius: 8px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 13px;
  text-transform: uppercase; letter-spacing: .8px; cursor: pointer; transition: background .2s;
}
.btn-cp-submit:hover { background: var(--orange-dark); }
.btn-cp-cancel {
  padding: 14px 22px; border-radius: 8px;
  border: 2px solid #dde2ec; background: transparent; color: var(--gray);
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 13px;
  cursor: pointer; transition: all .2s;
}
.btn-cp-cancel:hover { border-color: var(--navy); color: var(--navy); }

/* ════ CTA ════ */
.cp-cta {
  background: linear-gradient(135deg, var(--navy-dark) 0%, var(--blue) 60%, var(--navy) 100%);
  padding: 72px 0; width: 100%; position: relative; overflow: hidden;
}
.cp-cta::before {
  content: ''; position: absolute; inset: 0;
  background: repeating-linear-gradient(-45deg, transparent, transparent 38px, rgba(255,255,255,.012) 38px, rgba(255,255,255,.012) 39px);
  pointer-events: none;
}
.cp-cta .cp-inner { position: relative; z-index: 1; display: flex; align-items: center; justify-content: space-between; gap: 40px; flex-wrap: wrap; }
.cp-cta-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px;
}
.cp-cta-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(22px, 2.5vw, 32px);
  color: #fff; text-transform: uppercase; line-height: 1.15; margin-bottom: 10px;
}
.cp-cta-sub { font-size: 14px; color: rgba(255,255,255,.6); line-height: 1.7; max-width: 440px; }
.cp-cta-btns { display: flex; gap: 14px; flex-wrap: wrap; flex-shrink: 0; }
.btn-cp-cta-primary {
  background: var(--orange); color: #fff; border: none;
  padding: 15px 32px; border-radius: 7px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12.5px;
  cursor: pointer; letter-spacing: .8px; text-transform: uppercase;
  transition: background .2s; white-space: nowrap; display: inline-flex; align-items: center; gap: 8px;
}
.btn-cp-cta-primary:hover { background: var(--orange-dark); }
.btn-cp-cta-outline {
  background: transparent; color: #fff;
  border: 2px solid rgba(255,255,255,.45); padding: 15px 32px; border-radius: 7px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12.5px;
  cursor: pointer; letter-spacing: .8px; text-transform: uppercase; transition: all .2s; white-space: nowrap;
}
.btn-cp-cta-outline:hover { border-color: var(--orange); color: var(--orange); }

/* ════ RESPONSIVE ════ */
@media (max-width: 1100px) {
  .cp-inner { padding: 0 24px; }
  .cp-hero-layout { grid-template-columns: 1fr; gap: 36px; }
  .cp-hero-card { max-width: 560px; }
  .cp-perks-grid { grid-template-columns: repeat(2, 1fr); }
  .cp-process-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .cp-perks-grid { grid-template-columns: 1fr; }
  .cp-job-body-inner { grid-template-columns: 1fr; }
  .cp-values-strip .cp-inner { flex-direction: column; }
  .cp-value-block { border-right: none; border-bottom: 1px solid rgba(255,255,255,.2); }
  .cp-value-block:last-child { border-bottom: none; }
  .cp-process-grid { grid-template-columns: 1fr 1fr; }
  .cp-cta .cp-inner { flex-direction: column; align-items: flex-start; }
  .cp-cta-btns { width: 100%; }
}
@media (max-width: 640px) {
  .cp-hero { padding: 48px 0 40px; }
  .cp-perks { padding: 52px 0; }
  .cp-jobs { padding: 52px 0; }
  .cp-process { padding: 52px 0; }
  .cp-process-grid { grid-template-columns: 1fr; }
  .cp-jobs-filter-bar { flex-direction: column; align-items: flex-start; }
  .cp-form-row { grid-template-columns: 1fr; }
  .cp-modal-body { padding: 20px 18px 24px; }
  .cp-modal-header { padding: 22px 18px 18px; }
}
@media (max-width: 420px) {
  .cp-inner { padding: 0 16px; }
  .cp-hero-stats { gap: 16px; }
  .cp-hero-stat-val { font-size: 22px; }
  .btn-cp-cta-primary, .btn-cp-cta-outline { width: 100%; justify-content: center; }
}
`;

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function CareersPage({ onNavigate = () => { } }) {
    const [activeFilter, setActiveFilter] = useState("ALL");
    const [openJob, setOpenJob] = useState(null);
    const [applyJob, setApplyJob] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", position: "", experience: "", message: "" });

    const filtered = activeFilter === "ALL"
        ? JOB_LISTINGS
        : JOB_LISTINGS.filter(j => j.dept === activeFilter);

    const handleApply = (job) => {
        setApplyJob(job);
        setSubmitted(false);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", position: job.title, experience: "", message: "" });
    };

    const handleSubmit = () => {
        if (!formData.firstName || !formData.email) return;
        setSubmitted(true);
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: CAREERS_CSS }} />

            {/* ════════════ HERO ════════════ */}
            <section className="cp-hero">
                <div className="cp-inner">
                    <div className="cp-breadcrumb">
                        <button className="cp-breadcrumb-btn" onClick={() => onNavigate("home")}>Home</button>
                        <span className="cp-breadcrumb-sep">›</span>
                        <span className="cp-breadcrumb-cur">Careers</span>
                    </div>
                    <div className="cp-hero-layout">
                        <div>
                            <span className="cp-hero-label">Join Our Team</span>
                            <h1 className="cp-hero-title">
                                Build Your Career<br />
                                <span className="hl">With Toughman</span>
                            </h1>
                            <div className="cp-hero-divider" />
                            <p className="cp-hero-desc">
                                We are a growing Philippine food processing company with a passionate team
                                dedicated to quality, safety, and excellence. We invest in our people because
                                our people are what make our products great.
                            </p>
                            <div className="cp-hero-stats">
                                {[
                                    { val: "8", lbl: "Open Positions" },
                                    { val: "5", lbl: "Departments" },
                                    { val: "10+", lbl: "Years Operating" },
                                    { val: "100%", lbl: "HMO on Day 1" },
                                ].map(s => (
                                    <div key={s.lbl}>
                                        <div className="cp-hero-stat-val">{s.val}</div>
                                        <div className="cp-hero-stat-lbl">{s.lbl}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Open roles preview card */}
                        <div className="cp-hero-card">
                            <div className="cp-hero-card-title">🔥 Actively Hiring</div>
                            <div className="cp-hero-role-list">
                                {JOB_LISTINGS.slice(0, 5).map(j => (
                                    <div
                                        className="cp-hero-role-item"
                                        key={j.id}
                                        onClick={() => { setActiveFilter("ALL"); setOpenJob(j.id); setTimeout(() => document.getElementById(`job-${j.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" }), 100); }}
                                    >
                                        <div>
                                            <div className="cp-hero-role-name">{j.title}</div>
                                            <div className="cp-hero-role-dept">{j.dept} · {j.level}</div>
                                        </div>
                                        <span className={`cp-hero-role-badge ${j.urgent ? "urgent" : "open"}`}>
                                            {j.urgent ? "Urgent" : "Open"}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="cp-hero-card-footer">
                                <span className="cp-hero-card-count">Showing <b>5</b> of <b>{JOB_LISTINGS.length}</b> openings</span>
                                <button
                                    style={{ background: "none", border: "none", cursor: "pointer", color: "var(--orange)", fontFamily: "Montserrat,sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: ".8px", textTransform: "uppercase" }}
                                    onClick={() => document.getElementById("cp-jobs-section")?.scrollIntoView({ behavior: "smooth" })}
                                >View All →</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════ VALUES STRIP ════════════ */}
            <div className="cp-values-strip">
                <div className="cp-inner">
                    {VALUES.map(v => (
                        <div className="cp-value-block" key={v.label}>
                            <div className="cp-value-icon">{v.icon}</div>
                            <div>
                                <div className="cp-value-label">{v.label}</div>
                                <div className="cp-value-desc">{v.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ════════════ PERKS ════════════ */}
            <section className="cp-perks">
                <div className="cp-inner">
                    <div className="cp-section-header">
                        <span className="cp-section-label">Why Work With Us</span>
                        <h2 className="cp-section-title">Benefits & Perks</h2>
                        <p className="cp-section-sub">
                            We believe great people deserve great conditions. Here's what
                            every Toughman team member can expect from day one.
                        </p>
                    </div>
                    <div className="cp-perks-grid">
                        {PERKS.map(p => (
                            <div className="cp-perk-card" key={p.title}>
                                <div className="cp-perk-icon-wrap">{p.icon}</div>
                                <div>
                                    <div className="cp-perk-title">{p.title}</div>
                                    <div className="cp-perk-desc">{p.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ JOB LISTINGS ════════════ */}
            <section className="cp-jobs" id="cp-jobs-section">
                <div className="cp-inner">
                    <div className="cp-section-header">
                        <span className="cp-section-label">Open Positions</span>
                        <h2 className="cp-section-title">Current Job Openings</h2>
                        <p className="cp-section-sub">
                            Find the role that matches your skills and ambitions.
                            All positions are based in Quezon City unless otherwise stated.
                        </p>
                    </div>

                    {/* Filter tabs */}
                    <div className="cp-jobs-filter-bar">
                        <div className="cp-jobs-filter-tabs">
                            {DEPARTMENTS.map(d => (
                                <button
                                    key={d}
                                    className={`cp-filter-tab${activeFilter === d ? " active" : ""}`}
                                    onClick={() => setActiveFilter(d)}
                                >{d}</button>
                            ))}
                        </div>
                        <div className="cp-jobs-count">Showing <b>{filtered.length}</b> opening{filtered.length !== 1 ? "s" : ""}</div>
                    </div>

                    {/* Job cards */}
                    <div className="cp-jobs-grid">
                        {filtered.map(job => (
                            <div
                                className={`cp-job-card${openJob === job.id ? " open" : ""}`}
                                key={job.id}
                                id={`job-${job.id}`}
                            >
                                <div
                                    className="cp-job-card-header"
                                    onClick={() => setOpenJob(openJob === job.id ? null : job.id)}
                                >
                                    <div className="cp-job-card-left">
                                        <div className="cp-job-top-row">
                                            <span className="cp-job-dept-badge">{job.dept}</span>
                                            {job.urgent && <span className="cp-job-urgent-badge">🔥 Urgent</span>}
                                        </div>
                                        <div className="cp-job-title">{job.title}</div>
                                        <div className="cp-job-meta">
                                            <span className="cp-job-meta-item"><span className="cp-job-meta-icon">📍</span>{job.location}</span>
                                            <span className="cp-job-meta-item"><span className="cp-job-meta-icon">💼</span>{job.type}</span>
                                            <span className="cp-job-meta-item"><span className="cp-job-meta-icon">📊</span>{job.level}</span>
                                        </div>
                                    </div>
                                    <div className="cp-job-card-right">
                                        <div className="cp-job-posted">Posted {job.posted}</div>
                                        <button className="cp-job-expand-btn">▾</button>
                                    </div>
                                </div>

                                <div className="cp-job-body">
                                    <div className="cp-job-body-inner">
                                        <div>
                                            <p className="cp-job-desc">{job.desc}</p>
                                            <div className="cp-job-list-title">Requirements</div>
                                            <ul className="cp-job-req-list">
                                                {job.requirements.map(r => (
                                                    <li className="cp-job-req-item" key={r}>
                                                        <span className="cp-job-req-dot">✓</span>{r}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <div className="cp-job-list-title">What We Offer</div>
                                            <ul className="cp-job-ben-list">
                                                {job.benefits.map(b => (
                                                    <li className="cp-job-ben-item" key={b}>
                                                        <span className="cp-job-ben-dot">+</span>{b}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="cp-job-apply-row">
                                            <span className="cp-job-apply-note">📧 Applications reviewed within 5 business days</span>
                                            <button className="btn-cp-apply" onClick={() => handleApply(job)}>
                                                Apply Now →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ APPLICATION PROCESS ════════════ */}
            <section className="cp-process">
                <div className="cp-inner">
                    <div className="cp-section-header">
                        <span className="cp-section-label">How to Join</span>
                        <h2 className="cp-section-title cp-section-title-white">Our Hiring Process</h2>
                        <p className="cp-section-sub cp-section-sub-white">
                            We keep our process straightforward and respectful of your time.
                            Here's what to expect from application to your first day.
                        </p>
                    </div>
                    <div className="cp-process-grid">
                        {PROCESS_STEPS.map((step, i) => (
                            <div className="cp-process-step" key={step.num}>
                                <div className="cp-process-step-num">{step.num}</div>
                                <div className="cp-process-step-badge">{i + 1}</div>
                                <div className="cp-process-step-title">{step.title}</div>
                                <div className="cp-process-step-desc">{step.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ CTA ════════════ */}
            <section className="cp-cta">
                <div className="cp-inner">
                    <div>
                        <span className="cp-cta-label">Don't See a Fit?</span>
                        <h2 className="cp-cta-title">Send Us Your CV<br />Anyway.</h2>
                        <p className="cp-cta-sub">
                            We're always growing. If you're passionate about food quality and
                            want to be part of a Philippine company that's setting the standard,
                            drop us your resume and we'll keep you in mind.
                        </p>
                    </div>
                    <div className="cp-cta-btns">
                        <button className="btn-cp-cta-primary" onClick={() => handleApply({ id: 0, title: "General Application", dept: "ANY", location: "Quezon City, PH", type: "Full-Time", level: "All Levels" })}>
                            📎 Submit Open Application
                        </button>
                        <button className="btn-cp-cta-outline" onClick={() => onNavigate("contact")}>
                            Contact HR Team
                        </button>
                    </div>
                </div>
            </section>

            {/* ════════════ APPLICATION MODAL ════════════ */}
            {applyJob && (
                <div className="cp-modal-backdrop" onClick={e => { if (e.target === e.currentTarget) setApplyJob(null); }}>
                    <div className="cp-modal">
                        <div className="cp-modal-header">
                            <button className="cp-modal-close" onClick={() => setApplyJob(null)}>✕</button>
                            <span className="cp-modal-job-dept">{applyJob.dept} · {applyJob.type}</span>
                            <div className="cp-modal-job-title">{applyJob.title}</div>
                            <div className="cp-modal-job-meta">📍 {applyJob.location} &nbsp;·&nbsp; 📊 {applyJob.level}</div>
                        </div>

                        <div className="cp-modal-body">
                            {submitted ? (
                                <div style={{ textAlign: "center", padding: "32px 0" }}>
                                    <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
                                    <div style={{ fontFamily: "Montserrat,sans-serif", fontWeight: 900, fontSize: "18px", color: "var(--navy)", textTransform: "uppercase", marginBottom: "10px" }}>
                                        Application Submitted!
                                    </div>
                                    <p style={{ fontSize: "13.5px", color: "var(--gray)", lineHeight: "1.8", marginBottom: "24px" }}>
                                        Thank you, <b>{formData.firstName}</b>! Our HR team will review your
                                        application and get back to you within 5 business days.
                                    </p>
                                    <button className="btn-cp-apply" onClick={() => setApplyJob(null)}>Close</button>
                                </div>
                            ) : (
                                <>
                                    <div className="cp-modal-note">
                                        📋 Please fill in all required fields. You can attach your CV as a PDF or Word document.
                                    </div>
                                    <div className="cp-form-row">
                                        <div className="cp-form-group">
                                            <label className="cp-form-label">First Name *</label>
                                            <input className="cp-form-input" placeholder="Juan" value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} />
                                        </div>
                                        <div className="cp-form-group">
                                            <label className="cp-form-label">Last Name *</label>
                                            <input className="cp-form-input" placeholder="Dela Cruz" value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="cp-form-row">
                                        <div className="cp-form-group">
                                            <label className="cp-form-label">Email Address *</label>
                                            <input className="cp-form-input" type="email" placeholder="juan@email.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                        </div>
                                        <div className="cp-form-group">
                                            <label className="cp-form-label">Phone Number</label>
                                            <input className="cp-form-input" placeholder="+63 9XX XXX XXXX" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="cp-form-group">
                                        <label className="cp-form-label">Applying for</label>
                                        <input className="cp-form-input" value={formData.position} onChange={e => setFormData({ ...formData, position: e.target.value })} />
                                    </div>
                                    <div className="cp-form-group">
                                        <label className="cp-form-label">Years of Relevant Experience</label>
                                        <select className="cp-form-select" value={formData.experience} onChange={e => setFormData({ ...formData, experience: e.target.value })}>
                                            <option value="">Select experience level</option>
                                            <option>Fresh Graduate / No experience</option>
                                            <option>Less than 1 year</option>
                                            <option>1–2 years</option>
                                            <option>3–5 years</option>
                                            <option>5+ years</option>
                                        </select>
                                    </div>
                                    <div className="cp-form-group">
                                        <label className="cp-form-label">Cover Letter / Message</label>
                                        <textarea className="cp-form-textarea" placeholder="Tell us why you're a great fit for this role..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                                    </div>
                                    <div className="cp-form-group">
                                        <label className="cp-form-label">Attach CV / Resume</label>
                                        <div className="cp-form-upload">
                                            <div className="cp-form-upload-icon">📄</div>
                                            <div className="cp-form-upload-text"><b>Click to upload</b> or drag and drop</div>
                                            <div className="cp-form-upload-sub">PDF or DOC — max 5MB</div>
                                        </div>
                                    </div>
                                    <div className="cp-modal-submit-row">
                                        <button className="btn-cp-submit" onClick={handleSubmit}>Submit Application →</button>
                                        <button className="btn-cp-cancel" onClick={() => setApplyJob(null)}>Cancel</button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}