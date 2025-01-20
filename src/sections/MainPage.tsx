"use client";
import React from "react";
import Nav from "../components/Nav";
import Image from "next/image";
import landingChildren from "../../public/landingchildren.svg";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div className="relative banner lg:h-[80vh] h-fit w-screen">
      <div>
        <Nav />
      </div>
      <div className="grid md:grid-cols-2 gap-x-20  px-10  p-10  md:text-start text-center">
        <div className="gap-4">
          <h1 className="lg:text-[50px] text-[30px] font-normal">
            {" "}
            <span className="text-[#957866] ">D'Care </span> For Humanity
            <div>Cares.</div>
          </h1>
          <h3>VULNERABLE NO MORE</h3>
          <p>
            Creating a community where there is safety for every gender,
            vulnerable, disabled people, and children, by training and
            empowering them through skills acquisition.
          </p>
        </div>
        <div className="md:absolute hidden lg:block md:top-0 md:right-[25px] ">
          <Image
            src={landingChildren}
            alt="Landing Children"
            className="h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
