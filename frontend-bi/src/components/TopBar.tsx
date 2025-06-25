import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const TopBar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user') || '';

  const userInfo = {
    name: user.split('@')[0] || 'Usuario',
    email: user,
  };

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="w-full bg-dark text-white px-6 py-3 flex items-center justify-between shadow-md">
      <div className="text-2xl font-bold">
        <span className="text-white">Deliver</span>
        <span className="text-primary">.ar</span>
      </div>

      <div className="flex gap-4 items-stretch">
        <div className="flex items-center gap-2 bg-hoverItem px-4 py-2 rounded min-w-[200px]">
          <FaUserCircle className="text-xl text-white" />
          <div className="text-sm">
            <div className="font-medium">{userInfo.name}</div>
            <div className="text-xs text-gray-200">{userInfo.email}</div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-error hover:bg-red-700 px-4 py-2 rounded text-sm font-semibold"
        >
          <FaSignOutAlt /> Salir
        </button>
      </div>
    </header>
  );
};

export default TopBar;
