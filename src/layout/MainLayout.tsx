import {
  Divider,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { MdHome } from "react-icons/md";
import { FiChevronsLeft, FiChevronsRight, FiShoppingBag } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";

import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
function MainLayout() {
  const [open, setOpen] = useState(true);

  const routes = [
    {
      type: "collapse",
      name: "Find Photos",
      key: "find-photos",
      bgType: "blue",
      href: "/find-photos",
      icon: <MdHome size="15px" color="inherit" />,
    },
    { type: "title", title: "ACCOUNT INFORMATION", key: "tools-title-pages" },
    {
      type: "collapse",
      name: "Profile Settings",
      key: "profile-settings",
      bgType: "light",
      href: "/profile",
      icon: <MdHome size="15px" color="inherit" />,
    },
    {
      type: "collapse",
      name: "My Downloads",
      key: "my-downloads",
      bgType: "light",
      href: "/profile",
      icon: <MdHome size="15px" color="inherit" />,
    },
  ];
  const renderRoutes = routes.map(
    ({
      type,
      name,
      icon,
      title,
      // collapse,
      // noCollapse,
      key,
      href,
      bgType,
    }: any) => {
      if (type === "collapse") {
        return (
          <Link style={{ textDecoration: "none" }} to={href}>
            <ListItem key={key} disablePadding>
              <ListItemButton
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 1,
                }}
              >
                <ListItemIcon>
                  <Box
                    sx={{
                      background: bgType === "light" ? "white" : "#01A8E6",
                      padding: 1,
                      borderRadius: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 20,
                      height: 20,
                      boxShadow:
                        " 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                      color: bgType === "light" ? "#344767" : "white",
                    }}
                  >
                    {/* <MdHome size={18} /> */}

                    {icon}
                  </Box>
                </ListItemIcon>
                <ListItemText
                  sx={{ color: bgType === "light" ? "#A0AEC0" : "red" }}
                  primary={name}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        );
      } else {
        return (
          <Typography
            key={key}
            display="block"
            variant="caption"
            fontWeight="bold"
            color="#2D3748"
            className="  "
            textTransform="uppercase"
            fontSize={12}
            my={2}
            // textAlign={"center"}
          >
            {title}
          </Typography>
        );
      }
    }
  );

  const DrawerList = (
    <Box
      padding={1}
      sx={{
        background: "red",
        height: "100%",
        backgroundColor: "#F8F9FA",
      }}
      role="presentation"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            width: "200px",
          }}
          src="https://s3-alpha-sig.figma.com/img/5236/8802/fc11de3fea8e668ea90e045d1bc94464?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ds6Ra7LuA~VaykPRed~TOm4zmjaN6uU7yNLAdKNnkl7MQSNFpeEfaWjicsQx0srmTwLf35sOwlLJQtIUfBcOVw6V2exHmDgeA7hLUUE4DWiGApGM6psO1xEzommoC7iYBYOWllhJBAcGZ~MHtQxfiP30WGLr~Vz9PieDFWXZJVRkBXfiQZRO9onB0acYzQbTEwXJGoITL2VMR7ysziVZ1tYk1zBhE1nsdZmHF~EeKnBLH1zb6q0kB2AmNzlveSwm24ski9KKcqLuWBOBBqhmK3JW7ZhsTddPB~o9jr~N94F86rvq66jJEBEN-T-vR7UbsGHsNm0dvXBcsyxnWQTNJw__"
        />
      </Box>
      <Divider sx={{ margin: "20px 0" }} />
      <List>{renderRoutes}</List>
    </Box>
  );

  const Header = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px 0",
        }}
      >
        {open ? (
          <FiChevronsLeft
            cursor={"pointer"}
            size={33}
            onClick={() => setOpen(!open)}
          />
        ) : (
          <FiChevronsRight
            cursor={"pointer"}
            size={33}
            onClick={() => setOpen(!open)}
          />
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "#718096",
          }}
        >
          <FiShoppingBag />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <FaUser />
            <Typography>Logout</Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        display: open ? "flex" : "block",
        backgroundColor: "#F8F9FA",
        minHeight: "100vh",
      }}
    >
      <Drawer
        sx={{
          width: "250px",
          flexShrink: 0,
          zIndex: 1,
          "& .MuiDrawer-paper": {
            width: "250px",
            boxSizing: "border-box",
          },
        }}
        open={open}
        variant="persistent"
      >
        {DrawerList}
      </Drawer>

      <Box
        component="main"
        sx={{ marginLeft: open ? "0px" : 0, flexGrow: 1 }}
        padding={2}
      >
        <Header />

        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
