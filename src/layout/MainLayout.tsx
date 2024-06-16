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
import { FiShoppingBag } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Logo from "../assets/logo.png";
import { IoArrowBack } from "react-icons/io5";
import { setRemove } from "../store/slice/userSlice";
function MainLayout() {
  const [open, _] = useState(true); //setOpen
  const { pathname } = useLocation();
  const { role } = useAppSelector((state) => state.userReducer);
  // const navigate = useNavigate();
  // const roles = [
  //   "admin",
  //   "photographer",
  //   "customer",
  //   "non-customer",
  //   "deleted",
  // ];
  const routes = [
    {
      type: "collapse",
      name: "Find Photos",
      key: "find-photos",
      bgType: "blue",
      href: "/find-photos",
      roles: ["customer", "non-customer"],
      icon: <MdHome size="15px" color="inherit" />,
    },
    {
      type: "collapse",
      name: "Upload Photos",
      key: "upload-photos",
      bgType: "blue",
      href: "/upload-photos",
      roles: ["photographer"],
      icon: <MdHome size="15px" color="inherit" />,
    },

    {
      type: "collapse",
      name: "All Users",
      key: "all-users",
      bgType: "blue",
      href: "/all-users",
      roles: ["admin"],
      icon: <MdHome size="15px" color="inherit" />,
    },

    {
      type: "collapse",
      name: "All Photos",
      key: "all-admin-photos",
      bgType: "blue",
      href: "/admin/photos",
      roles: ["admin"],
      icon: <MdHome size="15px" color="inherit" />,
    },

    { type: "title", title: "ACCOUNT INFORMATION", key: "tools-title-pages" },
    {
      type: "collapse",
      name: "Profile Settings",
      key: "profile-settings",
      bgType: "light",
      href: "/profile",
      roles: ["customer", "admin", "photographer", "non-customer"],
      icon: <MdHome size="15px" color="inherit" />,
    },
    {
      type: "collapse",
      name: "All Photos",
      key: "all-photos",
      bgType: "light",
      href: "/all-photos",
      roles: [""],
      icon: <MdHome size="15px" color="inherit" />,
    },
    {
      type: "collapse",
      name: "My Downloads",
      key: "my-downloads",
      bgType: "light",
      href: "/my-downloads",
      roles: ["customer", "non-customer"],
      icon: <MdHome size="15px" color="inherit" />,
    },
    {
      type: "collapse",
      name: "My Uploads",
      key: "my-uploads",
      bgType: "light",
      href: "/my-uploads",
      roles: [""],
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
      roles,
      href,
      bgType,
    }: any) => {
      console.log(roles?.includes(role as string), role);
      if (roles?.includes(role as string) || !roles) {
        if (type === "collapse") {
          return (
            <Link style={{ textDecoration: "none" }} to={href}>
              <ListItem key={key} disablePadding>
                <ListItemButton
                  selected={pathname === href}
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
                    sx={{
                      color: bgType === "light" ? "#A0AEC0" : "red",
                    }}
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
              ml={1}
              // textAlign={"center"}
            >
              {title}
            </Typography>
          );
        }
      } else {
        return null;
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
          src={Logo}
        />
      </Box>
      <Divider sx={{ margin: "20px 0" }} />
      <List>{renderRoutes}</List>
    </Box>
  );

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

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 0",
        }}
      >
        <IoArrowBack
          size={22}
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate(-1);
          }}
        />
        {/* {open ? (
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
        )} */}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          color: "#718096 !important",
          textDecoration: "none",
        }}
      >
        <Link to="/checkout" replace style={{ color: "#718096" }}>
          <FiShoppingBag />
        </Link>
        <Link
          to="/auth/login"
          replace={true}
          onClick={() => {
            localStorage.removeItem("authToken");
            dispatch(setRemove());
          }}
          style={{ textDecoration: "none", color: "#718096" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <FaUser />
            <Typography fontSize={12} color={"#718096"}>
              Logout
            </Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default MainLayout;
