import Link from "next/link";
import React from "react";
import { Button } from "../types";

const Button: React.FC<Button> = ({ text, url }) => {
  return (
    <Link href={url}>
      <a className="">{text}</a>
    </Link>
  );
};

export default Button;
