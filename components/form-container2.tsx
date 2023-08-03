import type { NextPage } from "next";
import ContainerForm from "./container-form";
import FormContainer1 from "./form-container1";

const FormContainer2: NextPage = () => {
  return (
    <div className="absolute top-[832px] left-[6px] w-[413px] h-[198px] overflow-x-auto flex flex-row py-0 px-3.5 box-border items-center justify-start gap-[19px] text-left text-xl text-white font-m3-label-medium">
      <ContainerForm
        itemImageUrl="/x8k14glh-11@2x.png"
        craftsImageUrl="Sara’s crafts"
      />
      <FormContainer1
        imageDimensions="/image-3@2x.png"
        likeCount="9k liked"
        eventTitle="Olam’23"
      />
      <ContainerForm
        itemImageUrl="/sor1ptzj-1@2x.png"
        craftsImageUrl="Coffee pup"
        propBorderRadius="unset"
      />
      <FormContainer1
        imageDimensions="/ss-11@2x.png"
        likeCount="16k liked"
        eventTitle="Iffk"
        propTop="145px"
        propMarginTop="unset"
      />
      <ContainerForm
        itemImageUrl="/0dlc13ot-11@2x.png"
        craftsImageUrl="Bread bloom"
        propBorderRadius="5px"
      />
    </div>
  );
};

export default FormContainer2;
