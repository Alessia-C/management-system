import { useEffect } from "react";
import {
  Outlet,
  redirect,
  useLoaderData,
  useLocation,
  useSubmit,
} from "react-router-dom";
import { logout } from "./Logout";
import { getTokenDuration } from "../unit/auth";

const RootPage = () => {
  const token = useLoaderData();
  const submit = useSubmit();
  // const navigation = useNavigation();
  useEffect(() => {
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

  return <Outlet />;
};

export default RootPage;
