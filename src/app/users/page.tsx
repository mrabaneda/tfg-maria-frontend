// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC } from "react";
import dynamic from "next/dynamic";
import { LoadingScreen } from "../../adapters/ui/shared/components/loading_screen";

// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

const UsersModule = dynamic(() => import("../../adapters/ui/features/users/users"), {
  loading: () => <LoadingScreen />,
});

const UsersPage: FC = () => <UsersModule />;

// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

export default UsersPage;
