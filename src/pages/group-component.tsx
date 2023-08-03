import type { NextPage } from "next";
import RectangleComponent1 from "components/rectangle-component1";
import RectangleComponent from "components/rectangle-component";

const GroupComponent: NextPage = () => {
  return (
    <div className="relative w-full h-[244px] text-left text-13xl text-white font-m3-label-medium">
      <div className="absolute top-[0px] left-[0px] w-[411px] h-[236px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-8xs w-[411px] h-[236px] object-cover"
          alt=""
          src="/ss-12@2x.png"
        />
        <div className="absolute top-[153px] left-[0px] rounded-8xs bg-gray-1400 [backdrop-filter:blur(5px)] w-[411px] h-[83px]" />
        <div className="absolute top-[156px] left-[11px] font-semibold">
          IIFK
        </div>
        <img
          className="absolute top-[205px] left-[126px] w-6 h-6 object-cover"
          alt=""
          src="/group-181@2x.png"
        />
      </div>
      <RectangleComponent1
        rectangleDivPosition="absolute"
        rectangleDivTop="199px"
        rectangleDivLeft="7px"
      />
      <RectangleComponent
        rectangleDivPosition="absolute"
        rectangleDivTop="199px"
        rectangleDivLeft="95px"
      />
      <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[412px] h-[244px] border-[1px] border-solid border-white" />
    </div>
  );
};

export default GroupComponent;
