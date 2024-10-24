// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { LoginEntity } from "@/src/core/domain/entities/login.entity";
import { BaseLoginRepository } from "@/src/core/domain/ports/repositories/login.repository";
import { BaseAuthService } from "@/src/core/domain/ports/services/auth.service";
import { UID } from "@/src/core/domain/value_objects/types";
import { axiosInstance } from "../services/axios.service";
import { LoginFactory } from "../factory/login.factory";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class HttpLoginRepository implements BaseLoginRepository {
  constructor(private readonly authService: BaseAuthService) {}

  async getOneOrFail(uid: UID): Promise<LoginEntity> {
    const token = await this.authService.getUserToken();
    const response = await axiosInstance.get(`login/${uid}`, { headers: { Authorization: `Bearer ${token}` } });
    return LoginFactory.loginDtoToEntity(response.data);
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { HttpLoginRepository };
