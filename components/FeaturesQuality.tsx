import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaCommentAlt, FaCrown } from "react-icons/fa";
import FeatureBlock from "./FeatureBlock";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

const FeaturesQuality = () => {
  return (
    <div className="px-5 pb-10 mx-auto md:pb-20 max-w-7xl">
      <div className="mb-16 text-center">
        <SubHeading text="QUALITY FEATURES" />
        <Heading text="Amazing useful features" />
      </div>
      <div className="grid grid-cols-1 gap-5 px-0 md:gap-10 md:grid-cols-2 md:px-20">
        <FeatureBlock
          Icon={<AiFillThunderbolt size={35} />}
          title="Fast Performance"
          text="Get your blood tests delivered at home collect a sample from the your blood tests."
          isImgLeft={true}
        />
        <FeatureBlock
          Icon={<BsBriefcaseFill size={35} />}
          title="Partnership deal"
          text="Get your blood tests delivered at home collect a sample from the your blood tests."
          isImgLeft={true}
        />
        <FeatureBlock
          Icon={<FaCrown size={35} />}
          title="Pro Subscription"
          text="Get your blood tests delivered at home collect a sample from the your blood tests."
          isImgLeft={true}
        />
        <FeatureBlock
          Icon={<FaCommentAlt size={35} />}
          title="Customer Support"
          text="Get your blood tests delivered at home collect a sample from the your blood tests."
          isImgLeft={true}
        />
      </div>
    </div>
  );
};

export default FeaturesQuality;
