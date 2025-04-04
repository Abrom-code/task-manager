import React, { useEffect, useState } from "react";
import Input from "../UI/Input";
import { Link, Form, useActionData, useNavigation } from "react-router";
import PasswordInput from "../UI/PasswordInput";
import { Snackbar, Alert } from "@mui/material";

function Login() {
  const data = useActionData();
  const navigation = useNavigation();
  const [toastIsOpen, setToastIsOpen] = useState(false);

  const submitting = navigation.state === "submitting";

  useEffect(() => {
    if (data?.error) {
      setToastIsOpen(true);
    }
  }, [data]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setToastIsOpen(false);
  };

  return (
    <>
      <Snackbar
        open={toastIsOpen}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {data?.error}
        </Alert>
      </Snackbar>
      <Form
        method="POST"
        className=" flex flex-col min-w-90  mt-4 pt-4 rounded-2xl bg-gray-300 drop-shadow-sm shadow-black dark:bg-[#323232d8] p-8 gap-3"
      >
        <p className=" text-center font-serif text-3xl font-bold my-4 border border-t-0 border-x-0 border-b-emerald-500 text-green-700">
          SIGN IN
        </p>

        <label>
          <Input placeholder="Email" name="email" type="text" />
        </label>
        <PasswordInput placeholder="password" name="password" />
        <div className=" flex justify-between my-4  px-2 ">
          <p>Forgot password?</p>
          <p className=" text-green-700 cursor-pointer">RESET</p>
        </div>
        <button className="  bg-green-700 py-1 rounded text-gray-50 font-bold cursor-pointer ">
          {submitting ? "Submitting..." : "LOG IN"}
        </button>
        <div className=" flex justify-between mb-0 px-2 ">
          <p>Don' have an account?</p>
          <p className=" text-green-700">
            <Link to={"/signup"}>SIGN UP</Link>
          </p>
        </div>
      </Form>
    </>
  );
}

export default Login;
