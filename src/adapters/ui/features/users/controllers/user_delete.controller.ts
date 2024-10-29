// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "@/src/core/domain/value_objects/types";
import { UserDeleteState } from "../states/user_delete.state";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

type UserDeleteAction =
  | { type: "OPEN_DELETE_MODAL"; uid: UID; userName: string }
  | { type: "CLOSE_DELETE_MODAL" }
  | { type: "DELETE_MODAL_SET_VISIBLE"; isVisible: boolean }
  | { type: "SET_IS_DELETING"; isDeleting: boolean };

const UserDeleteController = (state: UserDeleteState, action: UserDeleteAction): UserDeleteState => {
  switch (action.type) {
    case "OPEN_DELETE_MODAL":
      return { ...state, uid: action.uid, isDeleting: false, isDeleteModalOpen: true, userName: action.userName };
    case "CLOSE_DELETE_MODAL":
      return { ...state, uid: null, isDeleting: false, isDeleteModalOpen: false, userName: null };
    case "DELETE_MODAL_SET_VISIBLE":
      return {
        ...state,
        isDeleteModalOpen: action.isVisible,
      };
    case "SET_IS_DELETING":
      return {
        ...state,
        isDeleting: action.isDeleting,
      };
    default:
      throw new Error("Invalid UserDeleteAction value");
  }
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { UserDeleteAction };

export { UserDeleteController };
