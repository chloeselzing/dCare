"use client";
import Image from "next/image";
import contacta from "../../public/contactanimation.svg";
import React from "react";
import Icon from "../components/Icon";
import { CiFacebook, CiMail, CiPhone } from "react-icons/ci";
import {
  IoBulbOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
} from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="md:flex " id="contact">
      <div className="md:w-1/3 hidden bg-[#978361] md:flex content-center justify-center justify-items-center">
        <Image src={contacta} alt="contact image" className="" />
      </div>
      <div className="md:w-2/3 contactbackground gap-4 flex flex-col p-20 justify-center  ">
        <h3 className="text-black text-center text-[25px] font-medium">
          <span className="text-[#957866]">Contact</span> us
        </h3>
        <div className="flex gap-4 items-center ">
          <Icon icon={<CiPhone className="text-[50px] text-white" />} />
          <div>
            <p>Call/Whatsapp</p>
            <Link href="tel:+23490659084380">090659084380 </Link> or
            <Link href="tel:+2348110193889"> 08110193889</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Icon icon={<CiMail className="text-[50px] text-white" />} />
          <div>
            <p>Send us a Mail</p>
            <Link href="mailto:dcareforhumanity@gmail.com">
              dcareforhumanity@gmail.com{" "}
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Icon icon={<IoBulbOutline className="text-[50px] text-white" />} />
          <div className=" ">
            <p>Find us on different platforms</p>
            <div className="flex gap-2">
              <Link href="https://www.facebook.com/share/1Awu8zAUWv/">
                <IoLogoFacebook />
              </Link>
              <Link href="https://www.tiktok.com/@dc4hc?_t=ZM-8t5XGT8Wgzu&_r=1">
                {" "}
                <IoLogoTiktok />
              </Link>
              <Link href="https://www.instagram.com/dc4h_centre?igsh=N3pwaWszZHplNXNy&utm_source=qr">
                {" "}
                <IoLogoInstagram />
              </Link>
              <Link href="https://x.com/DC4HC">
                {" "}
                <FaXTwitter />
              </Link>
              <Link href="https://www.linkedin.com/in/d-careforhumanity-centre-31b225345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                {" "}
                <IoLogoLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
