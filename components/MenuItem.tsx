import Link from "next/link";
import React from "react";
import { Menu } from "../types";

const MenuItem: React.FC<Menu> = ({ text, url, active }) => {
  return (
    <Link href={url}>
      <a
        className={`text-md hover:text-orange-500 transition-all font-semibold ${
          active ? "text-orange-500" : ""
        } `}
      >
        {text}
      </a>
    </Link>
  );
};

export default MenuItem;
