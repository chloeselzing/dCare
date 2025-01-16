"use client";
import React from "react";
import { ExecutiveData } from "../data/ExecutiveData";
import ExecutiveCard from "../components/ExecutiveCard";
import e9 from "../../public/e9.svg";
import e1 from "../../public/e1.svg";
import Image from "next/image";

type Props = {};

const Executives = (props: Props) => {
  return (
    <div className="executives  flex flex-col justify-center items-center " id="executives">
      <h2 className=" text-center font-bold text-white py-8 w-full bg-[#494134]">OUR PEOPLE</h2>
      <div className="grid  place-items-center py-10 bg-[#1d1a148f] rounded-md text-white">
        <div className="grid text-center  place-items-center w-[450px] text-[10px] ">
          <Image src={e1} alt='Executive Director' className=" w-[70px]" />
          <div className="flex flex-col justify-end">
            <p className="font-semibold text-[12px]">Beelong Duwong</p>
            <p className=" italic">Executive Director</p>
          </div>
        </div>
        <div className="grid grid-cols-2  gap-6 p-10">
          {ExecutiveData.map((executive) => (
            <div key={executive.id}>
              <ExecutiveCard
                img={executive.image}
                name={executive.name}
                position={executive.position}
                alt={executive.name}
              />
            </div>
          ))}
        </div>
        <div className="grid text-center  place-items-center w-[450px] text-[10px] ">
          <Image src={e9} alt='Executive Director' className=" w-[70px]" />
          <div className="flex flex-col justify-end">
            <p className="font-semibold text-[12px]">Wisdom Pam</p>
            <p className=" italic">Grant and talent coordinator</p>
          </div>
        </div>

      </div>
      <h2 className=" text-center font-bold text-white py-8 w-full bg-[#494134]"></h2>

    </div>
  );
};

export default Executives;
