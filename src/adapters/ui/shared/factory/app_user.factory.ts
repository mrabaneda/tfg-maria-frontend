// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import AppUserViewModel from "../models/app_user.model";
import AppUserEntity from "@/src/core/entities/app_user.entity";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class AppUserFactory {
  static appUserToModel(appUser: AppUserEntity): AppUserViewModel {
    return {
      email: appUser.email,
      name: appUser.name,
    };
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AppUserFactory };
