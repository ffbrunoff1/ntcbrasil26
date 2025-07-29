import { motion } from 'framer-motion';
import { Building2, ClipboardList, Wrench, HardHat } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <ClipboardList size={40} className="text-primary" />,
      title: 'Planejamento e Gestão',
      description:
        'Coordenação completa de projetos, desde a concepção até a entrega, garantindo prazos, custos e qualidade.',
    },
    {
      icon: <Building2 size={40} className="text-primary" />,
      title: 'Construções Residenciais',
      description:
        'Edificamos lares com design moderno, materiais de alta qualidade e foco no conforto e segurança da sua família.',
    },
    {
      icon: <HardHat size={40} className="text-primary" />,
      title: 'Obras Comerciais e Industriais',
      description:
        'Soluções estruturadas para espaços comerciais e industriais, otimizando a funcionalidade e o valor do seu investimento.',
    },
    {
      icon: <Wrench size={40} className="text-primary" />,
      title: 'Reformas e Modernização',
      description:
        'Transformamos e revitalizamos ambientes, incorporando as últimas tendências e tecnologias para valorizar seu imóvel.',
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="section-padding bg-light-bg">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Soluções Completas em Construção
          </h2>
          <p className="text-lg text-slate-600">
            Oferecemos um portfólio de serviços diversificado para atender a
            todas as fases do seu projeto com a máxima eficiência e qualidade.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-card p-8 flex flex-col text-center items-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
