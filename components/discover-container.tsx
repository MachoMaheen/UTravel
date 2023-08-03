import type { NextPage } from "next";

const DiscoverContainer: NextPage = () => {
  return (
    <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[149px] h-[45px] overflow-hidden flex flex-row py-0 pr-0 pl-[11px] items-center justify-start gap-[48px] text-left text-sm text-white font-m3-label-medium border-[1px] border-solid border-palegreen-100">
      <div className="relative font-semibold inline-block w-[55px] h-[17px] shrink-0">
        Discover
      </div>
      <img
        className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
        alt=""
        src="/arrow-forward2.svg"
      />
    </div>
  );
};

export default DiscoverContainer;
