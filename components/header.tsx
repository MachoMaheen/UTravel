import type { NextPage } from "next";

type HeaderType = {
  iconCode?: string;
  carIconCode?: string;
};

const Header: NextPage<HeaderType> = ({ iconCode, carIconCode }) => {
  return (
    <div className="absolute top-[0px] left-[calc(50%_-_214px)] w-[428px] h-[106px] text-left text-xl text-white font-m3-label-medium">
      <div className="absolute top-[0px] left-[calc(50%_-_214px)] bg-darkslategray-500 [backdrop-filter:blur(29px)] w-[428px] h-[106px]" />
      <div className="absolute top-[70px] left-[calc(50%_-_23px)] font-semibold">
        Buzz
      </div>
      <img
        className="absolute top-[61px] left-[calc(50%_-_196px)] w-8 h-8"
        alt=""
        src={iconCode}
      />
      <img
        className="absolute top-[61px] left-[calc(50%_+_168px)] w-8 h-8 overflow-hidden"
        alt=""
        src={carIconCode}
      />
    </div>
  );
};

export default Header;
