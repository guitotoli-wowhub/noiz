import { motion } from 'motion/react';
import { Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // OPÇÃO 1: Google Apps Script (escreve direto no Google Sheets)
  // Substitua pela URL do seu Google Apps Script Web App
  const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';

  // OPÇÃO 2: Formspree (envia email) - Alternativa mais rápida
  // const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // OPÇÃO 1: Enviar para Google Sheets via Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script requer no-cors
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString()
        })
      });

      // Com no-cors, não conseguimos verificar response.ok, então assumimos sucesso
      setSubmitStatus('success');
      toast.success('Mensagem enviada com sucesso! Em breve entraremos em contato.', {
        icon: <CheckCircle2 className="w-5 h-5" />,
        duration: 5000,
      });

      // Reset form
      setFormData({ name: '', company: '', email: '', message: '' });

    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
      toast.error('Erro ao enviar mensagem. Tente novamente ou entre em contato por email.', {
        icon: <AlertCircle className="w-5 h-5" />,
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }

    /* 
    OPÇÃO 2: Usar Formspree (mais simples de configurar)
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        toast.success('Mensagem enviada com sucesso!');
        setFormData({ name: '', company: '', email: '', message: '' });
      } else {
        throw new Error('Erro ao enviar');
      }
    } catch (error) {
      setSubmitStatus('error');
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
    */
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-pink opacity-10 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-violet opacity-10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-white mb-16 text-center section-title"
        >
          vamos transformar suas campanhas em sucesso?
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex items-center gap-4">
              <motion.div 
                className="glass p-4 rounded-full"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Mail className="w-6 h-6 text-accent-pink" />
              </motion.div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <a 
                  href="mailto:oi@noizassessoria.com" 
                  className="text-white text-lg hover:text-accent-pink transition-colors"
                >
                  oi@noizassessoria.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <motion.div 
                className="glass p-4 rounded-full"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Phone className="w-6 h-6 text-accent-violet" />
              </motion.div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Telefone</p>
                <a 
                  href="tel:+5511947094768" 
                  className="text-white text-lg hover:text-accent-violet transition-colors"
                >
                  +55 11 94709-4768
                </a>
              </div>
            </div>

            {/* Success message indicator */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-pink p-4 rounded-lg flex items-center gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                <p className="text-white text-sm">
                  Mensagem enviada! Entraremos em contato em breve.
                </p>
              </motion.div>
            )}
          </motion.div>
          
          {/* Contact Form */}
          <motion.form
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass p-8 space-y-6 relative"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white text-sm mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-accent-pink focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-white text-sm mb-2">
                  Empresa *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-accent-violet focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Nome da empresa"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white text-sm mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-accent-pink focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="seu@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white text-sm mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                rows={5}
                className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-accent-violet focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Conte-nos sobre seu projeto..."
              />
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              className="w-full glass-pink py-4 text-white flex items-center justify-center gap-3 hover:bg-pink-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Mensagem
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>

            <p className="text-gray-500 text-xs text-center">
              Seus dados estão protegidos e serão usados apenas para contato.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
