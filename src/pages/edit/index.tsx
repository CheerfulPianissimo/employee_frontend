import "../create/create.css";
import { EmployeeEditor } from "../../components/EmployeeEditor";
import { useParams } from "react-router-dom";
import { useGetEmployeeQuery } from "../../api-services/employees/employees.api";

const Edit = () => {
  let { id } = useParams();
  
  const { data: emp } = useGetEmployeeQuery({ id: Number(id) });
  if(!emp)return;
  return (
    <>
      <div className="content-header">
        <h1>Edit Employee</h1>
      </div>
      <EmployeeEditor emp={emp} />
    </>
  );
};
export default Edit;
