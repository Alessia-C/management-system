import { useEffect } from "react";
import { Outlet, redirect, useLoaderData, useSubmit } from "react-router-dom";
import { getTokenDuration } from "../unit/auth";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar/Sidebar";
import classes from "./Dashboard/Dashboard.module.css";

const RootPage = () => {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    console.log(token);
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
    // }, 1 * 60 * 60 * 1000);
  }, [token, submit]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default RootPage;
