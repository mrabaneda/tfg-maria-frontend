// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC } from "react";

// -------------------------------------------------------
// Model
// -------------------------------------------------------

interface HomeIconProps {
  color?: string;
  classNames?: string;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const HomeIcon: FC<HomeIconProps> = ({ color = "black", classNames = "h-6 w-6" }) => {
  return (
    <svg viewBox="0 0 64 64" fill={color} className={classNames}>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M32 12 L8 32 L12 32 L12 56 L24 56 L24 40 L40 40 L40 56 L52 56 L52 32 L56 32 Z"
      />
    </svg>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { HomeIcon };
