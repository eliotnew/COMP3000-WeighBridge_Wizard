import React from "react";
import DashAppBar from "./subcomponents/DashAppbar";

interface DashboardProps {
    logout: () => void; // Defines the prop as a void function.
    prop2: () => void;
}

export const Dashboard: React.FC <DashboardProps> = ({logout,prop2}) => {
    return (
        <>
            <DashAppBar logout={logout} />
            <h1>DASHBOARD</h1>
            <p> You have arrived at the dashboard! Content coming soon</p>
            <button onClick={logout}>Click to return to dash.</button>
            <button onClick={prop2}>go to devpage!?</button>

        </>

    )
}
export default Dashboard;
