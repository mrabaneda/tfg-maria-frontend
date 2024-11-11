// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC } from "react";

// -------------------------------------------------------
// Model
// -------------------------------------------------------

interface FrownIconProps {
  color?: string;
  classNames?: string;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const FrownIcon: FC<FrownIconProps> = ({ color = "#fa8900", classNames = "h-6 w-6" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classNames}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { FrownIcon };