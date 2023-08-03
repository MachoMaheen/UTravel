import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const CardContainer2: NextPage = () => {
  const router = useRouter();

  const onCard1ContainerClick = useCallback(() => {
    router.push("/expanded");
  }, [router]);

  return (
    <div
      className="absolute top-[316px] left-[9px] rounded-xl flex flex-col py-2.5 px-0 items-center justify-center gap-[10px] cursor-pointer text-left text-sm text-white font-m3-label-medium border-[2px] border-solid border-white"
      onClick={onCard1ContainerClick}
    >
      <img
        className="relative rounded-lg w-[385px] h-[221px] object-cover"
        alt=""
        src="/ss-14@2x.png"
      />
      <div className="w-[409px] flex flex-col items-start justify-center gap-[7px]">
        <div className="relative text-13xl font-medium"> Iffk</div>
        <div className="relative"> Dec 9 - 16</div>
        <div className="flex flex-row items-center justify-start gap-[166px]">
          <div className="relative"> Aries Plex SL Cinemas</div>
          <div className="rounded-xl h-6 flex flex-row p-2.5 box-border items-center justify-center gap-[10px]">
            <img
              className="relative w-[15px] h-3.5 object-cover"
              alt=""
              src="/group-18@2x.png"
            />
            <div className="relative inline-block w-[46px] h-3 shrink-0">
              2.1km
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-sm box-border w-[140px] h-[39px] flex flex-row p-2.5 items-center justify-center text-smi border-[0.5px] border-solid border-gray-700">
        <div className="relative">16K people loved ❤️</div>
      </div>
    </div>
  );
};

export default CardContainer2;
