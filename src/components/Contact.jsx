import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Loader,
  CheckCircle,
  AlertTriangle,
  Mail,
  MapPin,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error.message);
      setTimeout(() => setSubmitError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Vamos Construir Juntos
          </h2>
          <p className="text-lg text-slate-600">
            Tem uma ideia ou projeto em mente? Entre em contato conosco. Nossa
            equipe está pronta para ajudar a transformar sua visão em realidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="bg-light-bg p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-bold text-secondary mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-secondary">E-mail</h4>
                  <a
                    href="mailto:ffbrunoff@yahoo.com.br"
                    className="text-slate-600 hover:text-primary transition-colors"
                  >
                    ffbrunoff@yahoo.com.br
                  </a>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-secondary">Localização</h4>
                  <p className="text-slate-600">
                    padre lebret 801 g05 bloco 03
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-primary focus:border-primary transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Seu E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-primary focus:border-primary transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-primary focus:border-primary transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center gap-2 disabled:bg-primary-dark/70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" /> Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Enviar Mensagem
                    </>
                  )}
                </button>
              </div>
            </form>
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 text-green-600 bg-green-100 p-3 rounded-lg"
              >
                <CheckCircle className="w-5 h-5" /> Mensagem enviada com
                sucesso!
              </motion.div>
            )}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 text-red-600 bg-red-100 p-3 rounded-lg"
              >
                <AlertTriangle className="w-5 h-5" /> Erro: {submitError}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
