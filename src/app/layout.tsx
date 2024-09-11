import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

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
      <body className={"font-bodyFont"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
