import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { User, Award, Calendar, Briefcase, Heart, BookOpen } from 'lucide-react';
const Sidebar: React.FC = () => {
  const {
    user
  } = useAuth();
  return <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
      {/* Profile Summary */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img src={user?.avatar || 'https://via.placeholder.com/150'} alt={user?.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{user?.name}</h3>
            <p className="text-gray-600 text-sm">{user?.position}</p>
            {user?.club && <p className="text-gray-500 text-sm">{user?.club}</p>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-2 bg-primary/10 rounded-lg">
            <p className="text-2xl font-bold text-accent">128</p>
            <p className="text-xs text-gray-600">Conexões</p>
          </div>
          <div className="text-center p-2 bg-tertiary/10 rounded-lg">
            <p className="text-2xl font-bold text-tertiary">42</p>
            <p className="text-xs text-gray-600">Posts</p>
          </div>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-accent h-full rounded-full" style={{
          width: '70%'
        }}></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">Perfil 70% completo</p>
      </div>
      {/* Navigation Links */}
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <a href="#profile" className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <User size={18} className="mr-3 text-accent" />
              <span>Meu Perfil</span>
            </a>
          </li>
          <li>
            <a href="#achievements" className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <Award size={18} className="mr-3 text-tertiary" />
              <span>Conquistas</span>
            </a>
          </li>
          <li>
            <a href="#events" className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar size={18} className="mr-3 text-accent" />
              <span>Eventos</span>
            </a>
          </li>
          <li>
            <a href="#opportunities" className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <Briefcase size={18} className="mr-3 text-tertiary" />
              <span>Oportunidades</span>
            </a>
          </li>
          <li>
            <a href="#saved" className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <Heart size={18} className="mr-3 text-accent" />
              <span>Salvos</span>
            </a>
          </li>
          <li>
            <a href="#courses" className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <BookOpen size={18} className="mr-3 text-tertiary" />
              <span>Cursos</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>;
};
export default Sidebar;