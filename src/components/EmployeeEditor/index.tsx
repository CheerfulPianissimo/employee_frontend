import { useState, type ChangeEvent } from "react";
import EmployeeEntity, {
  Address,
  Department,
  employeeToCreateEmployeeDto,
} from "../../employee";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select, type SelectOption } from "../Select";
import "./employeeeditor.css";
import { useNavigate } from "react-router-dom";
import {
  useCreateEmployeeMutation,
  useEditEmployeeMutation,
} from "../../api-services/employees/employees.api";
import { useGetDepartmentsListQuery } from "../../api-services/department/department.api";
const roles = ["UI", "UX", "DEVELOPER", "HR"];
const status_values = ["ACTIVE", "INACTIVE", "PROBATION"];

function getErrorMessage(error: any): string {
  if (error.data.error) return error.data.error;
  if(error.data.message)return error.data.message;
  console.log( JSON.parse(error.data.message));
  const message = 
    JSON.parse(error.data.message).map((c: any) =>
      Object.values(c.constraints).join(",")
    ).join(", ");
  
  return message;
}

function getFreshEmployee() {
  console.log("getFresh called");
  let createEmp = new EmployeeEntity();
  createEmp.role = roles[0];
  createEmp.status = status_values[0];
  createEmp.dateOfJoining = new Date().toString();
  createEmp.department = new Department();
  createEmp.department.id = 1;
  createEmp.address = new Address();
  return createEmp;
}
export const EmployeeEditor = ({ emp }: { emp?: EmployeeEntity }) => {
  const isCreate = emp === undefined;
  const navigate = useNavigate();
  const [edit] = useEditEmployeeMutation();
  const [create] = useCreateEmployeeMutation();
  const { data: depts } = useGetDepartmentsListQuery();
  const [errorMsg, setErrorMsg] = useState("");

  // console.log(emp);
  const [empState, setEmpstate] = useState(isCreate ? getFreshEmployee() : emp);
  // console.log(empState);
  if (!depts) return;
  const update = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      case "password":
        newEmp[id] = val;
        break;
      case "experience":
      case "age":
        newEmp[id] = Number(val);
        console.log(newEmp[id]);
        break;
      case "department":
        let dept = depts.find((dept) => dept.name === val);
        if (dept) newEmp.department = dept;
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

  const submit = async () => {
    const dto = employeeToCreateEmployeeDto(empState);
    // console.log(empState);
    if (isCreate) {
      create(dto)
        .unwrap()
        .then(() => navigate("/employees"))
        .catch((error) => {
          setErrorMsg(getErrorMessage(error));
        });
    } else {
      // empState.departmentId=empState.id;

      console.log(dto);
      edit({ id: empState.id, emp: dto })
        .unwrap()
        .then(() =>  navigate("/employees"))
        .catch((error) => {
          setErrorMsg(getErrorMessage(error));
        });
    }
    //navigate("/employees");
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
            options={depts.map<SelectOption>((dept) => {
              return {
                value: dept.name,
                label: dept.name,
              };
            })}
            label={"Department"}
            value={empState.department.name}
            onChange={update}
          />
          <Select
            id="role"
            options={roles.map<SelectOption>((role) => {
              return {
                value: role,
                label: role,
              };
            })}
            label={"Role"}
            value={empState.role}
            onChange={update}
          />
          <Select
            id="status"
            options={status_values.map<SelectOption>((status) => {
              return {
                value: status,
                label: status,
              };
            })}
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
          {isCreate ? (
            <Input
              label="Password"
              type="text"
              id="password"
              value={empState.password}
              onChange={update}
            />
          ) : (
            <></>
          )}
        </div>
        <label className="errorMsg">{errorMsg}</label>
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
