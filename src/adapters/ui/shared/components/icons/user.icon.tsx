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

const UserIcon: FC<UserIconProps> = ({ color = "black", classNames = "h-6 w-6" }) => {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={classNames}>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M32 32C38.6274 32 44 26.6274 44 20C44 13.3726 38.6274 8 32 8C25.3726 8 20 13.3726 20 20C20 26.6274 25.3726 32 32 32Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M12 56C12 47.1634 19.1634 40 28 40H36C44.8366 40 52 47.1634 52 56"
      />
    </svg>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { UserIcon };
