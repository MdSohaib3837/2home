import React from "react";
import "./cardTwo.scss";

const CardTwo = (props) => {
  const { data } = props;
  return (
    <div class="background-img-empty w-full bg-white rounded-[10px] card-shadow dark:bg-gray-800 dark:border-gray-700 ">
      <div className="text-white px-[30px] py-[20px]">
        <h1 className="text-[40px] font-bold font-[Poppins]">
          {data?.titleBold}
          <span className="text-[40px] font-light font-[Poppins] ">
             { data?.titleNormal}
          </span>
        </h1>
        <p className="text-[16px] font-[OpenSans] pt-[10px]">
          {data?.paragraph}
        </p>

        <div className="pt-[20px] text-center">
          <button class="font-[OpenSans] bg-white text-[#003030] text-[14px] font-bold py-2 px-4 border border-[#DDDDDD] rounded">
            {data?.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
