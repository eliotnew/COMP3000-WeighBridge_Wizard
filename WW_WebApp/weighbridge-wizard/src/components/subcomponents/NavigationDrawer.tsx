import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@emotion/react';

const NavigationDrawer = () => {
    const drawerWidth = 200; // Set the width of the drawer (adjust as needed)
    

    return (
      <Drawer
        variant="permanent"
        open
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
           
            position: 'relative',
          },
        }}
      >
        <Toolbar /> {/* This provides space for the app bar */}
        <List>
          <ListItem button>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
          {/* Add more items as needed */}
        </List>
      </Drawer>
  );
};

export default NavigationDrawer;
