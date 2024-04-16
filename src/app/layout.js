import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Resurrection Miracle Center Church - Entebbe, Uganda",
  description: `We are a vibrant and expanding church community that steadfastly
  believes in the ongoing manifestation of divine miracles and wonders
  in the lives of those who earnestly seek the divine presence. Our
  congregation is dedicated to fostering an environment of faith and
  hope, where individuals are encouraged to cultivate a deeper
  relationship with God. We invite you to join us and experience the
  transformative power of faith and spiritual enrichment.`,
  icons: {
    icon: "/iconRMCCbgTrasnp.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
 
      <body suppressHydrationWarning={true} className={inter.className}>
   
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
