// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { GetUsersUseCase } from "@/src/core/use_cases/user/get_users.use_case";
import { createContext, FC, useContext } from "react";
import { useUserRepositoryContext } from "../../repositories/user_repository.context";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface GetUsersUseCaseContextValue {
  getUsersUseCase: GetUsersUseCase;
}

interface GetUsersUseCaseProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useGetUsersUseCaseContext = () => useContext(GetUsersUseCaseContext);

const GetUsersUseCaseContext = createContext<GetUsersUseCaseContextValue>({} as GetUsersUseCaseContextValue);

const GetUsersUseCaseProvider: FC<GetUsersUseCaseProviderProps> = ({ children }) => {
  const { userRepository } = useUserRepositoryContext();

  const getUsersUseCaseContextValue: GetUsersUseCaseContextValue = { getUsersUseCase: new GetUsersUseCase(userRepository) };

  return <GetUsersUseCaseContext.Provider value={getUsersUseCaseContextValue}>{children}</GetUsersUseCaseContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useGetUsersUseCaseContext, GetUsersUseCaseProvider };
