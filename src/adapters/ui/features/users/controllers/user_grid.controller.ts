// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { LoginEntity } from "@/src/core/domain/entities/login.entity";
import { UserModel } from "../models/user.model";
import { UserGridState } from "../states/user_grid.state";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

type UserGridAction =
  | { type: "SET_USER_GRID_LIST"; userList: UserModel[] | null }
  | { type: "SET_GET_USER_GRID_ERROR"; error: string | null }
  | { type: "SET_USER_PASSWORDS"; userPasswords: LoginEntity[] | null }
  | { type: "SET_IS_LOADING"; isLoading: boolean }
  | { type: "REFRESH_GRID" };

const UserGridController = (state: UserGridState, action: UserGridAction): UserGridState => {
  switch (action.type) {
    case "SET_USER_GRID_LIST":
      return { ...state, userList: action.userList, isLoading: false };
    case "SET_GET_USER_GRID_ERROR":
      return { ...state, error: action.error, userList: [], isLoading: false };
    case "SET_USER_PASSWORDS":
      return { ...state, userPasswords: action.userPasswords, isLoading: false };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.isLoading };
    case "REFRESH_GRID":
      return { ...state, refreshGrid: new Date().getTime() };
    default:
      throw new Error("Invalid UserGridAction value");
  }
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { UserGridAction };

export { UserGridController };
