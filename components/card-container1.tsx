import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type CardContainer1Type = {
  ratingOrPopularity?: string;
  productCode?: string;

  /** Style props */
  propLeft?: Property.Left;
};

const CardContainer1: NextPage<CardContainer1Type> = ({
  ratingOrPopularity,
  productCode,
  propLeft,
}) => {
  const groupDiv4Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[71px] left-[0px] rounded-8xs bg-pink box-border w-24 h-[34px] flex flex-row py-0 pr-2 pl-4 items-center justify-center gap-[7px] text-left text-sm text-black font-m3-label-medium border-[1px] border-solid border-dimgray-400"
      style={groupDiv4Style}
    >
      <div className="relative">{ratingOrPopularity}</div>
      <img
        className="relative w-[28.28px] h-[28.28px] overflow-hidden shrink-0"
        alt=""
        src={productCode}
      />
    </div>
  );
};

export default CardContainer1;
