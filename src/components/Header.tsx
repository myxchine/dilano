"use client";

import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";
import MobileMenu from "@/components/menu/Mobile";
import Nav from "@/components/menu/Nav";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.classList.add("no-scroll");
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <header className="w-full sticky top-0 z-10 bg-white">
      <div className="flex flex-col px-4    bg-white sm:px-12 md:px-12 md:p-4 max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between relative grid grid-cols-3 gap-auto">
          <div className="mobile flex items-left justify-left md:hidden w-full">
            {!isOpen && (
              <button
                aria-label="Mobile Menu Open"
                onClick={handleOpen}
                className="flex items-center justify-center p-2"
              >
                <HiOutlineMenuAlt4 className=" text-xl h-[24px] w-[24px] flex items-left justify-left" />
              </button>
            )}

            {isOpen && (
              <button
                aria-label="Mobile Menu Close"
                className="flex items-center justify-center p-2"
                onClick={handleClose}
              >
                <TfiClose className="p-[3px] text-xl h-[24px] w-[24px] flex items-left justify-left" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between hidden md:flex md:w-[310px] w-full">
            <Nav />
          </div>

          <Link href="/">
            <Image
              src="/images/logo-dilano.JPG"
              alt="Duality Logo"
              width={200}
              height={200}
              className="w-auto h-[80px] object-contain w-full"
            />
          </Link>

          <div className="flex items-center justify-end w-full">
            <FaInstagram className="text-xl" />
          </div>
        </div>
        {isOpen && <MobileMenu handleClose={handleClose} />}
      </div>
    </header>
  );
};

export default Header;
