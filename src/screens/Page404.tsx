import { Box, Button, Container, Typography, styled } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


const RootStyle = styled("div")(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: { padding: theme.spacing(5, 5, 0) }
}));



export default function Page404() {
  return (
    <RootStyle title="404 Sayfa Bulunamadı">
      <HeaderStyle>
        <RouterLink to="/">
          <Typography fontSize={50} fontStyle={"italic"} sx={{ color: '#FF5500', display: 'flex', alignText: 'center', justifyContent: 'center' }}>
            Logo
          </Typography>
        </RouterLink>
      </HeaderStyle>

      <Container>
        <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom>
            Üzgünüm, sayfa bulunamadı!
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Üzgünüz, aradığınız sayfayı bulamadık. Belki URL'yi yanlış mı
            yazdınız? Doğru yazıp yazmadığınızı kontrol ettiğinizden emin
            olun.
          </Typography>



          <Button
            to="/"
            size="large"
            variant="contained"
            component={RouterLink}
          >
            AnaSayfa
          </Button>
        </Box>
      </Container>
    </RootStyle>
  );
}
