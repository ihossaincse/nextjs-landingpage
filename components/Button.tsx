import Link from "next/link";
import React from "react";
import { Button } from "../types";

const Button: React.FC<Button> = ({ text, url, outline }) => {
  return (
    <Link href={url}>
      <a
        className={`px-5 py-2 font-semibold ${
          outline ? "text-orange-500" : "bg-orange-500 text-white"
        }  transition-all border-2 border-orange-500 rounded-full md:py-3 text-md md:px-7 hover:bg-orange-500 hover:text-white hover:shadow-xl`}
      >
        {text}
      </a>
    </Link>
  );
};

export default Button;
