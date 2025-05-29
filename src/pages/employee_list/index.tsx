import { Button } from "../../components/Button";
import { EmployeeCard } from "../../components/EmployeeCard";
import "./employee_list.css";
import delete_icon from "../../assets/delete.svg";
import edit_icon from "../../assets/editpen.svg";
import plus_icon from "../../assets/plus.svg";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import OverlayDialog from "../../components/OverlayDialog";
import type Employee from "../../employee";
let employees = [
  {
    id: 19,
    createdAt: "2025-05-22T22:28:22.139Z",
    updatedAt: "2025-05-22T22:28:22.139Z",
    deletedAt: null,
    email: "employee1@gmail.com",
    name: "Employee 1",
    age: 22,
    password: "$2b$10$VqyT7v43sWsZA.ApcKkdrOVUWDwuPQNF72T9GzhNyDFtILki6duQm",
    employeeId: "1",
    dateOfJoining: "2025-05-23T01:25:39.175Z",
    experience: 1,
    status: "PROBATION",
    role: "HR",
    address: {
      id: 19,
      createdAt: "2025-05-22T22:28:22.139Z",
      updatedAt: "2025-05-22T22:28:22.139Z",
      deletedAt: null,
      line1: "123 March Street, kochi",
      pincode: "849314",
      line2: "",
      houseNo: "",
    },
    department: null,
  },
  {
    id: 20,
    createdAt: "2025-05-22T22:51:17.419Z",
    updatedAt: "2025-05-22T22:51:17.419Z",
    deletedAt: null,
    email: "employee2@gmail.com",
    name: "Employee 2",
    age: 22,
    password: "$2b$10$.t4bnVPchd2RWmk05ZAsUuRWQ/Fa4DtMy6akY73nBHfHs46ufCyGy",
    employeeId: "1",
    dateOfJoining: "2025-05-23T01:25:39.175Z",
    experience: 1,
    status: "ACTIVE",
    role: "DEVELOPER",
    address: {
      id: 20,
      createdAt: "2025-05-22T22:51:17.419Z",
      updatedAt: "2025-05-22T22:51:17.419Z",
      deletedAt: null,
      line1: "123 March Street, kochi",
      pincode: "849314",
      line2: "",
      houseNo: "",
    },
    department: null,
  },
  {
    id: 21,
    createdAt: "2025-05-22T22:54:50.961Z",
    updatedAt: "2025-05-22T22:54:50.961Z",
    deletedAt: null,
    email: "employee3@gmail.com",
    name: "Employee 3",
    age: 22,
    password: "$2b$10$7iEtKfd2m/jgTCzNr8o52uveHFqwnZkDOApPTUFMkA.c/UwwhwD6G",
    employeeId: "1",
    dateOfJoining: "2025-05-23T01:25:39.175Z",
    experience: 1,
    status: "ACTIVE",
    role: "DEVELOPER",
    address: {
      id: 21,
      createdAt: "2025-05-22T22:54:50.961Z",
      updatedAt: "2025-05-22T22:54:50.961Z",
      deletedAt: null,
      line1: "123 Mascrch Street, kochi",
      pincode: "849314",
      line2: "",
      houseNo: "",
    },
    department: null,
  },
  {
    id: 22,
    createdAt: "2025-05-23T01:00:41.158Z",
    updatedAt: "2025-05-23T01:00:41.158Z",
    deletedAt: null,
    email: "employee4@gmail.com",
    name: "Employee 4",
    age: 22,
    password: "$2b$10$AGJ5HO0IuAmg5t4pxAKWQu.z2W4K84ktr2/bkyAnHfGVRYcijNB6q",
    employeeId: "1",
    dateOfJoining: "2025-05-23T01:25:39.175Z",
    experience: 1,
    status: "ACTIVE",
    role: "DEVELOPER",
    address: {
      id: 22,
      createdAt: "2025-05-23T01:00:41.158Z",
      updatedAt: "2025-05-23T01:00:41.158Z",
      deletedAt: null,
      line1: "123 Mascrch Street, kochi",
      pincode: "849314",
      line2: "",
      houseNo: "",
    },
    department: null,
  },
  {
    id: 23,
    createdAt: "2025-05-23T01:06:01.563Z",
    updatedAt: "2025-05-23T01:06:01.563Z",
    deletedAt: null,
    email: "employee5@gmail.com",
    name: "Employee 5",
    age: 22,
    password: "$2b$10$R4WUNvLSdg9G92oq/kkBNusoV4SXH4L.CtSmpa4MpwDyLjtYWPR06",
    employeeId: "1",
    dateOfJoining: "2025-05-23T01:25:39.175Z",
    experience: 1,
    status: "ACTIVE",
    role: "DEVELOPER",
    address: {
      id: 23,
      createdAt: "2025-05-23T01:06:01.563Z",
      updatedAt: "2025-05-23T01:06:01.563Z",
      deletedAt: null,
      line1: "123 Mascrch Street, kochi",
      pincode: "849314",
      line2: "",
      houseNo: "",
    },
    department: {
      id: 2,
      createdAt: "2025-05-23T00:54:41.356Z",
      updatedAt: "2025-05-23T03:22:28.469Z",
      deletedAt: null,
      name: "Product",
    },
  },
  {
    id: 25,
    createdAt: "2025-05-23T01:11:10.391Z",
    updatedAt: "2025-05-23T01:11:10.391Z",
    deletedAt: null,
    email: "employee6@gmail.com",
    name: "Employee 6",
    age: 22,
    password: "$2b$10$INY0G5SkUxO0fmI3IUx0luRCCOQcrsWqZTZaCsgW55U/OhBxPXj9S",
    employeeId: "1",
    dateOfJoining: "2025-05-23T01:25:39.175Z",
    experience: 1,
    status: "ACTIVE",
    role: "UX",
    address: {
      id: 24,
      createdAt: "2025-05-23T01:11:10.391Z",
      updatedAt: "2025-05-23T01:11:10.391Z",
      deletedAt: null,
      line1: "123 Mascrch Street, kochi",
      pincode: "849314",
      line2: "",
      houseNo: "",
    },
    department: {
      id: 3,
      createdAt: "2025-05-23T00:54:44.817Z",
      updatedAt: "2025-05-23T00:54:44.817Z",
      deletedAt: null,
      name: "Design",
    },
  },
  {
    id: 26,
    createdAt: "2025-05-23T01:32:52.046Z",
    updatedAt: "2025-05-23T01:32:52.046Z",
    deletedAt: null,
    email: "employee7@gmail.com",
    name: "Employee 7",
    age: 22,
    password: "$2b$10$BhFpa5rNa3WWgprWBqfgkealllrioa17Vmv45DBhuKavEdHzUTW.C",
    employeeId: "1",
    dateOfJoining: "2025-05-23T01:25:39.175Z",
    experience: 2,
    status: "INACTIVE",
    role: "UX",
    address: {
      id: 25,
      createdAt: "2025-05-23T01:32:52.046Z",
      updatedAt: "2025-05-23T01:32:52.046Z",
      deletedAt: null,
      line1: "123 Mascrch Street, kochi",
      pincode: "849314",
      line2: "",
      houseNo: "",
    },
    department: {
      id: 3,
      createdAt: "2025-05-23T00:54:44.817Z",
      updatedAt: "2025-05-23T00:54:44.817Z",
      deletedAt: null,
      name: "Design",
    },
  },
  {
    id: 27,
    createdAt: "2025-05-23T01:39:01.370Z",
    updatedAt: "2025-05-23T01:39:01.370Z",
    deletedAt: null,
    email: "employee8@gmail.com",
    name: "Employee ",
    age: 22,
    password: "$2b$10$/.SuIceX0PM1lBzR45WKJOCNh6OYMqPgUAT0CB5dtDQ5EFdRf5VA.",
    employeeId: "1",
    dateOfJoining: "2025-05-23T01:25:39.175Z",
    experience: 2,
    status: "INACTIVE",
    role: "UX",
    address: {
      id: 26,
      createdAt: "2025-05-23T01:39:01.370Z",
      updatedAt: "2025-05-23T01:39:01.370Z",
      deletedAt: null,
      line1: "123 Mascrch Street, kochi",
      pincode: "849314",
      line2: "Ernakulam,Kerala",
      houseNo: "123",
    },
    department: {
      id: 3,
      createdAt: "2025-05-23T00:54:44.817Z",
      updatedAt: "2025-05-23T00:54:44.817Z",
      deletedAt: null,
      name: "Design",
    },
  },
  {
    id: 28,
    createdAt: "2025-05-23T05:38:32.757Z",
    updatedAt: "2025-05-23T05:38:32.757Z",
    deletedAt: null,
    email: "employee9@gmail.com",
    name: "Employee 9",
    age: 22,
    password: "$2b$10$pZqnoY3aQH8Lglh4F2mDWOEu8x0q/ysMJmBi/LfUK0XCDMj0mn.ES",
    employeeId: "1",
    dateOfJoining: "2025-05-23T01:25:39.175Z",
    experience: 2,
    status: "INACTIVE",
    role: "UX",
    address: {
      id: 27,
      createdAt: "2025-05-23T05:38:32.757Z",
      updatedAt: "2025-05-23T05:38:32.757Z",
      deletedAt: null,
      line1: "123 Mascrch Street, kochi",
      pincode: "849314",
      line2: "Ernakulam,Kerala",
      houseNo: "123",
    },
    department: {
      id: 3,
      createdAt: "2025-05-23T00:54:44.817Z",
      updatedAt: "2025-05-23T00:54:44.817Z",
      deletedAt: null,
      name: "Design",
    },
  },
];

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
}: {
  data: Employee;
  onDelete: () => void;
  onEdit: () => void;
}) => {
  return (
    <>
      <div className="emp-info-row">
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
export const EmployeeList = () => {
  let [filterValue, setFilterValue] = useState(statusOptions[0]);
  let [searchParams, setSearchParams] = useSearchParams();
  let [deleteConfirm, setDeleteConfirm] = useState(false);
  let [activateDeleteConfirmFor, setActivateDeleteConfirmFor] = useState(-1);
  useEffect(() => {
    let statusVal = searchParams.get("status");
    if (!statusVal) return;
    setFilterValue(statusVal);
  }, []);
  useEffect(() => {
    let urlSearchParams = new URLSearchParams(
      searchParams ? searchParams : undefined
    );
    urlSearchParams.delete("status");
    urlSearchParams.set("status", filterValue);
    setSearchParams(urlSearchParams);
  }, [filterValue]);
  let navigate = useNavigate();
  let onOverlayDeletePressed = () => {
    employees = employees.filter((emp) => emp.id != activateDeleteConfirmFor);
    setDeleteConfirm(false);
  };
  return (
    <>
      <div className="content-header">
        <h1>Employee List</h1>
        <div className="right-buttons-div">
          <label>Filter By </label>
          <select
            value={filterValue}
            onChange={(newval) => setFilterValue(newval.target.value)}
          >
            {statusOptions.map((opt) => (
              <option>{opt}</option>
            ))}
          </select>
          <Button text="Create Employee" icon={plus_icon} onClick={()=>navigate("/employees/create")}/>
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
      {employees.filter((emp)=>emp.status===filterValue||filterValue==='ALL')
      .map((emp) => (
        <EmployeeInfo
          data={emp as unknown as Employee}
          onDelete={() => {
            setDeleteConfirm(true);
            setActivateDeleteConfirmFor(emp.id);
          }}
          onEdit={() => {navigate("/employees/edit/" + emp.id)}}
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
