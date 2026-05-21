import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const CATEGORIES = ["ALL", "COMPANY NEWS", "INDUSTRY", "CERTIFICATIONS", "COMMUNITY", "PRODUCT UPDATES"];

const NEWS_ARTICLES = [
    {
        id: 1,
        category: "CERTIFICATIONS",
        tag: "Certification",
        tagColor: "#86efac",
        tagTextColor: "#14532d",
        date: "May 15, 2026",
        readTime: "3 min read",
        featured: true,
        title: "Toughman Renews ISO 22000:2018 Certification Following Rigorous Third-Party Audit",
        excerpt: "After a comprehensive two-day assessment by Bureau Veritas Philippines, Toughman Processing has successfully renewed its ISO 22000:2018 Food Safety Management System certification — maintaining a zero major non-conformity record for the third consecutive audit cycle.",
        body: `Toughman Processing is proud to announce the successful renewal of our ISO 22000:2018 Food Safety Management System (FSMS) certification, following a thorough two-day surveillance audit conducted by Bureau Veritas Philippines in April 2026.\n\nThe audit covered all aspects of our food safety management system — including HACCP plan reviews, traceability testing, personnel training records, calibration logs, and supplier qualification procedures. For the third consecutive audit cycle, Toughman received zero major non-conformities.\n\n"This renewal reflects the daily commitment of every member of our team," said our Quality Assurance Manager. "ISO 22000 is not just a certificate on a wall — it is a framework that shapes how we make every decision on the production floor."\n\nThe renewed certification is valid through April 2028 and is available for review by clients and regulatory bodies upon request.`,
        author: "Toughman Quality Team",
        authorInitial: "QT",
        image: null,
    },
    {
        id: 2,
        category: "COMPANY NEWS",
        tag: "Company",
        tagColor: "var(--orange)",
        tagTextColor: "#fff",
        date: "April 28, 2026",
        readTime: "4 min read",
        featured: true,
        title: "Toughman Expands Cold Storage Capacity by 40% to Meet Growing Demand",
        excerpt: "Toughman Processing has completed Phase 1 of its facility expansion project, adding 400 square metres of refrigerated cold storage space and installing two new IQF blast freezer tunnels — increasing total frozen storage capacity by 40%.",
        body: `Toughman Processing has completed Phase 1 of a major facility expansion at our Quezon City processing plant, adding 400 square metres of refrigerated cold storage and commissioning two new Individual Quick Freezing (IQF) blast tunnels.\n\nThe expansion, which began in Q4 2025, increases our total frozen storage capacity by approximately 40% and our daily IQF throughput by 2.5 tonnes — enabling us to better serve our growing base of supermarket, foodservice, and institutional clients.\n\nPhase 2, scheduled for Q3 2026, will add a dedicated retail packaging line with automated weight-checking and labelling, further reducing lead times for retail-format orders.\n\n"We've been at near-full capacity for most of 2025," said our Operations Director. "This expansion positions us to grow our client base responsibly without ever compromising our cold chain or quality standards."`,
        author: "Toughman Operations",
        authorInitial: "OP",
        image: null,
    },
    {
        id: 3,
        category: "INDUSTRY",
        tag: "Industry",
        tagColor: "#7dd3fc",
        tagTextColor: "#0c4a6e",
        date: "April 10, 2026",
        readTime: "5 min read",
        featured: false,
        title: "Philippine Poultry Industry Posts 8.2% Growth in Q1 2026 — What It Means for Processors",
        excerpt: "The Philippine Statistics Authority's Q1 2026 livestock and poultry report shows an 8.2% year-on-year increase in commercial broiler production, driven by recovering consumer demand and expanded backyard flock recovery.",
        body: `The Philippine Statistics Authority (PSA) released its Q1 2026 livestock and poultry industry report, showing commercial broiler production grew 8.2% year-on-year — the strongest first-quarter growth since 2019.\n\nKey drivers cited include recovering post-pandemic consumer demand, improved feed conversion ratios from newly adopted feeds, and the gradual recovery of backyard flocks following avian influenza controls in late 2024.\n\nFor downstream processors like Toughman, the growth in supply creates both opportunities and challenges. While improved raw material availability supports volume growth, processors must continue investing in cold chain and quality infrastructure to ensure that increased throughput does not dilute product standards.\n\nToughman's capacity expansion (see related article) is directly aligned with absorbing this supply growth while maintaining our HACCP and ISO 22000 commitments.`,
        author: "Editorial Team",
        authorInitial: "ET",
        image: null,
    },
    {
        id: 4,
        category: "COMMUNITY",
        tag: "Community",
        tagColor: "#fde68a",
        tagTextColor: "#78350f",
        date: "March 22, 2026",
        readTime: "3 min read",
        featured: false,
        title: "Toughman Sponsors Barangay Nutrition Month with Free Protein Donation to 3 Communities",
        excerpt: "In celebration of National Nutrition Month, Toughman Processing donated over 500 kilograms of frozen chicken to feeding programs in three Quezon City barangays, supporting the nutritional needs of over 400 families.",
        body: `As part of our commitment to the communities where we operate, Toughman Processing partnered with the City Nutrition Office of Quezon City to donate over 500 kilograms of frozen chicken products to feeding programs in Barangay Holy Spirit, Barangay Batasan Hills, and Barangay Commonwealth.\n\nThe donation supported the nutritional needs of more than 400 families, with the chicken distributed through the barangays' existing Supplementary Feeding Program (SFP) infrastructure.\n\n"Food processing companies like Toughman have a responsibility to use our position in the supply chain to give back," said our Managing Director. "Access to quality protein should not be a luxury."\n\nThis is the second consecutive year Toughman has participated in Nutrition Month community activities. We plan to expand the program to five barangays in 2027.`,
        author: "Toughman CSR Team",
        authorInitial: "CS",
        image: null,
    },
    {
        id: 5,
        category: "PRODUCT UPDATES",
        tag: "Product",
        tagColor: "#c4b5fd",
        tagTextColor: "#4c1d95",
        date: "March 8, 2026",
        readTime: "2 min read",
        featured: false,
        title: "New: Individually Portioned Breast Fillet Now Available in 200g Retail Packs",
        excerpt: "Responding to growing demand from health-conscious consumers and meal-prep businesses, Toughman is launching a 200g individually vacuum-sealed boneless skinless breast fillet — available for retail and wholesale orders from March 2026.",
        body: `Toughman Processing is excited to announce the launch of our new 200g Individually Portioned Boneless Skinless Breast Fillet, now available for retail and wholesale orders.\n\nThe new SKU addresses growing demand from health-conscious consumers, meal-prep services, and gym nutrition programs for a precise, easy-to-use protein portion that eliminates prep time.\n\nEach 200g fillet is individually vacuum-sealed in food-grade multilayer film, IQF-frozen to −18°C, and labelled with full nutritional information, batch traceability code, and a best-before date.\n\nAvailable in both retail single-pack and bulk 5kg foodservice formats. Minimum wholesale order quantities apply. Contact our sales team for pricing and availability.`,
        author: "Toughman Product Team",
        authorInitial: "PT",
        image: null,
    },
    {
        id: 6,
        category: "CERTIFICATIONS",
        tag: "Certification",
        tagColor: "#86efac",
        tagTextColor: "#14532d",
        date: "February 14, 2026",
        readTime: "2 min read",
        featured: false,
        title: "Annual Halal Certification Renewed by Islamic Da'wah Council of the Philippines",
        excerpt: "Toughman Processing has successfully completed its annual Halal certification renewal with the Islamic Da'wah Council of the Philippines (IDCP), confirming all products continue to meet full Halal compliance requirements.",
        body: `Toughman Processing has renewed its Halal certification for the 2026–2027 period following a successful inspection by the Islamic Da'wah Council of the Philippines (IDCP).\n\nThe renewal inspection covered slaughter procedures, personnel training, sanitation protocols, and the complete segregation of Halal-certified products throughout processing, storage, and delivery.\n\nAll Toughman products are produced under Halal protocols. The certification is valid for retail, foodservice, and institutional supply to Muslim consumers and Halal-conscious institutions across the Philippines.\n\nA copy of the current Halal certificate is available upon request from our Quality Assurance office.`,
        author: "Toughman Quality Team",
        authorInitial: "QT",
        image: null,
    },
    {
        id: 7,
        category: "COMPANY NEWS",
        tag: "Company",
        tagColor: "var(--orange)",
        tagTextColor: "#fff",
        date: "January 20, 2026",
        readTime: "3 min read",
        featured: false,
        title: "Toughman Onboards 3 New Supermarket Chain Partners for Q1 2026 Distribution",
        excerpt: "Three major supermarket chains across Luzon have signed supply agreements with Toughman Processing, adding over 120 new retail distribution points for our frozen chicken product lines beginning January 2026.",
        body: `Toughman Processing has signed supply agreements with three major supermarket chains operating across Luzon, significantly expanding our retail distribution footprint beginning January 2026.\n\nThe new partnerships add over 120 retail distribution points to our network, covering key consumer markets in Metro Manila, Central Luzon, and CALABARZON. Products available at partner stores will include our Whole Chicken, Chicken Cuts, and the newly launched 200g Breast Fillet retail packs.\n\n"Retail distribution has been an area of strategic focus for us over the past 18 months," said our Sales Director. "These partnerships are validation that our quality and supply consistency meets the standards of major retail buyers."\n\nAll new partner stores will be serviced through Toughman's refrigerated cold chain delivery fleet, with weekly delivery frequency and temperature-documented delivery manifests.`,
        author: "Toughman Sales Team",
        authorInitial: "ST",
        image: null,
    },
    {
        id: 8,
        category: "INDUSTRY",
        tag: "Industry",
        tagColor: "#7dd3fc",
        tagTextColor: "#0c4a6e",
        date: "January 5, 2026",
        readTime: "4 min read",
        featured: false,
        title: "NMIS Issues Updated Cold Chain Guidelines for Poultry Processors — Key Changes Explained",
        excerpt: "The National Meat Inspection Service released updated cold chain guidelines in December 2025 affecting licensed poultry processors. We break down the key changes and how Toughman is already in full compliance.",
        body: `The National Meat Inspection Service (NMIS) issued updated cold chain handling guidelines for licensed poultry processors in December 2025, with compliance required from February 2026.\n\nKey changes include: mandatory GPS tracking on all refrigerated delivery vehicles, revised maximum door-open time thresholds during loading and unloading, and upgraded documentation requirements for temperature records on inbound livestock transport.\n\nToughman Processing is already fully compliant with all updated requirements. Our delivery fleet has operated with GPS and real-time temperature data loggers since 2023, and our loading dock protocols already meet the revised door-open standards.\n\nWe welcome these updates as they raise the baseline for the entire industry and provide clearer benchmarks for clients when evaluating their processor partners' cold chain capabilities.`,
        author: "Editorial Team",
        authorInitial: "ET",
        image: null,
    },
    {
        id: 9,
        category: "COMMUNITY",
        tag: "Community",
        tagColor: "#fde68a",
        tagTextColor: "#78350f",
        date: "December 12, 2025",
        readTime: "2 min read",
        featured: false,
        title: "Toughman Team Participates in Quezon City Year-End Community Clean-Up Drive",
        excerpt: "Over 40 Toughman employees volunteered for the Quezon City Year-End Clean-Up Drive, joining barangay officials and local residents to clean and beautify areas surrounding our processing facility.",
        body: `More than 40 Toughman Processing employees spent their Saturday morning participating in the Quezon City Year-End Community Clean-Up Drive, joining barangay officials, local residents, and neighbouring businesses to clean and beautify the community surrounding our processing facility.\n\nThe initiative, coordinated by the Quezon City Environment Protection and Waste Management Department, focused on waterway clean-up, proper waste segregation education, and the planting of ornamental plants along key roadways.\n\n"We are part of this community, and we take that responsibility seriously," said our HR Manager who organised Toughman's participation. "It is important for our team to give back beyond our immediate business operations."\n\nToughman has participated in the city's annual clean-up drive for four consecutive years.`,
        author: "Toughman HR Team",
        authorInitial: "HR",
        image: null,
    },
];

const CATEGORY_COLORS = {
    "COMPANY NEWS": { bg: "rgba(244,123,32,.12)", text: "var(--orange)", border: "rgba(244,123,32,.3)" },
    "INDUSTRY": { bg: "rgba(125,211,252,.12)", text: "#0c4a6e", border: "rgba(125,211,252,.4)" },
    "CERTIFICATIONS": { bg: "rgba(134,239,172,.12)", text: "#14532d", border: "rgba(134,239,172,.4)" },
    "COMMUNITY": { bg: "rgba(253,230,138,.12)", text: "#78350f", border: "rgba(253,230,138,.4)" },
    "PRODUCT UPDATES": { bg: "rgba(196,181,253,.12)", text: "#4c1d95", border: "rgba(196,181,253,.4)" },
};

// ─── CSS ─────────────────────────────────────────────────────────────────────

const NEWS_CSS = `
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

.np-inner { width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 40px; box-sizing: border-box; }

/* ════ HERO ════ */
.np-hero { background: var(--navy); padding: 72px 0 64px; position: relative; overflow: hidden; width: 100%; }
.np-hero::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 60% 80% at 85% 50%, rgba(244,123,32,.08) 0%, transparent 65%),
    repeating-linear-gradient(-45deg, transparent, transparent 38px, rgba(255,255,255,.016) 38px, rgba(255,255,255,.016) 39px);
  pointer-events: none;
}
.np-hero .np-inner { position: relative; z-index: 1; }

.np-breadcrumb {
  display: flex; align-items: center; gap: 8px; margin-bottom: 24px;
  font-family: 'Montserrat', sans-serif; font-size: 11px;
  color: rgba(255,255,255,.4); letter-spacing: 1px; text-transform: uppercase;
}
.np-breadcrumb-btn {
  background: none; border: none; cursor: pointer; padding: 0;
  font-family: 'Montserrat', sans-serif; font-size: 11px;
  color: rgba(255,255,255,.4); letter-spacing: 1px; text-transform: uppercase; transition: color .2s;
}
.np-breadcrumb-btn:hover { color: var(--orange); }
.np-breadcrumb-sep { color: rgba(255,255,255,.2); }
.np-breadcrumb-cur { color: var(--orange); }

.np-hero-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
.np-hero-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 16px;
}
.np-hero-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900;
  font-size: clamp(30px, 4vw, 54px);
  line-height: 1.05; color: #fff; text-transform: uppercase; letter-spacing: -.5px;
}
.np-hero-title .hl { color: var(--orange); }
.np-hero-divider { width: 50px; height: 3.5px; background: var(--orange); border-radius: 2px; margin: 20px 0; }
.np-hero-desc { font-size: 14px; color: rgba(255,255,255,.65); line-height: 1.85; margin-bottom: 32px; }
.np-hero-stats { display: flex; gap: 36px; flex-wrap: wrap; padding-top: 28px; border-top: 1px solid rgba(255,255,255,.1); }
.np-hero-stat-val { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 26px; color: var(--orange); line-height: 1; }
.np-hero-stat-lbl { font-size: 10.5px; color: rgba(255,255,255,.45); text-transform: uppercase; letter-spacing: .8px; margin-top: 4px; }

/* Hero right: latest featured article preview */
.np-hero-featured {
  background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12);
  border-radius: 20px; padding: 28px 26px; cursor: pointer;
  transition: background .2s, border-color .2s;
}
.np-hero-featured:hover { background: rgba(255,255,255,.1); border-color: rgba(244,123,32,.4); }
.np-hero-featured-label {
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10px;
  color: var(--orange); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px; display: block;
}
.np-hero-featured-tag {
  display: inline-block; padding: 4px 12px; border-radius: 5px; margin-bottom: 12px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 9.5px;
  letter-spacing: 1px; text-transform: uppercase;
}
.np-hero-featured-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 17px;
  color: #fff; line-height: 1.35; margin-bottom: 12px; text-transform: uppercase; letter-spacing: .2px;
}
.np-hero-featured-excerpt { font-size: 12.5px; color: rgba(255,255,255,.6); line-height: 1.75; margin-bottom: 16px; }
.np-hero-featured-meta {
  display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
  font-family: 'Montserrat', sans-serif; font-size: 10.5px; color: rgba(255,255,255,.4);
  padding-top: 14px; border-top: 1px solid rgba(255,255,255,.1);
}
.np-hero-featured-meta-dot { width: 3px; height: 3px; border-radius: 50%; background: rgba(255,255,255,.3); }
.np-read-more {
  color: var(--orange); font-weight: 700; font-size: 11px; letter-spacing: .8px;
  text-transform: uppercase; margin-left: auto;
}

/* ════ FILTER + SEARCH BAR ════ */
.np-filter-bar {
  background: #fff; border-bottom: 1px solid #eaeaea;
  position: sticky; top: 90px; z-index: 100;
  box-shadow: 0 2px 12px rgba(0,0,0,.06); width: 100%;
}
.np-filter-bar .np-inner {
  display: flex; align-items: center; justify-content: space-between;
  gap: 16px; height: 64px; padding-top: 0; padding-bottom: 0;
}
.np-filter-tabs { display: flex; gap: 0; overflow-x: auto; flex-shrink: 1; }
.np-filter-tabs::-webkit-scrollbar { display: none; }
.np-filter-tab {
  padding: 0 16px; height: 64px; line-height: 64px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--gray); text-transform: uppercase; letter-spacing: .8px;
  border: none; background: none; cursor: pointer;
  border-bottom: 3px solid transparent; transition: color .2s, border-color .2s;
  white-space: nowrap; flex-shrink: 0;
}
.np-filter-tab.active, .np-filter-tab:hover { color: var(--navy); border-bottom-color: var(--orange); }

.np-search-wrap { display: flex; align-items: center; gap: 0; flex-shrink: 0; }
.np-search-input {
  border: 1.5px solid #dde2ec; border-right: none; border-radius: 7px 0 0 7px;
  padding: 9px 14px; font-family: 'Open Sans', sans-serif; font-size: 13px; color: var(--navy);
  outline: none; width: 200px; transition: border-color .2s;
  background: #fff;
}
.np-search-input:focus { border-color: var(--orange); }
.np-search-btn {
  background: var(--navy); border: none; border-radius: 0 7px 7px 0;
  padding: 9px 14px; cursor: pointer; color: #fff; font-size: 14px;
  transition: background .2s;
}
.np-search-btn:hover { background: var(--orange); }

/* ════ MAIN CONTENT ════ */
.np-content { background: var(--gray-light); padding: 64px 0 80px; width: 100%; }
.np-content .np-inner { display: grid; grid-template-columns: 1fr 320px; gap: 40px; align-items: start; }

/* ─ Article grid ─ */
.np-articles-header {
  display: flex; align-items: center; justify-content: space-between; margin-bottom: 28px; flex-wrap: wrap; gap: 8px;
}
.np-articles-count { font-family: 'Montserrat', sans-serif; font-size: 12.5px; color: var(--gray); }
.np-articles-count b { color: var(--navy); }
.np-sort-select {
  border: 1.5px solid #dde2ec; border-radius: 7px; padding: 7px 12px;
  font-family: 'Montserrat', sans-serif; font-size: 11.5px; color: var(--navy);
  background: #fff; outline: none; cursor: pointer;
}

.np-articles-list { display: flex; flex-direction: column; gap: 20px; }

/* Article card */
.np-article-card {
  background: #fff; border-radius: 16px; overflow: hidden;
  border: 1px solid #eaeaea; box-shadow: 0 4px 16px rgba(0,0,0,.04);
  transition: box-shadow .25s, border-color .25s, transform .25s;
  cursor: pointer;
}
.np-article-card:hover { box-shadow: 0 10px 36px rgba(13,27,62,.1); border-color: rgba(244,123,32,.25); transform: translateY(-2px); }
.np-article-card.featured { border-color: rgba(244,123,32,.3); border-left: 4px solid var(--orange); }
.np-article-card-inner { padding: 24px 24px 20px; }
.np-article-top { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; flex-wrap: wrap; }
.np-article-tag {
  padding: 3px 12px; border-radius: 5px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 9.5px;
  letter-spacing: 1px; text-transform: uppercase;
}
.np-article-featured-badge {
  padding: 3px 10px; border-radius: 5px;
  background: rgba(244,123,32,.12); color: var(--orange); border: 1px solid rgba(244,123,32,.3);
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 9px;
  letter-spacing: .8px; text-transform: uppercase;
}
.np-article-date { font-family: 'Montserrat', sans-serif; font-size: 10.5px; color: var(--gray); margin-left: auto; }
.np-article-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 16px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .2px;
  line-height: 1.35; margin-bottom: 10px;
}
.np-article-excerpt { font-size: 13px; color: #4a5568; line-height: 1.8; margin-bottom: 16px; }
.np-article-footer {
  display: flex; align-items: center; gap: 16px; padding-top: 14px;
  border-top: 1px solid #f0f2f6; flex-wrap: wrap;
}
.np-article-author { display: flex; align-items: center; gap: 8px; }
.np-article-avatar {
  width: 28px; height: 28px; border-radius: 50%; background: var(--navy);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 9px; color: var(--orange);
  border: 1.5px solid var(--orange); flex-shrink: 0;
}
.np-article-author-name { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px; color: var(--navy); }
.np-article-read-time { font-size: 11px; color: var(--gray); margin-left: auto; }
.np-article-read-btn {
  background: none; border: none; cursor: pointer; padding: 0;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: .8px; text-transform: uppercase;
  transition: color .2s; display: flex; align-items: center; gap: 5px;
}
.np-article-read-btn:hover { color: var(--orange-dark); }

/* No results */
.np-no-results {
  text-align: center; padding: 60px 20px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 16px;
  color: var(--gray); text-transform: uppercase; letter-spacing: .5px;
}
.np-no-results-sub { font-size: 13px; font-weight: 400; margin-top: 8px; text-transform: none; letter-spacing: 0; }

/* ─ Sidebar ─ */
.np-sidebar { display: flex; flex-direction: column; gap: 24px; }
.np-sidebar-card {
  background: #fff; border-radius: 16px; padding: 24px 20px;
  border: 1px solid #eaeaea; box-shadow: 0 4px 12px rgba(0,0,0,.04);
}
.np-sidebar-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 12px;
  color: var(--navy); text-transform: uppercase; letter-spacing: 1.5px;
  margin-bottom: 16px; padding-bottom: 12px; border-bottom: 2px solid var(--orange);
}
.np-sidebar-categories { display: flex; flex-direction: column; gap: 8px; }
.np-sidebar-cat {
  display: flex; align-items: center; justify-content: space-between;
  padding: 9px 12px; border-radius: 8px; cursor: pointer;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .5px;
  background: var(--gray-light); border: 1px solid transparent;
  transition: all .2s;
}
.np-sidebar-cat:hover, .np-sidebar-cat.active { background: var(--navy); color: #fff; }
.np-sidebar-cat-count {
  background: rgba(255,255,255,.15); color: rgba(255,255,255,.8);
  padding: 1px 8px; border-radius: 10px; font-size: 10px;
}
.np-sidebar-cat:not(:hover):not(.active) .np-sidebar-cat-count { background: #eaeaea; color: var(--gray); }

.np-sidebar-recents { display: flex; flex-direction: column; gap: 14px; }
.np-sidebar-recent-item {
  display: flex; flex-direction: column; gap: 5px; cursor: pointer;
  padding-bottom: 14px; border-bottom: 1px solid #f0f2f6; transition: opacity .2s;
}
.np-sidebar-recent-item:last-child { border-bottom: none; padding-bottom: 0; }
.np-sidebar-recent-item:hover { opacity: .75; }
.np-sidebar-recent-tag {
  display: inline-block; padding: 2px 8px; border-radius: 4px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 8.5px;
  letter-spacing: .8px; text-transform: uppercase; width: fit-content;
}
.np-sidebar-recent-title {
  font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 12px;
  color: var(--navy); line-height: 1.45;
}
.np-sidebar-recent-date { font-size: 10.5px; color: var(--gray); }

.np-sidebar-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.np-sidebar-tag {
  padding: 5px 12px; border-radius: 20px; cursor: pointer;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10px;
  color: var(--navy); text-transform: uppercase; letter-spacing: .5px;
  background: var(--gray-light); border: 1.5px solid #dde2ec;
  transition: all .2s;
}
.np-sidebar-tag:hover { background: var(--navy); color: #fff; border-color: var(--navy); }

.np-sidebar-newsletter { display: flex; flex-direction: column; gap: 12px; }
.np-sidebar-newsletter-desc { font-size: 12.5px; color: var(--gray); line-height: 1.7; }
.np-newsletter-input {
  border: 1.5px solid #dde2ec; border-radius: 7px; padding: 10px 12px;
  font-family: 'Open Sans', sans-serif; font-size: 13px; color: var(--navy);
  outline: none; width: 100%; transition: border-color .2s;
}
.np-newsletter-input:focus { border-color: var(--orange); }
.btn-np-newsletter {
  background: var(--orange); color: #fff; border: none; border-radius: 7px;
  padding: 11px 0; width: 100%;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11.5px;
  text-transform: uppercase; letter-spacing: .8px; cursor: pointer; transition: background .2s;
}
.btn-np-newsletter:hover { background: var(--orange-dark); }

/* ════ ARTICLE MODAL ════ */
.np-modal-backdrop {
  position: fixed; inset: 0; background: rgba(5,13,31,.9);
  backdrop-filter: blur(6px); z-index: 999;
  display: flex; align-items: flex-start; justify-content: center;
  padding: 24px; overflow-y: auto;
}
.np-modal {
  background: #fff; border-radius: 20px;
  max-width: 760px; width: 100%; position: relative;
  box-shadow: 0 24px 80px rgba(0,0,0,.5);
  animation: npModalIn .25s ease; margin: auto;
}
@keyframes npModalIn {
  from { opacity: 0; transform: scale(.95) translateY(16px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
.np-modal-header { background: var(--navy); padding: 32px 36px 28px; border-radius: 20px 20px 0 0; position: relative; }
.np-modal-close {
  position: absolute; top: 16px; right: 16px; width: 34px; height: 34px; border-radius: 50%;
  background: rgba(255,255,255,.1); border: none; cursor: pointer;
  font-size: 16px; color: rgba(255,255,255,.7);
  display: flex; align-items: center; justify-content: center; transition: background .2s;
}
.np-modal-close:hover { background: rgba(255,255,255,.2); }
.np-modal-tag {
  display: inline-block; padding: 4px 12px; border-radius: 5px; margin-bottom: 14px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 9.5px;
  letter-spacing: 1px; text-transform: uppercase;
}
.np-modal-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(16px, 2.5vw, 22px);
  color: #fff; text-transform: uppercase; letter-spacing: .3px; line-height: 1.3; margin-bottom: 14px;
}
.np-modal-meta {
  display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
  font-family: 'Montserrat', sans-serif; font-size: 11px; color: rgba(255,255,255,.5);
}
.np-modal-meta-dot { width: 3px; height: 3px; border-radius: 50%; background: rgba(255,255,255,.3); }
.np-modal-body { padding: 32px 36px 36px; }
.np-modal-excerpt {
  font-size: 14.5px; color: #374151; line-height: 1.85; margin-bottom: 24px;
  font-weight: 600; border-left: 3px solid var(--orange); padding-left: 16px;
}
.np-modal-divider { height: 1px; background: #f0f2f6; margin: 20px 0; }
.np-modal-body-text { font-size: 13.5px; color: #4a5568; line-height: 1.9; white-space: pre-line; }
.np-modal-footer {
  padding: 20px 36px 28px; border-top: 1px solid #f0f2f6;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;
}
.np-modal-author { display: flex; align-items: center; gap: 10px; }
.np-modal-avatar {
  width: 36px; height: 36px; border-radius: 50%; background: var(--navy);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 11px; color: var(--orange);
  border: 2px solid var(--orange);
}
.np-modal-author-name { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12px; color: var(--navy); }
.np-modal-author-role { font-size: 11px; color: var(--gray); }
.np-modal-share { display: flex; align-items: center; gap: 8px; }
.np-modal-share-label { font-family: 'Montserrat', sans-serif; font-size: 10.5px; font-weight: 700; color: var(--gray); text-transform: uppercase; letter-spacing: .8px; }
.np-modal-share-btn {
  width: 32px; height: 32px; border-radius: 50%; border: 1.5px solid #dde2ec;
  background: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center;
  font-size: 14px; transition: all .2s;
}
.np-modal-share-btn:hover { background: var(--navy); border-color: var(--navy); }

/* ════ CTA ════ */
.np-cta {
  background: linear-gradient(135deg, var(--navy-dark) 0%, var(--blue) 60%, var(--navy) 100%);
  padding: 72px 0; width: 100%; position: relative; overflow: hidden;
}
.np-cta::before {
  content: ''; position: absolute; inset: 0;
  background: repeating-linear-gradient(-45deg, transparent, transparent 38px, rgba(255,255,255,.012) 38px, rgba(255,255,255,.012) 39px);
  pointer-events: none;
}
.np-cta .np-inner {
  position: relative; z-index: 1;
  display: flex; align-items: center; justify-content: space-between; gap: 40px; flex-wrap: wrap;
}
.np-cta-label {
  display: block; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--orange); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px;
}
.np-cta-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: clamp(20px, 2.5vw, 30px);
  color: #fff; text-transform: uppercase; line-height: 1.15; margin-bottom: 10px;
}
.np-cta-sub { font-size: 14px; color: rgba(255,255,255,.6); line-height: 1.7; max-width: 420px; }
.np-cta-btns { display: flex; gap: 14px; flex-wrap: wrap; flex-shrink: 0; }
.btn-np-cta-primary {
  background: var(--orange); color: #fff; border: none; padding: 15px 32px; border-radius: 7px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12.5px;
  cursor: pointer; letter-spacing: .8px; text-transform: uppercase;
  transition: background .2s; white-space: nowrap; display: inline-flex; align-items: center; gap: 8px;
}
.btn-np-cta-primary:hover { background: var(--orange-dark); }
.btn-np-cta-outline {
  background: transparent; color: #fff; border: 2px solid rgba(255,255,255,.45);
  padding: 15px 32px; border-radius: 7px;
  font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 12.5px;
  cursor: pointer; letter-spacing: .8px; text-transform: uppercase; transition: all .2s; white-space: nowrap;
}
.btn-np-cta-outline:hover { border-color: var(--orange); color: var(--orange); }

/* ════ RESPONSIVE ════ */
@media (max-width: 1100px) {
  .np-inner { padding: 0 24px; }
  .np-content .np-inner { grid-template-columns: 1fr 280px; gap: 28px; }
}
@media (max-width: 900px) {
  .np-hero-layout { grid-template-columns: 1fr; gap: 36px; }
  .np-content .np-inner { grid-template-columns: 1fr; }
  .np-sidebar { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
}
@media (max-width: 640px) {
  .np-hero { padding: 48px 0 40px; }
  .np-filter-bar .np-inner { height: auto; flex-direction: column; align-items: flex-start; gap: 0; padding: 0 16px; }
  .np-filter-tabs { width: 100%; border-bottom: 1px solid #eaeaea; }
  .np-search-wrap { width: 100%; padding: 10px 0; }
  .np-search-input { flex: 1; width: auto; }
  .np-content { padding: 40px 0 60px; }
  .np-sidebar { grid-template-columns: 1fr; }
  .np-cta .np-inner { flex-direction: column; align-items: flex-start; }
  .np-cta-btns { width: 100%; }
  .np-modal-header { padding: 24px 20px 20px; }
  .np-modal-body { padding: 22px 20px 24px; }
  .np-modal-footer { padding: 16px 20px 20px; }
}
@media (max-width: 420px) {
  .np-inner { padding: 0 16px; }
  .np-hero-stats { gap: 16px; }
  .np-article-title { font-size: 14px; }
  .btn-np-cta-primary, .btn-np-cta-outline { width: 100%; justify-content: center; }
}
`;

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function NewsPage({ onNavigate = () => { } }) {
    const [activeFilter, setActiveFilter] = useState("ALL");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [openArticle, setOpenArticle] = useState(null);
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterDone, setNewsletterDone] = useState(false);

    const filtered = NEWS_ARTICLES.filter(a => {
        const matchesCat = activeFilter === "ALL" || a.category === activeFilter;
        const matchesSearch = !searchQuery ||
            a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            a.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

    const handleSearch = () => setSearchQuery(searchInput);
    const handleSearchKey = e => { if (e.key === "Enter") handleSearch(); };

    const catCounts = CATEGORIES.reduce((acc, cat) => {
        acc[cat] = cat === "ALL" ? NEWS_ARTICLES.length : NEWS_ARTICLES.filter(a => a.category === cat).length;
        return acc;
    }, {});

    const featuredArticle = NEWS_ARTICLES.find(a => a.featured);

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: NEWS_CSS }} />

            {/* ════════════ HERO ════════════ */}
            <section className="np-hero">
                <div className="np-inner">
                    <div className="np-breadcrumb">
                        <button className="np-breadcrumb-btn" onClick={() => onNavigate("home")}>Home</button>
                        <span className="np-breadcrumb-sep">›</span>
                        <span className="np-breadcrumb-cur">News</span>
                    </div>
                    <div className="np-hero-layout">
                        <div>
                            <span className="np-hero-label">Latest News</span>
                            <h1 className="np-hero-title">
                                News &<br /><span className="hl">Updates</span>
                            </h1>
                            <div className="np-hero-divider" />
                            <p className="np-hero-desc">
                                Stay up to date with the latest developments at Toughman Processing —
                                from certifications and facility expansions to industry news and
                                community initiatives.
                            </p>
                            <div className="np-hero-stats">
                                {[
                                    { val: NEWS_ARTICLES.length.toString(), lbl: "Articles" },
                                    { val: "5", lbl: "Categories" },
                                    { val: "2026", lbl: "Latest Year" },
                                    { val: "Monthly", lbl: "Update Frequency" },
                                ].map(s => (
                                    <div key={s.lbl}>
                                        <div className="np-hero-stat-val">{s.val}</div>
                                        <div className="np-hero-stat-lbl">{s.lbl}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Latest featured article preview */}
                        {featuredArticle && (
                            <div className="np-hero-featured" onClick={() => setOpenArticle(featuredArticle)}>
                                <span className="np-hero-featured-label">📰 Latest Featured Story</span>
                                <div>
                                    <span
                                        className="np-hero-featured-tag"
                                        style={{ background: featuredArticle.tagColor, color: featuredArticle.tagTextColor }}
                                    >{featuredArticle.tag}</span>
                                </div>
                                <div className="np-hero-featured-title">{featuredArticle.title}</div>
                                <div className="np-hero-featured-excerpt">
                                    {featuredArticle.excerpt.substring(0, 160)}...
                                </div>
                                <div className="np-hero-featured-meta">
                                    <span>{featuredArticle.date}</span>
                                    <span className="np-hero-featured-meta-dot" />
                                    <span>{featuredArticle.readTime}</span>
                                    <span className="np-read-more">Read More →</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ════════════ FILTER + SEARCH ════════════ */}
            <div className="np-filter-bar">
                <div className="np-inner">
                    <div className="np-filter-tabs">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                className={`np-filter-tab${activeFilter === cat ? " active" : ""}`}
                                onClick={() => { setActiveFilter(cat); setSearchQuery(""); setSearchInput(""); }}
                            >{cat}</button>
                        ))}
                    </div>
                    <div className="np-search-wrap">
                        <input
                            className="np-search-input"
                            placeholder="Search articles..."
                            value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                            onKeyDown={handleSearchKey}
                        />
                        <button className="np-search-btn" onClick={handleSearch}>🔍</button>
                    </div>
                </div>
            </div>

            {/* ════════════ MAIN CONTENT ════════════ */}
            <section className="np-content">
                <div className="np-inner">
                    {/* Articles column */}
                    <div>
                        <div className="np-articles-header">
                            <div className="np-articles-count">
                                Showing <b>{filtered.length}</b> article{filtered.length !== 1 ? "s" : ""}
                                {searchQuery && <> for "<b>{searchQuery}</b>"</>}
                            </div>
                            <select className="np-sort-select">
                                <option>Newest First</option>
                                <option>Oldest First</option>
                            </select>
                        </div>

                        <div className="np-articles-list">
                            {filtered.length === 0 ? (
                                <div className="np-no-results">
                                    No articles found
                                    <div className="np-no-results-sub">Try a different search term or category.</div>
                                </div>
                            ) : filtered.map(article => (
                                <div
                                    className={`np-article-card${article.featured ? " featured" : ""}`}
                                    key={article.id}
                                    onClick={() => setOpenArticle(article)}
                                >
                                    <div className="np-article-card-inner">
                                        <div className="np-article-top">
                                            <span
                                                className="np-article-tag"
                                                style={{ background: article.tagColor, color: article.tagTextColor }}
                                            >{article.tag}</span>
                                            {article.featured && (
                                                <span className="np-article-featured-badge">⭐ Featured</span>
                                            )}
                                            <span className="np-article-date">{article.date}</span>
                                        </div>
                                        <div className="np-article-title">{article.title}</div>
                                        <div className="np-article-excerpt">{article.excerpt}</div>
                                        <div className="np-article-footer">
                                            <div className="np-article-author">
                                                <div className="np-article-avatar">{article.authorInitial}</div>
                                                <div className="np-article-author-name">{article.author}</div>
                                            </div>
                                            <span className="np-article-read-time">🕐 {article.readTime}</span>
                                            <button className="np-article-read-btn">Read More →</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="np-sidebar">
                        {/* Categories */}
                        <div className="np-sidebar-card">
                            <div className="np-sidebar-title">Categories</div>
                            <div className="np-sidebar-categories">
                                {CATEGORIES.map(cat => (
                                    <div
                                        key={cat}
                                        className={`np-sidebar-cat${activeFilter === cat ? " active" : ""}`}
                                        onClick={() => { setActiveFilter(cat); setSearchQuery(""); setSearchInput(""); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                                    >
                                        {cat}
                                        <span className="np-sidebar-cat-count">{catCounts[cat]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Articles */}
                        <div className="np-sidebar-card">
                            <div className="np-sidebar-title">Recent Articles</div>
                            <div className="np-sidebar-recents">
                                {NEWS_ARTICLES.slice(0, 4).map(a => (
                                    <div
                                        key={a.id}
                                        className="np-sidebar-recent-item"
                                        onClick={() => setOpenArticle(a)}
                                    >
                                        <span
                                            className="np-sidebar-recent-tag"
                                            style={{ background: a.tagColor, color: a.tagTextColor }}
                                        >{a.tag}</span>
                                        <div className="np-sidebar-recent-title">{a.title}</div>
                                        <div className="np-sidebar-recent-date">{a.date}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="np-sidebar-card">
                            <div className="np-sidebar-title">Topics</div>
                            <div className="np-sidebar-tags">
                                {["HACCP", "ISO 22000", "Cold Chain", "IQF", "Halal", "NMIS", "Food Safety", "Expansion", "Community", "Products", "Certifications", "Delivery"].map(tag => (
                                    <span
                                        key={tag}
                                        className="np-sidebar-tag"
                                        onClick={() => { setSearchInput(tag); setSearchQuery(tag); setActiveFilter("ALL"); }}
                                    >{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="np-sidebar-card">
                            <div className="np-sidebar-title">Stay Updated</div>
                            <div className="np-sidebar-newsletter">
                                {newsletterDone ? (
                                    <div style={{ textAlign: "center", padding: "12px 0" }}>
                                        <div style={{ fontSize: "28px", marginBottom: "8px" }}>✅</div>
                                        <div style={{ fontFamily: "Montserrat,sans-serif", fontWeight: 700, fontSize: "12px", color: "var(--navy)", textTransform: "uppercase" }}>You're subscribed!</div>
                                        <div style={{ fontSize: "11.5px", color: "var(--gray)", marginTop: "6px" }}>We'll send updates to {newsletterEmail}</div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="np-sidebar-newsletter-desc">
                                            Get Toughman news, product updates, and industry insights delivered to your inbox.
                                        </div>
                                        <input
                                            className="np-newsletter-input"
                                            type="email"
                                            placeholder="your@email.com"
                                            value={newsletterEmail}
                                            onChange={e => setNewsletterEmail(e.target.value)}
                                        />
                                        <button
                                            className="btn-np-newsletter"
                                            onClick={() => { if (newsletterEmail.includes("@")) setNewsletterDone(true); }}
                                        >Subscribe →</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* ════════════ CTA ════════════ */}
            <section className="np-cta">
                <div className="np-inner">
                    <div>
                        <span className="np-cta-label">Work With Us</span>
                        <h2 className="np-cta-title">Interested in Partnering<br />with Toughman?</h2>
                        <p className="np-cta-sub">
                            Whether you're a retailer, foodservice operator, or distributor —
                            we'd love to discuss how Toughman can support your supply chain.
                        </p>
                    </div>
                    <div className="np-cta-btns">
                        <button className="btn-np-cta-primary" onClick={() => onNavigate("contact")}>
                            📞 Contact Us
                        </button>
                        <button className="btn-np-cta-outline" onClick={() => onNavigate("products")}>
                            View Products
                        </button>
                    </div>
                </div>
            </section>

            {/* ════════════ ARTICLE MODAL ════════════ */}
            {openArticle && (
                <div
                    className="np-modal-backdrop"
                    onClick={e => { if (e.target === e.currentTarget) setOpenArticle(null); }}
                >
                    <div className="np-modal">
                        <div className="np-modal-header">
                            <button className="np-modal-close" onClick={() => setOpenArticle(null)}>✕</button>
                            <span
                                className="np-modal-tag"
                                style={{ background: openArticle.tagColor, color: openArticle.tagTextColor }}
                            >{openArticle.tag}</span>
                            <div className="np-modal-title">{openArticle.title}</div>
                            <div className="np-modal-meta">
                                <span>{openArticle.date}</span>
                                <span className="np-modal-meta-dot" />
                                <span>{openArticle.readTime}</span>
                                <span className="np-modal-meta-dot" />
                                <span>{openArticle.author}</span>
                            </div>
                        </div>
                        <div className="np-modal-body">
                            <p className="np-modal-excerpt">{openArticle.excerpt}</p>
                            <div className="np-modal-divider" />
                            <div className="np-modal-body-text">{openArticle.body}</div>
                        </div>
                        <div className="np-modal-footer">
                            <div className="np-modal-author">
                                <div className="np-modal-avatar">{openArticle.authorInitial}</div>
                                <div>
                                    <div className="np-modal-author-name">{openArticle.author}</div>
                                    <div className="np-modal-author-role">Toughman Processing</div>
                                </div>
                            </div>
                            <div className="np-modal-share">
                                <span className="np-modal-share-label">Share</span>
                                {["📘", "🐦", "💼"].map((icon, i) => (
                                    <button key={i} className="np-modal-share-btn">{icon}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}