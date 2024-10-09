// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import TableHeader from "../../../shared/components/table_header";
import Toolbar from "../../../shared/components/tool_bar";
import { defaultUserAvatar } from "../../../shared/helpers/constants";
import AdminUserItem from "../components/admin_user_item";
import { useAdminUserGridContext } from "../contexts/admin_user_grid.context";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminUserGrid: React.FC = () => {
  const { adminUserGridState } = useAdminUserGridContext();

  return (
    <div className="p-[30px]">
      <div>
        <Toolbar title={"Lista de Usuarios Administradores"} buttonText={"Añadir administrador"} />
      </div>
      <table className="mt-[20px] w-full">
        <thead>
          <tr>
            {["", "Nombre", "Email", "Fecha de creación"].map((title, index) => (
              <TableHeader key={index} title={title} />
            ))}
          </tr>
        </thead>
        <tbody>
          {adminUserGridState.adminUserList?.map((adminUser) => (
            <AdminUserItem
              key={adminUser.userId}
              itemId={adminUser.userId}
              itemName={adminUser.name ?? ""}
              itemEmail={adminUser.email ?? ""}
              itemPhotoUrl={adminUser.photoUrl ?? defaultUserAvatar}
              itemCreatedDate={adminUser.createdAt}
            ></AdminUserItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default AdminUserGrid;
