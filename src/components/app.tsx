"use server";
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import {
  App,
  ZMPRouter,
  AnimationRoutes,
  SnackbarProvider,
  Text,
} from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "../pages";
import About from "../pages/about";
import Form from "../pages/form";
import User from "../pages/user";
import TrangDangNhapPage from "../pages/trangdangnhap";
import TextAPI from "../pages/textapi";
import LoginSuccess from "../pages/loginsuccess";
import LoginFail from "../pages/loginfail";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/form" element={<Form></Form>}></Route>
              <Route path="/user" element={<User></User>}></Route>
              <Route
                path="/trangdangnhap"
                element={<TrangDangNhapPage></TrangDangNhapPage>}
              ></Route>
              <Route path="/textapi" element={<TextAPI />}></Route>
              <Route path="/loginsuccess" element={<LoginSuccess />} />
              <Route path="/loginfail" element={<LoginFail />} />
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
