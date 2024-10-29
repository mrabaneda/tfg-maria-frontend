// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC } from "react";
import dynamic from "next/dynamic";
import { LoadingScreen } from "../../adapters/ui/shared/components/loading_screen";

// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

const AdminUsersModule = dynamic(() => import("../../adapters/ui/features/admin_users/admin_users"), {
  loading: () => <LoadingScreen />,
});

const AdminUsersPage: FC = () => <AdminUsersModule />;

// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

export default AdminUsersPage;
