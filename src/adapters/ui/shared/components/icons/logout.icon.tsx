// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC } from "react";

// -------------------------------------------------------
// Model
// -------------------------------------------------------

interface LogoutIconProps {
  color?: string;
  classNames?: string;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const LogoutIcon: FC<LogoutIconProps> = ({ color = "black", classNames = "h-6 w-6" }) => {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={classNames}>
      <path d="M34 16 L50 32 L34 48" stroke={color} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="50" y1="32" x2="18" y2="32" stroke={color} strokeWidth={4} strokeLinecap="round" />
      <path
        d="M22 16 H12 A4 4 0 0 0 8 20 V44 A4 4 0 0 0 12 48 H22"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { LogoutIcon };
