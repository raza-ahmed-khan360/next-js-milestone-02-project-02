import Image from "next/image";
import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <div id="About">
      <section className="text-brand-text body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              About Me
            </h2>
            <div className="w-full h-[3px] bg-blue-200"></div>
            <p className="mb-5 mt-2 leading-relaxed">
              I am a dedicated UI/UX Designer, Web developer, and Graphic
              Designer with a passion for creating visually appealing and
              User-friendly Digital experiences. With expertise in wireframing,
              prototyping, and responsive design.
              <br/>
              <br/>
              I focus on blending aesthetics
              with functionality. I stay current with industry trends to deliver
              innovative solutions that meet client goals and delight users.
              Whether collaborating with teams or working independently, I am
              committed to transforming ideas into impactful designs.
            </p>
            <div className="flex justify-center">
            <Link href="/pictures-cv/cv.pdf" target="_blank">
              <button className="inline-flex transition-transform duration-300 ease-in-out hover:scale-110 bg-brand-btn text-brand-bg hover:bg-brand-bg font-bold hover:text-brand-text border-0 py-2 px-6 focus:outline-none rounded text-lg">
                View CV
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
            width={720}
            height={600}
              className="object-cover object-center rounded"
              alt="hero"
              src="/pictures-cv/picture.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
