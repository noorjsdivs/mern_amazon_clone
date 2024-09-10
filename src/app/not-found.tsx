
import { notFoundImage } from "@/assets";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const NotFoundPage = () => {
      return (
            <Container className="flex flex-col gap-2 items-center justify-center py-10">
                  <Image src={notFoundImage} alt="notFoundImage" className="w-60" />
                  <p className="text-2xl font-semibold">Oops! Page not found</p>
                  <p className="text-sm text-gray-500 max-w-80 text-center">
                        Whoops, this is embarrassing. Looks like the page you were looking for
                        wasn't found.
                  </p>
                  <Link href={"/"}>
                        <button className="bg-yellow-500 text-gray-200 py-2 px-10">Back to Home</button>
                  </Link>
            </Container>
      );
};

export default NotFoundPage;