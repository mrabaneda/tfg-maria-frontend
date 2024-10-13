// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AdminUserEntity } from "@/src/core/domain/entities/admin_user.entity";
import { AdminUserModel } from "../models/admin_user.model";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class AdminUserFactory {
  static entityToModel(entity: AdminUserEntity): AdminUserModel {
    return {
      uid: entity.uid,
      name: entity.name,
      email: entity.email,
      photoUrl: entity.photoUrl,
    };
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AdminUserFactory };
