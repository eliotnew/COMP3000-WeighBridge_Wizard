import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey, purple } from "@mui/material/colors";
import React from "react";


const theme = {
  palette: {
    primary: amber,
  },
};

const lightTheme = {
  text: {
    primary: "#1f2954",
  },
  background: {
    default: "#fcf7e8",
  },
  primary: {
    main: "#8abfea",
    contrastText: "#1f2954",
  },
  secondary: {
    main: "#d3e9d3",
    contrastText: "#1f2954",
  },
  accent: {
    main: "#6371cf",
    contrastText: "#fcf7e8",
  },
};

const darkPalette = {
  text: {
    primary:  "#a1aef7",
  },
  background: {
    default:  "#313131",
  },
  primary: {
    main: "#8ec7f6",
    contrastText: "#171203",
  },
  secondary: {
    main: "#aea7e2",
    contrastText:  "#171203",
  },
  accent: {
    main:  "#16192c",
    contrastText: "#a1aef7",
  },
};

export const getDesignTokens = (mode: PaletteMode) => {
  const palette = mode === "light" ? lightTheme : darkPalette;
  
  return {
    palette: {
      mode,
      ...palette,
    },
  };
};
