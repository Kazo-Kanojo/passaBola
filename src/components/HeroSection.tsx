import { useEffect } from 'react';
const HeroSection = () => {
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
  return <section className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-gradient-to-b from-primary/10 to-tertiary/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-tertiary/40"></div>
        <img src="https://images.pexels.com/photos/9519507/pexels-photo-9519507.jpeg?_gl=1*1sfw5ls*_ga*ODg1MzI2MTA4LjE3MjQ1Mzg3MDI.*_ga_8JE65Q40S6*czE3NTc3NzkzNTgkbzIkZzEkdDE3NTc3Nzk5MTIkajMwJGwwJGgw" alt="Futebol feminino" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="fade-in text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            A primeira rede social profissional do futebol feminino
          </h1>
          <p className="fade-in text-lg md:text-xl text-white mb-8 delay-100">
            Conectando talentos, oportunidades e amantes do futebol feminino em
            uma plataforma exclusiva para o desenvolvimento da modalidade.
          </p>
          <div className="fade-in flex flex-col sm:flex-row gap-4 delay-200">
            <a href="#cadastro" className="btn-primary text-center">
              Comece agora
            </a>
            <a href="#funcionalidades" className="btn-outline border-white text-white hover:bg-white hover:text-accent text-center">
              Conheça mais
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;