import React, { useEffect, useState } from "react";
import { Page, useNavigate } from "zmp-ui";
import { fetchapiuser } from "../action/fetchaction";
import ComponentFetchAPI from "../components/ComponentTextAPI";

const TextAPI = () => {
  const [data1, setData1] = useState(null);
  // const fetchData = async () => {
  //   const res = await fetchapi();

  //   setData1(res);
  // };
  // fetchData();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchapiuser();

      setData1(res);
    };
    fetchData();
  });

  return (
    <Page className="page">
      <div className="section-container"></div>
      <ComponentFetchAPI
        user={data1 ? data1 : []}
        meta={{
          page: 1,
        }}
      />
    </Page>
  );
};
export default TextAPI;
