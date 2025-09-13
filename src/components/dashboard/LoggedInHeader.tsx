import React, { useState } from 'react';
import { Search, Bell, LogOut, User, Settings, MessageSquare } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
const LoggedInHeader: React.FC = () => {
  const {
    user,
    logout
  } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
    if (showNotifications) setShowNotifications(false);
  };
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (showUserMenu) setShowUserMenu(false);
  };
  const handleLogout = () => {
    if (window.confirm('Tem certeza que deseja sair?')) {
      logout();
    }
  };
  return <header className="fixed w-full z-50 bg-white shadow-md py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-accent to-tertiary bg-clip-text text-transparent">
            Passa a Bola
          </h1>
        </div>
        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
          <div className="relative w-full">
            <input type="text" placeholder="Buscar jogadoras, clubes, hashtags..." className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" />
            <Search size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 relative" onClick={toggleNotifications}>
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-4 w-4 bg-accent rounded-full text-white text-xs flex items-center justify-center">
                3
              </span>
            </button>
            {/* Notifications Dropdown */}
            {showNotifications && <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-10 border border-gray-200">
                <h3 className="px-4 py-2 font-medium border-b border-gray-200">
                  Notificações
                </h3>
                <div className="max-h-96 overflow-y-auto">
                  <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
                    <p className="text-sm font-medium">
                      Mariana comentou no seu post
                    </p>
                    <p className="text-xs text-gray-500">Há 5 minutos</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
                    <p className="text-sm font-medium">
                      Novo evento: Seletiva FC Santos
                    </p>
                    <p className="text-xs text-gray-500">Há 2 horas</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                    <p className="text-sm font-medium">
                      Carolina aceitou seu convite de conexão
                    </p>
                    <p className="text-xs text-gray-500">Há 1 dia</p>
                  </div>
                </div>
                <div className="px-4 py-2 border-t border-gray-200">
                  <button className="text-tertiary text-sm hover:text-accent w-full text-center">
                    Ver todas as notificações
                  </button>
                </div>
              </div>}
          </div>
          {/* Messages */}
          <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 relative hidden md:flex">
            <MessageSquare size={20} />
            <span className="absolute top-0 right-0 h-4 w-4 bg-accent rounded-full text-white text-xs flex items-center justify-center">
              2
            </span>
          </button>
          {/* User Profile */}
          <div className="relative">
            <button className="flex items-center space-x-2" onClick={toggleUserMenu}>
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src={user?.avatar || 'https://via.placeholder.com/150'} alt={user?.name || 'Usuário'} className="w-full h-full object-cover" />
              </div>
              <span className="hidden md:inline text-sm font-medium">
                {user?.name?.split(' ')[0]}
              </span>
            </button>
            {/* User Menu Dropdown */}
            {showUserMenu && <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 border border-gray-200">
                <div className="px-4 py-2 border-b border-gray-200">
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
                <a href="#profile" className="flex items-center px-4 py-2 text-sm hover:bg-gray-50">
                  <User size={16} className="mr-2" />
                  Ver perfil
                </a>
                <a href="#settings" className="flex items-center px-4 py-2 text-sm hover:bg-gray-50">
                  <Settings size={16} className="mr-2" />
                  Configurações
                </a>
                <button onClick={handleLogout} className="flex items-center px-4 py-2 text-sm hover:bg-gray-50 w-full text-left text-red-500">
                  <LogOut size={16} className="mr-2" />
                  Sair
                </button>
              </div>}
          </div>
        </div>
      </div>
    </header>;
};
export default LoggedInHeader;