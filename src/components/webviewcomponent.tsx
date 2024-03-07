import { openWebview } from "zmp-sdk/apis";

export const openUrlInWebview = async (props:string) => {
    const uri = props
    console.log(uri)
  try {
    await openWebview({
      url: uri,
      config: {
        style: "normal",
        leftButton: "back"
      }
    });
  } catch (error) {
    // xử lý khi gọi api thất bại
    console.log(error);
  }
};

