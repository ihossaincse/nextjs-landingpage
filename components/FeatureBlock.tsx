import React from "react";
import { IconTitleText } from "../types";

const FeatureBlock: React.FC<IconTitleText> = ({
  Icon,
  title,
  text,
  isImgLeft,
}) => {
  return (
    <div
      className={`mb-10 ${isImgLeft ? "flex justify-between space-x-5" : ""}`}
    >
      <div
        className={`flex ${
          isImgLeft ? "w-2/12" : ""
        } items-center justify-center w-16 h-16 mx-auto mb-5 text-white bg-orange-500 rounded-full md:mx-0`}
      >
        {Icon}
      </div>
      <div className={`${isImgLeft ? "w-10/12" : ""}`}>
        <h4 className="mb-4 text-lg font-semibold">{title}</h4>
        <p className="leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default FeatureBlock;
