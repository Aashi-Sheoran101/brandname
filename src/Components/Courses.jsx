import React from "react";
import Traning from "../assets/images/svg/Traning.svg";
import Online5 from "../assets//images/svg/Online.svg";

const Courses = () => {
  return (
    <section>
      <div className="my_container pt-[48px] pb-[48px] md:pt-[65px] md:pb-[65px] lg:pt-[160px] lg:pb-[160px]">
        <h2 className="ff_Montserrat text-[14px] text-[#96BB7C] text-center font-bold leading-[24px]">
          Practice Advice
        </h2>
        <h3 className="ff_Montserrat text-[40px] text-[#252B42] text-center font-bold leading-[50px] mt-[10px]">
          Most Popular Courses
        </h3>
        <p className="ff_Montserrat text-[14px] text-[#737373] text-center font-normal leading-[20px] max-w-[469px] mx-auto mt-[10px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="">
          <div className="md:flex justify-center gap-[30px] mt-[80px] items-center gap_30">
            <div className="course_card w-[100%] cursor-pointer mx_auto">
              <img src={Traning} alt="Traning" />
              <h4 className="ff_Montserrat text-[16px] text-[#252B42] text-center font-bold leading-[24px]">
                training Courses
              </h4>
              <div className=" w-[50px] h-[2px] bg-[#E74040]"></div>
              <p className="ff_Montserrat text-[14px] text-[#737373] text-center font-normal leading-[20px] max-w-[136px] ">
                The gradual accumulation and small-scale..
              </p>
            </div>
            <div className="course_card w-[100%] cursor-pointer mx_auto mt_30">
              <img src={Online5} alt="Online5" />
              <h4 className="ff_Montserrat text-[16px] text-[#252B42] text-center font-bold leading-[24px] mt-[20px]">
                2,769 online courses
              </h4>
              <div className=" w-[50px] h-[2px] bg-[#E74040]"></div>
              <p className="ff_Montserrat text-[14px] text-[#737373] text-center font-normal leading-[20px] max-w-[136px]">
                The gradual accumulation and small-scale..
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
