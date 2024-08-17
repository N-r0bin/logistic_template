import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import VehiclePages from './VehiclePages'

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}
const tabButtonStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent',
  borderRadius: '8px 8px 0px 0px',
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  appearance: 'none',
  textDecoration: 'none',
  fontFamily: '"Be Vietnam", sans-serif',
  fontSize: '0.875rem',
  lineHeight: 1.71429,
  textTransform: 'inherit',
  minWidth: '70px',
  position: 'relative',
  minHeight: '48px',
  flex: '1 1 0px',
  overflow: 'hidden',
  whiteSpace: 'normal',
  textAlign: 'center',
  color: '#637381',
  padding: 0,
  fontWeight: 600,
  '&.Mui-selected': {
    color: 'white',
    backgroundColor: '#FF5500',
  }
};


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function VehicleTab() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '80%', height: "100%", mt: 10, ml: 5 }}>
      <AppBar position="static"
        sx={{
          borderRadius: '5px',
          backgroundColor: "transparent",
        }}

      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#FF5500',
            },
          }}
        >
          <Tab label="Dorseler" {...a11yProps(0)} sx={tabButtonStyles} />
          <Tab label="Özmal Arçlar" {...a11yProps(1)} sx={tabButtonStyles} />
          <Tab label="Yabancı Araçlar" {...a11yProps(2)} sx={tabButtonStyles} />
        </Tabs>
      </AppBar>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <VehiclePages type="Dorseler" />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <VehiclePages type="Özmal Arçlar" />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <VehiclePages type="Yabancı Araçlar" />
        </TabPanel>
      </SwipeableViews>


    </Box>
  );
}