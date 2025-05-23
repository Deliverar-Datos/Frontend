import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'admin' && password === '1234') {
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('user', 'admin');
      navigate('/');
    } else if (username === 'ceo' && password === '1234') {
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('user', 'ceo');
      navigate('/');
    } else if (username === 'user' && password === '1234') {
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('user', 'user');
      navigate('/');
    } else {
      toast.error('Credenciales inválidas');
    }
  };

  return (
    <div className="w-full max-w-sm bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-semibold text-neutral mb-6 text-center">Iniciar Sesión</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm text-neutral mb-1">Usuario</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-neutral rounded px-3 py-2 focus:outline-none"
            placeholder="ingrese su usuario"
          />
        </div>
        <div>
          <label className="block text-sm text-neutral mb-1">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-neutral rounded px-3 py-2 focus:outline-none"
            placeholder="ingrese su password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-secondary text-white py-2 rounded"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;