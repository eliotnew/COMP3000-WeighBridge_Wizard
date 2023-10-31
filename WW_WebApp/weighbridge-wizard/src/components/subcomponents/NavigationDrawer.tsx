import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { useColorTheme } from '../../themes/use-color-theme';
import { Divider, ListItemButton, ListSubheader, Typography} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faFolderClosed, faFolderOpen, faFolderPlus, faGraduationCap, faHelmetSafety, faMapLocationDot, faTruckArrowRight, faTruckMoving } from '@fortawesome/free-solid-svg-icons';
import InButton from './NavDrawer-Buttons/InButton'; 
import OutButton from './NavDrawer-Buttons/OutButton';
import OnSiteButton from './NavDrawer-Buttons/OnSiteButton';
import CreateNewOrderButton from './NavDrawer-Buttons/CreateNewOrderButton';
import OutstandingOrderButton from './NavDrawer-Buttons/OutstandingOrderButton';

const NavigationDrawer = () => {
    const drawerWidth = 300; //275
    const {theme} = useColorTheme();

    return (
      <Drawer
         
        variant="permanent"
        open
        sx={{
          width: drawerWidth,
          height: '86.55vh',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,                     
            position: 'relative',
            backgroundColor: theme.palette.secondary.main,
            color:theme.palette.secondary.contrastText,
            borderRadius: '24px', 
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
            marginLeft: '3px',          
            
          },
        }}
      ><div style={{ overflowY: 'auto', height: '100%', overflowX:'hidden'}}>
        <Toolbar><h2 style={{}}>Actions</h2></Toolbar>
        
        <List>
          <Typography variant='h6' sx={{textAlign: 'left',fontWeight:'bold',}}>Truck Operations</Typography>
          <Divider/>
          
        <InButton></InButton>
        <OutButton></OutButton> 
        <OnSiteButton></OnSiteButton>      

        <Typography  variant='h6' sx={{textAlign: 'left',fontWeight:'bold',}}>Manage Orders</Typography>
        <Divider/>

        <CreateNewOrderButton></CreateNewOrderButton>
       
        <OutstandingOrderButton></OutstandingOrderButton>
        <ListItemButton> <FontAwesomeIcon icon={faFolderOpen}  size='lg' style={{color: theme.palette.primary.contrastText,paddingRight:'10px'}} />
          <ListItemText primary="Manage Outstanding Orders" /> 
        </ListItemButton>
        <ListItemButton> <FontAwesomeIcon icon={faFolderClosed}  size='lg' style={{color: theme.palette.primary.contrastText,paddingRight:'10px'}}/>
          <ListItemText primary="View Closed Orders" /> 
        </ListItemButton>

        <Typography  variant='h6' sx={{textAlign: 'left',fontWeight:'bold',}}>Utilities</Typography>
        <Divider/>
        <ListItemButton> <FontAwesomeIcon icon={faCalendarDays}  size='lg' style={{color: theme.palette.primary.contrastText,paddingRight:'10px'}}/>
          <ListItemText primary="Calendar" />
        </ListItemButton>
        <ListItemButton> <FontAwesomeIcon icon={faMapLocationDot}  size='lg' style={{color: theme.palette.primary.contrastText,paddingRight:'10px'}}/>
          <ListItemText primary="Map" />
        </ListItemButton>

        <Typography  variant='h6' sx={{textAlign: 'left',fontWeight:'bold',}}>Help</Typography>
        <Divider/>
        <ListItemButton> <FontAwesomeIcon icon={faGraduationCap}  size='lg' style={{color: theme.palette.primary.contrastText,paddingRight:'10px'}}/>
          <ListItemText primary="Training" />
        </ListItemButton>        

      </List>
      </div>
        
      </Drawer>
  );
};

export default NavigationDrawer;
