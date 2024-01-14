import { useContext } from "react";
import { Button } from "../../../ui/PresentationalComponents";
import { OtherProfileContext } from "../contextAPI/OtherProfileProvider";

export const MessageTheUser = () => {
  let { UserName, isAccessible, UserID } =
    useContext(OtherProfileContext)?.profile_data ?? {};

  return (
    <div className="basis-5/12 px-1">
      <Button variation="grey" size="md" link={`/chat/${UserID}`}>
        Message
      </Button>
    </div>
  );
};
