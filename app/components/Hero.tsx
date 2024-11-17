"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div>
      <section className="text-brand-text body-font bg-fixed bg-cover bg-center custom-image">
        <div className="container mx-auto flex px-5 py-1 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/pictures-cv/profile.png"
              width={720}
              height={600}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4  text-gray-900 font-bold">
              I am
              <br className="hidden lg:inline-block" />
             <i> <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "UI/UX Designer",
                    "Graphic Designer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              /></i>
            </h1>
            <div className="w-full h-[3px] bg-blue-200"></div>
            <p className="mb-8 mt-2 leading-relaxed">
              As a versatile designer and developer, I specialize in Graphic
              Design, Web Development, and UI/UX Design. Let’s create visually
              captivating, user-centered, and responsive solutions that make an
              impact.
            </p>
            <div className="flex justify-center">
              <Link href={"#Contact"}>
                <button className="inline-flex bg-brand-btn text-brand-bg hover:bg-brand-bg font-bold hover:text-brand-text transition-transform duration-300 ease-in-out hover:scale-110 border-0 py-2 px-6 focus:outline-none rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
