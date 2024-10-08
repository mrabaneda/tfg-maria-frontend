// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import TableHeader from "../../shared/components/table_header";
import Toolbar from "../../shared/components/tool_bar";
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
        <tr>
          <TableHeader titles={["", "Nombre", "Email", "Fecha de creación"]} />
        </tr>
        <AdminUserItem
          itemId={"1"}
          itemName={"Maria FAKE"}
          itemEmail={"mariafake@fake.es"}
          itemPhotoUrl={"https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1"}
          itemCreatedDate={new Date()}
        />
        <AdminUserItem
          itemId={"1"}
          itemName={"Maria FAKE"}
          itemEmail={"mariafake@fake.es"}
          itemPhotoUrl={"https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1"}
          itemCreatedDate={new Date()}
        />
        <AdminUserItem
          itemId={"1"}
          itemName={"Maria FAKE"}
          itemEmail={"mariafake@fake.es"}
          itemPhotoUrl={"https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1"}
          itemCreatedDate={new Date()}
        />
      </table>
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default AdminUsers;
