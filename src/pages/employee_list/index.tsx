import { Button } from "../../components/Button";
import { EmployeeCard } from "../../components/EmployeeCard";
import "./employee_list.css";

const EmployeeInfoElement = ({ data ,status=false}: { data: string,status?:boolean }) => {
  return <label className={"data-label".concat(status?" info-status":"")}>{data}</label>;
};

const EmployeeInfo = () => {
  return (
    <>
      <div className="emp-info-row">
        <EmployeeInfoElement data="Data" />
        <EmployeeInfoElement data="Data" />
        <EmployeeInfoElement data="Data" />
        <EmployeeInfoElement data="Data" />
        <EmployeeInfoElement data="Data" status={true} />
        <EmployeeInfoElement data="Data" />
      </div>
    </>
  );
};

export const EmployeeList = () => {
  return (
    <>
      <div className="content-header">
        <h1>Employee List</h1>
        <div className="right-buttons-div">
            <label>Filter By </label>
            <select ><option>Status</option></select>
            <Button text="+ Create Employee" />
        </div>
        
      </div>
      <div className="table-header emp-info-row">
        <EmployeeInfoElement data="Employee Name" />
        <EmployeeInfoElement data="Employee ID" />
        <EmployeeInfoElement data="Joining Date" />
        <EmployeeInfoElement data="Role" />
        <EmployeeInfoElement data="Status" />
        <EmployeeInfoElement data="Experience"  />
        <EmployeeInfoElement data="Action" />
      </div>
      <EmployeeInfo />
    </>
  );
};
