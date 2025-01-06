import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import RootPage from "./pages/Root";
import ErrorPage from "./pages/Error";
import { tokenLoader } from "./utils/auth";
import DashboardPage from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import { logout } from "./pages/Logout";
import Employees from "./pages/Employees/Employees";
import Settings from "./pages/Settings";
import Projects from "./pages/Projects/Projects";
import Clients from "./pages/Clients";
import Reset from "./pages/Login/Reset";
import store from "./store";
import OutletPage from "./components/OutletPage";
import NewEmployee from "./pages/Employees/NewEmployee";
import DetailEmployee from "./pages/Employees/DetailEmployee";

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
          element: <OutletPage />,
          children: [
            {
              index: true,
              element: <Clients />,
            },
            {
              path: "newclient",
              element: <NewEmployee />,
            },
            {
              path: "detailclient/:id",
              element: <DetailEmployee />,
            },
          ],
        },
        {
          path: "employees",
          element: <OutletPage />,
          children: [
            {
              index: true,
              element: <Employees />,
            },
            {
              path: "newemployee",
              element: <NewEmployee />,
            },
            {
              path: "detailemployee/:id",
              element: <DetailEmployee />,
            },
          ],
        },
        {
          path: "projects",
          element: <OutletPage />,
          children: [
            {
              index: true,
              element: <Projects />,
            },
            {
              path: "newproject",
              element: <NewEmployee />,
            },
            {
              path: "detailproject/:id",
              element: <DetailEmployee />,
            },
          ],
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
