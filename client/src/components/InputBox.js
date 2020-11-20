import React from "react";

function InputBox({ name, placeholder, value, className, onChange }) {
  return (
    <input
      name={name}
      type="text"
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputBox;
