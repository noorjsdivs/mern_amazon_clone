import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import MainHeader from "@/components/MainHeader";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

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
  title: "Amazon Clone | Your shopping center",
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
        <Layout>
          <MainHeader />
          {children}
          <Footer />
          <Toaster
            position="top-center"
            reverseOrder={false}
          // toastOptions={{
          //   style: {
          //     background: "#000000",
          //     color: "#ffffff",
          //   },
          // }}
          />
        </Layout>
      </body>
    </html>
  );
}
