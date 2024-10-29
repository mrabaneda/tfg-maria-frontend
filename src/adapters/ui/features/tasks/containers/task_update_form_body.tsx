// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC, useState } from "react";
import FormInputText from "../../../shared/components/input/form_input_text";
import { FrownIcon } from "../../../shared/components/icons/frown.icon";
import { MehIcon } from "../../../shared/components/icons/meh.icon";
import { SmileIcon } from "../../../shared/components/icons/smile.icon";
import { LaughIcon } from "../../../shared/components/icons/laugh.icon";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const TaskUpdateFormBody: FC = () => {
  const [titleContent, setTitle] = useState("");
  const [descriptionContent, setDescription] = useState("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  return (
    <form className="space-y-4 pb-3 select-none">
      <FormInputText
        id="name"
        name="name"
        label="Título"
        value={titleContent}
        onChange={handleTitleChange}
        placeholder="Actualizar nombre de la tarea"
      />
      <div className="flex flex-col w-full">
        <label className="block text-gray-700 md:text-base text-xs font-bold mb-2 select-none mb-3">Descripción</label>
        <textarea
          className="min-h-[100px] w-full px-3 py-2 border rounded-md"
          name="description"
          id="description"
          placeholder="Actualizar la descripción de la tarea"
        ></textarea>
      </div>
      <FormInputText
        id="description"
        name="description"
        type="checkbox"
        label="Actualizar el estado de la tarea"
        value={descriptionContent}
        onChange={handleDescriptionChange}
        style="w-fit"
      />
      <div className="flex flex-col w-full">
        <label className="block text-gray-700 md:text-base text-xs font-bold mb-2 select-none mb-3">Actualizar Feedback de la tarea</label>
        <div className="flex gap-4">
          <FrownIcon color="#ebebeb" classNames="hover:fill-[#f6a652] cursor-pointer transition-all" />
          <MehIcon color="#ebebeb" classNames="hover:fill-[#87BFF2] cursor-pointer transition-all" />
          <SmileIcon color="#ebebeb" classNames="hover:fill-[#fed576] cursor-pointer transition-all" />
          <LaughIcon color="#ebebeb" classNames="hover:fill-[#A4D37A] cursor-pointer transition-all" />
        </div>
      </div>
    </form>
  );
};

// -------------------------------------------------------
// Public interface
// -------------------------------------------------------

export default TaskUpdateFormBody;
