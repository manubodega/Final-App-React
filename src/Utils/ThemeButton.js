import React, {useContext} from 'react';
import ThemeContext from './Context';
import "./ThemeButton.css";

function ThemeButton() {

  //Obtenemos el theme y la función handleChangeTheme del hook useContext y le pasamos las propiedades necesarias al elemento button.
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <div className='button-container'>
      <button
        className="theme-button"
        onClick={handleChangeTheme}
        style={{ background: theme.background, color: theme.foreground }}>
        Change Theme
      </button>
    </div>
  );
}

export default ThemeButton;
