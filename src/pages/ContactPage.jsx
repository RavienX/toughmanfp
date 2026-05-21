import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const CONTACT_INFO = [
    {
        icon: (
            <svg viewBox="0 0 48 48" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 4C16.3 4 10 10.3 10 18c0 10.5 14 26 14 26s14-15.5 14-26c0-7.7-6.3-14-14-14z" />
                <circle cx="24" cy="18" r="4" />
            </svg>
        ),
        label: "Address",
        lines: ["Toughman Processing Inc.", "Quezon City, Metro Manila", "Philippines"],
        action: null,
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 8h8l3 8-4.5 3C18 23 25 30 29 32.5l3-4.5 8 3v8c0 0-3 5-10 3C16 39 9 25 8 18 6 11 10 8 10 8z" />
            </svg>
        ),
        label: "Phone",
        lines: ["+63 945 982 9389"],
        action: "tel:+639459829389",
        actionLabel: "Call Now",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="10" width="36" height="28" rx="3" />
                <polyline points="6,10 24,26 42,10" />
            </svg>
        ),
        label: "Email",
        lines: ["info@toughmanprocessing.com", "sales@toughmanprocessing.com"],
        action: "mailto:info@toughmanprocessing.com",
        actionLabel: "Send Email",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="24" cy="24" r="18" />
                <path d="M24 14v10l6 6" strokeWidth="2.2" />
            </svg>
        ),
        label: "Business Hours",
        lines: ["Monday – Saturday", "8:00 AM – 5:00 PM", "Closed on Sundays & Holidays"],
        action: null,
    },
];

const INQUIRY_TYPES = [
    "Product Inquiry",
    "Bulk / Wholesale Order",
    "Delivery & Logistics",
    "Quality & Certifications",
    "Partnership / Distribution",
    "Facility Tour / Audit",
    "Careers",
    "Media & Press",
    "General Inquiry",
];

const FAQ_QUICK = [
    {
        q: "What is the minimum order for wholesale?",
        a: "Minimum wholesale orders vary by product. Contact our sales team for current MOQs and pricing.",
    },
    {
        q: "Do you deliver outside Metro Manila?",
        a: "Yes. We deliver to selected provincial areas via our refrigerated cold chain fleet. Contact us for coverage and lead times.",
    },
    {
        q: "Can I visit the facility?",
        a: "Facility tours are available by appointment. Please complete the contact form and select 'Facility Tour / Audit' as the inquiry type.",
    },
    {
        q: "Are your products Halal certified?",
        a: "Yes. All Toughman products are Halal certified by the Islamic Da'wah Council of the Philippines (IDCP).",
    },
    {
        q: "How do I request a copy of your certifications?",
        a: "Certification documents (ISO 22000, HACCP, NMIS, Halal) are available upon request. Use the form and select 'Quality & Certifications'.",
    },
];

const SOCIALS = [
    {
        name: "Facebook",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
        url: "#",
        color: "#1877f2",
    },
    {
        name: "LinkedIn",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
        url: "#",
        color: "#0077b5",
    },
    {
        name: "Instagram",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
            </svg>
        ),
        url: "#",
        color: "#e1306c",
    },
];

// ─── CSS ─────────────────────────────────────────────────────────────────────

const CONTACT_CSS = `
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

.conp-inner { width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 40px; box-sizing: border-box; }

/* ════ HERO ════ */
.conp-hero {
  background: var(--navy); padding: 72px 0 64px;
  position: relative; overflow: hidden; width: 100%;
}
.conp-hero::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 55% 70% at 90% 40%, rgba(244,123,32,.09) 0%, transparent 60%),
    repeating-linear-gradient(-45deg, transparent, transparent 38px, rgba(255,255,255,.016) 38px, rgba(255,255,255,.016) 39px);
  pointer-events: none;
}
.conp-hero .conp-inner { position: relative; z-index: 1; }

.conp-breadcrumb {
  display: flex; align-items: center; gap: 8px; margin-bottom: 24px;
  font-family: 'Montserrat', sans-serif; font-size: 11px;
  color: rgba(255,255,255,.4); letter-spacing: 1px; text-transform: uppercase;
}
.conp-breadcrumb-btn {
  background: none; border: none; cursor: pointer; padding: 0;
  font-family: 'Montserrat', sans-serif; font-size: 11px;
  color: rgba(255,255,255,.4); letter-spacing: 1px; text-transform: uppercase; transition: color .2s;
}
.conp-breadcrumb-btn:hover { color: var(--orange); }
.conp-breadcrumb-sep { color: rgba(255,255,255,.2); }
.conp-breadcrumb-cur { color: var(--orange); }

.conp-hero-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
.conp-hero-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 16px;
}
.conp-hero-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900;
  font-size: clamp(30px, 4vw, 54px);
  line-height: 1.05; color: #fff; text-transform: uppercase; letter-spacing: -.5px;
}
.conp-hero-title .hl { color: var(--orange); }
.conp-hero-divider { width: 50px; height: 3.5px; background: var(--orange); border-radius: 2px; margin: 20px 0; }
.conp-hero-desc { font-size: 14px; color: rgba(255,255,255,.65); line-height: 1.85; margin-bottom: 36px; }

.conp-info-cards { display: flex; flex-direction: column; gap: 14px; }
.conp-info-card {
  background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);
  border-radius: 14px; padding: 18px 20px;
  display: flex; align-items: flex-start; gap: 16px;
  transition: background .2s, border-color .2s;
}
.conp-info-card:hover { background: rgba(255,255,255,.1); border-color: rgba(244,123,32,.35); }
.conp-info-icon {
  width: 48px; height: 48px; border-radius: 10px; flex-shrink: 0;
  background: rgba(244,123,32,.15); border: 1px solid rgba(244,123,32,.3);
  display: flex; align-items: center; justify-content: center;
  color: var(--orange);
}
.conp-info-label {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 10px;
  color: var(--orange); text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 4px;
}
.conp-info-line { font-size: 13px; color: rgba(255,255,255,.8); line-height: 1.65; }
.conp-info-action {
  display: inline-flex; align-items: center; gap: 5px; margin-top: 7px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10.5px;
  color: var(--orange); text-transform: uppercase; letter-spacing: .8px;
  background: none; border: none; cursor: pointer; padding: 0;
  text-decoration: none; transition: opacity .2s;
}
.conp-info-action:hover { opacity: .75; }

/* ════ CONTACT FORM + MAP SECTION ════ */
.conp-main { background: var(--gray-light); padding: 80px 0; width: 100%; }
.conp-main .conp-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }

/* ─ Contact Form ─ */
.conp-form-wrap {
  background: #fff; border-radius: 20px; padding: 36px 32px 36px;
  border: 1px solid #eaeaea; box-shadow: 0 8px 32px rgba(13,27,62,.08);
}
.conp-form-header { margin-bottom: 28px; }
.conp-form-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 10px;
}
.conp-form-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 24px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .3px; margin-bottom: 6px;
}
.conp-form-sub { font-size: 13px; color: var(--gray); line-height: 1.7; }

.conp-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.conp-form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
.conp-field-label {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .8px;
}
.conp-field-required { color: var(--orange); margin-left: 2px; }
.conp-input, .conp-select, .conp-textarea {
  border: 1.5px solid #dde2ec; border-radius: 8px; padding: 11px 14px;
  font-family: 'Open Sans', sans-serif; font-size: 13.5px; color: var(--navy);
  background: #fff; transition: border-color .2s, box-shadow .2s; outline: none; width: 100%;
}
.conp-input:focus, .conp-select:focus, .conp-textarea:focus {
  border-color: var(--orange); box-shadow: 0 0 0 3px rgba(244,123,32,.12);
}
.conp-input.error, .conp-select.error { border-color: #ef4444; box-shadow: 0 0 0 3px rgba(239,68,68,.1); }
.conp-textarea { resize: vertical; min-height: 110px; }
.conp-select { cursor: pointer; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237a8499' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; padding-right: 36px; }
.conp-field-error { font-size: 11px; color: #ef4444; margin-top: 3px; }

.conp-char-count { font-size: 10.5px; color: var(--gray); text-align: right; margin-top: 3px; }

/* Checkbox */
.conp-checkbox-group { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 20px; }
.conp-checkbox {
  width: 18px; height: 18px; border: 1.5px solid #dde2ec; border-radius: 4px;
  background: #fff; cursor: pointer; flex-shrink: 0; margin-top: 1px;
  appearance: none; transition: background .2s, border-color .2s;
}
.conp-checkbox:checked { background: var(--orange); border-color: var(--orange); }
.conp-checkbox:checked::after { content: '✓'; display: block; text-align: center; color: #fff; font-size: 11px; font-weight: 900; line-height: 16px; }
.conp-checkbox-label { font-size: 12.5px; color: var(--gray); line-height: 1.65; }
.conp-checkbox-label b { color: var(--navy); }

.btn-conp-submit {
  width: 100%; background: var(--orange); color: #fff; border: none;
  padding: 15px 0; border-radius: 8px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 13px;
  text-transform: uppercase; letter-spacing: .8px; cursor: pointer;
  transition: background .2s, transform .15s; display: flex; align-items: center; justify-content: center; gap: 8px;
}
.btn-conp-submit:hover { background: var(--orange-dark); }
.btn-conp-submit:active { transform: scale(.98); }
.btn-conp-submit:disabled { background: var(--gray); cursor: not-allowed; }
.conp-form-note { font-size: 11px; color: var(--gray); text-align: center; margin-top: 12px; line-height: 1.6; }

/* Success state */
.conp-success {
  text-align: center; padding: 48px 20px;
  display: flex; flex-direction: column; align-items: center; gap: 14px;
}
.conp-success-icon { font-size: 52px; }
.conp-success-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 20px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .3px;
}
.conp-success-desc { font-size: 13.5px; color: var(--gray); line-height: 1.8; max-width: 340px; }
.btn-conp-reset {
  background: var(--navy); color: #fff; border: none; border-radius: 8px;
  padding: 12px 28px; font-family: 'Montserrat', sans-serif;
  font-weight: 700; font-size: 12px; text-transform: uppercase;
  letter-spacing: .8px; cursor: pointer; margin-top: 8px; transition: background .2s;
}
.btn-conp-reset:hover { background: var(--blue); }

/* ─ Map + Quick Info ─ */
.conp-map-col { display: flex; flex-direction: column; gap: 24px; }

.conp-map-wrap {
  border-radius: 16px; overflow: hidden;
  border: 1px solid #eaeaea; box-shadow: 0 8px 32px rgba(13,27,62,.08);
  background: var(--navy); aspect-ratio: 4/3; position: relative;
}
.conp-map-placeholder {
  width: 100%; height: 100%; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 14px;
  background: linear-gradient(135deg, #0d1b3e 0%, #1a3a6b 60%, #0d2a4a 100%);
  position: relative; overflow: hidden;
}
.conp-map-placeholder::before {
  content: '';
  position: absolute; inset: 0;
  background: repeating-linear-gradient(-45deg, transparent, transparent 28px, rgba(255,255,255,.018) 28px, rgba(255,255,255,.018) 29px);
}
.conp-map-grid-lines {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
  background-size: 40px 40px;
}
.conp-map-pin {
  position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 6px;
}
.conp-map-pin-icon {
  width: 52px; height: 52px; border-radius: 50%;
  background: var(--orange); display: flex; align-items: center; justify-content: center;
  font-size: 24px; box-shadow: 0 0 0 10px rgba(244,123,32,.2), 0 0 0 20px rgba(244,123,32,.08);
  animation: conpPulse 2.5s ease-in-out infinite;
}
@keyframes conpPulse {
  0%, 100% { box-shadow: 0 0 0 10px rgba(244,123,32,.2), 0 0 0 20px rgba(244,123,32,.08); }
  50% { box-shadow: 0 0 0 14px rgba(244,123,32,.15), 0 0 0 28px rgba(244,123,32,.05); }
}
.conp-map-pin-label {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 12px;
  color: #fff; text-align: center; text-transform: uppercase; letter-spacing: .5px;
}
.conp-map-pin-addr { font-size: 11px; color: rgba(255,255,255,.6); text-align: center; }
.conp-map-open-btn {
  position: absolute; bottom: 14px; right: 14px; z-index: 3;
  background: #fff; border: none; border-radius: 8px;
  padding: 9px 16px; cursor: pointer;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10.5px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .8px;
  display: flex; align-items: center; gap: 6px;
  box-shadow: 0 4px 16px rgba(0,0,0,.25); transition: background .2s;
}
.conp-map-open-btn:hover { background: var(--orange); color: #fff; }

/* Quick contact cards */
.conp-quick-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.conp-quick-card {
  background: #fff; border-radius: 12px; padding: 18px 16px;
  border: 1px solid #eaeaea; box-shadow: 0 3px 10px rgba(0,0,0,.04);
  display: flex; flex-direction: column; gap: 8px;
  transition: box-shadow .2s, border-color .2s, transform .2s;
}
.conp-quick-card:hover { box-shadow: 0 8px 24px rgba(13,27,62,.1); border-color: rgba(244,123,32,.25); transform: translateY(-2px); }
.conp-quick-card-icon { font-size: 22px; }
.conp-quick-card-title {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 12px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .3px;
}
.conp-quick-card-val { font-size: 12px; color: var(--gray); line-height: 1.6; }
.conp-quick-card-link {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10.5px;
  color: var(--orange); text-transform: uppercase; letter-spacing: .6px;
  background: none; border: none; cursor: pointer; padding: 0; text-decoration: none;
  display: inline-flex; align-items: center; gap: 4px; margin-top: 4px;
  transition: opacity .2s;
}
.conp-quick-card-link:hover { opacity: .75; }

/* ════ SOCIALS STRIP ════ */
.conp-socials-strip { background: var(--navy); padding: 36px 0; width: 100%; border-bottom: 1px solid rgba(255,255,255,.08); }
.conp-socials-strip .conp-inner {
  display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap;
}
.conp-socials-text {
  font-family: 'Montserrat', sans-serif; font-size: 13px; color: rgba(255,255,255,.6);
}
.conp-socials-text b { color: #fff; }
.conp-socials-btns { display: flex; gap: 10px; }
.conp-social-btn {
  width: 42px; height: 42px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.12);
  cursor: pointer; color: rgba(255,255,255,.75);
  transition: background .2s, border-color .2s, color .2s, transform .15s;
}
.conp-social-btn:hover { transform: translateY(-2px); border-color: rgba(244,123,32,.4); color: var(--orange); background: rgba(255,255,255,.1); }

/* ════ FAQ STRIP ════ */
.conp-faq { background: #fff; padding: 72px 0; width: 100%; }
.conp-faq .conp-inner { display: grid; grid-template-columns: 340px 1fr; gap: 64px; align-items: start; }
.conp-faq-left-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px;
}
.conp-faq-left-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(20px, 2.2vw, 28px);
  color: var(--navy); text-transform: uppercase; line-height: 1.2; margin-bottom: 14px;
}
.conp-faq-left-sub { font-size: 13.5px; color: var(--gray); line-height: 1.8; margin-bottom: 28px; }
.btn-conp-faq {
  background: var(--navy); color: #fff; border: none; padding: 13px 26px; border-radius: 7px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12px;
  text-transform: uppercase; letter-spacing: .8px; cursor: pointer; transition: background .2s;
  display: inline-flex; align-items: center; gap: 8px;
}
.btn-conp-faq:hover { background: var(--blue); }
.conp-faq-list { display: flex; flex-direction: column; gap: 10px; }
.conp-faq-item {
  background: var(--gray-light); border: 1px solid #eaeaea;
  border-radius: 12px; overflow: hidden; transition: border-color .2s, box-shadow .2s;
}
.conp-faq-item.open { border-color: rgba(244,123,32,.4); box-shadow: 0 4px 16px rgba(13,27,62,.07); }
.conp-faq-q {
  width: 100%; background: none; border: none; cursor: pointer;
  padding: 18px 22px; text-align: left;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 13px;
  color: var(--navy); line-height: 1.4; transition: color .2s;
}
.conp-faq-item.open .conp-faq-q { color: var(--orange); }
.conp-faq-chevron {
  width: 26px; height: 26px; border-radius: 50%;
  background: #fff; border: 1.5px solid #dde2ec;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; flex-shrink: 0; color: var(--navy);
  transition: background .2s, transform .3s, color .2s, border-color .2s;
}
.conp-faq-item.open .conp-faq-chevron { background: var(--orange); color: #fff; border-color: var(--orange); transform: rotate(180deg); }
.conp-faq-a {
  max-height: 0; overflow: hidden; padding: 0 22px;
  font-size: 13px; color: #4a5568; line-height: 1.85;
  transition: max-height .35s ease, padding .35s ease;
}
.conp-faq-item.open .conp-faq-a { max-height: 200px; padding: 0 22px 20px; }

/* ════ BOTTOM CTA BANNER ════ */
.conp-cta {
  background: var(--orange); padding: 0; width: 100%;
}
.conp-cta .conp-inner {
  display: flex; align-items: center; justify-content: space-between;
  gap: 32px; flex-wrap: wrap; padding-top: 44px; padding-bottom: 44px;
}
.conp-cta-left { display: flex; align-items: center; gap: 18px; }
.conp-cta-icon { font-size: 40px; flex-shrink: 0; }
.conp-cta-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(18px, 2.5vw, 26px);
  color: #fff; text-transform: uppercase; line-height: 1.15;
}
.conp-cta-sub { font-size: 13px; color: rgba(255,255,255,.8); margin-top: 4px; }
.conp-cta-btns { display: flex; gap: 12px; flex-wrap: wrap; flex-shrink: 0; }
.btn-conp-cta-white {
  background: #fff; color: var(--orange); border: none;
  padding: 14px 28px; border-radius: 7px;
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 12.5px;
  cursor: pointer; letter-spacing: .8px; text-transform: uppercase;
  transition: transform .15s, box-shadow .2s; white-space: nowrap;
  box-shadow: 0 4px 16px rgba(0,0,0,.15);
  display: inline-flex; align-items: center; gap: 8px;
}
.btn-conp-cta-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.2); }
.btn-conp-cta-dark {
  background: rgba(0,0,0,.15); color: #fff; border: 2px solid rgba(255,255,255,.5);
  padding: 14px 28px; border-radius: 7px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12.5px;
  cursor: pointer; letter-spacing: .8px; text-transform: uppercase;
  transition: all .2s; white-space: nowrap;
}
.btn-conp-cta-dark:hover { background: rgba(0,0,0,.25); border-color: rgba(255,255,255,.8); }

/* ════ RESPONSIVE ════ */
@media (max-width: 1100px) {
  .conp-inner { padding: 0 24px; }
  .conp-hero-layout { gap: 48px; }
}
@media (max-width: 900px) {
  .conp-hero-layout { grid-template-columns: 1fr; gap: 40px; }
  .conp-main .conp-inner { grid-template-columns: 1fr; }
  .conp-faq .conp-inner { grid-template-columns: 1fr; gap: 36px; }
  .conp-socials-strip .conp-inner { justify-content: center; text-align: center; }
}
@media (max-width: 640px) {
  .conp-hero { padding: 48px 0 40px; }
  .conp-main { padding: 52px 0; }
  .conp-form-wrap { padding: 24px 18px; }
  .conp-form-row { grid-template-columns: 1fr; }
  .conp-quick-grid { grid-template-columns: 1fr; }
  .conp-faq { padding: 52px 0; }
  .conp-cta .conp-inner { flex-direction: column; align-items: flex-start; }
  .conp-cta-btns { width: 100%; }
  .btn-conp-cta-white, .btn-conp-cta-dark { flex: 1; justify-content: center; }
}
@media (max-width: 420px) {
  .conp-inner { padding: 0 16px; }
  .conp-hero-title { font-size: 28px; }
  .conp-info-cards { gap: 10px; }
}
`;

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function ContactPage({ onNavigate = () => { } }) {
    const [openFaq, setOpenFaq] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [agreed, setAgreed] = useState(false);
    const [charCount, setCharCount] = useState(0);
    const [form, setForm] = useState({
        firstName: "", lastName: "", email: "", phone: "",
        company: "", inquiryType: "", subject: "", message: "",
    });

    const update = (field, val) => {
        setForm(f => ({ ...f, [field]: val }));
        if (errors[field]) setErrors(e => ({ ...e, [field]: "" }));
        if (field === "message") setCharCount(val.length);
    };

    const validate = () => {
        const e = {};
        if (!form.firstName.trim()) e.firstName = "First name is required.";
        if (!form.lastName.trim()) e.lastName = "Last name is required.";
        if (!form.email.trim() || !form.email.includes("@")) e.email = "A valid email is required.";
        if (!form.inquiryType) e.inquiryType = "Please select an inquiry type.";
        if (!form.message.trim() || form.message.length < 20) e.message = "Please enter at least 20 characters.";
        if (!agreed) e.agreed = "Please accept our privacy policy.";
        return e;
    };

    const handleSubmit = () => {
        const e = validate();
        if (Object.keys(e).length > 0) { setErrors(e); return; }
        setSubmitting(true);
        setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1400);
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: CONTACT_CSS }} />

            {/* ════════════ HERO ════════════ */}
            <section className="conp-hero">
                <div className="conp-inner">
                    <div className="conp-breadcrumb">
                        <button className="conp-breadcrumb-btn" onClick={() => onNavigate("home")}>Home</button>
                        <span className="conp-breadcrumb-sep">›</span>
                        <span className="conp-breadcrumb-cur">Contact</span>
                    </div>

                    <div className="conp-hero-layout">
                        {/* Left: text */}
                        <div>
                            <span className="conp-hero-label">Get In Touch</span>
                            <h1 className="conp-hero-title">
                                Let's Talk<br />
                                <span className="hl">Business</span>
                            </h1>
                            <div className="conp-hero-divider" />
                            <p className="conp-hero-desc">
                                Whether you're a retailer, restaurant, caterer, or distributor —
                                our team is ready to discuss your frozen chicken supply needs.
                                We respond to all inquiries within one business day.
                            </p>
                            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                                {SOCIALS.map(s => (
                                    <a
                                        key={s.name}
                                        href={s.url}
                                        className="conp-social-btn"
                                        title={s.name}
                                        style={{ textDecoration: "none" }}
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right: contact info cards */}
                        <div className="conp-info-cards">
                            {CONTACT_INFO.map(info => (
                                <div className="conp-info-card" key={info.label}>
                                    <div className="conp-info-icon">{info.icon}</div>
                                    <div>
                                        <div className="conp-info-label">{info.label}</div>
                                        {info.lines.map((line, i) => (
                                            <div className="conp-info-line" key={i}>{line}</div>
                                        ))}
                                        {info.action && (
                                            <a href={info.action} className="conp-info-action">
                                                {info.actionLabel} →
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════ FORM + MAP ════════════ */}
            <section className="conp-main">
                <div className="conp-inner">

                    {/* Contact Form */}
                    <div className="conp-form-wrap">
                        {submitted ? (
                            <div className="conp-success">
                                <div className="conp-success-icon">✅</div>
                                <div className="conp-success-title">Message Received!</div>
                                <p className="conp-success-desc">
                                    Thank you, <b>{form.firstName}</b>! Our team will review your
                                    inquiry and get back to you at <b>{form.email}</b> within
                                    one business day.
                                </p>
                                <button
                                    className="btn-conp-reset"
                                    onClick={() => {
                                        setSubmitted(false);
                                        setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", inquiryType: "", subject: "", message: "" });
                                        setAgreed(false); setErrors({}); setCharCount(0);
                                    }}
                                >Send Another Message</button>
                            </div>
                        ) : (
                            <>
                                <div className="conp-form-header">
                                    <span className="conp-form-label">Contact Form</span>
                                    <div className="conp-form-title">Send Us a Message</div>
                                    <div className="conp-form-sub">All fields marked with <span style={{ color: "var(--orange)" }}>*</span> are required.</div>
                                </div>

                                {/* Name row */}
                                <div className="conp-form-row">
                                    <div className="conp-form-group">
                                        <label className="conp-field-label">First Name <span className="conp-field-required">*</span></label>
                                        <input
                                            className={`conp-input${errors.firstName ? " error" : ""}`}
                                            placeholder="Juan"
                                            value={form.firstName}
                                            onChange={e => update("firstName", e.target.value)}
                                        />
                                        {errors.firstName && <div className="conp-field-error">{errors.firstName}</div>}
                                    </div>
                                    <div className="conp-form-group">
                                        <label className="conp-field-label">Last Name <span className="conp-field-required">*</span></label>
                                        <input
                                            className={`conp-input${errors.lastName ? " error" : ""}`}
                                            placeholder="Dela Cruz"
                                            value={form.lastName}
                                            onChange={e => update("lastName", e.target.value)}
                                        />
                                        {errors.lastName && <div className="conp-field-error">{errors.lastName}</div>}
                                    </div>
                                </div>

                                {/* Email + Phone */}
                                <div className="conp-form-row">
                                    <div className="conp-form-group">
                                        <label className="conp-field-label">Email Address <span className="conp-field-required">*</span></label>
                                        <input
                                            className={`conp-input${errors.email ? " error" : ""}`}
                                            type="email"
                                            placeholder="juan@company.com"
                                            value={form.email}
                                            onChange={e => update("email", e.target.value)}
                                        />
                                        {errors.email && <div className="conp-field-error">{errors.email}</div>}
                                    </div>
                                    <div className="conp-form-group">
                                        <label className="conp-field-label">Phone Number</label>
                                        <input
                                            className="conp-input"
                                            placeholder="+63 9XX XXX XXXX"
                                            value={form.phone}
                                            onChange={e => update("phone", e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* Company + Inquiry Type */}
                                <div className="conp-form-row">
                                    <div className="conp-form-group">
                                        <label className="conp-field-label">Company / Organization</label>
                                        <input
                                            className="conp-input"
                                            placeholder="Your business name"
                                            value={form.company}
                                            onChange={e => update("company", e.target.value)}
                                        />
                                    </div>
                                    <div className="conp-form-group">
                                        <label className="conp-field-label">Inquiry Type <span className="conp-field-required">*</span></label>
                                        <select
                                            className={`conp-select${errors.inquiryType ? " error" : ""}`}
                                            value={form.inquiryType}
                                            onChange={e => update("inquiryType", e.target.value)}
                                        >
                                            <option value="">Select inquiry type...</option>
                                            {INQUIRY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                                        </select>
                                        {errors.inquiryType && <div className="conp-field-error">{errors.inquiryType}</div>}
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="conp-form-group">
                                    <label className="conp-field-label">Subject</label>
                                    <input
                                        className="conp-input"
                                        placeholder="Brief subject of your message"
                                        value={form.subject}
                                        onChange={e => update("subject", e.target.value)}
                                    />
                                </div>

                                {/* Message */}
                                <div className="conp-form-group">
                                    <label className="conp-field-label">Message <span className="conp-field-required">*</span></label>
                                    <textarea
                                        className={`conp-textarea${errors.message ? " error" : ""}`}
                                        placeholder="Tell us more about your inquiry — product needs, order volumes, delivery location, or any questions you have..."
                                        value={form.message}
                                        onChange={e => update("message", e.target.value)}
                                        maxLength={1000}
                                    />
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        {errors.message
                                            ? <div className="conp-field-error">{errors.message}</div>
                                            : <span />}
                                        <div className="conp-char-count">{charCount}/1000</div>
                                    </div>
                                </div>

                                {/* Checkbox */}
                                <div className="conp-checkbox-group">
                                    <input
                                        type="checkbox"
                                        className="conp-checkbox"
                                        id="conp-privacy"
                                        checked={agreed}
                                        onChange={e => { setAgreed(e.target.checked); if (errors.agreed) setErrors(er => ({ ...er, agreed: "" })); }}
                                    />
                                    <label className="conp-checkbox-label" htmlFor="conp-privacy">
                                        I agree to Toughman's <b>Privacy Policy</b> and consent to being contacted regarding my inquiry. We do not share your information with third parties.
                                        {errors.agreed && <div className="conp-field-error" style={{ marginTop: 4 }}>{errors.agreed}</div>}
                                    </label>
                                </div>

                                <button
                                    className="btn-conp-submit"
                                    onClick={handleSubmit}
                                    disabled={submitting}
                                >
                                    {submitting ? (
                                        <><span style={{ display: "inline-block", animation: "spin 1s linear infinite", width: 16, height: 16, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "#fff", borderRadius: "50%" }} />&nbsp;Sending...</>
                                    ) : "Send Message →"}
                                </button>
                                <div className="conp-form-note">
                                    📧 We respond to all inquiries within <b>1 business day</b>.<br />
                                    Mon – Sat, 8:00 AM – 5:00 PM PH Time.
                                </div>
                            </>
                        )}
                    </div>

                    {/* Map + Quick info */}
                    <div className="conp-map-col">
                        {/* Map placeholder */}
                        <div className="conp-map-wrap">
                            <div className="conp-map-placeholder">
                                <div className="conp-map-grid-lines" />
                                <div className="conp-map-pin">
                                    <div className="conp-map-pin-icon">📍</div>
                                    <div className="conp-map-pin-label">Toughman Processing Inc.</div>
                                    <div className="conp-map-pin-addr">Quezon City, Metro Manila, PH</div>
                                </div>
                                <button
                                    className="conp-map-open-btn"
                                    onClick={() => window.open("https://maps.google.com/?q=Quezon+City+Metro+Manila+Philippines", "_blank")}
                                >
                                    🗺️ Open in Google Maps
                                </button>
                            </div>
                        </div>

                        {/* Quick contact cards */}
                        <div className="conp-quick-grid">
                            <div className="conp-quick-card">
                                <div className="conp-quick-card-icon">📞</div>
                                <div className="conp-quick-card-title">Call Sales</div>
                                <div className="conp-quick-card-val">+63 945 982 9389</div>
                                <a href="tel:+639459829389" className="conp-quick-card-link">Call Now →</a>
                            </div>
                            <div className="conp-quick-card">
                                <div className="conp-quick-card-icon">📧</div>
                                <div className="conp-quick-card-title">Email Us</div>
                                <div className="conp-quick-card-val">sales@toughmanprocessing.com</div>
                                <a href="mailto:sales@toughmanprocessing.com" className="conp-quick-card-link">Send Email →</a>
                            </div>
                            <div className="conp-quick-card">
                                <div className="conp-quick-card-icon">🏭</div>
                                <div className="conp-quick-card-title">Visit Us</div>
                                <div className="conp-quick-card-val">Quezon City, PH</div>
                                <button
                                    className="conp-quick-card-link"
                                    onClick={() => window.open("https://maps.google.com/?q=Quezon+City+Philippines", "_blank")}
                                >Get Directions →</button>
                            </div>
                            <div className="conp-quick-card">
                                <div className="conp-quick-card-icon">🕐</div>
                                <div className="conp-quick-card-title">Office Hours</div>
                                <div className="conp-quick-card-val">Mon–Sat 8AM–5PM</div>
                                <span className="conp-quick-card-link" style={{ cursor: "default" }}>PH Time ✓</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════ SOCIALS STRIP ════════════ */}
            <div className="conp-socials-strip">
                <div className="conp-inner">
                    <div className="conp-socials-text">
                        <b>Follow Toughman</b> for product updates, news, and industry insights
                    </div>
                    <div className="conp-socials-btns">
                        {SOCIALS.map(s => (
                            <a
                                key={s.name}
                                href={s.url}
                                className="conp-social-btn"
                                title={s.name}
                                style={{ textDecoration: "none" }}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* ════════════ FAQ ════════════ */}
            <section className="conp-faq">
                <div className="conp-inner">
                    <div>
                        <span className="conp-faq-left-label">Common Questions</span>
                        <h2 className="conp-faq-left-title">Quick Answers Before You Contact Us</h2>
                        <p className="conp-faq-left-sub">
                            These are the questions we hear most often. If yours isn't here,
                            use the form above and we'll get back to you within the day.
                        </p>
                        <button className="btn-conp-faq" onClick={() => onNavigate("quality")}>
                            📋 View Quality Docs
                        </button>
                    </div>
                    <div className="conp-faq-list">
                        {FAQ_QUICK.map((faq, i) => (
                            <div
                                className={`conp-faq-item${openFaq === i ? " open" : ""}`}
                                key={i}
                            >
                                <button
                                    className="conp-faq-q"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    {faq.q}
                                    <span className="conp-faq-chevron">▾</span>
                                </button>
                                <div className="conp-faq-a">{faq.a}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ BOTTOM CTA ════════════ */}
            <div className="conp-cta">
                <div className="conp-inner">
                    <div className="conp-cta-left">
                        <div className="conp-cta-icon">🤝</div>
                        <div>
                            <div className="conp-cta-title">Ready to Place an Order?</div>
                            <div className="conp-cta-sub">Call us directly or browse our full product catalogue.</div>
                        </div>
                    </div>
                    <div className="conp-cta-btns">
                        <a href="tel:+639459829389" className="btn-conp-cta-white" style={{ textDecoration: "none" }}>
                            📞 +63 945 982 9389
                        </a>
                        <button className="btn-conp-cta-dark" onClick={() => onNavigate("products")}>
                            View Products
                        </button>
                    </div>
                </div>
            </div>

            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </>
    );
}