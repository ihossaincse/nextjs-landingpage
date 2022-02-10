import Image from "next/image";
import React from "react";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import FeatureBlock from "./FeatureBlock";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

const Services = () => {
  return (
    <div className="px-5 pb-10 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-10 md:gap-20 md:grid-cols-2">
        <div className="relative">
          <Image
            src="/images/service.jpg"
            alt="services"
            width="1280"
            height="853"
          />
        </div>
        <div className="">
          <SubHeading text="OUR SERVICES" />
          <Heading text="Business Goals Achieved with Design" />
          <div className="mt-10">
            <FeatureBlock
              Icon={<FaCrown size={35} />}
              title="Smart Features"
              text="Get your blood tests delivered at home collect a sample from the your blood tests."
              isImgLeft={true}
            />
            <FeatureBlock
              Icon={<BsBriefcaseFill size={35} />}
              title="Secure Contents"
              text="Get your blood tests delivered at home collect a sample from the your blood tests."
              isImgLeft={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
