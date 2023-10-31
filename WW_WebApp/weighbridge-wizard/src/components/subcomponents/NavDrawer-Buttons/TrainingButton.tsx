import {useColorTheme} from '../../../themes/use-color-theme';
import { ListItemButton, ListItemText } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const TrainingButton = () =>{
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
          }}> <FontAwesomeIcon icon={faGraduationCap}  size='lg' style={{color: theme.palette.primary.contrastText,paddingRight:'10px'}}/>
          <ListItemText primary="Training" />
        </ListItemButton>        


    )
}
export default TrainingButton;