// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import TableHeader from "../../shared/components/table_header";
import Toolbar from "../../shared/components/tool_bar";
import { defaultUserAvatar } from "../../shared/helpers/constants";
import AdminUserItem from "./components/admin_user_item";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminUsers: React.FC = () => {
  return (
    <div className="p-[30px]">
      <div>
        <Toolbar title={"Lista de Usuarios Administradores"} buttonText={"Añadir administrador"} />
      </div>
      <table className="mt-[20px] w-full">
        <thead>
          <tr>
            <TableHeader titles={["", "Nombre", "Email", "Fecha de creación"]} />
          </tr>
        </thead>
        <tbody>
          <AdminUserItem
            itemId={"1"}
            itemName={"Maria FAKE"}
            itemEmail={"mariafake@fake.es"}
            itemPhotoUrl={defaultUserAvatar}
            itemCreatedDate={new Date()}
          />
          <AdminUserItem
            itemId={"2"}
            itemName={"Maria FAKE"}
            itemEmail={"mariafake@fake.es"}
            itemPhotoUrl={defaultUserAvatar}
            itemCreatedDate={new Date()}
          />
          <AdminUserItem
            itemId={"3"}
            itemName={"Maria FAKE"}
            itemEmail={"mariafake@fake.es"}
            itemPhotoUrl={defaultUserAvatar}
            itemCreatedDate={new Date()}
          />
        </tbody>
      </table>
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default AdminUsers;
