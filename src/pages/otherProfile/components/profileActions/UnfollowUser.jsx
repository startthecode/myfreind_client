import { Icon } from "@iconify/react";
import { Button } from "../../../../ui/PresentationalComponents";
import SlideUpMenu from "../../../../ui/PresentationalComponents/SlideUpMenu";

export const UnfollowUser = () => {
  return (
    <SlideUpMenu.Open whichPopUp="profileActions">
      <div className="basis-5/12 px-1">
        <Button variation="secondary" size="md" className={"flex items-center"}>
          Following
          <Icon icon="ph:caret-down-light" className="ml-2 text-[18px]" />
        </Button>
      </div>
    </SlideUpMenu.Open>
  );
};
