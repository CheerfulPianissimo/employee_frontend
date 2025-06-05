import "./employeecard.css";

import EmployeeEntity from "../../employee";
export const EmployeeCard = ({emp}:{emp:EmployeeEntity}) => {
  
  return (
    <>
      <div className="body-full">
        <InfoElement label="Employee Name" data={emp.name} />
        <InfoElement label="Employee Email" data={emp.email} />
        <InfoElement label="Employee Age" data={emp.age+" Yrs."} />
        <InfoElement label="Joining Date" data={emp.dateOfJoining.toString().substring(0,10)} />
        <InfoElement label="Experience" data={emp.experience+" Yrs."} />
        <InfoElement label="Role" data={emp.role} />
        <InfoElement label="Status" data={emp.status} status={true}/>
        <InfoElement label="Address" data={emp.address.line1+' '+emp.address.line2}/>
        <InfoElement label="Employee ID" data={emp.employeeId} />
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
