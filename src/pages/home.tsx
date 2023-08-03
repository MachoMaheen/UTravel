import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import SectionCard from "components/section-card";
import DiscoverContainer from "components/discover-container";
import FormContainer5 from "components/form-container5";
import PopularEventsCard from "components/popular-events-card";
import FormContainer2 from "components/form-container2";
import CraftsContainer from "components/crafts-container";
import Header from "components/header";
import Footer from "components/footer";

const Home: NextPage = () => {
  const router = useRouter();

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
    <div className="relative [background:linear-gradient(rgba(0,_143,_57,_0.2),_rgba(0,_143,_57,_0.2)),_linear-gradient(rgba(12,_0,_156,_0.2),_rgba(12,_0,_156,_0.2)),_#000] w-full h-[1898px] overflow-hidden text-left text-5xl text-white font-m3-label-medium">
      <SectionCard
        sectionTitle="Around the corner"
        dimensionLabel="/arrow-forward.svg"
      />
      <SectionCard
        sectionTitle="Explore crafts"
        dimensionLabel="/arrow-forward1.svg"
        aroundTheCornerTop="1135px"
        aroundTheCornerHeight="585px"
        groupDivHeight="585px"
        rectangleDivTop="521px"
        discoverBorder="1px solid #71b2ff"
      />
      <div className="absolute top-[368px] left-[5px] w-[418px] h-[359px] text-17xl">
        <div className="absolute top-[18px] left-[13px] font-semibold">
          What’s Buzzing
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[418px] h-[359px] border-[1px] border-solid border-gray-700" />
        <div className="absolute top-[296px] left-[250px] w-[149px] h-[45px]">
          <DiscoverContainer />
        </div>
      </div>
      <div className="absolute top-[134px] left-[18px] text-13xl font-semibold">
        Recent searches
      </div>
      <div className="absolute top-[664px] left-[19px] rounded-[50%] bg-khaki box-border w-[45px] h-[45px] border-[1px] border-solid border-white" />
      <div className="absolute top-[1048px] left-[19px] rounded-[50%] bg-peachpuff box-border w-[45px] h-[45px] border-[1px] border-solid border-white" />
      <div className="absolute top-[1656px] left-[19px] rounded-[50%] bg-lightskyblue box-border w-[45px] h-[45px] border-[1px] border-solid border-white" />
      <div className="absolute top-[675px] left-[29px] font-semibold">😍</div>
      <div className="absolute top-[1059px] left-[29px] font-semibold">😍</div>
      <div className="absolute top-[1667px] left-[29px] font-semibold">😍</div>
      <div className="absolute top-[664px] left-[49px] rounded-[50%] bg-yellowgreen box-border w-[45px] h-[45px] border-[1px] border-solid border-white" />
      <div className="absolute top-[1048px] left-[49px] rounded-[50%] bg-lightsalmon box-border w-[45px] h-[45px] border-[1px] border-solid border-white" />
      <div className="absolute top-[1656px] left-[49px] rounded-[50%] bg-cornflowerblue-100 box-border w-[45px] h-[45px] border-[1px] border-solid border-white" />
      <div className="absolute top-[698px] left-[33px] text-3xs font-semibold text-black">
        100
      </div>
      <div className="absolute top-[1082px] left-[32px] text-3xs font-semibold text-black">
        100
      </div>
      <div className="absolute top-[1690px] left-[32px] text-3xs font-semibold text-black">
        100
      </div>
      <div className="absolute top-[697px] left-[63px] text-3xs font-semibold text-black">
        150
      </div>
      <div className="absolute top-[1082px] left-[63px] text-3xs font-semibold text-black">
        150
      </div>
      <div className="absolute top-[1690px] left-[63px] text-3xs font-semibold text-black">
        150
      </div>
      <div className="absolute top-[673px] left-[59px] font-semibold">🔥</div>
      <div className="absolute top-[1057px] left-[59px] font-semibold">🔥</div>
      <div className="absolute top-[1665px] left-[59px] font-semibold">🔥</div>
      <div className="absolute top-[664px] left-[81px] rounded-[50%] bg-greenyellow box-border w-[45px] h-[45px] border-[1px] border-solid border-white" />
      <div className="absolute top-[1048px] left-[81px] rounded-[50%] bg-orangered box-border w-[45px] h-[45px] border-[1px] border-solid border-white" />
      <div className="absolute top-[1656px] left-[81px] rounded-[50%] bg-dodgerblue box-border w-[45px] h-[45px] border-[1px] border-solid border-white" />
      <div className="absolute top-[674px] left-[92px] font-semibold">😽</div>
      <div className="absolute top-[1058px] left-[92px] font-semibold">😽</div>
      <div className="absolute top-[1666px] left-[92px] font-semibold">😽</div>
      <div className="absolute top-[698px] left-[95px] text-3xs font-semibold text-black">
        110
      </div>
      <div className="absolute top-[1082px] left-[95px] text-3xs font-semibold text-black">
        110
      </div>
      <div className="absolute top-[1690px] left-[95px] text-3xs font-semibold text-black">
        110
      </div>
      <FormContainer5 />
      <PopularEventsCard />
      <FormContainer2 />
      <CraftsContainer
        b5s84wm1="/4b5s84wm-1@2x.png"
        clarasCrafts="Clara’s crafts"
        c6q6ke1="/00c6q6ke-1@2x.png"
        andrewsCrafts="Andrew’s crafts"
        x8k14glh1="/x8k14glh-11@2x.png"
        sarasCrafts="Sara’s crafts"
        e2xlr0pp1="/e2xlr0pp-1@2x.png"
        ajaisCrafts="Ajai’s crafts"
      />
      <CraftsContainer
        b5s84wm1="/00c6q6ke-1@2x.png"
        clarasCrafts="Andrew’s crafts"
        c6q6ke1="/e2xlr0pp-1@2x.png"
        andrewsCrafts="Ajai’s crafts"
        x8k14glh1="/4b5s84wm-1@2x.png"
        sarasCrafts="Clara’s crafts"
        e2xlr0pp1="/x8k14glh-11@2x.png"
        ajaisCrafts="Sara’s crafts"
        propTop="1433px"
      />
      <Header iconCode="/group-8.svg" carIconCode="/settings.svg" />
      <Footer
        dimensions="/home.svg"
        productDimensions="/shopping-bag.svg"
        imageDimensions="/icon1.svg"
        imageCode="/component-1.svg"
        imageSizeCode="/icon2.svg"
        imageDimensionsCode="/vector1.svg"
        imageCode2="/icon3.svg"
        imageDimensions2="/group.svg"
        icon={false}
        icon2={false}
        icon4={false}
        icon5={false}
        icon7={false}
        onBuildingBlocksSegmentDark1Click={onBuildingBlocksSegmentDark1Click}
        onBuildingBlocksSegmentDark3Click={onBuildingBlocksSegmentDark3Click}
        onBuildingBlocksSegmentDark4Click={onBuildingBlocksSegmentDark4Click}
      />
    </div>
  );
};

export default Home;
