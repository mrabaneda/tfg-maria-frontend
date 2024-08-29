"use client";

// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import React, { useMemo, useContext } from "react";
import BaseAuthRepository from "@/src/core/repositories/auth_repository.abstract";
import FirebaseAuthRepository from "../../frameworks/firebase/repositories/firebase_auth_repository";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AuthRepositoryContextValue {
    authRepository: BaseAuthRepository;
}

interface AuthRepositoryProviderProps {
    children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useAuthRepositoryContext = () => useContext(AuthRepositoryContext);

const AuthRepositoryContext = React.createContext<AuthRepositoryContextValue>(
    {} as AuthRepositoryContextValue
);

const AuthRepositoryProvider: React.FC<AuthRepositoryProviderProps> = ({
    children,
}) => {
    const authRepositoryContextValue: AuthRepositoryContextValue = useMemo(
        () => ({ authRepository: new FirebaseAuthRepository() }),
        []
    );

    return (
        <AuthRepositoryContext.Provider value={authRepositoryContextValue}>
            {children}
        </AuthRepositoryContext.Provider>
    );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AuthRepositoryProvider, useAuthRepositoryContext };