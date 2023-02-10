import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { SideBar } from "../components";
import { NavBar } from "../components/NavBar";

const drawerWidht = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidht={drawerWidht} />
      <SideBar drawerWidth={drawerWidht} />
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
