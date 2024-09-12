"use client";
import React from "react";
import { Provider } from "react-redux";
import store, {persistor} from "@/Redux/Store";
import Session from "./Session";
import { PersistGate } from "redux-persist/integration/react";

interface Props {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: Props) => {
  return (
    <Session>
      <Provider store={store}>
        <PersistGate loading={'loading...'} persistor = {persistor}>{children}</PersistGate></Provider>
    </Session>
  );
};

export default StoreProvider;
