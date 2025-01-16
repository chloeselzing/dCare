'use client'
import React from "react";
import Link from 'next/link';

type CustomLinkProps = {
    href: string;
    title: string;
  }
const CustomLink = ({ href, title }:CustomLinkProps) => {
  return (
    <Link href={href} className="text-[15px] lg:text-[15px] h-[50px] lg:h-auto md:h-auto font-medium md:text-[.7rem] w-[100px] md:w-[50px] lg:w-[80px] " >
      {title}
    </Link>
  );
};

export default CustomLink;