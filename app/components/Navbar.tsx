import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineCloudDownload } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="bg-brand-section/50 backdrop-blur-sm z-50 sticky top-0 font-semibold">
      <header className="text-brand-text body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Image
              width={50}
              height={50}
              alt="logo"
              src={"/pictures-cv/logo.png"}
              className="rounded-full"
            />
            <span className="ml-3 text-xl font-black ">Raza Ahmed</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href={"/"}
              className="mr-5 hover:text-blue-600 transition-transform duration-300 ease-in-out hover:scale-110"
            >
              Home
            </Link>
            <Link
              href={"#Project"}
              className="mr-5 hover:text-blue-600 transition-transform duration-300 ease-in-out hover:scale-110"
            >
              Projects
            </Link>
            <Link
              href={"#Skills"}
              className="mr-5 hover:text-blue-600 transition-transform duration-300 ease-in-out hover:scale-110"
            >
              Skills
            </Link>
            <Link
              href={"#About"}
              className="mr-5 hover:text-blue-600 transition-transform duration-300 ease-in-out hover:scale-110"
            >
              About
            </Link>
            <Link
              href={"#Testimonials"}
              className="mr-5 hover:text-blue-600 transition-transform duration-300 ease-in-out hover:scale-110"
            >
              Reviews
            </Link>
            <Link
              href={"#Contact"}
              className="mr-5 hover:text-blue-600 transition-transform duration-300 ease-in-out hover:scale-110"
            >
              Contact
            </Link>
          </nav>
          <Link href="/pictures-cv/cv.pdf" target="_blank">
            <button className="inline-flex items-center transition-transform duration-300 ease-in-out hover:scale-110 border-0 py-1 px-3 bg-brand-btn text-brand-bg focus:outline-none hover:bg-brand-bg  hover:text-brand-text rounded text-base mt-4 md:mt-0">
              Download CV
              <AiOutlineCloudDownload className="text-xl ml-2" />
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
