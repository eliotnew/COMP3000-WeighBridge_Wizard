import React from 'react';
import { AppBar, Toolbar, Typography, Button, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useColorTheme } from '../../themes/use-color-theme';

/**
 * This App bar is only used when no-one is logged in. See "DashAppbar.tsx" for the other one 
 */

interface LandingPageProps {
    changePageToDashboard: () => void; // Defines the prop as a void function.
}

const SimpleAppBar: React.FC < LandingPageProps > = ({changePageToDashboard}) =>{

  const { theme } = useColorTheme();
  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main,
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', }}>       
      <Toolbar>
      <FontAwesomeIcon icon={faHatWizard} size="2xl" flip='horizontal' style={{color: theme.palette.text.primary}} />
      <Typography className='WizardFont'
            variant="h4"
            noWrap
            component="div"
            
            sx={{ fontFamily: 'sans-serif',paddingLeft:'10px', display: { xs: 'none', sm: 'block' } }}
            style={{
                fontFamily: 'Bona Nova',
                color: theme.palette.primary.contrastText,
                fontWeight: 1000
                }}
          >
            WeighBridge Wizard
          </Typography>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1,paddingLeft:'12px' }}>
          
        </Typography>
        <Button  sx={{color: theme.palette.primary.contrastText, fontWeight: 1000, '&:hover': {
          backgroundColor: theme.palette.primary.contrastText, color: theme.palette.primary.main, transform: "scale(1.1)",transition: 'transform 0.35s' // Change background colour on hover
        },}} color="inherit">About</Button>
        <Typography variant="h6" component="span" style={{ margin: '0 8px',marginBottom: '5px',color: theme.palette.primary.contrastText, fontWeight: 1000 }}>|</Typography>
        <Button sx={{color: theme.palette.primary.contrastText, fontWeight: 1000,'&:hover': {
          backgroundColor: theme.palette.primary.contrastText, color: theme.palette.primary.main, transform: "scale(1.1)",transition: 'transform 0.35s' // Change background colour on hover
        },}} onClick={changePageToDashboard} color="inherit">Sign In <FontAwesomeIcon icon={faRightToBracket} beatFade  style={{ marginLeft: '6px' }} /></Button>           
             
      </Toolbar>
    </AppBar>
  );
};

export default SimpleAppBar;
