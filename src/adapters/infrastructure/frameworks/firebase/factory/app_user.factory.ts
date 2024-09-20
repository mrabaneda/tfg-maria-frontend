// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import AppUserEntity from "@/src/core/entities/app_user.entity";
import { AppUserDto, AppUserDtoScheme } from "../dtos/app_user.dto";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class AppUserFactory {
  static appUserDtoToEntity(appUserDto: AppUserDto): AppUserEntity {
    return {
      userId: appUserDto[AppUserDtoScheme.uid],
      name: appUserDto[AppUserDtoScheme.displayName],
      email: appUserDto[AppUserDtoScheme.email],
    };
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AppUserFactory };
