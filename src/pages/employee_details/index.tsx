import { Button } from "../../components/Button";
import { EmployeeCard } from "../../components/EmployeeCard";
import "./employee_details.css";
import edit_icon from "../../assets/editpen_white.svg";
import EmployeeEntity from "../../employee";
import { useNavigate, useParams } from "react-router-dom";
import { useGetEmployeeQuery } from "../../api-services/employees/employees.api";
const EmployeeDetails = ({
  empid,
  header = "Employee Details",
}: {
  empid?: number;
  header?: string;
}) => {
  let { id } = empid ? { id: empid } : useParams();

  const { data: emp } = useGetEmployeeQuery({ id: Number(id) });
  let navigate = useNavigate();
  if (!emp) return;
  return (
    <>
      <title> Employee Details</title>
      <div className="content-header">
        <h1>{header}</h1>
        <div className="right-buttons-div">
          <Button
            text="Edit"
            icon={edit_icon}
            onClick={() => navigate("/employees/edit/" + emp?.id)}
          />
        </div>
      </div>
      <EmployeeCard emp={Object.assign(new EmployeeEntity(), emp)} />
    </>
  );
};

export default EmployeeDetails;
