// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AdminUserCreateState } from "../states/admin_user_create.state";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

type AdminUserCreateAction =
  | { type: "SET_NAME"; name: string }
  | { type: "SET_NAME_ERROR"; error: string | null }
  | { type: "SET_EMAIL"; email: string }
  | { type: "SET_EMAIL_ERROR"; error: string | null }
  | { type: "SET_PASSWORD"; password: string }
  | { type: "SET_IMAGE"; image: Blob }
  | { type: "SET_PASSWORD_ERROR"; error: string | null }
  | { type: "SET_IS_CREATING"; isCreating: boolean }
  | { type: "OPEN_CREATE_FORM" }
  | { type: "CREATE_FORM_SET_VISIBLE"; isVisible: boolean }
  | { type: "CLOSE_CREATE_FORM" };

const AdminUserCreateController = (state: AdminUserCreateState, action: AdminUserCreateAction): AdminUserCreateState => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.name };
    case "SET_NAME_ERROR":
      return { ...state, nameError: action.error };
    case "SET_EMAIL":
      return { ...state, email: action.email };
    case "SET_EMAIL_ERROR":
      return { ...state, emailError: action.error };
    case "SET_PASSWORD":
      return { ...state, password: action.password };
    case "SET_PASSWORD_ERROR":
      return { ...state, passwordError: action.error };
    case "SET_IMAGE":
      return { ...state, image: action.image };
    case "SET_IS_CREATING":
      return { ...state, isCreating: action.isCreating };
    case "OPEN_CREATE_FORM":
      return {
        ...state,
        isCreatingFormOpen: true,
        isCreating: false,
        name: "",
        nameError: null,
        email: "",
        emailError: null,
        password: "",
        passwordError: null,
      };
    case "CREATE_FORM_SET_VISIBLE":
      return { ...state, isCreatingFormOpen: action.isVisible };
    case "CLOSE_CREATE_FORM":
      return {
        ...state,
        isCreatingFormOpen: false,
        isCreating: false,
        name: "",
        nameError: null,
        email: "",
        emailError: null,
        password: "",
        passwordError: null,
      };

    default:
      throw new Error("Invalid AdminUserCreateAction value");
  }
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AdminUserCreateAction };

export { AdminUserCreateController };
