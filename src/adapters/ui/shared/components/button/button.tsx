// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC } from "react";
import { combineClasses } from "../../helpers/utils";

// -------------------------------------------------------
// Model
// -------------------------------------------------------

interface ButtonProps {
  text: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  color?: string;
  textColor?: string;
  classNames?: string;
  onClick?: () => void;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const Button: FC<ButtonProps> = ({ color, textColor, text, isDisabled = false, isLoading = false, classNames = "", onClick }) => {
  return (
    <button
      type="button"
      onClick={!isDisabled ? onClick : undefined}
      className={combineClasses(
        "flex justify-center items-center",
        "min-h-8 min-w-8 md:px-5 px-3 py-2",
        "rounded-md border-0 transition",
        !isDisabled ? "shadow cursor-pointer" : "shadow-none cursor-default",
        !isDisabled ? "hover:shadow active:brightness-110 active:shadow-none" : "",
        !isDisabled ? color ?? "bg-green-600" : "bg-gray-400",
        classNames
      )}
    >
      <div className="flex justify-center items-center relative">
        <span className={combineClasses("md:text-base text-xs font-normal", isLoading ? "text-transparent" : textColor ?? "text-white")}>{text}</span>
        {isLoading && (
          <div
            className="absolute inline-block md:h-4 md:w-4 h-3 w-3 animate-spin rounded-full border-white border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        )}
      </div>
    </button>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default Button;
