import React, { useState } from 'react';
 
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
 
    // Redirige a la URL de Teams
    window.location.href = 'https://trial-8197528.okta.com/home/trial-8197528_dashboardbi_1/0oasjsvovspN4ZDDc697/alnsjt174iRpdP7P8697';
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