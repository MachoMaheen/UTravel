import type { NextPage } from "next";

const LocationForm: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[38px] text-center text-xl text-white font-m3-label-medium">
      <div className="flex flex-col items-start justify-start gap-[19px]">
        <div className="relative tracking-[0.5px] leading-[16px] font-semibold">
          Change location
        </div>
        <div className="rounded-8xs box-border w-[381px] h-14 flex flex-row py-[7px] pr-[213px] pl-0 items-center justify-center gap-[15px] text-left text-mini text-darkgray-500 border-[1px] border-solid border-white">
          <img
            className="relative w-[25px] h-[25px] overflow-hidden shrink-0"
            alt=""
            src="/location-pin.svg"
          />
          <div className="relative font-semibold">Enter location</div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-[12px] text-left">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="relative font-semibold">Change radius</div>
          <div className="relative w-[391px] h-[29px] text-sm">
            <div className="absolute top-[7px] left-[1px] rounded-xl bg-gainsboro-200 w-[380px] h-px" />
            <div className="absolute top-[0px] left-[128px] rounded-[50%] bg-white w-4 h-4" />
            <div className="absolute top-[13px] left-[0px] font-semibold">
              0
            </div>
            <div className="absolute top-[12px] left-[375px] font-semibold">
              10
            </div>
            <div className="absolute top-[6px] left-[1px] rounded-xl bg-white w-[129px] h-[3px]" />
          </div>
        </div>
        <div className="relative w-[114px] h-[54px] text-base">
          <div className="absolute top-[7px] left-[0px] rounded-3xs box-border w-[114px] h-[47px] border-[1px] border-solid border-white" />
          <div className="absolute top-[0px] left-[9px] bg-gray-1000 w-[39px] h-3.5" />
          <div className="absolute top-[1px] left-[13px] text-3xs font-semibold">
            Radius
          </div>
          <div className="absolute top-[21px] left-[23px] font-semibold">
            5.0
          </div>
          <div className="absolute top-[21px] left-[71px] font-semibold">
            Km
          </div>
          <img
            className="absolute top-[27px] left-[95px] w-[11px] h-[11px] overflow-hidden"
            alt=""
            src="/keyboard-arrow-up.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationForm;
