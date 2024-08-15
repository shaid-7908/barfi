
import "./globals.css";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Barfi The Food Magician",
  description: "Taste is delicious",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">  
      <body >
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
