// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, useContext } from "react";
import { useAdminRepositoryContext } from "../../repositories/admin_user_repository.context";
import { DeleteAdminUsersUseCase } from "@/src/core/use_cases/admin/delete_admin.use_case";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface DeleteAdminUsersUseCaseContextValue {
  deleteAdminUsersUseCase: DeleteAdminUsersUseCase;
}

interface DeleteAdminUsersUseCaseProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useDeleteAdminUsersUseCaseContext = () => useContext(DeleteAdminUsersUseCaseContext);

const DeleteAdminUsersUseCaseContext = createContext<DeleteAdminUsersUseCaseContextValue>({} as DeleteAdminUsersUseCaseContextValue);

const DeleteAdminUsersUseCaseProvider: FC<DeleteAdminUsersUseCaseProviderProps> = ({ children }) => {
  const { adminUserRepository } = useAdminRepositoryContext();

  const deleteAdminUsersUseCaseContextValue: DeleteAdminUsersUseCaseContextValue = {
    deleteAdminUsersUseCase: new DeleteAdminUsersUseCase(adminUserRepository),
  };

  return <DeleteAdminUsersUseCaseContext.Provider value={deleteAdminUsersUseCaseContextValue}>{children}</DeleteAdminUsersUseCaseContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useDeleteAdminUsersUseCaseContext, DeleteAdminUsersUseCaseProvider };
