import React, { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { WPCLogo } from './WPCLogo.tsx';
import { ThemeToggle } from './ThemeToggle.tsx';
import { useTheme } from '../context/ThemeContext.tsx';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Abastecimiento Global', href: '#abastecimiento-global' },
    { name: 'Alianza Financiera', href: '#alianza-financiera' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-colors duration-200 ${
      isDark 
        ? 'border-slate-800/80 bg-slate-950/90 text-slate-100 backdrop-blur-md' 
        : 'border-slate-200 bg-white/95 text-slate-800 shadow-sm backdrop-blur-md'
    }`}>
      {/* Top Bar with key corporate info */}
      <div className={`hidden border-b px-4 py-1.5 text-xs sm:block transition-colors ${
        isDark 
          ? 'border-slate-900 bg-slate-900/60 text-slate-400' 
          : 'border-slate-100 bg-slate-50 text-slate-600'
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className={`flex items-center gap-1.5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <MapPin className="h-3.5 w-3.5 text-[#5916EC]" />
              Sede Principal: Cartagena de Indias, Colombia
            </span>
            <span className={`flex items-center gap-1.5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <Mail className="h-3.5 w-3.5 text-[#5916EC]" />
              logisticawpc@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-medium border ${
              isDark 
                ? 'bg-[#5916EC]/15 text-purple-300 border-[#5916EC]/30' 
                : 'bg-[#5916EC]/10 text-[#5916EC] border-[#5916EC]/20'
            }`}>
              <ShieldCheck className="mr-1 h-3 w-3 text-[#5916EC]" />
              Verificación directa en China y Panamá
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo with exact uploaded corporate emblem */}
        <a href="#inicio" className="group flex items-center">
          <WPCLogo className="h-10 w-12 transition-transform duration-200 group-hover:scale-105" variant={isDark ? 'dark' : 'light'} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`text-sm font-medium transition-colors duration-200 ${
                isDark 
                  ? 'text-slate-300 hover:text-white' 
                  : 'text-slate-600 hover:text-[#5916EC]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls: Theme Toggle + CTA Button */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <button
            onClick={onOpenQuote}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#5916EC] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#5916EC]/25 transition-all duration-200 hover:bg-[#6E2EF2] hover:shadow-lg hover:shadow-[#5916EC]/35 active:scale-95"
          >
            <span>Cotizar Operación</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Controls (Toggle + Hamburger) */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`inline-flex items-center justify-center rounded-lg p-2 focus:outline-none ${
              isDark ? 'text-slate-400 hover:bg-slate-900 hover:text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`border-b px-4 pt-2 pb-6 md:hidden ${
          isDark ? 'border-slate-800 bg-slate-950/98' : 'border-slate-200 bg-white shadow-lg'
        }`}>
          <div className="space-y-2 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`block rounded-lg px-3 py-2.5 text-base font-medium transition ${
                  isDark ? 'text-slate-200 hover:bg-slate-900 hover:text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-[#5916EC]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className={`mt-4 border-t pt-4 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#5916EC] px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-[#5916EC]/30 transition hover:bg-[#6E2EF2]"
            >
              <span>Cotizar Operación</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <div className={`mt-4 space-y-1 text-center text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <p>Cartagena de Indias, Colombia</p>
              <p className="text-[#5916EC] font-medium">logisticawpc@gmail.com</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
