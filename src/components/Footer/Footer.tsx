import React from "react";
import Container from "../Container";
import { footerData } from "./FooterData";
import FooterMiddleList from "./FooterMiddleList";

export default function Footer() {
  return (
    <div className="bg-amazonLight py-5 text-white">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {footerData?.map((item) => (
          <FooterMiddleList 
            key={item?._id}
            title={item?.title}
            listItem={item?.listItem}
          />
        ))}
      </Container>
    </div>
  );
}
