import { Button } from "../../components/Button";
import { EmployeeCard } from "../../components/EmployeeCard";
import "./employee_details.css";

export const EmployeeDetails = () => {
  return (
    <>
      <div className="content-header">
        <h1>Employee Details</h1>
        <div className="right-buttons-div">
          <Button text="Edit" />
        </div>
      </div>
      <EmployeeCard />
    </>
  );
};
