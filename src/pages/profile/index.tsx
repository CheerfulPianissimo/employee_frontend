// import jwt from 'jsonwebtoken'

import { useState } from "react";
import { useGetEmployeeQuery } from "../../api-services/employees/employees.api";
import EmployeeDetails from "../employee_details";
import { Input } from "../../components/Input";

const Profile = () => {
  const token = window.localStorage.getItem("token");
  const [password, usePassword] = useState("");
  if (!token) return <>No token found!</>;
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  const data = JSON.parse(window.atob(base64));
  const id = data.id;

  const { data: emp } = useGetEmployeeQuery({ id: Number(id) });
  if (!emp) return;
  return (
    <>
      <EmployeeDetails empid={id} header={`Welcome ${emp.name}`} />
      {/* <div className="content-header">
        <h1>Change Password</h1>
      </div>
      <div className="body-full">
        <Input
          placeholder="Enter New Password"
          type="text"
          id="password"
          value={password}
        />
      </div> */}
    </>
  );
  // const data=jwt.decode(token);
  // console.log(data);
};

export default Profile;
