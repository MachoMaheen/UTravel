import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import SectionCard1 from "components/section-card1";
import Header from "components/header";
import Footer from "components/footer";

const StoresExtends: NextPage = () => {
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

  const onBuildingBlocksSegmentDark4Click = useCallback(() => {
    router.push("/community2");
  }, [router]);

  return (
    <div className="relative [background:linear-gradient(rgba(0,_143,_57,_0.2),_rgba(0,_143,_57,_0.2)),_linear-gradient(rgba(12,_0,_156,_0.2),_rgba(12,_0,_156,_0.2)),_#000] w-full h-[1950px] overflow-hidden text-left text-sm text-white font-m3-label-medium">
      <div className="absolute top-[377px] left-[21px] text-17xl font-semibold">
        Jack’s Antiques
      </div>
      <img
        className="absolute top-[132px] left-[21px] rounded-8xs w-[385px] h-[221px] object-cover"
        alt=""
        src="/eb46s2bp-11@2x.png"
      />
      <div className="absolute top-[428px] left-[44px] text-5xl [text-decoration:underline] text-gray-300">
        Location
      </div>
      <div className="absolute top-[415px] left-[153.4px] w-[38.75px] h-[38.75px] overflow-hidden flex flex-row p-4 box-border items-center justify-center [transform:_rotate(45deg)] [transform-origin:0_0]">
        <img
          className="relative w-[15.66px] h-[15.66px]"
          alt=""
          src="/vector2.svg"
        />
      </div>
      <div className="absolute top-[1621px] left-[133.4px] w-[38.75px] h-[38.75px] overflow-hidden flex flex-row p-4 box-border items-center justify-center [transform:_rotate(45deg)] [transform-origin:0_0]">
        <img
          className="relative w-[15.66px] h-[15.66px]"
          alt=""
          src="/vector2.svg"
        />
      </div>
      <div className="absolute top-[435px] left-[21px] overflow-hidden flex flex-col items-start justify-center">
        <img
          className="relative w-[12.83px] h-[18.33px]"
          alt=""
          src="/vector3.svg"
        />
      </div>
      <div className="absolute top-[501px] left-[21px] text-13xl font-medium">
        Products
      </div>
      <img
        className="absolute top-[555px] left-[21px] rounded-8xs w-[175px] h-[191px] object-cover"
        alt=""
        src="/2ykf8mlb-1@2x.png"
      />
      <img
        className="absolute top-[555px] left-[233px] w-[175px] h-[191px] object-cover"
        alt=""
        src="/8h3ot6kk-1@2x.png"
      />
      <img
        className="absolute top-[808px] left-[21px] w-[175px] h-[191px] object-cover"
        alt=""
        src="/c5e2wydz-1@2x.png"
      />
      <img
        className="absolute top-[808px] left-[231px] w-[175px] h-[191px] object-cover"
        alt=""
        src="/qqyidy6b-1@2x.png"
      />
      <div className="absolute top-[753px] left-[21px]">Ancient statue</div>
      <div className="absolute top-[1006px] left-[21px]">Ancient trophy</div>
      <div className="absolute top-[1009px] left-[231px]">Ancient clock</div>
      <div className="absolute top-[753px] left-[233px]">Ancient furniture</div>
      <div className="absolute top-[771px] left-[21px] text-3xs">₹5000</div>
      <div className="absolute top-[1024px] left-[21px] text-3xs">₹50,000</div>
      <div className="absolute top-[1027px] left-[231px] text-3xs">₹30,000</div>
      <div className="absolute top-[771px] left-[233px] text-3xs">₹50,000</div>
      <div className="absolute top-[1075px] left-[21px] text-13xl font-medium">
        Reviews
      </div>
      <SectionCard1 />
      <img
        className="absolute top-[1155px] left-[118.29px] w-3 h-3"
        alt=""
        src="/star-1.svg"
      />
      <img
        className="absolute top-[1155px] left-[106.29px] w-3 h-3"
        alt=""
        src="/star-1.svg"
      />
      <img
        className="absolute top-[1155px] left-[130.29px] w-3 h-3"
        alt=""
        src="/star-1.svg"
      />
      <img
        className="absolute top-[1155px] left-[142.29px] w-3 h-3"
        alt=""
        src="/star-1.svg"
      />
      <img
        className="absolute top-[1155px] left-[154.29px] w-3 h-3"
        alt=""
        src="/star-4.svg"
      />
      <div className="absolute top-[1080px] left-[154px] rounded-8xs box-border w-[106px] h-[34px] flex flex-row py-2.5 pr-[26px] pl-4 items-center justify-start border-[1px] border-solid border-dimgray-400">
        <div className="relative inline-block w-[67px] h-[17px] shrink-0">
          Filter
        </div>
        <img
          className="relative w-[19px] h-[11.33px] ml-[-37px]"
          alt=""
          src="/frame-13.svg"
        />
      </div>
      <div className="absolute top-[1586px] left-[21px] text-13xl">
        <span className="font-semibold">{`View `}</span>
        <span className="font-medium">more</span>
      </div>
      <div className="absolute top-[1705px] left-[21px] text-13xl font-semibold">
        Contact
      </div>
      <div className="absolute top-[1634px] left-[23px] text-5xl [text-decoration:underline] text-gray-300">
        Website
      </div>
      <div className="absolute top-[1767px] left-[18px] text-5xl text-gray-300">
        Bleh@gmail.com
      </div>
      <div className="absolute top-[1759px] left-[262px] text-5xl text-gray-300">
        <p className="m-0">98765432334</p>
        <p className="m-0">43456789098</p>
      </div>
      <div className="absolute top-[1417px] left-[106px] flex flex-col items-center justify-center gap-[22px] font-inter">
        <div className="relative font-semibold">Rate and review</div>
        <div className="relative text-xs">
          Share your experience to help others
        </div>
        <img
          className="relative w-[155px] h-[31px]"
          alt=""
          src="/frame-20.svg"
        />
      </div>
      <Header iconCode="/group-81.svg" carIconCode="/settings.svg" />
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
        propBackgroundColor1="#021d24"
        propCursor2="pointer"
        propBackgroundColor2="unset"
        propCursor3="pointer"
        propBackgroundColor3="unset"
        onBuildingBlocksSegmentDarkClick={onBuildingBlocksSegmentDarkClick}
        onBuildingBlocksSegmentDark1Click={onBuildingBlocksSegmentDark1Click}
        onBuildingBlocksSegmentDark3Click={onBuildingBlocksSegmentDark3Click}
        onBuildingBlocksSegmentDark4Click={onBuildingBlocksSegmentDark4Click}
      />
    </div>
  );
};

export default StoresExtends;
