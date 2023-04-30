import "./../styles/globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/navbar";
import { appWithTranslation } from "next-i18next";
import Footer from "../components/footer";
const montserrat = Montserrat({ subsets: ["latin"] });
function App({ Component, pageProps }) {
    return (
        <div style={montserrat.style}>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default appWithTranslation(App);

