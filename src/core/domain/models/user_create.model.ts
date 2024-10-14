// --------------------------------
// Requirements
// --------------------------------

import { PreferencesTypeEnum } from "../enums/preferences_type.enum";

// --------------------------------
// Helpers
// --------------------------------

interface UserCreateModel {
  keyWord: string;
  name: string;
  password: string;
  preference: PreferencesTypeEnum;
  image: Blob;
  image1: Blob;
  image2: Blob;
  image3: Blob;
  image4: Blob;
}

// --------------------------------
// Public Interface
// --------------------------------

export type { UserCreateModel };
