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
      userId: entity.userId,
      name: entity.name,
      email: entity.email,
      photoUrl: entity.photoUrl,
      createdAt: new Date(entity.createdAt),
    };
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AdminUserFactory };
