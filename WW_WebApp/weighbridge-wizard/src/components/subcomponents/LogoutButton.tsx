import React from "react";
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useColorTheme } from '../../themes/use-color-theme';

/**
 * A Functional Component that returns an interactive Lougout Button
 */

interface LogoutButtonProps{
    signOutMouseOver: () => void;
    signOutMouseGone: () => void;
    signOutHover : boolean;
    logout: () => void;
}

export const LogoutButton : React.FC <LogoutButtonProps> =({signOutMouseOver,signOutMouseGone,signOutHover,logout}) => {
    const { theme } = useColorTheme();

    return(
        <Button sx={{color: theme.palette.primary.contrastText, fontWeight: 1000 , '&:hover': {
            backgroundColor: theme.palette.primary.contrastText, color: theme.palette.primary.main, transform: "scale(1.1)",transition: 'transform 0.35s' // Change background color on hover
          },}} onClick={logout} onMouseEnter={signOutMouseOver} onMouseLeave={signOutMouseGone} color="inherit">Sign Out{signOutHover?(
            <FontAwesomeIcon icon={faRightFromBracket} beatFade style={{ marginLeft: '6px' }} />):(
                <FontAwesomeIcon icon={faRightFromBracket}  style={{ marginLeft: '6px' }} />
            )}
        </Button> 
    )
}
