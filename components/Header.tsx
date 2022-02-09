import Image from "next/image";
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
    <div className="flex items-center justify-between px-5 py-6 mx-auto space-x-5 max-w-7xl">
      <div className="relative w-4/12 md:w-auto">
        <Image src="/images/logo.svg" alt="logo" width="180" height="35" />
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
        <Button text="Get Started" url="#" />
        <div className="inline-block md:hidden">
          <MdMenu
            size={25}
            className="cursor-pointer"
            onClick={() => handleMenu()}
          />
        </div>
      </div>
      {mobileMenu && (
        <div className="absolute top-0 right-0 z-50 w-full h-screen p-8 bg-white">
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
  );
};

export default Header;
