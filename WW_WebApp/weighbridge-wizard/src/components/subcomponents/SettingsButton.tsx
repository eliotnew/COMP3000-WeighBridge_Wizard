import React from "react";
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { useColorTheme } from '../../themes/use-color-theme';

/**
 * SOLID PRINCIPLE seperation of concerns, one single use design pattern.
 * Provides an interactive, reausable button.
 */

interface SettingsButtonProps {
    settingsWhenHovering: () => void; // Defines the prop as a void function.
    settingsNoLongerHovering: () => void;
    settingsHover:boolean;
}

const SettingsButton: React.FC < SettingsButtonProps > = ({settingsWhenHovering,settingsNoLongerHovering,settingsHover}) =>{
    const { theme } = useColorTheme();

    return(
        <>
            <Button sx={{color: theme.palette.primary.contrastText, fontWeight: 1000,'&:hover': {
          backgroundColor: theme.palette.primary.contrastText, color: theme.palette.primary.main, transform: "scale(1.1)",transition: 'transform 0.35s', // Change background color on hover
        }, }} onMouseEnter={settingsWhenHovering} onMouseLeave={settingsNoLongerHovering}  >
                Settings{settingsHover ? (
                <FontAwesomeIcon icon={faGear} style={{ marginLeft: '6px' }} size='lg' spin />
                ) : (
                    <FontAwesomeIcon icon={faGear} style={{ marginLeft: '6px' }} size='lg' />  )}
            </Button>          
        </>
       
    );
}
export default SettingsButton;