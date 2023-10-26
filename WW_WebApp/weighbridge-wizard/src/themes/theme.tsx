import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey, purple } from "@mui/material/colors";

const theme = {
  palette: {
    primary: amber,
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            main: "#1f2954",
          },
          background: {
            main: "#fcf7e8",
          },
          primary: {
            main: "#8abfea",
            textContrast: "#1f2954",
          },
          secondary: {
            main: "#d3e9d3",
            textContrast: "#1f2954",
          },
          accent: {
            main: "#6371cf",
            textContrast: "#fcf7e8",
          },
      
          
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

export default theme;