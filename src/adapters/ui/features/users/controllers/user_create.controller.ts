// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { PreferencesTypeEnum } from "@/src/core/domain/enums/preferences_type.enum";
import { UserCreateState } from "../states/user_create.state";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

type UserCreateAction =
  | { type: "SET_KEYWORD"; keyWord: string }
  | { type: "SET_KEYWORD_ERROR"; error: string | null }
  | { type: "SET_NAME"; name: string }
  | { type: "SET_NAME_ERROR"; error: string | null }
  | { type: "SET_PREFERENCE"; preference: PreferencesTypeEnum | null }
  | { type: "SET_IMAGE"; image: Blob }
  | { type: "SET_IMAGE1"; image1: Blob }
  | { type: "SET_IMAGE2"; image2: Blob }
  | { type: "SET_IMAGE3"; image3: Blob }
  | { type: "SET_IMAGE4"; image4: Blob }
  | { type: "SET_IS_CREATING"; isCreating: boolean }
  | { type: "OPEN_CREATE_FORM" }
  | { type: "CREATE_FORM_SET_VISIBLE"; isVisible: boolean }
  | { type: "CLOSE_CREATE_FORM" };

const UserCreateController = (state: UserCreateState, action: UserCreateAction): UserCreateState => {
  switch (action.type) {
    case "SET_KEYWORD":
      return { ...state, keyWord: action.keyWord };
    case "SET_KEYWORD_ERROR":
      return { ...state, keyWordError: action.error };
    case "SET_NAME":
      return { ...state, name: action.name };
    case "SET_NAME_ERROR":
      return { ...state, nameError: action.error };
    case "SET_PREFERENCE":
      return { ...state, preference: action.preference };
    case "SET_IMAGE":
      return { ...state, image: action.image };
    case "SET_IMAGE1":
      return { ...state, image1: action.image1 };
    case "SET_IMAGE2":
      return { ...state, image2: action.image2 };
    case "SET_IMAGE3":
      return { ...state, image3: action.image3 };
    case "SET_IMAGE4":
      return { ...state, image4: action.image4 };
    case "SET_IS_CREATING":
      return { ...state, isCreating: action.isCreating };
    case "OPEN_CREATE_FORM":
      return {
        ...state,
        isCreateFormOpen: true,
        isCreating: false,
        name: "",
        nameError: null,
        keyWord: "",
        keyWordError: null,
        preference: null,
        image: null,
        image1: null,
        image2: null,
        image3: null,
        image4: null,
      };
    case "CREATE_FORM_SET_VISIBLE":
      return { ...state, isCreateFormOpen: action.isVisible };
    case "CLOSE_CREATE_FORM":
      return {
        ...state,
        isCreateFormOpen: false,
        isCreating: false,
        name: "",
        nameError: null,
        keyWord: "",
        keyWordError: null,
        preference: null,
        image: null,
        image1: null,
        image2: null,
        image3: null,
        image4: null,
      };
    default:
      throw new Error("Invalid UserCreateAction value");
  }
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { UserCreateAction };

export { UserCreateController };
