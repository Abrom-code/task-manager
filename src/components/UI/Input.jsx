import React from "react";

function Input({ className, ...props }) {
  let classes =
    " p-4.5  dark:bg-[#7c7c7c44] border-1 w-full rounded h-8 pl-2 dark:border-0 outline-0 ";
  if (className) {
    classes += className;
  }
  return <input className={`${classes}  dark:text-gray-300`} {...props} />;
}

export default Input;
