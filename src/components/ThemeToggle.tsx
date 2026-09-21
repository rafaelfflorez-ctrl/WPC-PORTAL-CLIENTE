import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

interface ThemeToggleProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  variant = 'compact' 
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      id="theme-toggle-button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Activar tema claro' : 'Activar tema oscuro'}
      className={`group relative inline-flex items-center gap-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5916EC] active:scale-95 ${
        isDark
          ? 'border-slate-800 bg-slate-900/90 text-slate-300 hover:border-slate-700 hover:bg-slate-800 hover:text-amber-300'
          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:text-[#5916EC] shadow-sm'
      } ${variant === 'full' ? 'px-3 py-2 text-xs font-semibold' : 'p-2'} ${className}`}
    >
      <div className="relative flex h-5 w-5 items-center justify-center">
        {isDark ? (
          <Sun className="h-4 w-4 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon className="h-4 w-4 text-[#5916EC] transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </div>

      {variant === 'full' && (
        <span className="text-xs font-semibold tracking-wide">
          {isDark ? 'Tema Claro' : 'Tema Oscuro'}
        </span>
      )}
    </button>
  );
};
