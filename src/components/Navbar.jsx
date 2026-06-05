import { useState, useEffect, useRef } from "react";
import logoImg from "../assets/logo.png";

const NAV_LINKS = [
  { label: "Home", page: "home" },
  { label: "About Us", page: "about" },
  { label: "Products", page: "products" },
  { label: "Our Process", page: "process" },
  { label: "Quality", page: "quality" },
  { label: "Careers", page: "careers" },
  { label: "News", page: "news" },
  { label: "Contact", page: "contact" },
];

/* ─── SVG ICON COMPONENTS ─── */
const IconPhone = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.17 6.17l.62-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconMail = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const IconClock = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconArrow = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const IconWhatsApp = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);
const IconFacebook = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const IconInstagram = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const IconLinkedIn = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const NAVBAR_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600&display=swap');

/* ─── RESET ─── */
*, *::before, *::after { box-sizing: border-box; }

/* ─── CSS VARS ─── */
:root {
  --navy:        #0a1628;
  --navy-dark:   #060f1e;
  --navy-mid:    #0d1e3a;
  --orange:      #e8611a;
  --orange-dark: #c9500f;
  --orange-dim:  rgba(232,97,26,.12);
  --white-60:    rgba(255,255,255,.60);
  --white-45:    rgba(255,255,255,.45);
  --white-30:    rgba(255,255,255,.30);
  --white-15:    rgba(255,255,255,.15);
  --white-08:    rgba(255,255,255,.08);
  --white-06:    rgba(255,255,255,.06);
}

/* ─── TOP BAR ─── */
.nb-topbar {
  background: var(--navy-dark);
  border-bottom: 1px solid var(--white-08);
  padding: 0;
  overflow: hidden;
}
.nb-topbar-inner {
  width: 100%;
  padding: 0 48px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.nb-topbar-left {
  display: flex;
  align-items: center;
  gap: 0;
}
.nb-topbar-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Open Sans', sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: var(--white-45);
  text-decoration: none;
  padding: 0 14px 0 0;
  margin: 0 14px 0 0;
  border-right: 1px solid var(--white-15);
  white-space: nowrap;
  transition: color .2s;
  line-height: 1;
}
.nb-topbar-item:last-child {
  border-right: none;
  margin-right: 0;
  padding-right: 0;
}
.nb-topbar-item:hover { color: rgba(255,255,255,.82); }
.nb-topbar-item svg { flex-shrink: 0; }

/* Halal badge in topbar */
.nb-halal-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Montserrat', sans-serif;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: .7px;
  text-transform: uppercase;
  color: var(--orange);
  background: var(--orange-dim);
  border: 1px solid rgba(232,97,26,.25);
  border-radius: 3px;
  padding: 4px 9px;
}

.nb-topbar-right {
  display: flex;
  align-items: center;
  gap: 6px;
}
.nb-social-btn {
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background: var(--white-08);
  border: 1px solid var(--white-08);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--white-45);
  text-decoration: none;
  transition: background .2s, color .2s, border-color .2s;
  flex-shrink: 0;
}
.nb-social-btn:hover {
  background: var(--orange);
  border-color: var(--orange);
  color: #fff;
}

/* ─── NAVBAR WRAPPER ─── */
.navbar {
  width: 100%;
  background: var(--navy);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0,0,0,.35);
  transition: box-shadow .3s, background .3s;
}
.navbar.scrolled {
  background: rgba(10,22,40,.97);
  box-shadow: 0 4px 32px rgba(0,0,0,.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* ─── MAIN NAV ROW ─── */
.nb-main {
  width: 100%;
  padding: 0 48px;
  display: flex;
  align-items: center;
  height: 74px;
  position: relative;
}

/* ─── LOGO ─── */
.nb-logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  margin-right: 36px;
  text-decoration: none;
  outline: none;
}
.nb-logo:focus-visible {
  outline: 2px solid var(--orange);
  outline-offset: 4px;
  border-radius: 4px;
}
.nb-logo-img {
  height: 52px;
  width: auto;
  object-fit: contain;
  display: block;
}

/* ─── NAV LINKS ─── */
.nb-links {
  display: flex;
  align-items: stretch;
  gap: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 74px;
  flex: 1;
  justify-content: center;
}
.nb-link-btn {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 10.5px;
  color: var(--white-60);
  padding: 0 11px;
  text-transform: uppercase;
  letter-spacing: .75px;
  border: none;
  border-bottom: 2px solid transparent;
  background: none;
  cursor: pointer;
  white-space: nowrap;
  height: 100%;
  display: flex;
  align-items: center;
  transition: color .2s, border-color .2s;
  position: relative;
}
.nb-link-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 11px;
  right: 11px;
  height: 2px;
  background: var(--orange);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform .25s ease;
}
.nb-link-btn.active {
  color: var(--orange);
}
.nb-link-btn.active::after {
  transform: scaleX(1);
}
@media (hover: hover) {
  .nb-link-btn:hover { color: #fff; }
  .nb-link-btn:hover::after { transform: scaleX(1); }
}

/* ─── RIGHT GROUP ─── */
.nb-right {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-left: auto;
  flex-shrink: 0;
}
.nb-phone-block {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
}
.nb-phone {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 13.5px;
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
  transition: color .2s;
}
.nb-phone:hover { color: var(--orange); }
.nb-phone-icon {
  width: 30px;
  height: 30px;
  background: var(--orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #fff;
  transition: background .2s;
}
.nb-phone:hover .nb-phone-icon { background: var(--orange-dark); }
.nb-hours {
  font-family: 'Open Sans', sans-serif;
  font-size: 9.5px;
  color: var(--white-30);
  white-space: nowrap;
  letter-spacing: .3px;
}
.nb-cta-btn {
  background: var(--orange);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 11px;
  cursor: pointer;
  letter-spacing: .6px;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  white-space: nowrap;
  transition: background .2s, box-shadow .2s, transform .15s;
  box-shadow: 0 2px 10px rgba(232,97,26,.35);
}
.nb-cta-btn:hover {
  background: var(--orange-dark);
  box-shadow: 0 4px 18px rgba(232,97,26,.45);
  transform: translateY(-1px);
}
.nb-cta-btn:active { transform: translateY(0); }

/* ─── HAMBURGER ─── */
.nb-hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: 1px solid var(--white-15);
  border-radius: 5px;
  cursor: pointer;
  padding: 8px 9px;
  margin-left: auto;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  transition: border-color .2s, background .2s;
}
.nb-hamburger:hover {
  border-color: var(--orange);
  background: var(--orange-dim);
}
.nb-hamburger span {
  display: block;
  width: 20px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: transform .3s, opacity .3s, width .3s;
}
.nb-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nb-hamburger.open span:nth-child(2) { opacity: 0; width: 0; }
.nb-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ─── MOBILE DRAWER ─── */
.nb-drawer {
  display: none;
  flex-direction: column;
  background: var(--navy-mid);
  border-top: 1px solid var(--white-08);
  overflow: hidden;
  max-height: 0;
  transition: max-height .38s cubic-bezier(.4,0,.2,1);
}
.nb-drawer.open { max-height: 680px; }
.nb-drawer-links {
  list-style: none;
  margin: 0;
  padding: 8px 0;
}
.nb-drawer-link-btn {
  display: block;
  width: 100%;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  text-transform: uppercase;
  letter-spacing: .75px;
  color: var(--white-60);
  background: none;
  border: none;
  border-left: 3px solid transparent;
  padding: 13px 24px;
  cursor: pointer;
  transition: color .2s, border-color .2s, background .2s;
}
.nb-drawer-link-btn.active {
  color: var(--orange);
  border-left-color: var(--orange);
  background: var(--orange-dim);
}
@media (hover: hover) {
  .nb-drawer-link-btn:hover {
    color: var(--orange);
    border-left-color: var(--orange);
    background: var(--orange-dim);
  }
}
.nb-drawer-footer {
  padding: 16px 24px 24px;
  border-top: 1px solid var(--white-08);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.nb-drawer-contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.nb-drawer-contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  color: #fff;
  text-decoration: none;
  transition: color .2s;
}
.nb-drawer-contact-item:hover { color: var(--orange); }
.nb-drawer-contact-icon {
  width: 28px;
  height: 28px;
  background: var(--orange-dim);
  border: 1px solid rgba(232,97,26,.3);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--orange);
}
.nb-drawer-cta {
  background: var(--orange);
  color: #fff;
  border: none;
  padding: 14px 20px;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 11.5px;
  letter-spacing: .6px;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  transition: background .2s;
}
.nb-drawer-cta:hover { background: var(--orange-dark); }
.nb-drawer-social {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 4px;
}
.nb-drawer-social-label {
  font-family: 'Open Sans', sans-serif;
  font-size: 10px;
  color: var(--white-30);
  text-transform: uppercase;
  letter-spacing: .6px;
  margin-right: 2px;
}
.nb-drawer-social-btn {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: var(--white-08);
  border: 1px solid var(--white-08);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--white-45);
  text-decoration: none;
  transition: background .2s, color .2s, border-color .2s;
}
.nb-drawer-social-btn:hover {
  background: var(--orange);
  border-color: var(--orange);
  color: #fff;
}

/* ─── RESPONSIVE ─── */

/* Large laptop 1400px */
@media (max-width: 1400px) {
  .nb-link-btn { font-size: 10px; padding: 0 9px; }
  .nb-right { gap: 14px; }
  .nb-cta-btn { padding: 10px 16px; font-size: 11px; }
}

/* 14-inch laptop ~1280-1366px */
@media (max-width: 1366px) {
  .nb-main { padding: 0 24px; }
  .nb-topbar-inner { padding: 0 24px; }
  .nb-link-btn { font-size: 9.5px; padding: 0 7px; letter-spacing: .4px; }
  .nb-logo { margin-right: 16px; }
  .nb-logo-img { height: 46px; }
  .nb-phone { font-size: 12.5px; }
  .nb-phone-icon { width: 26px; height: 26px; }
  .nb-right { gap: 10px; }
  .nb-cta-btn { padding: 9px 14px; font-size: 10.5px; }
  .nb-hours { font-size: 9px; }
}

/* Tight laptop ~1200px */
@media (max-width: 1200px) {
  .nb-main { padding: 0 16px; }
  .nb-topbar-inner { padding: 0 16px; }
  .nb-link-btn { font-size: 9px; padding: 0 6px; letter-spacing: .3px; }
  .nb-logo { margin-right: 10px; }
  .nb-logo-img { height: 40px; }
  .nb-phone { font-size: 11.5px; gap: 5px; }
  .nb-phone-icon { width: 22px; height: 22px; }
  .nb-right { gap: 8px; }
  .nb-cta-btn { padding: 8px 12px; font-size: 10px; }
  .nb-hours { display: none; }
}

@media (max-width: 1200px) {
  .nb-topbar { display: none; }
  .nb-links { display: none !important; }
  .nb-phone-block { display: none; }
  .nb-cta-btn { display: none; }
  .nb-hamburger { display: flex; }
  .nb-drawer { display: flex; }
  .nb-main { height: 64px; padding: 0 24px; }
  .nb-logo-img { height: 44px; }
  .nb-logo { margin-right: 0; }
}

@media (max-width: 520px) {
  .nb-main { padding: 0 16px; height: 60px; }
  .nb-logo-img { height: 40px; }
  .nb-drawer-contact { grid-template-columns: 1fr; gap: 8px; }
}

@media (max-width: 380px) {
  .nb-main { padding: 0 12px; }
}
`;

export default function Navbar({ activePage = "home", onNavigate = () => { } }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close drawer on outside click */
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  const handleNav = (page) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: NAVBAR_CSS }} />

      {/* ── Top utility bar ── */}
      <div className="nb-topbar">
        <div className="nb-topbar-inner">
          <div className="nb-topbar-left">
            <a href="mailto:info@toughmanfp.com" className="nb-topbar-item">
              <IconMail /> info@toughmanfp.com
            </a>
            <a href="tel:+639459829389" className="nb-topbar-item">
              <IconPhone /> +63 945 982 9389
            </a>
            <span className="nb-topbar-item">
              <IconClock /> Mon – Sat &nbsp;8:00 AM – 5:00 PM
            </span>

          </div>
          <div className="nb-topbar-right">
            <span className="nb-halal-badge">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
              Halal Certified
            </span>
            {[
              { label: "Facebook", Icon: IconFacebook, href: "#" },
              { label: "Instagram", Icon: IconInstagram, href: "#" },
              { label: "LinkedIn", Icon: IconLinkedIn, href: "#" },
            ].map(({ label, Icon, href }) => (
              <a key={label} href={href} className="nb-social-btn" aria-label={label}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav
        className={`navbar${scrolled ? " scrolled" : ""}`}
        role="navigation"
        aria-label="Main navigation"
        ref={drawerRef}
      >
        <div className="nb-main">
          {/* Logo */}
          <div
            className="nb-logo"
            onClick={() => handleNav("home")}
            role="link"
            tabIndex={0}
            aria-label="Toughman Halal Chicken – homepage"
            onKeyDown={(e) => e.key === "Enter" && handleNav("home")}
          >
            <img src={logoImg} alt="Toughman Halal Chicken" className="nb-logo-img" />
          </div>

          {/* Desktop links */}
          <ul className="nb-links" role="menubar">
            {NAV_LINKS.map(({ label, page }) => (
              <li key={page} role="none">
                <button
                  className={`nb-link-btn${activePage === page ? " active" : ""}`}
                  onClick={() => handleNav(page)}
                  role="menuitem"
                  aria-current={activePage === page ? "page" : undefined}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right block */}
          <div className="nb-right">
            <div className="nb-phone-block">
              <a href="tel:+639459829389" className="nb-phone" aria-label="Call us">
                <span className="nb-phone-icon">
                  <IconPhone size={13} />
                </span>
                +63 945 982 9389
              </a>
              <span className="nb-hours">Mon – Sat: 8:00 AM – 5:00 PM</span>
            </div>
            <button
              className="nb-cta-btn"
              onClick={() => handleNav("contact")}
              aria-label="Request a quote"
            >
              Get a Quote <IconArrow size={13} />
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`nb-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="nb-drawer"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        <div
          id="nb-drawer"
          className={`nb-drawer${menuOpen ? " open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <ul className="nb-drawer-links" role="menu">
            {NAV_LINKS.map(({ label, page }) => (
              <li key={page} role="none">
                <button
                  className={`nb-drawer-link-btn${activePage === page ? " active" : ""}`}
                  onClick={() => handleNav(page)}
                  role="menuitem"
                  aria-current={activePage === page ? "page" : undefined}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <div className="nb-drawer-footer">
            <div className="nb-drawer-contact">
              <a href="tel:+639459829389" className="nb-drawer-contact-item">
                <span className="nb-drawer-contact-icon"><IconPhone size={13} /></span>
                +63 945 982 9389
              </a>
              <a href="https://wa.me/639459829389" className="nb-drawer-contact-item"
                target="_blank" rel="noopener noreferrer">
                <span className="nb-drawer-contact-icon"><IconWhatsApp size={13} /></span>
                WhatsApp
              </a>
            </div>
            <button className="nb-drawer-cta" onClick={() => handleNav("contact")}>
              Request a Quote <IconArrow size={13} />
            </button>
            <div className="nb-drawer-social">
              <span className="nb-drawer-social-label">Follow us</span>
              {[
                { label: "Facebook", Icon: IconFacebook, href: "#" },
                { label: "Instagram", Icon: IconInstagram, href: "#" },
                { label: "LinkedIn", Icon: IconLinkedIn, href: "#" },
              ].map(({ label, Icon, href }) => (
                <a key={label} href={href} className="nb-drawer-social-btn" aria-label={label}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}>
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}