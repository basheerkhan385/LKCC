import React from 'react';

interface LkccLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showTagline?: boolean;
}

export const LkccLogo: React.FC<LkccLogoProps> = ({
  className = 'h-14 w-auto',
  variant = 'dark',
  showTagline = true,
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#111827';
  const goldColor = '#F59E0B';
  const goldDark = '#D97706';

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <svg
        viewBox="0 0 420 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto drop-shadow-sm"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
        </defs>

        {/* --- Background Building Silhouettes (Right side of roof) --- */}
        <g id="skyline-buildings">
          {/* Tall central building */}
          <path
            d="M 230 45 L 255 20 L 255 75 L 230 75 Z"
            fill={isDark ? '#1E293B' : '#334155'}
          />
          <path
            d="M 255 20 L 285 48 L 285 75 L 255 75 Z"
            fill="url(#goldGrad)"
          />
          {/* Vertical window stripes on central building */}
          <line x1="262" y1="35" x2="262" y2="70" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.8" />
          <line x1="272" y1="42" x2="272" y2="70" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.8" />

          {/* Right angled building */}
          <path
            d="M 290 52 L 315 65 L 315 75 L 290 75 Z"
            fill={isDark ? '#334155' : '#1E293B'}
          />
          <path
            d="M 315 65 L 330 75 L 315 75 Z"
            fill="url(#goldGrad)"
          />
        </g>

        {/* --- Chimney on Left Roof --- */}
        <rect x="85" y="48" width="18" height="20" fill={isDark ? '#475569' : '#334155'} />
        <rect x="83" y="44" width="22" height="4" fill="url(#goldGrad)" rx="1" />

        {/* --- Main Gabled House Roof Line --- */}
        {/* Outer thick roof peak */}
        <path
          d="M 45 92 L 175 32 L 360 88 L 350 95 L 175 42 L 55 98 Z"
          fill="url(#roofGrad)"
        />

        {/* Inner black/dark eaves trim */}
        <path
          d="M 68 95 L 175 46 L 245 78 L 240 84 L 175 54 L 75 101 Z"
          fill={isDark ? '#0F172A' : '#1E293B'}
        />

        {/* 4-Pane Window Grid under the roof ridge */}
        <g id="roof-window">
          <rect x="162" y="58" width="10" height="10" fill="url(#goldGrad)" rx="1" />
          <rect x="176" y="58" width="10" height="10" fill="url(#goldGrad)" rx="1" />
          <rect x="162" y="72" width="10" height="10" fill="url(#goldGrad)" rx="1" />
          <rect x="176" y="72" width="10" height="10" fill="url(#goldGrad)" rx="1" />
        </g>

        {/* --- LKCC Bold Acronym Typography --- */}
        <g id="lkcc-letters">
          {/* 'L' */}
          <path
            d="M 52 104 L 78 104 L 78 132 L 115 132 L 115 148 L 52 148 Z"
            fill={textColor}
          />

          {/* 'K' with Golden Gradient */}
          <path
            d="M 125 104 L 152 104 L 152 118 L 180 104 L 210 104 L 165 125 L 214 148 L 184 148 L 148 130 L 148 148 L 125 148 Z"
            fill="url(#goldGrad)"
          />

          {/* 'C' 1 */}
          <path
            d="M 275 116 L 255 116 C 242 116 232 122 232 126 C 232 130 242 136 255 136 L 275 136 L 275 148 L 250 148 C 230 148 214 138 214 126 C 214 114 230 104 250 104 L 275 104 Z"
            fill={textColor}
          />

          {/* 'C' 2 */}
          <path
            d="M 345 116 L 325 116 C 312 116 302 122 302 126 C 302 130 312 136 325 136 L 345 136 L 345 148 L 320 148 C 300 148 284 138 284 126 C 284 114 300 104 320 104 L 345 104 Z"
            fill={textColor}
          />
        </g>

        {/* --- LAL KHAN & CONSTRUCTION COMPANY Subtitles --- */}
        <text
          x="200"
          y="166"
          fill={textColor}
          fontSize="15"
          fontWeight="900"
          letterSpacing="4"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          LAL KHAN
        </text>

        <text
          x="200"
          y="178"
          fill={isDark ? '#CBD5E1' : '#475569'}
          fontSize="8.5"
          fontWeight="700"
          letterSpacing="3"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          CONSTRUCTION COMPANY
        </text>

        {/* --- Bottom Tagline with Gold Dividers --- */}
        {showTagline && (
          <g id="bottom-slogan">
            <line x1="38" y1="186" x2="110" y2="186" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" />
            <text
              x="200"
              y="189"
              fill={isDark ? '#FBBF24' : '#B45309'}
              fontSize="7.5"
              fontWeight="800"
              letterSpacing="2.5"
              textAnchor="middle"
              fontFamily="system-ui, sans-serif"
            >
              BUILDING YOUR DREAMS
            </text>
            <line x1="290" y1="186" x2="362" y2="186" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}
      </svg>
    </div>
  );
};
