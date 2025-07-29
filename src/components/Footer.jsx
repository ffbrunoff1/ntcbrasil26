import { motion } from 'framer-motion';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753749072609_0.png';

  const footerLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-secondary text-slate-300"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <a
              href="#"
              aria-label="Página inicial da NTC Brasil"
              className="mb-4"
            >
              <img
                src={logoUrl}
                alt="Logo NTC Brasil"
                className="h-12 w-auto"
              />
            </a>
            <p className="max-w-xs text-slate-400">
              Construindo o futuro com inovação, qualidade e compromisso.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-white text-lg mb-4">Navegação</h3>
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-white text-lg mb-4">Sede</h3>
            <p className="text-slate-400">padre lebret 801 g05 bloco 03</p>
            <p className="mt-2">
              <a
                href="mailto:ffbrunoff@yahoo.com.br"
                className="hover:text-primary transition-colors duration-300"
              >
                ffbrunoff@yahoo.com.br
              </a>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-slate-700 text-center text-sm text-slate-400"
        >
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
