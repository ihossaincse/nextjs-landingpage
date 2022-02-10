import React from "react";
import { Title } from "../types";

const Heading: React.FC<Title> = ({ text, isWhite }) => {
  return (
    <h2 className={`text-3xl font-semibold ${isWhite ? "text-white" : ""}`}>
      {text}
    </h2>
  );
};

export default Heading;
