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
    <svg width="96" height="96" viewBox="0 0 96 96" fill={color} className={classNames}>
      <g clipPath="url(#clip0_1_11)">
        <path
          d="M68 28L62.36 33.64L72.68 44H32V52H72.68L62.36 62.32L68 68L88 48L68 28ZM16 20H48V12H16C11.6 12 8 15.6 8 20V76C8 80.4 11.6 84 16 84H48V76H16V20Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_11">
          <rect width="96" height="96" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { LogoutIcon };
