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
export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="tm-page">
      <Navbar activePage={page} onNavigate={setPage} />
      {page === "home" && <HomePage />}
      {page === "about" && <AboutPage />}
      {page === "products" && <ProductPage />}
      {page === "process" && <OurProcessPage />}
      {page === "quality" && <QualityPage />}
      {page === "careers" && <CareersPage />}

      {page === "news" && <NewsPage />}
      {page === "contact" && <ContactPage />}
      <Footer />
    </div>
  );
}