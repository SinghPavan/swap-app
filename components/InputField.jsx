"use client";
import React, { useState } from "react";

const InputField = ({ label, placeholder, validator }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);

    if (validator) {
      const validationError = validator(value);
      setError(validationError);
    }
  };
  return (
    <div class="relative">
      <input
        type="text"
        id="floating_filled"
        className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        value={value}
      />
      <label
        htmlFor="floating_filled"
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      ></label>
    </div>
  );
};

export default InputField;
