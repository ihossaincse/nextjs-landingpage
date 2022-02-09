import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { menu } from "../data";
import Button from "./Button";
import MenuItem from "./MenuItem";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div id="home" className="px-5 mx-auto max-w-7xl">
      <div className="flex items-center justify-between py-6 space-x-5">
        <div className="w-4/12 md:w-auto">
          <Link href="/">
            <a className="relative">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width="180"
                height="35"
              />
            </a>
          </Link>
        </div>
        <div className="hidden md:inline-block">
          <ul className="flex items-center justify-center space-x-10">
            {menu.map((item, index) => (
              <li className="" key={item}>
                <MenuItem
                  text={item}
                  url={`#${item.toLowerCase()}`}
                  active={activeMenu == index ? true : false}
                  onclick={() => setActiveMenu(index)}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between w-8/12 text-right md:w-auto md:text-inherit">
          <Button text="Get Started" url="#" outline={true} />
          <div className="inline-block md:hidden">
            <MdMenu
              size={25}
              className="cursor-pointer"
              onClick={() => handleMenu()}
            />
          </div>
        </div>
        {mobileMenu && (
          <div className="fixed top-0 right-0 z-50 w-full h-screen p-8 overflow-y-scroll bg-white">
            <MdClose
              size={25}
              className="ml-auto mr-0 cursor-pointer"
              onClick={() => handleMenu()}
            />
            <ul className="flex flex-col justify-center">
              {menu.map((item, index) => (
                <li className="py-5 border-b-2" key={item}>
                  <MenuItem
                    text={item}
                    url={`#${item.toLowerCase()}`}
                    active={activeMenu == index ? true : false}
                    onclick={() => setActiveMenu(index)}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="pt-10 pb-5 text-center md:pt-20 md:pb-10">
        <div className="max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="pb-5 text-4xl font-semibold leading-tight md:text-6xl">
            Top Quality Digital Products To Explore
          </h2>
          <p className="px-0 mb-10 text-xl leading-loose md:px-20">
            Get your blood tests delivered at let home collect sample from the
            victory of the managements that supplies best design system
            guidelines ever.
          </p>
          <Button text="Explore" url="#" />
        </div>
        <div className="relative text-center">
          <Image
            src="/images/banner.png"
            alt="banner"
            width="1000"
            height="700"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
