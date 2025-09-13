import React, { useEffect } from 'react';
import { Video, Users, UserCheck, Briefcase, Award, MessageSquare } from 'lucide-react';
const FeaturesSection = () => {
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
  return <section id="funcionalidades" className="py-20 bg-gradient-to-b from-primary/5 to-tertiary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in">Funcionalidades Principais</h2>
          <p className="section-subtitle fade-in">
            Conheça as ferramentas que vão transformar sua carreira no futebol
            feminino
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="card p-6 fade-in">
            <div className="flex items-start mb-4">
              <div className="bg-primary/20 p-3 rounded-full mr-4">
                <Video size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Portfólio de Vídeos
                </h3>
                <p className="text-gray-600">
                  Faça upload de seus melhores momentos, jogadas e treinos para
                  mostrar suas habilidades aos clubes e olheiros.
                </p>
              </div>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="card p-6 fade-in delay-100">
            <div className="flex items-start mb-4">
              <div className="bg-tertiary/20 p-3 rounded-full mr-4">
                <Users size={24} className="text-tertiary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Networking Profissional
                </h3>
                <p className="text-gray-600">
                  Conecte-se com outras atletas, treinadoras, clubes e
                  profissionais do futebol feminino.
                </p>
              </div>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="card p-6 fade-in delay-200">
            <div className="flex items-start mb-4">
              <div className="bg-primary/20 p-3 rounded-full mr-4">
                <UserCheck size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Perfil Profissional
                </h3>
                <p className="text-gray-600">
                  Crie um perfil completo destacando suas habilidades,
                  experiências, estatísticas e objetivos.
                </p>
              </div>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="card p-6 fade-in delay-100">
            <div className="flex items-start mb-4">
              <div className="bg-tertiary/20 p-3 rounded-full mr-4">
                <Briefcase size={24} className="text-tertiary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Vagas e Oportunidades
                </h3>
                <p className="text-gray-600">
                  Acesse vagas exclusivas em clubes, peneiras, testes e
                  oportunidades de desenvolvimento.
                </p>
              </div>
            </div>
          </div>
          {/* Feature 5 */}
          <div className="card p-6 fade-in delay-200">
            <div className="flex items-start mb-4">
              <div className="bg-primary/20 p-3 rounded-full mr-4">
                <Award size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Cursos e Certificações
                </h3>
                <p className="text-gray-600">
                  Desenvolva-se com cursos exclusivos e certificações para
                  aprimorar sua carreira.
                </p>
              </div>
            </div>
          </div>
          {/* Feature 6 */}
          <div className="card p-6 fade-in delay-300">
            <div className="flex items-start mb-4">
              <div className="bg-tertiary/20 p-3 rounded-full mr-4">
                <MessageSquare size={24} className="text-tertiary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Mentoria e Feedback
                </h3>
                <p className="text-gray-600">
                  Receba orientação profissional e feedback de especialistas no
                  futebol feminino.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturesSection;