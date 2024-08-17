import { Avatar, Box, Button, Divider, IconButton, Popover, Typography } from '@mui/material'
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: 'grey', // Default border color here
        },
      },
    },
  },
});
const ProfileDrawer = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'avatar-popover' : undefined;

  const navigate = useNavigate();
  const signOutNav = () => {
    navigate("/")
  }



  return (
    <Box sx={{ textAlign: "left", pt: 2 }}>
      <Button onClick={handleClick}>
        <Avatar sx={{ display: "flex", justifyContent: "center" }} />
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography alignItems={'center'} p={1}>staff@email.com</Typography>
        <Divider />

        <Box p={2}
          sx={{
            borderRadius: 5,
          }}
        >

          <Box display="flex" flexDirection="column" gap={1}>
            <Box display="flex" alignItems="center">
              <IconButton>
                <HomeIcon />
                <Typography sx={{ ml: 1 }}>Anasayfa</Typography>
              </IconButton>
            </Box>
            <Box display="flex" alignItems="center">
              <IconButton >

                <PersonIcon />
                <Typography sx={{ ml: 1 }}>Profile</Typography>
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Divider />
        <ThemeProvider theme={theme}>
          <Box sx={{ p: 2 }}>
            <Box
              display="flex" alignItems="center" flexDirection="column" gap={1} borderRadius={10}>
              <Button variant="outlined"
                sx={{
                  color: 'grey', borderColor: 'grey',
                  '&:hover': {
                    backgroundColor: 'rgba(25, 118, 210, 0.04)',
                    borderColor: '#9e9e9e',
                  },
                }}
                onClick={signOutNav}
              >
                Çıkış Yap
              </Button>
            </Box>
          </Box>
        </ThemeProvider>

      </Popover>



    </Box>
  );
};

export default ProfileDrawer