import React, { useState, useContext } from 'react';
import axios from 'axios';
import { setUserSession } from '../../Utils/Common';
import ThemeContext from '../../Utils/Context';


function Login(props) {

  //usamos useContext y le pasamos el context de nuestro theme
  const { theme } = useContext(ThemeContext);


  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  return (
    <div 
      id='login'
      style={{ background: theme.secondary_color, color: theme.primary_color }}
    >
      Login<br /><br />

      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>

      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>

      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />

      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;