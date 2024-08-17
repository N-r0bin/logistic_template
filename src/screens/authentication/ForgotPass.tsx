import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';


const ForgotPass: React.FC = () => {

  const buttonStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    outline: '0px',
    border: '0px',
    margin: '0px',
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    appearance: 'none',
    textDecoration: 'none',
    fontFamily: '"Be Vietnam", sans-serif',
    fontWeight: 700,
    fontSize: '0.9375rem',
    lineHeight: 1.71429,
    textTransform: 'inherit',
    minWidth: '64px',
    padding: '8px 22px',
    borderRadius: '8px',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundColor: '#FF5402',
    width: '100%',
    boxShadow: 'rgba(255, 84, 2, 0.24) 0px 8px 16px 0px',
    height: '48px',
    mb: 1,
    mt: 2,
    '&:hover': { backgroundColor: '#ef4b00' }
  };

  const secondButton = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    margin: '8px 0px 0px',
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    appearance: 'none',
    textDecoration: 'none',
    fontFamily: '"Be Vietnam", sans-serif',
    fontWeight: 700,
    fontSize: '0.9375rem',
    lineHeight: 1.71429,
    textTransform: 'inherit',
    minWidth: '64px',
    padding: '8px 11px',
    borderRadius: '8px',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    color: '#FF5500',
    width: '100%',
    height: '48px',
    '&:hover': { backgroundColor: '#fce0d4' }
  };

  const textfieldStyle = {
    '& .MuiOutlinedInput-root': {
      width: '100%',
      borderRadius: '8px',
      '&.Mui-focused fieldset': {
        borderColor: '#FF5500',
        labelColor: '#FF5500',
      },
    },

    '& label.Mui-focused': {
      color: '#FF5500',
    },
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>

      <Box sx={{ position: 'absolute', top: '1rem', left: '1rem' }}>
        <Typography fontSize={50} fontStyle={"italic"} sx={{ color: '#FF5500', display: 'flex', alignText: 'center', justifyContent: 'center' }}>
          Logo
        </Typography>
      </Box>


      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center', flexGrow: 1 }}>

        <Typography variant="h4" gutterBottom>
          Parolanızı mı unuttunuz?
        </Typography>


        <Box sx={{ width: '480px', textAlign: 'left' }}>

          <Typography variant="body1" gutterBottom color="#637381">
            Lütfen hesabınızla ilişkili e-posta adresini girin ve şifrenizi sıfırlamak için size bir e-posta göndereceğiz.
          </Typography>

          <TextField
            fullWidth
            id="email"
            label="E-posta Adresi"
            variant="outlined"
            margin="normal"
            sx={textfieldStyle}
          />

          <Button variant="contained" color="primary" fullWidth sx={buttonStyles}>
            Parolayı Sıfırla
          </Button>

          <Button fullWidth sx={secondButton}>
            Geri
          </Button>

        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPass;
