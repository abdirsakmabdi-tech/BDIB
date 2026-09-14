import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const rubik = localFont({
  src: [
    {
      path: "../public/Rubik/Rubik-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../public/Rubik/Rubik-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-rubik",
  display: "swap",
  weight: "300 900",
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
      className={`${rubik.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full bg-white font-sans text-body antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
