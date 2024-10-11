// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, ReactNode, useContext, useReducer } from "react";
import { AdminUserCreateState } from "../states/admin_user_create.state";
import { AdminUserCreateController } from "../controllers/admin_user_create.controller";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AdminUserCreateValue {
  adminUserCreateState: AdminUserCreateState;
  setName: (name: string) => void;
  setNameError: (nameError?: string) => void;
  setEmail: (email: string) => void;
  setEmailError: (emailError?: string) => void;
  setPassword: (password: string) => void;
  setPasswordError: (passwordError?: string) => void;
  setPhotoUrl: (photoUrl: string | null) => void;
  setCreatingAdminUser: (isLoading: boolean) => void;
  openCreateAdminForm: () => void;
  closeCreateAdminForm: () => void;
}

interface AdminUserCreateProps {
  children: ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminUserCreateContext = createContext<AdminUserCreateValue>({} as AdminUserCreateValue);

const AdminUserCreateContextProvider: FC<AdminUserCreateProps> = ({ children }) => {
  const [adminUserCreateState, dispatchCreate] = useReducer(AdminUserCreateController, {
    name: null,
    email: null,
    password: null,
    photoUrl: null,
    isCreating: false,
    isCreatingFormOpen: false,
  } satisfies AdminUserCreateState);

  const adminUserCreateValue: AdminUserCreateValue = {
    adminUserCreateState: adminUserCreateState,
    setName: (name) => dispatchCreate({ type: "SET_NAME", name: name }),
    setNameError: (error) => dispatchCreate({ type: "SET_NAME_ERROR", error: error }),

    setEmail: (email) => dispatchCreate({ type: "SET_EMAIL", email: email }),
    setEmailError: (error) => dispatchCreate({ type: "SET_EMAIL_ERROR", error: error }),

    setPassword: (password) => dispatchCreate({ type: "SET_PASSWORD", password: password }),
    setPasswordError: (error) => dispatchCreate({ type: "SET_PASSWORD_ERROR", error: error }),

    setPhotoUrl: (photoUrl) => dispatchCreate({ type: "SET_PHOTO_URL", photoUrl: photoUrl }),

    setCreatingAdminUser: (isLoading) => dispatchCreate({ type: "SET_IS_CREATING", isLoading: isLoading }),
    openCreateAdminForm: () => dispatchCreate({ type: "OPEN_CREATE_FORM" }),
    closeCreateAdminForm: () => dispatchCreate({ type: "CLOSE_CREATE_FORM" }),
  };

  return <AdminUserCreateContext.Provider value={adminUserCreateValue}>{children}</AdminUserCreateContext.Provider>;
};

const useAdminUserCreateContext = () => {
  const context = useContext(AdminUserCreateContext);

  if (!context) {
    throw new Error("useAdminUserCreateContext debe ser usada dentro de AdminUserCreateProvider");
  }
  return context;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AdminUserCreateContextProvider, useAdminUserCreateContext, AdminUserCreateContext };
