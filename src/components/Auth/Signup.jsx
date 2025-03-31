import React from "react";
import Input from "../UI/Input";
import { Link } from "react-router";
import PasswordInput from "../UI/PasswordInput";

function Signup() {
  return (
    <form className=" flex flex-col min-w-90  mt-4 pt-4 rounded-2xl bg-gray-300 drop-shadow-sm shadow-black dark:bg-[#323232d8] p-8 gap-3">
      <p className=" text-center font-serif text-3xl font-bold border border-t-0 border-x-0 border-b-emerald-500 my-4 text-green-700">
        SIGN UP
      </p>
      <label>
        {" "}
        <Input placeholder="Username" type="text" />
      </label>
      <label>
        {" "}
        <Input placeholder="Email" type="text" />
      </label>
      <PasswordInput placeholder="Password" />
      <PasswordInput placeholder="Confirm password" />

      <button className=" my-4 bg-green-700 px-2 py-1 rounded font-bold cursor-pointer ">
        SIGN UP
      </button>
      <div className=" flex justify-between mb-0 px-2 ">
        <p>Already have an account?</p>
        <p className=" text-green-700">
          <Link to={"/login"}>SIGN IN</Link>
        </p>
      </div>
    </form>
  );
}

export default Signup;
