import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

interface LandingPageProps {
    changePageToDashboard: () => void; // Defines the prop as a void function.
}

const SimpleAppBar: React.FC < LandingPageProps > = ({changePageToDashboard}) =>{
  return (
    <AppBar position="static">       
      <Toolbar>
      <FontAwesomeIcon icon={faHatWizard} size="2xl" style={{color: "#fdff85",}} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          WeighBridge Wizard
        </Typography>
        <Button color="inherit">About</Button>
        <Button color="inherit" onClick={changePageToDashboard}>Sign In <FontAwesomeIcon icon={faRightToBracket} beatFade /></Button>        
      </Toolbar>
    </AppBar>
  );
};

export default SimpleAppBar;
