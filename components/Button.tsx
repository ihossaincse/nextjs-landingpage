import Link from "next/link";
import React from "react";
import { Button } from "../types";

const Button: React.FC<Button> = ({ text, url }) => {
  return (
    <Link href={url}>
      <a className="py-3 font-semibold text-orange-500 transition-all border-2 border-orange-500 rounded-full text-md px-7 hover:bg-orange-500 hover:text-white">
        {text}
      </a>
    </Link>
  );
};

export default Button;
