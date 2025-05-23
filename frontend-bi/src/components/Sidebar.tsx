import { useNavigate } from 'react-router-dom';
import React from 'react';
import {
  FaUserCircle,
  FaChartLine,
  FaChartPie,
  FaTruck,
  FaUsers,
  FaSignOutAlt,
  FaCog,
  FaThLarge,
} from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  const userInfo = {
    name: user === 'admin' ? 'Admin' : 'Usuario',
    email: user === 'admin' ? 'admin@deliverarapp.com' : 'usuario@deliverarapp.com',
  };

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <aside className="w-64 bg-dark text-white flex flex-col justify-between p-4 min-h-screen">
      <div>
        {/* Logo superior */}
        <div className="text-white text-2xl font-bold mb-6">
          <span className="text-white">Deliver</span>
          <span className="text-primary">.ar</span>
        </div>

        {/* Perfil */}
        <div className="flex items-center gap-3 bg-hoverItem p-3 rounded-lg mb-6">
          <FaUserCircle className="text-3xl text-primary" />
          <div>
            <div className="font-medium">{userInfo.name}</div>
            <div className="text-sm text-gray-200">{userInfo.email}</div>
          </div>
        </div>

        {/* Main Menu */}
        <div className="mb-4 uppercase text-gray-300 text-xs font-semibold px-2">Main Menu</div>
        <nav className="flex flex-col gap-2">
          <button
            onClick={() => navigate('/')}
            className="hover:bg-hoverItem rounded p-2 flex items-center gap-2 w-full text-left"
          >
            <FaThLarge /> Dashboard
          </button>

          {user === 'admin' && (
            <>
              <a href="#" className="hover:bg-hoverItem rounded p-2 flex items-center gap-2">
                <FaChartLine /> Performance
              </a>
              
              
              
              {/* Settings */}
              {/*<div className="mt-6">
                <div className="uppercase text-gray-300 text-xs font-semibold px-2 mb-2">Settings</div>
                <a href="#" className="hover:bg-hoverItem rounded p-2 flex items-center gap-2">
                  <FaCog /> Settings
                </a>
              </div> */}
            </>
          )}
        </nav>
      </div>

      {/* Sign out */}
      <button
        onClick={handleLogout}
        className="bg-hoverItem text-white hover:bg-error px-4 py-2 rounded flex items-center justify-center gap-2 font-semibold mt-6"
      >
        <FaSignOutAlt /> Sign Out
      </button>
    </aside>
  );
};

export default Sidebar;
