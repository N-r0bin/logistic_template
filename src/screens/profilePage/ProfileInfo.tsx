import { Box, Button, TextField, Typography } from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';
import { ChangeEventHandler, useState } from 'react';

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
  width: '100%',
  animationName: 'mui-auto-fill-cancel',
  animationDuration: '10ms',

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
};

const ProfileInfo = () => {
  const [imageHovered, setImageHovered] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | ArrayBuffer | null>(null); // Define uploadedImage state

  const handleImageHover = () => {
    setImageHovered(!imageHovered);
  };

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result) {
          setUploadedImage(result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box display="flex" flexGrow={0} flexDirection="row" gap={1} width="100%" height="100%">
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
          width: '20%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 5,
          pt: 15,
          pb: 15,
        }}
      >
        <Box
          sx={{
            width: '140px',
            height: '140px',
            borderRadius: '80%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px dashed #DDDFE3',
            position: 'fixed',
            bgcolor: 'background.paper',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={() => {
            document.getElementById('fileInput')?.click();
          }}
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageHover}
        >
          <Box
            sx={{
              display: 'flex',
              width: '130px',
              height: '130px',
              borderRadius: '65%',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {!uploadedImage && (
              <Box
                sx={{

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '130px',
                  height: '130px',
                  borderRadius: '65%',
                }}
              >

                <PersonRoundedIcon sx={{
                  width: '130px',
                  height: '130px',
                  objectFit: 'cover',
                  color: 'grey',
                }} />
              </Box>
            )}

            {uploadedImage ? (
              <img
                src={uploadedImage.toString()}
                alt="Uploaded"
                style={{
                  width: '130%',
                  height: '130%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            )}




            {imageHovered && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  transform: 'translate(-15%, -15%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '130px',
                  height: '130px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  gap: 1,
                }}
              >
                <AddAPhotoRoundedIcon sx={{ color: 'white', fontSize: '15px' }} />
                <Typography variant="body2" sx={{ color: 'white', fontSize: '10px' }}>
                  Fotograf Güncelle
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>

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
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 6,
          ml: 4,

        }}
      >

        <Box sx={{ display: 'flex', gap: 2, width: '95%', pt: 2 }}>
          <TextField label="Adı" sx={textfieldStyle} />
          <TextField label="Soyadı" sx={textfieldStyle} />
        </Box>


        <Box sx={{ display: 'flex', gap: 2, width: '95%' }}>
          <TextField label="Kullanıcı" sx={textfieldStyle} />
          <TextField label="Mevcut Kod" sx={textfieldStyle} />
        </Box>


        <Box sx={{ display: 'flex', gap: 2, width: '95%' }}>
          <TextField label="Telefon" sx={textfieldStyle} />
          <TextField label="İl" select sx={textfieldStyle} />
          <TextField label="İlçe" select sx={textfieldStyle} />
        </Box>


        <Box sx={{ m: 4 }}>
          <Button
            variant="contained"
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
};

export default ProfileInfo;
