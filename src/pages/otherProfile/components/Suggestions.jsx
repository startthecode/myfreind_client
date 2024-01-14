import { Icon } from "@iconify/react";
import { Button } from "../../../ui/PresentationalComponents";

export const Suggestions = () => {
  return (
    <div className="basis-2/12 px-1">
      <Button variation="grey" size="md">
      <Icon height={19} icon="iconoir:add-user" />
      </Button>
    </div>
  );
};
