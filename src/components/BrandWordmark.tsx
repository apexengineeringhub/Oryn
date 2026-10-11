import type { HTMLAttributes } from 'react';

type BrandWordmarkProps = {
  inverse?: boolean;
  compact?: boolean;
  className?: string;
} & HTMLAttributes<HTMLSpanElement>;

/** ORYN signature: a strong navy O with a separate, tapered amber sunrise arc. */
export default function BrandWordmark({ inverse = false, compact = false, className = '', ...props }: BrandWordmarkProps) {
  const ink = inverse ? '#FFFFFF' : '#0B1B49';
  const width = compact ? 38 : 56;
  const height = compact ? 38 : 56;
  const textSize = compact ? '23px' : '34px';

  return (
    <span className={`inline-flex items-end gap-0 leading-none ${className}`} aria-label="ORYN" {...props}>
      <svg aria-hidden="true" width={width} height={height} viewBox="0 0 56 56" fill="none" className="shrink-0">
        <defs>
          <linearGradient id="oryn-amber-arc" x1="8" y1="7" x2="42" y2="19" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#F59E0B" />
            <stop offset="0.34" stopColor="#FFD45A" />
            <stop offset="0.7" stopColor="#FFB000" />
            <stop offset="1" stopColor="#F97316" />
          </linearGradient>
          <linearGradient id="oryn-amber-highlight" x1="12" y1="7" x2="31" y2="4" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FFF0B8" />
            <stop offset="0.55" stopColor="#FFE18A" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* O: keep the navy ring clean and unobstructed. */}
        <circle cx="29" cy="33" r="17.5" stroke={ink} strokeWidth="8.5" />

        {/* Larger tapered sunrise arc, following the O's outer contour without crossing the navy ring. */}
        <path
          d="M5.5 28 C2.5 17 8.5 5.2 20.8 2.1 C31 -0.5 40.2 5.5 44 16 C40.5 11.5 36.7 7.8 31.8 6.5 C20.8 3.5 9.2 12.5 8.8 24.5 Z"
          fill="url(#oryn-amber-arc)"
        />
        <path
          d="M8.6 20.5 C10.4 11.3 18.1 5 26.3 4.7 C30.3 4.5 34.1 5.8 37.2 8.1"
          stroke="url(#oryn-amber-highlight)"
          strokeWidth="1.15"
          strokeLinecap="round"
          opacity="0.95"
        />
      </svg>
      <span
        className="font-extrabold tracking-[-0.075em]"
        style={{ color: ink, fontSize: textSize, lineHeight: 1, marginLeft: compact ? '-3px' : '-4px', paddingBottom: compact ? '2px' : '3px' }}
      >
        RYN
      </span>
    </span>
  );
}
