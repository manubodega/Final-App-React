import React, {useContext} from 'react';
import ThemeContext from './Context';

function ThemeButton() {

  //Obtenemos el theme y la función handleChangeTheme del hook useContext y le pasamos las propiedades necesarias al elemento button.
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <button
      className='theme_button'
      onClick={handleChangeTheme}
      style={{ background: theme.background, color: theme.foreground }}
    > Cambiar Modo</button>
  );
}

export default ThemeButton;