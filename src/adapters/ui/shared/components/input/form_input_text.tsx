// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC, ChangeEventHandler } from "react";
import { combineClasses } from "../../helpers/utils";
import FormInputLabel from "../label/form_input_label";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface FormInputTextProps {
  id: string;
  label?: string;
  name?: string;
  placeholder?: string;
  error?: string;
  value: string;
  maxLen?: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  style?: string;
  containerStyle?: string;
  isDisabled?: boolean;
  type?: string;
}

const FormInputText: FC<FormInputTextProps> = ({
  id,
  name,
  label,
  placeholder,
  value,
  maxLen,
  onChange,
  style,
  error,
  containerStyle,
  isDisabled,
  type,
}) => {
  return (
    <div className={combineClasses("flex flex-col w-full", containerStyle ?? "")}>
      {label && name && <FormInputLabel text={label} htmlFor={name} style="mb-3" />}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        maxLength={maxLen}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        className={combineClasses("w-full px-3 py-2 border rounded-md", style ?? "")}
      />
      {error && <p className="text-red-500 text-sm mt-3 font-bold">{error}</p>}
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default FormInputText;
