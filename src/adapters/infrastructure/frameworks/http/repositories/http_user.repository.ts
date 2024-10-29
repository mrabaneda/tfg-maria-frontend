// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "@/src/core/domain/value_objects/types";
import { UserEntity } from "@/src/core/domain/entities/user.entity";
import { UserCreateModel } from "@/src/core/domain/models/user_create.model";
import { BaseUserRepository } from "@/src/core/domain/ports/repositories/user.repository";
import { BaseAuthService } from "@/src/core/domain/ports/services/auth.service";
import { axiosInstance } from "../services/axios.service";
import { UserFactory } from "../factory/user.factory";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class HttpUserRepository implements BaseUserRepository {
  constructor(private readonly authService: BaseAuthService) {}

  async get(): Promise<UserEntity[]> {
    const token = await this.authService.getUserToken();
    const response = await axiosInstance.get("user", { headers: { Authorization: `Bearer ${token}` } });
    return response.data.map(UserFactory.userDtoToEntity);
  }

  async delete(uid: UID): Promise<void> {
    const token = await this.authService.getUserToken();
    await axiosInstance.delete(`user/${uid}`, { headers: { Authorization: `Bearer ${token}` } });
  }

  async create(createModel: UserCreateModel): Promise<void> {
    const token = await this.authService.getUserToken();
    await axiosInstance.post("user", UserFactory.userCreateModelToFormData(createModel), {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { HttpUserRepository };
