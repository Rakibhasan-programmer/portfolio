import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/07861f69-fc91-4779-8de8-415ad0bb132a"
            method="POST"
            className=" flex flex-col w-full md:w-3/4"
          >
            <input
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
              data-aos-duration="1500"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-gray-700 rounded-md text-white focus:outline-none focus:border-sky-500" required
            />
            <input
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
              data-aos-duration="1500"
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 border-gray-700 rounded-md text-white focus:outline-none focus:border-sky-500" required
            />
            <textarea
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
              data-aos-duration="1500"
              name="message"
              placeholder="Your message...."
              rows="8"
              className="p-2 bg-transparent border-2 border-gray-700 rounded-md text-white focus:outline-none focus:border-sky-500" required
            ></textarea>

            <button data-aos="zoom-out" data-aos-easing="ease-in-out"
              data-aos-duration="1500" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
