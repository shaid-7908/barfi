import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Barfi The Food Magician",
  description: "Taste is delicious",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <header>
          <nav>
            <Topbar />
            <Navbar />
          </nav>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
