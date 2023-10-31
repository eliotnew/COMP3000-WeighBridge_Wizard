import React from "react";
import {useColorTheme} from '../../../themes/use-color-theme';
import { ListItemButton, ListItemText } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";


const OutstandingOrderButton = () =>{
    
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
          }}> <FontAwesomeIcon icon={faFolderOpen}  size='lg' style={{color: theme.palette.primary.contrastText,paddingRight:'10px'}} />
          <ListItemText primary="Manage Outstanding Orders" /> 
        </ListItemButton>
    )
}
export default OutstandingOrderButton;