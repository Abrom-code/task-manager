import React, { useState } from "react";
import Input from "../UI/Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function PasswordInput({ className, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <label className={` relative ${className}`}>
      <Input {...props} type={showPassword ? "text" : "password"} />
      {showPassword ? (
        <FaEyeSlash
          onClick={() => setShowPassword(false)}
          className=" cursor-pointer text-md absolute dark:text-gray-400  right-3 top-3"
        />
      ) : (
        <FaEye
          onClick={() => setShowPassword(true)}
          className=" cursor-pointer text-md absolute  dark:text-gray-400 right-3 top-3"
        />
      )}
    </label>
  );
}

export default PasswordInput;
