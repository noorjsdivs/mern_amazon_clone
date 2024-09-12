"use client";
import Loading from "@/app/product/[id]/loading";
import { persistor, store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

interface Props {
  children: React.ReactNode;
}

const LayOut = ({ children }: Props) => {
  return (
    <SessionProvider>
        <PersistGate loading={<Loading/>} persistor={persistor}>
        <Provider store={store}>{children}</Provider>

        </PersistGate>
     
  
    </SessionProvider>
  );
};

export default LayOut;
