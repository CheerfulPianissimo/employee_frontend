import type { ReactNode } from "react";
import "./Input.css";
export const Input = ({
  label = "",
  id,
  type,
  placeholder = label,
  onChange,
  ref,
  endAdornment = null,
  value,
  disabled = false,
}: {
  label?: string;
  id: string;
  type: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  ref?: React.RefObject<HTMLInputElement | null>;
  endAdornment?: ReactNode;
  value?: string;
  disabled?: boolean;
}) => {
  return (
    <div className="label-input-group">
      <label htmlFor={id}>{label}</label>
      <div className="textarea-group">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
          value={value}
          disabled={disabled}
        />
        {endAdornment}
      </div>
    </div>
  );
};
