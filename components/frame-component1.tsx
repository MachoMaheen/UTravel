import type { NextPage } from "next";

type FrameComponent1Type = {
  onClose?: () => void;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ onClose }) => {
  return (
    <div className="relative rounded-xl bg-gray-1000 w-[430px] h-[534px] overflow-y-auto max-w-full max-h-full overflow-auto text-center text-xl text-white font-m3-label-medium">
      <div className="absolute top-[19px] left-[172px] rounded-xl bg-dimgray-500 w-[74px] h-1.5" />
      <div className="absolute top-[99px] left-[28px] tracking-[0.5px] leading-[16px] font-semibold">
        Filter
      </div>
      <div className="absolute top-[129.5px] left-[27.5px] box-border w-[367px] h-px border-t-[1px] border-solid border-darkgray-500" />
      <div className="absolute top-[183px] left-[82px] flex flex-col items-start justify-center gap-[43px]">
        <div className="relative tracking-[0.5px] leading-[16px]">
          Artefacts
        </div>
        <div className="relative tracking-[0.5px] leading-[16px]">
          Restaurants
        </div>
        <div className="relative tracking-[0.5px] leading-[16px]">
          Community’s choice
        </div>
        <div className="relative tracking-[0.5px] leading-[16px]">
          Bake house
        </div>
        <div className="relative tracking-[0.5px] leading-[16px]">Cafe</div>
      </div>
      <img
        className="absolute top-[178px] left-[28px] w-5 h-5"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute top-[237px] left-[28px] w-5 h-5"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute top-[296px] left-[28px] w-5 h-5"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute top-[355px] left-[28px] w-5 h-5"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute top-[414px] left-[28px] w-5 h-5"
        alt=""
        src="/vector.svg"
      />
    </div>
  );
};

export default FrameComponent1;
