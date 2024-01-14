import { Icon } from "@iconify/react";
import SlideUpMenu from "../../../ui/PresentationalComponents/SlideUpMenu";
import Img from "../../../ui/Img";
import { IndicatorCircle } from "../../../ui/PresentationalComponents/IndicatorCircle";
import { Row } from "../../../ui/PresentationalComponents/Row";

let loginaccount = [
  {
    account: {
      username: "@ashuGola",
      password: "password",
      status: true,
      thumbPic:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    },
  },
  {
    account: {
      username: "@ap_gola",
      password: "password",
      status: false,
      thumbPic:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg",
    },
  },
];
let headingFinalAttributes = {
  className: "text-black text-[20px] font-medium flex items-center",
};

let outerBox = {
  className:
    "flex px-[10px] py-6 border-b-2 border-tertiary_border_clr justify-between items-center",
};

let userThumbFinalAttributes = {
  className: "w-[50px] h-[50px] object-cover object-center",
  rounded: true,
};

let userIdFinalAttributes = {
  className: "ml-6 text-[16px] font-normal text-[#E0E0E0]",
};

export const LoggedInAccounts = () => {
  return (
    <>
      <SlideUpMenu.Open whichPopUp="LoggedInAccounts">
        <h1 {...headingFinalAttributes}>
          __usename__
          <Icon icon="formkit:down" height="8" />
        </h1>
      </SlideUpMenu.Open>

      <SlideUpMenu.PopUp popUpName="LoggedInAccounts">
        {loginaccount.map((list, index) => (
          <div {...outerBox} key={index}>
            <Row vPosition="start">
              <Img
                {...userThumbFinalAttributes}
                imgURL={list.account.thumbPic}
              />

              <p {...userIdFinalAttributes}>{list.account.username}</p>
            </Row>

            {list.account.status && <IndicatorCircle variation="secondary" />}
          </div>
        ))}
      </SlideUpMenu.PopUp>
    </>
  );
};
