import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type FilteredCardFormContainerType = {
  /** Style props */
  propBorder?: Property.Border;
};

const FilteredCardFormContainer: NextPage<FilteredCardFormContainerType> = ({
  propBorder,
}) => {
  const sizeLongTextSelectedTrueStyle: CSS.Properties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div
      className="rounded-sm bg-gray-dark-mode-tooltips-and-userprofile box-border w-[306px] h-[63px] flex flex-col pt-[9px] pb-1.5 pr-2 pl-2.5 items-start justify-between text-left text-xs text-gray-dark-mode-text font-whitney border-[1px] border-solid border-cta-colors-link"
      style={sizeLongTextSelectedTrueStyle}
    >
      <div className="self-stretch relative font-medium">Text</div>
      <div className="self-stretch relative text-5xs font-consolas text-gray-dark-mode-channel-names text-right opacity-[0.5]">
        200
      </div>
    </div>
  );
};

export default FilteredCardFormContainer;
