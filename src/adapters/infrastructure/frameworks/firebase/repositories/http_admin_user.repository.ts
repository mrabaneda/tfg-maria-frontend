// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "@/src/core/domain/value_objects/types";
import BaseAdminUserRepository from "@/src/core/domain/ports/repositories/admin_user.repository";
import { AdminUserEntity } from "@/src/core/domain/entities/admin_user.entity";
import { BaseAuthService } from "@/src/core/domain/ports/services/auth.service";
import { AdminUserCreateModel } from "@/src/core/domain/models/admin_user_create.model";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class HttpAdminUserRepository implements BaseAdminUserRepository {
  constructor(private readonly authService: BaseAuthService) {}

  async get(): Promise<AdminUserEntity[]> {
    const token = await this.authService.getUserToken();
    // TODO: use axios
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}admin`, { headers: { Authorization: `Bearer ${token}` }, method: "GET" });
    const data = await response.json();
    return data;
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
