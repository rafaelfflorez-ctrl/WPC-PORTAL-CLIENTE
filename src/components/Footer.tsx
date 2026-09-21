import React from 'react';
import { Mail, MapPin, ShieldCheck, ArrowUpRight, Anchor } from 'lucide-react';
import { WPCLogo } from './WPCLogo.tsx';
import { ThemeToggle } from './ThemeToggle.tsx';
import { useTheme } from '../context/ThemeContext.tsx';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`border-t transition-colors duration-200 ${
      isDark ? 'border-slate-800 bg-slate-950 text-slate-400' : 'border-slate-200 bg-slate-50 text-slate-600'
    }`}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Corporate Statement (Col 5) */}
          <div className="space-y-4 lg:col-span-5">
            <WPCLogo className="h-11 w-14" variant={isDark ? 'dark' : 'light'} />

            <p className={`text-xs leading-relaxed max-w-md pt-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Especialistas en comercio exterior, abastecimiento estratégico verificado en China y Panamá, y optimización de capital de trabajo mediante soluciones de factoring en alianza con Finamco.
            </p>

            <div className={`flex items-center gap-2 text-xs pt-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <ShieldCheck className="h-4 w-4 text-[#5916EC]" />
              <span>Inspección presencial directa con equipo propio en terreno.</span>
            </div>
          </div>

          {/* Quick Navigation Links (Col 3) */}
          <div className="space-y-3 lg:col-span-3">
            <h3 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Navegación Corporativa
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className={`transition ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-[#5916EC]'}`}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className={`transition ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-[#5916EC]'}`}>
                  Servicios de Importación
                </a>
              </li>
              <li>
                <a href="#abastecimiento-global" className={`transition ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-[#5916EC]'}`}>
                  Abastecimiento Global (China y Panamá)
                </a>
              </li>
              <li>
                <a href="#alianza-financiera" className={`transition ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-[#5916EC]'}`}>
                  Alianza Financiera
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col 4) */}
          <div className="space-y-3 lg:col-span-4">
            <h3 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Sede Central y Operaciones
            </h3>
            <div className={`space-y-2.5 text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#5916EC]" />
                <span>Cartagena de Indias, Bolívar, Colombia (Hub Portuario Principal)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#5916EC]" />
                <a href="mailto:logisticawpc@gmail.com" className={`transition ${isDark ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-[#5916EC]'}`}>
                  logisticawpc@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Anchor className="mt-0.5 h-4 w-4 shrink-0 text-[#888888]" />
                <span>Interconexión directa con puertos de Ningbo, Shenzhen, Shanghai y Zona Libre de Colón.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className={`mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row text-xs ${
          isDark ? 'border-slate-900 text-slate-500' : 'border-slate-200 text-slate-500'
        }`}>
          <p>© {currentYear} World Parts Company S.A.S. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <ThemeToggle variant="full" />
            <span className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              NIT Registrado en Cámara de Comercio de Cartagena
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
