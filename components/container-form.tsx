import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type ContainerFormType = {
  itemImageUrl?: string;
  craftsImageUrl?: string;

  /** Style props */
  propBorderRadius?: Property.BorderRadius;
};

const ContainerForm: NextPage<ContainerFormType> = ({
  itemImageUrl,
  craftsImageUrl,
  propBorderRadius,
}) => {
  const rectangleDiv4Style: CSS.Properties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className="relative w-[175px] h-[198px] text-left text-xl text-white font-m3-label-medium">
      <img
        className="absolute top-[0px] left-[0px] rounded-8xs w-[175px] h-[198px] object-cover"
        alt=""
        src={itemImageUrl}
      />
      <div
        className="absolute top-[0px] left-[0px] rounded-8xs bg-gray-1600 w-[175px] h-[198px]"
        style={rectangleDiv4Style}
      />
      <div className="absolute top-[145px] left-[11px] flex flex-col items-start justify-start">
        <div className="relative w-[26px] h-[23px]">
          <img
            className="absolute top-[4px] left-[11px] w-[15px] h-3.5"
            alt=""
            src="/star-5.svg"
          />
          <div className="absolute top-[0px] left-[0px] font-semibold">4</div>
        </div>
        <div className="relative font-semibold">{craftsImageUrl}</div>
      </div>
    </div>
  );
};

export default ContainerForm;
