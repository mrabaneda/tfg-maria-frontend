// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { Scheme } from "@/src/core/value_objects/scheme";
import { ImageID, UID } from "@/src/core/value_objects/types";
import { PreferencesTypeEnum } from "@/src/core/value_objects/preferences_type_enum_value";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface UserDto {
  uid: UID;
  imageId: ImageID;
  name: string;
  preferences: PreferencesTypeEnum;
  createdAt: Date;
  updatedAt: Date;
}

const UserDtoScheme: Scheme<UserDto> = {
  uid: "uid",
  imageId: "imageId",
  name: "name",
  preferences: "preferences",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { UserDto };

export { UserDtoScheme };
