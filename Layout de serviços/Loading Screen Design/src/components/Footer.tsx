import { motion } from 'motion/react';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="glass-pink py-8 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-300 text-sm">
          © 2025 Noiz Assessoria.
        </div>
        
        <div className="flex items-center gap-6">
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: '#FF00FF' }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-accent-pink transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </motion.a>
          
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: '#9D00FF' }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-accent-violet transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}