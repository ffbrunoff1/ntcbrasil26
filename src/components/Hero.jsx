import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative bg-white pt-32 pb-20 md:pt-48 md:pb-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-light-bg -z-1"></div>
      <div className="container mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-secondary leading-tight mb-6"
          >
            Construindo o futuro,{' '}
            <span className="gradient-text">um projeto de cada vez.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10"
          >
            Sua visão, nossa missão. Transformamos sonhos em realidade com
            soluções inovadoras e eficientes para o setor de construção.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a
              href="#services"
              className="btn btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group"
            >
              Nossos Serviços
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#about" className="btn btn-secondary w-full sm:w-auto">
              Saiba Mais
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
