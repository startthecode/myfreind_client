import { useContext } from "react";
import { Button } from "../../../ui/PresentationalComponents";
import { ProfileContext } from "../contextAPI/ProfileContext";
import { Link, useNavigate } from "react-router-dom";
export const EditProfile = () => {
  let { profile_data } = useContext(ProfileContext);
  let navigate = useNavigate();
  function handleEvent() {
    navigate("/editprofile", { state: { data: profile_data } });
  }

  return (
    <div className="basis-5/12 px-1">
      <Button
        onClick={handleEvent}
        // link={{ pathname: "/editprofile", state: { data: profile_data } }}
        variation="secondary"
        size="md"
      >
        Edit Profile
      </Button>
    </div>
  );
};
