import React from "react";
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

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

    return(
        <Button onClick={logout} onMouseEnter={signOutMouseOver} onMouseLeave={signOutMouseGone} color="inherit">Sign Out{signOutHover?(
            <FontAwesomeIcon icon={faRightFromBracket} beatFade style={{ marginLeft: '6px' }} />):(
                <FontAwesomeIcon icon={faRightFromBracket}  style={{ marginLeft: '6px' }} />
            )}
        </Button> 
    )
}
