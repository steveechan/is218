import "./../styles/globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/navbar";
import { appWithTranslation } from "next-i18next";
import Footer from "../components/footer";
import { GoogleAnalytics } from "nextjs-google-analytics";
import CookieConsent from "../components/footer/cookie-consent";
import { useState } from "react";
import { useEffect } from "react";
const montserrat = Montserrat({ subsets: ["latin"] });
function App({ Component, pageProps }) {
    const [consent, setConsent] = useState("granted");

    useEffect(() => {
        if (window != undefined && localStorage.getItem("consent") != null) {
            setConsent(localStorage.getItem("consent"));
        }
    }, [])

    return (
        <>
            <GoogleAnalytics gaMeasurementId="G-B3NJKFYVBX" defaultConsent={consent} />
            <div style={montserrat.style}>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </div>
            <CookieConsent />
        </>
    );
}

export default appWithTranslation(App);

