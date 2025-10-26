import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Teasers Cleveland | Where Anticipation is the Main Course",
  description: "Cleveland's premier experiential dining destination. Immersive events blending exquisite cuisine, curated art, and theatrical performance.",
  keywords: ["Cleveland dining", "experiential dining", "immersive events", "nightlife Cleveland", "fine dining", "Cleveland restaurants"],
  openGraph: {
    title: "Teasers Cleveland",
    description: "Where anticipation is the main course.",
    url: "https://teaserscle.com",
    siteName: "Teasers Cleveland",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <NavBar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
