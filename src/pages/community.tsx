import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import SearchSection from "components/search-section"
import CardContainer1 from "components/card-container1";
import SizeShortTextSelectedFals from "components/size-short-text-selected-fals";
import Header from "components/header";
import Footer from "components/footer";

const Community: NextPage = () => {
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
    <div className="relative [background:linear-gradient(rgba(0,_143,_57,_0.2),_rgba(0,_143,_57,_0.2)),_linear-gradient(rgba(12,_0,_156,_0.2),_rgba(12,_0,_156,_0.2)),_#000] w-full h-[1360px] overflow-hidden text-left text-2xs text-white font-whitney">
      <div className="absolute top-[126px] left-[0px] w-[428px] h-[155px] text-sm font-m3-label-medium">
        <SearchSection searchLeft="18px" />
        <CardContainer1
          ratingOrPopularity="Popular"
          productCode="/add.svg"
          propLeft="18px"
        />
        <div className="absolute top-[121px] left-[0px] w-[428px] overflow-x-auto flex flex-row py-0 pr-0 pl-4 box-border items-center justify-start gap-[12px]">
          <div className="rounded-8xs box-border w-[106px] h-[34px] flex flex-row py-2.5 pr-[26px] pl-4 items-center justify-start border-[1px] border-solid border-dimgray-400">
            <div className="relative inline-block w-[67px] h-[17px] shrink-0">
              Latest
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 ml-[-37px]"
              alt=""
              src="/add1.svg"
            />
          </div>
          <div className="rounded-8xs box-border w-[102px] h-[34px] flex flex-row py-2.5 pr-[21px] pl-3 items-center justify-start gap-[4px] border-[1px] border-solid border-dimgray-400">
            <div className="relative inline-block w-[58px] h-[17px] shrink-0">
              Likes
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/add1.svg"
            />
          </div>
          <div className="rounded-8xs box-border w-[118px] h-[34px] overflow-x-auto shrink-0 flex flex-row py-2.5 pr-[26px] pl-4 items-center justify-start gap-[3px] border-[1px] border-solid border-dimgray-100">
            <div className="relative inline-block w-[76px] h-[17px] shrink-0">
              shares
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/add1.svg"
            />
          </div>
          <div className="rounded-8xs box-border w-[118px] h-[34px] overflow-hidden shrink-0 flex flex-row py-2.5 pr-[21px] pl-2.5 items-center justify-start gap-[17px] border-[1px] border-solid border-dimgray-400">
            <div className="relative inline-block w-[70px] h-[17px] shrink-0">
              comments
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/add1.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[316px] left-[278px] rounded-8xs box-border w-[140px] h-[34px] flex flex-row py-[9px] px-0 items-center justify-center border-[1px] border-solid border-gray-700">
        <img className="relative w-[15px] h-[15px]" alt="" src="/vector9.svg" />
      </div>
      <div className="absolute top-[308px] left-[16px] text-17xl font-semibold font-m3-label-medium text-silver-100">
        Community
      </div>
      <div className="absolute top-[400px] left-[22px] text-sm [text-decoration:underline] font-medium font-m3-label-medium">
        Suggest a spot
      </div>
      <div className="absolute top-[703px] left-[275px] rounded-t-none rounded-b-6xs bg-dimgray-600 w-[252px] h-[105px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      <div className="absolute top-[703px] left-[142px] bg-dimgray-200 w-[117px] h-[133px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      <div className="absolute top-[586px] left-[142px] bg-gray-300 w-[135px] h-[133px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      <div className="absolute top-[703px] left-[41px] rounded-tl-6xs rounded-tr-none rounded-b-none bg-silver-200 w-[159px] h-[101px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      <div className="absolute top-[544px] left-[41px] rounded-tl-none rounded-tr-6xs rounded-b-none bg-darkgray-100 w-[93px] h-[101px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      <div className="absolute top-[730px] left-[70px] rounded-6xs bg-gainsboro-200 w-[289px] h-[39px]" />
      <div className="absolute top-[1209px] left-[70px] rounded-6xs bg-gainsboro-200 w-[289px] h-[39px]" />
      <div className="absolute top-[742px] left-[147px] flex flex-row items-center justify-center gap-[10px] text-xs text-black">
        <img className="relative w-4 h-4" alt="" src="/vector10.svg" />
        <b className="relative tracking-[-0.03em]">Add new photos</b>
      </div>
      <div className="absolute top-[1225px] left-[198px] flex flex-row items-center justify-center text-xs text-black">
        <b className="relative tracking-[-0.03em]">Submit</b>
      </div>
      <div className="absolute top-[819px] left-[63px] w-[243px] h-10">
        <div className="absolute top-[2px] left-[0px] tracking-[-0.03em] font-medium">
          Title
        </div>
        <SizeShortTextSelectedFals
          prop="123456"
          showDiv={false}
          sizeShortTextSelectedFalsPosition="absolute"
          sizeShortTextSelectedFalsBackgroundColor="#7a7a7a"
          sizeShortTextSelectedFalsTop="20px"
          sizeShortTextSelectedFalsLeft="0px"
          divTop="26.67%"
        />
      </div>
      <div className="absolute top-[898px] left-[63px] w-[243px] h-[37px]">
        <div className="absolute top-[2px] left-[0px] tracking-[-0.03em] font-medium">
          Your thoughts
        </div>
        <SizeShortTextSelectedFals
          showDiv
          sizeShortTextSelectedFalsPosition="absolute"
          sizeShortTextSelectedFalsBackgroundColor="#7a7a7a"
          sizeShortTextSelectedFalsTop="20px"
          sizeShortTextSelectedFalsLeft="0px"
          divTop="30%"
        />
      </div>
      <div className="absolute top-[974px] left-[63px] w-[243px] h-[39px]">
        <div className="absolute top-[2px] left-[0px] tracking-[-0.03em] font-medium">
          What to look out for
        </div>
        <SizeShortTextSelectedFals
          showDiv
          sizeShortTextSelectedFalsPosition="absolute"
          sizeShortTextSelectedFalsBackgroundColor="#7a7a7a"
          sizeShortTextSelectedFalsTop="20px"
          sizeShortTextSelectedFalsLeft="0px"
          divTop="30%"
        />
      </div>
      <div className="absolute top-[1052px] left-[63px] w-[243px] h-[43px]">
        <div className="absolute top-[2px] left-[0px] tracking-[-0.03em] font-medium">
          Loacation
        </div>
        <SizeShortTextSelectedFals
          prop="123456"
          showDiv={false}
          sizeShortTextSelectedFalsPosition="absolute"
          sizeShortTextSelectedFalsBackgroundColor="#7a7a7a"
          sizeShortTextSelectedFalsTop="20px"
          sizeShortTextSelectedFalsLeft="0px"
          divTop="26.67%"
        />
      </div>
      <div className="absolute top-[1134px] left-[63px] tracking-[-0.03em] font-medium flex items-center w-[54px] h-[13px]">
        Your Rating
      </div>
      <img
        className="absolute top-[1150px] left-[63.54px] w-[22px] h-[22px]"
        alt=""
        src="/star-11.svg"
      />
      <img
        className="absolute top-[1150px] left-[88.56px] w-[23px] h-[22px]"
        alt=""
        src="/star-2.svg"
      />
      <img
        className="absolute top-[1150px] left-[114.54px] w-[22px] h-[22px]"
        alt=""
        src="/star-11.svg"
      />
      <img
        className="absolute top-[1150px] left-[139.54px] w-[22px] h-[22px]"
        alt=""
        src="/star-11.svg"
      />
      <img
        className="absolute top-[1150px] left-[165.54px] w-[22px] h-[22px]"
        alt=""
        src="/star-11.svg"
      />
      <Header iconCode="/group-81.svg" carIconCode="/settings.svg" />
      <Footer
        dimensions="/home1.svg"
        productDimensions="/shopping-bag1.svg"
        imageDimensions="/icon4.svg"
        imageCode="/component-11.svg"
        imageSizeCode="/icon5.svg"
        imageDimensionsCode="/vector11.svg"
        imageCode2="/icon6.svg"
        imageDimensions2="/group2.svg"
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

export default Community;
