import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@emotion/react';
import { useColorTheme } from '../../themes/use-color-theme';
import { ListSubheader} from '@mui/material';

const NavigationDrawer = () => {
    const drawerWidth = 200; 
    const {theme} = useColorTheme();

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
            backgroundColor: theme.palette.secondary.main,
            color:theme.palette.secondary.contrastText,
            borderRadius: '12px', // Adjust the border-radius as per your preference
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
            marginLeft: '3px',
            marginBottom: '45px',
            
          },
        }}
      ><div style={{ overflowY: 'auto', height: '100%' }}>
        <Toolbar><h3 style={{}}>Actions</h3></Toolbar>
        
        <List>
        <ListSubheader >Truck Operations</ListSubheader>
        <ListItem button >
          <ListItemText primary="Incoming" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Outgoing" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="View Onsite" />
        </ListItem>

        <ListSubheader>Manage Orders</ListSubheader>
        <ListItem button>
          <ListItemText primary="Create New Order" />
        </ListItem><ListItem button>
          <ListItemText primary="Manage Outstanding Orders" />
        </ListItem><ListItem button>
          <ListItemText primary="View Closed Orders" />
        </ListItem>

        <ListSubheader>Utilities</ListSubheader>
        <ListItem button>
          <ListItemText primary="Calendar" />
        </ListItem><ListItem button>
          <ListItemText primary="Map" />
        </ListItem>

        <ListSubheader>Help</ListSubheader>
        <ListItem button>
          <ListItemText primary="Training" />
        </ListItem>        

      </List>
      </div>
        
      </Drawer>
  );
};

export default NavigationDrawer;
