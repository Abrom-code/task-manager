import React, { useState } from "react";
import Input from "../UI/Input";
import { Link } from "react-router";
import PasswordInput from "../UI/PasswordInput";

function Login() {
  return (
    <form className=" flex flex-col min-w-90  mt-4 pt-4 rounded-2xl bg-gray-300 drop-shadow-sm shadow-black dark:bg-[#323232d8] p-8 gap-3">
      <p className=" text-center font-serif text-3xl font-bold my-4 border border-t-0 border-x-0 border-b-emerald-500 text-green-700">
        SIGN IN
      </p>
      <label>
        {" "}
        <Input placeholder="Email" type="text" />
      </label>
      <PasswordInput placeholder="password" />
      <div className=" flex justify-between my-4  px-2 ">
        <p>Forgot password?</p>
        <p className=" text-green-700 cursor-pointer">RESET</p>
      </div>
      <button className="  bg-green-700 py-1 rounded font-bold cursor-pointer ">
        SIGN IN
      </button>
      <div className=" flex justify-between mb-0 px-2 ">
        <p>Don' have an account?</p>
        <p className=" text-green-700">
          <Link to={"/signup"}>SIGN UN</Link>
        </p>
      </div>
    </form>
  );
}

export default Login;
