import React from "react";
import { Title } from "../types";

const SubHeading: React.FC<Title> = ({ text }) => {
  return (
    <h4 className="mb-2 font-semibold tracking-wider text-orange-500 uppercase">
      {text}
    </h4>
  );
};

export default SubHeading;
