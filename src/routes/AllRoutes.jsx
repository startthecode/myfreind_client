import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  Home,
  SignIn,
  OtherProfile,
  Profile,
  Reels,
  ForgotPassword,
  SignUp,
  EditProfile,
  SearchFreinds,
  CreatePost,
  Chat,
  ChatBox,
} from "../pages/AllPageExport";
import { ProtectedRoutes } from "./ProtectedRoutes";
import AppLayout from "../ui/LayoutComponents/AppLayout";
import { UnProtectedRoutes } from "./UnProtectedRoutes";
import { useGetUser } from "./useGetUser";
import { useDispatch, useSelector } from "react-redux";
import { get_user_info } from "../redux/store";
import {
  remove_user_info,
  update_user_error,
  update_user_info,
} from "../redux/user_Info_Slice";
import { BrowserRouter as Routers } from "react-router-dom";
import { SelfLayout } from "../ui/LayoutComponents/SelfLayout";
import SocketIncomingData from "../components/socket/SocketIncomingData";

export const AllRoutes = () => {
  return (
    <Routers>
      <Routes>
        <Route
          element={
            <ProtectedRoutes>
              <SocketIncomingData />
              <AppLayout />
            </ProtectedRoutes>
          }
        >
          <Route index element={<Navigate replace to="feed" />} />
          <Route path="/feed" element={<Home />} />
          <Route path="/my-profile" element={<Profile />} />
          <Route path="/:username" element={<OtherProfile />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/search" element={<SearchFreinds />} />
        </Route>

        <Route
          element={
            <ProtectedRoutes>
              <SelfLayout />
            </ProtectedRoutes>
          }
        >
          <Route path="/new-post/:post_type" element={<CreatePost />} />
          <Route path="/editpost/:postid" element={<CreatePost />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/chat" element={<Chat />}>
            <Route path=":userid" element={<ChatBox />} />
          </Route>
        </Route>

        <Route element={<UnProtectedRoutes />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Routers>
  );
};
