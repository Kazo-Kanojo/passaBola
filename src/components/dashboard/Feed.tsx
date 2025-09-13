import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import PostCreator from './PostCreator';
import PostCard from './PostCard';
// Mock data for posts
const mockPosts = [{
  id: '1',
  user: {
    id: '2',
    name: 'Débora Oliveira',
    position: 'Atacante',
    club: 'Corinthians',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80'
  },
  content: 'Muito feliz em anunciar minha transferência para o Corinthians! Um sonho realizado vestir essa camisa. Vamos com tudo! 🖤',
  image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80',
  likes: 2000,
  comments: 0,
  timestamp: '2 horas atrás'
}, {
  id: '2',
  user: {
    id: '3',
    name: 'Carolina Santos',
    position: 'Técnica',
    club: 'Santos FC',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80'
  },
  content: 'Estamos com inscrições abertas para nossa peneira sub-17! Procurando talentos para nossa equipe feminina. Compartilhem! #FutebolFeminino #Oportunidades',
  image: null,
  likes: 56,
  comments: 7,
  timestamp: '5 horas atrás'
}, {
  id: '3',
  user: {
    id: '4',
    name: 'Fernanda Lima',
    position: 'Meio-campista',
    club: 'Palmeiras',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  content: 'Treino finalizado! Preparação intensa para o clássico desse fim de semana. Quem vai estar na torcida? 💚',
  image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  likes: 89,
  comments: 12,
  timestamp: '1 dia atrás'
}];
const Feed: React.FC = () => {
  const {
    user
  } = useAuth();
  const [posts, setPosts] = useState(mockPosts);
  const addPost = newPost => {
    setPosts([newPost, ...posts]);
  };
  return <div className="space-y-6">
      <PostCreator onPostCreated={addPost} />
      {posts.map(post => <PostCard key={post.id} post={post} />)}
      <div className="text-center py-4">
        <button className="text-tertiary hover:text-accent transition-colors">
          Carregar mais posts
        </button>
      </div>
    </div>;
};
export default Feed;