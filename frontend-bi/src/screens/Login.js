import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === 'admin' && pass === '1234') {
      localStorage.setItem('auth', 'true');
      navigate('/dashboard');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <input placeholder="Usuario" value={user} onChange={(e) => setUser(e.target.value)} />
      <input placeholder="Contraseña" type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
      <button onClick={handleLogin}>Ingresar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;
