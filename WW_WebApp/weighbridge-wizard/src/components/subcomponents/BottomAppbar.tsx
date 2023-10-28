import React from "react";
import Clock from "./Clock";
import { AppBar } from "@mui/material";
import { useColorTheme } from "../../themes/use-color-theme";

const BottomAppbar = () => {
    const { theme } = useColorTheme();
    
    return(
        <AppBar position="static"  sx={{ backgroundColor: theme.palette.primary.main, '&': {
            // Customize the AppBar here
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Example: Add a shadow
            borderRadius: '12px', // Example: Add border-radius
          }, }}>       
            <Clock></Clock>
        </AppBar>

    )
}
export default BottomAppbar;