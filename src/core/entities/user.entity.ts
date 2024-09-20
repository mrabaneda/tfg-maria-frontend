// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { ImageID, UID } from "../value_objects/types";
import { PreferencesTypeEnum } from "../value_objects/preferences_type_enum_value";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface UserEntity {
  uid: UID;
  imageId: ImageID;
  name: string;
  preferences: PreferencesTypeEnum;
  createdAt: Date;
  updatedAt: Date;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default UserEntity;
