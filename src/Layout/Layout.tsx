"use client";
import { store } from "@/app/redux/store";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export const metadata: Metadata = {
  title: "Home | Blink Basket",
  description: "An amazon clone application for education purpose",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
};

export default Layout;
