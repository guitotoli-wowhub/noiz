import { motion } from 'motion/react';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { ChevronDown } from 'lucide-react';
import noizLogo from 'figma:asset/a25a5e25188528eb6b2997afe2f73f03504c6248.png';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'cases', label: 'cases' },
    { id: 'contact', label: 'contato' }
  ];

  const servicesDropdown = [
    { path: '/servicos/marketing-influencia', label: 'Marketing de Influência' },
    { path: '/servicos/consultoria-growth', label: 'Consultoria de Growth' },
    { path: '/servicos/tecnologia-automacao', label: 'Tecnologia e Automação' }
  ];

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      onNavigate('hero');
    }
  };

  const handleMenuClick = (itemId: string) => {
    if (location.pathname !== '/') {
      navigate('/#' + itemId);
    } else {
      onNavigate(itemId);
    }
  };

  const handleServicesClick = () => {
    if (location.pathname !== '/') {
      navigate('/#services');
    } else {
      onNavigate('services');
    }
    setIsServicesOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-40 glass p-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.button
          onClick={handleLogoClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
        >
          <img src={noizLogo} alt="Noiz" className="w-8 h-8" />
        </motion.button>

        <nav className="hidden md:flex items-center space-x-8">
          {/* Serviços Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <motion.button
              onClick={handleServicesClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-sm transition-colors duration-200 flex items-center gap-1 ${
                activeSection === 'services' || location.pathname.startsWith('/servicos')
                  ? 'text-accent-pink' 
                  : 'text-white hover:text-accent-pink'
              }`}
            >
              serviços
              <motion.div
                animate={{ rotate: isServicesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </motion.button>

            {/* Dropdown Menu */}
            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl"
              >
                {servicesDropdown.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block px-4 py-3 text-sm text-white hover:bg-gradient-to-r hover:from-[#FF00FF]/20 hover:to-[#9D00FF]/20 transition-all duration-200"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          {/* Other Menu Items */}
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-sm transition-colors duration-200 ${
                activeSection === item.id 
                  ? 'text-accent-pink' 
                  : 'text-white hover:text-accent-pink'
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}