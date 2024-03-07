import React from "react";
import { useLocation } from "react-router";
import { Box, Button, Page, Text } from "zmp-ui";
import { openUrlInWebview } from "../components/webviewcomponent";
import { openWebview } from "zmp-sdk";

const LoginSuccess = () => {
  const location = useLocation();
  const data = location.state;
  // console.log(">>>check data", data.token);
  const handlewwebview = () => {
    openUrlInWebview("https://app.diamondplace.vn:3980");
    // console.log('handlewebview')
    // await openUrlInWebview('http://app.diamondplace.vn:3979')
  };
  return (
    <Page className="page">
      <div>Trang login thành công</div>
      <div className="section-container text-container">
        {/* <Text className="text-container"> token: {data.token} </Text>
        <br /> */}
        id: {data.user._id} <br />
        username: {data.user.username} <br />
        Role: {data.user.role}
      </div>
      <div className="section-container text-container">
        <Box textAlign="center">
          <Button variant="primary" size="large" onClick={handlewwebview}>
            Đăng nhập
          </Button>
        </Box>
      </div>
    </Page>
  );
};

export default LoginSuccess;
