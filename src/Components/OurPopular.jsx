import React from "react";
import Coursegirl from "../assets/images/png/Coursegirl.png";
import Arrow from "../assets/images/svg/arrow.svg";
import Singles from "../assets/images/png/Singles.png";
import Gobalcourse from "../assets/images/png/Gobal.png";
import Lastest from "../assets/images/png/Lastest.png";

const OurPopular = () => {
  return (
    <section>
      <div className="my_container pt-[48px] pb-[48px] md:pt-[65px] md:pb-[65px] lg:pt-[160px] lg:pb-[160px]">
        <div className="flex-col-reverse lg:flex-row  flex justify-between items-center">
          <div className="relative mt_30">
            <img className="" src={Coursegirl} alt="Coursegirl" />
            <img
              className="absolute top-[25%] start-[5%]  "
              src={Singles}
              alt="Singles"
            />
            <img
              className=" absolute start-[74.5%] top-[41%]  max-w-[26%] sm:max-w-[139px]"
              src={Gobalcourse}
              alt="Gobalcourse"
            />
            <img
              className=" absolute start-[13%] top-[77%] max-w-[155px]"
              src={Lastest}
              alt="Lastest"
            />
          </div>
          <div>
            <div className=" w-[94px] h-[7px] bg-[#E74040]"></div>
            <h2 className="ff_Montserrat text-[40px] text-[#252B42] font-bold leading-[50px] mt-[35px] max-w-[256px] mb-0">
              Our Popular Courses
            </h2>
            <p className="ff_Montserrat text-[14px] text-[#737373] leading-[20px] font-normal max-w-[351px] mb-0 mt-[35px]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
            <div className=" flex items-center gap-[10px]">
              <h3 className="ff_Montserrat text-[14px] text-[#96BB7C] font-bold leading-[171.429%] mb-0 mt-[35px]">
                Learn More
              </h3>
              <img
                className="mt-[35px] cursor-pointer"
                src={Arrow}
                alt="Arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPopular;
