import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "components/header";
import Footer from "components/footer";

const Community2: NextPage = () => {
  const router = useRouter();

  const onBuildingBlocksSegmentDarkClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onBuildingBlocksSegmentDark1Click = useCallback(() => {
    router.push("/stores");
  }, [router]);

  const onBuildingBlocksSegmentDark3Click = useCallback(() => {
    router.push("/events");
  }, [router]);

  const onSuggestASpotClick = useCallback(() => {
    router.push("/community1");
  }, [router]);

  return (
    <div className="relative [background:linear-gradient(rgba(0,_143,_57,_0.2),_rgba(0,_143,_57,_0.2)),_linear-gradient(rgba(12,_0,_156,_0.2),_rgba(12,_0,_156,_0.2)),_#000] w-full h-[1065px] overflow-hidden text-center text-xl text-white font-m3-label-medium">
      <img
        className="absolute top-[106px] left-[0px] w-[428px] h-[929px] object-cover"
        alt=""
        src="/server-tabs-1@2x.png"
      />
      <div className="absolute top-[247px] left-[50px] bg-darkslategray-400 w-[91px] h-[23px]" />
      <b className="absolute top-[250px] left-[60px] tracking-[0.5px] leading-[16px] inline-block w-[30px] h-4">
        Art
      </b>
      <div className="absolute top-[401px] left-[79px] bg-darkslategray-400 w-[135px] h-[30px]" />
      <div
        className="absolute top-[408px] left-[92px] text-mini tracking-[0.5px] leading-[16px] font-semibold cursor-pointer"
        onClick={onSuggestASpotClick}
      >
        Suggest a spot
      </div>
      <Header iconCode="/group-83.svg" carIconCode="/settings1.svg" />
      <Footer
        dimensions="/home1.svg"
        productDimensions="/shopping-bag1.svg"
        imageDimensions="/icon4.svg"
        imageCode="/component-12.svg"
        imageSizeCode="/icon5.svg"
        imageDimensionsCode="/vector8.svg"
        imageCode2="/icon9.svg"
        imageDimensions2="/group3.svg"
        icon={false}
        icon2={false}
        icon4={false}
        icon5={false}
        icon7={false}
        propLeft="calc(50% - 214px)"
        propCursor="pointer"
        propBackgroundColor="unset"
        propCursor1="pointer"
        propBackgroundColor1="unset"
        propCursor2="pointer"
        propBackgroundColor2="unset"
        propCursor3="unset"
        propBackgroundColor3="#021d24"
        onBuildingBlocksSegmentDarkClick={onBuildingBlocksSegmentDarkClick}
        onBuildingBlocksSegmentDark1Click={onBuildingBlocksSegmentDark1Click}
        onBuildingBlocksSegmentDark3Click={onBuildingBlocksSegmentDark3Click}
      />
    </div>
  );
};

export default Community2;
