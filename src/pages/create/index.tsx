import "./create.css";

import { EmployeeEditor } from "../../components/EmployeeEditor";
import type EmployeeEntity from "../../employee";
let employee = {
  id: 28,
  createdAt: "2025-05-23T05:38:32.757Z",
  updatedAt: "2025-05-23T05:38:32.757Z",
  deletedAt: null,
  email: "employee9@gmail.com",
  name: "Employee 9",
  age: 22,
  password: "$2b$10$pZqnoY3aQH8Lglh4F2mDWOEu8x0q/ysMJmBi/LfUK0XCDMj0mn.ES",
  employeeId: "1",
  dateOfJoining: "2025-05-23T01:25:39.175Z",
  experience: 2,
  status: "INACTIVE",
  role: "SRE",
  address: {
    id: 27,
    createdAt: "2025-05-23T05:38:32.757Z",
    updatedAt: "2025-05-23T05:38:32.757Z",
    deletedAt: null,
    line1: "123 Mascrch Street, kochi",
    pincode: "849314",
    line2: "Ernakulam,Kerala",
    houseNo: "123",
  },
  department: {
    id: 3,
    createdAt: "2025-05-23T00:54:44.817Z",
    updatedAt: "2025-05-23T00:54:44.817Z",
    deletedAt: null,
    name: "HR",
  },
};
const Create = () => {
  return (
    <>
      <div className="content-header">
        <h1>Create Employee</h1>
      </div>
      <EmployeeEditor /*emp={employee as unknown as EmployeeEntity}*/ />
    </>
  );
};
export default Create;
