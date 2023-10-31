import React from "react";
import {useColorTheme} from '../../../themes/use-color-theme';
import { ListItemButton, ListItemText } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckArrowRight } from "@fortawesome/free-solid-svg-icons";

// interface InButtonProps{
//     InButtHover : boolean;
//     InButtMouseOver: () => void;
//     InButtMouseOff: () => void;
    
// }
//
//const InButton : React.FC <InButtonProps> = ({InButtHover}) =>{
const InButton = () =>{

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
        onClick={() => {
          // Handle button click
        }}
      >
        <FontAwesomeIcon icon={faTruckArrowRight} size='lg' style={{ color: theme.palette.primary.contrastText, paddingRight: '10px' }} />
        <ListItemText primary="Incoming" />
      </ListItemButton>
      
      
    

    
     )   

}
export default InButton;