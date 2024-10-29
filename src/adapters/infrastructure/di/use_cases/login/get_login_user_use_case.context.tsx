// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { GetLoginUserUseCase } from "@/src/core/use_cases/login/get_login_user.use_case";
import { createContext, FC, useContext } from "react";
import { useLoginRepositoryContext } from "../../repositories/login_repository.context";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface GetLoginUserUseCaseContextValue {
  getLoginUserUseCase: GetLoginUserUseCase;
}

interface GetLoginUserUseCaseProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useGetLoginUserUseCaseContext = () => useContext(GetLoginUserUseCaseContext);

const GetLoginUserUseCaseContext = createContext<GetLoginUserUseCaseContextValue>({} as GetLoginUserUseCaseContextValue);

const GetLoginUserUseCaseProvider: FC<GetLoginUserUseCaseProviderProps> = ({ children }) => {
  const { loginRepository } = useLoginRepositoryContext();

  const getLoginUserUseCaseContextValue: GetLoginUserUseCaseContextValue = { getLoginUserUseCase: new GetLoginUserUseCase(loginRepository) };

  return <GetLoginUserUseCaseContext.Provider value={getLoginUserUseCaseContextValue}>{children}</GetLoginUserUseCaseContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useGetLoginUserUseCaseContext, GetLoginUserUseCaseProvider };
