import React, { useState } from 'react';
import { Heart, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';
interface PostCardProps {
  post: {
    id: string;
    user: {
      id: string;
      name: string;
      position?: string;
      club?: string;
      avatar: string;
    };
    content: string;
    image: string | null;
    likes: number;
    comments: number;
    timestamp: string;
  };
}
const PostCard: React.FC<PostCardProps> = ({
  post
}) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([{
    id: '1',
    user: {
      name: 'Ana Luiza',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
    },
    text: 'Parabéns! Merecido demais!',
    timestamp: '1 hora atrás'
  }]);
  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };
  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const newComment = {
      id: `comment-${Date.now()}`,
      user: {
        name: 'Você',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
      },
      text: commentText,
      timestamp: 'Agora mesmo'
    };
    setComments([...comments, newComment]);
    setCommentText('');
  };
  return <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Post Header */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={post.user.avatar} alt={post.user.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-medium">{post.user.name}</h4>
            <div className="flex text-xs text-gray-500">
              {post.user.position && <span>{post.user.position}</span>}
              {post.user.position && post.user.club && <span className="mx-1">•</span>}
              {post.user.club && <span>{post.user.club}</span>}
              <span className="mx-1">•</span>
              <span>{post.timestamp}</span>
            </div>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <MoreHorizontal size={20} />
        </button>
      </div>
      {/* Post Content */}
      <div className="px-4 pb-3">
        <p className="whitespace-pre-line">{post.content}</p>
      </div>
      {/* Post Media */}
      {post.image && <div className="w-full">
          <img src={post.image} alt="Post media" className="w-full h-auto" />
        </div>}
      {/* Post Actions */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex justify-between">
          <button className={`flex items-center space-x-1 ${liked ? 'text-accent' : 'text-gray-500'} hover:text-accent transition-colors`} onClick={handleLike}>
            <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
            <span>{likesCount}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-500 hover:text-tertiary transition-colors" onClick={() => setShowComments(!showComments)}>
            <MessageSquare size={20} />
            <span>{post.comments}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors">
            <Share2 size={20} />
            <span>Compartilhar</span>
          </button>
        </div>
      </div>
      {/* Comments Section */}
      {showComments && <div className="p-4 border-t border-gray-100">
          {/* Comments List */}
          <div className="space-y-4 mb-4">
            {comments.map(comment => <div key={comment.id} className="flex space-x-2">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <img src={comment.user.avatar} alt={comment.user.name} className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-50 rounded-lg p-3 flex-1">
                  <div className="flex justify-between items-start">
                    <h5 className="font-medium text-sm">{comment.user.name}</h5>
                    <span className="text-xs text-gray-500">
                      {comment.timestamp}
                    </span>
                  </div>
                  <p className="text-sm mt-1">{comment.text}</p>
                </div>
              </div>)}
          </div>
          {/* Comment Form */}
          <form onSubmit={handleComment} className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Your avatar" className="w-full h-full object-cover" />
            </div>
            <input type="text" placeholder="Escreva um comentário..." value={commentText} onChange={e => setCommentText(e.target.value)} className="flex-1 border border-gray-200 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            <button type="submit" disabled={!commentText.trim()} className={`text-tertiary ${!commentText.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:text-accent'}`}>
              Enviar
            </button>
          </form>
        </div>}
    </div>;
};
export default PostCard;