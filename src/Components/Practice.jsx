import React from "react";
import Advice from "../assets/images/png/praticebg.png";
import Play from "../assets/images/svg/Practiceplaybutton.svg";

const Practice = () => {
  return (
    <section>
      <div className="my_container pt-[48px] pb-[48px] md:pt-[65px] md:pb-[65px] lg:pt-[160px] lg:pb-[160px]">
        <h2 className="ff_Montserrat text-[14px] text-[#96BB7C] text-center font-bold leading-[24px]">
          Practice Advice
        </h2>
        <h3 className="ff_Montserrat text-[24px] text-[#252B42] text-center font-bold leading-[32px] mt-[10px]">
          Our Popular Courses
        </h3>
        <p className="ff_Montserrat text-[14px] text-[#737373] text-center font-normal leading-[20px] max-w-[469px] mx-auto mt-[10px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className=" flex justify-center">
          <img
            className=" relative mt-[40px] pt-[40px]"
            src={Advice}
            alt="Advice"
            width={688}
            height={363}
          />
          <img
            className=" absolute bottom-[35%] md:bottom-[28%]"
            src={Play}
            alt="Play"
          />
        </div>
      </div>
    </section>
  );
};

export default Practice;
