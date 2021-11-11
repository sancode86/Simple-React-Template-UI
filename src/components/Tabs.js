import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '1000px', margin:'auto' }} className="tabs">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      Nibh cras pulvinar mattis nunc. Quis commodo odio aenean sed adipiscing diam. Maecenas accumsan lacus vel facilisis volutpat est velit. Viverra nibh cras pulvinar mattis nunc sed blandit. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Quisque sagittis purus sit amet. Id donec ultrices tincidunt arcu non sodales neque sodales.
      Enim sed faucibus turpis in eu. Massa vitae tortor condimentum lacinia quis vel eros donec. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Sed arcu non odio euismod lacinia at. Sed blandit libero volutpat sed cras ornare arcu dui. Vel pretium lectus quam id leo in.
      </TabPanel>
      <TabPanel value={value} index={1}>
      Enim sed faucibus turpis in eu. Massa vitae tortor condimentum lacinia quis vel eros donec. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Sed arcu non odio euismod lacinia at. Sed blandit libero volutpat sed cras ornare arcu dui. Vel pretium lectus quam id leo in.
      Nibh cras pulvinar mattis nunc. Quis commodo odio aenean sed adipiscing diam. Maecenas accumsan lacus vel facilisis volutpat est velit. Viverra nibh cras pulvinar mattis nunc sed blandit. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Quisque sagittis purus sit amet. Id donec ultrices tincidunt arcu non sodales neque sodales.
      </TabPanel>
      <TabPanel value={value} index={2}>
      Orci eu lobortis elementum nibh. In est ante in nibh mauris cursus mattis molestie a. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Dui ut ornare lectus sit amet.
      </TabPanel>
    </Box>
  );
}
