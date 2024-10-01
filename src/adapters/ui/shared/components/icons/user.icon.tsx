// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC } from "react";

// -------------------------------------------------------
// Model
// -------------------------------------------------------

interface UserIconProps {
  color?: string;
  hoverColor?: string;
  classNames?: string;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

// TODO: combine classes hover color
const UserIcon: FC<UserIconProps> = ({ color = "black", classNames = "h-6 w-6" }) => {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={classNames}>
      <circle className="group-hover:stroke-white" cx="32" cy="22" r="10" stroke={color} strokeWidth={4} />
      <path
        className="group-hover:stroke-white"
        d="M16 46C16 36.0589 24.0589 28 32 28C39.9411 28 48 36.0589 48 46"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { UserIcon };
