import React, { useState } from 'react';
import SimpleAppBar from "./subcomponents/SimpleAppbar";
import { useColorTheme } from '../themes/use-color-theme';
import ParallaxComponent from "./ParallaxComponent";

// This interface enables props to comply with typescript's strict typing rules!
interface LandingPageProps {
    changePageToDashboard: () => void; // Defines the prop as a void function.
}

//<LandingAppBar/>
export const LandingPage: React.FC < LandingPageProps > = ({changePageToDashboard}) =>{
    const { theme } = useColorTheme(); // Get the theme from your custom hook
 
        return(
        <div  style={{ backgroundColor: theme.palette.background.default, minHeight:'100vh',width:'100%' }}>  
            <SimpleAppBar changePageToDashboard={changePageToDashboard}/>
            <ParallaxComponent></ParallaxComponent>
        </div>
    );
}
export default LandingPage;
