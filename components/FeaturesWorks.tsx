import React from "react";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import FeatureBlock from "./FeatureBlock";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

const FeaturesWorks = () => {
  return (
    <div className="bg-orange-500">
      <div className="px-16 pb-16 mx-auto pt-28 max-w-7xl">
        <div className="mb-16 text-center">
          <SubHeading text="WHATS THE FUNCTION" isWhite={true} />
          <Heading text="Let’s see how it works" isWhite={true} />
        </div>
        <div className="flex flex-col justify-between text-center md:text-left md:space-x-20 md:flex-row">
          <FeatureBlock
            Icon={<RiNumber1 size={35} />}
            title="Set disbursement Instructions"
            text="Get your blood tests delivered at home collect a sample from the your blood tests."
            isWhite={true}
          />
          <FeatureBlock
            Icon={<RiNumber2 size={35} />}
            title="Assembly retrieves funds from your account"
            text="Get your blood tests delivered at home collect a sample from the your blood tests."
            isWhite={true}
          />
          <FeatureBlock
            Icon={<RiNumber3 size={35} />}
            title="Assembly initiates disbursement"
            text="Get your blood tests delivered at home collect a sample from the your blood tests."
            isWhite={true}
          />
          <FeatureBlock
            Icon={<RiNumber4 size={35} />}
            title="Customer receives funds payment"
            text="Get your blood tests delivered at home collect a sample from the your blood tests."
            isWhite={true}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesWorks;
