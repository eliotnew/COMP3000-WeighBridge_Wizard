import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

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
        
        <div onClick={logout}>
            <Button color="inherit">Sign Out </Button>
            <FontAwesomeIcon icon={faRightToBracket} beatFade size="lg" />
        </div>
        
      </Toolbar>
    </AppBar>
  );
};

export default DashAppBar;
