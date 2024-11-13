import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div id="Project">
      <section className="text-brand-text body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
              Projects
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Here’s a collection of my work across Graphic Design, Web
              Development, and UI/UX Design. Each project reflects my commitment
              to creating visually engaging, user-friendly, and technically
              sound solutions. From concept to completion, I focus on delivering
              results that exceed expectations and drive results.
            </p>
          </div>
          <div className="flex flex-wrap -m-8">
            {/* Project */}
            <div className="transition-transform duration-300 ease-in-out hover:scale-110 lg:w-1/2 sm:w-1/2 p-6 cursor-pointer">
              <div className="flex relative">
                <Image
                  width={600}
                  height={360}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src="/pictures-cv/resume.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h3 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Static Resume Builder
                  </h3>
                  <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                    RESUME
                  </h2>
                  <p className="leading-relaxed">
                    An Static Resume Builder that helps you create a resume in
                    minutes.
                  </p>
                  <Link
                    href="https://raza-ahmeds-static-responsive-resume.vercel.app"
                    target="_blank"
                  >
                    <p className=" leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="transition-transform duration-300 ease-in-out hover:scale-110 lg:w-1/2 sm:w-1/2 p-6 cursor-pointer">
              <div className="flex relative">
                <Image
                  width={600}
                  height={360}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src="/pictures-cv/editable-resume.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h3 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Dynamic Resume Builder
                  </h3>
                  <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                    RESUME BUILDER
                  </h2>
                  <p className="leading-relaxed">
                    A Dynamic Resume Builder that helps you create a resume in
                    minutes.
                  </p>
                  <Link
                    href="https://resume-builder-editable-downloadable.vercel.app"
                    target="_blank"
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="transition-transform duration-300 ease-in-out hover:scale-110 lg:w-1/2 sm:w-1/2 p-6 cursor-pointer">
              <div className="flex relative">
                <Image
                  width={600}
                  height={360}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src="/pictures-cv/Hero-section.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h3 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    DashSlack Hero Section
                  </h3>
                  <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                    DASHSLACK DESIGN
                  </h2>
                  <p className="leading-relaxed">
                    DashSlack Design is a Hero Section perfect for inspiration
                    for newbies.
                  </p>
                  <Link
                    href="https://dribbble.com/shots/24833207-SaaS-Product-Design-Landing-Home-Page"
                    target="_blank"
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="transition-transform duration-300 ease-in-out hover:scale-110 lg:w-1/2 sm:w-1/2 p-6 cursor-pointer">
              <div className="flex relative">
                <Image
                  width={600}
                  height={360}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src="/pictures-cv/full-page.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h3 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Full Page UI Saas Design Idea
                  </h3>
                  <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                    SaaS Design
                  </h2>
                  <p className="leading-relaxed">
                    It help begginers to inspired in UI SaaS design, quick idea
                    to jump into design.
                  </p>
                  <Link
                    href="https://dribbble.com/shots/25153273-Full-Page-Cloudify-UI-UX-SaaS-Design-Idea"
                    target="_blank"
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
