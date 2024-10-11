// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, useContext } from "react";
import { GetAdminUsersUseCase } from "@/src/core/application/use_cases/get_admin_users.use_case";
import { useAdminUserServiceContext } from "../services/admin_user_service.context";

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
  const { adminUserService } = useAdminUserServiceContext();

  const getAdminUsersUseCaseContextValue: GetAdminUsersUseCaseContextValue = { getAdminUsersUseCase: new GetAdminUsersUseCase(adminUserService) };

  return <GetAdminUsersUseCaseContext.Provider value={getAdminUsersUseCaseContextValue}>{children}</GetAdminUsersUseCaseContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useGetAdminUsersUseCaseContext, GetAdminUsersUseCaseProvider };
