"use client";
import { Provider } from "react-redux";
import { persiststore, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persiststore}>
          {children}
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
};

export default Layout;
