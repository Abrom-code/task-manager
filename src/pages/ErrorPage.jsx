import React from "react";
import { useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return <div>{(error, error.message)}</div>;
}

export default ErrorPage;
