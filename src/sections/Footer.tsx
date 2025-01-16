import React from "react";
import footerLogo from "../../public/footerlogo.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-[#1e1e1e] grid  p-10 text-white gap-8">
      <div className="grid grid-cols-4 ">
        <div className="grid">
          <Image src={footerLogo} alt="logo" />
        </div>
        <div className="grid">
          <h4>INFO</h4>
          <Link href="#about">About us</Link>
          <Link href="#customer">Customers</Link>
          <Link href="#contact">Contacts</Link>
        </div>
        <div className="grid">
          <h4>CONTACT US</h4>
          <Link href="tel:+23490659084380">+23490659084380</Link>
          <Link href="mailto:dcareforhumanity@gmail.com">D’Care@gmail.com</Link>
        </div>
        <div className="grid">
          <h4>FIND US</h4>
          <p>Jos</p>
          <p>Everyday 10am to 8pm</p>
        </div>
      </div>
      <div className="flex justify-between text-[#4b4b4b] pt-[50px] text-[12px]">
        <div>© 2024 — Copyright</div>
        <div>Privacy</div>
      </div>
    </div>
  );
};

export default Footer;
