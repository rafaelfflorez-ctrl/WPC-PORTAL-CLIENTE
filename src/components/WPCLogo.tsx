import React from 'react';

interface WPCLogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export const WPCLogo: React.FC<WPCLogoProps> = ({ 
  className = 'h-10 w-10', 
  showText = true,
  variant = 'dark'
}) => {
  return (
    <div className="flex items-center gap-3">
      {/* Geometric Icon */}
      <svg 
        viewBox="0 0 200 170" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Left rhomboid: Electric Violet #5916EC */}
        <polygon points="50,6 100,86 52,164 4,86" fill="#5916EC" />
        
        {/* Right rhomboid: Cool Gray #888888 */}
        <polygon points="150,6 196,86 148,164 100,86" fill="#888888" />
        
        {/* Central inverted triangle: Dark Slate #35383F */}
        <polygon points="100,86 148,164 52,164" fill="#35383F" />
      </svg>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <span className={`text-sm sm:text-base font-extrabold tracking-[0.22em] uppercase leading-tight ${variant === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            WORLD PARTS
          </span>
          <span className="text-[11px] font-semibold tracking-[0.28em] text-[#888888] uppercase leading-tight">
            COMPANY S.A.S.
          </span>
        </div>
      )}
    </div>
  );
};
