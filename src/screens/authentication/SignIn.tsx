import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton'; // Import IconButton
import InputAdornment from '@mui/material/InputAdornment'; // Import InputAdornment
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Visibility from '@mui/icons-material/Visibility'; // Import visibility and visibilityOff icons
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import welcome from "../../images/illustrations/Door_iconSvg.co.svg"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { login } from '../../redux/slices/authJwt';
import { useEffect, useState } from 'react';

export default function SignIn() {
  const dispatch = useDispatch<any>();
  const { user } = useSelector(
    (state: RootState) => state.user
  );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin();
    dispatch(login(email, password));
  };

  const handleLogin = () => {
    dispatch(login(email, password));
    handleNavHome();
  };

  const navigate = useNavigate();

  const handleNavHome = () => {
    navigate("/");
  };

  const handleNavRegisterNav = () => {
    navigate("/register");
  };

  const handleNavForgotPass = () => {
    navigate("/reset-password")
  }

  useEffect(() => {
    dispatch(login(email, password));
  }, [dispatch]);

  return (
    <Box sx={{ display: 'flex', width: "100%", height: "100vh", gap: "2rem" }} >
      <Box sx={{ width: "25%", display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "1rem", boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", ml: 5, mt: 2, mb: 2 }}>
        <Typography fontSize={50} fontStyle={"italic"} sx={{ color: '#FF5500', display: 'flex', alignText: 'center', justifyContent: 'center' }}>
          Logo
        </Typography>
        <Typography fontSize={30} fontStyle={"bold"} sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
          Hoş Geldiniz !
        </Typography>
        <img src={welcome} alt="Welcome Image" />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center", width: "70%" }}>
        <Typography component="h1" variant="h5">
          Giriş Yapın
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1, borderRadius: 25 }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-posta"
            name="email"
            value={email}
            autoFocus
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
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
            required
            name="password"
            label="Şifre"
            type={showPassword ? 'text' : 'password'}
            value={password}
            id="password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleTogglePasswordVisibility}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
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

          <Box sx={{ my: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#FF5500' }}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" sx={{ '&.Mui-checked': { color: '#FF5500' } }} />}
              label="Beni Hatırla"
            />
            <Button
              onClick={handleNavForgotPass}
              sx={{ textTransform: 'none', color: '#FF5500', '&:hover': { textDecoration: 'underline', bgcolor: 'transparent' } }}
            >
              Şifreni mi Unuttun ?
            </Button>

          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3, mb: 2, backgroundColor: "#FF5500", ':hover': { bgcolor: "#ea4e00" },
            }}
            onClick={handleLogin}
          >
            Giriş
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{
              mt: 3, mb: 2, backgroundColor: "#FF5500", ':hover': { bgcolor: "#ea4e00" },
            }}
            onClick={handleNavRegisterNav}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box >
  );
}
