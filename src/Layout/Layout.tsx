"use client";
import { persistor, store } from "@/app/redux/store";
import Loading from "@/components/Home/Loading";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export const metadata: Metadata = {
  title: "Home | Blink Basket",
  description: "An amazon clone application for education purpose",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
};

export default Layout;
