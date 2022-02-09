import Link from "next/link";
import React from "react";
import { MenuItem } from "../types";

const MenuItem: React.FC<MenuItem> = ({ text, url, active, onclick }) => {
  return (
    <Link href={url}>
      <a
        className={`text-md hover:text-orange-500 transition-all font-semibold ${
          active ? "text-orange-500" : ""
        } `}
        onClick={onclick}
      >
        {text}
      </a>
    </Link>
  );
};

export default MenuItem;
