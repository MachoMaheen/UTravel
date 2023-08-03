import type { NextPage } from "next";

type FrameComponentType = {
  onClose?: () => void;
};

const FrameComponent: NextPage<FrameComponentType> = ({ onClose }) => {
  return (
    <div className="relative w-[430px] h-[534px] overflow-y-auto max-w-full max-h-full overflow-auto text-center text-xl text-white font-m3-label-medium">
      <div className="absolute top-[0px] left-[-4px] rounded-[30px] bg-gray-1000 w-[433px] h-[534px]" />
      <div className="absolute top-[19px] left-[172px] rounded-xl bg-dimgray-500 w-[74px] h-1.5" />
      <div className="absolute top-[99px] left-[28px] tracking-[0.5px] leading-[16px] font-semibold">
        Filter
      </div>
      <div className="absolute top-[129.5px] left-[27.5px] box-border w-[367px] h-px border-t-[1px] border-solid border-darkgray-500" />
      <div className="absolute top-[183px] left-[82px] flex flex-col items-start justify-center gap-[43px]">
        <div className="relative tracking-[0.5px] leading-[16px]">Cultural</div>
        <div className="relative tracking-[0.5px] leading-[16px]">
          Technical
        </div>
        <div className="relative tracking-[0.5px] leading-[16px]">
          Workshops
        </div>
        <div className="relative tracking-[0.5px] leading-[16px]">
          Community’s choice
        </div>
        <div className="relative tracking-[0.5px] leading-[16px]">
          Literature
        </div>
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

export default FrameComponent;
