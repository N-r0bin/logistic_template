import React, { useState } from 'react';
import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility'; // Import visibility and visibilityOff icons
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const textfieldStyle = {
  font: 'inherit',
  letterSpacing: 'inherit',
  color: 'currentcolor',
  border: '0px',
  boxSizing: 'border-box',
  background: 'none',
  height: '1.4375em',
  margin: '0px',
  WebkitTapHighlightColor: 'transparent',
  display: 'block',
  width: '95%',
  animationName: 'mui-auto-fill-cancel',
  animationDuration: '10ms',
  mt: 3,
  ml: 3,
  '& .MuiOutlinedInput-root': {
    width: '100%',
    borderRadius: '8px',
    "&.Mui-focused fieldset": {
      borderColor: "#FF5500",
      labelColor: '#FF5500',
    },
  },
  '& label.Mui-focused': {
    color:"#FF5500",
  },
};

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  

  const handleBlur = (fieldName: string) => {
    console.log(fieldName);
    setTouchedFields({ ...touchedFields, [fieldName]: true });
    console.log(touchedFields);
  };

  const [showPassword, setShowPassword] = useState(false); 

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSave = () => {
    
    if (touchedFields.oldPassword && !oldPassword.trim() && !confirmPassword.trim()) {
      alert('Eski Şifre gerekli');
      return;
    }
    if (touchedFields.newPassword && newPassword.trim().length < 8) {
      alert('Yeni Şifre en az 8 karakter olmalı');
      return;
    }
    if (touchedFields.newPassword && !newPassword.trim()) {
      alert('Yeni Şifre gerekli');
      return;
    }
    if (touchedFields.confirmPassword && !confirmPassword.trim()) {
      alert('Yeni şifre tekrar gerekli');
      return;
    }

    console.log('Saving data...');
  };

  return (
    <Box display="flex" flexGrow={0} flexDirection="column" width='80%' height='100%'>
      <Box
        sx={{
          backgroundColor: 'rgb(255, 255, 255)',
          color: 'rgb(33, 43, 54)',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          backgroundImage: 'none',
          overflow: 'hidden',
          boxShadow: 'rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px',
          borderRadius: '16px',
          position: 'relative',
          zIndex: 0,
          width: '75%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 6,
          ml: 2,
        }}
      >
        <TextField
          label="Eski Şifre"
          sx={textfieldStyle}
          type={showPassword ? 'text' : 'password'} 
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          onBlur={() => handleBlur('oldPassword')}
          error={touchedFields.oldPassword && !oldPassword.trim()}
          helperText={touchedFields.oldPassword && !oldPassword.trim()? 'Eski Şifre gerekli' : ''}
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
        />

        <TextField
          label="Yeni Şifre"
          sx={textfieldStyle}
          type={showPassword ? 'text' : 'password'} 
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          onBlur={() => handleBlur('newPassword')}
          error={touchedFields.newPassword && (!newPassword.trim() || newPassword.trim().length < 8)}
          helperText={touchedFields.newPassword && !newPassword.trim()? 'Yeni Şifre gerekli': "Şifre minimum 8 karakter olmalı"}
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
        />
        
        <TextField
          label="Yeni Şifre Tekrar"
          sx={textfieldStyle}
          type={showPassword ? 'text' : 'password'} 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={() => handleBlur('confirmPassword')}
          error={touchedFields.confirmPassword && !confirmPassword.trim()}
          helperText={touchedFields.confirmPassword && !confirmPassword.trim()? 'Yeni şifre tekrar gerekli': ''}
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
        />

        <Box sx={{ m: 4 }}>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              m: 3,
              textTransform: 'inherit',
              bgcolor: '#FF5500',
              borderRadius: 2,
              fontFamily: "'Be Vietnam', sans-serif"
            }}
          >
            Kaydet
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ChangePassword;
