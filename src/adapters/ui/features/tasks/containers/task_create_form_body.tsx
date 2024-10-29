// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC } from "react";
import FormInputText from "../../../shared/components/input/form_input_text";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const TaskCreateFormBody: FC = () => {
  return (
    <form className="space-y-4 pb-3 select-none">
      <FormInputText id="name" name="name" label="Título" value={""} onChange={() => {}} placeholder="Introduce un nombre para la tarea" />
      <FormInputText
        id="description"
        name="description"
        label="Descripción"
        value={""}
        onChange={() => {}}
        placeholder="Introduce la descripción de la tarea"
      />
    </form>
  );
};

// -------------------------------------------------------
// Public interface
// -------------------------------------------------------

export default TaskCreateFormBody;
