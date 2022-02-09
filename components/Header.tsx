import Image from "next/image";
import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="px-5 py-6 mx-auto max-w-7xl">
      <div className="relative">
        <Image src="/images/logo.svg" alt="logo" width="180" height="35" />
      </div>
      <div className="">
        <Button text="Get Started" url="#" />
      </div>
    </div>
  );
};

export default Header;
