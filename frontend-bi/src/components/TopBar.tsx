import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLayout, FiSearch, FiHelpCircle } from 'react-icons/fi';

interface TopBarProps {
  title: string;
  icon: 'dashboard' | 'help';
  showSearch?: boolean;
  showHelpButton?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({
  title,
  icon,
  showSearch = true,
  showHelpButton = true
}) => {
  const navigate = useNavigate();

  const renderIcon = () => {
    switch (icon) {
      case 'dashboard':
        return <FiLayout className="text-xl text-neutral" />
      case 'help':
        return <FiHelpCircle className="text-xl text-neutral" />;
      default:
        return null;
    }
  };

  return (
    <header className="flex justify-between items-center mb-8">
      {/* Izquierda: ícono + título */}
      <div className="flex items-center gap-2 text-neutral text-lg font-semibold">
        {renderIcon()}
        <span>{title}</span>
      </div>

      {/* Derecha: búsqueda + botón */}
      {(showSearch || showHelpButton) && (
        <div className="flex items-center gap-2">
          {showSearch && (
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-neutral rounded w-64 focus:outline-none"
              />
            </div>
          )}
          {showHelpButton && (
            <button
              onClick={() => navigate('/help')}
              className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded"
            >
              Help Center
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default TopBar;
