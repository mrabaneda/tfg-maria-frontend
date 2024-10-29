// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, useContext } from "react";
import { CreateUserUseCase } from "@/src/core/use_cases/user/create_user_use_case";
import { useUserRepositoryContext } from "../../repositories/user_repository.context";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface CreateUserUseCaseContextValue {
  createUsersUseCase: CreateUserUseCase;
}

interface CreateUserUseCaseProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useCreateUserUseCaseContext = () => useContext(CreateUserUseCaseContext);

const CreateUserUseCaseContext = createContext<CreateUserUseCaseContextValue>({} as CreateUserUseCaseContextValue);

const CreateUserUseCaseProvider: FC<CreateUserUseCaseProviderProps> = ({ children }) => {
  const { userRepository } = useUserRepositoryContext();

  const createUsersUseCaseContextValue: CreateUserUseCaseContextValue = {
    createUsersUseCase: new CreateUserUseCase(userRepository),
  };

  return <CreateUserUseCaseContext.Provider value={createUsersUseCaseContextValue}>{children}</CreateUserUseCaseContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useCreateUserUseCaseContext, CreateUserUseCaseProvider };
