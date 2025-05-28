import { Input } from "../../components/Input";
import "./employeecard.css";

import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { useParams } from "react-router-dom";
export const EmployeeCard = () => {
    const {id}=useParams();
  return (
    <>
      <div className="body-full">
        <InfoElement label="Employee Name" data="Vishal M." />
        <InfoElement label="Joining Date" data="12.04.2021" />
        <InfoElement label="Experience" data="2 Yrs." />
        <InfoElement label="Role" data="Full Stack" />
        <InfoElement label="Status" data="Probation" status={true}/>
        <InfoElement label="Experience" data="5 Years"/>
        <InfoElement label="Employee ID" data={id?id.toString():""} />
      </div>
    </>
  );
};

const InfoElement = ({ label, data,status=false }: { label: string; data: string,status?:boolean }) => {
  return (
    <div className="label-data-box">
      <label className="info-label">{label}</label>
      <label className={"info-data ".concat(status?" info-status":"")}>{data}</label>
    </div>
  );
};
