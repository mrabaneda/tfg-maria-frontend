// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import TableHeader from "../../../shared/components/table_header";
import TasksToolbar from "./tasks_tool_bar";
import TaskItem from "./task_item";
import Modal from "../../../shared/components/dialog/modal";
import { fakeTasks } from "../helpers/constants";
import TaskUpdateFormBody from "./task_update_form_body";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const TaskGrid: React.FC = () => {
  const isDeleteModalWanted: boolean = false;
  const isUpdateModalWanted: boolean = false;

  return (
    <div className="p-[30px]">
      <TasksToolbar />
      <table className="mt-[20px] w-full">
        <thead>
          <tr>
            <TableHeader title={"Estado"} />
            <TableHeader title={"Usuario"} />
            <TableHeader title={"Título"} />
            <TableHeader title={"Descripción"} />
            <TableHeader title={"Feedback"} />
            <TableHeader title={""} />
          </tr>
        </thead>
        <tbody>
          {fakeTasks.map((task, i) => (
            <TaskItem
              key={i}
              itemTitle={task.title}
              itemDescription={task.description}
              itemStatus={task.status}
              loginFeedback={task.feedBack}
              itemUser={task.user}
              itemPhoto={task.photoUrl}
            />
          ))}
        </tbody>
      </table>
      {isDeleteModalWanted && (
        <Modal
          title={"Borrar tarea"}
          visible={isDeleteModalWanted}
          isLoading={false}
          body={`Estás seguro/a de eliminar la tarea con nombre: Ir a la compra`}
          confirmButtonText="Borrar tarea"
          confirmButtonColor="bg-red-600 hover:bg-red-700"
          onSubmit={() => {}}
          setVisible={(_) => {}}
        />
      )}
      {isUpdateModalWanted && (
        <Modal
          title={"Editar tarea"}
          visible={isUpdateModalWanted}
          isLoading={false}
          body={<TaskUpdateFormBody />}
          confirmButtonText="Editar tarea"
          confirmButtonColor="bg-[#68C0B8] hover:bg-[#4DAF99]"
          onSubmit={() => {}}
          setVisible={(_) => {}}
        />
      )}
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default TaskGrid;
