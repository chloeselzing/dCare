"use client";

import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import { carouselData } from "../data/CarouselData";
import Carousel from "../components/ImageCarousel";

type Props = {};

const Gallery = (props: Props) => {
  return (
    <section id="gallery" className="grid p-10">
      <div className=" block">
        {" "}
        {carouselData.map((carousel) => (
          <div className="grid md:grid-cols-2 ">
          <div key={carousel.id} className="mb-10">
            <Carousel images={carousel.images} />
          </div>
          <div key={carousel.id} className="mb-10 bg-[#494134] h-[300px] rounded-lg text-center p-5 flex flex-col justify-center text-white">
          <h2 className="font-semibold"> {carousel.title}</h2>
          <p> {carousel.text}</p>
        </div>
        </div>
        ))}
      </div>
      <div>

        {/* {carouselData.map((carousel) => (
          
        ))} */}
      </div>
    </section>
  );
};

export default Gallery;
