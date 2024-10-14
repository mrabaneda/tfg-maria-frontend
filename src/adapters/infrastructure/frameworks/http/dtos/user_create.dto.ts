// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { PreferencesTypeEnum } from "@/src/core/domain/enums/preferences_type.enum";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface UserCreateDto {
  keyWord: string;
  password: string;
  name: string;
  preference: PreferencesTypeEnum;
  image: Blob;
  image1: Blob;
  image2: Blob;
  image3: Blob;
  image4: Blob;
}

const UserCreateDtoScheme: { [K in keyof UserCreateDto]: K } = {
  keyWord: "keyWord",
  password: "password",
  name: "name",
  preference: "preference",
  image: "image",
  image1: "image1",
  image2: "image2",
  image3: "image3",
  image4: "image4",
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { UserCreateDto };

export { UserCreateDtoScheme };
