// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { UserRepositoryProvider } from "@/src/adapters/infrastructure/di/repositories/user_repository.context";
import { GetUsersUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/user/get_users_use_case.context";
import { DeleteUserUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/user/delete_user.use_case.context";
import { UserGridContextProvider } from "./contexts/user_grid.context";
import { UserDeleteContextProvider } from "./contexts/user_delete.context";
import UserGrid from "./containers/user_grid";
import { CreateUserUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/user/create_user_use_case.context";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const Users: React.FC = () => {
  return (
    <UserRepositoryProvider>
      <GetUsersUseCaseProvider>
        <CreateUserUseCaseProvider>
          <DeleteUserUseCaseProvider>
            <UserGridContextProvider>
              <UserDeleteContextProvider>
                <UserGrid />
              </UserDeleteContextProvider>
            </UserGridContextProvider>
          </DeleteUserUseCaseProvider>
        </CreateUserUseCaseProvider>
      </GetUsersUseCaseProvider>
    </UserRepositoryProvider>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default Users;
