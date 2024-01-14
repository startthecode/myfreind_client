import { useContext } from "react";
import { Icon } from "@iconify/react";
import { OtherProfileContext } from "../contextAPI/OtherProfileProvider";

export const ProfileNameBio = () => {
  let { FullName, Bio, LinksList } =
    useContext(OtherProfileContext)?.profile_data?.userProfile ?? {};

  return (
    <div className="px-[15px] mt-[20px] mb-[20px]">
      <p className="text-[16px] text-black font-normal leading-[23px]">
        {FullName}
      </p>
      <p className="text-[14px] text-black font-normal leading-[23px]">{Bio}</p>

      {LinksList && (
        <a
          href={LinksList}
          target="_blank"
          key={LinksList}
          className="text-[14px] text-secondary_clr font-normal leading-[23px] flex items-center mt-[5px]"
        >
          <Icon
            icon="teenyicons:link-outline"
            className="text-black mr-3 h-[14px]"
          />
          {LinksList}
        </a>
      )}
    </div>
  );
};
