import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div id="Testimonials" className="bg-brand-bg">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-center text-2xl font-bold title-font mb-20 text-gray-900">
            Words from My Clients
            </h1>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <Image
                    width={500}
                    height={500}
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/pictures-cv/testimonial1.jpeg"
                />
                <p className="leading-relaxed">
                  "Working with Raza was a game-changer for our brand. His
                  designs brought our vision to life, making our brand stand out
                  with a professional and eye-catching look. His attention to
                  detail and creativity are exceptional, and the feedback from
                  our customers has been amazing!"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-blue-200 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-md">
                    Sarah Johnson
                </h2>
                <p className="text-gray-500">Marketing Manager at Creative Co.</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <Image
                    width={500}
                    height={500}
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/pictures-cv/testimonial2.jpeg"
                />
                <p className="leading-relaxed">
                  "Raza built a website for my business that exceeded my
                  expectations. The site is sleek, easy to navigate, and looks
                  fantastic on all devices. His dedication to creating a
                  functional yet beautiful site has truly elevated our online
                  presence. I couldn’t be happier!"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-blue-200 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-md">
                 Emily Roberts
                </h2>
                <p className="text-gray-500">Owner of Green Earth Boutique</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <Image
                    width={500}
                    height={500}
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/pictures-cv/testimonial3.jpeg"
                />
                <p className="leading-relaxed">
                  "The UI/UX design Raza created for our app was phenomenal. He
                  took the time to understand our users and crafted a seamless
                  experience that’s both intuitive and visually appealing. Our
                  users love the new design, and our app engagement has
                  significantly improved."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-blue-200 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-md">
                  Olivia Martinez
                </h2>
                <p className="text-gray-500">Product Manager at Fintech Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
