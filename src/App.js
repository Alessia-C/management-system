import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/Error";
import RootPage from "./pages/Root";
import AuthForm from "./components/AuthForm/AuthForm";
import DashboardPage from "./pages/Dashboard";
import { logout } from "./pages/Logout";
import { tokenLoader } from "./unit/auth";

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
        element: <AuthForm />,
      },
      {
        path: "logout",
        action: logout,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
