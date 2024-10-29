// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { FC } from "react";
import Button from "../../../shared/components/button/button";
import Modal from "../../../shared/components/dialog/modal";
import TaskCreateFormBody from "./task_create_form_body";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface ToolBarProps {}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const TasksToolbar: FC<ToolBarProps> = () => {
  const isCreateModalWanted: boolean = false;

  return (
    <>
      <div className="flex w-full items-center justify-between border-b-[1px] border-b-[#E5E5E5] pb-[12px] select-none">
        <div className="text-[22px] font-bold">{"Tareas de los usuarios"}</div>
        <Button color="bg-[#68C0B8] hover:bg-[#4DAF99]" textColor="text-[#FFFFFF]" text={"Añadir tarea"} onClick={() => {}} />
      </div>
      {isCreateModalWanted && (
        <Modal
          title={"Crear nuevo Usuario/a"}
          visible={isCreateModalWanted}
          body={<TaskCreateFormBody />}
          confirmButtonText="Crear usuario/a"
          confirmButtonColor="bg-[#68C0B8] hover:bg-[#4DAF99]"
          isLoading={false}
          setVisible={() => {}}
          onSubmit={() => {}}
        />
      )}
    </>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default TasksToolbar;
