"use-client";

// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import React, { useMemo, useReducer } from "react";
import SignInState from "../states/sign_in_state";
import SignInController from "../controllers/sign_in_controller";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface SignInContextProps {
    children: React.ReactNode;
}

interface SignInContextValue {
    signInState: SignInState;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const defaultSignInState: SignInState = {
    email: '',
    password: '',
};

const SignInContext = React.createContext<SignInContextValue>({} as SignInContextValue);

const SignInContextProvider: React.FC<SignInContextProps> = ({ children }) => {
    const [state, dispatch] = useReducer(SignInController, defaultSignInState);

    const value: SignInContextValue = useMemo(
        () => ({
            signInState: state,
        }),
        [state]
    );

    return <SignInContext.Provider value={value}>{children}</SignInContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { SignInContext, SignInContextProvider };