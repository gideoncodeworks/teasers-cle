import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

// Metadata (for SEO & sharing)
export const metadata = {
  title: "Teasers CLE | Where Anticipation is the Main Course",
  description:
    "Cleveland's immersive dining and nightlife brand — Teasers CLE blends fine cuisine, art, and performance into unforgettable sensory experiences.",
  openGraph: {
    title: "Teasers CLE",
    description: "Where anticipation is the main course.",
    url: "https://teaserscle.netlify.app",
    siteName: "Teasers CLE",
    images: ["/brand/og-image.jpg"],
    locale: "en_US",
    type: "website"
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-black text-white font-sans min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
