import React from 'react';
import { useThemeContext } from '../../themes/ThemeContextProvider';
function ThemeSwapButton  () {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <div>
      <button onClick={toggleColorMode}>fese</button>
      {/* Use the theme in your component */}
    </div>
  );
}
export default ThemeSwapButton;
