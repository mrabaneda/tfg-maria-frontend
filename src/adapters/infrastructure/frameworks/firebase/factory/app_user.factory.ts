// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AppUserEntity } from "@/src/core/domain/entities/app_user.entity";
import { AppUserDto } from "../dtos/app_user.dto";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class AppUserFactory {
  static appUserDtoToEntity(appUserDto: AppUserDto): AppUserEntity {
    return new AppUserEntity(appUserDto.uid, appUserDto.displayName, appUserDto.email, appUserDto.photoUrl);
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AppUserFactory };
