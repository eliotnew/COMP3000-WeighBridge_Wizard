import React from "react";
import DashAppBar from "./subcomponents/DashAppbar";
import NavigationDrawer from "./subcomponents/NavigationDrawer";
import { useColorTheme } from '../themes/use-color-theme';
import BottomAppbar from "./subcomponents/BottomAppbar";
import { Box, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";

interface DashboardProps {
    logout: () => void; // Defines the prop as a void function.
    prop2: () => void;
}

export const Dashboard: React.FC <DashboardProps> = ({logout,prop2}) => {    


    const {theme} = useColorTheme();
    return (
        <div style={{ backgroundColor: theme.palette.background.default, minHeight:'100vh',width:'100%' }}>
            <DashAppBar logout={logout} />         

                <Grid container>
                    <Grid item xs={2}>
                        <NavigationDrawer />
                    </Grid>

                    {/* Box to the Right */}
                    <Grid item xs={10}>
                        <Box p={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor:"white", margin:'35px',minHeight:'77.5vh',textAlign:"center"}}>                     
                            
                            
                            <h1> <FontAwesomeIcon icon={faHandPointLeft}  beatFade style={{color:theme.palette.primary.contrastText, paddingRight:'20px'}} />Begin work by selecting an action from the 'Actions Menu'</h1>
                            
                        </Box>
                    </Grid>
                </Grid>   
            
            
            <BottomAppbar></BottomAppbar>
            

        </div>

    )
}
export default Dashboard;
