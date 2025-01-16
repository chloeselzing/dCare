"use client";
import React from "react";
import Nav from "../components/Nav";
import Image from "next/image";
import landingChildren from '../../public/landingchildren.svg'

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div className="relative banner h-[80vh] w-screen" >
      <div>
        <Nav />
      </div>
      <div className="grid grid-cols-2 gap-x-20 px-10 ">
        <div>
          <h1 className="text-[50px] font-normal">
            {" "}
            <span className="text-[#957866] ">D'Care </span> For Humanity
            <div>Cares.</div>
          </h1>
          <h3>VULNERABLE NO MORE</h3>
          <p>
            Creating a community where there is safety for every gender,
            vulnerable, disabled people, and children, by training and empowering
            them through skills acquisition.
          </p>
        </div>
        <div className="absolute top-0 right-[25px]">
          <Image src={landingChildren} alt="Landing Children" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
