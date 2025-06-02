import { useState, type ChangeEvent, type Dispatch } from "react";
import EmployeeEntity, { Address, Department } from "../../employee";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import "./employeeeditor.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  EMPLOYEE_ACTION_TYPES,
  type EmployeeAction,
} from "../../store/employee/employee.types";
function getFreshEmployee() {
  let createEmp = new EmployeeEntity();
  createEmp.dateOfJoining = new Date().toString();
  createEmp.department = new Department();
  createEmp.address = new Address();
  return createEmp;
}
export const EmployeeEditor = ({ emp }: { emp?: EmployeeEntity }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [empState, setEmpstate] = useState(emp ? emp : getFreshEmployee());
  let update = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    console.log(event);
    let newEmp = structuredClone(empState);
    const id = event.target.id;
    const val = event.target.value;
    switch (id) {
      case "name":
      case "email":
      case "dateOfJoining":
      case "role":
      case "status":
      case "employeeId":
        newEmp[id] = val;
        break;
      case "experience":
      case "age":
        newEmp[id] = Number(val);
        console.log(newEmp[id]);
        break;
      case "department":
        newEmp.department.name = val;
        break;
      case "houseNo":
      case "line1":
      case "line2":
      case "pincode":
        newEmp.address[id] = val;
        break;
    }

    setEmpstate(newEmp);
  };

  let submit = () => {
    dispatch({
      type: emp ?EMPLOYEE_ACTION_TYPES.UPDATE: EMPLOYEE_ACTION_TYPES.ADD  ,
      payload: empState,
    });
    navigate("/employees");
  };

  return (
    <>
      <div className="form-full">
        {/* <form> */}
        <div className="form-inputs">
          <Input
            label="Employee Name"
            type="text"
            id="name"
            value={empState.name}
            onChange={update}
          />
          <Input
            label="Email"
            type="email"
            id="email"
            value={empState.email}
            onChange={update}
          />
          <Input
            label="Joining Date"
            type="date"
            id="dateOfJoining"
            value={empState.dateOfJoining.toString().substring(0, 10)}
            onChange={update}
          />
          <Input
            label="Experience"
            type="number"
            id="experience"
            value={
              empState.experience ? empState.experience.toString() : undefined
            }
            onChange={update}
          />
          <Input
            label="Age"
            type="number"
            id="age"
            value={empState.age ? empState.age.toString() : undefined}
            onChange={update}
          />
          <Select
            id="department"
            options={[
              { value: "sde", label: "Development" },
              { value: "sre", label: "SRE" },
              { value: "HR", label: "HR" },
            ]}
            label={"Department"}
            value={empState.department.name}
            onChange={update}
          />
          <Select
            id="role"
            options={[
              { value: "UI", label: "UI" },
              { value: "UX", label: "UX" },
              { value: "DEVELOPER", label: "DEVELOPER" },
              { value: "HR", label: "HR" },
            ]}
            label={"Role"}
            value={empState.role}
            onChange={update}
          />
          <Select
            id="status"
            options={[
              { value: "ACTIVE", label: "ACTIVE" },
              { value: "INACTIVE", label: "INACTIVE" },
              { value: "PROBATION", label: "PROBATION" },
            ]}
            label={"Status"}
            value={empState.status}
            onChange={update}
          />
          <Input
            label="Employee ID"
            type="text"
            id="employeeId"
            disabled={emp ? true : false}
            value={empState.employeeId}
            onChange={update}
          />
          <div className="address-box">
            <Input
              label="Address"
              type="textarea"
              id="houseNo"
              placeholder="Flat No./House No."
              value={empState.address.houseNo}
              onChange={update}
            />
            <Input
              placeholder="Address Line 1"
              type="textarea"
              id="line1"
              value={empState.address.line1}
              onChange={update}
            />
            <Input
              placeholder="Address Line 2"
              type="textarea"
              id="line2"
              value={empState.address.line2}
              onChange={update}
            />
            <Input
              placeholder="Pincode"
              type="textarea"
              id="pincode"
              value={empState.address.pincode}
              onChange={update}
            />
          </div>
        </div>
        <div className="form-group__submit">
          <Button text={emp ? "Save" : "Create"} onClick={submit} />
          <Button
            text="Cancel"
            variant="secondary"
            onClick={() => navigate("/employees/list")}
          />
        </div>
        {/* </form> */}
      </div>
    </>
  );
};
