import Link from "next/link";
import React from "react";
import { BsBehance, BsDribbble, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="Contact">
      <section className="text-brand-text body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-brand-text">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Feel free to reach out to us for any questions or concerns.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form
              action="https://formspree.io/f/xldeneob"
              method="POST"
              className="flex flex-wrap -m-2"
            >
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="transition-transform duration-300 ease-in-out hover:scale-110 flex mx-auto bg-brand-btn text-brand-bg hover:bg-brand-bg hover:text-brand-text font-bold hover:text-brand-textborder-0 py-2 px-8 focus:outline-none  rounded text-lg">
                  Send Message
                </button>
              </div>

              <div className="p-2 w-full pt-8 mt-8 border-t-2 border-blue-200 text-center">
                <Link href="mailto:hafizrazaahmed42@gmail.com" className="text-blue-500">hafizrazaahmed42@email.com</Link>
               <div className="leading-normal py-3"/>
                <span className="inline-flex">
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
                    className=" ml-3 text-brand-text"
                  >
                    <BsLinkedin className="transition-transform duration-300 ease-in-out hover:scale-110 text-2xl" />
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
