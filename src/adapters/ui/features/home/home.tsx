// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";
import { TaskIcon } from "../../shared/components/icons/task.icon";
import { UserIcon } from "../../shared/components/icons/user.icon";
import { AppRoutes } from "../../shared/helpers/navigation";
import HomeMenuItem from "./components/home_menu_item";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const Home: React.FC = () => {
  return (
    <div className="flex gap-[30px] flex-wrap">
      <HomeMenuItem itemId="1" itemText="Usuarios Administradores" itemPath={AppRoutes.adminUsers} itemIcon={<UserIcon />}></HomeMenuItem>
      <HomeMenuItem itemId="2" itemText="Usuarios de la App" itemPath={AppRoutes.users} itemIcon={<UserIcon />} color="bg-[#FACA97]"></HomeMenuItem>
      <HomeMenuItem itemId="2" itemText="Tareas de la App" itemPath={AppRoutes.taks} itemIcon={<TaskIcon />} color="bg-[#F39DA6]"></HomeMenuItem>
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default Home;
