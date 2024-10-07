// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "@/src/core/domain/value_objects/types";
import BaseAdminUserRepository from "@/src/core/domain/ports/repositories/admin_user.repository";
import { AdminUserEntity } from "@/src/core/domain/entities/admin_user.entity";
import { BaseAuthService } from "@/src/core/domain/ports/services/auth.service";
import { AdminUserCreateModel } from "@/src/core/domain/models/admin_user_create.model";
import { axiosInstance } from "../services/axios.service";
import { AdminUserFactory } from "../factory/admin_user.factory";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class HttpAdminUserRepository implements BaseAdminUserRepository {
  constructor(private readonly authService: BaseAuthService) {}

  async get(): Promise<AdminUserEntity[]> {
    const token = await this.authService.getUserToken();
    const response = await axiosInstance.get("admin", { headers: { Authorization: `Bearer ${token}` } });
    return response.data().map(AdminUserFactory.adminUserDtoToEntity);
  }

  create(createModel: AdminUserCreateModel): Promise<void> {
    throw new Error("Method not implemented.");
  }

  delete(uid: UID): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { HttpAdminUserRepository };
