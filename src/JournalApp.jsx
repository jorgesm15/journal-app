import React from "react";
import { Outlet } from "react-router-dom";
import { AppTheme } from "./theme/AppTheme";

export const JournalApp = () => {
  return (
    <>
      <AppTheme>
        <Outlet />
      </AppTheme>
    </>
  );
};
