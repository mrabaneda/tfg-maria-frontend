// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, ReactNode, useContext } from "react";
import { UserGridState } from "../states/user_grid.state";
import { useUserGrid } from "../hooks/user_grid.hook";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface UserGridValue {
  userGridState: UserGridState;
  refreshGrid: () => void;
}

interface UserGridProps {
  children: ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const UserGridContext = createContext<UserGridValue>({} as UserGridValue);

const UserGridContextProvider: FC<UserGridProps> = ({ children }) => {
  const { userGridState, refreshGrid } = useUserGrid();

  const userGridValue: UserGridValue = {
    userGridState: userGridState,
    refreshGrid: refreshGrid,
  };

  return <UserGridContext.Provider value={userGridValue}>{children}</UserGridContext.Provider>;
};

const useUserGridContext = () => {
  const context = useContext(UserGridContext);

  if (!context) {
    throw new Error("useUserGridContext debe ser usada dentro de UserGridContextProvider");
  }
  return context;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { UserGridContextProvider, useUserGridContext, UserGridContext };
