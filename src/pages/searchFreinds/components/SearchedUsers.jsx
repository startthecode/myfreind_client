import { Icon } from "@iconify/react";
import { Button, ThumbnailCircle } from "../../../ui/PresentationalComponents";
import hiigif from "../../../images/hiigf.gif";
import notfound from "../../../images/not_found.gif";
import { Link } from "react-router-dom";

export const SearchedUsers = ({ usersList }) => {
  let parentdiv_classes = {
    className:
      "flex  py-[7px] px-[15px] pl-[8px] border-[1px] mt-[15px] border-gray-100 justify-between items-center bg-white rounded-[10px] shadow-2xl",
  };

  let image_classes = {
    className: "h-[90px] w-[90px] object-cover object-top rounded-2xl",
  };

  if (usersList == null) return <img src={hiigif} className="mt-[50px]" />;
  if (usersList?.length === 0)
    return <img src={notfound} className="mt-[50px]" />;
  return (
    <>
      {usersList &&
        usersList?.map((user) => (
          <Link
            to={`/${user?.UserName}`}
            key={user?.UserID}
            className={`${""} `}
          >
            <div {...parentdiv_classes}>
              <div>
               { user?.userProfile?.UserDp && <img
                  {...image_classes}
                  src={`${import.meta.env.VITE_IMAGE_URL}${
                    user?.userProfile?.UserDp
                  }`}
                  alt=""
                />}

{ !user?.userProfile?.UserDp && <div className="h-[90px] w-[90px] object-cover object-top rounded-2xl bg-secondary_clr flex text-[38px] text-white uppercase items-center justify-center">
  {user?.UserName[0]}
  </div>}
              </div>
              <div className=" basis-8/12 px-0 pl-4">
                <div className="flex items-start">
                  <div className=" w-full py-3  mb-3">
                    <h5 className="text-[17px] text-primary_text_clr leading-7 uppercase flex ">
                      {user?.UserName}
                      {user?.AccountPrivacy && (
                        <Icon className="ml-1" icon="arcticons:privatelock" />
                      )}
                    </h5>
                    <p className="text-[12px] text-gray-400">
                      {user?.userProfile?.FullName}
                    </p>
                  </div>
                  <Button className="!py-2 !text-[10px] max-w-max px-4 bg-secondary_clr">
                    Follow
                  </Button>
                </div>

                <div className="flex justify-between">
                  <div className="text-center">
                    <p className="text-primary_text_clr text-[14px]">
                      {user?.userProfile?.TotalPosts}
                    </p>
                    <p className="text-gray-400 text-[12px]">Posts</p>
                  </div>

                  <div className="text-center">
                    <p className="text-primary_text_clr text-[14px]">
                      {user?.userProfile?.TotalFollowers}
                    </p>
                    <p className="text-gray-400 text-[12px]">Followes</p>
                  </div>

                  <div className="text-center">
                    <p className="text-primary_text_clr text-[14px]">
                      {user?.userProfile?.TotalFollowing}
                    </p>
                    <p className="text-gray-400 text-[12px]">Followings</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
};
