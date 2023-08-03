import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FilteredCardForm from "components/filtered-card-form";
import FilteredCardFormContainer from "components/filtered-card-form-container";
import Header from "components/header";
import Footer from "components/footer";

const Community1: NextPage = () => {
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

  return (
    <div className="relative [background:linear-gradient(rgba(0,_143,_57,_0.2),_rgba(0,_143,_57,_0.2)),_linear-gradient(rgba(12,_0,_156,_0.2),_rgba(12,_0,_156,_0.2)),_#000] w-full h-[1065px] overflow-hidden text-center text-xs text-white font-m3-label-medium">
      <img
        className="absolute top-[106px] left-[0px] w-[428px] h-[929px] object-cover"
        alt=""
        src="/server-tabs-1@2x.png"
      />
      <div className="absolute top-[247px] left-[50px] bg-darkslategray-400 w-[91px] h-[23px]" />
      <b className="absolute top-[250px] left-[60px] text-xl tracking-[0.5px] leading-[16px] inline-block w-[30px] h-4">
        Art
      </b>
      <div className="absolute top-[401px] left-[79px] bg-darkslategray-400 w-[135px] h-[30px]" />
      <div className="absolute top-[408px] left-[92px] text-mini tracking-[0.5px] leading-[16px] font-semibold">
        Suggest a spot
      </div>
      <div className="absolute top-[104px] left-[-53px] bg-gray-1300 w-[534px] h-[876px]" />
      <div className="absolute top-[550px] left-[22px] rounded-8xs bg-darkslategray-100 w-[374px] h-[340px] overflow-hidden flex flex-col py-[13.5px] px-4 box-border items-center justify-center gap-[16px]">
        <FilteredCardForm propBorder="unset" propBoxSizing="unset" />
        <FilteredCardFormContainer propBorder="unset" />
        <FilteredCardForm />
        <FilteredCardFormContainer />
      </div>
      <div className="absolute top-[443px] left-[280px] rounded-t-none rounded-b-6xs bg-dimgray-600 w-[273px] h-[116px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      <div className="absolute top-[443px] left-[133px] bg-dimgray-200 w-[127px] h-[147px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      <div className="absolute top-[316px] left-[133px] bg-gray-300 w-[146px] h-[147px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      <div className="absolute top-[443px] left-[22px] rounded-tl-6xs rounded-tr-none rounded-b-none bg-silver-200 w-[172px] h-[111px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      <div className="absolute top-[271px] left-[22px] rounded-tl-none rounded-tr-6xs rounded-b-none bg-darkgray-100 w-[101px] h-[111px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      <div className="absolute top-[462px] left-[67px] rounded-6xs bg-gainsboro-200 w-[289px] h-[39px]" />
      <div className="absolute top-[916px] left-[59px] rounded-6xs bg-gainsboro-200 w-[289px] h-[39px]" />
      <div className="absolute top-[474px] left-[144px] flex flex-row items-center justify-center gap-[10px] text-left text-black font-whitney">
        <img className="relative w-4 h-4" alt="" src="/vector10.svg" />
        <b className="relative tracking-[-0.03em]">Add new photos</b>
      </div>
      <div className="absolute top-[931px] left-[191px] flex flex-row items-center justify-center text-left text-black font-whitney">
        <b className="relative tracking-[-0.03em]">Submit</b>
      </div>
      <Header iconCode="/group-82.svg" carIconCode="/settings1.svg" />
      <Footer
        dimensions="/home1.svg"
        productDimensions="/shopping-bag1.svg"
        imageDimensions="/icon4.svg"
        imageCode="/component-11.svg"
        imageSizeCode="/icon5.svg"
        imageDimensionsCode="/vector8.svg"
        imageCode2="/icon6.svg"
        imageDimensions2="/group1.svg"
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

export default Community1;
