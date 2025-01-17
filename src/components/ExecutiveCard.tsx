import Image from "next/image";
import React from "react";

type Props = {};

const ExecutiveCard = ({ img, alt, name, position }) => {
  return (
    <div className="md:flex md:w-[400px] md:gap-4 text-[10px] w-[200px] flex flex-col justify-center items-center text-center">
      <Image src={img} alt={alt} className=" w-[70px]" />
      <div className="md:flex md:flex-col justify-end">
        <p className="font-semibold text-[12px]">{name}</p>
        <p className=" italic">{position}</p>
      </div>
    </div>
  );
};

export default ExecutiveCard;
