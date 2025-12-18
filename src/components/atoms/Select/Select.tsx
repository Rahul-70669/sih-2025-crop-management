import React from "react";
import type {SelectProps} from "./SelectProps";

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  label,
  placeholder,
  disabled,
}) => {
  return (
    <div className="form-control">
      {label && <label className="label">{label}</label>}
      <select
        className="select select-bordered"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
