import { Icon } from "@iconify/react";
import { Row } from "../../ui/PresentationalComponents/Row";

export const Story_footer = () => {
  return (
    <Row
      vPosition="between"
      className="absolute bottom-[20px] left-0 w-full px-[15px] z-[102]"
    >
      <div className="border-[1px] rounded-full flex justify-center items-center h-[38px] w-[38px]">
        <Icon icon="bi:camera" className=" text-white" height={20} />
      </div>

      <div className="border-[1px] rounded-full flex justify-center items-center px-[15px] h-[38px] w-[70%] relative">
        <input
          type="text"
          className="bg-transparent focus:outline-none text-white w-full pr-8"
        />
        <Icon
          icon="ph:dots-three-bold"
          width={25}
          className="right-[15px] absolute top-[50%] translate-y-[-50%] text-white"
        />
      </div>

      <Icon icon="ion:paper-plane-outline" className="text-white" height={24} />
    </Row>
  );
};
