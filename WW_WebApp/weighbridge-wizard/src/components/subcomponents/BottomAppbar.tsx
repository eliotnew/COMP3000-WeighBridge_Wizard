import React from "react";
import Clock from "./Clock";
import { AppBar } from "@mui/material";
import { useColorTheme } from "../../themes/use-color-theme";

const BottomAppbar = () => {
    const { theme } = useColorTheme();
    
    return(
        <AppBar position="static"  sx={{ backgroundColor: theme.palette.primary.main, position: 'fixed', bottom: 0, width: '100%', '&': {
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
            borderRadius: '12px',
          }, }}>       
            <Clock></Clock>
        </AppBar>

    )
}
export default BottomAppbar;
