import React, { useState } from "react";
import { Page, Input, Button, Text, Box, useNavigate } from "zmp-ui";
const LoginFail = () => {
  const dieuhuong = useNavigate();
  const handledangnhap = () => {
    dieuhuong("/trangdangnhap");
  };
  return (
    <div className="section-container">
      <Text> Đăng Nhập không thành công !!!</Text>
      <Box textAlign="center">
        <Button variant="primary" size="large" onClick={handledangnhap}>
          Đăng nhập
        </Button>
      </Box>
    </div>
  );
};
export default LoginFail;
