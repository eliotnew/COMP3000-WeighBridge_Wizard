import React from "react";
import LandingAppBar from "./subcomponents/LandingAppBar";
// This interface enables props to comply with typescript's strict typing rules!
interface LandingPageProps {
    changePageToDashboard: () => void; // Defines the prop as a void function.
}

//<LandingAppBar/>
export const LandingPage: React.FC < LandingPageProps > = ({changePageToDashboard}) =>{
        return(
        <>  
            <LandingAppBar/>
            <h1>LANDING PAGE</h1>
            <p>This is the landing page.</p>
            <button onClick={changePageToDashboard}>Simulate log in successful</button>
        </>
    );
}
export default LandingPage;
