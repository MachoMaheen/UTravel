import type { NextPage } from "next";
import { useState, useCallback } from "react";
import FrameComponent1 from "components/frame-component1";
import PortalPopup from "components/portal-popup";
import { useRouter } from "next/router";
import SearchSection from "components/search-section";
import CardContainer1 from "components/card-container1";
import FilterContainer from "components/filter-container";
import AntiquesContainer from "components/antiques-container";
import Header from "components/header";
import Footer from "components/footer";

const Stores: NextPage = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const router = useRouter();

  const onBuildingBlocksSegmentDarkClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onBuildingBlocksSegmentDark3Click = useCallback(() => {
    router.push("/events");
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
      <div className="relative h-[2087px] w-full overflow-hidden text-left font-m3-label-medium text-3xs text-white [background:linear-gradient(rgba(0,_143,_57,_0.2),_rgba(0,_143,_57,_0.2)),_linear-gradient(rgba(12,_0,_156,_0.2),_rgba(12,_0,_156,_0.2)),_#000]">
        <div className="absolute left-[18px] top-[127px] h-[105px] w-[395px]">
          <SearchSection />
          <CardContainer1
            ratingOrPopularity="4 stars"
            productCode="/add2.svg"
          />
        </div>
        <FilterContainer />
        <div className="absolute left-[230px] top-[512px] text-sm font-semibold">
          Sara’s crafts
        </div>
        <div className="absolute left-[230px] top-[791px] text-sm font-semibold">
          Desi cuppa
        </div>
        <div className="absolute left-[25px] top-[791px] text-sm font-semibold">
          Andrew’s crafts
        </div>
        <div className="absolute left-[25px] top-[1350px] text-sm font-semibold">
          Moka Pot
        </div>
        <div className="absolute left-[231px] top-[1350px] text-sm font-semibold">
          Coffee Pup
        </div>
        <div className="absolute left-[25px] top-[1629px] text-sm font-semibold">
          Bread Bloom
        </div>
        <div className="absolute left-[231px] top-[1629px] text-sm font-semibold">
          Cake My Day
        </div>
        <div className="absolute left-[371px] top-[533px]">1.2km</div>
        <div className="absolute left-[371px] top-[812px]">1.2km</div>
        <div className="absolute left-[166px] top-[812px]">1.2km</div>
        <div className="absolute left-[166px] top-[1371px]">1.2km</div>
        <div className="absolute left-[372px] top-[1371px]">1.2km</div>
        <div className="absolute left-[372px] top-[1650px]">1.2km</div>
        <div className="absolute left-[166px] top-[1650px]">1.2km</div>
        <img
          className="absolute left-[381px] top-[512px] h-[18px] w-[18px] object-cover"
          alt=""
          src="/group-182@2x.png"
        />
        <img
          className="absolute left-[381px] top-[791px] h-[18px] w-[18px] object-cover"
          alt=""
          src="/group-182@2x.png"
        />
        <img
          className="absolute left-[176px] top-[791px] h-[18px] w-[18px] object-cover"
          alt=""
          src="/group-182@2x.png"
        />
        <img
          className="absolute left-[176px] top-[1350px] h-[18px] w-[18px] object-cover"
          alt=""
          src="/group-182@2x.png"
        />
        <img
          className="absolute left-[382px] top-[1350px] h-[18px] w-[18px] object-cover"
          alt=""
          src="/group-182@2x.png"
        />
        <img
          className="absolute left-[382px] top-[1629px] h-[18px] w-[18px] object-cover"
          alt=""
          src="/group-182@2x.png"
        />
        <img
          className="absolute left-[176px] top-[1629px] h-[18px] w-[18px] object-cover"
          alt=""
          src="/group-182@2x.png"
        />
        <div className="absolute left-[230px] top-[550px] h-[11px] w-[11px] rounded-[50%] bg-springgreen" />
        <div className="absolute left-[230px] top-[829px] h-[11px] w-[11px] rounded-[50%] bg-springgreen" />
        <div className="absolute left-[25px] top-[829px] h-[11px] w-[11px] rounded-[50%] bg-springgreen" />
        <div className="absolute left-[25px] top-[1388px] h-[11px] w-[11px] rounded-[50%] bg-springgreen" />
        <div className="absolute left-[231px] top-[1388px] h-[11px] w-[11px] rounded-[50%] bg-springgreen" />
        <div className="absolute left-[231px] top-[1667px] h-[11px] w-[11px] rounded-[50%] bg-springgreen" />
        <div className="absolute left-[25px] top-[1667px] h-[11px] w-[11px] rounded-[50%] bg-springgreen" />
        <div className="absolute left-[249px] top-[550px]">open</div>
        <div className="absolute left-[249px] top-[829px]">open</div>
        <div className="absolute left-[44px] top-[829px]">open</div>
        <div className="absolute left-[44px] top-[1388px]">open</div>
        <div className="absolute left-[250px] top-[1388px]">open</div>
        <div className="absolute left-[250px] top-[1667px]">open</div>
        <div className="absolute left-[44px] top-[1667px]">open</div>
        <div className="absolute left-[230px] top-[532px]">Closes : 7pm</div>
        <div className="absolute left-[230px] top-[811px]">Closes : 7pm</div>
        <div className="absolute left-[25px] top-[811px]">Closes : 7pm</div>
        <div className="absolute left-[25px] top-[1370px]">Closes : 7pm</div>
        <div className="absolute left-[231px] top-[1370px]">Closes : 7pm</div>
        <div className="absolute left-[231px] top-[1649px]">Closes : 7pm</div>
        <div className="absolute left-[25px] top-[1649px]">Closes : 7pm</div>
        <img
          className="absolute left-[352.29px] top-[550px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[352.29px] top-[829px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[147.29px] top-[829px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[147.29px] top-[1388px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[353.29px] top-[1388px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[353.29px] top-[1667px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[147.29px] top-[1667px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[340.29px] top-[550px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[340.29px] top-[829px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[135.29px] top-[829px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[135.29px] top-[1388px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[341.29px] top-[1388px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[341.29px] top-[1667px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[135.29px] top-[1667px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[364.29px] top-[550px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[364.29px] top-[829px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[159.29px] top-[829px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[159.29px] top-[1388px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[365.29px] top-[1388px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[365.29px] top-[1667px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[159.29px] top-[1667px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[376.29px] top-[550px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[376.29px] top-[829px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[171.29px] top-[829px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[171.29px] top-[1388px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[377.29px] top-[1388px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[377.29px] top-[1667px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[171.29px] top-[1667px] h-3 w-3"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute left-[388.29px] top-[550px] h-3 w-3"
          alt=""
          src="/star-4.svg"
        />
        <img
          className="absolute left-[388.29px] top-[829px] h-3 w-3"
          alt=""
          src="/star-4.svg"
        />
        <img
          className="absolute left-[183.29px] top-[829px] h-3 w-3"
          alt=""
          src="/star-4.svg"
        />
        <img
          className="absolute left-[183.29px] top-[1388px] h-3 w-3"
          alt=""
          src="/star-4.svg"
        />
        <img
          className="absolute left-[389.29px] top-[1388px] h-3 w-3"
          alt=""
          src="/star-4.svg"
        />
        <img
          className="absolute left-[389.29px] top-[1667px] h-3 w-3"
          alt=""
          src="/star-4.svg"
        />
        <img
          className="absolute left-[183.29px] top-[1667px] h-3 w-3"
          alt=""
          src="/star-4.svg"
        />
        <div className="absolute left-[18px] top-[589px] h-[258px] w-[184px]">
          <div className="absolute left-[0px] top-[0px] h-[198px] w-[184px] rounded-8xs bg-gainsboro-200" />
          <img
            className="absolute left-[0px] top-[1px] h-[198px] w-[184px] rounded-8xs object-cover"
            alt=""
            src="/00c6q6ke-11@2x.png"
          />
          <div className="absolute left-[0px] top-[0px] box-border h-[258px] w-[184px] rounded-8xs border-[1px] border-solid border-gray-700" />
        </div>
        <div className="absolute left-[19px] top-[1147px] h-[258px] w-[184px]">
          <div className="absolute left-[0px] top-[0px] h-[198px] w-[184px] rounded-8xs bg-gainsboro-200" />
          <img
            className="absolute left-[0px] top-[0px] h-[198px] w-[184px] rounded-8xs object-cover"
            alt=""
            src="/f5jl0xna-11@2x.png"
          />
          <div className="absolute left-[0px] top-[0px] box-border h-[258px] w-[184px] rounded-8xs border-[1px] border-solid border-gray-700" />
        </div>
        <div className="absolute left-[19px] top-[1426px] h-[258px] w-[184px]">
          <div className="absolute left-[0px] top-[0px] h-[198px] w-[184px] rounded-8xs bg-gainsboro-200" />
          <img
            className="absolute left-[0px] top-[0px] h-[198px] w-[184px] rounded-8xs object-cover"
            alt=""
            src="/0dlc13ot-12@2x.png"
          />
          <div className="absolute left-[0px] top-[0px] box-border h-[258px] w-[184px] rounded-8xs border-[1px] border-solid border-gray-700" />
        </div>
        <AntiquesContainer
          antiqueShopId="/7jxemssl-11@2x.png"
          antiqueDescription="Hari’s antiques"
        />
        <div className="absolute left-[223px] top-[310px] h-[258px] w-[184px]">
          <div className="absolute left-[0px] top-[0px] h-[198px] w-[184px] rounded-8xs bg-gainsboro-200" />
          <img
            className="absolute left-[0px] top-[0px] h-[198px] w-[184px] rounded-8xs object-cover"
            alt=""
            src="/x8k14glh-12@2x.png"
          />
          <div className="absolute left-[0px] top-[0px] box-border h-[258px] w-[184px] rounded-8xs border-[1px] border-solid border-gray-700" />
        </div>
        <div className="absolute left-[223px] top-[589px] h-[258px] w-[184px]">
          <div className="absolute left-[0px] top-[0px] h-[198px] w-[184px] rounded-8xs bg-gainsboro-200" />
          <img
            className="absolute left-[0px] top-[0px] h-[198px] w-[184px] rounded-8xs object-cover"
            alt=""
            src="/mg0q95g2-11@2x.png"
          />
          <div className="absolute left-[0px] top-[0px] box-border h-[258px] w-[184px] rounded-8xs border-[1px] border-solid border-gray-700" />
        </div>
        <div className="absolute left-[224px] top-[1147px] h-[258px] w-[184px]">
          <div className="absolute left-[0px] top-[0px] h-[198px] w-[184px] rounded-8xs bg-gainsboro-200" />
          <img
            className="absolute left-[0px] top-[0px] h-[198px] w-[184px] rounded-8xs object-cover"
            alt=""
            src="/sor1ptzj-11@2x.png"
          />
          <div className="absolute left-[0px] top-[0px] box-border h-[258px] w-[184px] rounded-8xs border-[1px] border-solid border-gray-700" />
        </div>
        <div className="absolute left-[224px] top-[1426px] h-[258px] w-[184px]">
          <div className="absolute left-[0px] top-[0px] h-[198px] w-[184px] rounded-8xs bg-gainsboro-200" />
          <img
            className="absolute left-[0px] top-[0px] h-[198px] w-[184px] rounded-8xs object-cover"
            alt=""
            src="/m4zmrpyw-1@2x.png"
          />
          <div className="absolute left-[0px] top-[0px] box-border h-[258px] w-[184px] rounded-8xs border-[1px] border-solid border-gray-700" />
        </div>
        <AntiquesContainer
          antiqueShopId="/b85wka7g-1@2x.png"
          antiqueDescription="Sofie’s antiques"
          propLeft="224px"
        />
        <div className="absolute left-[18px] top-[879px] box-border h-[235px] w-[388px] rounded-8xs border-[2px] border-solid border-gray-700 bg-mistyrose" />
        <div className="absolute left-[38px] top-[902px] text-13xl font-semibold text-black">
          <p className="m-0">Confused where to</p>
          <p className="m-0">hang out?</p>
        </div>
        <div className="absolute left-[36px] top-[990px] text-5xl text-black">
          We’ll pick a spot for you!😉
        </div>
        <div className="absolute left-[144px] top-[1045px] box-border h-[47px] w-[137px] rounded-8xs border-[1px] border-solid border-gray-700 bg-white" />
        <div className="absolute left-[163px] top-[1058px] text-mini text-black">
          Suggest a spot
        </div>
        <div className="absolute left-[0px] top-[248px] box-border flex w-[428px] flex-row items-center justify-start gap-[12px] overflow-x-auto py-0 pl-4 pr-0 text-sm">
          <div
            className="box-border flex h-[34px] w-[106px] cursor-pointer flex-row items-center justify-start rounded-8xs border-[1px] border-solid border-dimgray-400 py-2.5 pl-4 pr-[26px]"
            onClick={openFrame}
          >
            <div className="relative inline-block h-[17px] w-[67px] shrink-0">
              Filter
            </div>
            <img
              className="relative ml-[-37px] h-[11.33px] w-[19px]"
              alt=""
              src="/frame-13.svg"
            />
          </div>
          <div className="box-border flex h-[34px] w-[106px] flex-row items-center justify-start gap-[7px] rounded-8xs border-[1px] border-solid border-dimgray-400 py-2.5 pl-3 pr-[21px]">
            <div className="relative inline-block h-[17px] w-[63px] shrink-0">
              Price high
            </div>
            <img
              className="relative h-4 w-4 shrink-0 overflow-hidden"
              alt=""
              src="/add4.svg"
            />
          </div>
          <div className="box-border flex h-[34px] w-[118px] shrink-0 flex-row items-center justify-start gap-[3px] overflow-x-auto rounded-8xs border-[1px] border-solid border-dimgray-100 py-2.5 pl-4 pr-[26px]">
            <div className="relative inline-block h-[17px] w-[76px] shrink-0">
              Highly rated
            </div>
            <img
              className="relative h-4 w-4 shrink-0 overflow-hidden"
              alt=""
              src="/add3.svg"
            />
          </div>
          <div className="box-border flex h-[34px] w-[118px] shrink-0 flex-row items-center justify-start gap-[17px] overflow-hidden rounded-8xs border-[1px] border-solid border-dimgray-400 py-2.5 pl-4 pr-[21px]">
            <div className="relative inline-block h-[17px] w-[63px] shrink-0">
              Price low
            </div>
            <img
              className="relative h-4 w-4 shrink-0 overflow-hidden"
              alt=""
              src="/add3.svg"
            />
          </div>
        </div>
        <Header iconCode="/group-8.svg" carIconCode="/settings.svg" />
        <Footer
          dimensions="/home2.svg"
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
          propCursor1="unset"
          propBackgroundColor1="#021d24"
          propCursor2="pointer"
          propBackgroundColor2="unset"
          propCursor3="pointer"
          propBackgroundColor3="unset"
          onBuildingBlocksSegmentDarkClick={onBuildingBlocksSegmentDarkClick}
          onBuildingBlocksSegmentDark3Click={onBuildingBlocksSegmentDark3Click}
          onBuildingBlocksSegmentDark4Click={onBuildingBlocksSegmentDark4Click}
        />
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent1 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default Stores;
