"use client";
// Force rebuild

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import noizLogo from '@/assets/logo.png';

interface HeaderProps {
  activeSection?: string;
  onNavigate?: (section: string) => void;
}

export default function Header({ activeSection = '', onNavigate }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (id: string, isMobile = false) => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
    if (isHome && onNavigate) {
      onNavigate(id);
    } else {
      router.push(`/#${id}`);
    }
  };
  const menuItems = [
    { id: 'services', label: 'serviços' },
    { id: 'cases', label: 'cases' },
    { id: 'estudos', label: 'estudos' },
    { id: 'contact', label: 'contato' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-40 glass p-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.button
          onClick={() => handleNavigation('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
        >
          <Image src={noizLogo} alt="Noiz" className="w-8 h-8" />
        </motion.button>

        <nav className="hidden md:flex items-center space-x-8">
          {/* Services Dropdown */}
          <div className="relative group z-50">
            <button
              className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${activeSection === 'services' && isHome ? 'text-[#FF00FF]' : 'text-white hover:text-[#FF00FF]'
                }`}
            >
              serviços
              <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200 group-hover:text-[#FF00FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Content */}
            <div className="absolute top-full -left-4 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-1">
              <div className="bg-black border border-white/10 rounded-2xl w-max overflow-hidden shadow-2xl flex flex-col py-2">
                <Link
                  href="/servicos/marketing-de-influencia"
                  className="block px-6 py-3 text-white font-medium text-sm hover:text-[#FF00FF] transition-colors whitespace-nowrap"
                >
                  Marketing de Influência
                </Link>
                <Link
                  href="/servicos/consultoria-de-growth"
                  className="block px-6 py-3 text-white font-medium text-sm hover:text-[#FF00FF] transition-colors whitespace-nowrap"
                >
                  Consultoria de Growth
                </Link>
                <Link
                  href="/servicos/tecnologia-e-automacao"
                  className="block px-6 py-3 text-white font-medium text-sm hover:text-[#FF00FF] transition-colors whitespace-nowrap"
                >
                  Tecnologia e Automação
                </Link>
              </div>
            </div>
          </div>

          <motion.button
            onClick={() => handleNavigation('cases')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`text-sm font-medium transition-colors duration-200 ${activeSection === 'cases' && isHome ? 'text-[#FF00FF]' : 'text-gray-300 hover:text-white'
              }`}
          >
            cases
          </motion.button>

          <Link href="/estudos">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-sm font-medium transition-colors duration-200 ${activeSection === 'estudos' || pathname === '/estudos' ? 'text-[#FF00FF]' : 'text-gray-300 hover:text-white'
                }`}
            >
              estudos & pesquisas
            </motion.button>
          </Link>

          <Link href="/contato">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-sm font-medium transition-colors duration-200 ${activeSection === 'contact' || pathname === '/contato' ? 'text-[#FF00FF]' : 'text-gray-300 hover:text-white'
                }`}
            >
              contato
            </motion.button>
          </Link>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-black/95 border border-white/10 rounded-2xl overflow-hidden flex flex-col backdrop-blur-md"
          >
            {/* Services (Mobile) */}
            <div className="flex flex-col border-b border-zinc-800">
              <span className="px-6 py-4 text-sm font-bold text-zinc-500 uppercase">Serviços</span>
              <Link
                href="/servicos/marketing-de-influencia"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 text-white font-medium text-sm hover:text-[#FF00FF] hover:bg-white/5 transition-colors"
              >
                Marketing de Influência
              </Link>
              <Link
                href="/servicos/consultoria-de-growth"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 text-white font-medium text-sm hover:text-[#FF00FF] hover:bg-white/5 transition-colors"
              >
                Consultoria de Growth
              </Link>
              <Link
                href="/servicos/tecnologia-e-automacao"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 text-white font-medium text-sm hover:text-[#FF00FF] hover:bg-white/5 transition-colors"
              >
                Tecnologia e Automação
              </Link>
            </div>

            <button
              onClick={() => handleNavigation('cases', true)}
              className="px-6 py-4 text-left text-white font-medium hover:text-[#FF00FF] transition-colors border-b border-zinc-800"
            >
              Cases
            </button>
            <Link
              href="/estudos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-4 text-left text-white font-medium hover:text-[#FF00FF] transition-colors border-b border-zinc-800"
            >
              Estudos & Pesquisas
            </Link>
            <Link
              href="/contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-4 text-left text-white font-medium hover:text-[#FF00FF] transition-colors"
            >
              Contato
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}