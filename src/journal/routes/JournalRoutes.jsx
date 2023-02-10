import { Navigate } from "react-router-dom";
import { Journal } from "../pages/Journal";

export const JournalRoutes = [
  {
    path: "/",
    element: <Journal />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
];
