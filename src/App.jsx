import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import OurProcessPage from "./pages/OurProcessPage";
import QualityPage from "./pages/QualityPage";
import CareersPage from "./pages/CareerPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import AdminPanel from "./pages/AdminPanel";

const WA_NUMBER = "639459829389";

/* ── Global layout reset injected at app root level ── */
const GLOBAL_RESET = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 100%;
    max-width: 100%;
    margin: 0 !important;
    padding: 0 !important;
    overflow-x: hidden;
  }
  #root {
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  .tm-page {
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

const waStyle = {
  position: "fixed",
  bottom: "28px",
  right: "28px",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  gap: "10px",
  background: "#25D366",
  color: "#fff",
  border: "none",
  borderRadius: "50px",
  padding: "13px 20px 13px 16px",
  cursor: "pointer",
  boxShadow: "0 4px 20px rgba(37,211,102,.45)",
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 700,
  fontSize: "13px",
  letterSpacing: ".3px",
  textDecoration: "none",
  whiteSpace: "nowrap",
};

/* ── Check if the current URL path is /admin ── */
const isAdminRoute = window.location.pathname === "/admin";

export default function App() {
  const [page, setPage] = useState("home");

  /* ── Render admin panel for /admin path ── */
  if (isAdminRoute) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: GLOBAL_RESET }} />
        <AdminPanel />
      </>
    );
  }

  return (
    <div className="tm-page">
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_RESET }} />
      <Navbar activePage={page} onNavigate={setPage} />
      {page === "home" && <HomePage onNavigate={setPage} />}
      {page === "about" && <AboutPage onNavigate={setPage} />}
      {page === "products" && <ProductPage onNavigate={setPage} />}
      {page === "process" && <OurProcessPage onNavigate={setPage} />}
      {page === "quality" && <QualityPage onNavigate={setPage} />}
      {page === "careers" && <CareersPage onNavigate={setPage} />}
      {page === "news" && <NewsPage onNavigate={setPage} />}
      {page === "contact" && <ContactPage onNavigate={setPage} />}
      <Footer onNavigate={setPage} />

      {/* ── WhatsApp Floating Button (all pages) ── */}
      <a
        href={`https://wa.me/${WA_NUMBER}`}
        style={waStyle}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={e => {
          e.currentTarget.style.background = "#1ebe5d";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "#25D366";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span style={{ display: "inline" }}>WhatsApp Us</span>
      </a>
    </div>
  );
}