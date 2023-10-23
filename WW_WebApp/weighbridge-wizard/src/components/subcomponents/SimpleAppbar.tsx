import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

/**
 * This App bar is only used when no-one is logged in. See "DashAppbar.tsx" for the other one 
 */

interface LandingPageProps {
    changePageToDashboard: () => void; // Defines the prop as a void function.
}

const SimpleAppBar: React.FC < LandingPageProps > = ({changePageToDashboard}) =>{
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
        <Typography variant="h4" component="div" sx={{ flexGrow: 1,paddingLeft:'12px' }}>
          
        </Typography>
        <Button color="inherit">About</Button>        
        <div onClick={changePageToDashboard}>
            <Button color="inherit">Sign In </Button>
            <FontAwesomeIcon icon={faRightToBracket} beatFade size="lg" />
        </div>        
      </Toolbar>
    </AppBar>
  );
};

export default SimpleAppBar;
