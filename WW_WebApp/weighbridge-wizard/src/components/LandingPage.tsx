import React from "react";

// This interface enables props to comply with typescript's strict typing rules!
interface LandingPageProps {
    changePageToDashboard: () => void; // Defines the prop as a void function.
}


export const LandingPage: React.FC < LandingPageProps > = ({changePageToDashboard}) =>{
        return(
        <>
            <h1>hello</h1>
            <p>This is the landing page.</p>
            <button onClick={changePageToDashboard}>Simulate log in successful</button>
        </>
    );
}
export default LandingPage;
