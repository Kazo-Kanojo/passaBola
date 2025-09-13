import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}
const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSwitchToRegister
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const {
    login,
    loading
  } = useAuth();
  if (!isOpen) return null;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password, rememberMe);
      onClose();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Erro ao fazer login. Tente novamente.');
      }
    }
  };
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full mx-4 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-accent">
          <XIcon size={24} />
        </button>
        <h2 className="text-2xl font-bold text-accent mb-6">Entrar</h2>
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="seu.email@exemplo.com" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium">
              Senha
            </label>
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="••••••••" required />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="remember" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} className="h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Lembrar-me
              </label>
            </div>
            <a href="#" className="text-sm text-tertiary hover:text-accent transition-colors">
              Esqueci minha senha
            </a>
          </div>
          <button type="submit" disabled={loading} className={`btn-primary w-full flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
            {loading ? <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span> : null}
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Ainda não tem uma conta?{' '}
            <button onClick={onSwitchToRegister} className="text-tertiary hover:text-accent transition-colors font-medium">
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </div>;
};
export default LoginModal;