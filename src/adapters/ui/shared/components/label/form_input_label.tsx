// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC } from "react";
import { combineClasses } from "../../helpers/utils";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface FormInputLabelProps {
  text: string;
  htmlFor: string;
  style?: string;
}

const FormInputLabel: FC<FormInputLabelProps> = ({ text, htmlFor, style }) => {
  return (
    <label className={combineClasses("block text-gray-700 md:text-base text-xs font-bold mb-2 select-none", style ?? "")} htmlFor={htmlFor}>
      {text}
    </label>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default FormInputLabel;
