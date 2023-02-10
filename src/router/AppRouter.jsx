import { createBrowserRouter } from "react-router-dom";
import { Login } from "../auth/pages";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { JournalApp } from "../JournalApp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <JournalApp />,
    children: JournalRoutes,
  },
  {
    path: "/auth/*",
    children: AuthRoutes,
  },
]);
