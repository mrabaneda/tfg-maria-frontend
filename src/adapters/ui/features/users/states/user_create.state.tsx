// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { PreferencesTypeEnum } from "@/src/core/domain/enums/preferences_type.enum";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface UserCreateState {
  keyWord: string;
  keyWordError: string | null;
  name: string;
  nameError: string | null;
  preference: PreferencesTypeEnum | null;
  image: Blob | null;
  image1: Blob | null;
  image2: Blob | null;
  image3: Blob | null;
  image4: Blob | null;
  isCreating: boolean;
  isCreateFormOpen: boolean;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { UserCreateState };
