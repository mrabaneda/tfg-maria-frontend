// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import AppUser from "@/src/core/entities/app_user";
import { AppUserModel } from "../models/app_user.model";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class AppUserFactory {
    appUserToModel(appUser: AppUser): AppUserModel {
        return {
            displayName: appUser.name,
        };
    }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AppUserFactory };