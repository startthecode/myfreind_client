import { useState } from "react";
import { ToggleButton } from "../../ui/PresentationalComponents/toggleButton";
import Inputs from "../../ui/PresentationalComponents/Inputs";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

export const StoryHiglightDtl = ({ post_type }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let [hightlight, setHighlight] = useState(searchParams.get("highlight"));

  const headingClasses = {
    className: "text-[16px] mt-[25px] mr-4 mb-3 ",
  };
  if (post_type !== "story") return null;
  function handleToggle(e) {
    setHighlight(e.target.checked);
  }
  return (
    <>
      <h2 {...headingClasses}>Add to highlight</h2>
      <ToggleButton
        onChange={handleToggle}
        defaultChecked={hightlight}
      ></ToggleButton>
      {hightlight && (
        <Inputs
          name="hightlight_title"
          placeholder="Hightlight title"
          required
        />
      )}
    </>
  );
};
