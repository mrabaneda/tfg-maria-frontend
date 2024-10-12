// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { LoadingScreen } from "../../../shared/components/loading_screen";
import TableHeader from "../../../shared/components/table_header";
import { defaultUserAvatar } from "../../../shared/helpers/constants";
import AdminUserItem from "../components/admin_user_item";
import { AdminUserCreateContextProvider } from "../contexts/admin_user_create.context";
import { useAdminUserGridContext } from "../contexts/admin_user_grid.context";
import AdminToolbar from "./admin_tool_bar";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminUserGrid: React.FC = () => {
  const {
    adminUserGridState: { adminUserList, isLoading },
  } = useAdminUserGridContext();

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <div className="p-[30px]">
      <AdminUserCreateContextProvider>
        <AdminToolbar />
      </AdminUserCreateContextProvider>
      <table className="mt-[20px] w-full">
        <thead>
          <tr>
            <TableHeader title={""} />
            <TableHeader title={"Nombre"} />
            <TableHeader title={"Email"} />
          </tr>
        </thead>
        <tbody>
          {adminUserList?.map((adminUser, i) => (
            <AdminUserItem
              key={i}
              itemId={adminUser.userId}
              itemName={adminUser.name}
              itemEmail={adminUser.email}
              itemPhotoUrl={adminUser.photoUrl ?? defaultUserAvatar}
            />
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
