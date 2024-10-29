// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { UID } from "@/src/core/domain/value_objects/types";
import { createContext, FC, ReactNode, useContext } from "react";
import { UserDeleteState } from "../states/user_delete.state";
import { useUserDelete } from "../hooks/use_user_delete.hook";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface UserDeleteValue {
  userDeleteState: UserDeleteState;
  openDeleteModal: (uid: UID, userName: string) => void;
  deleteModalSetVisible: (isVisible: boolean) => void;
  deleteUser: () => void;
}

interface UserDeleteProps {
  children: ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const UserDeleteContext = createContext<UserDeleteValue>({} as UserDeleteValue);

const UserDeleteContextProvider: FC<UserDeleteProps> = ({ children }) => {
  const { deleteState, openDeleteModal, deleteModalSetVisible, deleteUser } = useUserDelete();

  const userDeleteValue: UserDeleteValue = {
    userDeleteState: deleteState,
    openDeleteModal: openDeleteModal,
    deleteModalSetVisible: deleteModalSetVisible,
    deleteUser: deleteUser,
  };

  return <UserDeleteContext.Provider value={userDeleteValue}>{children}</UserDeleteContext.Provider>;
};

const useUserDeleteContext = () => {
  const context = useContext(UserDeleteContext);

  if (!context) {
    throw new Error("useUserDeleteContext debe ser usada dentro de AdminUserCreateProvider");
  }
  return context;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { UserDeleteContextProvider, useUserDeleteContext, UserDeleteContext };
