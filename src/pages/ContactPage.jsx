import { useContactData } from "../hooks/useSiteData";
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
        lines: ["Toughman Processing Inc.", "Sta. Maria, Zamboanga City", "Zamboanga del Sur, Philippines"],
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
    {
        name: "WhatsApp",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
        ),
        url: "https://wa.me/639459829389",
        color: "#25d366",
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
  --navy: #0a1628; --navy-dark: #060f1e; --blue: #1a3a6b;
  --orange: #e8611a; --orange-dark: #c9500f;
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
    radial-gradient(ellipse 55% 70% at 90% 40%, rgba(232,97,26,.09) 0%, transparent 60%),
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
.conp-info-card:hover { background: rgba(255,255,255,.1); border-color: rgba(232,97,26,.35); }
.conp-info-icon {
  width: 48px; height: 48px; border-radius: 10px; flex-shrink: 0;
  background: rgba(232,97,26,.15); border: 1px solid rgba(232,97,26,.3);
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
.conp-main { background: var(--gray-bg); padding: 80px 0; width: 100%; }
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
.conp-form-sub { font-size: 13px; color: var(--gray-text); line-height: 1.7; }

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
  border-color: var(--orange); box-shadow: 0 0 0 3px rgba(232,97,26,.12);
}
.conp-input.error, .conp-select.error { border-color: #ef4444; box-shadow: 0 0 0 3px rgba(239,68,68,.1); }
.conp-textarea { resize: vertical; min-height: 110px; }
.conp-select { cursor: pointer; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237a8499' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; padding-right: 36px; }
.conp-field-error { font-size: 11px; color: #ef4444; margin-top: 3px; }

.conp-char-count { font-size: 10.5px; color: var(--gray-text); text-align: right; margin-top: 3px; }

/* Checkbox */
.conp-checkbox-group { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 20px; }
.conp-checkbox {
  width: 18px; height: 18px; border: 1.5px solid #dde2ec; border-radius: 4px;
  background: #fff; cursor: pointer; flex-shrink: 0; margin-top: 1px;
  appearance: none; transition: background .2s, border-color .2s;
}
.conp-checkbox:checked { background: var(--orange); border-color: var(--orange); }
.conp-checkbox:checked::after { content: '✓'; display: block; text-align: center; color: #fff; font-size: 11px; font-weight: 900; line-height: 16px; }
.conp-checkbox-label { font-size: 12.5px; color: var(--gray-text); line-height: 1.65; }
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
.btn-conp-submit:disabled { background: var(--gray-text); cursor: not-allowed; }
.conp-form-note { font-size: 11px; color: var(--gray-text); text-align: center; margin-top: 12px; line-height: 1.6; }

/* Success state */
.conp-success {
  text-align: center; padding: 48px 20px;
  display: flex; flex-direction: column; align-items: center; gap: 14px;
}
.conp-success-icon { display: flex; align-items: center; justify-content: center; }
.conp-success-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 20px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .3px;
}
.conp-success-desc { font-size: 13.5px; color: var(--gray-text); line-height: 1.8; max-width: 340px; }
.btn-conp-reset {
  background: var(--navy); color: #fff; border: none; border-radius: 8px;
  padding: 12px 28px; font-family: 'Montserrat', sans-serif;
  font-weight: 700; font-size: 12px; text-transform: uppercase;
  letter-spacing: .8px; cursor: pointer; margin-top: 8px; transition: background .2s;
}
.btn-conp-reset:hover { background: var(--navy-light); }

/* ─ Map + Quick Info ─ */
.conp-map-col { display: flex; flex-direction: column; gap: 24px; }

.conp-map-wrap {
  border-radius: 16px; overflow: hidden;
  border: 1px solid #eaeaea; box-shadow: 0 8px 32px rgba(13,27,62,.08);
  aspect-ratio: 4/3; position: relative;
}
.conp-map-iframe {
  width: 100%; height: 100%; display: block; position: absolute; inset: 0;
}
.conp-map-open-btn {
  position: absolute; bottom: 14px; right: 14px; z-index: 3;
  background: var(--navy); border: none; border-radius: 8px;
  padding: 9px 16px; cursor: pointer;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10.5px;
  color: #fff; text-transform: uppercase; letter-spacing: .8px;
  display: flex; align-items: center; gap: 6px;
  box-shadow: 0 4px 16px rgba(0,0,0,.25); transition: background .2s;
}
.conp-map-open-btn:hover { background: var(--orange); }

/* Quick contact cards */
.conp-quick-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.conp-quick-card {
  background: #fff; border-radius: 12px; padding: 18px 16px;
  border: 1px solid #eaeaea; box-shadow: 0 3px 10px rgba(0,0,0,.04);
  display: flex; flex-direction: column; gap: 8px;
  transition: box-shadow .2s, border-color .2s, transform .2s;
}
.conp-quick-card:hover { box-shadow: 0 6px 20px rgba(13,27,62,.09); border-color: rgba(232,97,26,.2); transform: translateY(-1px); }
.conp-quick-card-icon {
  width: 40px; height: 40px; border-radius: 10px;
  background: rgba(232,97,26,.1); border: 1px solid rgba(232,97,26,.2);
  display: flex; align-items: center; justify-content: center;
  color: var(--orange); flex-shrink: 0;
}
.conp-quick-card-title {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 12px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .3px;
}
.conp-quick-card-val { font-size: 12px; color: var(--gray-text); line-height: 1.6; word-break: break-word; }
.conp-quick-card-link {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10.5px;
  color: var(--orange); text-transform: uppercase; letter-spacing: .6px;
  background: none; border: none; cursor: pointer; padding: 0; text-decoration: none;
  display: inline-flex; align-items: center; gap: 4px; margin-top: 4px;
  transition: opacity .2s;
}
.conp-quick-card-link:hover { opacity: .75; }



/* ════ RESPONSIVE ════ */
@media (max-width: 1100px) {
  .conp-inner { padding: 0 24px; }
  .conp-hero-layout { gap: 48px; }
}
@media (max-width: 900px) {
  .conp-hero-layout { grid-template-columns: 1fr; gap: 40px; }
  .conp-main .conp-inner { grid-template-columns: 1fr; }
  .conp-info-cards { display: grid; grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .conp-hero { padding: 52px 0 44px; }
  .conp-quick-card:hover { transform: none; }
}
@media (max-width: 640px) {
  .conp-hero { padding: 44px 0 36px; }
  .conp-info-cards { grid-template-columns: 1fr; }
  .conp-main { padding: 44px 0; }
  .conp-form-wrap { padding: 24px 18px; }
  .conp-form-row { grid-template-columns: 1fr; }
  .conp-quick-grid { grid-template-columns: 1fr 1fr; }
  .conp-map-wrap { aspect-ratio: 3/2; }
}
@media (max-width: 420px) {
  .conp-inner { padding: 0 16px; }
  .conp-hero-title { font-size: 28px; }
  .conp-info-cards { gap: 10px; }
  .conp-quick-grid { grid-template-columns: 1fr; }
  .conp-form-title { font-size: 20px; }
  .conp-map-wrap { aspect-ratio: 1/1; }
}
`;

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function ContactPage({ onNavigate = () => { } }) {
    /* ── Firebase contact data (defaults shown immediately) ── */
    const contactData = useContactData({
        address: "Sta. Maria, Zamboanga City, Philippines",
        phone: "+63 945 982 9389",
        email: "inquiries@toughmanfp.com",
        mapEmbedUrl: "",
        officeHours: "Monday – Friday, 8:00 AM – 5:00 PM",
    });
    // contactData fields available: address, phone, email, mapEmbedUrl, officeHours
    // CONTACT_INFO array keeps its SVG icons (not editable via admin)
    // Only the text values are overrideable from Firebase
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
                                Retailers, restaurants, caterers, and distributors are welcome
                                to reach out for pricing, supply terms, or product inquiries.
                                Our sales team responds within one business day, Monday to Saturday.
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
                                <div className="conp-success-icon">
                                    <svg viewBox="0 0 52 52" width="52" height="52" fill="none">
                                        <circle cx="26" cy="26" r="25" fill="rgba(232,97,26,.12)" stroke="var(--orange)" strokeWidth="1.5" />
                                        <path d="M14 26l8 9 16-18" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
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
                                    We respond to all inquiries within <b>1 business day</b>.<br />
                                    Mon – Sat, 8:00 AM – 5:00 PM PH Time.
                                </div>
                            </>
                        )}
                    </div>

                    {/* Map + Quick info */}
                    <div className="conp-map-col">
                        {/* Google Maps Embed */}
                        <div className="conp-map-wrap">
                            <iframe
                                title="Toughman Processing Location"
                                className="conp-map-iframe"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15804.123456789!2d122.0726!3d6.9214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325041b44fea4d33%3A0x1a96e19acdd1c79d!2sSta.%20Maria%2C%20Zamboanga%20City%2C%20Zamboanga%20del%20Sur!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                style={{ border: 0 }}
                            />
                            <button
                                className="conp-map-open-btn"
                                onClick={() => window.open("https://maps.google.com/?q=Sta.+Maria+Zamboanga+City+Philippines", "_blank")}
                            >
                                Open in Google Maps →
                            </button>
                        </div>

                        {/* Quick contact cards */}
                        <div className="conp-quick-grid">
                            <div className="conp-quick-card">
                                <div className="conp-quick-card-icon">
                                    <svg viewBox="0 0 48 48" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M10 8h8l3 8-4.5 3C18 23 25 30 29 32.5l3-4.5 8 3v8c0 0-3 5-10 3C16 39 9 25 8 18 6 11 10 8 10 8z" />
                                    </svg>
                                </div>
                                <div className="conp-quick-card-title">Call Sales</div>
                                <div className="conp-quick-card-val">+63 945 982 9389</div>
                                <a href="tel:+639459829389" className="conp-quick-card-link">Call Now →</a>
                            </div>
                            <div className="conp-quick-card">
                                <div className="conp-quick-card-icon">
                                    <svg viewBox="0 0 48 48" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="6" y="10" width="36" height="28" rx="3" />
                                        <polyline points="6,10 24,26 42,10" />
                                    </svg>
                                </div>
                                <div className="conp-quick-card-title">Email Us</div>
                                <div className="conp-quick-card-val">sales@toughmanprocessing.com</div>
                                <a href="mailto:sales@toughmanprocessing.com" className="conp-quick-card-link">Send Email →</a>
                            </div>
                            <div className="conp-quick-card">
                                <div className="conp-quick-card-icon">
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div className="conp-quick-card-title">WhatsApp</div>
                                <div className="conp-quick-card-val">+63 945 982 9389</div>
                                <a href="https://wa.me/639459829389" target="_blank" rel="noopener noreferrer" className="conp-quick-card-link" style={{ textDecoration: "none" }}>Message Us →</a>
                            </div>
                            <div className="conp-quick-card">
                                <div className="conp-quick-card-icon">
                                    <svg viewBox="0 0 48 48" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="24" cy="24" r="18" />
                                        <path d="M24 14v10l6 6" strokeWidth="2.2" />
                                    </svg>
                                </div>
                                <div className="conp-quick-card-title">Office Hours</div>
                                <div className="conp-quick-card-val">Mon–Sat 8AM–5PM</div>
                                <span className="conp-quick-card-link" style={{ cursor: "default" }}>PH Time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </>
    );
}