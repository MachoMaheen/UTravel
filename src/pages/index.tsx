import type { NextPage } from "next";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/router";
import LocationCard from "components/location-card";
import LocationForm1 from "components/location-form1";

const SIgnUp2: NextPage = () => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/")
  }, [router]);

  const onSIgnUp2ContainerClick = useCallback(() => {
    router.push("/s-ign-up");
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    router.push("/s-ign-up3");
  }, [router]);

  return (
    <div
      className="relative [background:linear-gradient(rgba(0,_143,_57,_0.2),_rgba(0,_143,_57,_0.2)),_linear-gradient(rgba(12,_0,_156,_0.2),_rgba(12,_0,_156,_0.2)),_#000] w-full h-[926px] overflow-hidden cursor-pointer text-left text-xl text-white font-m3-label-medium"
      onClick={onSIgnUp2ContainerClick}
    >
      <LocationCard
        propPosition="absolute"
        propTop="581px"
        propLeft="68px"
        onGroupButtonClick={onGroupButtonClick}
      />
      <div
        className="absolute top-[650px] left-[155px] rounded-xl box-border w-[116px] h-[45px] flex flex-row py-[11px] px-[59px] items-center justify-center gap-[10px] cursor-pointer text-palegreen-200 border-[1px] border-solid border-white"
        onClick={onGroupContainerClick}
      >
        <div className="relative font-semibold">Next</div>
    
        <img
          className="relative w-[29px] h-[29px] overflow-hidden shrink-0"
          alt=""
          src="/arrow-circle-up.svg"
        />
      </div>
      <div className="absolute top-[300px] left-[174px] text-17xl font-semibold">
        Buzz
      </div>
      <div className="absolute top-[490px] left-[68px] w-[292px] h-[66px] overflow-hidden text-mini">
        <LocationForm1
          locationInputText="Trivandrum"
          propPosition="absolute"
          propTop="10px"
          propLeft="0px"
        />
        <div className="absolute top-[0px] left-[45px] bg-gray-1000 w-[108px] h-[21px]" />
        <img
          className="absolute top-[24px] left-[245px] w-7 h-7 overflow-hidden"
          alt=""
          src="/done.svg"
        />
        <div className="absolute top-[1px] left-[53px]">Enter location</div>
      </div>
    </div>
  );
};

export default SIgnUp2;
