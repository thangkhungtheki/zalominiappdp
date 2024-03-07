import React, { useState } from "react";
import { Page, Input, Button, Text, Box, useNavigate } from "zmp-ui";

const TrangDangNhapPage = () => {
  const dieuhuong = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangUsername = (event: any) => {
    setUsername(event.target.value);
  };
  const handleChangPassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    // console.log(username);
    // Gửi yêu cầu kiểm tra đăng nhập tới API
    const response = await fetch(
      "https://app.diamondplace.vn:3980/api/login/jwt",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username, // Thay bằng giá trị thực tế từ input
          password: password, // Thay bằng giá trị thực tế từ input
        }),
      }
    );

    // Kiểm tra mã trạng thái của phản hồi
    if (response.status === 200) {
      const data = await response.json();
      // Nếu đăng nhập thành công, điều hướng tới trang chính
      // console.log(">>>data json", data);
      dieuhuong("/loginsuccess", { state: data });
    } else {
      // Nếu đăng nhập không thành công, xử lý tương ứng (ví dụ: hiển thị thông báo lỗi)
      // console.log("Đăng nhập không thành công");
      // }
      dieuhuong("/loginfail");
    }
  };
  return (
    <Page className="page">
      <Text.Title style={{ textAlign: "center" }}>Trang Đăng Nhập</Text.Title>
      <div className="section-container">
        <Input
          type="text"
          // label="Username"
          // helperText="Tên đăng nhập"
          onChange={handleChangUsername}
          placeholder="Tên đăng nhập"
        />
        <Input.Password
          // label="Label"
          // value={setPassword}
          placeholder="Mật khẩu"
          onChange={handleChangPassword}
          // helperText="Mật khẩu"
          visibilityToggle
        />
        <Box textAlign="center">
          <Button variant="primary" size="large" onClick={handleLogin}>
            Đăng nhập
          </Button>
        </Box>
      </div>
    </Page>
  );
};

export default TrangDangNhapPage;
