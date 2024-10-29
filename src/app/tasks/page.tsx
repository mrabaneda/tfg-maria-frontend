// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC } from "react";
import dynamic from "next/dynamic";
import { LoadingScreen } from "@/src/adapters/ui/shared/components/loading_screen";

// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

const TasksModule = dynamic(() => import("../../adapters/ui/features/tasks/tasks"), {
  loading: () => <LoadingScreen />,
});

const TasksPage: FC = () => <TasksModule />;

// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

export default TasksPage;
