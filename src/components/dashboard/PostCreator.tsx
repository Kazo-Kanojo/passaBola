import React, { useState, useRef } from 'react';
import { Image, Video, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
interface PostCreatorProps {
  onPostCreated: (post: any) => void;
}
const PostCreator: React.FC<PostCreatorProps> = ({
  onPostCreated
}) => {
  const {
    user
  } = useAuth();
  const [content, setContent] = useState('');
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setMediaPreview(reader.result as string);
      setMediaType(file.type.startsWith('image/') ? 'image' : 'video');
    };
    reader.readAsDataURL(file);
  };
  const triggerFileInput = (type: 'image' | 'video') => {
    if (fileInputRef.current) {
      fileInputRef.current.accept = type === 'image' ? 'image/*' : 'video/*';
      fileInputRef.current.click();
    }
  };
  const clearMedia = () => {
    setMediaPreview(null);
    setMediaType(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() && !mediaPreview) return;
    setIsSubmitting(true);
    // Create a new post object
    const newPost = {
      id: `temp-${Date.now()}`,
      user: {
        id: user?.id,
        name: user?.name,
        position: user?.position,
        club: user?.club,
        avatar: user?.avatar
      },
      content,
      image: mediaPreview,
      likes: 0,
      comments: 0,
      timestamp: 'Agora mesmo'
    };
    // Simulate API call delay
    setTimeout(() => {
      onPostCreated(newPost);
      setContent('');
      clearMedia();
      setIsSubmitting(false);
    }, 1000);
  };
  return <div className="bg-white rounded-xl shadow-md p-4">
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={user?.avatar || 'https://via.placeholder.com/150'} alt={user?.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <textarea placeholder="O que você está pensando?" value={content} onChange={e => setContent(e.target.value)} className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none" rows={3} />
            {mediaPreview && <div className="mt-3 relative">
                <button type="button" onClick={clearMedia} className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1">
                  <X size={16} />
                </button>
                {mediaType === 'image' ? <img src={mediaPreview} alt="Preview" className="rounded-lg max-h-60 w-auto" /> : <video src={mediaPreview} controls className="rounded-lg max-h-60 w-auto" />}
              </div>}
            <div className="flex items-center justify-between mt-3">
              <div className="flex space-x-2">
                <button type="button" onClick={() => triggerFileInput('image')} className="p-2 rounded-full hover:bg-gray-100 text-accent transition-colors">
                  <Image size={20} />
                </button>
                <button type="button" onClick={() => triggerFileInput('video')} className="p-2 rounded-full hover:bg-gray-100 text-tertiary transition-colors">
                  <Video size={20} />
                </button>
                <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} accept="image/*,video/*" />
              </div>
              <button type="submit" disabled={isSubmitting || !content.trim() && !mediaPreview} className={`btn-primary text-sm px-4 py-2 ${isSubmitting || !content.trim() && !mediaPreview ? 'opacity-50 cursor-not-allowed' : ''}`}>
                {isSubmitting ? 'Publicando...' : 'Publicar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
};
export default PostCreator;