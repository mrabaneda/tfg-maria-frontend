// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { UserRepositoryProvider } from "@/src/adapters/infrastructure/di/repositories/user_repository.context";
import { GetUsersUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/user/get_users_use_case.context";
import { UserGridContextProvider } from "./contexts/user_grid.context";
import UserGrid from "./containers/user_grid";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const Users: React.FC = () => {
  return (
    <UserRepositoryProvider>
      <GetUsersUseCaseProvider>
        <UserGridContextProvider>
          <UserGrid />
        </UserGridContextProvider>
      </GetUsersUseCaseProvider>
    </UserRepositoryProvider>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default Users;
