import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBehance, BsDribbble, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-brand-section">
      <footer className="text-brand-text body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              alt="profile"
              width={60}
              height={60}
              src={"/pictures-cv/logo.png"}
              className="rounded-full"
            />
            <span className="ml-3 text-xl font-black">Raza Ahmed</span>
          </Link>
          <p className="text-sm text-gray-00 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">
            © 2024 Raza Ahmed
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              href="https://dribbble.com/razaahmed321"
              target="_blank"
              className="text-brand-text"
            >
              <BsDribbble className="transition-transform duration-300 ease-in-out hover:scale-110 text-2xl" />
            </Link>

            <Link
              href="https://www.behance.net/hafizrazaahmed"
              target="_blank"
              className=" ml-3 text-brand-text"
            >
              <BsBehance className="transition-transform duration-300 ease-in-out hover:scale-110 text-2xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/raza-ahmed-a39886290/"
              target="_blank"
              className="ml-3 text-brand-text transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <BsLinkedin className="text-2xl" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
