// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UserEntity } from "@/src/core/domain/entities/user.entity";
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
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { HttpUserRepository };
