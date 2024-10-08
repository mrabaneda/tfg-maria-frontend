// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC } from "react";
import dynamic from "next/dynamic";
import { LoadingScreen } from "../../adapters/ui/shared/components/loading_screen";

// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

const AppUsersModule = dynamic(() => import("../../adapters/ui/features/app_users/app_users"), {
  loading: () => <LoadingScreen />,
});

const AppUsersPage: FC = () => <AppUsersModule />;

// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

export default AppUsersPage;
