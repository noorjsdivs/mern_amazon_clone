import Link from "next/link";
import React from "react";
import Container from "../Container";

const Footer = () => {
  return (
    <div className="bg-secondary">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white">
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-bold text-2xl mb-2">Got to know us</h1>
            <Link
              href={"/career"}
              className="text-gray-400 hover:text-gray-300"
            >
              Carrers
            </Link>
            <Link href={"/blog"} className="text-gray-400 hover:text-gray-300">
              Blog
            </Link>
            <Link href={"/about"} className="text-gray-400 hover:text-gray-300">
              About Amazon
            </Link>
            <Link
              href={"/investor"}
              className="text-gray-400 hover:text-gray-300"
            >
              Investor Relations
            </Link>
            <Link
              href={"/devices"}
              className="text-gray-400 hover:text-gray-300"
            >
              Amazon devices
            </Link>
            <Link
              href={"/science"}
              className="text-gray-400 hover:text-gray-300"
            >
              Amazon Science
            </Link>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-bold text-2xl mb-2">Make money with us</h1>
            <Link
              href={"/career"}
              className="text-gray-400 hover:text-gray-300"
            >
              Carrers
            </Link>
            <Link href={"/blog"} className="text-gray-400 hover:text-gray-300">
              Blog
            </Link>
            <Link href={"/about"} className="text-gray-400 hover:text-gray-300">
              About Amazon
            </Link>
            <Link
              href={"/investor"}
              className="text-gray-400 hover:text-gray-300"
            >
              Investor Relations
            </Link>
            <Link
              href={"/devices"}
              className="text-gray-400 hover:text-gray-300"
            >
              Amazon devices
            </Link>
            <Link
              href={"/science"}
              className="text-gray-400 hover:text-gray-300"
            >
              Amazon Science
            </Link>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-bold text-2xl mb-2">Amazon payment products</h1>
            <Link
              href={"/career"}
              className="text-gray-400 hover:text-gray-300"
            >
              Carrers
            </Link>
            <Link href={"/blog"} className="text-gray-400 hover:text-gray-300">
              Blog
            </Link>
            <Link href={"/about"} className="text-gray-400 hover:text-gray-300">
              About Amazon
            </Link>
            <Link
              href={"/investor"}
              className="text-gray-400 hover:text-gray-300"
            >
              Investor Relations
            </Link>
            <Link
              href={"/devices"}
              className="text-gray-400 hover:text-gray-300"
            >
              Amazon devices
            </Link>
            <Link
              href={"/science"}
              className="text-gray-400 hover:text-gray-300"
            >
              Amazon Science
            </Link>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-bold text-2xl mb-2">Let Us help you</h1>
            <Link
              href={"/career"}
              className="text-gray-400 hover:text-gray-300"
            >
              Carrers
            </Link>
            <Link href={"/blog"} className="text-gray-400 hover:text-gray-300">
              Blog
            </Link>
            <Link href={"/about"} className="text-gray-400 hover:text-gray-300">
              About Amazon
            </Link>
            <Link
              href={"/investor"}
              className="text-gray-400 hover:text-gray-300"
            >
              Investor Relations
            </Link>
            <Link
              href={"/devices"}
              className="text-gray-400 hover:text-gray-300"
            >
              Amazon devices
            </Link>
            <Link
              href={"/science"}
              className="text-gray-400 hover:text-gray-300"
            >
              Amazon Science
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
