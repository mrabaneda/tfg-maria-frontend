// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC, ChangeEventHandler } from "react";
import { combineClasses } from "../../helpers/utils";
import FormInputLabel from "../label/form_input_label";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface FormInputImageProps {
  id: string;
  label?: string;
  name?: string;
  error?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  style?: string;
  containerStyle?: string;
  isDisabled?: boolean;
}

const FormInputImage: FC<FormInputImageProps> = ({ id, label, name, onChange, style, error, containerStyle, isDisabled }) => {
  return (
    <div className={combineClasses("flex flex-col w-full", containerStyle ?? "")}>
      {label && name && <FormInputLabel text={label} htmlFor={name} style="mb-3" />}
      <input
        type="file"
        id={id}
        name={name}
        accept="image/*"
        onChange={onChange}
        className={combineClasses("w-full px-3 py-2 border rounded-md", style ?? "")}
        disabled={isDisabled}
      />
      {error && <p className="text-red-500 text-sm mt-2 font-bold mb-2">{error}</p>}
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default FormInputImage;
