import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BusinessIcon from '@mui/icons-material/Business';
import ProfileDrawer from './profilePage/ProfileDrawer';
import { Button, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Outlet, useNavigate } from "react-router-dom";

const drawerWidth = 240;



const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
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



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: 'hidden',
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: `calc(${theme.spacing(7)} + 1px)`,
      [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
      },
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const icons = [SensorOccupiedIcon, LocalShippingIcon, ShoppingBagIcon, BusinessIcon];

const routePaths = [
  '/',
  '/customers',
  '/vehicles',
  // '/orders',
  // '/companies'
];



export default function MiniNavBar() {
  const [open, setOpen] = React.useState(false);
  //const [activeButton, setActiveButton] = React.useState<string>('');
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [openCloseClicked, setOpenCloseClicked] = React.useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
    //setOpenCloseClicked(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    //setOpenCloseClicked(true);
  };

  const handleListItemClick = (index: number) => {
    if (selectedIndex === index && open) {
      setOpen(false); // Close the drawer if the same button is clicked again and the drawer is open
    } else {
      setSelectedIndex(index);
      navigate(routePaths[index]);
      setOpen(true); // Open the drawer if a different button is clicked
    }
  };


  const navigate = useNavigate();
  const signOutNav = () => {
    navigate("/login")
  };
  const profileNav = () => {
    navigate("/profile")
  };


  return (
    <Box sx={{ display: 'flex', fontSize: '1rem' }}>


      <Drawer variant="permanent" open={open} sx={{ fontSize: '1rem' }}>

        <Box
          sx={{
            display: "flex", flexDirection: 'row',
          }}
        >

          <ProfileDrawer />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>

          </Box>



        </Box>


        <List>
          <ListItem disablePadding>

            <ListItemButton
              onClick={selectedIndex === 0 ? (open ? handleDrawerClose : handleDrawerOpen) : () => handleListItemClick(0)}
              sx={{
                color: selectedIndex === 0 ? 'orange' : 'inherit',
                '& .MuiSvgIcon-root': {
                  color: selectedIndex === 0 ? 'orange' : 'inherit',

                },

              }}

            >
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Ana Sayfa" />}
            </ListItemButton>
          </ListItem>

          {['Müşteriler', 'Araçlar'].map((text, index) => (
            <ListItem key={text} disablePadding >
              <ListItemButton
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(index + 1)}
                sx={{
                  color: selectedIndex === index + 1 ? 'orange' : 'inherit',
                  '& .MuiSvgIcon-root': {
                    color: selectedIndex === index + 1 ? 'orange' : 'inherit',

                  },

                }}
              >

                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 4 : 'auto',
                    justifyContent: 'center',

                  }}

                >
                  {React.createElement(icons[index % icons.length])}

                </ListItemIcon>
                {open && <ListItemText primary={text} />}

              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <Box sx={{ pt: 75, }}>

          {open && (
            <Box>

              <Box sx={{ height: '5px', width: '10px', minWidth: 'unset', bgcolor: 'inherit', }}>
                <Button
                  sx={{
                    flexGrow: 1, color: 'grey', fontSize: 'small', textTransform: 'inherit', gap: '20px', ml: '10px',
                    '&:hover': {
                      color: 'orange',
                    },
                  }}
                  onClick={profileNav}
                >
                  <PersonIcon />
                  <Typography sx={{ fontSize: '1rem' }}>Username</Typography>
                </Button>
              </Box>

              <Box >
                <Button
                  sx={{

                    color: 'grey',
                    fontSize: 'small',
                    textTransform: 'inherit',
                    height: '5px',
                    width: '10px',
                    ml: '68px',
                    minWidth: 'unset',
                    gap: '17px',
                    mt: '40px',
                    '&:hover': {
                      color: 'orange',
                    },
                  }}
                  onClick={signOutNav}
                >
                  <LogoutIcon />
                  <Typography>Çıkış Yap</Typography>
                </Button>



              </Box>
            </Box>
          )}

          {!open && ( // Render when the drawer is closed
            <Box>

              <Box
                sx={{
                  height: '5px', width: '10px', minWidth: 'unset',
                }}
              >

                <Button
                  sx={{

                    color: 'grey',
                    fontSize: 'small',
                    textTransform: 'inherit',
                    height: '5px',
                    width: '10px',
                    ml: '20px',
                    minWidth: 'unset',
                    '&:hover': {
                      color: 'orange',
                    },
                  }}
                  onClick={profileNav}
                >
                  <PersonIcon />
                </Button>
              </Box>

              <Box>
                <Button
                  sx={{
                    mt: '40px',
                    color: 'grey',
                    fontSize: 'small',
                    textTransform: 'inherit',
                    height: '5px',
                    width: '10px',
                    ml: '24px',
                    minWidth: 'unset',
                    '&:hover': {
                      color: 'orange',
                    },
                  }}
                  onClick={signOutNav}
                >
                  <LogoutIcon />
                </Button>
              </Box>


            </Box>
          )}

        </Box>


      </Drawer>


      <Outlet />



    </Box>
  );
}


