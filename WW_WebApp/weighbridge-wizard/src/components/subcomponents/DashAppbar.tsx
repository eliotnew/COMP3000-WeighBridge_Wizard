import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
/**
 * This Appbar is only for use when the user is logged in
 * And is working. It should only be used for bare minimum functionality 
 * as the user's worflow will come from the side bar.
 */
interface DashboardProps2 {
    logout: () => void; // Defines the prop as a void function.
    
}
const DashAppBar: React.FC < DashboardProps2 > = ({logout}) =>{
  return (
    <AppBar position="static">       
      <Toolbar>
      <FontAwesomeIcon icon={faHatWizard} size="2xl" flip='horizontal' style={{color: "#fdff85",}} />
      <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ paddingLeft:'10px', display: { xs: 'none', sm: 'block' } }}
          >
            WeighBridge Wizard
        </Typography>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1,paddingLeft:'12px' }}/>        
        <div onClick={logout}>
            <Button color="inherit">Sign Out </Button>                      
            <FontAwesomeIcon icon={faRightFromBracket} />
        </div>        
      </Toolbar>
    </AppBar>
  );
};

export default DashAppBar;
