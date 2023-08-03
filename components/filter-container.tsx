import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const FilterContainer: NextPage = () => {
  const router = useRouter();

  const onGroupContainer3Click = useCallback(() => {
    router.push("/stores-extends");
  }, [router]);

  return (
    <div
      className="absolute top-[310px] left-[18px] w-[184px] h-[258px] cursor-pointer text-left text-3xs text-white font-m3-label-medium"
      onClick={onGroupContainer3Click}
    >
      <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gainsboro-200 w-[184px] h-[198px]" />
      <div className="absolute top-[202px] left-[7px] text-sm font-semibold">
        Jack’s Antiques
      </div>
      <div className="absolute top-[223px] left-[148px]">1.2km</div>
      <img
        className="absolute top-[202px] left-[158px] w-[18px] h-[18px] object-cover"
        alt=""
        src="/group-182@2x.png"
      />
      <div className="absolute top-[240px] left-[7px] rounded-[50%] bg-springgreen w-[11px] h-[11px]" />
      <div className="absolute top-[240px] left-[26px]">open</div>
      <div className="absolute top-[222px] left-[7px]">Closes : 7pm</div>
      <img
        className="absolute top-[240px] left-[129.29px] w-3 h-3"
        alt=""
        src="/star-1.svg"
      />
      <img
        className="absolute top-[240px] left-[117.29px] w-[11.41px] h-[10.85px]"
        alt=""
        src="/star-51.svg"
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
      <img
        className="absolute top-[0px] left-[0px] rounded-8xs w-[184px] h-[198px] object-cover"
        alt=""
        src="/eb46s2bp-12@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[184px] h-[258px] border-[1px] border-solid border-gray-700" />
    </div>
  );
};

export default FilterContainer;
