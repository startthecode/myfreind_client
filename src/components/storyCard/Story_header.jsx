import { Icon } from "@iconify/react";
import { ThumbnailCircle } from "../../ui/PresentationalComponents";
import { Row } from "../../ui/PresentationalComponents/Row";
import { useGetUserOverview } from "../../pages/useGetUserOverview";
import useDateFormate from "../../hooks/useDateFormate";

let parentDivFinalAttri = {
  className: "absolute top-[35px] left-0 w-full px-[15px] z-[102] ",
  vPosition: "start",
  hposition: "between",
};

export const Story_header = ({
  closeHandle,
  userID_of_Story_Uploader: userId,
  createdAt,
}) => {
  let { data, isLoading, isError, refetch } = useGetUserOverview(userId);
  let dateFormater = useDateFormate;
  return (
    <Row vPosition="start" hposition="between" {...parentDivFinalAttri}>
      <Row vPosition="start">
        <ThumbnailCircle
          size="xxsm"
          noimage={
            data?.data[0].userProfile?.UserDP
              ? false
              : data?.data[0]?.UserName || ""
          }
        >
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}/${
              data?.data[0].userProfile?.UserDP
            }`}
            className="w-full h-full object-cover object-center"
          />
        </ThumbnailCircle>
        <p className="text-[14px] text-white ml-4 shadow-sm">
          @{data?.data[0]?.UserName}
          <span className="time text-[10px] ml-2">{dateFormater(createdAt)}</span>
        </p>
      </Row>
      <Icon
        icon="radix-icons:cross-2"
        className="text-white shadow-2xl "
        height={27}
        onClick={() => closeHandle()}
      />
    </Row>
  );
};
