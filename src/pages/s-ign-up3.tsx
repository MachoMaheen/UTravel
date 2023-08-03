import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const SIgnUp3: NextPage = () => {
  const router = useRouter();

  const onSIgnUp3ContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div
      className="relative [background:linear-gradient(rgba(0,_143,_57,_0.2),_rgba(0,_143,_57,_0.2)),_linear-gradient(rgba(12,_0,_156,_0.2),_rgba(12,_0,_156,_0.2)),_#000] w-full h-[926px] overflow-hidden cursor-pointer text-left text-3xs text-white font-m3-label-medium"
      onClick={onSIgnUp3ContainerClick}
    >
      <div className="absolute top-[300px] left-[174px] text-17xl font-semibold">
        Buzz
      </div>
      <div className="absolute top-[528px] left-[68px] rounded-xl bg-gainsboro-200 w-[292px] h-px" />
      <div className="absolute top-[475px] left-[67px] text-xl font-semibold">
        Set radius to explore
      </div>
      <div className="absolute top-[521px] left-[195px] rounded-[50%] bg-white w-4 h-4" />
      <div className="absolute top-[527px] left-[68px] rounded-xl bg-white w-[129px] h-[3px]" />
      <div className="absolute top-[575px] left-[154px] rounded-3xs box-border w-[114px] h-[47px] border-[1px] border-solid border-white" />
      <div className="absolute top-[568px] left-[173px] bg-gray-1000 w-[39px] h-3.5" />
      <div className="absolute top-[569px] left-[177px] font-semibold">
        Radius
      </div>
      <div className="absolute top-[589px] left-[177px] text-base font-semibold">
        5.0
      </div>
      <div className="absolute top-[589px] left-[225px] text-base font-semibold">
        Km
      </div>
      <img
        className="absolute top-[595px] left-[249px] w-[11px] h-[11px] overflow-hidden"
        alt=""
        src="/keyboard-arrow-up1.svg"
      />
      <div className="absolute top-[534px] left-[67px] font-semibold">0</div>
      <div className="absolute top-[533px] left-[349px] font-semibold">10</div>
      <div
        className="absolute top-[651px] left-[107px] rounded-xl box-border w-[206px] h-[45px] flex flex-row py-[11px] px-[59px] items-center justify-center gap-[10px] cursor-pointer text-xl text-palegreen-200 border-[1px] border-solid border-white"
        onClick={onGroupContainerClick}
      >
        <div className="relative font-semibold">Start exploring</div>
        <img
          className="relative w-[29px] h-[29px] overflow-hidden shrink-0"
          alt=""
          src="/arrow-circle-up1.svg"
        />
      </div>
    </div>
  );
};

export default SIgnUp3;
