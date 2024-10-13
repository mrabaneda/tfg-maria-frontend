// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "@/src/core/domain/value_objects/types";
import { AdminUserDeleteState } from "../states/admin_user_delete.state";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

type AdminUserDeleteAction =
  | { type: "OPEN_DELETE_MODAL"; uid: UID; adminName: string }
  | { type: "CLOSE_DELETE_MODAL" }
  | { type: "DELETE_MODAL_SET_VISIBLE"; isVisible: boolean }
  | { type: "SET_IS_DELETING"; isDeleting: boolean };

const AdminUserDeleteController = (state: AdminUserDeleteState, action: AdminUserDeleteAction): AdminUserDeleteState => {
  switch (action.type) {
    case "OPEN_DELETE_MODAL":
      return { ...state, uid: action.uid, isDeleting: false, isDeleteModalOpen: true, adminName: action.adminName };
    case "CLOSE_DELETE_MODAL":
      return { ...state, uid: null, isDeleting: false, isDeleteModalOpen: false, adminName: null };
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
      throw new Error("Invalid AdminUserDeleteAction value");
  }
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AdminUserDeleteAction };

export { AdminUserDeleteController };
