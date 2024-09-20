// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import UserEntity from "@/src/core/entities/user.entity";
import { UserDto, UserDtoScheme } from "../dtos/user.dto";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class UserFactory {
  static userDtoToEntity(userDto: UserDto): UserEntity {
    return {
      uid: userDto[UserDtoScheme.uid],
      name: userDto[UserDtoScheme.name],
      imageId: userDto[UserDtoScheme.imageId],
      preferences: userDto[UserDtoScheme.preferences],
      createdAt: userDto[UserDtoScheme.createdAt],
      updatedAt: userDto[UserDtoScheme.updatedAt],
    };
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { UserFactory };
