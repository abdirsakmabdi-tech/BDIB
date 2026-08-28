import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Puntland Development & Investment Bank",
  description:
    "Transforming Puntland's Productive Sectors — Where Investment Meets Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full bg-white font-sans text-body antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
