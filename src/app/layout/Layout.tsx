"use client";
import { Provider } from "react-redux";
import { persiststore, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "@/components/Loading";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persiststore}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Layout;
