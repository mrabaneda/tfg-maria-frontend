// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UserEntity } from "@/src/core/domain/entities/user.entity";
import { UserModel } from "../models/user.model";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class UserFactory {
  static entityToModel(entity: UserEntity): UserModel {
    return {
      uid: entity.uid,
      name: entity.name,
      email: entity.email,
      photoUrl: entity.photoUrl,
      preference: entity.preference,
    };
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { UserFactory };
