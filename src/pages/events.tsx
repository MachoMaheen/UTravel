import type { NextPage } from "next";
import { useState, useCallback } from "react";
import FrameComponent from "components/frame-component";
import PortalPopup from "components/portal-popup";
import { useRouter } from "next/router";
import SearchSection from "components/search-section";
import CardContainer1 from "components/card-container1";
import CardContainer2 from "components/card-container2";
import Under25SummitCard from "components/under25-summit-card";
import Header from "components/header";
import Footer from "components/footer";

const Events: NextPage = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const router = useRouter();

  const onBuildingBlocksSegmentDarkClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onBuildingBlocksSegmentDark1Click = useCallback(() => {
    router.push("/stores");
  }, [router]);

  const onBuildingBlocksSegmentDark4Click = useCallback(() => {
    router.push("/community2");
  }, [router]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className="relative [background:linear-gradient(rgba(0,_143,_57,_0.2),_rgba(0,_143,_57,_0.2)),_linear-gradient(rgba(12,_0,_156,_0.2),_rgba(12,_0,_156,_0.2)),_#000] w-full h-[2088px] overflow-hidden text-left text-sm text-white font-m3-label-medium">
        <div className="absolute top-[127px] left-[0px] w-[428px] h-[155px]">
          <SearchSection searchLeft="18px" />
          <CardContainer1
            ratingOrPopularity="Popular"
            productCode="/add2.svg"
            propLeft="18px"
          />
          <div className="absolute top-[121px] left-[0px] w-[428px] overflow-x-auto flex flex-row py-0 pr-0 pl-4 box-border items-center justify-start gap-[12px]">
            <div
              className="rounded-8xs box-border w-[106px] h-[34px] flex flex-row py-2.5 pr-[26px] pl-4 items-center justify-start cursor-pointer border-[1px] border-solid border-dimgray-400"
              onClick={openFrame}
            >
              <div className="relative inline-block w-[67px] h-[17px] shrink-0">
                Filter
              </div>
              <img
                className="relative w-[19px] h-[11.33px] ml-[-37px]"
                alt=""
                src="/frame-13.svg"
              />
            </div>
            <div className="rounded-8xs box-border w-28 h-[34px] flex flex-row py-2.5 pr-[21px] pl-3 items-center justify-start gap-[17px] border-[1px] border-solid border-dimgray-400">
              <div className="relative inline-block w-[58px] h-[17px] shrink-0">
                Online
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/add3.svg"
              />
            </div>
            <div className="rounded-8xs box-border w-[118px] h-[34px] overflow-x-auto shrink-0 flex flex-row py-2.5 pr-[26px] pl-4 items-center justify-start gap-[3px] border-[1px] border-solid border-dimgray-100">
              <div className="relative inline-block w-[76px] h-[17px] shrink-0">
                Highly rated
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/add3.svg"
              />
            </div>
            <div className="rounded-8xs box-border w-[118px] h-[34px] overflow-hidden shrink-0 flex flex-row py-2.5 pr-[21px] pl-4 items-center justify-start gap-[17px] border-[1px] border-solid border-dimgray-400">
              <div className="relative inline-block w-[63px] h-[17px] shrink-0">
                Price low
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/add3.svg"
              />
            </div>
          </div>
        </div>
        <CardContainer2 />
        <Under25SummitCard
          imageDimensions="/a12mranz-11@2x.png"
          eventName="Under 25 summit"
          eventDate="Dec 9 - 16"
          collegeLocation="College of engineering, Trivandrum"
          peopleLovedCount="12K people loved ❤️"
        />
        <Under25SummitCard
          imageDimensions="/image-21@2x.png"
          eventName="Ka Mbifl’23"
          eventDate="Feb 2, 3, 4, 5"
          collegeLocation="Trivandrum"
          peopleLovedCount="10K people loved ❤️"
          propTop="1144px"
          propWidth="unset"
          propHeight="unset"
          propGap="234px"
        />
        <Under25SummitCard
          imageDimensions="/image-31@2x.png"
          eventName="Olam’23"
          eventDate="Feb 3, 4, 5"
          collegeLocation="Tagore theatre , trivandrum"
          peopleLovedCount="9K people loved ❤️"
          propTop="1558px"
          propWidth="409px"
          propHeight="392px"
          propGap="137px"
        />
        <Header iconCode="/group-84.svg" carIconCode="/settings.svg" />
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
          propCursor2="unset"
          propBackgroundColor2="#021d24"
          propCursor3="pointer"
          propBackgroundColor3="unset"
          onBuildingBlocksSegmentDarkClick={onBuildingBlocksSegmentDarkClick}
          onBuildingBlocksSegmentDark1Click={onBuildingBlocksSegmentDark1Click}
          onBuildingBlocksSegmentDark4Click={onBuildingBlocksSegmentDark4Click}
        />
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default Events;
