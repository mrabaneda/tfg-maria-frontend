// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AuthUserEntity } from "@/src/core/domain/entities/auth_user.entity";
import { AppUserViewModel } from "../models/app_user.model";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class AppUserFactory {
  static appUserToModel(appUser: AuthUserEntity): AppUserViewModel {
    return {
      uid: appUser.uid,
      email: appUser.email,
      name: appUser.name,
      photoUrl: appUser.photoUrl,
    };
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AppUserFactory };
