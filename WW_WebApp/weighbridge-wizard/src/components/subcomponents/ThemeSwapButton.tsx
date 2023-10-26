import React from 'react';
import { useThemeContext } from '../../themes/ThemeContextProvider';

function ThemeSwapButton  () {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <div>
      <button onClick={toggleColorMode}>{mode} mode</button>
    </div>
  );
}
export default ThemeSwapButton;
