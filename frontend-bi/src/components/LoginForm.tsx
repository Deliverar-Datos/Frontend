import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

     
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('user', username);
      navigate('/');
};    
  

  const handleTeamsRedirect = () => {
    window.location.href = 'https://trial-8197528.okta.com/home/trial-8197528_dashboardbi_1/0oasjsvovspN4ZDDc697/alnsjt174iRpdP7P8697';
  };

  return (
    <div className="w-full max-w-sm bg-white p-8 rounded shadow-md">
      <div className="flex justify-center mb-4">
        <img
          src="https://www.schgroup.com/wp-content/uploads/2024/03/Power-BI-icon.png"
          alt="Logo o Imagen"
          className="h-20 w-auto object-contain"
        />
      </div>
      <h2 className="text-2xl font-semibold text-neutral mb-6 text-center">Iniciar Sesión</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm text-neutral mb-1">Usuario</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-neutral rounded px-3 py-2 focus:outline-none"
            placeholder="Ingrese su usuario"
          />
        </div>
        <div>
          <label className="block text-sm text-neutral mb-1">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-neutral rounded px-3 py-2 focus:outline-none"
            placeholder="Ingrese su contraseña"
          />
        </div>
        <button
          type="submit"
          className="w-[1px] h-[1px] p-0 m-0 overflow-hidden absolute"
        >
          Iniciar Sesión
        </button>
      </form>

      <button
        onClick={handleTeamsRedirect}
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
      >
        Iniciar Sesión con Okta
      </button>
    </div>
  );
};

export default LoginForm;
