import type { HTMLAttributes } from 'react';

type BrandWordmarkProps = {
  inverse?: boolean;
  compact?: boolean;
  className?: string;
} & HTMLAttributes<HTMLSpanElement>;

/** ORYN signature: a navy O with an amber rising-sun arc that meets the O cleanly. */
export default function BrandWordmark({ inverse = false, compact = false, className = '', ...props }: BrandWordmarkProps) {
  const ink = inverse ? '#FFFFFF' : '#0B1B49';
  const width = compact ? 38 : 52;
  const height = compact ? 38 : 52;
  const textSize = compact ? '23px' : '34px';

  return (
    <span className={`inline-flex items-center gap-0 leading-none ${className}`} aria-label="ORYN" {...props}>
      <svg aria-hidden="true" width={width} height={height} viewBox="0 0 56 56" fill="none" className="shrink-0">
        {/* The navy O stays clear; the sunrise is a separate tapered crescent that meets its outer edge. */}
        <defs>
          <linearGradient id="oryn-amber-arc" x1="8" y1="5" x2="41" y2="18" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#F59E0B" />
            <stop offset="0.48" stopColor="#FFC52E" />
            <stop offset="0.82" stopColor="#FF9D00" />
            <stop offset="1" stopColor="#F97316" />
          </linearGradient>
          <linearGradient id="oryn-amber-highlight" x1="11" y1="7" x2="33" y2="4" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FFE8A6" />
            <stop offset="1" stopColor="#FFF4CF" />
          </linearGradient>
          <filter id="oryn-arc-depth" x="1" y="0" width="49" height="32" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="1" stdDeviation="0.55" floodColor="#9A5700" floodOpacity="0.18" />
          </filter>
        </defs>
        <circle cx="29" cy="33" r="17.5" stroke={ink} strokeWidth="8.5" />
        {/* Tapered rising-sun crescent: crisp silhouette, subtle dimensional highlight, no underline or extra flourish. */}
        <path
          d="M12.2 28 C5.5 15.1 14.6 2.1 27.8 2.1 C35.3 2.1 40.1 7.4 38 17.8 C36.8 10.4 32.6 5.5 26.8 5.5 C17.4 5.5 10.2 14.7 13.4 24.8 Z"
          fill="url(#oryn-amber-arc)"
          filter="url(#oryn-arc-depth)"
        />
        <path
          d="M10.8 17.5 C14.1 8.8 21.1 4.1 28.4 4.2"
          stroke="url(#oryn-amber-highlight)"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.95"
        />
      </svg>
      <span className="font-extrabold tracking-[-0.075em]" style={{ color: ink, fontSize: textSize, lineHeight: 1, marginLeft: compact ? '-4px' : '-5px' }}>RYN</span>
    </span>
  );
}
