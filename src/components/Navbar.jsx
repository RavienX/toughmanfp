import logoImg from "../assets/logo.png";

const NAV_LINKS = [
    { label: "HOME", page: "home" },
    { label: "ABOUT US", page: "about" },
    { label: "PRODUCTS", page: "products" },
    { label: "OUR PROCESS", page: "process" },
    { label: "QUALITY", page: "quality" },
    { label: "CAREERS", page: "careers" },
    { label: "NEWS", page: "news" },
    { label: "CONTACT", page: "contact" },
];

const NAVBAR_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Open+Sans:wght@400;600&display=swap');

/* ─ NAVBAR ─ */
.navbar {
  width: 100%;
  background: var(--navy);
  position: sticky;
  top: 0;
  z-index: 200;
  box-shadow: 0 2px 20px rgba(0,0,0,.4);
}
.navbar .inner {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 90px;
  gap: 16px;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 24px !important;
  width: 100% !important;
}

/* Logo */
.logo { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
.logo-img { height: 80px; width: auto; object-fit: contain; display: block; }
.logo-circle {
  width: 58px; height: 58px;
  border: 2.5px solid var(--orange);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 22px;
  color: var(--orange); flex-shrink: 0; position: relative; background: transparent;
}
.logo-circle::before {
  content: '';
  position: absolute;
  top: -4px; right: -4px;
  width: 14px; height: 14px;
  border-top: 2.5px solid var(--orange);
  border-right: 2.5px solid var(--orange);
  border-radius: 0 4px 0 0;
}
.logo-text { display: flex; flex-direction: column; }
.logo-name {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 18px;
  color: #fff; letter-spacing: 2px; text-transform: uppercase; line-height: 1.15;
}
.logo-sub {
  font-family: 'Montserrat', sans-serif; font-size: 9px; color: #aac4e0;
  letter-spacing: 2px; text-transform: uppercase; font-weight: 600;
}
.logo-tagline {
  font-family: 'Montserrat', sans-serif; font-size: 8px; color: rgba(255,255,255,.4);
  letter-spacing: 1.5px; text-transform: uppercase;
}

/* Nav end: wraps nav-links + right group, pushed to the far right */
.nav-end { display: flex; align-items: center; gap: 0; margin-left: auto; }

/* Nav links */
.nav-links { display: flex; align-items: center; gap: 0; }
.nav-link {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11.5px;
  color: rgba(255,255,255,.8); padding: 8px 11px; text-transform: uppercase;
  letter-spacing: .5px; border-bottom: 2px solid transparent;
  border-top: none; border-left: none; border-right: none;
  transition: color .2s, border-color .2s; cursor: pointer; background: none;
  white-space: nowrap;
}
.nav-link.active, .nav-link:hover { color: var(--orange); border-bottom-color: var(--orange); }

/* Right group: phone + cart */
.nav-right-group { display: flex; align-items: center; gap: 18px; flex-shrink: 0; }
.nav-contact { text-align: right; }
.nav-phone {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 14px; color: #fff;
  display: flex; align-items: center; gap: 6px;
}
.nav-phone-icon { color: var(--orange); font-size: 13px; }
.nav-hours { font-size: 10px; color: rgba(255,255,255,.5); margin-top: 2px; text-align: right; }
.btn-cart {
  background: var(--orange); color: #fff; border: none;
  padding: 11px 20px; border-radius: 4px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12px;
  cursor: pointer; letter-spacing: .5px; text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 8px;
  white-space: nowrap; transition: background .2s;
}
.btn-cart:hover { background: var(--orange-dark); }

/* Responsive */
@media (max-width: 1100px) {
  .nav-links { gap: 0; }
  .nav-link { font-size: 10.5px; padding: 8px 8px; }
}
@media (max-width: 768px) {
  .nav-end .nav-links { display: none; }
}
`;

export default function Navbar({ activePage = "home", onNavigate = () => { } }) {
    const cartCount = 0;

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: NAVBAR_CSS }} />
            <nav className="navbar">
                <div className="inner">

                    {/* Logo */}
                    <div className="logo" style={{ cursor: "pointer" }} onClick={() => onNavigate("home")}>
                        <img src={logoImg} alt="Toughman Logo" className="logo-img" />
                    </div>

                    {/* Nav Links + Right Group — all pushed to the right */}
                    <div className="nav-end">
                        <div className="nav-links">
                            {NAV_LINKS.map(({ label, page }) => (
                                <button
                                    key={page}
                                    className={`nav-link${activePage === page ? " active" : ""}`}
                                    onClick={() => onNavigate(page)}
                                >{label}</button>
                            ))}
                        </div>

                        {/* Phone + Cart */}
                        <div className="nav-right-group">
                            <div className="nav-contact">
                                <div className="nav-phone">
                                    <span className="nav-phone-icon">📞</span>
                                    +63 945 982 9389
                                </div>
                                <div className="nav-hours">Mon - Sat: 8:00 AM – 5:00 PM</div>
                            </div>
                            <button className="btn-cart">
                                🛒 MY CART ({cartCount})
                            </button>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    );
}