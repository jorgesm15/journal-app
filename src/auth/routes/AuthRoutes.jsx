import { Navigate } from "react-router-dom";
import { Login, Register } from "../pages";

export const AuthRoutes = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "",
    element: <Navigate to="/auth/login" />,
  },
];
