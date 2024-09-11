import Banner from "@/components/Home/Banner/Banner";
import ProductsCard from "@/components/Products/ProductsCard";
import Container from "@/Container/Container";
import Layout from "@/Layout/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Blink Basket",
  description: "An amazon clone application for education purpose",
};

export default function Home() {
  return (
    <Layout>
      <Container>
        <Banner />
        <ProductsCard />
      </Container>
    </Layout>
  );
}
