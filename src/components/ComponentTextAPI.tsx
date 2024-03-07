import React from "react";
import { Page, useNavigate } from "zmp-ui";

import { Iuser } from "../types/backend";

interface IProps {
  user: Iuser[] | [];
  meta: any;
}
const ComponentFetchAPI = (props: IProps) => {
  const { user, meta } = props;
  // console.log(user);
  // console.log(meta);
  return (
    <div>
      {user.map((user: Iuser, index: number) => (
        <div key={index}>
          Id: {user.id} <br />
          Tên: {user.name} <br />
          Email: {user.email} <br />
          {/* Các trường thông tin khác */}
          page: {meta.page} <br />
        </div>
      ))}
    </div>
  );
};
export default ComponentFetchAPI;
