import { Icon } from "@iconify/react";
import { Button } from "./Button";
import { Loader } from "./Loader";

export const FreindRequest = ({
  acceptRequest,
  deleteRequest,
  loader,
  friendRequestData,
  relative,
}) => {
  let { userName, userDp } = friendRequestData ?? {};
  return (
    <div
      className={`${
        !relative ? "px-[15px] absolute top-5 w-full left-0 z-50" : ""
      } `}
    >
      <div className="flex  py-[7px] px-[10px] border-[1px] border-gray-100 justify-between items-center bg-white rounded-[10px] shadow-2xl">
        <div className="flex basis-8/12 px-0">
          <div className=" w-full py-3">
            <h5 className="text-[16px] text-primary_text_clr leading-7">
              {userName}
            </h5>
            <p className="text-[12px]">send you a follow request</p>
            <div className="flex mt-3">
              {acceptRequest?.loader ? (
                <Loader className="!h-[30px] !w-[40px]" />
              ) : (
                <Button
                  size="sm"
                  className="mr-2"
                  onClick={acceptRequest?.callBack}
                >
                  Accept
                </Button>
              )}

              {deleteRequest?.loader ? (
                <Loader className="!h-[30px] !w-[40px]" />
              ) : (
                <Button
                  size="sm"
                  variation="grey"
                  className="mr-2"
                  onClick={deleteRequest?.callBack}
                >
                  Delete
                </Button>
              )}
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-[70px] w-[70px] object-cover object-top rounded-2xl"
            src={`${import.meta.env.VITE_IMAGE_URL}${userDp}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
