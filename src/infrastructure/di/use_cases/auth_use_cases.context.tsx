"use client";

// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import React, { useMemo, useContext } from "react";
import BaseAuthUseCases from "@/src/core/use_cases/auth_use_cases.abstract";
import AuthUseCases from "@/src/application/use_cases/auth_use_cases";
import { useAuthRepositoryContext } from "../repositories/auth_repository.context";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AuthUseCasesContextValue {
    authUseCases: BaseAuthUseCases;
}

interface AuthUseCasesProviderProps {
    children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useAuthUseCasesContext = () => useContext(AuthUseCasesContext);

const AuthUseCasesContext = React.createContext<AuthUseCasesContextValue>(
    {} as AuthUseCasesContextValue
);

const AuthUseCasesProvider: React.FC<AuthUseCasesProviderProps> = ({
    children,
}) => {
    const { authRepository } = useAuthRepositoryContext();

    const authUseCasesContextValue: AuthUseCasesContextValue = useMemo(
        () => ({ authUseCases: new AuthUseCases(authRepository) }),
        []
    );

    return (
        <AuthUseCasesContext.Provider value={authUseCasesContextValue}>
            {children}
        </AuthUseCasesContext.Provider>
    );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AuthUseCasesProvider, useAuthUseCasesContext };