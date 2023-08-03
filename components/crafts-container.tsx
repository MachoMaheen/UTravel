import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type CraftsContainerType = {
  b5s84wm1?: string;
  clarasCrafts?: string;
  c6q6ke1?: string;
  andrewsCrafts?: string;
  x8k14glh1?: string;
  sarasCrafts?: string;
  e2xlr0pp1?: string;
  ajaisCrafts?: string;

  /** Style props */
  propTop?: Property.Top;
};

const CraftsContainer: NextPage<CraftsContainerType> = ({
  b5s84wm1,
  clarasCrafts,
  c6q6ke1,
  andrewsCrafts,
  x8k14glh1,
  sarasCrafts,
  e2xlr0pp1,
  ajaisCrafts,
  propTop,
}) => {
  const component5Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[1209px] left-[6px] w-[414px] h-[198px] overflow-x-auto flex flex-row py-0 px-3.5 box-border items-center justify-start gap-[19px] text-left text-xl text-white font-m3-label-medium"
      style={component5Style}
    >
      <div className="relative w-[175px] h-[198px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-8xs w-[175px] h-[198px] object-cover"
          alt=""
          src={b5s84wm1}
        />
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gray-1700 w-[175px] h-[198px]" />
        <div className="absolute top-[159px] left-[8px] font-semibold">
          {clarasCrafts}
        </div>
      </div>
      <div className="relative w-[175px] h-[198px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-8xs w-[175px] h-[198px] object-cover"
          alt=""
          src={c6q6ke1}
        />
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gray-1700 w-[175px] h-[198px]" />
        <div className="absolute top-[159px] left-[10px] font-semibold">
          {andrewsCrafts}
        </div>
      </div>
      <div className="relative w-[175px] h-[198px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-8xs w-[175px] h-[198px] object-cover"
          alt=""
          src="/ohos6ehv-1@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gray-1700 w-[175px] h-[198px]" />
        <div className="absolute top-[159px] left-[9px] font-semibold">
          Pew’s crafts
        </div>
      </div>
      <div className="relative w-[175px] h-[198px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-8xs w-[175px] h-[198px] object-cover"
          alt=""
          src={x8k14glh1}
        />
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gray-1700 w-[175px] h-[198px]" />
        <div className="absolute top-[159px] left-[9px] font-semibold">
          {sarasCrafts}
        </div>
      </div>
      <div className="relative w-[175px] h-[198px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-8xs w-[175px] h-[198px] object-cover"
          alt=""
          src={e2xlr0pp1}
        />
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gray-1700 w-[175px] h-[198px]" />
        <div className="absolute top-[159px] left-[10px] font-semibold">
          {ajaisCrafts}
        </div>
      </div>
    </div>
  );
};

export default CraftsContainer;
