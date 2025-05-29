import "./employeecard.css";

import { useParams } from "react-router-dom";
import type Employee from "../../employee";
export const EmployeeCard = ({emp}:{emp:Employee}) => {
  
    const {id}=useParams();
  return (
    <>
      <div className="body-full">
        <InfoElement label="Employee Name" data={emp.name} />
        <InfoElement label="Joining Date" data={emp.dateOfJoining.toString().substring(0,10)} />
        <InfoElement label="Experience" data={emp.experience+" Yrs."} />
        <InfoElement label="Role" data={emp.role} />
        <InfoElement label="Status" data={emp.status} status={true}/>
        <InfoElement label="Address" data={emp.address.line1+emp.address.line2}/>
        <InfoElement label="Employee ID" data={id?id.toString():""} />
      </div>
    </>
  );
};

const InfoElement = ({ label, data,status=false }: { label: string; data: string,status?:boolean }) => {
  return (
    <div className="label-data-box">
      <label className="info-label">{label}</label>
      <label className={"info-data ".concat(status ? " info-status " + data : "")}>{data}</label>
    </div>
  );
};
