import React from "react";
import {useColorTheme} from '../../../themes/use-color-theme';
import { ListItemButton, ListItemText } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckArrowRight } from "@fortawesome/free-solid-svg-icons";

const OutButton = () =>{
    const {theme} = useColorTheme();

    return(

        <ListItemButton
        sx={{
            '&:hover': {            
              color: theme.palette.secondary.contrastText,
              transform: 'scale(1.1)',
              transition: 'transform 0.35s'
            },
          }}
         ><FontAwesomeIcon icon={faTruckArrowRight}  size='lg' flip="horizontal" style={{color: theme.palette.primary.contrastText,paddingLeft:'10px'}}/>
          <ListItemText primary="Outgoing" />
        </ListItemButton>
    )

}
export default OutButton;