import type { NextPage } from "next";

const SectionCard1: NextPage = () => {
  return (
    <div className="absolute top-[1129px] left-[12px] w-[404px] h-[244px] text-left text-3xs text-silver-100 font-m3-label-medium">
      <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[404px] h-[244px] border-[1px] border-solid border-gray-700" />
      <div className="absolute top-[47px] left-[12px] text-5xl font-medium text-white">
        lorem
      </div>
      <div className="absolute top-[8px] left-[11px] rounded-[50%] bg-gainsboro-200 w-[30px] h-[30px]" />
      <div className="absolute top-[8px] left-[45px] text-sm">
        Robert alexander 3rd
      </div>
      <div className="absolute top-[26px] left-[45px] text-gray-700">
        16h ago
      </div>
      <div className="absolute top-[16px] left-[382px] rounded-[50%] bg-gainsboro-200 w-1 h-1" />
      <div className="absolute top-[21px] left-[382px] rounded-[50%] bg-gainsboro-200 w-1 h-1" />
      <div className="absolute top-[26px] left-[382px] rounded-[50%] bg-gainsboro-200 w-1 h-1" />
      <div className="absolute top-[75px] left-[11px] font-light [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:96] [-webkit-box-orient:vertical] w-[331px]">
        <p className="m-0">{`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", `}</p>
      </div>
      <div className="absolute top-[212px] left-[13px] flex flex-row items-center justify-center gap-[83px]">
        <div className="flex flex-row items-center justify-center gap-[16px]">
          <img
            className="relative w-[18.83px] h-[18.41px]"
            alt=""
            src="/vector4.svg"
          />
          <div className="relative font-light">350</div>
          <img
            className="relative w-[18.83px] h-[18.41px]"
            alt=""
            src="/vector5.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <img
            className="relative w-[19px] h-[19px]"
            alt=""
            src="/vector6.svg"
          />
          <div className="relative font-light">123</div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <img className="relative w-4 h-[17px]" alt="" src="/vector7.svg" />
          <div className="relative font-light">Share</div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard1;
