// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "@/src/core/domain/value_objects/types";
import { PreferencesTypeEnum } from "@/src/core/domain/enums/preferences_type.enum";
import { LoginPasswordVO } from "@/src/core/domain/value_objects/login_password.vo";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface UserModel {
  uid: UID;
  name: string;
  email: string;
  photoUrl: string;
  preference: PreferencesTypeEnum;
  password: LoginPasswordVO[] | null;
}

const UserModelSchema: { [K in keyof UserModel]: K } = {
  uid: "uid",
  name: "name",
  email: "email",
  photoUrl: "photoUrl",
  preference: "preference",
  password: "password",
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { UserModel };

export { UserModelSchema };
