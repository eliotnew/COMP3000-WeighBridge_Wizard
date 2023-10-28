import React from "react";
import DashAppBar from "./subcomponents/DashAppbar";
import NavigationDrawer from "./subcomponents/NavigationDrawer";
import { useColorTheme } from '../themes/use-color-theme';
import BottomAppbar from "./subcomponents/BottomAppbar";

interface DashboardProps {
    logout: () => void; // Defines the prop as a void function.
    prop2: () => void;
}

export const Dashboard: React.FC <DashboardProps> = ({logout,prop2}) => {
    const {theme} = useColorTheme();
    return (
        <div style={{ backgroundColor: theme.palette.background.default, minHeight:'100vh',width:'100%' }}>
            <DashAppBar logout={logout} />            
            <NavigationDrawer></NavigationDrawer>
            <BottomAppbar></BottomAppbar>       
            

        </div>

    )
}
export default Dashboard;
