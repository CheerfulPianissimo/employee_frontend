import { Button } from "../../components/Button";
import "./employee_list.css";
import delete_icon from "../../assets/delete.svg";
import edit_icon from "../../assets/editpen.svg";
import plus_icon from "../../assets/plus.svg";

import { useNavigate, useSearchParams } from "react-router";
import OverlayDialog from "../../components/OverlayDialog";
import type EmployeeEntity from "../../employee";

import {
  useDeleteEmployeeMutation,
  useGetEmployeeListQuery,
} from "../../api-services/employees/employees.api";
import { useState } from "react";

const EmployeeInfoElement = ({
  data,
  status = false,
}: {
  data: string;
  status?: boolean;
}) => {
  return (
    <label
      className={"data-label".concat(status ? " info-status " + data : "")}
    >
      {data}
    </label>
  );
};

const EmployeeInfo = ({
  data,
  onDelete,
  onEdit,
  onClick,
}: {
  data: EmployeeEntity;
  onDelete: (a: any) => void;
  onEdit: (a: any) => void;
  onClick?: (a: any) => void;
}) => {
  return (
    <>
      <div className="emp-info-row" onClick={onClick}>
        <EmployeeInfoElement data={data.name} />
        <EmployeeInfoElement data={data.employeeId} />
        <EmployeeInfoElement
          data={data.dateOfJoining.toString().substring(0, 10)}
        />
        <EmployeeInfoElement data={data.role} />
        <EmployeeInfoElement data={data.status} status={true} />
        <EmployeeInfoElement data={data.experience.toString()} />
        <div className="action-buttons-div">
          <button onClick={onDelete}>
            <img src={delete_icon} />
          </button>
          <button onClick={onEdit}>
            <img src={edit_icon} />
          </button>
        </div>
      </div>
    </>
  );
};
const statusOptions = ["ALL", "ACTIVE", "PROBATION", "INACTIVE"];
const EmployeeList = () => {
  // let employees = useAppSelector((state) => state.employee.employees);
  const { data: employees } = useGetEmployeeListQuery();
  console.log(employees);
  const [deleteEmployee] = useDeleteEmployeeMutation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [activateDeleteConfirmFor, setActivateDeleteConfirmFor] = useState(-1);
  const navigate = useNavigate();
  const onOverlayDeletePressed = () => {
    // dispatch(deleteEmployee(activateDeleteConfirmFor.toString()));
    console.log("activate for " + activateDeleteConfirmFor.toString());
    deleteEmployee({id:activateDeleteConfirmFor})
      .unwrap()
      .catch((error) => {
        console.log(error);
      });
    setDeleteConfirm(false);
  };
  const filterValue = searchParams.get("status") || "ALL";
  return (
    <>
      <title>Employee List</title>
      <div className="content-header">
        <h1>Employee List</h1>
        <div className="right-buttons-div">
          <label>Filter By </label>
          <select
            value={filterValue}
            onChange={(newval) => {
              let urlSearchParams = new URLSearchParams(
                searchParams ? searchParams : undefined
              );
              urlSearchParams.delete("status");
              urlSearchParams.set("status", newval.target.value);
              setSearchParams(urlSearchParams);
            }}
          >
            {statusOptions.map((opt) => (
              <option>{opt}</option>
            ))}
          </select>
          <Button
            text="Create Employee"
            icon={plus_icon}
            onClick={() => navigate("/employees/create")}
          />
        </div>
      </div>
      <div className="table-header emp-info-row">
        <EmployeeInfoElement data="Employee Name" />
        <EmployeeInfoElement data="Employee ID" />
        <EmployeeInfoElement data="Joining Date" />
        <EmployeeInfoElement data="Role" />
        <EmployeeInfoElement data="Status" />
        <EmployeeInfoElement data="Experience" />
        <EmployeeInfoElement data="Action" />
      </div>
      {employees
        ?.filter((emp) => emp.status === filterValue || filterValue === "ALL")
        .map((emp) => (
          <EmployeeInfo
            data={emp as unknown as EmployeeEntity}
            onDelete={(event) => {
              setDeleteConfirm(true);
              setActivateDeleteConfirmFor(emp.id);
              event.stopPropagation();
            }}
            onEdit={(event: Event) => {
              navigate("/employees/edit/" + emp.id);
              event.stopPropagation();
            }}
            onClick={(event: Event) => {
              navigate("/employees/" + emp.id);
            }}
          />
        ))}
      <OverlayDialog
        isOpen={deleteConfirm}
        onClose={() => setDeleteConfirm(false)}
      >
        <h2>Are you sure?</h2>
        <label>Do you really want to delete employee?</label>
        <div className="overlay-buttons-div">
          <Button text="Confirm" onClick={onOverlayDeletePressed} />
          <Button
            text="Cancel"
            variant="secondary"
            onClick={() => setDeleteConfirm(false)}
          />
        </div>
      </OverlayDialog>
    </>
  );
};

export default EmployeeList;
