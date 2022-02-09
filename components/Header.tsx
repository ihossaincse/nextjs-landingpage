import Image from "next/image";
import React, { useState } from "react";
import { menu } from "../data";
import Button from "./Button";
import MenuItem from "./MenuItem";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <div className="flex items-center justify-between px-5 py-6 mx-auto max-w-7xl">
      <div className="relative">
        <Image src="/images/logo.svg" alt="logo" width="180" height="35" />
      </div>
      <div className="">
        <ul className="flex items-center justify-center space-x-10">
          {menu.map((item, index) => (
            <li className="" key={item}>
              <MenuItem
                text={item}
                url={`#${item.toLowerCase()}`}
                active={activeMenu == index ? true : false}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <Button text="Get Started" url="#" />
      </div>
    </div>
  );
};

export default Header;
