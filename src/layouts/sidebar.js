import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import {
  BullsEye,
  CircleDark,
  CircleLight,
  EventIcon,
  GhanaFlag,
  HomeIconDark,
  HomeIconLight,
  Logo,
  woman,
} from "../assets";
import { FiSearch, FiBell, FiUser, FiCreditCard } from "react-icons/fi";
import { Link } from "react-router-dom";
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const sidebarRoutes = [
  {
    title: "Dashboard",
    href: "/dashboard",
    iconLight: <HomeIconLight />,
    iconDark: <HomeIconDark />,
    styles: "bg-primary-200",
    badge: (
      <div className="bg-secondary-900 h-7 w-7 rounded-full">
        <p className="text-white">2</p>
      </div>
    ),
  },

  // {
  //   title: "Clients",
  //   href: "/clients",
  //   iconLight: <i class="icon-user menu-icon"></i>,
  // },
  {
    title: "Events",
    href: "/events",
    iconLight: <CircleLight />,
    iconDark: <CircleDark />,
  },
  {
    title: "Users",
    href: "/admins",
    iconLight: <CircleLight />,
    iconDark: <CircleDark />,
  },

  {
    title: "Events",
    href: "/f",
    iconLight: <EventIcon />,
    iconDark: <EventIcon />,
    children: [],
  },
  {
    title: "Users",
    href: "/users",
    iconLight: <FiUser color="white" size={18} />,
    iconDark: <FiUser color="grey" size={18} />,
    children: [
      {
        title: "Event organizers",
        href: "/f",
      },
      {
        title: "Event attendees",
        href: "/f",
      },
      {
        title: "Event hosts",
        href: "/f",
      },
    ],
  },
  {
    title: "Payments",
    href: "/",
    iconLight: <FiCreditCard size={18} color="white" />,
    iconDark: <FiCreditCard size={18} color="grey" />,
    children: [],
  },
];
function Sidebar({ content }) {
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleNavigation = (item) => {
    history.push(item.href);
    // handleDrawerToggle();
  };
  return (
    <Box sx={{ display: "flex", backgroundColor: "white" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} elevation={0} className="bg-white">
        <div className=" bg-white px-3 py-2 m-3 flex justify-between shadow-md rounded-5">
          <div className="flex items-center space-x-2">
            <FiSearch color="grey" size={24} />
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <GhanaFlag />
              <p className="text-sm">English</p>
            </div>
            <div className="relative">
              <FiBell color="black" size={24} />
              <div className=" absolute -right-4 -top-4 h-7 w-7 rounded-full bg-red flex items-center justify-center">
                <p className="text-white font-bold">3</p>
              </div>
            </div>
            <div>
              <p className="text-dark">John Doe</p>
              {/* <p>Admin</p> */}
            </div>
            <div>
              <img src={woman} className="rounded-full" />
            </div>
          </div>
        </div>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        {/* <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader> */}

        <div className="flex items-center justify-between px-10 py-8">
          <Logo />
          <BullsEye />
        </div>

        <div className="px-2">
          {sidebarRoutes.slice(0, 3).map((item) => (
            <button
              onClick={() => handleNavigation(item)}
              className={`flex items-center justify-between rounded-5 my-2 p-3 w-full  ${
                history.location.pathname === item.href
                  ? "bg-primary-900  "
                  : item?.styles
              }`}
            >
              <div className="space-x-2 flex items-center">
                {history.location.pathname === item.href
                  ? item.iconLight
                  : item.iconDark}
                <p
                  className={`text-sm  ${
                    history.location.pathname === item.href
                      ? "text-white"
                      : " text-dark"
                  } `}
                >
                  {item.title}
                </p>
              </div>
              {item?.badge}
            </button>
          ))}

          <div className="">
            <p className="text-dark font-bold ml-3">Menu</p>
            {sidebarRoutes.slice(3, 6).map((item) => (
              <button
                onClick={() => handleNavigation(item)}
                className={`flex flex-col rounded-5 my-2 p-3 w-full`}
              >
                <div className="flex items-center justify-between ">
                  <div className="space-x-2 flex items-center">
                    {history.location.pathname === item.href
                      ? item.iconLight
                      : item.iconDark}
                    <p
                      className={`text-sm  ${
                        history.location.pathname === item.href
                          ? "text-white"
                          : " text-dark"
                      } `}
                    >
                      {item.title}
                    </p>
                  </div>
                  {item?.badge}
                </div>
                <div className="ml-3 flex flex-col">
                  {item?.children.map((children) => (
                    <Link to={children?.href} className="my-2">
                      <p className="text-left">{children?.title}</p>
                    </Link>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        {content}
      </Box>
    </Box>
  );
}

export default Sidebar;
