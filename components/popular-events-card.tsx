import type { NextPage } from "next";
import CardContainer from "./card-container";

const PopularEventsCard: NextPage = () => {
  return (
    <div className="absolute top-[447px] left-[5px] w-[418px] h-[198px] overflow-x-auto flex flex-row py-0 px-3.5 box-border items-center justify-start gap-[19px] text-left text-xl text-black font-m3-label-medium">
      <div className="relative rounded-8xs w-[175px] h-[198px] overflow-hidden shrink-0">
        <img
          className="absolute top-[0px] left-[0px] rounded-8xs w-[175px] h-[198px] object-cover"
          alt=""
          src="/image-2@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gray-1500 w-[175px] h-[198px]" />
        <img
          className="absolute top-[59.63px] left-[34.61px] w-[140.39px] h-[138.37px]"
          alt=""
          src="/polygon-1.svg"
        />
        <div className="absolute top-[181.47px] left-[65px] font-semibold [transform:_rotate(-45.01deg)] [transform-origin:0_0]">
          <p className="m-0">Popular events</p>
        </div>
      </div>
      <div className="relative w-[175px] h-[198px] overflow-hidden shrink-0">
        <img
          className="absolute top-[0px] left-[0px] rounded-8xs w-[175px] h-[198px] object-cover"
          alt=""
          src="/f5jl0xna-1@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gray-1500 w-[175px] h-[198px]" />
        <img
          className="absolute top-[67px] left-[36.92px] w-[138.08px] h-[131px]"
          alt=""
          src="/polygon-11.svg"
        />
        <div className="absolute top-[176.59px] left-[85px] font-semibold [transform:_rotate(-45deg)] [transform-origin:0_0]">
          Best cafes
        </div>
      </div>
      <CardContainer
        imageAltText="/0dlc13ot-11@2x.png"
        dimensionText="/polygon-12.svg"
        categoryName="Best Bakes"
      />
      <CardContainer
        imageAltText="/00c6q6ke-1@2x.png"
        dimensionText="/polygon-13.svg"
        categoryName="Best crafts"
        propTop="176.59px"
        propLeft="85px"
      />
      <CardContainer
        imageAltText="/7jxemssl-1@2x.png"
        dimensionText="/polygon-14.svg"
        categoryName="Best Antiques"
        propTop="185.1px"
        propLeft="76px"
      />
    </div>
  );
};

export default PopularEventsCard;
