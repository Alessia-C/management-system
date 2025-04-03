import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Form, NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from '@mui/icons-material/Dashboard';

const SIDEBAR = [
  {
    path: "/",
    title: "Dashboard",
    icon: <DashboardIcon fontSize="medium" />,
  },
  {
    path: "/customers",
    title: "Clienti",
    icon: <GroupIcon fontSize="medium" />,
  },
  {
    path: "/employees",
    title: "Dipendenti",
    icon: <GroupIcon fontSize="medium" />,
  },
  {
    path: "/projects",
    title: "Progetti",
    icon: <GroupIcon fontSize="medium" />,
  },
  {
    path: "/settings",
    title: "Impostazioni",
    icon: <SettingsIcon fontSize="medium" />,
  },
];

export default function Sidebar() {
  return (
    <Box className={classes.wrapSidebar}>
      <Typography variant="h4">ManagePro</Typography>
      <List className={classes.sidebarContainer}>
        {SIDEBAR.map((item, i) => {
          return (
            <ListItem key={i} className={classes.sidebarList}>
              <NavLink
                to={item.path}
                className={({ isActive, isPending }) =>
                  isPending ? classes.pending : isActive ? classes.active : ""
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </NavLink>
            </ListItem>
          );
        })}
      </List>
      <Form action="/logout" method="post">
        <Button className={classes.logout} type="submit">Logout</Button>
      </Form>
    </Box>
  );
}
