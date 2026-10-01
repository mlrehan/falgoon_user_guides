import React from 'react';

interface FalgoonLogoProps {
  variant?: 'normal' | 'dark' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const FalgoonLogo: React.FC<FalgoonLogoProps> = ({
  variant = 'normal',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const isDark = variant === 'dark';

  // Dimension scaling
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14',
  }[size];

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-2xl',
  }[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Geometric Vector Mark */}
      <div
        className={`${iconDimensions} relative flex items-center justify-center rounded-xl shadow-xs transition-transform duration-200 group-hover:scale-105 shrink-0 overflow-hidden ${
          isDark
            ? 'bg-gradient-to-br from-teal-500 via-emerald-500 to-cyan-500 shadow-teal-500/20'
            : 'bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-800 shadow-teal-700/15'
        }`}
      >
        <svg
          viewBox="0 0 40 40"
          className="w-full h-full p-1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle grid backdrop inside icon */}
          <circle cx="20" cy="20" r="18" fill="white" fillOpacity="0.08" />
          {/* Stylized Modern 'F' with forward momentum bars */}
          <path
            d="M12 10.5C12 9.67157 12.6716 9 13.5 9H27C27.8284 9 28.5 9.67157 28.5 10.5C28.5 11.3284 27.8284 12 27 12H15.5V17H24.5C25.3284 17 26 17.6716 26 18.5C26 19.3284 25.3284 20 24.5 20H15.5V29.5C15.5 30.3284 14.8284 31 14 31C13.1716 31 12.5 30.3284 12.5 29.5L12 10.5Z"
            fill="white"
          />
          {/* Glowing accent node representing AI & Analytics */}
          <circle cx="26" cy="26" r="3.5" fill="#38BDF8" />
          <circle cx="26" cy="26" r="1.5" fill="white" />
        </svg>
      </div>

      {variant !== 'icon-only' && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`font-black tracking-tight font-sans ${titleSizes} ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Falgoon
            </span>
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md ${
                isDark
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                  : 'bg-teal-50 text-teal-800 border border-teal-200'
              }`}
            >
              Docs
            </span>
          </div>

          {showSubtitle && (
            <span
              className={`text-[11px] font-medium tracking-tight mt-0.5 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              {isDark ? 'Falgoon USA LLC • Enterprise Hub' : 'Multi-App User Guidelines & Knowledge Base'}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
