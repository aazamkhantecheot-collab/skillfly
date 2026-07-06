import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Skill Fly – Maximizing Human Potential for Organisation Growth",
  description: "Skillfly HR Solutions offers expert HR consulting, talent acquisition, and workforce planning to boost operational efficiency and meet evolving business needs.",
  keywords: ["HR Solutions", "Talent Acquisition", "HR Consulting", "Skill Fly", "Workforce Planning"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: "1 0 auto", paddingTop: "0" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
