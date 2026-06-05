import { useState, useEffect, useRef } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBkBS1WDoR3due8FnmPP9U-OUV20vPK_oA",
    authDomain: "toughmanwebsite.firebaseapp.com",
    projectId: "toughmanwebsite",
    storageBucket: "toughmanwebsite.firebasestorage.app",
    messagingSenderId: "846884296513",
    appId: "1:846884296513:web:504eb865e3ea046bd573c0",
    measurementId: "G-VE0SC3EPS3"
};

const DEFAULT_CREDENTIALS = { email: "admin@gmail.com", password: "admin123" };

const DEFAULT_DATA = {
    hero: {
        tagline: "HALAL FROZEN CHICKEN SUPPLIER",
        headline: "Premium Frozen\nChicken Products",
        subheadline: "Supplying the Philippines",
        description:
            "Toughman Processing delivers certified halal frozen chicken to food service operators, wholesalers, and retailers across the Philippines — with full cold-chain compliance from facility to delivery.",
        ctaPrimary: "View Our Products",
        ctaSecondary: "Contact Sales",
    },
    stats: [
        { value: "10+", label: "Years in Operation" },
        { value: "500+", label: "Business Partners" },
        { value: "100%", label: "Halal Certified" },
        { value: "-18°C", label: "Cold Chain Standard" },
    ],
    aboutSection: {
        eyebrow: "Who We Are",
        title: "Trusted Halal Frozen Chicken Processor",
        description:
            "Toughman Processing Corporation is a registered halal frozen chicken processor and distributor based in Zamboanga City, Philippines. We supply supermarkets, wet markets, food service operators, and institutional buyers with premium frozen chicken products.",
        points: [
            "Certified halal poultry, responsibly sourced and processed",
            "Strict temperature control throughout the entire supply chain",
            "Consistent supply capacity for wholesale and B2B accounts",
        ],
    },
    products: [
        {
            id: 1,
            name: "Whole Chicken",
            category: "WHOLE CHICKEN",
            tag: "BEST SELLER",
            weight: "1.2 – 1.8 kg",
            temp: "-18°C",
            desc: "Whole chicken, cleaned and blast-frozen shortly after processing. No added hormones. Works well for roasting, grilling, or traditional Filipino preparations. Available in bulk orders for food service and retail.",
            features: ["Hormone-Free", "HACCP Certified", "IQF Frozen", "Halal Certified"],
            imgUrl: "",
        },
        {
            id: 2,
            name: "Chicken Cuts",
            category: "CUTS",
            tag: "POPULAR",
            weight: "500g – 1 kg",
            temp: "-18°C",
            desc: "Pre-cut portions sized for commercial kitchens and food service operations. Each piece is individually frozen to maintain consistent weight and quality across every batch.",
            features: ["Precision Cut", "IQF Frozen", "Vacuum Sealed", "Halal Certified"],
            imgUrl: "",
        },
        {
            id: 3,
            name: "Chicken Parts",
            category: "PARTS",
            tag: "VERSATILE",
            weight: "300g – 800g",
            temp: "-18°C",
            desc: "Breast, thigh, drumstick, and wings — available separately or as a mixed assortment. Suitable for restaurants, institutional kitchens, and bulk buyers who need specific cuts in volume.",
            features: ["Multiple Cuts", "Consistent Weight", "Cold Chain", "NMIS Approved"],
            imgUrl: "",
        },
        {
            id: 4,
            name: "Individually Packed",
            category: "PACKED",
            tag: "HYGIENIC",
            weight: "150g – 300g",
            temp: "-18°C",
            desc: "Single-portion pieces sealed in food-grade packaging. Designed for retail display, meal delivery, and institutional use where hygiene handling and portion control are required.",
            features: ["Single-Serve", "Tamper-Proof", "Extended Shelf Life", "Retail Ready"],
            imgUrl: "",
        },
        {
            id: 5,
            name: "Breast Fillet",
            category: "PARTS",
            tag: "HIGH PROTEIN",
            weight: "200g – 400g",
            temp: "-18°C",
            desc: "Boneless skinless breast fillet, vacuum-sealed and IQF-frozen. Available in 200g retail packs and bulk 5kg foodservice formats.",
            features: ["Boneless", "Skinless", "Vacuum Sealed", "IQF Frozen"],
            imgUrl: "",
        },
    ],
    news: [
        {
            id: 1,
            category: "CERTIFICATIONS",
            tag: "Certification",
            date: "May 15, 2026",
            featured: true,
            title: "Toughman Renews ISO 22000:2018 Certification Following Rigorous Third-Party Audit",
            excerpt:
                "After a comprehensive two-day assessment by Bureau Veritas Philippines, Toughman Processing has successfully renewed its ISO 22000:2018 Food Safety Management System certification.",
            body: "Toughman Processing is proud to announce the successful renewal of our ISO 22000:2018 Food Safety Management System (FSMS) certification, following a thorough two-day surveillance audit conducted by Bureau Veritas Philippines in April 2026.\n\nThe audit covered all aspects of our food safety management system. For the third consecutive audit cycle, Toughman received zero major non-conformities.",
            author: "Toughman Quality Team",
            imgUrl: "",
        },
        {
            id: 2,
            category: "COMPANY NEWS",
            tag: "Company",
            date: "April 28, 2026",
            featured: true,
            title: "Toughman Expands Cold Storage Capacity by 40% to Meet Growing Demand",
            excerpt:
                "Toughman Processing has completed Phase 1 of its facility expansion project, adding 400 square metres of refrigerated cold storage space and installing two new IQF blast freezer tunnels.",
            body: "Toughman Processing has completed Phase 1 of a major facility expansion at our processing plant, adding 400 square metres of refrigerated cold storage and commissioning two new Individual Quick Freezing (IQF) blast tunnels.\n\nThe expansion increases our total frozen storage capacity by approximately 40% and our daily IQF throughput by 2.5 tonnes.",
            author: "Toughman Operations",
            imgUrl: "",
        },
        {
            id: 3,
            category: "COMMUNITY",
            tag: "Community",
            date: "March 22, 2026",
            featured: false,
            title: "Toughman Sponsors Barangay Nutrition Month with Free Protein Donation to 3 Communities",
            excerpt:
                "In celebration of National Nutrition Month, Toughman Processing donated over 500 kilograms of frozen chicken to feeding programs in three barangays.",
            body: "As part of our commitment to the communities where we operate, Toughman Processing partnered with the City Nutrition Office to donate over 500 kilograms of frozen chicken products to feeding programs in three barangays.\n\nThe donation supported the nutritional needs of more than 400 families.",
            author: "Toughman CSR Team",
            imgUrl: "",
        },
    ],
    about: {
        heroTitle: "We Are\nToughman",
        heroDesc:
            "TOUGHMANFP Corporation is a registered halal frozen chicken processing company based in Zamboanga City. We supply premium frozen poultry products to distributors, supermarkets, and food service operators across the Philippines.",
        stats: [
            { value: "2026", label: "Year Established" },
            { value: "100%", label: "Halal Compliant" },
            { value: "-18°C", label: "Cold Chain Standard" },
            { value: "5+", label: "Management Experts" },
        ],
        commitments: [
            "Delivering safe, premium Halal frozen products on every order",
            "Maintaining proper hygiene and food safety standards throughout processing",
            "Building strong and long-term client and supplier relationships",
            "Upholding transparent and ethical business practices company-wide",
            "Continuously improving operational efficiency across all departments",
            "Expanding distribution capacity to reach more regions nationwide",
        ],
        futureGoals: [
            "Expand nationwide distribution across Luzon, Visayas, and Mindanao",
            "Increase cold storage capacity and processing volume to meet growing demand",
            "Establish additional processing facilities in strategic regions",
            "Implement an enterprise resource planning system across all departments",
            "Develop stronger partnerships with suppliers, distributors, and retailers",
            "Establish Toughman as a recognized Halal frozen food brand in the Philippines",
        ],
    },
    team: [
        {
            id: 1,
            name: "Abdelrasul Adjilani",
            role: "Chief Executive Officer (CEO)",
            initials: "AA",
            desc: "Leads the overall vision, strategic direction, and corporate growth of TOUGHMANFP Corporation. He oversees executive management, business development, corporate partnerships, and long-term organizational planning.",
            linkedin: "#",
        },
        {
            id: 2,
            name: "Wryan Alfred Punzalan",
            role: "Chief Operating Officer (COO) / Chief Technical Officer (CTO)",
            initials: "WP",
            desc: "Manages the corporation's operational and technological infrastructure. Leads system development, IT operations, digital transformation, cybersecurity initiatives, and technical innovation.",
            linkedin: "#",
        },
        {
            id: 3,
            name: "Al-Bhien Adjilani",
            role: "Executive Shareholder",
            initials: "BA",
            desc: "Plays a vital role in supporting the corporation's strategic growth and investment direction. Contributes to high-level business planning, corporate expansion initiatives, and long-term financial sustainability.",
            linkedin: "#",
        },
        {
            id: 4,
            name: "Aldizier Tantong",
            role: "Board Member",
            initials: "AT",
            desc: "Serves as a Board Member responsible for providing governance, strategic oversight, and advisory support. Contributes to policy development and organizational planning.",
            linkedin: "#",
        },
        {
            id: 5,
            name: "Mudzhar Adju",
            role: "Board Member",
            initials: "MA",
            desc: "Supports the corporation through strategic guidance, governance oversight, and business advisory responsibilities. Participates in evaluating corporate initiatives and operational performance.",
            linkedin: "#",
        },
    ],
    contact: {
        address: "Sta. Maria, Zamboanga City, Philippines",
        phone: "+63 945 982 9389",
        email: "inquiries@toughmanfp.com",
        mapEmbedUrl: "",
        officeHours: "Monday – Friday, 8:00 AM – 5:00 PM",
    },
    careers: {
        heroTitle: "Join Our Team",
        heroDesc:
            "We are looking for dedicated professionals to be part of a growing halal food processing company. Explore open positions below.",
        openPositions: [
            {
                id: 1,
                title: "Quality Assurance Officer",
                type: "Full-time",
                location: "Zamboanga City",
                department: "Quality & Food Safety",
                description:
                    "Monitor and enforce food safety standards throughout the processing facility. Conduct inspections and maintain compliance documentation.",
                requirements: [
                    "Bachelor's degree in Food Technology or related field",
                    "Knowledge of HACCP and ISO 22000",
                    "At least 1 year experience in food manufacturing QA",
                ],
            },
            {
                id: 2,
                title: "Cold Storage Technician",
                type: "Full-time",
                location: "Zamboanga City",
                department: "Operations",
                description:
                    "Maintain cold storage equipment and ensure all temperature logs are recorded accurately. Respond to equipment issues promptly.",
                requirements: [
                    "TESDA NC II in Refrigeration or equivalent",
                    "Experience with industrial refrigeration systems",
                    "Willing to work on shifting schedules",
                ],
            },
        ],
    },
};

// ─── FIREBASE HELPERS ────────────────────────────────────────────────────────
let firebaseApp = null;
let firestoreDb = null;
let storageRef = null;

async function initFirebase() {
    if (firebaseApp) return { db: firestoreDb, storage: storageRef };
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
    const { getFirestore } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");
    const { getStorage } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js");
    firebaseApp = initializeApp(FIREBASE_CONFIG);
    firestoreDb = getFirestore(firebaseApp);
    storageRef = getStorage(firebaseApp);
    return { db: firestoreDb, storage: storageRef };
}

async function loadFromFirebase(section) {
    try {
        const { db } = await initFirebase();
        const { doc, getDoc } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");
        const snap = await getDoc(doc(db, "siteContent", section));
        if (snap.exists()) return snap.data();
    } catch (e) {
        console.warn("Firebase load failed, using defaults:", e);
    }
    return null;
}

async function saveToFirebase(section, data) {
    const { db } = await initFirebase();
    const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");
    await setDoc(doc(db, "siteContent", section), data);
}

async function uploadImageToFirebase(file, path) {
    const { storage } = await initFirebase();
    const { ref, uploadBytes, getDownloadURL } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js");
    const imgRef = ref(storage, path);
    await uploadBytes(imgRef, file);
    return await getDownloadURL(imgRef);
}

// ─── CREDENTIAL STORAGE (localStorage) ──────────────────────────────────────
const CRED_KEY = "toughman_admin_credentials";

function loadCredentials() {
    try {
        const raw = localStorage.getItem(CRED_KEY);
        if (raw) return JSON.parse(raw);
    } catch { }
    return DEFAULT_CREDENTIALS;
}

function saveCredentials(creds) {
    localStorage.setItem(CRED_KEY, JSON.stringify(creds));
}

// ─── STYLES ──────────────────────────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Inter:wght@400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --navy: #0a1628;
  --navy2: #0d1b3e;
  --orange: #e8611a;
  --orange-dk: #c9500f;
  --orange-dim: rgba(232,97,26,.12);
  --sidebar-w: 240px;
  --header-h: 56px;
  --gray1: #f5f7fa;
  --gray2: #e4e8ef;
  --gray3: #b0b6c8;
  --gray4: #6b7589;
  --gray5: #3a4258;
  --green: #16a34a;
  --green-dim: rgba(22,163,74,.12);
  --red: #dc2626;
  --red-dim: rgba(220,38,38,.1);
  --yellow: #d97706;
  --yellow-dim: rgba(217,119,6,.1);
}

body { font-family: 'Inter', sans-serif; background: #f0f2f6; color: var(--navy); }

/* ─── LOGIN SCREEN ─── */
.login-wrap {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, #0a1628 0%, #0d1b3e 60%, #1a2f5a 100%);
  padding: 20px;
  position: relative;
  overflow: hidden;
}
.login-wrap::before {
  content: '';
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(232,97,26,.15) 0%, transparent 70%);
  top: -200px; right: -200px;
  pointer-events: none;
}
.login-wrap::after {
  content: '';
  position: absolute;
  width: 400px; height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(232,97,26,.08) 0%, transparent 70%);
  bottom: -100px; left: -100px;
  pointer-events: none;
}
.login-card {
  background: #fff; border-radius: 16px;
  width: 100%; max-width: 420px;
  padding: 44px 40px;
  box-shadow: 0 32px 80px rgba(0,0,0,.35);
  position: relative; z-index: 1;
}
.login-logo {
  text-align: center; margin-bottom: 32px;
}
.login-logo-name {
  font-family: 'Montserrat', sans-serif; font-weight: 900;
  font-size: 28px; color: var(--navy); letter-spacing: -0.5px;
}
.login-logo-name span { color: var(--orange); }
.login-logo-sub {
  font-size: 11px; color: var(--gray4);
  text-transform: uppercase; letter-spacing: 2px; margin-top: 4px;
}
.login-divider {
  width: 40px; height: 3px; background: var(--orange);
  border-radius: 2px; margin: 14px auto 0;
}
.login-title {
  font-family: 'Montserrat', sans-serif; font-weight: 700;
  font-size: 16px; color: var(--navy); margin-bottom: 24px;
  text-align: center;
}
.login-field { margin-bottom: 16px; }
.login-label {
  display: block; font-size: 11px; font-weight: 600;
  color: var(--gray5); text-transform: uppercase;
  letter-spacing: .8px; margin-bottom: 7px;
}
.login-input {
  width: 100%; border: 1.5px solid var(--gray2); border-radius: 8px;
  padding: 11px 14px; font-size: 14px; font-family: 'Inter', sans-serif;
  color: var(--navy); background: #fff;
  transition: border-color .15s, box-shadow .15s; outline: none;
}
.login-input:focus {
  border-color: var(--orange); box-shadow: 0 0 0 3px var(--orange-dim);
}
.login-input.error { border-color: var(--red); box-shadow: 0 0 0 3px var(--red-dim); }
.login-btn {
  width: 100%; padding: 13px; background: var(--orange); color: #fff;
  border: none; border-radius: 8px; font-size: 14px;
  font-family: 'Montserrat', sans-serif; font-weight: 700;
  letter-spacing: .5px; cursor: pointer; margin-top: 8px;
  transition: background .15s, transform .1s;
}
.login-btn:hover { background: var(--orange-dk); }
.login-btn:active { transform: scale(.98); }
.login-btn:disabled { opacity: .6; cursor: not-allowed; }
.login-error {
  background: var(--red-dim); border: 1px solid rgba(220,38,38,.25);
  border-radius: 8px; padding: 10px 14px; margin-bottom: 16px;
  font-size: 13px; color: var(--red); display: flex; align-items: center; gap: 8px;
}
.login-pw-wrap { position: relative; }
.login-pw-toggle {
  position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
  background: none; border: none; cursor: pointer; color: var(--gray4);
  padding: 4px; display: flex; align-items: center;
}
.login-pw-toggle:hover { color: var(--navy); }

/* ─── LAYOUT ─── */
.adm-wrap { display: flex; min-height: 100vh; }

.adm-sidebar {
  width: var(--sidebar-w); background: var(--navy); flex-shrink: 0;
  display: flex; flex-direction: column;
  position: fixed; top: 0; left: 0; bottom: 0; z-index: 100;
  overflow-y: auto;
}
.adm-sidebar-logo { padding: 20px 20px 14px; border-bottom: 1px solid rgba(255,255,255,.08); }
.adm-sidebar-logo-name { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 15px; color: #fff; letter-spacing: .3px; }
.adm-sidebar-logo-sub { font-size: 10px; color: rgba(255,255,255,.4); text-transform: uppercase; letter-spacing: 1.5px; margin-top: 2px; }
.adm-sidebar-section { padding: 16px 12px 4px; font-size: 9.5px; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase; color: rgba(255,255,255,.3); }
.adm-nav-item {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 16px; margin: 1px 8px; border-radius: 6px;
  cursor: pointer; font-size: 13px; font-weight: 500;
  color: rgba(255,255,255,.65); transition: all .15s; border: none;
  background: none; width: calc(100% - 16px); text-align: left;
}
.adm-nav-item:hover { background: rgba(255,255,255,.07); color: #fff; }
.adm-nav-item.active { background: var(--orange); color: #fff; }
.adm-nav-item svg { flex-shrink: 0; opacity: .8; }
.adm-nav-item.active svg { opacity: 1; }

.adm-main { margin-left: var(--sidebar-w); flex: 1; display: flex; flex-direction: column; min-height: 100vh; }
.adm-header { height: var(--header-h); background: #fff; border-bottom: 1px solid var(--gray2); display: flex; align-items: center; justify-content: space-between; padding: 0 28px; position: sticky; top: 0; z-index: 50; }
.adm-header-title { font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 15px; color: var(--navy); }
.adm-header-actions { display: flex; align-items: center; gap: 10px; }
.adm-content { padding: 28px; flex: 1; }

/* cards */
.adm-card { background: #fff; border-radius: 10px; border: 1px solid var(--gray2); padding: 24px; margin-bottom: 20px; }
.adm-card-title { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 13px; color: var(--navy); margin-bottom: 18px; display: flex; align-items: center; gap: 8px; }
.adm-card-title svg { color: var(--orange); }

/* form */
.adm-field { margin-bottom: 16px; }
.adm-label { display: block; font-size: 11.5px; font-weight: 600; color: var(--gray5); text-transform: uppercase; letter-spacing: .7px; margin-bottom: 6px; }
.adm-input, .adm-textarea, .adm-select { width: 100%; border: 1px solid var(--gray2); border-radius: 6px; padding: 9px 12px; font-size: 13.5px; font-family: 'Inter', sans-serif; color: var(--navy); background: #fff; transition: border-color .15s, box-shadow .15s; outline: none; }
.adm-input:focus, .adm-textarea:focus, .adm-select:focus { border-color: var(--orange); box-shadow: 0 0 0 3px var(--orange-dim); }
.adm-textarea { resize: vertical; min-height: 80px; line-height: 1.6; }

/* pw input wrapper */
.adm-pw-wrap { position: relative; }
.adm-pw-wrap .adm-input { padding-right: 40px; }
.adm-pw-toggle { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; color: var(--gray4); padding: 4px; display: flex; align-items: center; }
.adm-pw-toggle:hover { color: var(--navy); }

/* buttons */
.btn { display: inline-flex; align-items: center; gap: 6px; padding: 9px 18px; border-radius: 6px; font-size: 12.5px; font-family: 'Montserrat', sans-serif; font-weight: 700; cursor: pointer; border: none; transition: all .15s; letter-spacing: .3px; }
.btn-primary { background: var(--orange); color: #fff; }
.btn-primary:hover { background: var(--orange-dk); }
.btn-primary:disabled { opacity: .5; cursor: not-allowed; }
.btn-ghost { background: transparent; color: var(--gray5); border: 1px solid var(--gray2); }
.btn-ghost:hover { background: var(--gray1); }
.btn-danger { background: var(--red-dim); color: var(--red); border: 1px solid rgba(220,38,38,.2); }
.btn-danger:hover { background: rgba(220,38,38,.18); }
.btn-success { background: var(--green-dim); color: var(--green); border: 1px solid rgba(22,163,74,.2); }
.btn-success:hover { background: rgba(22,163,74,.18); }
.btn-sm { padding: 6px 12px; font-size: 11.5px; }
.btn-logout { background: rgba(220,38,38,.08); color: var(--red); border: 1px solid rgba(220,38,38,.2); padding: 7px 14px; border-radius: 6px; font-size: 12px; font-family: 'Montserrat', sans-serif; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all .15s; }
.btn-logout:hover { background: var(--red-dim); }

/* badge */
.badge { display: inline-flex; align-items: center; gap: 4px; padding: 3px 8px; border-radius: 20px; font-size: 11px; font-weight: 600; }
.badge-orange { background: var(--orange-dim); color: var(--orange); }
.badge-green { background: var(--green-dim); color: var(--green); }
.badge-gray { background: var(--gray1); color: var(--gray4); }
.badge-red { background: var(--red-dim); color: var(--red); }
.badge-yellow { background: var(--yellow-dim); color: var(--yellow); }

/* grid layouts */
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }

/* list items */
.adm-list-item { display: flex; align-items: flex-start; gap: 14px; padding: 14px 0; border-bottom: 1px solid var(--gray2); }
.adm-list-item:last-child { border-bottom: none; }
.adm-list-item-info { flex: 1; min-width: 0; }
.adm-list-item-name { font-weight: 600; font-size: 13.5px; color: var(--navy); }
.adm-list-item-sub { font-size: 12px; color: var(--gray4); margin-top: 3px; }
.adm-list-item-actions { display: flex; gap: 6px; flex-shrink: 0; }

/* img preview */
.img-preview-box { width: 64px; height: 64px; border-radius: 8px; background: var(--gray1); border: 1px dashed var(--gray3); display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0; cursor: pointer; transition: border-color .15s; }
.img-preview-box:hover { border-color: var(--orange); }
.img-preview-box img { width: 100%; height: 100%; object-fit: cover; }
.img-upload-area { border: 1.5px dashed var(--gray3); border-radius: 8px; padding: 20px; text-align: center; cursor: pointer; background: var(--gray1); transition: all .15s; }
.img-upload-area:hover { border-color: var(--orange); background: var(--orange-dim); }
.img-upload-area input { display: none; }
.img-upload-label { font-size: 12.5px; color: var(--gray4); margin-top: 6px; display: block; }

/* modal */
.modal-backdrop { position: fixed; inset: 0; background: rgba(10,22,40,.55); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 20px; }
.modal-box { background: #fff; border-radius: 12px; width: 100%; max-width: 620px; max-height: 90vh; overflow-y: auto; box-shadow: 0 20px 60px rgba(10,22,40,.35); }
.modal-header { display: flex; align-items: center; justify-content: space-between; padding: 18px 24px 0; margin-bottom: 16px; }
.modal-title { font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 15px; color: var(--navy); }
.modal-body { padding: 0 24px 24px; }

/* toast */
.toast { position: fixed; bottom: 24px; right: 24px; z-index: 999; background: var(--navy); color: #fff; padding: 12px 20px; border-radius: 8px; font-size: 13px; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 20px rgba(0,0,0,.3); animation: toastIn .2s ease; }
.toast.success { background: var(--green); }
.toast.error { background: var(--red); }
@keyframes toastIn { from { transform: translateY(10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

/* chips */
.chip-wrap { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px; }
.chip { display: inline-flex; align-items: center; gap: 4px; background: var(--gray1); border: 1px solid var(--gray2); border-radius: 20px; padding: 3px 10px; font-size: 12px; color: var(--gray5); }
.chip-del { cursor: pointer; color: var(--gray3); font-size: 14px; line-height: 1; }
.chip-del:hover { color: var(--red); }

/* overview */
.stat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 24px; }
.stat-card { background: #fff; border: 1px solid var(--gray2); border-radius: 10px; padding: 18px 20px; }
.stat-value { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 26px; color: var(--navy); }
.stat-label { font-size: 12px; color: var(--gray4); margin-top: 4px; }
.stat-card.orange { border-top: 3px solid var(--orange); }
.stat-card.blue { border-top: 3px solid #2563eb; }
.stat-card.green { border-top: 3px solid var(--green); }
.stat-card.purple { border-top: 3px solid #7c3aed; }

/* status dot */
.status-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; display: inline-block; margin-right: 6px; }
.status-dot.live { background: var(--green); }
.status-dot.default { background: var(--gray3); }

/* fb banner */
.fb-banner { background: linear-gradient(135deg, #1a3a6b 0%, #0d1b3e 100%); border-radius: 10px; padding: 16px 20px; display: flex; align-items: center; gap: 14px; margin-bottom: 24px; border: 1px solid rgba(255,255,255,.08); }
.fb-banner-text { color: rgba(255,255,255,.8); font-size: 13px; line-height: 1.5; }
.fb-banner-text strong { color: #fff; }

/* credentials section */
.cred-info-box { background: var(--yellow-dim); border: 1px solid rgba(217,119,6,.25); border-radius: 8px; padding: 12px 16px; margin-bottom: 20px; font-size: 13px; color: var(--yellow); display: flex; align-items: flex-start; gap: 10px; line-height: 1.6; }
.cred-current-box { background: var(--gray1); border: 1px solid var(--gray2); border-radius: 8px; padding: 16px; margin-bottom: 20px; }
.cred-current-row { display: flex; align-items: center; justify-content: space-between; padding: 6px 0; font-size: 13px; border-bottom: 1px solid var(--gray2); }
.cred-current-row:last-child { border-bottom: none; }
.cred-current-label { font-weight: 600; color: var(--gray5); font-size: 12px; text-transform: uppercase; letter-spacing: .5px; }
.cred-current-val { font-family: monospace; font-size: 13px; color: var(--navy); }
.cred-current-val.masked { letter-spacing: 3px; }
`;

// ─── ICONS ───────────────────────────────────────────────────────────────────
const Ic = ({ d, size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
    </svg>
);
const IcHome = () => <Ic size={15} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10" />;
const IcBox = () => <Ic size={15} d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />;
const IcNews = () => <Ic size={15} d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2m0 0h12m-12 0L4 22m0-18A2 2 0 0 0 2 6v14a2 2 0 0 0 2 2" />;
const IcUsers = () => <Ic size={15} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />;
const IcInfo = () => <Ic size={15} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 8h.01 M12 12v4" />;
const IcMail = () => <Ic size={15} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />;
const IcBriefcase = () => <Ic size={15} d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />;
const IcSave = () => <Ic size={14} d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z M17 21v-8H7v8 M7 3v5h8" />;
const IcPlus = () => <Ic size={14} d="M12 5v14 M5 12h14" />;
const IcEdit = () => <Ic size={13} d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />;
const IcTrash = () => <Ic size={13} d="M3 6h18 M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />;
const IcX = () => <Ic size={16} d="M18 6L6 18 M6 6l12 12" />;
const IcImg = () => <Ic size={20} d="M21 19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z M8.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z M21 15l-5-5L5 21" />;
const IcCloud = () => <Ic size={14} d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />;
const IcCheck = () => <Ic size={14} d="M20 6L9 17l-5-5" />;
const IcLock = () => <Ic size={15} d="M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z M7 11V7a5 5 0 0 1 10 0v4" />;
const IcEye = () => <Ic size={16} d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />;
const IcEyeOff = () => <Ic size={16} d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24 M1 1l22 22" />;
const IcLogout = () => <Ic size={15} d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9" />;
const IcShield = () => <Ic size={15} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />;
const IcAlert = () => <Ic size={16} d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01" />;

// ─── HOOKS ───────────────────────────────────────────────────────────────────
function useToast() {
    const [toast, setToast] = useState(null);
    const show = (msg, type = "success") => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 3500);
    };
    return [toast, show];
}

// ─── REUSABLE COMPONENTS ─────────────────────────────────────────────────────
function ImageUpload({ value, onChange, path, label = "Upload Image" }) {
    const inputRef = useRef();
    const [uploading, setUploading] = useState(false);
    const handleFile = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setUploading(true);
        try {
            const url = await uploadImageToFirebase(file, `${path}/${Date.now()}_${file.name}`);
            onChange(url);
        } catch {
            alert("Upload failed. Check your Firebase Storage config.");
        } finally {
            setUploading(false);
        }
    };
    return (
        <div>
            <label className="adm-label">{label}</label>
            <div className="img-upload-area" onClick={() => inputRef.current.click()}>
                <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} />
                {value ? (
                    <img src={value} alt="preview" style={{ maxHeight: 120, borderRadius: 6, maxWidth: "100%" }} />
                ) : (
                    <>
                        <IcImg />
                        <span className="img-upload-label">{uploading ? "Uploading…" : "Click to upload image"}</span>
                    </>
                )}
            </div>
            {value && (
                <div style={{ marginTop: 6, display: "flex", gap: 8, alignItems: "center" }}>
                    <input className="adm-input" value={value} onChange={e => onChange(e.target.value)} placeholder="Or paste image URL" style={{ flex: 1, fontSize: 12 }} />
                    <button className="btn btn-danger btn-sm" onClick={() => onChange("")}>Clear</button>
                </div>
            )}
            {!value && (
                <input className="adm-input" style={{ marginTop: 6, fontSize: 12 }} placeholder="Or paste image URL directly" onChange={e => onChange(e.target.value)} />
            )}
        </div>
    );
}

function ChipList({ items, onChange, placeholder = "Add item…" }) {
    const [input, setInput] = useState("");
    const add = () => {
        const v = input.trim();
        if (v && !items.includes(v)) { onChange([...items, v]); setInput(""); }
    };
    return (
        <div>
            <div style={{ display: "flex", gap: 6 }}>
                <input className="adm-input" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && (e.preventDefault(), add())} placeholder={placeholder} style={{ flex: 1 }} />
                <button className="btn btn-ghost btn-sm" onClick={add}>Add</button>
            </div>
            <div className="chip-wrap">
                {items.map((it, i) => (
                    <span className="chip" key={i}>{it}<span className="chip-del" onClick={() => onChange(items.filter((_, j) => j !== i))}>×</span></span>
                ))}
            </div>
        </div>
    );
}

function Modal({ open, onClose, title, children }) {
    if (!open) return null;
    return (
        <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
            <div className="modal-box">
                <div className="modal-header">
                    <div className="modal-title">{title}</div>
                    <button className="btn btn-ghost btn-sm" onClick={onClose}><IcX /></button>
                </div>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
}

// ─── LOGIN SCREEN ─────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPw, setShowPw] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setError("");
        if (!email.trim() || !password.trim()) {
            setError("Please enter both email and password.");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            const creds = loadCredentials();
            if (email.trim() === creds.email && password === creds.password) {
                onLogin();
            } else {
                setError("Incorrect email or password. Please try again.");
                setLoading(false);
            }
        }, 600);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleLogin();
    };

    return (
        <div className="login-wrap">
            <div className="login-card">
                <div className="login-logo">
                    <div className="login-logo-name">TOUGH<span>MAN</span></div>
                    <div className="login-logo-sub">Admin Panel</div>
                    <div className="login-divider" />
                </div>
                <div className="login-title">Sign in to continue</div>

                {error && (
                    <div className="login-error">
                        <IcAlert />
                        {error}
                    </div>
                )}

                <div className="login-field">
                    <label className="login-label">Email Address</label>
                    <input
                        className={`login-input${error ? " error" : ""}`}
                        type="email"
                        placeholder="admin@gmail.com"
                        value={email}
                        onChange={e => { setEmail(e.target.value); setError(""); }}
                        onKeyDown={handleKeyDown}
                        autoComplete="email"
                    />
                </div>

                <div className="login-field">
                    <label className="login-label">Password</label>
                    <div className="login-pw-wrap">
                        <input
                            className={`login-input${error ? " error" : ""}`}
                            type={showPw ? "text" : "password"}
                            placeholder="••••••••"
                            value={password}
                            onChange={e => { setPassword(e.target.value); setError(""); }}
                            onKeyDown={handleKeyDown}
                            autoComplete="current-password"
                            style={{ paddingRight: 44 }}
                        />
                        <button className="login-pw-toggle" onClick={() => setShowPw(v => !v)} type="button">
                            {showPw ? <IcEyeOff /> : <IcEye />}
                        </button>
                    </div>
                </div>

                <button className="login-btn" onClick={handleLogin} disabled={loading}>
                    {loading ? "Signing in…" : "Sign In"}
                </button>
            </div>
        </div>
    );
}

// ─── CREDENTIALS EDITOR ───────────────────────────────────────────────────────
function CredentialsEditor({ onToast }) {
    const [creds, setCreds] = useState(loadCredentials());
    const [form, setForm] = useState({ email: "", currentPassword: "", newPassword: "", confirmPassword: "" });
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);

    const validate = () => {
        const e = {};
        if (!form.email.trim()) e.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email address.";
        if (!form.currentPassword) e.currentPassword = "Current password is required to make changes.";
        else if (form.currentPassword !== creds.password) e.currentPassword = "Incorrect current password.";
        if (form.newPassword && form.newPassword.length < 6) e.newPassword = "New password must be at least 6 characters.";
        if (form.newPassword && form.newPassword !== form.confirmPassword) e.confirmPassword = "Passwords do not match.";
        return e;
    };

    const handleSave = () => {
        const e = validate();
        setErrors(e);
        if (Object.keys(e).length > 0) return;

        setSaving(true);
        setTimeout(() => {
            const updated = {
                email: form.email.trim(),
                password: form.newPassword ? form.newPassword : creds.password,
            };
            saveCredentials(updated);
            setCreds(updated);
            setForm({ email: "", currentPassword: "", newPassword: "", confirmPassword: "" });
            setErrors({});
            setSaving(false);
            onToast("Login credentials updated successfully!", "success");
        }, 500);
    };

    const maskedPw = (pw) => "•".repeat(Math.min(pw.length, 12));

    return (
        <>
            <div className="cred-info-box">
                <div style={{ flexShrink: 0, marginTop: 1 }}><IcAlert /></div>
                <div>
                    <strong>Security Notice:</strong> Credentials are stored in your browser's local storage. To reset them, clear your browser data or enter the default credentials (<code>admin@gmail.com</code> / <code>admin123</code>).
                </div>
            </div>

            <div className="adm-card">
                <div className="adm-card-title"><IcShield /> Current Credentials</div>
                <div className="cred-current-box">
                    <div className="cred-current-row">
                        <span className="cred-current-label">Email</span>
                        <span className="cred-current-val">{creds.email}</span>
                    </div>
                    <div className="cred-current-row">
                        <span className="cred-current-label">Password</span>
                        <span className="cred-current-val masked">{maskedPw(creds.password)}</span>
                    </div>
                </div>
            </div>

            <div className="adm-card">
                <div className="adm-card-title"><IcLock /> Update Login Credentials</div>

                <div className="adm-field">
                    <label className="adm-label">New Email Address</label>
                    <input
                        className="adm-input"
                        type="email"
                        placeholder={creds.email}
                        value={form.email}
                        onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(x => ({ ...x, email: undefined })); }}
                    />
                    {errors.email && <div style={{ fontSize: 12, color: "var(--red)", marginTop: 5 }}>{errors.email}</div>}
                </div>

                <div style={{ borderTop: "1px solid var(--gray2)", marginBottom: 16, paddingTop: 16 }}>
                    <div style={{ fontSize: 12, color: "var(--gray4)", marginBottom: 12, fontWeight: 500 }}>Password Change (leave blank to keep current password)</div>

                    <div className="adm-field">
                        <label className="adm-label">New Password</label>
                        <div className="adm-pw-wrap">
                            <input
                                className="adm-input"
                                type={showNew ? "text" : "password"}
                                placeholder="Min. 6 characters"
                                value={form.newPassword}
                                onChange={e => { setForm(f => ({ ...f, newPassword: e.target.value })); setErrors(x => ({ ...x, newPassword: undefined })); }}
                            />
                            <button className="adm-pw-toggle" onClick={() => setShowNew(v => !v)} type="button">
                                {showNew ? <IcEyeOff /> : <IcEye />}
                            </button>
                        </div>
                        {errors.newPassword && <div style={{ fontSize: 12, color: "var(--red)", marginTop: 5 }}>{errors.newPassword}</div>}
                    </div>

                    <div className="adm-field">
                        <label className="adm-label">Confirm New Password</label>
                        <div className="adm-pw-wrap">
                            <input
                                className="adm-input"
                                type={showConfirm ? "text" : "password"}
                                placeholder="Re-enter new password"
                                value={form.confirmPassword}
                                onChange={e => { setForm(f => ({ ...f, confirmPassword: e.target.value })); setErrors(x => ({ ...x, confirmPassword: undefined })); }}
                            />
                            <button className="adm-pw-toggle" onClick={() => setShowConfirm(v => !v)} type="button">
                                {showConfirm ? <IcEyeOff /> : <IcEye />}
                            </button>
                        </div>
                        {errors.confirmPassword && <div style={{ fontSize: 12, color: "var(--red)", marginTop: 5 }}>{errors.confirmPassword}</div>}
                    </div>
                </div>

                <div style={{ borderTop: "1px solid var(--gray2)", paddingTop: 16 }}>
                    <div className="adm-field" style={{ marginBottom: 0 }}>
                        <label className="adm-label">Current Password <span style={{ color: "var(--red)" }}>*</span></label>
                        <div className="adm-pw-wrap">
                            <input
                                className="adm-input"
                                type={showCurrent ? "text" : "password"}
                                placeholder="Enter current password to confirm changes"
                                value={form.currentPassword}
                                onChange={e => { setForm(f => ({ ...f, currentPassword: e.target.value })); setErrors(x => ({ ...x, currentPassword: undefined })); }}
                            />
                            <button className="adm-pw-toggle" onClick={() => setShowCurrent(v => !v)} type="button">
                                {showCurrent ? <IcEyeOff /> : <IcEye />}
                            </button>
                        </div>
                        {errors.currentPassword && <div style={{ fontSize: 12, color: "var(--red)", marginTop: 5 }}>{errors.currentPassword}</div>}
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
                    <IcSave /> {saving ? "Saving…" : "Update Credentials"}
                </button>
            </div>
        </>
    );
}

// ─── SECTION EDITORS ─────────────────────────────────────────────────────────
function Overview({ data }) {
    return (
        <>
            <div className="fb-banner">
                <span style={{ flexShrink: 0 }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.85)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                        <line x1="12" y1="12" x2="12" y2="16" /><line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                </span>
                <div className="fb-banner-text">
                    <strong>Firebase Integration Active</strong><br />
                    Data will be saved to Firestore and images to Firebase Storage. Default values are used until you make your first save.
                </div>
            </div>
            <div className="stat-row">
                <div className="stat-card orange"><div className="stat-value">{data.products.length}</div><div className="stat-label">Products</div></div>
                <div className="stat-card blue"><div className="stat-value">{data.news.length}</div><div className="stat-label">News Articles</div></div>
                <div className="stat-card green"><div className="stat-value">{data.team.length}</div><div className="stat-label">Team Members</div></div>
                <div className="stat-card purple"><div className="stat-value">{data.careers.openPositions.length}</div><div className="stat-label">Open Positions</div></div>
            </div>
            <div className="adm-card">
                <div className="adm-card-title">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="4" rx="1" /><path d="M5 4h-1a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="13" y2="16" /></svg>
                    Admin Sections
                </div>
                <p style={{ fontSize: 13, color: "var(--gray4)", lineHeight: 1.7 }}>
                    Use the sidebar to edit each section of the Toughman website. Changes are saved to Firebase and reflected on the live website automatically. Images can be uploaded directly or via URL.
                </p>
                <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {[
                        [<IcHome />, "Homepage", "Hero, stats, features, about snippet"],
                        [<IcBox />, "Products", "Add / edit / remove products and images"],
                        [<IcNews />, "News", "Manage news articles and announcements"],
                        [<IcInfo />, "About", "Company info, values, commitments, goals"],
                        [<IcUsers />, "Team", "Edit team member profiles and roles"],
                        [<IcMail />, "Contact", "Address, phone, email, map"],
                        [<IcBriefcase />, "Careers", "Job listings and requirements"],
                        [<IcLock />, "Credentials", "Update admin login email and password"],
                    ].map(([ico, name, desc]) => (
                        <div key={name} style={{ display: "flex", gap: 10, padding: "12px", background: "var(--gray1)", borderRadius: 8, border: "1px solid var(--gray2)" }}>
                            <span style={{ color: "var(--orange)", flexShrink: 0, marginTop: 2 }}>{ico}</span>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: 13 }}>{name}</div>
                                <div style={{ fontSize: 12, color: "var(--gray4)" }}>{desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

function HomepageEditor({ data, onChange, onSave, saving }) {
    const hero = data.hero;
    const stats = data.stats;
    const about = data.aboutSection;
    const set = (field, val) => onChange({ ...data, hero: { ...hero, [field]: val } });
    const setAbout = (field, val) => onChange({ ...data, aboutSection: { ...about, [field]: val } });
    return (
        <>
            <div className="adm-card">
                <div className="adm-card-title"><IcHome /> Hero Section</div>
                <div className="grid-2">
                    <div className="adm-field">
                        <label className="adm-label">Tagline (eyebrow text)</label>
                        <input className="adm-input" value={hero.tagline} onChange={e => set("tagline", e.target.value)} />
                    </div>
                    <div className="adm-field">
                        <label className="adm-label">CTA Button (Primary)</label>
                        <input className="adm-input" value={hero.ctaPrimary} onChange={e => set("ctaPrimary", e.target.value)} />
                    </div>
                </div>
                <div className="adm-field">
                    <label className="adm-label">Main Headline</label>
                    <input className="adm-input" value={hero.headline} onChange={e => set("headline", e.target.value)} />
                </div>
                <div className="adm-field">
                    <label className="adm-label">Sub-headline</label>
                    <input className="adm-input" value={hero.subheadline} onChange={e => set("subheadline", e.target.value)} />
                </div>
                <div className="adm-field">
                    <label className="adm-label">Description</label>
                    <textarea className="adm-textarea" value={hero.description} onChange={e => set("description", e.target.value)} />
                </div>
                <div className="adm-field">
                    <label className="adm-label">CTA Button (Secondary)</label>
                    <input className="adm-input" value={hero.ctaSecondary} onChange={e => set("ctaSecondary", e.target.value)} />
                </div>
            </div>
            <div className="adm-card">
                <div className="adm-card-title">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                    Stats Bar
                </div>
                <div className="grid-2">
                    {stats.map((s, i) => (
                        <div key={i} style={{ display: "flex", gap: 8 }}>
                            <div className="adm-field" style={{ flex: "0 0 90px", margin: 0 }}>
                                <label className="adm-label">Value</label>
                                <input className="adm-input" value={s.value} onChange={e => { const ns = [...stats]; ns[i] = { ...s, value: e.target.value }; onChange({ ...data, stats: ns }); }} />
                            </div>
                            <div className="adm-field" style={{ flex: 1, margin: 0 }}>
                                <label className="adm-label">Label</label>
                                <input className="adm-input" value={s.label} onChange={e => { const ns = [...stats]; ns[i] = { ...s, label: e.target.value }; onChange({ ...data, stats: ns }); }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="adm-card">
                <div className="adm-card-title"><IcInfo /> About Snippet (Homepage)</div>
                <div className="adm-field">
                    <label className="adm-label">Eyebrow</label>
                    <input className="adm-input" value={about.eyebrow} onChange={e => setAbout("eyebrow", e.target.value)} />
                </div>
                <div className="adm-field">
                    <label className="adm-label">Title</label>
                    <input className="adm-input" value={about.title} onChange={e => setAbout("title", e.target.value)} />
                </div>
                <div className="adm-field">
                    <label className="adm-label">Description</label>
                    <textarea className="adm-textarea" value={about.description} onChange={e => setAbout("description", e.target.value)} />
                </div>
                <div className="adm-field">
                    <label className="adm-label">Bullet Points</label>
                    <ChipList items={about.points} onChange={v => setAbout("points", v)} placeholder="Add bullet point…" />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="btn btn-primary" onClick={onSave} disabled={saving}><IcSave /> {saving ? "Saving…" : "Save Homepage"}</button>
            </div>
        </>
    );
}

function ProductsEditor({ products, onChange, onSave, saving }) {
    const [modal, setModal] = useState(null);
    const [form, setForm] = useState(null);
    const openAdd = () => { setForm({ id: Date.now(), name: "", category: "WHOLE CHICKEN", tag: "", weight: "", temp: "-18°C", desc: "", features: [], imgUrl: "" }); setModal({ mode: "add" }); };
    const openEdit = (idx) => { setForm({ ...products[idx] }); setModal({ mode: "edit", idx }); };
    const closeModal = () => { setModal(null); setForm(null); };
    const handleSaveForm = () => {
        let updated;
        if (modal.mode === "add") updated = [...products, form];
        else { updated = [...products]; updated[modal.idx] = form; }
        onChange(updated); closeModal();
    };
    const handleDelete = (idx) => { if (!confirm("Delete this product?")) return; onChange(products.filter((_, i) => i !== idx)); };
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div style={{ fontSize: 13, color: "var(--gray4)" }}>{products.length} products</div>
                <button className="btn btn-primary btn-sm" onClick={openAdd}><IcPlus /> Add Product</button>
            </div>
            <div className="adm-card">
                {products.map((p, i) => (
                    <div className="adm-list-item" key={p.id}>
                        <div className="img-preview-box" onClick={() => openEdit(i)}>{p.imgUrl ? <img src={p.imgUrl} alt={p.name} /> : <IcImg />}</div>
                        <div className="adm-list-item-info">
                            <div className="adm-list-item-name">{p.name}</div>
                            <div className="adm-list-item-sub">{p.category} · {p.weight} · {p.temp}</div>
                            <div style={{ marginTop: 4 }}><span className="badge badge-orange">{p.tag}</span></div>
                        </div>
                        <div className="adm-list-item-actions">
                            <button className="btn btn-ghost btn-sm" onClick={() => openEdit(i)}><IcEdit /></button>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(i)}><IcTrash /></button>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="btn btn-primary" onClick={onSave} disabled={saving}><IcSave /> {saving ? "Saving…" : "Save Products"}</button>
            </div>
            <Modal open={!!modal} onClose={closeModal} title={modal?.mode === "add" ? "Add Product" : "Edit Product"}>
                {form && (
                    <>
                        <div className="grid-2">
                            <div className="adm-field"><label className="adm-label">Product Name</label><input className="adm-input" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
                            <div className="adm-field"><label className="adm-label">Category</label><select className="adm-select" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>{["WHOLE CHICKEN", "CUTS", "PARTS", "PACKED"].map(c => <option key={c}>{c}</option>)}</select></div>
                            <div className="adm-field"><label className="adm-label">Tag (badge)</label><input className="adm-input" value={form.tag} onChange={e => setForm({ ...form, tag: e.target.value })} /></div>
                            <div className="adm-field"><label className="adm-label">Weight Range</label><input className="adm-input" value={form.weight} onChange={e => setForm({ ...form, weight: e.target.value })} /></div>
                            <div className="adm-field"><label className="adm-label">Temperature</label><input className="adm-input" value={form.temp} onChange={e => setForm({ ...form, temp: e.target.value })} /></div>
                        </div>
                        <div className="adm-field"><label className="adm-label">Description</label><textarea className="adm-textarea" value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} /></div>
                        <div className="adm-field"><label className="adm-label">Features / Badges</label><ChipList items={form.features} onChange={v => setForm({ ...form, features: v })} placeholder="Add feature…" /></div>
                        <div className="adm-field"><ImageUpload value={form.imgUrl} onChange={v => setForm({ ...form, imgUrl: v })} path="products" label="Product Image" /></div>
                        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 8 }}>
                            <button className="btn btn-ghost" onClick={closeModal}>Cancel</button>
                            <button className="btn btn-primary" onClick={handleSaveForm}><IcCheck /> Save Product</button>
                        </div>
                    </>
                )}
            </Modal>
        </>
    );
}

function NewsEditor({ news, onChange, onSave, saving }) {
    const [modal, setModal] = useState(null);
    const [form, setForm] = useState(null);
    const CATS = ["COMPANY NEWS", "INDUSTRY", "CERTIFICATIONS", "COMMUNITY", "PRODUCT UPDATES"];
    const openAdd = () => { setForm({ id: Date.now(), category: "COMPANY NEWS", tag: "Company", date: "", featured: false, title: "", excerpt: "", body: "", author: "", imgUrl: "" }); setModal({ mode: "add" }); };
    const openEdit = (idx) => { setForm({ ...news[idx] }); setModal({ mode: "edit", idx }); };
    const closeModal = () => { setModal(null); setForm(null); };
    const handleSaveForm = () => {
        let updated;
        if (modal.mode === "add") updated = [...news, form];
        else { updated = [...news]; updated[modal.idx] = form; }
        onChange(updated); closeModal();
    };
    const handleDelete = (idx) => { if (!confirm("Delete this article?")) return; onChange(news.filter((_, i) => i !== idx)); };
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div style={{ fontSize: 13, color: "var(--gray4)" }}>{news.length} articles</div>
                <button className="btn btn-primary btn-sm" onClick={openAdd}><IcPlus /> Add Article</button>
            </div>
            <div className="adm-card">
                {news.map((n, i) => (
                    <div className="adm-list-item" key={n.id}>
                        <div className="img-preview-box" onClick={() => openEdit(i)}>{n.imgUrl ? <img src={n.imgUrl} alt={n.title} /> : <IcImg />}</div>
                        <div className="adm-list-item-info">
                            <div className="adm-list-item-name" style={{ fontSize: 13 }}>{n.title}</div>
                            <div className="adm-list-item-sub">{n.date} · {n.category}</div>
                            <div style={{ marginTop: 4, display: "flex", gap: 6 }}>
                                <span className="badge badge-gray">{n.tag}</span>
                                {n.featured && <span className="badge badge-orange">Featured</span>}
                            </div>
                        </div>
                        <div className="adm-list-item-actions">
                            <button className="btn btn-ghost btn-sm" onClick={() => openEdit(i)}><IcEdit /></button>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(i)}><IcTrash /></button>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="btn btn-primary" onClick={onSave} disabled={saving}><IcSave /> {saving ? "Saving…" : "Save News"}</button>
            </div>
            <Modal open={!!modal} onClose={closeModal} title={modal?.mode === "add" ? "Add Article" : "Edit Article"}>
                {form && (
                    <>
                        <div className="adm-field"><label className="adm-label">Title</label><input className="adm-input" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} /></div>
                        <div className="grid-2">
                            <div className="adm-field"><label className="adm-label">Category</label><select className="adm-select" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>{CATS.map(c => <option key={c}>{c}</option>)}</select></div>
                            <div className="adm-field"><label className="adm-label">Tag Label</label><input className="adm-input" value={form.tag} onChange={e => setForm({ ...form, tag: e.target.value })} /></div>
                            <div className="adm-field"><label className="adm-label">Date (e.g. May 15, 2026)</label><input className="adm-input" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} /></div>
                            <div className="adm-field"><label className="adm-label">Author</label><input className="adm-input" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} /></div>
                        </div>
                        <div className="adm-field" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <input type="checkbox" id="featured" checked={form.featured} onChange={e => setForm({ ...form, featured: e.target.checked })} style={{ width: 16, height: 16 }} />
                            <label htmlFor="featured" style={{ fontSize: 13, fontWeight: 500, cursor: "pointer" }}>Featured Article</label>
                        </div>
                        <div className="adm-field"><label className="adm-label">Excerpt (short summary)</label><textarea className="adm-textarea" value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} style={{ minHeight: 60 }} /></div>
                        <div className="adm-field"><label className="adm-label">Full Body</label><textarea className="adm-textarea" value={form.body} onChange={e => setForm({ ...form, body: e.target.value })} style={{ minHeight: 140 }} /></div>
                        <div className="adm-field"><ImageUpload value={form.imgUrl} onChange={v => setForm({ ...form, imgUrl: v })} path="news" label="Article Image" /></div>
                        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 8 }}>
                            <button className="btn btn-ghost" onClick={closeModal}>Cancel</button>
                            <button className="btn btn-primary" onClick={handleSaveForm}><IcCheck /> Save Article</button>
                        </div>
                    </>
                )}
            </Modal>
        </>
    );
}

function AboutEditor({ data, onChange, onSave, saving }) {
    const set = (field, val) => onChange({ ...data, [field]: val });
    const setStat = (i, field, val) => { const ns = [...data.stats]; ns[i] = { ...ns[i], [field]: val }; set("stats", ns); };
    return (
        <>
            <div className="adm-card">
                <div className="adm-card-title"><IcInfo /> Hero Copy</div>
                <div className="adm-field"><label className="adm-label">Hero Title</label><input className="adm-input" value={data.heroTitle} onChange={e => set("heroTitle", e.target.value)} /></div>
                <div className="adm-field"><label className="adm-label">Hero Description</label><textarea className="adm-textarea" value={data.heroDesc} onChange={e => set("heroDesc", e.target.value)} /></div>
            </div>
            <div className="adm-card">
                <div className="adm-card-title">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                    About Stats
                </div>
                <div className="grid-2">
                    {data.stats.map((s, i) => (
                        <div key={i} style={{ display: "flex", gap: 8 }}>
                            <div className="adm-field" style={{ flex: "0 0 90px", margin: 0 }}><label className="adm-label">Value</label><input className="adm-input" value={s.value} onChange={e => setStat(i, "value", e.target.value)} /></div>
                            <div className="adm-field" style={{ flex: 1, margin: 0 }}><label className="adm-label">Label</label><input className="adm-input" value={s.label} onChange={e => setStat(i, "label", e.target.value)} /></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="adm-card">
                <div className="adm-card-title">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                    Commitments
                </div>
                <ChipList items={data.commitments} onChange={v => set("commitments", v)} placeholder="Add commitment…" />
            </div>
            <div className="adm-card">
                <div className="adm-card-title">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                    Future Goals
                </div>
                <ChipList items={data.futureGoals} onChange={v => set("futureGoals", v)} placeholder="Add goal…" />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="btn btn-primary" onClick={onSave} disabled={saving}><IcSave /> {saving ? "Saving…" : "Save About"}</button>
            </div>
        </>
    );
}

function TeamEditor({ team, onChange, onSave, saving }) {
    const [modal, setModal] = useState(null);
    const [form, setForm] = useState(null);
    const openEdit = (idx) => { setForm({ ...team[idx] }); setModal({ mode: "edit", idx }); };
    const openAdd = () => { setForm({ id: Date.now(), name: "", role: "", initials: "", desc: "", linkedin: "#" }); setModal({ mode: "add" }); };
    const closeModal = () => { setModal(null); setForm(null); };
    const handleSaveForm = () => {
        let updated;
        if (modal.mode === "add") updated = [...team, form];
        else { updated = [...team]; updated[modal.idx] = form; }
        onChange(updated); closeModal();
    };
    const handleDelete = (idx) => { if (!confirm("Remove this team member?")) return; onChange(team.filter((_, i) => i !== idx)); };
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div style={{ fontSize: 13, color: "var(--gray4)" }}>{team.length} members</div>
                <button className="btn btn-primary btn-sm" onClick={openAdd}><IcPlus /> Add Member</button>
            </div>
            <div className="adm-card">
                {team.map((m, i) => (
                    <div className="adm-list-item" key={m.id}>
                        <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--navy)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{m.initials}</div>
                        <div className="adm-list-item-info">
                            <div className="adm-list-item-name">{m.name}</div>
                            <div className="adm-list-item-sub">{m.role}</div>
                        </div>
                        <div className="adm-list-item-actions">
                            <button className="btn btn-ghost btn-sm" onClick={() => openEdit(i)}><IcEdit /></button>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(i)}><IcTrash /></button>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="btn btn-primary" onClick={onSave} disabled={saving}><IcSave /> {saving ? "Saving…" : "Save Team"}</button>
            </div>
            <Modal open={!!modal} onClose={closeModal} title={modal?.mode === "add" ? "Add Team Member" : "Edit Team Member"}>
                {form && (
                    <>
                        <div className="grid-2">
                            <div className="adm-field"><label className="adm-label">Full Name</label><input className="adm-input" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
                            <div className="adm-field"><label className="adm-label">Initials (2 letters)</label><input className="adm-input" value={form.initials} onChange={e => setForm({ ...form, initials: e.target.value })} maxLength={3} /></div>
                        </div>
                        <div className="adm-field"><label className="adm-label">Role / Title</label><input className="adm-input" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} /></div>
                        <div className="adm-field"><label className="adm-label">Bio / Description</label><textarea className="adm-textarea" value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} /></div>
                        <div className="adm-field"><label className="adm-label">LinkedIn URL</label><input className="adm-input" value={form.linkedin} onChange={e => setForm({ ...form, linkedin: e.target.value })} placeholder="https://linkedin.com/in/…" /></div>
                        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 8 }}>
                            <button className="btn btn-ghost" onClick={closeModal}>Cancel</button>
                            <button className="btn btn-primary" onClick={handleSaveForm}><IcCheck /> Save Member</button>
                        </div>
                    </>
                )}
            </Modal>
        </>
    );
}

function ContactEditor({ data, onChange, onSave, saving }) {
    const set = (field, val) => onChange({ ...data, [field]: val });
    return (
        <>
            <div className="adm-card">
                <div className="adm-card-title"><IcMail /> Contact Details</div>
                <div className="adm-field"><label className="adm-label">Address</label><input className="adm-input" value={data.address} onChange={e => set("address", e.target.value)} /></div>
                <div className="grid-2">
                    <div className="adm-field"><label className="adm-label">Phone</label><input className="adm-input" value={data.phone} onChange={e => set("phone", e.target.value)} /></div>
                    <div className="adm-field"><label className="adm-label">Email</label><input className="adm-input" value={data.email} onChange={e => set("email", e.target.value)} /></div>
                </div>
                <div className="adm-field"><label className="adm-label">Office Hours</label><input className="adm-input" value={data.officeHours} onChange={e => set("officeHours", e.target.value)} /></div>
                <div className="adm-field"><label className="adm-label">Google Maps Embed URL</label><input className="adm-input" value={data.mapEmbedUrl} onChange={e => set("mapEmbedUrl", e.target.value)} placeholder="https://www.google.com/maps/embed?..." /></div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="btn btn-primary" onClick={onSave} disabled={saving}><IcSave /> {saving ? "Saving…" : "Save Contact"}</button>
            </div>
        </>
    );
}

function CareersEditor({ data, onChange, onSave, saving }) {
    const [modal, setModal] = useState(null);
    const [form, setForm] = useState(null);
    const positions = data.openPositions;
    const openAdd = () => { setForm({ id: Date.now(), title: "", type: "Full-time", location: "", department: "", description: "", requirements: [] }); setModal({ mode: "add" }); };
    const openEdit = (idx) => { setForm({ ...positions[idx] }); setModal({ mode: "edit", idx }); };
    const closeModal = () => { setModal(null); setForm(null); };
    const handleSaveForm = () => {
        let updated;
        if (modal.mode === "add") updated = [...positions, form];
        else { updated = [...positions]; updated[modal.idx] = form; }
        onChange({ ...data, openPositions: updated }); closeModal();
    };
    const handleDelete = (idx) => { if (!confirm("Remove this position?")) return; onChange({ ...data, openPositions: positions.filter((_, i) => i !== idx) }); };
    return (
        <>
            <div className="adm-card">
                <div className="adm-card-title"><IcBriefcase /> Careers Hero</div>
                <div className="adm-field"><label className="adm-label">Hero Title</label><input className="adm-input" value={data.heroTitle} onChange={e => onChange({ ...data, heroTitle: e.target.value })} /></div>
                <div className="adm-field"><label className="adm-label">Hero Description</label><textarea className="adm-textarea" value={data.heroDesc} onChange={e => onChange({ ...data, heroDesc: e.target.value })} /></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div style={{ fontSize: 13, color: "var(--gray4)" }}>{positions.length} open positions</div>
                <button className="btn btn-primary btn-sm" onClick={openAdd}><IcPlus /> Add Position</button>
            </div>
            <div className="adm-card">
                {positions.map((p, i) => (
                    <div className="adm-list-item" key={p.id}>
                        <div style={{ width: 44, height: 44, borderRadius: 8, background: "var(--orange-dim)", border: "1px solid rgba(232,97,26,.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><IcBriefcase /></div>
                        <div className="adm-list-item-info">
                            <div className="adm-list-item-name">{p.title}</div>
                            <div className="adm-list-item-sub">{p.type} · {p.location} · {p.department}</div>
                        </div>
                        <div className="adm-list-item-actions">
                            <button className="btn btn-ghost btn-sm" onClick={() => openEdit(i)}><IcEdit /></button>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(i)}><IcTrash /></button>
                        </div>
                    </div>
                ))}
                {positions.length === 0 && <div style={{ padding: "20px 0", textAlign: "center", color: "var(--gray4)", fontSize: 13 }}>No open positions yet.</div>}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="btn btn-primary" onClick={onSave} disabled={saving}><IcSave /> {saving ? "Saving…" : "Save Careers"}</button>
            </div>
            <Modal open={!!modal} onClose={closeModal} title={modal?.mode === "add" ? "Add Position" : "Edit Position"}>
                {form && (
                    <>
                        <div className="adm-field"><label className="adm-label">Job Title</label><input className="adm-input" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} /></div>
                        <div className="grid-2">
                            <div className="adm-field"><label className="adm-label">Type</label><select className="adm-select" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>{["Full-time", "Part-time", "Contract", "Internship"].map(t => <option key={t}>{t}</option>)}</select></div>
                            <div className="adm-field"><label className="adm-label">Location</label><input className="adm-input" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} /></div>
                        </div>
                        <div className="adm-field"><label className="adm-label">Department</label><input className="adm-input" value={form.department} onChange={e => setForm({ ...form, department: e.target.value })} /></div>
                        <div className="adm-field"><label className="adm-label">Job Description</label><textarea className="adm-textarea" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} /></div>
                        <div className="adm-field"><label className="adm-label">Requirements</label><ChipList items={form.requirements} onChange={v => setForm({ ...form, requirements: v })} placeholder="Add requirement…" /></div>
                        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 8 }}>
                            <button className="btn btn-ghost" onClick={closeModal}>Cancel</button>
                            <button className="btn btn-primary" onClick={handleSaveForm}><IcCheck /> Save Position</button>
                        </div>
                    </>
                )}
            </Modal>
        </>
    );
}

// ─── NAV CONFIG ──────────────────────────────────────────────────────────────
const NAV = [
    { id: "overview", label: "Overview", icon: <IcHome />, group: "GENERAL" },
    { id: "homepage", label: "Homepage", icon: <IcHome />, group: "PAGES" },
    { id: "products", label: "Products", icon: <IcBox />, group: "PAGES" },
    { id: "news", label: "News", icon: <IcNews />, group: "PAGES" },
    { id: "about", label: "About", icon: <IcInfo />, group: "PAGES" },
    { id: "team", label: "Team", icon: <IcUsers />, group: "PAGES" },
    { id: "contact", label: "Contact", icon: <IcMail />, group: "PAGES" },
    { id: "careers", label: "Careers", icon: <IcBriefcase />, group: "PAGES" },
    { id: "credentials", label: "Credentials", icon: <IcLock />, group: "SETTINGS" },
];

const SECTION_TITLES = {
    overview: "Dashboard",
    homepage: "Homepage Editor",
    products: "Products Manager",
    news: "News Manager",
    about: "About Page",
    team: "Team Members",
    contact: "Contact Info",
    careers: "Careers",
    credentials: "Login Credentials",
};

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function AdminPanel() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [active, setActive] = useState("overview");
    const [data, setData] = useState(DEFAULT_DATA);
    const [saving, setSaving] = useState(false);
    const [toast, showToast] = useToast();
    const [fbStatus, setFbStatus] = useState({});

    useEffect(() => {
        if (!loggedIn) return;
        async function tryLoad() {
            const sections = ["homepage", "products", "news", "about", "team", "contact", "careers"];
            for (const section of sections) {
                const fbData = await loadFromFirebase(section);
                if (fbData) {
                    setData(prev => ({ ...prev, ...fbData }));
                    setFbStatus(prev => ({ ...prev, [section]: "live" }));
                } else {
                    setFbStatus(prev => ({ ...prev, [section]: "default" }));
                }
            }
        }
        tryLoad();
    }, [loggedIn]);

    const handleSave = async (section) => {
        setSaving(true);
        try {
            let payload = {};
            if (section === "homepage") payload = { hero: data.hero, stats: data.stats, aboutSection: data.aboutSection };
            else if (section === "products") payload = { products: data.products };
            else if (section === "news") payload = { news: data.news };
            else if (section === "about") payload = { about: data.about };
            else if (section === "team") payload = { team: data.team };
            else if (section === "contact") payload = { contact: data.contact };
            else if (section === "careers") payload = { careers: data.careers };
            await saveToFirebase(section, payload);
            setFbStatus(prev => ({ ...prev, [section]: "live" }));
            showToast(`${SECTION_TITLES[section]} saved to Firebase!`, "success");
        } catch (e) {
            console.error(e);
            showToast("Save failed. Check Firebase config.", "error");
        } finally {
            setSaving(false);
        }
    };

    const handleLogout = () => {
        if (!confirm("Sign out of the admin panel?")) return;
        setLoggedIn(false);
        setActive("overview");
    };

    if (!loggedIn) {
        return (
            <>
                <style>{CSS}</style>
                <LoginScreen onLogin={() => setLoggedIn(true)} />
            </>
        );
    }

    const groups = [...new Set(NAV.map(n => n.group))];

    return (
        <>
            <style>{CSS}</style>
            <div className="adm-wrap">

                {/* SIDEBAR */}
                <aside className="adm-sidebar">
                    <div className="adm-sidebar-logo">
                        <div className="adm-sidebar-logo-name">TOUGHMAN</div>
                        <div className="adm-sidebar-logo-sub">Admin Panel</div>
                    </div>

                    {groups.map(g => (
                        <div key={g}>
                            <div className="adm-sidebar-section">{g}</div>
                            {NAV.filter(n => n.group === g).map(n => (
                                <button
                                    key={n.id}
                                    className={`adm-nav-item ${active === n.id ? "active" : ""}`}
                                    onClick={() => setActive(n.id)}
                                >
                                    {n.icon}
                                    {n.label}
                                    {n.id !== "overview" && n.id !== "credentials" && fbStatus[n.id] === "live" && (
                                        <span style={{ marginLeft: "auto" }}><span className="status-dot live" /></span>
                                    )}
                                    {n.id !== "overview" && n.id !== "credentials" && fbStatus[n.id] === "default" && (
                                        <span style={{ marginLeft: "auto" }}><span className="status-dot default" /></span>
                                    )}
                                </button>
                            ))}
                        </div>
                    ))}

                    <div style={{ marginTop: "auto", padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,.08)" }}>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,.3)", lineHeight: 1.8, marginBottom: 10 }}>
                            <span className="status-dot live" />Live = saved to Firebase<br />
                            <span className="status-dot default" />Gray = using defaults
                        </div>
                        <button className="btn-logout" style={{ width: "100%", justifyContent: "center" }} onClick={handleLogout}>
                            <IcLogout /> Sign Out
                        </button>
                    </div>
                </aside>

                {/* MAIN */}
                <main className="adm-main">
                    <header className="adm-header">
                        <div className="adm-header-title">{SECTION_TITLES[active]}</div>
                        <div className="adm-header-actions">
                            {active !== "credentials" && (
                                <span style={{ fontSize: 12, color: "var(--gray4)", display: "flex", alignItems: "center", gap: 5 }}>
                                    <IcCloud /> Firebase
                                </span>
                            )}
                            {active === "credentials" && (
                                <span style={{ fontSize: 12, color: "var(--gray4)", display: "flex", alignItems: "center", gap: 5 }}>
                                    <IcLock /> Local Storage
                                </span>
                            )}
                        </div>
                    </header>

                    <div className="adm-content">
                        {active === "overview" && <Overview data={data} />}
                        {active === "homepage" && (
                            <HomepageEditor
                                data={{ hero: data.hero, stats: data.stats, aboutSection: data.aboutSection }}
                                onChange={d => setData(prev => ({ ...prev, ...d }))}
                                onSave={() => handleSave("homepage")}
                                saving={saving}
                            />
                        )}
                        {active === "products" && (
                            <ProductsEditor
                                products={data.products}
                                onChange={p => setData(prev => ({ ...prev, products: p }))}
                                onSave={() => handleSave("products")}
                                saving={saving}
                            />
                        )}
                        {active === "news" && (
                            <NewsEditor
                                news={data.news}
                                onChange={n => setData(prev => ({ ...prev, news: n }))}
                                onSave={() => handleSave("news")}
                                saving={saving}
                            />
                        )}
                        {active === "about" && (
                            <AboutEditor
                                data={data.about}
                                onChange={a => setData(prev => ({ ...prev, about: a }))}
                                onSave={() => handleSave("about")}
                                saving={saving}
                            />
                        )}
                        {active === "team" && (
                            <TeamEditor
                                team={data.team}
                                onChange={t => setData(prev => ({ ...prev, team: t }))}
                                onSave={() => handleSave("team")}
                                saving={saving}
                            />
                        )}
                        {active === "contact" && (
                            <ContactEditor
                                data={data.contact}
                                onChange={c => setData(prev => ({ ...prev, contact: c }))}
                                onSave={() => handleSave("contact")}
                                saving={saving}
                            />
                        )}
                        {active === "careers" && (
                            <CareersEditor
                                data={data.careers}
                                onChange={c => setData(prev => ({ ...prev, careers: c }))}
                                onSave={() => handleSave("careers")}
                                saving={saving}
                            />
                        )}
                        {active === "credentials" && (
                            <CredentialsEditor onToast={showToast} />
                        )}
                    </div>
                </main>

            </div>

            {toast && (
                <div className={`toast ${toast.type}`}>
                    {toast.type === "success" ? <IcCheck /> : <IcX />}
                    {toast.msg}
                </div>
            )}
        </>
    );
}