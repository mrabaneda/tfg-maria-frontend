// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AppUserEntity } from "@/src/core/domain/entities/app_user.entity";
import { AppUserDto, AppUserDtoScheme } from "../dtos/app_user.dto";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class AppUserFactory {
  static appUserDtoToEntity(appUserDto: AppUserDto): AppUserEntity {
    return new AppUserEntity(
      appUserDto[AppUserDtoScheme.uid],
      appUserDto[AppUserDtoScheme.displayName],
      appUserDto[AppUserDtoScheme.email],
      appUserDto[AppUserDtoScheme.photoUrl]
    );
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AppUserFactory };
