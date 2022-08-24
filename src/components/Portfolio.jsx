import React from "react";
import tourist from "../assets/portfolio/tourist.png";
import carLeader from "../assets/portfolio/carLeader.png";
import docfind from "../assets/portfolio/docfind.png";
import triper from "../assets/portfolio/triper.png";
import itSchool from "../assets/portfolio/itSchool.png";
import portfolio from "../assets/portfolio/portfolio.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: tourist,
      name: "Travel Website",
      scroll: "fade-right",
      liveLink: "https://tourist73.netlify.app/",
      code: "https://github.com/Rakibhasan-programmer/tourist",
    },
    {
      id: 2,
      src: carLeader,
      name: "Car selling Website",
      scroll: "fade-down",
      liveLink: "https://youthful-babbage-d34eb6.netlify.app/",
      code: "https://github.com/Rakibhasan-programmer/car-selling-website",
    },
    {
      id: 3,
      src: docfind,
      name: "Hospital Website",
      scroll: "fade-left",
      liveLink: "https://docfind-healthcare.netlify.app/",
      code: "https://github.com/Rakibhasan-programmer/healthcare-website",
    },
    {
      id: 4,
      src: itSchool,
      name: "Course Selling Website",
      scroll: "fade-right",
      liveLink: "https://it-school73.netlify.app/",
      code: "https://github.com/Rakibhasan-programmer/course-selling-website",
    },
    {
      id: 5,
      src: triper,
      name: "Travel Website fullstack",
      scroll: "fade-up",
      liveLink: "https://triper-12fcb.web.app/",
      code: "https://github.com/Rakibhasan-programmer/tourism-website",
    },
    {
      id: 6,
      src: portfolio,
      name: "Fully Functional Portfolio",
      scroll: "fade-left",
      liveLink: "https://rakibulhaasan.netlify.app/",
      code: "https://github.com/Rakibhasan-programmer/portfolio",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, liveLink, code, name, scroll }) => (
            <div
              data-aos={scroll}
              data-aos-easing="ease-in-out"
              data-aos-duration="1500"
              key={id}
              className="shadow-md shadow-sky-500 rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <h5 className="text-2xl text-bold pb-3 pt-5 text-gray-400 ml-3">
                {name}
              </h5>
              <div className="flex items-center justify-center pb-4">
                <button className="w-1/2 rounded border-2 text-cyan-500 border-sky-500 px-3 py-1 m-4 duration-200 hover:scale-105">
                  <a href={liveLink} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 m-4 border-2 rounded bg-cyan-500 border-sky-500 px-3 py-1 duration-200 hover:scale-105 text-black">
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
