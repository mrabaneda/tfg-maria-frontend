// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, useContext } from "react";
import { useAdminRepositoryContext } from "../../repositories/admin_user_repository.context";
import { DeleteAdminUserUseCase } from "@/src/core/use_cases/admin/delete_admin.use_case";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface DeleteAdminUserUseCaseContextValue {
  deleteAdminUsersUseCase: DeleteAdminUserUseCase;
}

interface DeleteAdminUserUseCaseProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useDeleteAdminUserUseCaseContext = () => useContext(DeleteAdminUsersUseCaseContext);

const DeleteAdminUsersUseCaseContext = createContext<DeleteAdminUserUseCaseContextValue>({} as DeleteAdminUserUseCaseContextValue);

const DeleteAdminUserUseCaseProvider: FC<DeleteAdminUserUseCaseProviderProps> = ({ children }) => {
  const { adminUserRepository } = useAdminRepositoryContext();

  const deleteAdminUsersUseCaseContextValue: DeleteAdminUserUseCaseContextValue = {
    deleteAdminUsersUseCase: new DeleteAdminUserUseCase(adminUserRepository),
  };

  return <DeleteAdminUsersUseCaseContext.Provider value={deleteAdminUsersUseCaseContextValue}>{children}</DeleteAdminUsersUseCaseContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useDeleteAdminUserUseCaseContext, DeleteAdminUserUseCaseProvider };
