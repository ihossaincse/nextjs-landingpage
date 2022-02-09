import Link from "next/link";
import React from "react";
import { Button } from "../types";

const Button: React.FC<Button> = ({ text, url }) => {
  return (
    <Link href={url}>
      <a className="px-5 py-2 font-semibold text-orange-500 transition-all border-2 border-orange-500 rounded-full md:py-3 text-md md:px-7 hover:bg-orange-500 hover:text-white">
        {text}
      </a>
    </Link>
  );
};

export default Button;
