import "./../styles/globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/navbar";
const montserrat = Montserrat({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <div style={montserrat.style}>
      <Navbar />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </div>
  );
}

