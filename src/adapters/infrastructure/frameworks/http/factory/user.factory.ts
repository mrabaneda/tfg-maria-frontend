// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UserEntity } from "@/src/core/domain/entities/user.entity";
import { UserDto } from "../dtos/user.dto";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class UserFactory {
  static userDtoToEntity(userdto: UserDto): UserEntity {
    return {
      uid: userdto.uid,
      name: userdto.name,
      email: userdto.email,
      photoUrl: userdto.photoUrl,
      preference: userdto.preference,
    };
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { UserFactory };
