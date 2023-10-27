import React from "react";
import SimpleAppBar from "./subcomponents/SimpleAppbar";
import { useColorTheme } from '../themes/use-color-theme';

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
                    
            <h1 style={{color: theme.palette.primary.contrastText, fontWeight: 600 }}>LANDING PAGE</h1>
            <p style={{color: theme.palette.text.primary}}>This is the landing page.</p>         

            <div className="card">
           <span className="WizardFont">
               This is with Font Link. We are linking the fonts from the Google Fonts.
           </span>
            </div>   
        </div>
    );
}
export default LandingPage;
