"use client";

// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AuthState } from "../states/auth.state";
import React, { useEffect, useMemo, useState } from "react";
import { UnauthorizedException } from "@/src/helpers/errors";
import { useAuthUseCasesContext } from "@/src/infrastructure/di/use_cases/auth_use_cases.context";
import { AppUserFactory } from "../factory/app_user.factory";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AuthContextValue {
    authState: AuthState;
}

interface AuthContextProps {
    children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const defaultAuthState: AuthState = {
    error: null,
    loading: true,
    user: null,
};

const AuthContext = React.createContext<AuthContextValue>({} as AuthContextValue);

const AuthContextProvider: React.FC<AuthContextProps> = ({ children }) => {
    const [authState, setauthState] = useState<AuthState>(defaultAuthState);

    const { authUseCases } = useAuthUseCasesContext();

    useEffect(() => {
        let mounted = true;
        authUseCases
            .signIn()
            .then((ssoUser) => {
                if (mounted)
                    setauthState((authState) => ({
                        ...authState,
                        user: new AppUserFactory().appUserToModel(ssoUser),
                        loading: false,
                    }));
            })
            .catch((err: UnauthorizedException) => {
                if (mounted)
                    setauthState((authState) => ({
                        ...authState,
                        error: err.message,
                        loading: false,
                    }));
            });
        return () => {
            mounted = false;
        };
    }, []);

    const value: AuthContextValue = useMemo(() => ({ authState: authState }), [authState]);

    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AuthContextProvider };

export default AuthContext;