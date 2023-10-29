import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@emotion/react';
import { useColorTheme } from '../../themes/use-color-theme';
import { Divider, ListSubheader, Typography} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faFolderClosed, faFolderOpen, faFolderPlus, faGraduationCap, faHelmetSafety, faMapLocationDot, faTruckMoving } from '@fortawesome/free-solid-svg-icons';

const NavigationDrawer = () => {
    const drawerWidth = 200; 
    const {theme} = useColorTheme();

    return (
      <Drawer
        variant="permanent"
        open
        sx={{
          width: drawerWidth,
          height: 'calc(100% - 300px)',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,                     
            position: 'relative',
            backgroundColor: theme.palette.secondary.main,
            color:theme.palette.secondary.contrastText,
            borderRadius: '12px', // Adjust the border-radius as per your preference
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
            marginLeft: '3px',
            
            
          },
        }}
      ><div style={{ overflowY: 'auto', height: '100%',}}>
        <Toolbar><h2 style={{}}>Actions</h2></Toolbar>
        
        <List>
          <Typography variant='h6' sx={{textAlign: 'left',fontWeight:'bold',}}>Truck Operations</Typography>
          <Divider/>
          
        <ListItem button ><FontAwesomeIcon icon={faTruckMoving}  size='lg' style={{color: theme.palette.primary.contrastText,paddingRight:'10px'}} />
          <ListItemText primary="Incoming" />
        </ListItem>
        <ListItem button ><FontAwesomeIcon icon={faTruckMoving}  size='lg' flip="horizontal" style={{color: theme.palette.primary.contrastText,paddingRight:'10px'}}/>
          <ListItemText primary="Outgoing" />
        </ListItem>
        <ListItem button><FontAwesomeIcon icon={faHelmetSafety}  size='lg' style={{color: theme.palette.primary.contrastText,paddingRight:'10px'}} />
          <ListItemText primary="View Onsite" />
        </ListItem>

        <Typography  variant='h6' sx={{textAlign: 'left',fontWeight:'bold',}}>Manage Orders</Typography>
        <Divider/>
        <ListItem button> <FontAwesomeIcon icon={faFolderPlus}  size='lg' style={{color: theme.palette.primary.contrastText,paddingRight:'10px'}}/>
          <ListItemText primary="Create New Order" />
        </ListItem><ListItem button> <FontAwesomeIcon icon={faFolderOpen}  size='lg' style={{color: theme.palette.primary.contrastText,paddingRight:'10px'}} />
          <ListItemText primary="Manage Outstanding Orders" /> 
        </ListItem><ListItem button> <FontAwesomeIcon icon={faFolderClosed}  size='lg' style={{color: theme.palette.primary.contrastText,paddingRight:'10px'}}/>
          <ListItemText primary="View Closed Orders" /> 
        </ListItem>

        <Typography  variant='h6' sx={{textAlign: 'left',fontWeight:'bold',}}>Utilities</Typography>
        <Divider/>
        <ListItem button> <FontAwesomeIcon icon={faCalendarDays}  size='lg' style={{color: theme.palette.primary.contrastText,paddingRight:'10px'}}/>
          <ListItemText primary="Calendar" />
        </ListItem><ListItem button> <FontAwesomeIcon icon={faMapLocationDot}  size='lg' style={{color: theme.palette.primary.contrastText,paddingRight:'10px'}}/>
          <ListItemText primary="Map" />
        </ListItem>

        <Typography  variant='h6' sx={{textAlign: 'left',fontWeight:'bold',}}>Help</Typography>
        <Divider/>
        <ListItem button> <FontAwesomeIcon icon={faGraduationCap}  size='lg' style={{color: theme.palette.primary.contrastText,paddingRight:'10px'}}/>
          <ListItemText primary="Training" />
        </ListItem>        

      </List>
      </div>
        
      </Drawer>
  );
};

export default NavigationDrawer;
