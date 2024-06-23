import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import RootPage from "./pages/Root";
import ErrorPage from "./pages/Error";
import { tokenLoader } from "./unit/auth";
import DashboardPage from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import { logout } from "./pages/Logout";
import UsersList from "./pages/UsersList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      id: "root",
      loader: tokenLoader,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "clients",
          element: <UsersList />,
        },
        {
          path: "employees",
          element: <UsersList />,
        },
        {
          path: "projects",
          element: <UsersList />,
        },
        {
          path: "settings",
          element: <UsersList />,
        },
        {
          path: "logout",
          action: logout,
        },
      ],
    },
  ]);
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
