// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { CreateAdminUserUseCase } from "@/src/core/use_cases/admin/create_admin_user_use_case";
import { createContext, FC, useContext } from "react";
import { useAdminRepositoryContext } from "../../repositories/admin_user_repository.context";

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
  const { adminUserRepository } = useAdminRepositoryContext();

  const createAdminUsersUseCaseContextValue: CreateAdminUserUseCaseContextValue = {
    createAdminUsersUseCase: new CreateAdminUserUseCase(adminUserRepository),
  };

  return <CreateAdminUserUseCaseContext.Provider value={createAdminUsersUseCaseContextValue}>{children}</CreateAdminUserUseCaseContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useCreateAdminUserUseCaseContext, CreateAdminUserUseCaseProvider };
