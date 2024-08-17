import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProfileInfo from './ProfileInfo';
import ChangePassword from './ChangePassword';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const tabStyle = {
  root: {
    textTransform: 'inherit',
    textIndent: 'inherit',
    '&.Mui-selected': {
      color: '#FF5500',
    },
  },
};

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, width: '100%', height: "100%" }}>
          {children}
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProfileTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height: "100%", position: 'center', mt: 10, ml: 5 }}>

      <Box sx={{ borderBottom: 1, borderColor: 'transparent', ml: 3 }}>
        <Tabs value={value} onChange={handleChange} aria-label="profile tabs"
          TabIndicatorProps={{
            sx: { backgroundColor: "#FF5500" }
          }}
          sx={{
            textTransform: 'inherit',
            textIndent: 'inherit',

          }}>
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountBoxIcon sx={{ mr: 1 }} />
                Bilgilerim
              </Box>
            }
            sx={tabStyle.root}
          />
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <VpnKeyRoundedIcon sx={{ mr: 1 }} />
                Şifre Değiştir
              </Box>
            }
            {...a11yProps(1)}
            sx={tabStyle.root}
          />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>

        <ProfileInfo />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>

        <ChangePassword />
      </CustomTabPanel>
    </Box>
  );
}