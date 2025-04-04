import React, { useEffect, useState } from "react";
import Input from "../UI/Input";
import { Link, Form, useActionData, useNavigation } from "react-router";
import PasswordInput from "../UI/PasswordInput";
import { Snackbar, Alert } from "@mui/material";

function Signup() {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const data = useActionData();
  const navigation = useNavigation();
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
        <p className=" text-center font-serif text-3xl font-bold border border-t-0 border-x-0 border-b-emerald-500 my-4 text-green-700">
          SIGN UP
        </p>

        <label>
          <Input placeholder="Username" name="username" type="text" />
        </label>
        <label>
          <Input placeholder="Email" name="email" type="text" />
        </label>
        <PasswordInput placeholder="Password" name="password" />
        <PasswordInput placeholder="Confirm password" name="confirm" />

        <button className=" my-4 bg-green-700  text-gray-50 px-2 py-1 rounded font-bold cursor-pointer ">
          {submitting ? "Submitting..." : "SIGN UP"}
        </button>
        <div className=" flex justify-between mb-0 px-2 ">
          <p>Already have an account?</p>
          <p className=" text-green-700">
            <Link to={"/login"}>SIGN IN</Link>
          </p>
        </div>
      </Form>
    </>
  );
}

export default Signup;
