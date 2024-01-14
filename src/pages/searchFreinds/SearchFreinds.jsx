import { useState } from "react";
import Header from "./components/layout/Header";
import { SearchedUsers } from "./components/SearchedUsers";

export const SearchFreinds = () => {
  let [usersList, setUserList] = useState(null);
  return (
    <>
      <Header setUserList={setUserList} />
      <SearchedUsers usersList={usersList}></SearchedUsers>
    </>
  );
};
