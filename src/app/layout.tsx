import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopHeader from "@/components/Home/Header/TopHeader";
import BottomHeader from "@/components/Home/Header/BottomHeader";
import Footer from "@/components/Home/Footer";
import Layout from "@/Layout/Layout";
import { Toaster } from "react-hot-toast";
import { ScrollRestoration } from "next-scroll-restoration";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Blink Basket | Your shopping center",
  description: "An amazon clone application for education purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollRestoration />
        <Layout>
          <TopHeader />
          <BottomHeader />
          {children}
          <Footer />
          <Toaster position="bottom-right" />
        </Layout>
      </body>
    </html>
  );
}
