import Banner from "@/components/Home/Banner/Banner";
import ProductsCard from "@/components/Products/ProductsCard";

import Container from "@/Container/Container";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home | ecommerce clone",
  description: "An amazon clone application for education purpose",
};


export default function Home() {
  return (
    <Container>
      <Banner />
      <ProductsCard />
    </Container>
  );
}
