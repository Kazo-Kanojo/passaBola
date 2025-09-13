import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}
const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  onSwitchToLogin
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    position: '',
    club: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState('');
  const {
    register,
    loading
  } = useAuth();
  if (!isOpen) return null;
  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value) error = 'Nome é obrigatório';
        break;
      case 'email':
        if (!value) {
          error = 'Email é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Email inválido';
        }
        break;
      case 'password':
        if (!value) {
          error = 'Senha é obrigatória';
        } else if (value.length < 6) {
          error = 'A senha deve ter pelo menos 6 caracteres';
        }
        break;
      case 'confirmPassword':
        if (!value) {
          error = 'Confirmação de senha é obrigatória';
        } else if (value !== formData.password) {
          error = 'As senhas não conferem';
        }
        break;
      case 'position':
        if (!value) error = 'Posição é obrigatória';
        break;
      default:
        break;
    }
    return error;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Validate on change
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate all fields
    const newErrors: Record<string, string> = {};
    let hasError = false;
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        newErrors[key] = error;
        hasError = true;
      }
    });
    setErrors(newErrors);
    if (hasError) return;
    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        position: formData.position,
        club: formData.club || undefined
      });
      onClose();
    } catch (err) {
      if (err instanceof Error) {
        setFormError(err.message);
      } else {
        setFormError('Erro ao cadastrar. Tente novamente.');
      }
    }
  };
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full mx-4 relative max-h-90vh overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-accent">
          <XIcon size={24} />
        </button>
        <h2 className="text-2xl font-bold text-accent mb-6">Cadastre-se</h2>
        {formError && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {formError}
          </div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">
              Nome completo*
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary`} placeholder="Seu nome completo" />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email*
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary`} placeholder="seu.email@exemplo.com" />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium">
              Senha*
            </label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary`} placeholder="Crie uma senha segura" />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2 font-medium">
              Confirmar senha*
            </label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary`} placeholder="Confirme sua senha" />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>}
          </div>
          <div className="mb-4">
            <label htmlFor="position" className="block mb-2 font-medium">
              Posição no campo*
            </label>
            <select id="position" name="position" value={formData.position} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.position ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary`}>
              <option value="">Selecione sua posição</option>
              <option value="Goleira">Goleira</option>
              <option value="Zagueira">Zagueira</option>
              <option value="Lateral">Lateral</option>
              <option value="Volante">Volante</option>
              <option value="Meio-campista">Meio-campista</option>
              <option value="Atacante">Atacante</option>
              <option value="Técnica">Técnica</option>
              <option value="Preparadora física">Preparadora física</option>
              <option value="Outra">Outra</option>
            </select>
            {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="club" className="block mb-2 font-medium">
              Clube atual (opcional)
            </label>
            <input type="text" id="club" name="club" value={formData.club} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Nome do seu clube atual" />
          </div>
          <button type="submit" disabled={loading} className={`btn-primary w-full flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
            {loading ? <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span> : null}
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Já tem uma conta?{' '}
            <button onClick={onSwitchToLogin} className="text-tertiary hover:text-accent transition-colors font-medium">
              Entrar
            </button>
          </p>
        </div>
      </div>
    </div>;
};
export default RegisterModal;