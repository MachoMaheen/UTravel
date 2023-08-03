import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type AntiquesContainerType = {
  antiqueShopId?: string;
  antiqueDescription?: string;

  /** Style props */
  propLeft?: Property.Left;
};

const AntiquesContainer: NextPage<AntiquesContainerType> = ({
  antiqueShopId,
  antiqueDescription,
  propLeft,
}) => {
  const groupDiv5Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[1705px] left-[19px] w-[184px] h-[258px] text-left text-sm text-white font-m3-label-medium"
      style={groupDiv5Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gainsboro-200 w-[184px] h-[198px]" />
      <img
        className="absolute top-[0px] left-[0px] rounded-8xs w-[184px] h-[198px] object-cover"
        alt=""
        src={antiqueShopId}
      />
      <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[184px] h-[258px] border-[1px] border-solid border-gray-700" />
      <div className="absolute top-[202px] left-[12px] font-semibold">
        {antiqueDescription}
      </div>
      <div className="absolute top-[223px] left-[143px] text-3xs font-semibold">
        1.2km
      </div>
      <img
        className="absolute top-[202px] left-[153px] w-[18px] h-[18px] object-cover"
        alt=""
        src="/group-182@2x.png"
      />
      <div className="absolute top-[241px] left-[12px] rounded-[50%] bg-springgreen w-2.5 h-2.5" />
      <div className="absolute top-[241px] left-[25px] text-5xs font-semibold">
        open
      </div>
      <div className="absolute top-[219px] left-[12px] text-4xs font-semibold">
        closes : 7pm
      </div>
      <img
        className="absolute top-[240px] left-[129.29px] w-3 h-3"
        alt=""
        src="/star-1.svg"
      />
      <img
        className="absolute top-[240px] left-[117.29px] w-3 h-3"
        alt=""
        src="/star-1.svg"
      />
      <img
        className="absolute top-[240px] left-[141.29px] w-3 h-3"
        alt=""
        src="/star-1.svg"
      />
      <img
        className="absolute top-[240px] left-[153.29px] w-3 h-3"
        alt=""
        src="/star-1.svg"
      />
      <img
        className="absolute top-[240px] left-[165.29px] w-3 h-3"
        alt=""
        src="/star-4.svg"
      />
    </div>
  );
};

export default AntiquesContainer;
