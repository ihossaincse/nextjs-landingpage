import React from "react";
import { Title } from "../types";

const Heading: React.FC<Title> = ({ text }) => {
  return <h2 className="text-3xl font-semibold">{text}</h2>;
};

export default Heading;
