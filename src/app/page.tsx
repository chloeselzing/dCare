"use client";
import React from "react";
import MainPage from "../sections/MainPage";
import About from "../sections/About";
import Gallery from "../sections/Gallery";
import Executives from "../sections/Executives";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <MainPage />
      <About />
      <Gallery />
      <Executives />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
