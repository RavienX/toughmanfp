import logoImg from "../assets/logo.png";

const FOOTER_CSS = `
/* ─ FOOTER ─ */
.footer { background: var(--navy); color: rgba(255,255,255,.65); }

/* CTA Banner */
.footer-cta-banner {
  background: var(--navy);
  padding: 28px 0;
}
.footer-cta-inner {
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
}
.footer-cta-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 24px;
  color: #fff; margin-bottom: 4px;
}
.footer-cta-sub { font-size: 13px; color: rgba(255,255,255,.65); }
.footer-cta-btn {
  background: var(--orange); color: #fff;
  padding: 16px 36px; border-radius: 4px;
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 13px;
  letter-spacing: .8px; text-transform: uppercase; text-decoration: none;
  white-space: nowrap; transition: background .2s; display: inline-flex; align-items: center; gap: 10px;
  flex-shrink: 0;
}
.footer-cta-btn:hover { background: var(--orange-dark); }

/* Footer body */
.footer-body { background: var(--navy); padding: 0 0 40px; }
.footer-divider-top { border-top: 1px solid rgba(255,255,255,.12); margin-bottom: 44px; }
.footer-main-grid {
  display: grid;
  grid-template-columns: 1.5fr 1.2fr 1fr 1.2fr 0.8fr;
  gap: 32px;
}
.footer-logo-img { height: 64px; width: auto; object-fit: contain; display: block; }
.footer-desc { font-size: 12px; line-height: 1.85; color: rgba(255,255,255,.6); max-width: 230px; margin-bottom: 20px; }
.footer-certs-row { display: flex; gap: 20px; align-items: flex-start; margin-top: 8px; }
.footer-cert-badge { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.footer-cert-label { font-family: 'Montserrat', sans-serif; font-size: 9px; color: rgba(255,255,255,.55); text-transform: uppercase; letter-spacing: .8px; font-weight: 700; text-align: center; }
.footer-col-title {
  font-family: 'Montserrat', sans-serif; color: #fff; font-weight: 800; font-size: 12px;
  text-transform: uppercase; letter-spacing: 1px; margin-bottom: 18px;
}
.footer-col ul { list-style: none; }
.footer-col li { margin-bottom: 10px; }
.footer-col a { font-size: 12px; color: rgba(255,255,255,.6); transition: color .2s; display: block; }
.footer-col a:hover { color: var(--orange); }
.footer-links-two-col { display: flex; gap: 24px; }
.footer-links-two-col ul { list-style: none; }

/* Contact list with icons */
.footer-contact-list { list-style: none; }
.footer-contact-list li { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 13px; }
.footer-contact-icon { font-size: 13px; flex-shrink: 0; margin-top: 1px; }
.footer-contact-list a { font-size: 12px; color: rgba(255,255,255,.6); transition: color .2s; line-height: 1.55; }
.footer-contact-list a:hover { color: var(--orange); }

/* Social icons */
.social-row { display: flex; gap: 10px; }
.social-btn {
  width: 36px; height: 36px; background: rgba(255,255,255,.1); border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; cursor: pointer; font-weight: 700; color: #fff; transition: background .2s;
}
.social-btn:hover { background: var(--orange); }

/* Footer bottom */
.footer-bottom { background: #060f23; border-top: 1px solid rgba(255,255,255,.08); padding: 18px 0; }
.footer-bottom-inner { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.footer-bottom p { font-size: 12px; color: rgba(255,255,255,.35); }
.footer-bottom-links { display: flex; gap: 16px; align-items: center; font-size: 12px; color: rgba(255,255,255,.45); }
.footer-bottom-links a { color: rgba(255,255,255,.45); text-decoration: none; transition: color .2s; }
.footer-bottom-links a:hover { color: #fff; }
.footer-bottom-links span { color: rgba(255,255,255,.2); }

/* Responsive */
@media (max-width: 768px) {
  .footer-main-grid { grid-template-columns: 1fr 1fr; }
  .footer-cta-inner { flex-direction: column; align-items: flex-start; gap: 18px; }
}
@media (max-width: 480px) {
  .footer-main-grid { grid-template-columns: 1fr; }
}
`;

export default function Footer() {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: FOOTER_CSS }} />
            <footer className="footer">

                {/* Ready to work with us banner */}
                <div className="footer-cta-banner">
                    <div className="inner footer-cta-inner">
                        <div>
                            <h2 className="footer-cta-title">Ready to work with us?</h2>
                            <p className="footer-cta-sub">Get the best halal chicken for your business.</p>
                        </div>
                        <a href="#" className="footer-cta-btn">CONTACT US NOW →</a>
                    </div>
                </div>

                {/* Main footer body */}
                <div className="footer-body">
                    <div className="inner">
                        <div className="footer-divider-top" />
                        <div className="footer-main-grid">

                            {/* Col 1: Logo + desc + certifications */}
                            <div className="footer-brand-col">
                                <div style={{ marginBottom: 16 }}>
                                    <img src={logoImg} alt="Toughman Logo" className="footer-logo-img" />
                                </div>
                                <p className="footer-desc">Delivering premium halal chicken products with quality you can trust and service you can rely on.</p>
                                <div className="footer-certs-row">
                                    <div className="footer-cert-badge">
                                        <svg viewBox="0 0 50 50" width="38" height="38" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="1.4">
                                            <circle cx="25" cy="25" r="22" />
                                            <text x="25" y="30" textAnchor="middle" fill="rgba(255,255,255,.85)" fontSize="13" fontFamily="serif" stroke="none">حلال</text>
                                        </svg>
                                        <div className="footer-cert-label">100% HALAL</div>
                                    </div>
                                    <div className="footer-cert-badge">
                                        <svg viewBox="0 0 50 50" width="38" height="38" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="1.4">
                                            <circle cx="25" cy="25" r="22" />
                                            <text x="25" y="20" textAnchor="middle" fill="rgba(255,255,255,.85)" fontSize="8" fontWeight="bold" fontFamily="sans-serif" stroke="none">USDA</text>
                                            <text x="25" y="32" textAnchor="middle" fill="rgba(255,255,255,.85)" fontSize="7" fontFamily="sans-serif" stroke="none">INSPECTED</text>
                                        </svg>
                                        <div className="footer-cert-label">USDA INSPECTED</div>
                                    </div>
                                </div>
                            </div>

                            {/* Col 2: Quick Links */}
                            <div className="footer-col">
                                <div className="footer-col-title">QUICK LINKS</div>
                                <div className="footer-links-two-col">
                                    <ul>
                                        {["Home", "Products", "About Us", "Certifications", "FAQs", "Quality"].map(item => (
                                            <li key={item}><a href="#">{item}</a></li>
                                        ))}
                                    </ul>
                                    <ul>
                                        {["Careers", "News", "Contact"].map(item => (
                                            <li key={item}><a href="#">{item}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Col 3: Our Products */}
                            <div className="footer-col">
                                <div className="footer-col-title">OUR PRODUCTS</div>
                                <ul>
                                    {["Whole Chicken", "Chicken Parts", "Frozen Cuts", "Marinated Chicken"].map(item => (
                                        <li key={item}><a href="#">{item}</a></li>
                                    ))}
                                </ul>
                            </div>

                            {/* Col 4: Contact Info */}
                            <div className="footer-col">
                                <div className="footer-col-title">CONTACT INFO</div>
                                <ul className="footer-contact-list">
                                    <li>
                                        <span className="footer-contact-icon">📞</span>
                                        <a href="tel:+19177467070">+1 (917) 746 7070</a>
                                    </li>
                                    <li>
                                        <span className="footer-contact-icon">✉️</span>
                                        <a href="mailto:tougiman@tougiman.com">tougiman@tougiman.com</a>
                                    </li>
                                    <li>
                                        <span className="footer-contact-icon">📍</span>
                                        <a href="#">26 Broadway, New York, NY 10004, USA</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Col 5: Follow Us */}
                            <div className="footer-col">
                                <div className="footer-col-title">FOLLOW US</div>
                                <div className="social-row" style={{ marginBottom: 24 }}>
                                    {[
                                        { label: "f", icon: "f" },
                                        { label: "ig", icon: "◎" },
                                        { label: "in", icon: "in" },
                                        { label: "yt", icon: "▶" },
                                    ].map(s => (
                                        <div className="social-btn" key={s.label}>{s.icon}</div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Footer bottom bar */}
                <div className="footer-bottom">
                    <div className="inner footer-bottom-inner">
                        <p>© 2024 Tougiman Halal Chicken. All rights reserved.</p>
                        <div className="footer-bottom-links">
                            <a href="#">Privacy Policy</a>
                            <span>|</span>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
}