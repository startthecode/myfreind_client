import { get_user_info } from "../../../redux/store";
import { Button } from "../../../ui/PresentationalComponents";
import SlideUpMenu from "../../../ui/PresentationalComponents/SlideUpMenu";
import { SlideUpMenuInnerRows } from "../../../ui/PresentationalComponents/SlideUpMenuInnerRows";
import { useSelector } from "react-redux";

export const ShareProfile = () => {
  let { UserName } = useSelector(get_user_info).user_info;
  return (
    <div className="basis-5/12 px-1">
      <SlideUpMenu.Open whichPopUp="myProfileShare">
        <Button variation="grey" size="md">
          Share Profile
        </Button>
      </SlideUpMenu.Open>

      <SlideUpMenu.PopUp popUpName="myProfileShare">
        <p class="text-center text-white text-[16px]">Share</p>
        <p class="text-center text-gray-50 text-[12px] mb-[30px]">
          Only logged in user can see shared profile data
        </p>

        <SlideUpMenuInnerRows
          url={`https://www.facebook.com/sharer/sharer.php?u=${
            import.meta.env.VITE_CLIENT_URL
          }UserName`}
          name={"Share on facebook"}
          iconName={"iconoir:facebook"}
        />

        <SlideUpMenuInnerRows
          url={`https://www.linkedin.com/sharing/share-offsite/?url=${
            import.meta.env.VITE_CLIENT_URL
          }UserName&title=myfreindid`}
          name={"Share on Linkedin"}
          iconName={"basil:linkedin-outline"}
        />

        <SlideUpMenuInnerRows
          url={`https://twitter.com/intent/tweet?url=${
            import.meta.env.VITE_CLIENT_URL
          }&text=myfreindid`}
          name={"Share on Twitter"}
          iconName={"iconoir:twitter"}
        />
      </SlideUpMenu.PopUp>
    </div>
  );
};
