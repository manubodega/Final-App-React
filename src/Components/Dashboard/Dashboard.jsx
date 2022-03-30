import React, { useContext, useEffect } from 'react';
import {getUser, removeUserSession} from '../../Utils/Common'
import ThemeContext from '../../Utils/Context';
import './Dashboard.css';

function Dashboard(props) {

  //usamos useContext y le pasamos el context de nuestro theme
  const { theme } = useContext(ThemeContext);

  const [result, setResult] = React.useState([]);
    const [poke, setPoke] = React.useState([]);
    const [load, setLoad] = React.useState('true');
    const arr = [];

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
        .then((response) => response.json())
        .then((data) => setResult(data.results.map((item) => {
            fetch(item.url)
            .then((response) => response.json())
            .then((allpokemon) => arr.push(allpokemon));
        setPoke(arr);
     }),
    ));
    }, []);

    setTimeout(() => {
        setLoad(false);
    }, 1000);


  // const user = getUser();

  // // handle click event of logout button
  // const handleLogout = () => {
  //   removeUserSession();
  //   props.history.push('/login');
  // }

  return (
    <div
      id='login'
      style={{ background: theme.secondary_color, color: theme.primary_color }}
    >

      {/* Welcome {user.name}!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" /> */}

      <div className="Pokemon">
        <div className='pokegallery'>{ load ? (<p>Loading...</p>) : (poke.map((img, i) => 
        (
            <div id={img.id} key={img.id}>
                <div className='card' style={{ width: '10rem', height: '15rem', backgroundColor: '#F0F0C9' }}>
                    <img  src={img.sprites.front_default} alt='pokemon' />
                <div >
                <h5 >{img.name}</h5>
                <h6>type: {img.types[0].type.name}</h6>
            </div>
        </div>
    </div>
    ))
    )}
    </div>
    </div>
    </div>
  );
}

export default Dashboard;