import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const {
    isAuthenticated
  } = useAuth();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const openLoginModal = () => {
    setShowLoginModal(true);
    setIsOpen(false);
  };
  const openRegisterModal = () => {
    setShowRegisterModal(true);
    setIsOpen(false);
  };
  // Don't render the header if the user is authenticated
  if (isAuthenticated) {
    return null;
  }
  return <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-accent to-tertiary bg-clip-text text-transparent">
            Passa a Bola
          </h1>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-accent focus:outline-none">
            {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-text hover:text-accent transition-colors">
            Sobre
          </a>
          <a href="#funcionalidades" className="text-text hover:text-accent transition-colors">
            Funcionalidades
          </a>
          <a href="#planos" className="text-text hover:text-accent transition-colors">
            Planos
          </a>
          <a href="#contato" className="text-text hover:text-accent transition-colors">
            Contato
          </a>
          <button onClick={openLoginModal} className="btn-outline text-sm">
            Entrar
          </button>
          <button onClick={openRegisterModal} className="btn-primary text-sm">
            Cadastre-se
          </button>
        </nav>
      </div>
      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#sobre" className="text-text hover:text-accent transition-colors py-2" onClick={() => setIsOpen(false)}>
              Sobre
            </a>
            <a href="#funcionalidades" className="text-text hover:text-accent transition-colors py-2" onClick={() => setIsOpen(false)}>
              Funcionalidades
            </a>
            <a href="#planos" className="text-text hover:text-accent transition-colors py-2" onClick={() => setIsOpen(false)}>
              Planos
            </a>
            <a href="#contato" className="text-text hover:text-accent transition-colors py-2" onClick={() => setIsOpen(false)}>
              Contato
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <button onClick={openLoginModal} className="btn-outline text-center text-sm">
                Entrar
              </button>
              <button onClick={openRegisterModal} className="btn-primary text-center text-sm">
                Cadastre-se
              </button>
            </div>
          </div>
        </div>}
      {/* Modals */}
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} onSwitchToRegister={() => {
      setShowLoginModal(false);
      setShowRegisterModal(true);
    }} />
      <RegisterModal isOpen={showRegisterModal} onClose={() => setShowRegisterModal(false)} onSwitchToLogin={() => {
      setShowRegisterModal(false);
      setShowLoginModal(true);
    }} />
    </header>;
};
export default Header;