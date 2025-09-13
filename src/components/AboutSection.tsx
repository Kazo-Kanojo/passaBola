import React, { useEffect } from 'react';
import { Users, Trophy, Network } from 'lucide-react';
const AboutSection = () => {
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
  return <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in">Sobre o Passa a Bola</h2>
          <p className="section-subtitle fade-in">
            Criamos uma plataforma dedicada exclusivamente ao futebol feminino
            para conectar atletas, clubes, treinadores e profissionais do
            esporte.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-8 fade-in">
            <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users size={28} className="text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Comunidade Exclusiva</h3>
            <p className="text-gray-600">
              Um espaço dedicado às mulheres do futebol, onde podem construir
              relacionamentos profissionais e compartilhar experiências com
              outras atletas e profissionais do setor.
            </p>
          </div>
          <div className="card p-8 fade-in delay-100">
            <div className="bg-tertiary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Trophy size={28} className="text-tertiary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Desenvolvimento Profissional
            </h3>
            <p className="text-gray-600">
              Ferramentas e recursos para impulsionar sua carreira no futebol,
              com perfil profissional destacado, upload de vídeos de desempenho
              e conexão direta com clubes e olheiros.
            </p>
          </div>
          <div className="card p-8 fade-in delay-200">
            <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Network size={28} className="text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Oportunidades Reais</h3>
            <p className="text-gray-600">
              Acesso a vagas exclusivas, testes em clubes, bolsas de estudo e
              parcerias com instituições que apoiam o futebol feminino em todo o
              Brasil.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;