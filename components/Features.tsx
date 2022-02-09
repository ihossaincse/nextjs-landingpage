import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaCommentAlt, FaCrown } from "react-icons/fa";
import FeatureBlock from "./FeatureBlock";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

const Features = () => {
  return (
    <div id="features" className="px-5 pb-10 mx-auto max-w-7xl">
      <div className="mb-16 text-center">
        <SubHeading text="WHATS THE FUNCTION" />
        <Heading text="Meet the feature of product" />
      </div>
      <div className="flex flex-col justify-between text-center md:text-left md:space-x-20 md:flex-row">
        <FeatureBlock
          Icon={<AiFillThunderbolt size={35} />}
          title="Fast Performance"
          text="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
        <FeatureBlock
          Icon={<BsBriefcaseFill size={35} />}
          title="Partnership deal"
          text="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
        <FeatureBlock
          Icon={<FaCrown size={35} />}
          title="Pro Subscription"
          text="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
        <FeatureBlock
          Icon={<FaCommentAlt size={35} />}
          title="Customer Support"
          text="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
      </div>
    </div>
  );
};

export default Features;
