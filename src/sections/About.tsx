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
      <div className="grid grid-cols-3 gap-4 ">
        {CardData.map((card, index) => (
          <Components.Card key={index} title={card.title} text={card.text} />
        ))}
      </div>
      <div className="flex justify-between bg-[#8e826c] max-h-fit py-10 px-10 text-white">
        <div className="flex flex-col gap-4 max-w-[50%]">
          <h3 className="text-[20px] font-semibold">
            D'Care for Humanity Centre
          </h3>
          <p>
            D'Care for Humanity Centre is a non-profit organization that strives
            to create a community where safety and inclusivity are paramount for
            all individuals, regardless of gender, vulnerability, disability, or
            age. We believe in empowering individuals and transforming
            disadvantaged communities through comprehensive programs that
            encompass skills acquisition, training, and exposure to
            life-changing innovations. Our mission stems from a deep-seated
            concern for the injustices and inequalities prevalent in the world.
            Growing up, I was profoundly disturbed by the widespread
            vulnerability and suffering, often concealed from plain sight. This
            realization ignited a fervent desire within me to make a tangible
            difference. I came to understand that building a more just and
            compassionate society necessitates collective action and unwavering
            dedication. Driven by this conviction, I founded D'Care for Humanity
            Centre – a beacon of hope and a catalyst for positive change. We
            invite you to join us on this transformative journey towards a world
            where every individual feels valued, heard, and respected. I hope
            this combined version effectively conveys the essence of D'Care for
            Humanity Centre and its commitment to creating a more equitable and
            inclusive world.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 w-[50%] justify-center">
          <Image
            src={director}
            alt="Executive director"
            className="w-[200px] h-[200px] rounded-full"
          />
          <h4 className="text-[20px] font-semibold">Beelong Duwong</h4>
          <p>Executive Director</p>
        </div>
      </div>
    </section>
  );
};

export default About;
