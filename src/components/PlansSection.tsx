import React, { useEffect } from 'react';
import { Check } from 'lucide-react';
const PlansSection = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  return <section id="planos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in">Escolha seu Plano</h2>
          <p className="section-subtitle fade-in">
            Selecione o plano que melhor se adapta à sua jornada no futebol
            feminino
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plano Craque */}
          <div className="card fade-in border-2 border-primary p-8 relative">
            <div className="absolute top-0 right-0 bg-primary text-white py-1 px-4 text-sm font-medium rounded-bl-lg">
              Popular
            </div>
            <h3 className="text-2xl font-bold mb-2 text-accent">
              Plano Craque
            </h3>
            <p className="text-gray-600 mb-6">
              Ideal para quem está iniciando no futebol profissional
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold">R$19,90</span>
              <span className="text-gray-500">/mês</span>
            </div>
            <ul className="mb-8 space-y-4">
              <li className="flex items-center">
                <Check size={20} className="text-accent mr-2" />
                <span>Perfil profissional básico</span>
              </li>
              <li className="flex items-center">
                <Check size={20} className="text-accent mr-2" />
                <span>Upload de até 5 vídeos</span>
              </li>
              <li className="flex items-center">
                <Check size={20} className="text-accent mr-2" />
                <span>Networking limitado</span>
              </li>
            </ul>
            <a href="#cadastro" className="btn-outline w-full text-center">
              Escolher plano
            </a>
          </div>
          {/* Plano Estrela do Futebol */}
          <div className="card fade-in delay-100 border-2 border-tertiary p-8 relative bg-tertiary/5">
            <div className="absolute top-0 right-0 bg-tertiary text-white py-1 px-4 text-sm font-medium rounded-bl-lg">
              Recomendado
            </div>
            <h3 className="text-2xl font-bold mb-2 text-tertiary">
              Plano Estrela do Futebol
            </h3>
            <p className="text-gray-600 mb-6">
              Para atletas que buscam crescimento profissional
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold">R$39,90</span>
              <span className="text-gray-500">/mês</span>
            </div>
            <ul className="mb-8 space-y-4">
              <li className="flex items-center">
                <Check size={20} className="text-tertiary mr-2" />
                <span>Perfil profissional destacado</span>
              </li>
              <li className="flex items-center">
                <Check size={20} className="text-tertiary mr-2" />
                <span>Upload ilimitado de vídeos</span>
              </li>
              <li className="flex items-center">
                <Check size={20} className="text-tertiary mr-2" />
                <span>Networking ilimitado</span>
              </li>
              <li className="flex items-center">
                <Check size={20} className="text-tertiary mr-2" />
                <span>Acesso a vagas exclusivas</span>
              </li>
              <li className="flex items-center">
                <Check size={20} className="text-tertiary mr-2" />
                <span>Mentoria mensal</span>
              </li>
              <li className="flex items-center">
                <Check size={20} className="text-tertiary mr-2" />
                <span>Cursos exclusivos</span>
              </li>
            </ul>
            <a href="#cadastro" className="btn-secondary w-full text-center">
              Escolher plano
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default PlansSection;