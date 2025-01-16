import Image from "next/image";
import React from "react";

type Props = {};

const ExecutiveCard = ({ img, alt, name, position }) => {
  return (
    <div className="flex w-[400px] gap-4 text-[10px]  ">
      <Image src={img} alt={alt} className=" w-[70px]" />
      <div className="flex flex-col justify-end">
        <p className="font-semibold text-[12px]">{name}</p>
        <p className=" italic">{position}</p>
      </div>
    </div>
  );
};

export default ExecutiveCard;
