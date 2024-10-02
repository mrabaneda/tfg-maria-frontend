// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { ReactNode } from "react";

// -------------------------------------------------------
// model
// -------------------------------------------------------

interface IconButtonProps {
  isDisabled?: boolean;
  iconClassNames?: string;
  classNames?: string;
  icon: ReactNode;
  onClick?: () => void;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  isDisabled = false,
  iconClassNames = "h-4 w-auto text-white",
  classNames = "bg-green-600 p-2 rounded hover:bg-green-500",
  icon,
}) => {
  return (
    <button disabled={isDisabled} onClick={onClick} className={classNames}>
      <span className={iconClassNames}>{icon}</span>
    </button>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default IconButton;