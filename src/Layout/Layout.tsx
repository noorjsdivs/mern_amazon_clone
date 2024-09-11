"use client";
import { store } from "@/app/redux/store";
import { Metadata } from "next";
import { Provider } from "react-redux";

export const metadata: Metadata = {
  title: "Home | Blink Basket",
  description: "An amazon clone application for education purpose",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Layout;
