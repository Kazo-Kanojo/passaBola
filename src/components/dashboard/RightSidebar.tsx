import React from 'react';
import { UserPlus } from 'lucide-react';
// Mock data for connections
const suggestedConnections = [{
  id: '1',
  name: 'Juliana Ribeiro',
  position: 'Zagueira',
  club: 'São Paulo FC',
  avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
}, {
  id: '2',
  name: 'Patrícia Almeida',
  position: 'Goleira',
  club: 'Flamengo',
  avatar: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80'
}, {
  id: '3',
  name: 'Camila Torres',
  position: 'Técnica',
  club: 'Internacional',
  avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
}];
const upcomingEvents = [{
  id: '1',
  title: 'Peneira São Paulo FC',
  date: '15 de Outubro, 2023',
  location: 'São Paulo, SP'
}, {
  id: '2',
  title: 'Workshop de Liderança',
  date: '22 de Outubro, 2023',
  location: 'Online'
}];
const RightSidebar: React.FC = () => {
  return <div className="space-y-6 sticky top-24">
      {/* Suggested Connections */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-semibold">Sugestões para você</h3>
        </div>
        <div className="p-4 space-y-4">
          {suggestedConnections.map(connection => <div key={connection.id} className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={connection.avatar} alt={connection.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">{connection.name}</h4>
                  <p className="text-xs text-gray-500">
                    {connection.position} • {connection.club}
                  </p>
                </div>
              </div>
              <button className="text-tertiary hover:text-accent">
                <UserPlus size={18} />
              </button>
            </div>)}
        </div>
        <div className="p-3 border-t border-gray-100 text-center">
          <button className="text-sm text-tertiary hover:text-accent transition-colors">
            Ver mais sugestões
          </button>
        </div>
      </div>
      {/* Upcoming Events */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-semibold">Próximos eventos</h3>
        </div>
        <div className="p-4 space-y-4">
          {upcomingEvents.map(event => <div key={event.id} className="border-l-2 border-accent pl-3">
              <h4 className="font-medium text-sm">{event.title}</h4>
              <p className="text-xs text-gray-500">{event.date}</p>
              <p className="text-xs text-gray-500">{event.location}</p>
            </div>)}
        </div>
        <div className="p-3 border-t border-gray-100 text-center">
          <button className="text-sm text-tertiary hover:text-accent transition-colors">
            Ver todos os eventos
          </button>
        </div>
      </div>
      {/* Footer */}
      <div className="text-xs text-gray-500 space-y-2">
        <div className="flex flex-wrap gap-x-2">
          <a href="#" className="hover:text-accent">
            Sobre
          </a>
          <a href="#" className="hover:text-accent">
            Termos
          </a>
          <a href="#" className="hover:text-accent">
            Privacidade
          </a>
          <a href="#" className="hover:text-accent">
            Ajuda
          </a>
        </div>
        <p>© 2023 Passa a Bola</p>
      </div>
    </div>;
};
export default RightSidebar;