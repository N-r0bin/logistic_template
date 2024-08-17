import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import welcome from "../../images/illustrations/Door_iconSvg.co.svg"
import { useNavigate } from "react-router-dom";

export default function Register() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/")
  }
  return (
    <Box sx={{ display: 'flex', width: "100%", height: "100vh", gap: "2rem", }} >
      <Box
        sx={{ width: "25%", display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "1rem", boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", ml: 5, mt: 2, mb: 2 }}>

        <Typography fontSize={50} fontStyle={"italic"} sx={{ color: '#FF5500', display: 'flex', alignText: 'center', justifyContent: 'center' }}>
          Logo
        </Typography>
        <Typography
          fontSize={30}
          fontStyle={"bold"}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}
        >
          Hoş Geldiniz !
        </Typography>




        <img src={welcome} alt="welcome illustration" />

      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: "center",
          width: "70%"
        }}
      >

        <Typography component="h1" variant="h5" >
          Giriş Yapın
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, borderRadius: 25 }}>


          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="name"
            type="text"

            autoComplete="name"
            autoFocus
            variant="outlined"
            sx={{
              '& label.Mui-focused': {
                color: "#FF5500",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#FF5500",
                },
              },
            }}
          />


          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-posta"
            name="email"
            autoComplete="email"
            autoFocus
            variant="outlined"
            sx={{
              '& label.Mui-focused': {
                color: "#FF5500",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#FF5500",
                },
              },
            }}
          />

          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Şifre"
            type="password"
            id="password"
            autoComplete="current-password"
            variant="outlined"

            sx={{
              '& label.Mui-focused': {
                color: "#FF5500",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#FF5500",
                },
              },
            }}

          />


          <Box sx={{
            my: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#FF5500'
          }}>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" sx={{
                '&.Mui-checked': {
                  color: '#FF5500',
                },
              }} />}
              label="Beni Hatırla"
            />

          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3, mb: 2, backgroundColor: "#FF5500", ':hover': {
                bgcolor: "#ea4e00"
              },
            }}
            onClick={handleClick}
          >
            Giriş
          </Button>
        </Box>
      </Box>

    </Box>

  );
}