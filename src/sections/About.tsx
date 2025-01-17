"use client";

import React from "react";
import { CardData } from "../data/CardData";
import * as Components from "../components";
import Image from "next/image";
import director from "../../public/director.png";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="about">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
        {CardData.map((card, index) => (
          <Components.Card key={index} title={card.title} text={card.text} />
        ))}
      </div>
      <div className="md:flex md:justify-between grid bg-[#7e6d51] max-h-fit py-10 px-10 text-black">
        <div className="flex flex-col gap-4 md:max-w-[50%] p-10 text-center md:text-start">
          <h3 className="text-[30px] font-semibold">
            <span className="font-bold">About </span>
            D'Care for Humanity Centre.
          </h3>
          <p>
            D'Care for humanity Centre is a non-profit organization dedicated to
            fostering a safe and inclusive community for all. Driven by a deep
            concern for social justice, the Centre empowers individuals and
            communities through skills training, education, and access to
            innovative solutions. Founded on the belief in collective action,
            D'Care for Humanity Centre invites everyone to join their mission in
            creating a world where everyone feels valued and respected.
          </p>
        </div>
        <div className="  hidden md:flex md:flex-col  items-center gap-2 w-[50%] justify-center text-white">
          <Image
            src={director}
            alt="Executive director"
            className="w-[150px] h-[150px] rounded-full "
          />
          <h4 className="text-[20px] font-semibold">Beelong Duwong</h4>
          <p className="italic">Executive Director</p>
        </div>
      </div>
    </section>
  );
};

export default About;
