import React from "react";
import { useNavigate } from "react-router";
import { Button, Header, Icon, List, Page, Text } from "zmp-ui";
import AboutPage from "./about";
import { openWebview } from "zmp-sdk";

const Pageindex: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { Item } = List;
  const xulywebview = async() => {
    openWebview({
      url: "http://app.diamondplace.vn:3979",
      config: {
        style: "bottomSheet",
        leftButton: "back"
      },
      success: (res) => {
        // xử lý khi gọi api thành công
        console.log('Click hahaha')
      },
      fail: (error) => {
        // xử lý khi gọi api thất bại
        console.log(error);
      }
    });
  }
  return (
    <>
      <Page className="page">
        <div className="section-container">
          <Text>This mini app make by tktk</Text>
        </div>
        <div>
          <Button
            variant="secondary"
            fullWidth
            onClick={() => navigate("/trangdangnhap")}
          >
            Đăng Nhập
          </Button>
          <Button
            variant="secondary"
            fullWidth
            onClick={() => navigate("/textapi")}
          >
            TEXT API
          </Button>
        </div>
        <Button
            variant="secondary"
            fullWidth
            onClick={xulywebview}
          >
            Webview
          </Button>
      </Page>
    </>
  );
};

export default Pageindex;
