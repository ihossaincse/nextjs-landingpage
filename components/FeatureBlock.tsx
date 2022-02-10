import React from "react";
import { IconTitleText } from "../types";

const FeatureBlock: React.FC<IconTitleText> = ({
  Icon,
  title,
  text,
  isImgLeft,
  isWhite,
}) => {
  return (
    <div
      className={`mb-10 ${isImgLeft ? "flex justify-between space-x-5" : ""}`}
    >
      <div
        className={`flex ${
          isImgLeft ? "w-2/12" : ""
        } items-center justify-center w-16 h-16 mx-auto mb-5 ${
          isWhite ? "bg-white text-black" : "text-white bg-orange-500"
        } rounded-full md:mx-0`}
      >
        {Icon}
      </div>
      <div className={`${isImgLeft ? "w-10/12" : ""}`}>
        <h4
          className={`mb-4 text-lg font-semibold ${
            isWhite ? "text-white" : ""
          }`}
        >
          {title}
        </h4>
        <p className={`leading-relaxed ${isWhite ? "text-white" : ""}`}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default FeatureBlock;
