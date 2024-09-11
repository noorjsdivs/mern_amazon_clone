import CarouselBanner from "@/components/CarouselBanner";
import { Metadata } from "next";


export const metadata:Metadata={
title: "Home | Amazon 2.0"
}

export default function Home() {
  return (
    <main>
      <CarouselBanner/>
    </main>
  );
}
