import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-text text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
              Passa a Bola
            </h3>
            <p className="text-gray-300 mb-6">
              A primeira rede social profissional dedicada ao futebol feminino
              no Brasil.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#funcionalidades" className="text-gray-300 hover:text-primary transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#planos" className="text-gray-300 hover:text-primary transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Parceiros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">contato@passabola.com.br</li>
              <li className="text-gray-300">+55 (11) 99999-9999</li>
              <li className="text-gray-300">São Paulo, SP - Brasil</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Passa a Bola. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;