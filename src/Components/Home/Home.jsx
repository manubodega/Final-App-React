import React, { useContext } from 'react';
import './Home.css';
import ThemeContext from '../../Utils/Context';
import ThemeButton from '../../Utils/ThemeButton';
 
function Home() {
  //usamos useContext y le pasamos el context de nuestro theme
  const { theme } = useContext(ThemeContext);
  return (
    <div 
      id='home'
      style={{ background: theme.secondary_color, color: theme.primary_color }}
      >
        Welcome to the Home Page!
      <ThemeButton/>
    </div>
  );
}
 
export default Home;