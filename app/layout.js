import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Team from "./_components/Team";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "UC GastroBaguio-Consultation",
  description: "UC GastroBaguio-Consultation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon"  href="/uclogonew.png" />
      </head>
      <body className={outfit.className}>
        <div className="md:px-1">
          <Header />
          {children}
          <Team />
          <Footer />
          
        </div>
      </body>
    </html>
  );
}
