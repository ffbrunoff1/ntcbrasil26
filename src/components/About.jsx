import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const features = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'Nossa Missão',
      description:
        'Entregar projetos de construção com excelência, superando as expectativas dos clientes através da inovação, qualidade e pontualidade.',
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: 'Nossa Visão',
      description:
        'Ser a empresa referência no setor de construção, reconhecida pela confiabilidade, sustentabilidade e pela transformação de comunidades.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: 'Nossos Valores',
      description:
        'Compromisso, integridade, segurança e paixão pelo que fazemos são os pilares que guiam cada passo da NTC Brasil.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            A base sólida para{' '}
            <span className="gradient-text">seus grandes projetos</span>
          </h2>
          <p className="text-lg text-slate-600">
            A NTC Brasil é mais que uma construtora; somos parceiros na
            realização de seus objetivos. Combinamos experiência técnica com uma
            abordagem centrada no cliente para garantir resultados excepcionais
            em cada obra.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-light-bg p-8 rounded-xl shadow-sm hover:shadow-card transition-shadow duration-300 flex flex-col items-start"
            >
              <div className="bg-primary/10 p-3 rounded-full mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
