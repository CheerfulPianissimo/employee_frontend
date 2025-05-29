import "./create.css";

import { EmployeeEditor } from "../../components/EmployeeEditor";

export const Create = () => {
  return (
    <>
      <div className="content-header">
        <h1>Create Employee</h1>
      </div>
      <EmployeeEditor />
    </>
  );
};
