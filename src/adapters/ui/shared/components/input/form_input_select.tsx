// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC, ChangeEventHandler } from "react";
import { combineClasses } from "../../helpers/utils";
import FormInputLabel from "../label/form_input_label";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface FormInputSelectProps {
  id: string;
  label?: string;
  name?: string;
  options: { value: string; label: string }[];
  error?: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  style?: string;
  containerStyle?: string;
  isDisabled?: boolean;
}

const FormInputSelect: FC<FormInputSelectProps> = ({ id, label, name, options, onChange, style, error, containerStyle, isDisabled }) => {
  return (
    <div className={combineClasses("flex flex-col w-full", containerStyle ?? "")}>
      {label && name && <FormInputLabel text={label} htmlFor={name} style="mb-3" />}
      <select
        id={id}
        name={name}
        onChange={onChange}
        className={combineClasses("w-full px-3 py-2 border rounded-md", style ?? "")}
        disabled={isDisabled}
        defaultValue={options.at(0)?.value}
      >
        <option value="" disabled>
          Selecciona una opción
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-2 font-bold mb-2">{error}</p>}
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default FormInputSelect;
