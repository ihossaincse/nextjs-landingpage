import React from "react";
import { IconTitleText } from "../types";

const FeatureBlock: React.FC<IconTitleText> = ({ Icon, title, text }) => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 text-white bg-orange-500 rounded-full md:mx-0">
        {Icon}
      </div>
      <h4 className="mb-4 text-lg font-semibold">{title}</h4>
      <p className="leading-relaxed">{text}</p>
    </div>
  );
};

export default FeatureBlock;
