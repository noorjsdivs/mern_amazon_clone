"use client";
import React from "react";
import { Provider } from "react-redux";
import store, {persistor} from "@/Redux/Store";
import Session from "./Session";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "@/components/persist/Loading";

interface Props {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: Props) => {
  return (
    <Session>
      <Provider store={store}>
        <PersistGate loading={<Loading/>} persistor = {persistor}>{children}</PersistGate></Provider>
    </Session>
  );
};

export default StoreProvider;
