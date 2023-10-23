import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
/**
 * This Appbar is only for use when the user is logged in
 * And is working. It should only be used for bare minimum functionality 
 * as the user's worflow will come from the side bar.
 */
interface DashboardProps2 {
    logout: () => void; // Defines the prop as a void function.
    
}

const DashAppBar: React.FC < DashboardProps2 > = ({logout}) =>{

    const [settingsHover,setSettingsHover] = useState(false);
    const [signOutHover,setSignOutHover] = useState(false);

    //Sets states for hovering over my settings button , causing the icon to animate
    const settingsHovering = () =>{setSettingsHover(true)};
    const settingsNoLongerHovering = () =>{setSettingsHover(false)};

    //Sets animation state on the log out button
    



  return (
    <AppBar position="static">       
      <Toolbar>
      <FontAwesomeIcon icon={faHatWizard} size="2xl" flip='horizontal' style={{color: "inherit",}} />
      <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ paddingLeft:'10px', display: { xs: 'none', sm: 'block' } }}
           
          >
            Dashboard
        </Typography>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1,paddingLeft:'12px' }}/>
       
        <Button  onMouseEnter={settingsHovering} onMouseLeave={settingsNoLongerHovering} color="inherit" >
            Settings{settingsHover ? (
             <FontAwesomeIcon icon={faGear} style={{ marginLeft: '6px' }} size='lg' spin />
            ) : (
                <FontAwesomeIcon icon={faGear} style={{ marginLeft: '6px' }} size='lg' />  )}
        </Button>            
        <Typography variant="h6" component="span" style={{ margin: '0 8px',marginBottom: '5px' }}>|</Typography>
        <Button onClick={logout} color="inherit">Sign Out<FontAwesomeIcon icon={faRightFromBracket} style={{ marginLeft: '6px' }} /></Button> 
      </Toolbar>
    </AppBar>
  );
};

export default DashAppBar;
