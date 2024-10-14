// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { BaseUserRepository } from "@/src/core/domain/ports/repositories/user.repository";
import { createContext, FC, useContext } from "react";
import { useAuthServiceContext } from "../services/auth_service.context";
import { HttpUserRepository } from "../../frameworks/http/repositories/http_user.repository";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface UserRepositoryContextValue {
  userRepository: BaseUserRepository;
}

interface UserRepositoryProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useUserRepositoryContext = () => useContext(UserRepositoryContext);

const UserRepositoryContext = createContext<UserRepositoryContextValue>({} as UserRepositoryContextValue);

const UserRepositoryProvider: FC<UserRepositoryProviderProps> = ({ children }) => {
  const { authService } = useAuthServiceContext();

  const userRepositoryContextValue: UserRepositoryContextValue = {
    userRepository: new HttpUserRepository(authService),
  };

  return <UserRepositoryContext.Provider value={userRepositoryContextValue}>{children}</UserRepositoryContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useUserRepositoryContext, UserRepositoryProvider };
