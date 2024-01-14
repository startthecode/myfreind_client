import { Button } from "./Button";

export const IncomingMessage = ({ newmessage, callBack, link }) => {
  let noImageClasses = {
    className:
      "h-[60px] object-cover object-center w-[60px] rounded-full border-[1px] border-gray-600 bg-primary_clr uppercase text-[30px] flex justify-center items-center text-white",
  };

  let userImageClasses = {
    className:
      "py-6 relative justify-between rounded-xl slideDown items-center flex bg-black shadow-xl  px-[15px]",
  };

  return (
    <div className="px-[15px] pt-6 top-0 left-0 fixed w-full h-screen bg-black z-50 bg-opacity-60">
      <div {...userImageClasses}>
        <div className="flex items-center basis-10/12 !pl-0">
          {newmessage?.user?.userDp && (
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}/${
                newmessage?.user?.userDp
              }`}
              className="h-[60px] object-cover object-center w-[60px] rounded-full border-[1px] border-gray-600 "
              alt=""
            />
          )}
          {!newmessage?.user?.userDp && (
            <div>
              <div {...noImageClasses}>{newmessage?.user?.userName[0]}</div>
            </div>
          )}

          <div className=" ml-8 px-0 basis-10/12 w-full">
            <p className="text-[16px] text-white mb-1">
              {newmessage?.user?.userName}
            </p>
            <p className="text-[12px] text-gray-200 font-light">
              {newmessage?.messageData?.content}
            </p>

            <div className="flex mt-3">
              <Button
                onClick={() => callBack()}
                size="sm"
                className="mr-2"
                link={`/chat/${newmessage?.messageData?.SenderID}`}
              >
                Reply
              </Button>
              <Button
                size="sm"
                variation="grey"
                className="mr-2"
                onClick={() => callBack()}
              >
                Ignore
              </Button>
            </div>
          </div>
        </div>
        <div>
          <span className="text-[10px] text-gray-500  ">just now</span>
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f514/512.gif"
            alt="🔔"
            width="28"
            height="28"
            className="basis-2/12 max-w-[24px] px-0 mx-auto mt-2"
          />
        </div>
      </div>
    </div>
  );
};
