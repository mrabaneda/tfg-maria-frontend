// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UserEntity } from "@/src/core/domain/entities/user.entity";
import { UserDto, UserDtoScheme } from "../dtos/user.dto";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class UserFactory {
  static userDtoToEntity(userDto: UserDto): UserEntity {
    return new UserEntity(
      userDto[UserDtoScheme.uid],
      userDto[UserDtoScheme.name],
      userDto[UserDtoScheme.email],
      userDto[UserDtoScheme.photoUrl],
      userDto[UserDtoScheme.createdAt],
      userDto[UserDtoScheme.updatedAt],
      userDto[UserDtoScheme.preferences]
    );
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { UserFactory };
