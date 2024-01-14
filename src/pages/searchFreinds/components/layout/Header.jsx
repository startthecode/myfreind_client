import { useEffect, useRef, useState } from "react";
import { useSearchUsers } from "../../../../reactQuerys/useSearchUsers";
import Inputs from "../../../../ui/PresentationalComponents/Inputs";
import { CommonNav } from "../../../../ui/LayoutComponents/CommonNav";
import { Loader } from "../../../../ui/PresentationalComponents/Loader";

const Header = ({ setUserList }) => {
  const [inputValue, setinputValue] = useState(null);
  const [searchTimer, setSearchTimer] = useState(null);
  const [loader, setLoader] = useState(false);
  let { searchedUsers, usersLoading, userFetchFail, refetch } =
    useSearchUsers(inputValue);

  useEffect(() => {
    const handleInputChange = (e) => {
      setLoader(true);
      clearTimeout(searchTimer);
      setSearchTimer(
        setTimeout(() => {
          if (inputValue.length > 0) refetch();
          setLoader(false);
        }, 1500)
      );
    };

    const input = document.querySelector("input");
    input.addEventListener("input", handleInputChange);

    return () => {
      input.removeEventListener("input", handleInputChange);
    };
  }, [inputValue, refetch]);

  useEffect(() => {
    if (searchedUsers) {
      setUserList(searchedUsers?.data);
    }
  }, [searchedUsers]);

  return (
    <CommonNav leftArrow={true} className="relative">
      <Inputs
        placeholder="Username only"
        onChange={(e) => {
          setinputValue(e.target.value);
        }}
      />
      {usersLoading || loader ? (
        <Loader className="!h-[40px] !w-[55px] absolute right-[7%]" />
      ) : (
        ""
      )}
    </CommonNav>
  );
};

export default Header;
