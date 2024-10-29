// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { DeleteUserUseCase } from "@/src/core/use_cases/user/delete_user.use_case";
import { createContext, FC, useContext } from "react";
import { useUserRepositoryContext } from "../../repositories/user_repository.context";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface DeleteUserUseCaseContextValue {
  deleteAdminUserUseCase: DeleteUserUseCase;
}

interface DeleteUserUseCaseProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useDeleteUserUseCaseContext = () => useContext(DeleteUserUseCaseContext);

const DeleteUserUseCaseContext = createContext<DeleteUserUseCaseContextValue>({} as DeleteUserUseCaseContextValue);

const DeleteUserUseCaseProvider: FC<DeleteUserUseCaseProviderProps> = ({ children }) => {
  const { userRepository } = useUserRepositoryContext();

  const deleteAdminUsersUseCaseContextValue: DeleteUserUseCaseContextValue = {
    deleteAdminUserUseCase: new DeleteUserUseCase(userRepository),
  };

  return <DeleteUserUseCaseContext.Provider value={deleteAdminUsersUseCaseContextValue}>{children}</DeleteUserUseCaseContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useDeleteUserUseCaseContext, DeleteUserUseCaseProvider };
