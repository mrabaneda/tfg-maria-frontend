// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { GetAdminUsersUseCase } from "@/src/core/use_cases/admin/get_admin_users.use_case";
import { createContext, FC, useContext } from "react";
import { useAdminRepositoryContext } from "../../repositories/admin_user_repository.context";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface GetAdminUsersUseCaseContextValue {
  getAdminUsersUseCase: GetAdminUsersUseCase;
}

interface GetAdminUsersUseCaseProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useGetAdminUsersUseCaseContext = () => useContext(GetAdminUsersUseCaseContext);

const GetAdminUsersUseCaseContext = createContext<GetAdminUsersUseCaseContextValue>({} as GetAdminUsersUseCaseContextValue);

const GetAdminUsersUseCaseProvider: FC<GetAdminUsersUseCaseProviderProps> = ({ children }) => {
  const { adminUserRepository } = useAdminRepositoryContext();

  const getAdminUsersUseCaseContextValue: GetAdminUsersUseCaseContextValue = { getAdminUsersUseCase: new GetAdminUsersUseCase(adminUserRepository) };

  return <GetAdminUsersUseCaseContext.Provider value={getAdminUsersUseCaseContextValue}>{children}</GetAdminUsersUseCaseContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useGetAdminUsersUseCaseContext, GetAdminUsersUseCaseProvider };
