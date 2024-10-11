// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, useContext } from "react";
import { useAdminUserServiceContext } from "../services/admin_user_service.context";
import { CreateAdminUserUseCase } from "@/src/core/application/use_cases/create_admin_user_use_case";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface CreateAdminUserUseCaseContextValue {
  createAdminUsersUseCase: CreateAdminUserUseCase;
}

interface CreateAdminUserUseCaseProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useCreateAdminUserUseCaseContext = () => useContext(CreateAdminUserUseCaseContext);

const CreateAdminUserUseCaseContext = createContext<CreateAdminUserUseCaseContextValue>({} as CreateAdminUserUseCaseContextValue);

const CreateAdminUserUseCaseProvider: FC<CreateAdminUserUseCaseProviderProps> = ({ children }) => {
  const { adminUserService } = useAdminUserServiceContext();

  const createAdminUsersUseCaseContextValue: CreateAdminUserUseCaseContextValue = {
    createAdminUsersUseCase: new CreateAdminUserUseCase(adminUserService),
  };

  return <CreateAdminUserUseCaseContext.Provider value={createAdminUsersUseCaseContextValue}>{children}</CreateAdminUserUseCaseContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useCreateAdminUserUseCaseContext, CreateAdminUserUseCaseProvider };
