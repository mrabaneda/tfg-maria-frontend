// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AppUserEntity } from "@/src/core/domain/entities/app_user.entity";
import { AppUserViewModel } from "../models/app_user.model";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class AppUserFactory {
  static appUserToModel(appUser: AppUserEntity): AppUserViewModel {
    return {
      uid: appUser.userId,
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
