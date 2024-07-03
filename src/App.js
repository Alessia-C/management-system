import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import RootPage from "./pages/Root";
import ErrorPage from "./pages/Error";
import { tokenLoader } from "./unit/auth";
import DashboardPage from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import { logout } from "./pages/Logout";
import Employees from "./pages/Employees";
import Settings from "./pages/Settings";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Reset from "./pages/Login/Reset";
import store from "./store";

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
          path: "resetpassword",
          element: <Reset />,
        },
        {
          path: "clients",
          element: <Clients />,
        },
        {
          path: "employees",
          element: <Employees />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "settings",
          element: <Settings />,
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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
