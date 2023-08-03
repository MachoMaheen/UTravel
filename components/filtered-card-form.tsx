import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type FilteredCardFormType = {
  /** Style props */
  propBorder?: Property.Border;
  propBoxSizing?: Property.BoxSizing;
};

const FilteredCardForm: NextPage<FilteredCardFormType> = ({
  propBorder,
  propBoxSizing,
}) => {
  const sizeShortTextSelectedTrueStyle: CSS.Properties = useMemo(() => {
    return {
      border: propBorder,
      boxSizing: propBoxSizing,
    };
  }, [propBorder, propBoxSizing]);

  return (
    <div
      className="relative rounded-sm bg-gray-dark-mode-tooltips-and-userprofile box-border w-[306px] h-[30px] text-left text-xs text-gray-dark-mode-text font-whitney border-[1px] border-solid border-cta-colors-link"
      style={sizeShortTextSelectedTrueStyle}
    >
      <div className="absolute top-[26.67%] left-[2.61%] font-medium">
        123456
      </div>
    </div>
  );
};

export default FilteredCardForm;
