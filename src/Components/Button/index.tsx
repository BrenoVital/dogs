import React from "react";
import "./style.css";

interface IButton {
  children: React.ReactNode;
}
export default function Button({ children, ...props }: IButton) {
  return (
    <button {...props} className="button">
      {children}
    </button>
  );
}
