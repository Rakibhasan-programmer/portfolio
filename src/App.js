import React from 'react'
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";


export default function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    window.addEventListener('load', function(){
      setTimeout(() => {
        setLoader(false);
      }, 5000);
    })
  })
  return (
    <>
    {
      loader ? <Loader /> :
      <>
        <Navbar />
        <Home />
        <SocialLinks />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </>
    }
    
    </>
  )
}


