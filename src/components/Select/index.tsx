import type { ChangeEvent } from "react";
import "./select.css";

export const Select = ({
  options,
  id,
  label,
  value,
  onChange,
}: {
  options: SelectOption[];
  id: string;
  label?: string;
  value?: string;
  onChange?:(event: ChangeEvent<HTMLSelectElement>)=>void
}) => {
  return (
    <div className="label-input-group">
      <label>{label}</label>
      <select id={id} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export type SelectOption = {
  value: string;
  label: string;
};
