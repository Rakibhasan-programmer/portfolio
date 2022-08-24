import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Loader from "./components/loader/Loader";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import 'aos/dist/aos.css';
import Aos from "aos";

export default function App() {
  const [loader, setLoader] = useState(true);

  useEffect(function () {
    Aos.init();
    setTimeout(function () {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Home />
          <SocialLinks />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

