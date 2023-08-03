import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type SearchSectionType = {
  /** Style props */
  searchLeft?: Property.Left;
};

const SearchSection: NextPage<SearchSectionType> = ({ searchLeft }) => {
  const groupDiv3Style: CSS.Properties = useMemo(() => {
    return {
      left: searchLeft,
    };
  }, [searchLeft]);

  return (
    <div
      className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[395px] h-[55px] flex flex-row py-0 pr-[274px] pl-0 items-center justify-center gap-[22px] text-left text-sm text-white font-m3-label-medium border-[1px] border-solid border-gray-700"
      style={groupDiv3Style}
    >
      <img
        className="relative rounded-xl w-6 h-6 overflow-hidden shrink-0"
        alt=""
        src="/search.svg"
      />
      <div className="relative font-semibold">Search</div>
    </div>
  );
};

export default SearchSection;
