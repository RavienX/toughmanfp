import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="tm-page">
      <Navbar activePage={page} onNavigate={setPage} />
      {page === "home" && <HomePage />}
      {page === "about" && <AboutPage />}
      <Footer />
    </div>
  );
}