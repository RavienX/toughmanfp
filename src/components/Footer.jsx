import logoImg from "../assets/logo.png";

/* ─── DATA ─── */
const QUICK_LINKS = [
    { label: "Home", page: "home" },
    { label: "About Us", page: "about" },
    { label: "Products", page: "products" },
    { label: "Our Process", page: "process" },
    { label: "Quality", page: "quality" },
    { label: "Careers", page: "careers" },
    { label: "News", page: "news" },
    { label: "Contact", page: "contact" },
];

const PRODUCTS = [
    "Whole Chicken",
    "Chicken Parts",
    "Frozen Cuts",
    "Marinated Chicken",
    "Bulk / Wholesale",
];

const CERTIFICATIONS = [
    "Halal Certified",
    "NMIS Approved",
    "Quality Assurance",
    "Cold Chain Compliant",
];

const LEGAL_LINKS = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Sitemap", href: "#" },
];

const SOCIAL = [
    {
        label: "Facebook", href: "#",
        svg: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
    },
    {
        label: "Instagram", href: "#",
        svg: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
    },
    {
        label: "LinkedIn", href: "#",
        svg: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        label: "YouTube", href: "#",
        svg: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon fill="currentColor" stroke="none" points="9.75 15.02 15.5 12 9.75 8.98" />
            </svg>
        ),
    },

];

/* ─── SVG ICON PRIMITIVES ─── */
const IconPhone = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.17 6.17l.62-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);
const IconWhatsApp = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
);
const IconEmail = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);
const IconClock = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
);
const IconPin = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
);
const IconCheck = () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);
const IconChevron = () => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);
const IconShield = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

/* ─── CSS ─── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600&display=swap');

/* ─── VARS ─── */
:root {
  --footer-bg:      #0a1628;
  --footer-dark:    #060f1e;
  --footer-mid:     #0d1e3a;
  --orange:         #e8611a;
  --orange-dark:    #c9500f;
  --orange-dim:     rgba(232,97,26,.12);
  --orange-border:  rgba(232,97,26,.28);
  --w60: rgba(255,255,255,.60);
  --w50: rgba(255,255,255,.50);
  --w35: rgba(255,255,255,.35);
  --w22: rgba(255,255,255,.22);
  --w12: rgba(255,255,255,.12);
  --w08: rgba(255,255,255,.08);
  --w06: rgba(255,255,255,.06);
}

/* ─── ROOT ─── */
.ft {
  background: var(--footer-bg);
  color: var(--w50);
  font-family: 'Open Sans', sans-serif;
}



/* ─────── MAIN BODY ─────── */
.ft-body {
  padding: 52px 0 46px;
  border-top: 1px solid var(--w08);
}
.ft-grid {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 270px 155px 215px 1fr;
  gap: 0 44px;
  align-items: start;
}

/* ─── BRAND COLUMN ─── */
.ft-brand-logo {
  height: 52px;
  width: auto;
  object-fit: contain;
  display: block;
  margin-bottom: 16px;
}
.ft-brand-tagline {
  font-family: 'Montserrat', sans-serif;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  color: var(--orange);
  margin: 0 0 8px;
  display: block;
}
.ft-brand-desc {
  font-size: 12.5px;
  line-height: 1.85;
  color: rgba(255,255,255,.48);
  margin: 0 0 22px;
}
.ft-certs {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.ft-cert-tag {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: var(--w06);
  border: 1px solid var(--w12);
  border-radius: 4px;
  padding: 6px 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 9.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .65px;
  color: rgba(255,255,255,.55);
  width: fit-content;
}
.ft-cert-icon {
  color: var(--orange);
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

/* ─── COLUMNS (Quick Links / Products+Certs) ─── */
.ft-col-title {
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-weight: 800;
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 9px;
  border-bottom: 2px solid var(--orange);
  margin-bottom: 14px;
}
.ft-col-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.ft-col-list li { margin-bottom: 8px; }
.ft-col-list a,
.ft-col-list button {
  font-family: 'Open Sans', sans-serif;
  font-size: 12.5px;
  color: var(--w50);
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: color .18s, gap .18s;
  text-align: left;
}
.ft-col-list a:hover,
.ft-col-list button:hover {
  color: var(--orange);
  gap: 8px;
}
.ft-link-icon {
  color: var(--w22);
  flex-shrink: 0;
  transition: color .18s;
}
.ft-col-list a:hover .ft-link-icon,
.ft-col-list button:hover .ft-link-icon {
  color: var(--orange);
}

/* ─── CONTACT COLUMN ─── */
.ft-contact-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.ft-contact-row {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  margin-bottom: 15px;
}
.ft-contact-row:last-child { margin-bottom: 0; }
.ft-contact-icon-wrap {
  width: 30px;
  height: 30px;
  background: var(--orange-dim);
  border: 1px solid var(--orange-border);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--orange);
  margin-top: 1px;
}
.ft-contact-lbl {
  font-family: 'Montserrat', sans-serif;
  font-size: 8.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .8px;
  color: var(--w22);
  margin-bottom: 2px;
}
.ft-contact-val {
  font-size: 12.5px;
  color: var(--w60);
  line-height: 1.5;
  text-decoration: none;
  display: block;
  transition: color .18s;
}
a.ft-contact-val:hover { color: var(--orange); }

/* ─── SOCIAL ─── */
.ft-social {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 22px;
}
.ft-social-btn {
  width: 36px;
  height: 36px;
  background: var(--w08);
  border: 1px solid var(--w12);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--w50);
  text-decoration: none;
  flex-shrink: 0;
  transition: background .18s, color .18s, border-color .18s, transform .15s;
}
.ft-social-btn:hover {
  background: var(--orange);
  border-color: var(--orange);
  color: #fff;
  transform: translateY(-2px);
}

/* ─── DIVIDER ─── */
.ft-divider {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
}
.ft-divider hr {
  border: none;
  border-top: 1px solid var(--w08);
  margin: 0 0 20px;
}

/* ─── TRUST BAR ─── */
.ft-trust-bar {
  max-width: 1280px;
  margin: 0 auto 0;
  padding: 0 40px 36px;
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
}
.ft-trust-item {
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: 'Montserrat', sans-serif;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: .6px;
  text-transform: uppercase;
  color: var(--w35);
}
.ft-trust-item svg { color: var(--orange); flex-shrink: 0; }
.ft-trust-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--w22);
  flex-shrink: 0;
}

/* ─── BOTTOM BAR ─── */
.ft-bottom {
  background: var(--footer-dark);
  border-top: 1px solid var(--w08);
  padding: 15px 0;
}
.ft-bottom-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.ft-copy {
  font-size: 11.5px;
  color: rgba(255,255,255,.25);
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}
.ft-legal {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0;
}
.ft-legal li + li::before {
  content: '·';
  color: var(--w22);
  padding: 0 10px;
  font-size: 13px;
}
.ft-legal a {
  font-size: 11.5px;
  color: rgba(255,255,255,.28);
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  transition: color .18s;
}
.ft-legal a:hover { color: rgba(255,255,255,.65); }

/* ────────── RESPONSIVE ────────── */
@media (max-width: 1100px) {
  .ft-grid {
    grid-template-columns: 240px 145px 1fr 1fr;
    gap: 0 32px;
  }
  .ft-body { padding: 44px 0 38px; }
  .ft-grid, .ft-divider, .ft-trust-bar, .ft-bottom-inner { padding-left: 28px; padding-right: 28px; }
}

@media (max-width: 880px) {
  .ft-grid {
    grid-template-columns: 1fr 1fr;
    gap: 36px 28px;
  }
  .ft-brand { grid-column: 1 / -1; }
  .ft-brand-desc { max-width: 460px; }
  .ft-certs { flex-direction: row; flex-wrap: wrap; }
  .ft-trust-bar { gap: 16px; }
}

@media (max-width: 620px) {
  .ft-grid {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 20px;
  }
  .ft-brand { grid-column: 1; }
  .ft-divider, .ft-trust-bar, .ft-bottom-inner { padding-left: 20px; padding-right: 20px; }
  .ft-body { padding: 36px 0 30px; }
  .ft-bottom-inner { flex-direction: column; align-items: flex-start; gap: 10px; }
  .ft-legal { flex-wrap: wrap; gap: 4px 0; }
  .ft-trust-bar { flex-direction: column; align-items: flex-start; gap: 10px; }
  .ft-trust-dot { display: none; }
}

@media (max-width: 380px) {
  .ft-grid, .ft-divider, .ft-trust-bar, .ft-bottom-inner { padding-left: 16px; padding-right: 16px; }
  .ft-social-btn { width: 32px; height: 32px; }
}
`;

/* ─── COMPONENT ─── */
export default function Footer({ onNavigate = () => { } }) {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: CSS }} />
            <footer className="ft">

                {/* ── Main grid ── */}
                <div className="ft-body">
                    <div className="ft-grid">

                        {/* Col 1 — Brand */}
                        <div className="ft-brand">
                            <img src={logoImg} alt="Toughman Halal Chicken" className="ft-brand-logo" />
                            <span className="ft-brand-tagline">Premium Halal Poultry — Philippines</span>
                            <p className="ft-brand-desc">
                                TOUGHMAN Frozen Product Processing supplies certified halal poultry products to distributors,
                                restaurants, and food service businesses across the Philippines. We operate a
                                fully integrated cold chain from processing to delivery.
                            </p>
                            <div className="ft-certs">
                                {[
                                    "100% Halal Certified",
                                    "NMIS Inspected",
                                    "Cold Chain Certified",
                                ].map((label) => (
                                    <span key={label} className="ft-cert-tag">
                                        <span className="ft-cert-icon"><IconCheck /></span>
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Col 2 — Quick Links */}
                        <div>
                            <div className="ft-col-title">
                                Quick Links
                            </div>
                            <ul className="ft-col-list">
                                {QUICK_LINKS.map(({ label, page }) => (
                                    <li key={page}>
                                        <button onClick={() => onNavigate(page)}>
                                            <span className="ft-link-icon"><IconChevron /></span>
                                            {label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 3 — Products + Certifications */}
                        <div>
                            <div className="ft-col-title">Our Products</div>
                            <ul className="ft-col-list">
                                {PRODUCTS.map((item) => (
                                    <li key={item}>
                                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("products"); }}>
                                            <span className="ft-link-icon"><IconChevron /></span>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="ft-col-title" style={{ marginTop: 26 }}>Certifications</div>
                            <ul className="ft-col-list">
                                {CERTIFICATIONS.map((item) => (
                                    <li key={item}>
                                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("quality"); }}>
                                            <span className="ft-link-icon"><IconChevron /></span>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 4 — Contact */}
                        <div>
                            <div className="ft-col-title">Contact Us</div>
                            <ul className="ft-contact-list">
                                <li className="ft-contact-row">
                                    <div className="ft-contact-icon-wrap"><IconPhone /></div>
                                    <div>
                                        <div className="ft-contact-lbl">Phone</div>
                                        <a href="tel:+639459829389" className="ft-contact-val">+63 945 982 9389</a>
                                    </div>
                                </li>
                                <li className="ft-contact-row">
                                    <div className="ft-contact-icon-wrap"><IconWhatsApp /></div>
                                    <div>
                                        <div className="ft-contact-lbl">WhatsApp</div>
                                        <a
                                            href="https://wa.me/639459829389"
                                            className="ft-contact-val"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Chat with our team
                                        </a>
                                    </div>
                                </li>
                                <li className="ft-contact-row">
                                    <div className="ft-contact-icon-wrap"><IconEmail /></div>
                                    <div>
                                        <div className="ft-contact-lbl">Email</div>
                                        <a href="mailto:info@toughmanfp.com" className="ft-contact-val">
                                            info@toughmanfp.com
                                        </a>
                                    </div>
                                </li>
                                <li className="ft-contact-row">
                                    <div className="ft-contact-icon-wrap"><IconClock /></div>
                                    <div>
                                        <div className="ft-contact-lbl">Business Hours</div>
                                        <span className="ft-contact-val">Mon – Sat: 8:00 AM – 5:00 PM</span>
                                    </div>
                                </li>
                                <li className="ft-contact-row">
                                    <div className="ft-contact-icon-wrap"><IconPin /></div>
                                    <div>
                                        <div className="ft-contact-lbl">Address</div>
                                        <a
                                            href="https://maps.google.com"
                                            className="ft-contact-val"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Sta. Maria, Zamboanga City, Philippines
                                        </a>
                                    </div>
                                </li>
                            </ul>

                            {/* Social icons */}
                            <div className="ft-social">
                                {SOCIAL.map(({ label, href, svg }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        className="ft-social-btn"
                                        aria-label={label}
                                        target={href !== "#" ? "_blank" : undefined}
                                        rel={href !== "#" ? "noopener noreferrer" : undefined}
                                    >
                                        {svg}
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* ── Trust bar ── */}
                <div className="ft-divider">
                    <hr />
                </div>
                <div className="ft-trust-bar">
                    {[
                        { icon: <IconShield />, text: "Halal Certified Supplier" },
                        { icon: <IconCheck />, text: "NMIS Approved Facility" },
                        { icon: <IconCheck />, text: "Cold Chain Integrity" },
                        { icon: <IconCheck />, text: "Nationwide Distribution" },
                        { icon: <IconCheck />, text: "B2B & Wholesale Ready" },
                    ].map(({ icon, text }, i, arr) => (
                        <span key={text} style={{ display: "contents" }}>
                            <span className="ft-trust-item">
                                {icon}
                                {text}
                            </span>
                            {i < arr.length - 1 && <span className="ft-trust-dot" aria-hidden="true" />}
                        </span>
                    ))}
                </div>

                {/* ── Bottom bar ── */}
                <div className="ft-bottom">
                    <div className="ft-bottom-inner">
                        <p className="ft-copy">
                            &copy; {new Date().getFullYear()} TOUGHMAN Frozen Product Processing. All rights reserved.
                        </p>
                        <ul className="ft-legal">
                            {LEGAL_LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <a href={href}>{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </footer>
        </>
    );
}