import React from "react";
import "./style.css";

interface IInput {
  label: string;
  type: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  onBlur?: () => void;
}

export default function Input({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
}: IInput) {
  return (
    <div className="wrapper">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="input"
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}
