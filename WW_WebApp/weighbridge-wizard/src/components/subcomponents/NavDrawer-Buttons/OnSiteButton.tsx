import React from "react";
import {useColorTheme} from '../../../themes/use-color-theme';
import { ListItemButton, ListItemText } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons";

const OnSiteButton = () =>{
    const {theme} = useColorTheme();

    return(
        <ListItemButton sx={{
            '&:hover': {            
              color: theme.palette.secondary.contrastText,
              transform: 'scale(1.1)',
              transition: 'transform 0.35s'
            },
          }}
          onClick={() => {
            // Handle button click
          }}
        > <FontAwesomeIcon icon={faHelmetSafety}  size='lg' style={{color: theme.palette.primary.contrastText,paddingRight:'10px'}} />
          <ListItemText primary="View Onsite" />
        </ListItemButton>
    )
}
export default OnSiteButton;