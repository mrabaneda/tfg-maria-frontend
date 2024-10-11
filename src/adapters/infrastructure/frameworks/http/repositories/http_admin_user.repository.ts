// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AdminUserEntity } from "@/src/core/domain/entities/admin_user.entity";
import { AdminUserCreateModel } from "@/src/core/domain/models/admin_user_create.model";
import { BaseAdminUserRepository } from "@/src/core/domain/ports/repositories/admin_user.repository";
import { BaseAuthService } from "@/src/core/domain/ports/services/auth.service";
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
    return response.data.map(AdminUserFactory.adminUserDtoToEntity);
  }

  async create(createModel: AdminUserCreateModel): Promise<void> {
    const token = await this.authService.getUserToken();
    await axiosInstance.post("admin", AdminUserFactory.adminUserEntityToModel(createModel), {
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { HttpAdminUserRepository };
