import { createTheme, Theme } from "@mui/material";
import { createContext, FC, PropsWithChildren, useContext } from "react";
import { useColorTheme } from "./use-color-theme";

export{};

//custom type declared for typescript
type ThemeContextType = {
  mode: string;
  toggleColorMode: () => void;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleColorMode: () => {},
  theme: createTheme(),
});

// A react 18 quirk is that you need to pass children as a prop
export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useColorTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
