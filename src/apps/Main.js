import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { TbLayoutDashboard } from "react-icons/tb";
import { TbTablePlus } from "react-icons/tb";
import { FaThList } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Outlet, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TiThListOutline } from "react-icons/ti";
import { FaBuildingUser } from "react-icons/fa6";
// import Logo from '../assets/img/Logo.png';
// import Image from 'react-bootstrap/Image';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Main() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#1F4B43' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* Conteneur des icônes aligné à droite */}
          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit">
              <IoIosNotificationsOutline />
            </IconButton>
            <IconButton color="inherit">
              <MdOutlineMessage />
            </IconButton>
            <IconButton color="inherit" onClick={() => navigate("/profile")}>
              <CgProfile />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', color:'#1F4B43' }}>
            SyndicPlus
          </Typography>
          {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Image
              src={Logo}
              alt="Logo"
              width="80"
              height="70"
              className="d-inline-block align-top"
            />
          </Box> */}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <FaChevronRight /> : <FaChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[{ title: 'Dashboard', icon: <TbLayoutDashboard />, link: "/" }, { title: 'Demande incidence', icon: <TbTablePlus />, link: "/demandeIncidence" }, { title: 'Incidence', icon: <TiThListOutline />, link: "/incidences" }, { title: 'Prestataire', icon: <FaThList />, link: "/prestataire" }, { title: 'Demande Prestataire', icon: <FaThList />, link: "/DemandePrestataire" }, { title: 'Paiement en ligne', icon: <RiSecurePaymentFill />, link: "/paiement" }, { title: 'Locataire', icon: <FaBuildingUser />, link: "/locataire" }, { title: 'Proprietaire', icon: <FaBuildingUser />, link: "/proprietaire" }].map((text, index) => (
            <ListItem key={text.title} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => navigate(`${text.link}`)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.title} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}

