import { Logo } from "../../../../ui/PresentationalComponents";
import { Row } from "../../../../ui/PresentationalComponents/Row";
import SlideUpMenu from "../../../../ui/PresentationalComponents/SlideUpMenu";
import { AllMessages } from "./AllMessages";
import { Notofication } from "./Notofication";
import { UploadContent } from "./UploadContent";

const parentDivClasses = {
  className: " py-4 bg-white",
  hposition: "center",
  
};
export const HomeHeader = () => {
  return (
    <div {...parentDivClasses}>
      <Row vPosition="between" paddingX>
        <Logo size={170} />
        <Row vPosition="end" hposition="center">  
            <UploadContent />
            <Notofication />
            <AllMessages />
        </Row>
      </Row>
    </div>
  );
};
