import React, { useContext } from 'react';
import './Home.css';
import ThemeContext from '../../Utils/Context';
import ThemeButton from '../../Utils/ThemeButton';
// import {imagen} from "../../Imagenes/fondo"
 
function Home() {
  //usamos useContext y le pasamos el context de nuestro theme
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div id='home' style={{ background: theme.secondary_color, color: theme.primary_color }}>
        <h2><small>Bienvenidos a la Mayor comunidad de videojuegos</small></h2>
        <ThemeButton/>
      </div>
      <img src="../../Imagenes/fondo" alt= "imagen"/>
    </>
  );
}
 
export default Home;