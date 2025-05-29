import { Button } from "../../components/Button";
import { EmployeeCard } from "../../components/EmployeeCard";
import "./employee_details.css";
import edit_icon from "../../assets/editpen_white.svg";
import Employee from "../../employee";
import { useNavigate } from "react-router-dom";
export const EmployeeDetails = () => {
  let emp = {
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
    role: "UX",
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
      name: "Design",
    },
  };
  let navigate = useNavigate();
  return (
    <>
      <div className="content-header">
        <h1>Employee Details</h1>
        <div className="right-buttons-div">
          <Button
            text="Edit"
            icon={edit_icon}
            onClick={() => navigate("/employees/edit/" + emp.id)}
          />
        </div>
      </div>
      <EmployeeCard emp={Object.assign(new Employee(), emp)} />
    </>
  );
};
