import { useEffect, useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeElements.forEach((element) => observer.observe(element));

    return () => {
      fadeElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const tempErrors = {};

    if (!formData.name) {
      tempErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email) {
      tempErrors.email = 'Email é obrigatório';
    } else {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Email inválido';
      }
    }

    if (!formData.message) {
      tempErrors.message = 'Mensagem é obrigatória';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      // Simulação de requisição à API
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-primary/5 to-tertiary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in">Entre em Contato</h2>
          <p className="section-subtitle fade-in">
            Tem dúvidas ou sugestões? Envie uma mensagem e entraremos em contato
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="card p-8 fade-in">
            {submitSuccess && (
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
                role="alert"
                aria-live="polite"
              >
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-medium">
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary`}
                placeholder="Seu nome"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary`}
                placeholder="seu.email@exemplo.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary`}
                placeholder="Digite sua mensagem aqui..."
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary w-full flex items-center justify-center ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
              ) : (
                <Send size={18} className="mr-2" />
              )}
              {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
            </button>
          </form>

          <div className="mt-12 text-center fade-in">
            <p className="text-gray-600">Ou entre em contato diretamente:</p>
            <a href="mailto:contato@passabola.com.br" className="text-accent hover:underline mt-2 block">
              contato@passabola.com.br
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
