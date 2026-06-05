/**
 * useSiteData.js
 *
 * Central hook for all website pages.
 *
 * HOW IT WORKS:
 *  1. Returns DEFAULT data immediately — website looks normal right away.
 *  2. In the background, tries to fetch the section from Firestore.
 *  3. If Firestore has saved data → merges it on top of defaults.
 *  4. If Firestore has nothing (or fails) → defaults stay unchanged.
 *
 * This means: until an admin saves a change, the website shows the
 * exact same hardcoded content it always had. Nothing disappears.
 */

import { useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// FIREBASE CONFIG — same as AdminPanel.jsx
// ─────────────────────────────────────────────────────────────────────────────
const firebaseConfig = {
    apiKey: "AIzaSyBkBS1WDoR3due8FnmPP9U-OUV20vPK_oA",
    authDomain: "toughmanwebsite.firebaseapp.com",
    projectId: "toughmanwebsite",
    storageBucket: "toughmanwebsite.firebasestorage.app",
    messagingSenderId: "846884296513",
    appId: "1:846884296513:web:504eb865e3ea046bd573c0",
    measurementId: "G-VE0SC3EPS3"
};

// Singleton — init Firebase once across all hook calls
let _db = null;

async function getDb() {
    if (_db) return _db;
    const { initializeApp, getApps } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
    const { getFirestore } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");
    const app = getApps().length ? getApps()[0] : initializeApp(FIREBASE_CONFIG);
    _db = getFirestore(app);
    return _db;
}

async function fetchSection(section) {
    try {
        const db = await getDb();
        const { doc, getDoc } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");
        const snap = await getDoc(doc(db, "siteContent", section));
        if (snap.exists()) return snap.data();
    } catch (e) {
        // Silent fail — defaults will be used
        console.warn(`[useSiteData] Could not load "${section}" from Firebase:`, e);
    }
    return null;
}

/**
 * usePageData(section, defaults)
 *
 * @param {string} section   - Firestore document ID (e.g. "homepage", "products")
 * @param {object} defaults  - The hardcoded default data for this section
 * @returns {object}         - Merged data (defaults + whatever Firebase has saved)
 *
 * The returned object is always the defaults first.
 * Firebase values only OVERWRITE fields that were actually saved by admin.
 * Fields not saved by admin remain as defaults.
 */
export function usePageData(section, defaults) {
    const [data, setData] = useState(defaults);

    useEffect(() => {
        fetchSection(section).then((firebaseData) => {
            if (!firebaseData) return; // Nothing saved yet → keep defaults

            // Deep merge: firebase data overwrites defaults field by field.
            // Arrays are replaced wholesale (admin saves the full array).
            setData((prev) => ({ ...prev, ...firebaseData }));
        });
    }, [section]);

    return data;
}

/**
 * useProductsData(defaultProducts)
 * Convenience wrapper for the products array.
 */
export function useProductsData(defaultProducts) {
    const data = usePageData("products", { products: defaultProducts });
    // Merge imgUrl from Firebase into the local product objects
    // so local imported images still work as fallback when no Firebase img.
    return data.products.map((fbProd, i) => {
        const local = defaultProducts.find((p) => p.id === fbProd.id) || defaultProducts[i] || {};
        return { ...local, ...fbProd };
    });
}

/**
 * useNewsData(defaultNews)
 * Convenience wrapper for the news array.
 */
export function useNewsData(defaultNews) {
    const data = usePageData("news", { news: defaultNews });
    return data.news;
}

/**
 * useTeamData(defaultTeam)
 */
export function useTeamData(defaultTeam) {
    const data = usePageData("team", { team: defaultTeam });
    return data.team;
}

/**
 * useHomepageData(defaults)
 * Returns { hero, stats, aboutSection }
 */
export function useHomepageData(defaults) {
    return usePageData("homepage", defaults);
}

/**
 * useAboutData(defaults)
 */
export function useAboutData(defaults) {
    return usePageData("about", defaults);
}

/**
 * useContactData(defaults)
 */
export function useContactData(defaults) {
    return usePageData("contact", defaults);
}

/**
 * useCareersData(defaults)
 */
export function useCareersData(defaults) {
    return usePageData("careers", defaults);
}