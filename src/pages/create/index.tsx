import { Input } from "../../components/Input";
import "./create.css";

import { Button } from "../../components/Button";
import { Layout } from "../../components/Layout";
import { Select } from "../../components/Select";
export const Create = () => {
  return (
    <Layout sidebar_title="Employees List" header_title="Create Employee">
      <div className="form-full">
        <form>
          <div className="form-inputs">
            <Input label="Employee Name" type="text" id="employee_name" />
            <Input label="Joining Date" type="text" id="joining_date" />
            <Input label="Experience" type="number" id="experience" />
            <Select
              id="department"
              options={[
                { value: "sde", label: "Development" },
                { value: "sre", label: "SRE" },
                { value: "HR", label: "HR" },
              ]}
              label={"Department"}
            />
            <Select
              id="role"
              options={[
                { value: "sde", label: "SDE" },
                { value: "sre", label: "SRE" },
                { value: "data", label: "Data Engineer" },
              ]}
              label={"Role"}
            />
            <Select
              id="status"
              options={[
                { value: "placeholder", label: "Status" },
                { value: "joined", label: "Joined" },
                { value: "no-join", label: "Not Joined" },
              ]}
              label={"Status"}
            />
            <div className="address-box">
              <Input
                label="Address"
                type="textarea"
                id="address1"
                placeholder="Flat No./House No."
              />
              <Input
                placeholder="Address Line 1"
                type="textarea"
                id="address2"
              />
              <Input
                placeholder="Address Line 2"
                type="textarea"
                id="address3"
              />
            </div>
            {/* <Input label="Employee ID" type="text" id="employee_id" /> */}
          </div>
          <div className="form-group__submit">
            <Button text="Create" />
            <Button text="Cancel" variant="secondary" />
          </div>
        </form>
      </div>
    </Layout>
  );
};
