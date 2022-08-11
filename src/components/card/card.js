import React from "react";
import { Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./card.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const CardComponent = (props) => {
  const navigate = useNavigate();
  const { data } = props;
  return (
    <div
      class="h-full w-full bg-white rounded-[10px] card-shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
      onClick={() => {
        navigate("/detail-page");
      }}
    >
      <div
        className="image-div h-56"
        style={{ backgroundImage: `url(${data?.image})` }}
      >
        <div className="h-full">
          <div className="image-content-main">
            {data?.badge ? (
              <div className="mt-[20px] text-[14px] mr-[20px] p-[12px] rounded-[8px] font-bold font-[OpenSans] text-white top-badge">
                {data?.badge}
              </div>
            ) : (
              <div />
            )}
            <div className="bg-white text-[16px] px-[36px] py-[12px] font-bold font-[OpenSans] rounded-tl-[12px] ">
              {data?.label}
            </div>
          </div>
        </div>
      </div>
      <div class="p-5 bg-white rounded-b-[10px]">
        <div className="flex justify-between font-[OpenSans] items-center">
          <h1 className="text-[16px] font-bold">{data?.title}</h1>
          <h1 className="text-[#DFBBA2] text-[26px] font-bold">
            {data?.price}
          </h1>
        </div>
        <div className="flex justify-between  font-[OpenSans] font-normal text-[14px] pt-[10px]">
          <p>{data?.subTitle}</p>
          <p className=" text-[#949AA4]">Ref. {data?.refNo}</p>
        </div>
        <div className="flex justify-between text-[#949AA4] text-[14px] font-[OpenSans] pt-[10px] items-center">
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <h1>{data?.footer?.itemOne}</h1>
            <h1>{data?.footer?.itemTwo}</h1>
            <h1>{data?.footer?.itemThree}</h1>
          </Stack>
          <div>
            <img className="h-[36px]" src={data?.footer?.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
