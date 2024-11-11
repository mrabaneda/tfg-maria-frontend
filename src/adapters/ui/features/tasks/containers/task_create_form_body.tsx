// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC } from "react";
import FormInputText from "../../../shared/components/input/form_input_text";
import FormInputSelect from "../../../shared/components/input/form_input_select";

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
      <FormInputSelect
        label="Seleccione el usuario que va a realizar esta tarea"
        id={"preference"}
        name="preference"
        options={[
          { value: "María Rabaneda Sierra", label: "María Rabaneda Sierra" },
          { value: "Lucía", label: "Lucía" },
          { value: "Caracol(yo)", label: "Caracol(yo)" },
          { value: "Alvarou", label: "Alvarou" },
        ]}
        onChange={() => {}}
      ></FormInputSelect>
    </form>
  );
};

// -------------------------------------------------------
// Public interface
// -------------------------------------------------------

export default TaskCreateFormBody;
