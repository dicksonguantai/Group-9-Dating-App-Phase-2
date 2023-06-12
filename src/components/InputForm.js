import React from "react";

function InputForm({ name, type, value, handleChange, labelText }) {
  return (
    <div className="my-2">
      <label htmlFor={name}>{labelText}</label>
      <input
        className="block px-3 w-full py-1 outline-none rounded-sm"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputForm;
